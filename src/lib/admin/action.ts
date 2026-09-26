import "server-only";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import type { z } from "zod";
import { requireAdmin } from "@/lib/auth/current";
import type { Session } from "@/lib/auth/session";
import { canPersist } from "@/lib/data/doctors";
import { getDictionary } from "@/lib/i18n";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { fmt, type Dash } from "@/lib/i18n/dash";

/**
 * The language of the page a Server Action was called from.
 *
 * Read from the Referer — same-origin, so the browser sends the full path
 * under this site's `strict-origin-when-cross-origin` policy — rather than a
 * hidden field on every form, which is how one form gets forgotten and
 * answers a Bengali page in English. Falls back to English.
 */
export async function actionLang(): Promise<Locale> {
  const referer = (await headers()).get("referer");
  try {
    const first = referer ? new URL(referer).pathname.split("/")[1] : "";
    return hasLocale(first) ? first : "en";
  } catch {
    return "en";
  }
}

/** Dashboard strings in the caller's language. */
export async function actionDash(): Promise<Dash> {
  return getDictionary(await actionLang()).dash;
}

/**
 * The shape every admin Server Action answers with.
 *
 * `errors` is keyed by the field's path in the submitted object —
 * `chambers.0.appointmentPhone` — so a form can put each message beside the
 * input it is about, however deeply that input is nested.
 */
export interface ActionResult<T = undefined> {
  ok: boolean;
  message?: string;
  errors?: Record<string, string>;
  data?: T;
}

export const idle: ActionResult = { ok: false };

/**
 * The first line of every admin write.
 *
 * `requireAdmin()` is the authorisation boundary (the proxy is only a
 * redirect), and it redirects to sign-in rather than returning, so a
 * mutation never runs for a session that lost its admin standing mid-edit.
 * Then: is there anywhere to write? Refusing here with a sentence beats a
 * stack trace from the data layer.
 */
export async function adminWrite(): Promise<
  { ok: true; admin: Session } | { ok: false; result: ActionResult<never> }
> {
  const admin = await requireAdmin();
  if (!(await canPersist())) {
    return { ok: false, result: { ok: false, message: (await actionDash()).errors.noStore } };
  }
  return { ok: true, admin };
}

/**
 * Zod's messages, reworded for a person filling in a form, in their language.
 * Schema-level messages written in English (the phone and https refinements)
 * are matched by text and translated too.
 */
export function fieldErrors(error: z.ZodError, t: Dash): Record<string, string> {
  const known: Record<string, string> = {
    "Not a Bangladeshi mobile number (01XXXXXXXXX).": t.errors.phone,
    "Must be an https:// address.": t.errors.https,
    "At least 10 characters.": t.errors.min10,
    "The end date must be after the start date.": t.errors.endAfterStart,
    "Required.": t.errors.required,
  };
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const path = issue.path.join(".") || "_";
    if (out[path]) continue;
    let message = known[issue.message] ?? issue.message;
    if (
      (issue.code === "too_small" && "minimum" in issue && Number(issue.minimum) === 1) ||
      /received undefined/.test(issue.message)
    ) {
      message = t.errors.required;
    } else if (issue.code === "too_small" && "minimum" in issue && Number(issue.minimum) === 10) {
      message = t.errors.min10;
    } else if (issue.code === "too_big" && "maximum" in issue) {
      message = fmt(t.errors.tooLong, { n: String(issue.maximum) });
    } else if (issue.code === "invalid_format" && /email/i.test(issue.message)) {
      message = t.errors.notEmail;
    } else if (issue.code === "invalid_format" && /url/i.test(issue.message)) {
      message = t.errors.https;
    }
    out[path] = message;
  }
  return out;
}

export async function invalid(error: z.ZodError): Promise<ActionResult<never>> {
  const t = await actionDash();
  const errors = fieldErrors(error, t);
  const count = Object.keys(errors).length;
  return {
    ok: false,
    errors,
    message: count === 1 ? t.errors.fieldsOne : fmt(t.errors.fieldsMany, { n: count }),
  };
}

/**
 * Refresh every public page on its next visit.
 *
 * Coarse on purpose. A doctor edit changes their profile, the directory, the
 * home page's featured row, the search index and possibly a speciality count;
 * listing each path is how one gets missed. The pages are ISR, so this costs
 * one re-render per page actually visited, not a rebuild of all of them.
 */
export function revalidateSite(): void {
  revalidatePath("/[lang]", "layout");
  revalidatePath("/api/search");
}

/** "Dr. Nasrin Haque" → "nasrin-haque". */
export function toSlug(value: string): string {
  return (
    value
      .replace(/^(dr|prof|professor)\.?\s+/i, "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 70) || "doctor"
  );
}

/** Short random id with a readable prefix. */
export function newId(prefix: string): string {
  return `${prefix}_${crypto.randomUUID().replace(/-/g, "").slice(0, 12)}`;
}
