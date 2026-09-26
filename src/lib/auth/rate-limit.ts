import { appKey, getRedis } from "@/lib/redis";

/**
 * Fixed-window rate limits on the door.
 *
 * Two dimensions, and the second is a real departure from the sibling
 * projects, which limit by IP alone:
 *
 *   • **By address (IP).** Stops one machine grinding through passwords.
 *   • **By account (email).** With per-doctor passwords, IP-only limiting
 *     fails in both directions. A hospital behind one NAT spends a single
 *     budget, so one doctor fat-fingering their password locks out their
 *     colleagues; and a botnet spreads attempts across thousands of addresses
 *     to hammer one doctor while never tripping any per-IP counter.
 *
 * The email is hashed into the key, so the key space does not become a
 * readable list of who has an account here. On a public directory the names
 * are already public — but which of them can *sign in* is not, and a Redis
 * browser should not be the thing that tells you.
 *
 * `INCR` plus `EXPIRE` on first write is atomic enough for this: the worst
 * race lets one extra attempt through, and the point is to make ten thousand
 * attempts impossible, not to make the eleventh one impossible.
 */

const IP_WINDOW_SECONDS = 10 * 60;
const IP_MAX_ATTEMPTS = 10;

const ACCOUNT_WINDOW_SECONDS = 15 * 60;
const ACCOUNT_MAX_ATTEMPTS = 5;

/**
 * The fallback store.
 *
 * Per-instance and forgotten on restart, which on serverless means the limit
 * becomes "ten per lambda" rather than "ten per address". That is a real
 * weakness and the reason the Redis path exists; it is still enormously better
 * than nothing, and it is exactly right in development.
 */
const local = new Map<string, { count: number; resetAt: number }>();

/**
 * The client's address, as well as it can be known.
 *
 * `x-forwarded-for` is a list appended to by each hop; the first entry is what
 * the edge saw. A client can forge it, so this raises the cost of a brute
 * force rather than making one impossible — layered defence, not a boundary.
 *
 * The fallback is a single shared bucket rather than "unlimited": an
 * unattributable request still gets counted, just counted together with every
 * other unattributable request.
 */
export function clientAddress(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return headers.get("x-real-ip")?.trim() || "unknown";
}

export interface RateLimitResult {
  ok: boolean;
  /** Whole seconds until the window rolls over. Shown to whoever is waiting. */
  retryAfterSeconds: number;
}

async function hit(
  key: string,
  windowSeconds: number,
  maxAttempts: number,
): Promise<RateLimitResult> {
  const redis = await getRedis();

  if (redis) {
    try {
      const full = appKey(key);
      const count = await redis.incr(full);
      if (count === 1) await redis.expire(full, windowSeconds);
      if (count <= maxAttempts) return { ok: true, retryAfterSeconds: 0 };
      const ttl = await redis.ttl(full);
      return {
        ok: false,
        retryAfterSeconds: ttl > 0 ? ttl : windowSeconds,
      };
    } catch {
      // Fall through to the local map. A cache having a bad minute must not
      // lock every doctor out of their own profile: this fails OPEN, on
      // purpose, because the failure mode of failing closed here is a total
      // outage of sign-in caused by an unrelated service.
    }
  }

  const now = Date.now();
  const entry = local.get(key);
  if (!entry || entry.resetAt <= now) {
    local.set(key, { count: 1, resetAt: now + windowSeconds * 1000 });
    return { ok: true, retryAfterSeconds: 0 };
  }
  entry.count += 1;
  if (entry.count <= maxAttempts) return { ok: true, retryAfterSeconds: 0 };
  return {
    ok: false,
    retryAfterSeconds: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)),
  };
}

export async function checkAddressAttempt(
  address: string,
): Promise<RateLimitResult> {
  return hit(`door:ip:${address}`, IP_WINDOW_SECONDS, IP_MAX_ATTEMPTS);
}

/** The email is hashed so the keyspace does not leak the roster. */
export async function checkAccountAttempt(
  email: string,
): Promise<RateLimitResult> {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(email.trim().toLowerCase()),
  );
  const hex = [...new Uint8Array(digest)]
    .slice(0, 8)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hit(`door:acct:${hex}`, ACCOUNT_WINDOW_SECONDS, ACCOUNT_MAX_ATTEMPTS);
}

/** For the public application form, which is a different kind of abuse. */
export async function checkApplicationAttempt(
  address: string,
): Promise<RateLimitResult> {
  return hit(`apply:ip:${address}`, 60 * 60, 5);
}
