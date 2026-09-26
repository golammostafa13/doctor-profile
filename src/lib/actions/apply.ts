"use server";

import { headers } from "next/headers";
import { hashPassword } from "@/lib/auth/password";
import { checkApplicationAttempt, clientAddress } from "@/lib/auth/rate-limit";
import { newId } from "@/lib/admin/action";
import { canPersist } from "@/lib/data/doctors";
import { putApplication } from "@/lib/data/applications";
import { getDictionary } from "@/lib/i18n";
import { hasLocale } from "@/lib/i18n/config";
import { applicationInputSchema } from "@/lib/schema/application";

export interface ApplyState {
  ok: boolean;
  message?: string;
  errors?: Record<string, string>;
}

/**
 * The public application form.
 *
 * Rate-limited per address before anything else, and the password is hashed
 * before the application is stored: an application row waits for a human,
 * sometimes for days, and is not a place to keep a plaintext password.
 * Nothing is published — approval in the admin is what creates a doctor.
 */
export async function applyAction(_prev: ApplyState, formData: FormData): Promise<ApplyState> {
  const raw = String(formData.get("lang") ?? "en");
  const dict = getDictionary(hasLocale(raw) ? raw : "en");

  // A field no person can see. Anything that fills it is not a person.
  if (String(formData.get("website") ?? "")) return { ok: true };

  if (!(await canPersist())) return { ok: false, message: dict.apply.unavailable };

  const limit = await checkApplicationAttempt(clientAddress(await headers()));
  if (!limit.ok) {
    return { ok: false, message: dict.apply.rateLimited(String(Math.ceil(limit.retryAfterSeconds / 60))) };
  }

  const text = (name: string) => String(formData.get(name) ?? "").trim();
  const pair = (name: string) => {
    const en = text(`${name}En`);
    const bn = text(`${name}Bn`);
    return en || bn ? { en, bn: bn || undefined } : undefined;
  };

  const parsed = applicationInputSchema.safeParse({
    name: pair("name") ?? { en: "" },
    email: text("email").toLowerCase(),
    phone: text("phone"),
    speciality: pair("speciality") ?? { en: "" },
    bmdcNo: text("bmdcNo"),
    designation: pair("designation") ?? { en: "" },
    workplace: pair("workplace") ?? { en: "" },
    chamberAddress: pair("chamberAddress"),
    note: text("note") || undefined,
    password: String(formData.get("password") ?? ""),
  });
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".");
      errors[key] ??= issue.message;
    }
    return { ok: false, message: dict.apply.fixErrors, errors };
  }

  const { password, ...input } = parsed.data;
  await putApplication({
    ...input,
    id: newId("app"),
    passwordHash: await hashPassword(password),
    status: "pending",
    submittedAt: Date.now(),
  });
  return { ok: true };
}
