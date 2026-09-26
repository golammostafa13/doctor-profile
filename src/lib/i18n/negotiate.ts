import { defaultLocale, hasLocale, type Locale } from "@/lib/i18n/config";

/**
 * Pick a locale from an `Accept-Language` header.
 *
 * Runs once, in the proxy, on a request that arrived without a language in its
 * path. A Bengali reader typing the bare domain should land in Bengali; after
 * that the language is in the URL and every link carries it, so this never
 * runs again while browsing.
 *
 * Deliberately small: the header is a q-weighted list, and the only question
 * asked of it is which of two languages comes first. Anything more would be a
 * general-purpose negotiator for a two-item set.
 */
export function preferredLocale(header: string | null): Locale {
  if (!header) return defaultLocale;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith("q="))
        ?.slice(2);
      const quality = q === undefined ? 1 : Number.parseFloat(q);
      return {
        // "bn-BD" and "bn" both mean Bengali here.
        base: tag.trim().toLowerCase().split("-")[0],
        // A malformed q= is treated as unwanted rather than as the default 1,
        // so a broken header cannot outrank a well-formed one.
        quality: Number.isFinite(quality) ? quality : 0,
      };
    })
    .filter((entry) => entry.quality > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const entry of ranked) {
    if (hasLocale(entry.base)) return entry.base;
  }
  return defaultLocale;
}
