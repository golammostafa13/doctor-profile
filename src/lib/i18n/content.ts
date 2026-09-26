import type { Locale } from "@/lib/i18n/config";

/**
 * Reading bilingual content, and typesetting it.
 *
 * Doctor records carry `{ en, bn? }` for every human-readable field. English
 * is required and Bengali optional, which reflects the real asymmetry: every
 * doctor has a Latin-script name, not every one has a written Bengali form of
 * it. A blank Bengali field is correct, not a gap, so the reader falls back to
 * English rather than showing an empty heading.
 */

export interface Bilingual {
  en: string;
  bn?: string;
}

/** The text for this reader, falling back to English when Bengali is absent. */
export function pick(value: Bilingual | undefined, lang: Locale): string {
  if (!value) return "";
  if (lang === "bn" && value.bn && value.bn.trim()) return value.bn;
  return value.en;
}

/**
 * Whether the text actually rendered is Bengali script.
 *
 * Not the same question as "is the page in Bengali": a Bengali page showing a
 * doctor whose name has no Bengali form is rendering Latin text, and giving
 * that the Bengali line-height and zero tracking would be wrong. So this asks
 * about the string that came back from `pick`, not about the locale.
 */
export function isBengaliText(value: Bilingual | undefined, lang: Locale): boolean {
  return lang === "bn" && Boolean(value?.bn && value.bn.trim());
}

/**
 * The typographic class for Bengali text.
 *
 * Applied per node rather than via `:lang()` because a single heading can mix
 * a Bengali label with a Latin name. `.bn` sets the taller line box Bengali
 * needs and kills letter-spacing: the script joins, and tracking pulls
 * conjuncts visually apart.
 */
export function textClass(lang: Locale): string | undefined {
  return lang === "bn" ? "bn" : undefined;
}

/** `textClass`, but keyed on what `pick` actually returned. */
export function contentClass(
  value: Bilingual | undefined,
  lang: Locale,
): string | undefined {
  return isBengaliText(value, lang) ? "bn" : undefined;
}
