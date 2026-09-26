"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import {
  actionDash,
  adminWrite,
  invalid,
  revalidateSite,
  type ActionResult,
} from "@/lib/admin/action";
import { createDoctor } from "@/lib/admin/create-doctor";
import { generatePassword, hashPassword } from "@/lib/auth/password";
import { getAdmin, getDoctor } from "@/lib/auth/current";
import {
  canPersist,
  claimEmail,
  deleteRecord,
  getRecord,
  putRecord,
  releaseClaim,
} from "@/lib/data/doctors";
import { getTaxonomy } from "@/lib/data/taxonomy";
import { MediaError, storeImage, type ImagePreset } from "@/lib/media";
import { bdPhone } from "@/lib/schema/common";
import { fmt } from "@/lib/i18n/dash";
import { doctorEditableSchema, doctorStatus } from "@/lib/schema/doctor";
import type { MediaRef } from "@/lib/schema/common";

/**
 * Administrator actions on doctors.
 *
 * Every one starts with `adminWrite()`, which is `requireAdmin()` plus "is
 * there anywhere to write". The doctor id always comes from the form, which
 * is correct here and only here: an administrator may act on any doctor,
 * where a doctor's own actions take the id from the session.
 */

const text = (formData: FormData, name: string) =>
  String(formData.get(name) ?? "").trim();

const optional = (value: string) => (value ? value : undefined);

// --- Create ------------------------------------------------------------------

const createSchema = z.object({
  nameEn: z.string().trim().min(1).max(120),
  nameBn: z.string().trim().max(120),
  email: z.email().max(160),
  specialityId: z.string().min(1, "Required."),
  designationEn: z.string().trim().min(1).max(180),
  workplaceEn: z.string().trim().min(1).max(200),
  bmdcNo: z.string().trim().max(40),
  publicPhone: z.union([z.literal(""), bdPhone]),
  password: z.union([z.literal(""), z.string().min(10, "At least 10 characters.").max(200)]),
  status: doctorStatus,
});

export async function createDoctorAction(
  _prev: ActionResult<{ id: string; password?: string }>,
  formData: FormData,
): Promise<ActionResult<{ id: string; password?: string }>> {
  const gate = await adminWrite();
  if (!gate.ok) return gate.result;

  const parsed = createSchema.safeParse({
    nameEn: text(formData, "nameEn"),
    nameBn: text(formData, "nameBn"),
    email: text(formData, "email").toLowerCase(),
    specialityId: text(formData, "specialityId"),
    designationEn: text(formData, "designationEn"),
    workplaceEn: text(formData, "workplaceEn"),
    bmdcNo: text(formData, "bmdcNo"),
    publicPhone: text(formData, "publicPhone"),
    password: String(formData.get("password") ?? ""),
    status: text(formData, "status") || "active",
  });
  if (!parsed.success) return invalid(parsed.error);
  const input = parsed.data;

  const taxonomy = await getTaxonomy();
  const term = taxonomy.specialities.find((t) => t.id === input.specialityId);
  if (!term) return { ok: false, errors: { specialityId: (await actionDash()).newDoctor.unknownSpeciality } };

  // A generated password is shown once, to the administrator, to pass on.
  const generated = input.password ? undefined : generatePassword();
  const outcome = await createDoctor({
    name: { en: input.nameEn, bn: optional(input.nameBn) },
    email: input.email,
    passwordHash: await hashPassword(input.password || generated!),
    speciality: term.name,
    specialityIds: [term.id],
    designation: { en: input.designationEn },
    workplace: { en: input.workplaceEn },
    bmdcNo: optional(input.bmdcNo),
    publicPhone: optional(input.publicPhone),
    status: input.status,
    createdBy: gate.admin.email,
  });
  if (!outcome.ok) {
    const t = await actionDash();
    const message = outcome.code === "email" ? t.newDoctor.emailTaken : outcome.code === "slug" ? t.newDoctor.noSlug : outcome.message;
    return outcome.field
      ? { ok: false, errors: { [outcome.field]: message } }
      : { ok: false, message };
  }

  revalidateSite();
  return { ok: true, data: { id: outcome.record.id, password: generated } };
}

// --- Profile -----------------------------------------------------------------

/**
 * Save everything a doctor's public page shows.
 *
 * The editor posts the whole profile as one JSON document, because a profile
 * with a dozen repeatable sections does not flatten into form fields without
 * inventing a naming scheme for `chambers[3].hours.bn`. It is validated by the
 * same schema a doctor's own edit uses, which strips anything that is not a
 * profile field — so the account fields cannot ride along.
 */
export async function saveDoctorProfileAction(
  _prev: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const gate = await adminWrite();
  if (!gate.ok) return gate.result;

  const record = await getRecord(text(formData, "id"));
  if (!record) return { ok: false, message: (await actionDash()).errors.doctorGone };

  let payload: unknown;
  try {
    payload = JSON.parse(String(formData.get("payload") ?? "{}"));
  } catch {
    return { ok: false, message: (await actionDash()).errors.unreadableForm };
  }
  const parsed = doctorEditableSchema.safeParse(payload);
  if (!parsed.success) return invalid(parsed.error);

  await putRecord({ ...record, ...parsed.data });
  revalidateSite();
  return { ok: true, message: (await actionDash()).editor.saved };
}

