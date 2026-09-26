import type { Locale } from "@/lib/i18n/config";

/**
 * Numbers, dates and years in the reader's own digits.
 *
 * A Bengali page that renders "1,234" has switched language but not script,
 * and the mismatch is conspicuous next to Bengali text. `Intl` already knows
 * how to write ১,২৩৪ — the only thing needed is to ask it.
 */

const numberFormatters: Record<Locale, Intl.NumberFormat> = {
  en: new Intl.NumberFormat("en-US"),
  bn: new Intl.NumberFormat("bn-BD"),
};

const compactFormatters: Record<Locale, Intl.NumberFormat> = {
  en: new Intl.NumberFormat("en-US", { notation: "compact" }),
  bn: new Intl.NumberFormat("bn-BD", { notation: "compact" }),
};

export function formatNumberIn(n: number, lang: Locale): string {
  return numberFormatters[lang].format(n);
}

/** "42,000+" style figures on a profile: 42K / ৪২হা. */
export function formatCompactIn(n: number, lang: Locale): string {
  return compactFormatters[lang].format(n);
}

/**
 * A year, with no thousands separator.
 *
 * `formatNumberIn(2016)` gives "2,016", which is right for a quantity and
 * wrong for a graduation year — hence a separate function rather than a flag
 * every call site has to remember.
 */
export function formatYearIn(year: number, lang: Locale): string {
  return new Intl.NumberFormat(lang === "bn" ? "bn-BD" : "en-US", {
    useGrouping: false,
  }).format(year);
}

/** A year range: "2016–2019", or "2020–present" when the end is open. */
export function formatYearRangeIn(
  from: number | undefined,
  to: number | undefined,
  lang: Locale,
  presentLabel: string,
): string {
  if (from === undefined && to === undefined) return "";
  if (from === undefined) return formatYearIn(to!, lang);
  // An en dash, not a hyphen: this is a range, and the reference site's own
  // profile text uses one.
  if (to === undefined) return `${formatYearIn(from, lang)}–${presentLabel}`;
  return `${formatYearIn(from, lang)}–${formatYearIn(to, lang)}`;
}

export function formatDateIn(iso: string, lang: Locale): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(lang === "bn" ? "bn-BD" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}
