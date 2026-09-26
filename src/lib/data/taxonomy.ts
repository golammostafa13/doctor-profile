import "server-only";
import { cache } from "react";
import { appKey, getRedis } from "@/lib/redis";
import { taxonomySchema, type Taxonomy, type Term } from "@/lib/schema/taxonomy";

/**
 * Specialities, hospitals and districts — one document, one read.
 *
 * Every filter dropdown on the directory needs all three at once, so splitting
 * them across three keys would triple the cost of the page that uses them
 * most. A few hundred terms is JSON measured in kilobytes.
 */

const KEY = () => appKey("taxonomy");

export const getTaxonomy = cache(async (): Promise<Taxonomy> => {
  const redis = await getRedis();
  if (redis) {
    const raw = await redis.get<string>(KEY());
    if (raw) {
      const parsed = taxonomySchema.safeParse(JSON.parse(raw));
      if (parsed.success) return parsed.data;
    }
  }
  const { demoTaxonomy } = await import("@/lib/fixtures/taxonomy");
  return demoTaxonomy;
});

export async function saveTaxonomy(next: Taxonomy): Promise<void> {
  const redis = await getRedis();
  if (!redis) throw new Error("No Redis configured: cannot save taxonomy.");
  await redis.set(
    KEY(),
    JSON.stringify({ ...next, rev: next.rev + 1, updatedAt: Date.now() }),
  );
}

/**
 * Index a term list by id.
 *
 * Callers resolve ids to names constantly — a doctor card carries
 * `specialityIds`, not speciality names — and a linear `find` per card over a
 * two-hundred-term list is quadratic on a page showing the whole roster.
 */
export function byId(terms: Term[]): Map<string, Term> {
  return new Map(terms.map((term) => [term.id, term]));
}

/**
 * How many active doctors each term covers.
 *
 * Counted from the cards rather than stored on the term, because a stored
 * count is a denormalisation that drifts the moment a doctor is hidden. The
 * directory document is already in memory when this is called.
 */
export function countBy(
  cards: { specialityIds: string[]; hospitalIds: string[]; locationIds: string[] }[],
  field: "specialityIds" | "hospitalIds" | "locationIds",
): Map<string, number> {
  const counts = new Map<string, number>();
  for (const card of cards) {
    for (const id of card[field]) counts.set(id, (counts.get(id) ?? 0) + 1);
  }
  return counts;
}
