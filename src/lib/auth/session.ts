import {
  authSecret,
  isAdminEmail,
  sessionTtlSeconds,
} from "@/lib/auth/config";
import { sessionSchema, type Session } from "@/lib/schema/session";

/**
 * The session cookie: a JSON payload with an HMAC-SHA256 tag appended.
 *
 * Stateless on purpose. A session store would be a table whose rows say
 * nothing a signed cookie cannot, and a stateless token can be verified inside
 * `proxy.ts` without a data round trip — which is what keeps the guard on
 * /admin free.
 *
 * Web Crypto only, no `node:crypto`, because the same verification runs in the
 * proxy runtime as in Server Actions.
 */

export type { Session };

/**
 * Whether this session may administer the directory.
 *
 * Both halves are re-tested here and only one of them is in the token:
 *
 *   • `role === "admin"` — the administrator password was typed. A fact about
 *     the past, which the server cannot re-derive, so it is carried.
 *   • `isAdminEmail(session.email)` — the address is on the list *now*, read
 *     from the environment on every call, never stamped into the cookie.
 *
 * That second check is the whole reason the address is collected. A claim
 * baked into a token outlives the decision that granted it; this one does not.
 */
export function canAdminister(session: Session | null | undefined): boolean {
  if (!session || session.role !== "admin") return false;
  return isAdminEmail(session.email);
}

/**
 * The signing key.
 *
 * Development falls back to a fixed string so a fresh clone opens locally. In
 * production it stays empty when unset, and an empty key disables sign-in
 * altogether — `signSession` throws and `readSessionToken` returns null —
 * rather than silently signing cookies with something guessable.
 */
function secret(): string {
  if (authSecret) return authSecret;
  return process.env.NODE_ENV === "production" ? "" : "dev-only-insecure-secret";
}

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(value: string): Uint8Array {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded.padEnd(Math.ceil(padded.length / 4) * 4, "="));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function hmac(payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(payload),
  );
  return base64UrlEncode(new Uint8Array(signature));
}

/** Constant-time string compare, for the signature. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export type NewSession = Omit<Session, "v" | "exp">;

export async function signSession(input: NewSession): Promise<string> {
  if (!secret()) {
    throw new Error("AUTH_SECRET is not set; refusing to sign a session.");
  }
  const session: Session = {
    ...input,
    v: 1,
    exp: Math.floor(Date.now() / 1000) + sessionTtlSeconds,
  };
  const payload = base64UrlEncode(
    new TextEncoder().encode(JSON.stringify(session)),
  );
  return `${payload}.${await hmac(payload)}`;
}

/**
 * Verify a token and return the session inside it, or null.
 *
 * Every failure returns null rather than throwing: a malformed cookie is an
 * anonymous visitor, not a server error, and an exception here would turn a
 * stale cookie into a 500 on every page.
 *
 * Order matters. The signature is checked *before* the payload is parsed, so
 * `JSON.parse` and the schema only ever see bytes this server produced.
 */
export async function readSessionToken(
  token: string | undefined | null,
): Promise<Session | null> {
  if (!token || !secret()) return null;

  const separator = token.lastIndexOf(".");
  if (separator <= 0) return null;

  const payload = token.slice(0, separator);
  const signature = token.slice(separator + 1);
  if (!safeEqual(signature, await hmac(payload))) return null;

  try {
    const decoded = JSON.parse(new TextDecoder().decode(base64UrlDecode(payload)));
    const parsed = sessionSchema.safeParse(decoded);
    if (!parsed.success) return null;
    // Expiry is inside the signed payload, so this cannot be extended by the
    // holder — only re-issued by the server.
    if (parsed.data.exp * 1000 <= Date.now()) return null;
    return parsed.data;
  } catch {
    return null;
  }
}
