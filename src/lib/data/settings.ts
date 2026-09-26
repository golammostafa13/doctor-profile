import "server-only";
import { cache } from "react";
import { appKey, getRedis } from "@/lib/redis";
import { settingsSchema, type SiteSettings } from "@/lib/schema/settings";
import { site } from "@/lib/site";

/**
 * Site settings (`dp:settings`): the sponsor credit, directory defaults and
 * the announcement bar.
 *
 * Falls back to `site.ts` rather than to nothing, because a sponsor credit
 * that vanishes when a read fails is a contractual problem, not a UI one.
 */

const KEY = () => appKey("settings");

export const defaultSettings: SiteSettings = {
  rev: 0,
  updatedAt: 0,
  sponsor: {
    enabled: true,
    company: { en: site.sponsor.company, bn: site.sponsor.companyBn },
    product: { en: site.sponsor.product, bn: site.sponsor.productBn },
    generic: { en: site.sponsor.generic, bn: site.sponsor.genericBn },
    courtesyLabel: { en: "Courtesy by", bn: "সৌজন্যে" },
    logo: null,
    pack: null,
    note: {
      en: "This is an advertisement. It is not medical advice, and it is not a recommendation by any doctor listed on this site.",
      bn: "এটি একটি বিজ্ঞাপন। এটি চিকিৎসা-পরামর্শ নয়, এবং এই সাইটে তালিকাভুক্ত কোনো ডাক্তারের সুপারিশও নয়।",
    },
  },
  directory: { perPage: 12, defaultSort: "featured" },
};

export const getSettings = cache(async (): Promise<SiteSettings> => {
  const redis = await getRedis();
  if (redis) {
    const raw = await redis.get<string>(KEY());
    if (raw) {
      const parsed = settingsSchema.safeParse(JSON.parse(raw));
      if (parsed.success) return parsed.data;
    }
  }
  return defaultSettings;
});

export async function saveSettings(next: Omit<SiteSettings, "rev" | "updatedAt">): Promise<void> {
  const redis = await getRedis();
  if (!redis) throw new Error("No store configured: cannot save settings.");
  const current = await getSettings();
  const valid = settingsSchema.parse({
    ...next,
    rev: current.rev + 1,
    updatedAt: Date.now(),
  });
  await redis.set(KEY(), JSON.stringify(valid));
}
