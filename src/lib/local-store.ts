import "server-only";
import { existsSync, mkdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import type { Store } from "@/lib/redis";

/**
 * A file on disk that answers the handful of Redis commands this site uses.
 *
 * Development only. Without it, a clone with no Upstash account can read the
 * demo roster but save nothing, which makes the admin screens a set of forms
 * that all fail — you cannot see whether an edit reaches the public profile
 * without an account somewhere. With it, `next dev` persists to
 * `.data/local-store.json` and every code path is the same one production
 * runs, down to the key names.
 *
 * Never used in production: a serverless filesystem is per-instance and wiped
 * on every deploy, so a write here would appear to succeed and then vanish.
 * `getRedis()` only builds this when NODE_ENV is not "production".
 *
 * The whole keyspace lives in memory and is flushed once per tick, so a burst
 * of writes (seeding a hundred doctors, one save touching five keys) costs one
 * file write. It sits on `globalThis` because Next can evaluate this module
 * more than once in a dev server — once per bundle — and two copies of the
 * keyspace would each overwrite the other's writes.
 */

interface Entry {
  /** String value, or null for a sorted set. */
  v: string | null;
  /** Sorted set members → score. */
  z?: Record<string, number>;
  /** Expiry, epoch ms. */
  exp?: number;
}

interface State {
  path: string;
  data: Record<string, Entry>;
  loadedMtime: number;
  flushQueued: boolean;
}

const FILE = join(process.cwd(), ".data", "local-store.json");

const holder = globalThis as unknown as { __dpLocalStore?: State };

function state(): State {
  const current = holder.__dpLocalStore;
  if (current?.flushQueued) return current;
  // Reload if something else — a second process, a hand edit — changed the
  // file since it was read. A deleted file is a reset: the keyspace starts
  // empty and `getRedis()` seeds the demo roster into it again.
  if (current && current.loadedMtime > 0 && !existsSync(current.path)) {
    holder.__dpLocalStore = undefined;
  } else if (current && existsSync(current.path)) {
    if (statSync(current.path).mtimeMs <= current.loadedMtime) return current;
  } else if (current) {
    return current;
  }
  let data: Record<string, Entry> = {};
  let loadedMtime = 0;
  if (existsSync(FILE)) {
    try {
      data = JSON.parse(readFileSync(FILE, "utf8")) as Record<string, Entry>;
      loadedMtime = statSync(FILE).mtimeMs;
    } catch {
      // A corrupt file is development data: start clean rather than refuse to
      // boot. The seed runs again on the next read.
      data = {};
    }
  }
  const next: State = { path: FILE, data, loadedMtime, flushQueued: false };
  holder.__dpLocalStore = next;
  return next;
}

function flush(s: State) {
  if (s.flushQueued) return;
  s.flushQueued = true;
  setImmediate(() => {
    s.flushQueued = false;
    mkdirSync(dirname(s.path), { recursive: true });
    const tmp = `${s.path}.tmp`;
    writeFileSync(tmp, JSON.stringify(s.data));
    renameSync(tmp, s.path);
    s.loadedMtime = statSync(s.path).mtimeMs;
  });
}

/** The live entry, or undefined when absent or expired. */
function live(s: State, key: string): Entry | undefined {
  const entry = s.data[key];
  if (!entry) return undefined;
  if (entry.exp !== undefined && entry.exp <= Date.now()) {
    delete s.data[key];
    flush(s);
    return undefined;
  }
  return entry;
}

export function localStorePath(): string {
  return FILE;
}

export function createLocalStore(): Store {
  return {
    async get<T = string>(key: string) {
      const entry = live(state(), key);
      return (entry?.v ?? null) as T | null;
    },

    async mget<T = string>(...keys: string[]) {
      const s = state();
      return keys.map((key) => (live(s, key)?.v ?? null) as T | null);
    },

    async set(key, value, opts) {
      const s = state();
      if (opts?.nx && live(s, key)) return null;
      s.data[key] = {
        v: String(value),
        exp: opts?.ex ? Date.now() + opts.ex * 1000 : undefined,
      };
      flush(s);
      return "OK";
    },

    async del(...keys: string[]) {
      const s = state();
      let removed = 0;
      for (const key of keys) {
        if (live(s, key)) {
          delete s.data[key];
          removed++;
        }
      }
      flush(s);
      return removed;
    },

    async incr(key: string) {
      const s = state();
      const entry = live(s, key);
      const value = Number(entry?.v ?? 0) + 1;
      s.data[key] = { v: String(value), exp: entry?.exp };
      flush(s);
      return value;
    },

    async expire(key: string, seconds: number) {
      const s = state();
      const entry = live(s, key);
      if (!entry) return 0;
      entry.exp = Date.now() + seconds * 1000;
      flush(s);
      return 1;
    },

    async ttl(key: string) {
      const entry = live(state(), key);
      if (!entry) return -2;
      if (entry.exp === undefined) return -1;
      return Math.max(0, Math.ceil((entry.exp - Date.now()) / 1000));
    },

    async zadd(key, { score, member }) {
      const s = state();
      const entry = live(s, key) ?? { v: null, z: {} };
      const added = member in (entry.z ?? {}) ? 0 : 1;
      entry.z = { ...entry.z, [member]: score };
      s.data[key] = entry;
      flush(s);
      return added;
    },

    async zrem(key: string, ...members: string[]) {
      const s = state();
      const entry = live(s, key);
      if (!entry?.z) return 0;
      let removed = 0;
      for (const member of members) {
        if (member in entry.z) {
          delete entry.z[member];
          removed++;
        }
      }
      flush(s);
      return removed;
    },

    async zrange(key, start, stop, opts) {
      const entry = live(state(), key);
      const members = Object.entries(entry?.z ?? {})
        .sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))
        .map(([member]) => member);
      if (opts?.rev) members.reverse();
      const end = stop < 0 ? members.length + stop + 1 : stop + 1;
      return members.slice(start, end);
    },
  };
}
