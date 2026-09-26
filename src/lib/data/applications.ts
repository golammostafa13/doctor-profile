import "server-only";
import { appKey, getRedis } from "@/lib/redis";
import {
  applicationRecordSchema,
  type ApplicationRecord,
} from "@/lib/schema/application";

/**
 * Requests to be listed, waiting for an administrator.
 *
 *   dp:application:<id>     one request
 *   dp:applications:index   sorted set of ids by submission time
 *
 * No fixture fallback: an application is a real person's request, and a demo
 * one would sit in the queue looking like something to act on.
 */

const KEY = {
  record: (id: string) => appKey(`application:${id}`),
  index: () => appKey("applications:index"),
} as const;

export async function listApplications(): Promise<ApplicationRecord[]> {
  const redis = await getRedis();
  if (!redis) return [];
  const ids = await redis.zrange(KEY.index(), 0, -1, { rev: true });
  if (ids.length === 0) return [];
  const raws = await redis.mget<string>(...ids.map(KEY.record));
  const out: ApplicationRecord[] = [];
  for (const raw of raws) {
    if (!raw) continue;
    const parsed = applicationRecordSchema.safeParse(JSON.parse(raw));
    if (parsed.success) out.push(parsed.data);
  }
  return out;
}

export async function getApplication(id: string): Promise<ApplicationRecord | null> {
  const redis = await getRedis();
  if (!redis) return null;
  const raw = await redis.get<string>(KEY.record(id));
  if (!raw) return null;
  const parsed = applicationRecordSchema.safeParse(JSON.parse(raw));
  return parsed.success ? parsed.data : null;
}

export async function putApplication(record: ApplicationRecord): Promise<void> {
  const redis = await getRedis();
  if (!redis) throw new Error("No store configured: cannot save the application.");
  const valid = applicationRecordSchema.parse(record);
  await redis.set(KEY.record(valid.id), JSON.stringify(valid));
  await redis.zadd(KEY.index(), { score: valid.submittedAt, member: valid.id });
}

export async function deleteApplication(id: string): Promise<void> {
  const redis = await getRedis();
  if (!redis) throw new Error("No store configured: cannot delete.");
  await redis.del(KEY.record(id));
  await redis.zrem(KEY.index(), id);
}
