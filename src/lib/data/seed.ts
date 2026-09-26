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

  const cards = new Map(existing.map((card) => [card.id, card]));
  for (const fixture of demoDoctors) {
    const record: DoctorRecord = { ...fixture, ...deriveFilterIds(fixture) };
    await store.set(doctorKeys.record(record.id), JSON.stringify(record));
    await store.set(doctorKeys.profile(record.linkNo), JSON.stringify(toProfile(record)));
    await store.zadd(doctorKeys.index(), { score: record.createdAt, member: record.id });
    await store.set(doctorKeys.byEmail(record.email), record.id);
    await store.set(doctorKeys.byLink(record.linkNo), record.id);
    await store.set(doctorKeys.bySlug(record.slug), record.id);
    cards.set(record.id, toCard(record));
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
  for (const post of demoPosts) {
    await store.set(blogKeys.post(post.id), JSON.stringify(post));
    await store.set(blogKeys.bySlug(post.slug), post.id);
    byId.set(post.id, toBlogCard(post));
  }
  await store.set(blogKeys.cards(), JSON.stringify([...byId.values()]));

  await store.set(appKey("meta:seeded"), String(Date.now()));
  return { doctors: demoDoctors.length };
}
