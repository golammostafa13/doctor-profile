"use server";

import { redirect } from "next/navigation";
import { actionDash, adminWrite, revalidateSite, type ActionResult } from "@/lib/admin/action";
import { createDoctor } from "@/lib/admin/create-doctor";
import { deleteApplication, getApplication, putApplication } from "@/lib/data/applications";
import { getTaxonomy } from "@/lib/data/taxonomy";

/**
 * Approving is the one moderation step in the system: it is what turns a
 * stranger's claim to be a doctor into a public page. So it refuses anything
 * but a pending application, and the applicant's own chosen password — hashed
 * when they applied — becomes their sign-in.
 */
export async function approveApplicationAction(
  _prev: ActionResult<{ doctorId: string }>,
  formData: FormData,
): Promise<ActionResult<{ doctorId: string }>> {
  const gate = await adminWrite();
  if (!gate.ok) return gate.result;

  const app = await getApplication(String(formData.get("id") ?? ""));
  if (!app) return { ok: false, message: (await actionDash()).errors.itemGone };
  if (app.status !== "pending") return { ok: false, message: (await actionDash()).applications.already };

  // Match the typed speciality to a taxonomy term where the words agree, so
  // the new doctor shows up under the directory's speciality filter.
  const taxonomy = await getTaxonomy();
  const typed = app.speciality.en.trim().toLowerCase();
  const term = taxonomy.specialities.find((t) => t.name.en.toLowerCase() === typed);

  const outcome = await createDoctor({
    name: app.name,
    email: app.email,
    passwordHash: app.passwordHash,
    speciality: term?.name ?? app.speciality,
    specialityIds: term ? [term.id] : [],
    designation: app.designation,
    workplace: app.workplace,
    bmdcNo: app.bmdcNo,
    publicPhone: app.phone,
    status: "active",
    createdBy: gate.admin.email,
  });
  if (!outcome.ok) return { ok: false, message: outcome.message };

  await putApplication({
    ...app,
    status: "approved",
    decidedAt: Date.now(),
    decidedBy: gate.admin.email,
    doctorId: outcome.record.id,
  });
  revalidateSite();
  return { ok: true, message: (await actionDash()).applications.approvedMsg, data: { doctorId: outcome.record.id } };
}

export async function rejectApplicationAction(
  _prev: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const gate = await adminWrite();
  if (!gate.ok) return gate.result;

  const app = await getApplication(String(formData.get("id") ?? ""));
  if (!app) return { ok: false, message: (await actionDash()).errors.itemGone };
  if (app.status !== "pending") return { ok: false, message: (await actionDash()).applications.already };

  await putApplication({
    ...app,
    status: "rejected",
    decidedAt: Date.now(),
    decidedBy: gate.admin.email,
    decisionNote: String(formData.get("note") ?? "").trim().slice(0, 600) || undefined,
  });
  return { ok: true, message: (await actionDash()).applications.rejectedMsg };
}

export async function deleteApplicationAction(formData: FormData): Promise<void> {
  const gate = await adminWrite();
  if (!gate.ok) return;
  await deleteApplication(String(formData.get("id") ?? ""));
  redirect(`/${String(formData.get("lang") ?? "en")}/admin/applications?status=all`);
}
