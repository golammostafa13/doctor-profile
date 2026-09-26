import "server-only";
import { cache } from "react";
import { appKey, getRedis } from "@/lib/redis";
import { adsDocSchema, type Ad, type AdSlot, type AdsDoc } from "@/lib/schema/ads";

/**
 * Every advertisement, in one document (`dp:ads`).
 *
 * One read serves every slot on a page; which creatives are live is a filter
 * in memory. No fixture fallback — an empty site shows no advertisements,
 * which is the correct default.
 */

const KEY = () => appKey("ads");

export const getAds = cache(async (): Promise<AdsDoc> => {
  const redis = await getRedis();
  if (redis) {
    const raw = await redis.get<string>(KEY());
    if (raw) {
      const parsed = adsDocSchema.safeParse(JSON.parse(raw));
      if (parsed.success) return parsed.data;
    }
  }
  return { rev: 0, updatedAt: 0, items: [] };
});

export async function saveAds(items: Ad[]): Promise<void> {
  const redis = await getRedis();
  if (!redis) throw new Error("No store configured: cannot save advertisements.");
  const current = await getAds();
  const next = adsDocSchema.parse({
    rev: current.rev + 1,
    updatedAt: Date.now(),
    items,
  });
  await redis.set(KEY(), JSON.stringify(next));
}

export type AdState = "live" | "scheduled" | "ended" | "off";

/** Where an advertisement stands right now. */
export function adState(ad: Ad, now = Date.now()): AdState {
  if (!ad.enabled) return "off";
  if (ad.activeFrom !== null && ad.activeFrom > now) return "scheduled";
  if (ad.activeUntil !== null && ad.activeUntil <= now) return "ended";
  return "live";
}

/**
 * One live creative for a slot, chosen by weight.
 *
 * Weighted rather than rotated in order, because the page is statically
 * rendered: "next in line" would mean "whichever was next when the page was
 * last built", which is not a rotation anyone paid for.
 */
export function pickAd(items: Ad[], slot: AdSlot, now = Date.now()): Ad | null {
  const candidates = items.filter(
    (ad) => ad.slot === slot && adState(ad, now) === "live" && ad.weight > 0,
  );
  if (candidates.length === 0) return null;
  const total = candidates.reduce((sum, ad) => sum + ad.weight, 0);
  let roll = Math.random() * total;
  for (const ad of candidates) {
    roll -= ad.weight;
    if (roll < 0) return ad;
  }
  return candidates[candidates.length - 1];
}
