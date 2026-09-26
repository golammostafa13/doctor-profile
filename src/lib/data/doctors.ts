import "server-only";
import { cache } from "react";
import { appKey, getRedis } from "@/lib/redis";
import {
  doctorCardSchema,
  doctorProfileSchema,
  doctorRecordSchema,
  type DoctorCard,
  type DoctorProfile,
  type DoctorRecord,
} from "@/lib/schema/doctor";

/**
 * The single seam every page reads doctors through.
 *
 * The shape of this module is the whole reason the site fits in a free tier.
 * Upstash meters *commands*, not bytes, and the dominant traffic is reads of
 * pages that barely change. So there is one canonical record per doctor, plus
 * pre-materialised documents that each answer a whole page in a single GET:
 *
 *   dp:doctor:<id>        canonical, PRIVATE — carries the password hash
 *   dp:profile:<linkNo>   the public profile page, in one value
 *   dp:cache:directory    every card, for the list, all filters, all sorts,
 *                         search, the sitemap and generateStaticParams
 *
 * A write costs about five commands. A read costs one. Combined with ISR, ten
 * thousand visitors to the directory cost three commands per revalidation
 * window rather than thirty thousand.
 *
 * Without Redis configured, everything falls back to the committed fixtures,
 * which is what lets the demo run with no accounts anywhere. Reads work;
 * writes do not persist, and `canPersist()` says so rather than pretending.
 */

const KEY = {
  record: (id: string) => appKey(`doctor:${id}`),
  index: () => appKey("doctors:index"),
  byEmail: (email: string) => appKey(`idx:email:${email}`),
  byLink: (linkNo: string) => appKey(`idx:link:${linkNo}`),
  bySlug: (slug: string) => appKey(`idx:slug:${slug}`),
  profile: (linkNo: string) => appKey(`profile:${linkNo}`),
  directory: () => appKey("cache:directory"),
} as const;

export interface DirectoryDoc {
  rev: number;
  builtAt: number;
  items: DoctorCard[];
}

export async function canPersist(): Promise<boolean> {
  return Boolean(await getRedis());
}

/**
 * Reduce a record to its card.
 *
 * Done once on write rather than on every render, because the card is what
 * lands in the shared directory document and a field computed there is a field
 * computed for the whole roster.
 */
export function toCard(record: DoctorRecord): DoctorCard {
  return doctorCardSchema.parse({
    id: record.id,
    linkNo: record.linkNo,
    slug: record.slug,
    name: record.name,
    speciality: record.speciality,
    designation: record.designation,
    workplace: record.workplace,
    degreesShort: record.degrees.join(", ").slice(0, 160),
    photoUrl: record.photo?.url ?? null,
    specialityIds: record.specialityIds,
    hospitalIds: record.hospitalIds,
    locationIds: record.locationIds,
    chamberCount: record.chambers.length,
    featured: record.featured,
    order: record.order,
    status: record.status,
    updatedAt: record.updatedAt,
  });
}

export function toProfile(record: DoctorRecord): DoctorProfile {
  return doctorProfileSchema.parse(record);
}

/**
 * Derive the filterable ids from the chambers.
 *
 * Denormalised onto the record so the directory can filter by hospital or
 * district without reading every doctor's chambers. Recomputed on every write
 * rather than maintained incrementally: it is cheap, and the alternative is a
 * denormalisation that silently drifts out of step with its source.
 */
export function deriveFilterIds(record: {
  chambers: DoctorRecord["chambers"];
}): { hospitalIds: string[]; locationIds: string[] } {
  const hospitals = new Set<string>();
  const locations = new Set<string>();
  for (const chamber of record.chambers) {
    if (chamber.hospitalId) hospitals.add(chamber.hospitalId);
    if (chamber.locationId) locations.add(chamber.locationId);
  }
  return { hospitalIds: [...hospitals], locationIds: [...locations] };
}

async function fixtures(): Promise<DoctorRecord[]> {
  const { demoDoctors } = await import("@/lib/fixtures/doctors");
  return demoDoctors;
}

/**
 * Every card, in one read.
 *
 * `React.cache` dedupes this within a single render, so the header count, the
 * grid, the "similar doctors" rail and the footer all share one GET.
 */
