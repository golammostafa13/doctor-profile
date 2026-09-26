import type { dashEn } from "@/lib/i18n/dictionaries/dash-en";

/** Dashboard strings — see dictionaries/dash-en.ts. Client-safe. */
export type Dash = typeof dashEn;

/** Fill `{name}` placeholders: fmt("{n} of {total}", { n: 3, total: 9 }). */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (whole, key: string) =>
    key in vars ? String(vars[key]) : whole,
  );
}
