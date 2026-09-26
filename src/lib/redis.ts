/**
 * The one Redis connection, and the one place key names are decided.
 *
 * Upstash's REST API has no `SELECT`: a URL and token address exactly one
 * keyspace, and there is no `db 1` to move a second project into. So when two
 * sites share a database the only thing keeping them apart is the shape of
 * their key names — and a convention nobody wrote down lasts until the next
 * person picks an obvious name that was already taken.
 *
 * Hence exactly one function, `appKey`, and no way around it. There is
 * deliberately no unprefixed variant: a sibling of this project added one so
 * two sites could share rows, and the result was that a neighbour's keys could
 * reach back into it. Isolation here is not the default, it is the only
 * option.
 */

/**
 * Either pair of names works. `KV_*` is what Vercel's own KV integration sets
 * on a linked project; `UPSTASH_*` is what the Upstash console hands you. Read
 * once at module load — these are deployment configuration, not something that
 * changes between requests.
 */
// `||`, not `??`: an env file with `KV_REST_API_URL=` left blank (as
// .env.example ships) must fall through to the UPSTASH_* pair, not win with "".
//
// Quotes are stripped because `.env` files allow `KEY="value"` and drop them,
// but a hosting dashboard keeps whatever is pasted — so the same line copied
// into Vercel arrives as `"https://…"`, which the SDK rejects as a URL.
function envValue(name: string): string | undefined {
  const raw = process.env[name]?.trim();
  if (!raw) return undefined;
  const unquoted = raw.replace(/^(["'])(.*)\1$/, "$2").trim();
  return unquoted || undefined;
}

/**
 * The REST URL, from whichever variable is set.
 *
 * Accepts the `rediss://default:…@host:6379` connection string the Upstash
 * console also shows, since it is an easy one to paste by mistake: the REST
 * endpoint is the same host over https. Anything else is a configuration
 * error, reported by name — never by value, which may hold the password.
 */
function restUrl(): string | undefined {
  for (const name of ["KV_REST_API_URL", "UPSTASH_REDIS_REST_URL"]) {
    const value = envValue(name);
    if (!value) continue;
    if (/^https:\/\//i.test(value)) return value;
    const conn = value.match(/^rediss?:\/\/(?:[^@/]*@)?([^:/?#]+)/i);
    if (conn) return `https://${conn[1]}`;
    throw new Error(
      `${name} must be the Upstash REST URL, starting with https:// (it is set, but to something else).`,
    );
  }
  return undefined;
}

const redisUrl = restUrl();
const redisToken = envValue("KV_REST_API_TOKEN") || envValue("UPSTASH_REDIS_REST_TOKEN");

/**
 * This site's namespace inside a possibly shared database.
 *
 * Defaults to `dp`. That default is load-bearing rather than cosmetic: an
 * unset variable must not silently rejoin a neighbour's namespace, least of
 * all the sign-in rate limiter's, where a stranger failing logins on another
 * site would spend this site's attempts for that address and the doctor turned
 * away here would be told to wait for something they never did.
 *
 * The trailing colon is added here rather than expected in the value, because
 * a variable typed into a hosting dashboard will be `dp` about as often as
 * `dp:` and the difference should not quietly produce a second namespace.
 *
 * Changing it after rows exist orphans them: the old keys stay in the database
 * and nothing will look for them again. It is a name, not a tuning knob.
 */
const prefix = (() => {
  const configured = (process.env.KV_PREFIX ?? "dp").trim();
  if (!configured) return "";
  return configured.endsWith(":") ? configured : `${configured}:`;
})();

/**
 * The commands this site uses, and nothing else.
 *
 * Narrower than the Upstash client on purpose: it is what the development file
 * store (`local-store.ts`) implements, so anything that compiles against this
 * runs the same against either backend.
 */
export interface Store {
  get<T = string>(key: string): Promise<T | null>;
  mget<T = string>(...keys: string[]): Promise<(T | null)[]>;
  set(
    key: string,
    value: string,
    opts?: { nx?: boolean; ex?: number },
  ): Promise<string | null>;
  del(...keys: string[]): Promise<number>;
  incr(key: string): Promise<number>;
  expire(key: string, seconds: number): Promise<number>;
  ttl(key: string): Promise<number>;
  zadd(key: string, entry: { score: number; member: string }): Promise<number | null>;
  zrem(key: string, ...members: string[]): Promise<number>;
  zrange(
    key: string,
    start: number,
    stop: number,
    opts?: { rev?: boolean },
  ): Promise<string[]>;
}

export type StorageMode = "upstash" | "local" | "none";

/**
 * Where writes go.
 *
 * `local` is the development file store: used by `next dev` when no Upstash
 * credentials are set, unless LOCAL_STORE=0. Never in production, where a
 * local file is per-instance and wiped on deploy.
 */
export function storageMode(): StorageMode {
  if (redisUrl && redisToken) return "upstash";
  if (process.env.NODE_ENV !== "production" && process.env.LOCAL_STORE !== "0") {
    return "local";
  }
  return "none";
}

/**
 * One client, built on first use.
 *
 * Dynamically imported rather than imported at the top, so a module that only
 * wanted a key name does not drag the Upstash SDK into its bundle. It also
 * keeps the SDK out of the proxy runtime, which verifies sessions without ever
 * touching this file.
 */
let client: Store | undefined;
let seeding: Promise<void> | undefined;

export async function getRedis(): Promise<Store | undefined> {
  const mode = storageMode();
  if (mode === "none") return undefined;
  if (!client) {
    if (mode === "upstash") {
      const { Redis } = await import("@upstash/redis");
      // Every caller here writes JSON strings and parses them explicitly on
      // the way out. Letting the SDK guess would mean a record whose type
      // depends on what it happened to look like.
      client = new Redis({
        url: redisUrl!,
        token: redisToken!,
        automaticDeserialization: false,
      }) as unknown as Store;
    } else {
      const { createLocalStore } = await import("@/lib/local-store");
      client = createLocalStore();
    }
  }
  if (mode === "local") {
    // A fresh (or reset) local store starts as the demo roster, so the
    // directory looks the same before and after the first save. Checked on
    // every call — it is one in-memory lookup — so deleting the file resets it.
    const store = client;
    if (!seeding && !(await store.get(appKey("meta:seeded")))) {
      seeding = (async () => {
        const { seedDemoData } = await import("@/lib/data/seed");
        await seedDemoData(store);
      })().finally(() => {
        seeding = undefined;
      });
    }
    if (seeding) await seeding;
  }
  return client;
}

/** A key belonging to this site alone. Everything goes through here. */
export function appKey(name: string): string {
  return `${prefix}${name}`;
}

/**
 * Whether a durable store is configured at all.
 *
 * The catalogue falls back to fixtures when it is not, which is right in
 * development and quietly wrong on serverless, where the filesystem is
 * per-instance and wiped by every deploy. The admin screen surfaces this so
 * the difference is visible rather than discovered. Authentication does not
 * fall back: no fixture ever holds a password hash.
 */
export function isRedisConfigured(): boolean {
  return storageMode() !== "none";
}

/** The active namespace, for the admin diagnostics screen. */
export function keyPrefix(): string {
  return prefix;
}