export const getDirectory = cache(async (): Promise<DirectoryDoc> => {
  const redis = await getRedis();
  if (redis) {
    const raw = await redis.get<string>(KEY.directory());
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as DirectoryDoc;
        return {
          rev: parsed.rev ?? 0,
          builtAt: parsed.builtAt ?? 0,
          items: parsed.items.map((item) => doctorCardSchema.parse(item)),
        };
      } catch {
        // A corrupt cache document is recoverable: it is derived data, and
        // rebuilding from the index is always possible. Falling through beats
        // a 500 on the home page.
      }
    }
  }
  const records = await fixtures();
  return { rev: 0, builtAt: 0, items: records.map(toCard) };
});

/** Only the doctors a visitor may see. Hidden and suspended are not. */
export const getPublicCards = cache(async (): Promise<DoctorCard[]> => {
  const { items } = await getDirectory();
  return items
    .filter((item) => item.status === "active")
    .sort(
      (a, b) =>
        Number(b.featured) - Number(a.featured) ||
        a.order - b.order ||
        a.name.en.localeCompare(b.name.en),
    );
});

export const getProfileByLinkNo = cache(
  async (linkNo: string): Promise<DoctorProfile | null> => {
    const redis = await getRedis();
    if (redis) {
      const raw = await redis.get<string>(KEY.profile(linkNo));
      if (raw) {
        const parsed = doctorProfileSchema.safeParse(JSON.parse(raw));
        if (parsed.success) return parsed.data;
      }
      return null;
    }
    const records = await fixtures();
    const found = records.find((record) => record.linkNo === linkNo);
    return found ? toProfile(found) : null;
  },
);

/** The canonical record, hash included. Never hand this to a page. */
export async function getRecord(id: string): Promise<DoctorRecord | null> {
  const redis = await getRedis();
  if (redis) {
    const raw = await redis.get<string>(KEY.record(id));
    if (!raw) return null;
    const parsed = doctorRecordSchema.safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : null;
  }
  const records = await fixtures();
  return records.find((record) => record.id === id) ?? null;
}

/** The only lookup path for doctor sign-in. */
export async function getRecordByEmail(
  email: string,
): Promise<DoctorRecord | null> {
  const normalised = email.trim().toLowerCase();
  const redis = await getRedis();
  if (redis) {
    const id = await redis.get<string>(KEY.byEmail(normalised));
    return id ? getRecord(id) : null;
  }
  const records = await fixtures();
  return records.find((record) => record.email === normalised) ?? null;
}

export async function getIdBySlug(slug: string): Promise<string | null> {
  const redis = await getRedis();
  if (redis) return redis.get<string>(KEY.bySlug(slug));
  const records = await fixtures();
  return records.find((record) => record.slug === slug)?.id ?? null;
}

/**
 * Reserve a nine-digit public id.
 *
 * `SET NX` is what makes this a reservation rather than a hope: the winner of
 * the race is whoever's write lands first, and the loser tries again. Random
 * rather than sequential, because sequential ids let anyone enumerate the
 * roster by counting.
 *
 * With a hundred doctors against nine hundred million values, a collision on
 * the first attempt is about one in ten million; eight attempts is paranoia,
 * not tuning.
 */
export async function reserveLinkNo(id: string): Promise<string> {
  const redis = await getRedis();
  for (let attempt = 0; attempt < 8; attempt++) {
    const candidate = String(
      100_000_000 + Math.floor(Math.random() * 899_999_999),
    );
    if (!redis) return candidate;
    const won = await redis.set(KEY.byLink(candidate), id, { nx: true });
    if (won) return candidate;
  }
  throw new Error("Could not reserve a link number after 8 attempts.");
}

/**
 * Write a record and refresh everything derived from it.
 *
 * The directory document is *patched* — read, splice one card, write — rather
 * than rebuilt from the index. Rebuilding would cost one command per doctor on
 * every profile edit, which is how a free tier gets spent.
 */
export async function putRecord(record: DoctorRecord): Promise<void> {
  const redis = await getRedis();
  if (!redis) {
    throw new Error(
      "No Redis configured: this deployment cannot save changes. Set KV_REST_API_URL and KV_REST_API_TOKEN.",
    );
  }

  const derived = deriveFilterIds(record);
  const next: DoctorRecord = { ...record, ...derived, updatedAt: Date.now() };

  await redis.set(KEY.record(next.id), JSON.stringify(next));
  await redis.set(KEY.profile(next.linkNo), JSON.stringify(toProfile(next)));
  await redis.zadd(KEY.index(), { score: next.createdAt, member: next.id });

  const doc = await getDirectoryUncached();
  const card = toCard(next);
  const items = doc.items.filter((item) => item.id !== next.id);
  items.push(card);
  await redis.set(
    KEY.directory(),
    JSON.stringify({ rev: doc.rev + 1, builtAt: Date.now(), items }),
  );
}

