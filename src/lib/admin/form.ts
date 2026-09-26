import "server-only";
import { mediaRefSchema, type MediaRef } from "@/lib/schema/common";

/** Small readers for FormData, shared by the admin actions. */

export function str(formData: FormData, name: string): string {
  return String(formData.get(name) ?? "").trim();
}

export function opt(formData: FormData, name: string): string | undefined {
  return str(formData, name) || undefined;
}

/** A bilingual pair from `<name>En` / `<name>Bn`, or undefined if both blank. */
export function pair(formData: FormData, name: string): { en: string; bn?: string } | undefined {
  const en = str(formData, `${name}En`);
  const bn = str(formData, `${name}Bn`);
  if (!en && !bn) return undefined;
  return { en, bn: bn || undefined };
}

/** An image reference posted by `<ImageField>` as JSON, or null. */
export function media(formData: FormData, name: string): MediaRef | null {
  const raw = str(formData, name);
  if (!raw) return null;
  try {
    const parsed = mediaRefSchema.safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}

/**
 * A calendar date typed into `<input type="date">`, as epoch ms in Dhaka time.
 *
 * Explicit about the zone because the server's is whatever the host chose:
 * "starts on the 1st" should mean midnight in Bangladesh, where the campaign
 * runs, not midnight in a data centre.
 */
export function dhakaDate(formData: FormData, name: string, end = false): number | null {
  const value = str(formData, name);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const ms = Date.parse(`${value}T${end ? "23:59:59" : "00:00:00"}+06:00`);
  return Number.isNaN(ms) ? null : ms;
}
