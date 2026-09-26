/**
 * Locales.
 *
 * The language lives in the URL (`/en/doctors`, `/bn/doctors`) rather than in
 * a cookie. Three reasons that matters here:
 *
 *   1. Every page stays statically prerenderable per language. A cookie read
 *      would opt the whole directory out of the cache, and that cache is the
 *      entire reason this runs inside a free tier.
 *   2. A Bengali page gets a real, crawlable, linkable address, so it can rank
 *      in Bengali search rather than hiding behind a toggle. For a directory
 *      whose whole job is being found, that is the point.
 *   3. Sharing a doctor's profile shares the language you were reading it in.
 *
 * Deliberately free of server-only imports: the header, the language switch
 * and the filter bar are all Client Components and all need this.
 */

export const locales = ["en", "bn"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function hasLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "bn";
}

/** How each language names itself: never translated. */
export const localeNames: Record<Locale, { short: string; full: string }> = {
  en: { short: "EN", full: "English" },
  bn: { short: "বাং", full: "বাংলা" },
};

/**
 * Prefixes an app path with the locale.
 *
 * Pass paths as they appear in the routes ("/doctors", "/doctors/101993725",
 * "/") and never hand-build the prefix, so adding a third language stays a
 * one-file change.
 */
export function localePath(lang: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${clean}`;
}

/** Swaps the locale on a path that already carries one. For the switch. */
export function switchLocalePath(path: string, next: Locale): string {
  const segments = path.split("/").filter(Boolean);
  if (hasLocale(segments[0])) segments[0] = next;
  else segments.unshift(next);
  return `/${segments.join("/")}`;
}