/**
 * Write only the private record — for fields no page shows (sign-in time,
 * a rehashed password). Skips the profile and directory rewrite, and leaves
 * `updatedAt` alone, so signing in does not count as an edit.
 */
export async function putRecordOnly(record: DoctorRecord): Promise<void> {
  const redis = await getRedis();
  if (!redis) return;
  await redis.set(KEY.record(record.id), JSON.stringify(record));
}

/** The same read as `getDirectory`, without the per-render memo. */
async function getDirectoryUncached(): Promise<DirectoryDoc> {
  const redis = await getRedis();
  if (!redis) return { rev: 0, builtAt: 0, items: [] };
  const raw = await redis.get<string>(KEY.directory());
  if (!raw) return { rev: 0, builtAt: 0, items: [] };
  try {
    const parsed = JSON.parse(raw) as DirectoryDoc;
    return { rev: parsed.rev ?? 0, builtAt: parsed.builtAt ?? 0, items: parsed.items ?? [] };
  } catch {
    return { rev: 0, builtAt: 0, items: [] };
  }
}

/** Claim an address for a doctor. Returns false if it is already taken. */
export async function claimEmail(email: string, id: string): Promise<boolean> {
  const redis = await getRedis();
  if (!redis) return true;
  const won = await redis.set(KEY.byEmail(email.trim().toLowerCase()), id, {
    nx: true,
  });
  return Boolean(won);
}

export async function claimSlug(slug: string, id: string): Promise<boolean> {
  const redis = await getRedis();
  if (!redis) return true;
  return Boolean(await redis.set(KEY.bySlug(slug), id, { nx: true }));
}

export async function deleteRecord(record: DoctorRecord): Promise<void> {
  const redis = await getRedis();
  if (!redis) throw new Error("No Redis configured: cannot delete.");

  await redis.del(
    KEY.record(record.id),
    KEY.profile(record.linkNo),
    KEY.byEmail(record.email),
    KEY.byLink(record.linkNo),
    KEY.bySlug(record.slug),
  );
  await redis.zrem(KEY.index(), record.id);

  const doc = await getDirectoryUncached();
  await redis.set(
    KEY.directory(),
    JSON.stringify({
      rev: doc.rev + 1,
      builtAt: Date.now(),
      items: doc.items.filter((item) => item.id !== record.id),
    }),
  );
}

/**
 * Every canonical record, newest first. Admin only — these carry the hash.
 *
 * One ZRANGE and one MGET: two commands whatever the roster size, which is
 * what the index exists for.
 */
export async function listRecords(): Promise<DoctorRecord[]> {
  const redis = await getRedis();
  if (!redis) return fixtures();
  const ids = await redis.zrange(KEY.index(), 0, -1, { rev: true });
  if (ids.length === 0) return [];
  const raws = await redis.mget<string>(...ids.map((id) => KEY.record(id)));
  const out: DoctorRecord[] = [];
  for (const raw of raws) {
    if (!raw) continue;
    const parsed = doctorRecordSchema.safeParse(JSON.parse(raw));
    if (parsed.success) out.push(parsed.data);
  }
  return out;
}

/**
 * Rebuild the directory document and every public profile from the records.
 *
 * The recovery path for a directory that has drifted from its source — a
 * failed write between the record and the patch, or a document edited by
 * hand. Costs a few commands per doctor, so it is a button, not a habit.
 */
export async function rebuildDirectory(): Promise<number> {
  const redis = await getRedis();
  if (!redis) throw new Error("No store configured: nothing to rebuild.");
  const records = await listRecords();
  for (const record of records) {
    await redis.set(KEY.profile(record.linkNo), JSON.stringify(toProfile(record)));
  }
  const doc = await getDirectoryUncached();
  await redis.set(
    KEY.directory(),
    JSON.stringify({ rev: doc.rev + 1, builtAt: Date.now(), items: records.map(toCard) }),
  );
  return records.length;
}

/**
 * Give up a claimed address or slug — only if this doctor still holds it, so
 * a stale call cannot free a key someone else has since claimed.
 */
export async function releaseClaim(
  kind: "email" | "slug",
  value: string,
  id: string,
): Promise<void> {
  const redis = await getRedis();
  if (!redis) return;
  const key = kind === "email" ? KEY.byEmail(value.trim().toLowerCase()) : KEY.bySlug(value);
  if ((await redis.get<string>(key)) === id) await redis.del(key);
}

export { KEY as doctorKeys };