// --- Account -----------------------------------------------------------------

const accountSchema = z.object({
  email: z.email().max(160),
  status: doctorStatus,
  featured: z.boolean(),
  order: z.coerce.number().int().min(0).max(9999),
});

export async function updateDoctorAccountAction(
  _prev: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const gate = await adminWrite();
  if (!gate.ok) return gate.result;

  const record = await getRecord(text(formData, "id"));
  if (!record) return { ok: false, message: (await actionDash()).errors.doctorGone };

  const parsed = accountSchema.safeParse({
    email: text(formData, "email").toLowerCase(),
    status: text(formData, "status"),
    featured: formData.get("featured") === "on",
    order: text(formData, "order") || "500",
  });
  if (!parsed.success) return invalid(parsed.error);
  const next = parsed.data;

  if (next.email !== record.email) {
    if (!(await claimEmail(next.email, record.id))) {
      return { ok: false, errors: { email: (await actionDash()).newDoctor.emailTaken } };
    }
    await releaseClaim("email", record.email, record.id);
  }

  await putRecord({ ...record, ...next });
  revalidateSite();
  return { ok: true, message: (await actionDash()).account.saved };
}

/**
 * Set or generate a new password.
 *
 * Bumps `passwordVersion`, which signs the doctor out everywhere on their next
 * request — a reset after a lost phone has to mean the phone is locked out.
 */
export async function resetDoctorPasswordAction(
  _prev: ActionResult<{ password?: string }>,
  formData: FormData,
): Promise<ActionResult<{ password?: string }>> {
  const gate = await adminWrite();
  if (!gate.ok) return gate.result;

  const record = await getRecord(text(formData, "id"));
  if (!record) return { ok: false, message: (await actionDash()).errors.doctorGone };

  const typed = String(formData.get("password") ?? "");
  if (typed && (typed.length < 10 || typed.length > 200)) {
    return { ok: false, errors: { password: (await actionDash()).errors.min10 } };
  }
  const password = typed || generatePassword();

  await putRecord({
    ...record,
    passwordHash: await hashPassword(password),
    passwordVersion: record.passwordVersion + 1,
    passwordSetAt: Date.now(),
  });
  return {
    ok: true,
    message: (await actionDash()).account.changed,
    data: typed ? {} : { password },
  };
}

export async function deleteDoctorAction(
  _prev: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const gate = await adminWrite();
  if (!gate.ok) return gate.result;

  const record = await getRecord(text(formData, "id"));
  if (!record) return { ok: false, message: (await actionDash()).errors.doctorGone };
  if (text(formData, "confirm") !== record.linkNo) {
    return { ok: false, errors: { confirm: fmt((await actionDash()).account.typeToConfirm, { code: record.linkNo }) } };
  }

  await deleteRecord(record);
  revalidateSite();
  redirect(`/${text(formData, "lang") || "en"}/admin/doctors?deleted=1`);
}

/** One-click changes from the doctors table: feature, and status. */
export async function quickDoctorAction(formData: FormData): Promise<void> {
  const gate = await adminWrite();
  if (!gate.ok) return;

  const record = await getRecord(text(formData, "id"));
  if (!record) return;
  const op = text(formData, "op");

  if (op === "feature" || op === "unfeature") {
    await putRecord({ ...record, featured: op === "feature" });
  } else {
    const status = doctorStatus.safeParse(op);
    if (!status.success) return;
    await putRecord({ ...record, status: status.data });
  }
  revalidateSite();
}

// --- Images ------------------------------------------------------------------

const PRESETS: ImagePreset[] = ["portrait", "banner", "logo"];

/**
 * Upload one image and hand back its reference.
 *
 * Separate from the form that uses it, so a photo is stored the moment it is
 * chosen and the preview is the real stored image. An upload that is never
 * saved into a record is an orphan of a few tens of kilobytes; that is the
 * trade for not holding megabytes in a form's state.
 *
 * Open to administrators and to signed-in doctors (their own photo, post
 * covers) — both checked here, since this is a POST like any other.
 */
export async function uploadImageAction(formData: FormData): Promise<ActionResult<MediaRef>> {
  const t = await actionDash();
  const [admin, doctor] = await Promise.all([getAdmin(), getDoctor()]);
  if (!admin && !doctor) return { ok: false, message: t.errors.uploadFailed };
  if (!(await canPersist())) return { ok: false, message: t.errors.noStore };

  const preset = text(formData, "preset") as ImagePreset;
  if (!PRESETS.includes(preset)) return { ok: false, message: t.errors.unknownImageType };
  const file = formData.get("file");
  if (!(file instanceof File)) return { ok: false, message: t.errors.chooseImage };

  try {
    return { ok: true, data: await storeImage(file, preset) };
  } catch (error) {
    if (error instanceof MediaError) return { ok: false, message: t.errors[error.code] };
    throw error;
  }
}
