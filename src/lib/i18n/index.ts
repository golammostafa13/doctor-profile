import { en } from "@/lib/i18n/dictionaries/en";
import { bn } from "@/lib/i18n/dictionaries/bn";
import type { Locale } from "@/lib/i18n/config";

/**
 * The shape of a translation, derived from English.
 *
 * English is the source of truth on purpose: a key added there fails the build
 * everywhere else until it is translated, which is the only reliable way to
 * stop a half-translated page shipping.
 *
 * Note that `en` is deliberately NOT `as const`. With it, every English string
 * becomes its own literal type and no translation can ever satisfy the shape —
 * `"হোম"` is not assignable to `"Home"`. What is wanted here is the shape, not
 * the values.
 */
export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, bn };

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}
