import "server-only";
import { appKey, type Store } from "@/lib/redis";
import { deriveFilterIds, doctorKeys, toCard, toProfile } from "@/lib/data/doctors";
import { blogKeys, toBlogCard } from "@/lib/data/blog";
import type { DoctorRecord } from "@/lib/schema/doctor";

/**
 * Write the committed demo roster and taxonomy into a store.
 *
 * Used twice: automatically when the development file store is first created,
 * and by hand from the admin System screen to fill an empty Upstash database.
 *
 * Takes the store as an argument and writes keys directly rather than going
 * through `putRecord`, because it runs *inside* `getRedis()` the first time —
 * calling anything that awaits `getRedis()` from here would wait on itself.
 *
 * Existing records with the same id are overwritten; nothing else is touched.
 */
export async function seedDemoData(store: Store): Promise<{ doctors: number }> {
  const [{ demoDoctors }, { demoTaxonomy }, { demoPosts }] = await Promise.all([
    import("@/lib/fixtures/doctors"),
    import("@/lib/fixtures/taxonomy"),
    import("@/lib/fixtures/blog"),
  ]);

  const existingRaw = await store.get<string>(doctorKeys.directory());
  let existing: ReturnType<typeof toCard>[] = [];
  try {
    existing = existingRaw ? (JSON.parse(existingRaw).items ?? []) : [];
  } catch {
    existing = [];
  }

  // Writes go out in parallel batches: each is an HTTPS round trip to Upstash
  // (~100ms from Dhaka), and six hundred of them one after another made the
  // admin's Import button look hung for over a minute.
  const writes: (() => Promise<unknown>)[] = [];
  const cards = new Map(existing.map((card) => [card.id, card]));
  for (const fixture of demoDoctors) {
    const record: DoctorRecord = { ...fixture, ...deriveFilterIds(fixture) };
    writes.push(
      () => store.set(doctorKeys.record(record.id), JSON.stringify(record)),
      () => store.set(doctorKeys.profile(record.linkNo), JSON.stringify(toProfile(record))),
      () => store.zadd(doctorKeys.index(), { score: record.createdAt, member: record.id }),
      () => store.set(doctorKeys.byEmail(record.email), record.id),
      () => store.set(doctorKeys.byLink(record.linkNo), record.id),
      () => store.set(doctorKeys.bySlug(record.slug), record.id),
    );
    cards.set(record.id, toCard(record));
  }
  for (let i = 0; i < writes.length; i += 40) {
    await Promise.all(writes.slice(i, i + 40).map((write) => write()));
  }

  await store.set(
    doctorKeys.directory(),
    JSON.stringify({ rev: 1, builtAt: Date.now(), items: [...cards.values()] }),
  );
  if (!(await store.get(appKey("taxonomy")))) {
    await store.set(appKey("taxonomy"), JSON.stringify(demoTaxonomy));
  }
  // Demo posts: merged into the card list, so real posts are kept.
  const rawCards = await store.get<string>(blogKeys.cards());
  let blogCards: ReturnType<typeof toBlogCard>[] = [];
  try {
    blogCards = rawCards ? JSON.parse(rawCards) : [];
  } catch {
    blogCards = [];
  }
  const byId = new Map(blogCards.map((c) => [c.id, c]));
  await Promise.all(
    demoPosts.flatMap((post) => {
      byId.set(post.id, toBlogCard(post));
      return [
        store.set(blogKeys.post(post.id), JSON.stringify(post)),
        store.set(blogKeys.bySlug(post.slug), post.id),
      ];
    }),
  );
  await store.set(blogKeys.cards(), JSON.stringify([...byId.values()]));

  await store.set(appKey("meta:seeded"), String(Date.now()));
  return { doctors: demoDoctors.length };
}
