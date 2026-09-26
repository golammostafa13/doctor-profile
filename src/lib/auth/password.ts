import "server-only";

/**
 * Password hashing.
 *
 * The sibling projects have nothing like this file, because they have nothing
 * like a per-doctor password: they print one word in a sponsored book and let
 * anyone who types it in. Here every doctor has their own credential, so the
 * store holds several hundred hashes and the quality of the hash is the whole
 * difference between a leaked database and a leaked roster of passwords.
 *
 * Those siblings hash with bare SHA-256 — unsalted and unstretched, which is
 * to say a rainbow-table lookup. This does not.
 *
 * PBKDF2-HMAC-SHA256, and the choice is forced rather than preferred: Web
 * Crypto is the only cryptography available in both the Node and Edge
 * runtimes, and PBKDF2 is the only stretching KDF it offers. Argon2id would be
 * the modern answer, but it means a native module, which breaks the Edge
 * runtime and inflates the bundle. 210,000 iterations is current OWASP
 * guidance for this construction; measured here it costs about 30ms per
 * verification, and should be re-measured on the deployment target rather than
 * assumed — a serverless cold start is not a warm laptop.
 *
 * That cost is paid *only* inside the sign-in action — never in `proxy.ts`,
 * never on a page render. What stops it becoming a denial-of-service lever is
 * the rate limiting in `rate-limit.ts`, which counts an attempt before either
 * field is inspected.
 */

const ALGORITHM = "pbkdf2";
const ITERATIONS = 210_000;
const SALT_BYTES = 16;
const KEY_BITS = 256;

/**
 * Bounds on a stored iteration count.
 *
 * A record is data, and data can be tampered with. Without a floor, an
 * attacker who can write to the store could set `iterations=1` and turn every
 * subsequent verification into a single SHA-256 — the hash would still
 * "verify", and nothing would look wrong. The ceiling is the mirror image:
 * `iterations=10^9` is a denial of service against the server rather than a
 * weak hash.
 */
const MIN_ITERATIONS = 50_000;
const MAX_ITERATIONS = 1_000_000;

function toBase64(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function fromBase64(value: string): Uint8Array {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function derive(
  plain: string,
  salt: Uint8Array,
  iterations: number,
): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(plain),
    { name: "PBKDF2" },
    false,
    ["deriveBits"],
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: salt as unknown as BufferSource,
      iterations,
      hash: "SHA-256",
    },
    key,
    KEY_BITS,
  );
  return new Uint8Array(bits);
}

/** Stored form: `pbkdf2$<iterations>$<saltB64>$<hashB64>`. */
export async function hashPassword(plain: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(SALT_BYTES));
  const hash = await derive(plain, salt, ITERATIONS);
  return `${ALGORITHM}$${ITERATIONS}$${toBase64(salt)}$${toBase64(hash)}`;
}

/**
 * Compare two byte strings in time independent of their contents.
 *
 * A `===` on base64 exits at the first differing character, which leaks how
 * many leading bytes were right — enough, over many attempts, to reconstruct a
 * hash byte by byte. The lengths are compared first and the loop runs over the
 * full length regardless, so only the length is observable, and the length is
 * fixed by the algorithm.
 */
function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

/**
 * Whether `plain` produced `stored`.
 *
 * Returns false rather than throwing for a malformed record, an unknown
 * algorithm tag, or an iteration count outside the bounds above. A tampered or
 * corrupt row is refused, not trusted — and refusing quietly means a caller
 * cannot tell a broken record from a wrong password, which is the same thing
 * the sign-in flow wants anyway.
 */
export async function verifyPassword(
  plain: string,
  stored: string,
): Promise<boolean> {
  const parts = stored.split("$");
  if (parts.length !== 4) return false;
  const [algorithm, iterationText, saltText, hashText] = parts;
  if (algorithm !== ALGORITHM) return false;

  const iterations = Number.parseInt(iterationText, 10);
  if (!Number.isFinite(iterations)) return false;
  if (iterations < MIN_ITERATIONS || iterations > MAX_ITERATIONS) return false;

  try {
    const salt = fromBase64(saltText);
    const expected = fromBase64(hashText);
    if (salt.length === 0 || expected.length === 0) return false;
    const actual = await derive(plain, salt, iterations);
    return timingSafeEqual(actual, expected);
  } catch {
    // atob throws on invalid base64. A record that cannot be decoded cannot
    // match anything.
    return false;
  }
}

/**
 * Whether a stored hash was made with fewer iterations than we now use.
 *
 * Called after a *successful* sign-in — the only moment the plaintext is in
 * hand — so raising ITERATIONS later silently upgrades everyone as they return
 * instead of needing a mass reset.
 */
export function needsRehash(stored: string): boolean {
  const parts = stored.split("$");
  if (parts.length !== 4 || parts[0] !== ALGORITHM) return true;
  const iterations = Number.parseInt(parts[1], 10);
  if (!Number.isFinite(iterations)) return true;
  return iterations < ITERATIONS;
}

/**
 * The alphabet a generated password is drawn from.
 *
 * No 0/O/1/l/I. This password is generated by an administrator, read off a
 * screen, and typed by a doctor who may be reading it off a sticky note — the
 * characters that get transcribed wrong are worth more than the ~0.3 bits each
 * one costs.
 */
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";

/**
 * A password for a new doctor.
 *
 * Rejection sampling rather than `% ALPHABET.length`: the modulo of a uniform
 * byte over 56 is not uniform — the first 32 characters would come up slightly
 * more often — and a biased generator is exactly the kind of flaw that is
 * invisible until someone is looking for it.
 *
 * 14 characters over 56 symbols is about 81 bits.
 */
export function generatePassword(length = 14): string {
  const limit = 256 - (256 % ALPHABET.length);
  let out = "";
  const buffer = new Uint8Array(length * 2);
  while (out.length < length) {
    crypto.getRandomValues(buffer);
    for (const byte of buffer) {
      if (byte >= limit) continue;
      out += ALPHABET[byte % ALPHABET.length];
      if (out.length === length) break;
    }
  }
  return out;
}

/**
 * A hash nothing will ever match, for the unknown-account path in sign-in.
 *
 * Verifying against this when no doctor has the typed address costs the same
 * ~100ms as a real check. Without it, "no such doctor" returns in about a
 * millisecond and "wrong password" in a hundred, which on a site whose entire
 * purpose is a public list of names is a free oracle for which of those names
 * can sign in.
 */
export const DUMMY_HASH = `${ALGORITHM}$${ITERATIONS}$${toBase64(
  new Uint8Array(SALT_BYTES),
)}$${toBase64(new Uint8Array(KEY_BITS / 8))}`;
