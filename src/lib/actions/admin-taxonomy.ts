"use server";

import { actionDash, adminWrite, invalid, revalidateSite, type ActionResult } from "@/lib/admin/action";
import { fmt } from "@/lib/i18n/dash";
import { getDirectory } from "@/lib/data/doctors";
import { getTaxonomy, saveTaxonomy } from "@/lib/data/taxonomy";
import { termKind, termSchema, type Taxonomy, type TermKind } from "@/lib/schema/taxonomy";

const LIST: Record<TermKind, "specialities" | "hospitals" | "locations"> = {
  speciality: "specialities",
  hospital: "hospitals",
  location: "locations",
};

const FIELD: Record<TermKind, "specialityIds" | "hospitalIds" | "locationIds"> = {
  speciality: "specialityIds",
  hospital: "hospitalIds",
  location: "locationIds",
};

/**
 * Add or rename a term. The id is its URL slug, so it is fixed once created:
 * renaming changes the words, never the address.
 */
export async function saveTermAction(
  _prev: ActionResult<{ id: string }>,
  formData: FormData,
): Promise<ActionResult<{ id: string }>> {
  const gate = await adminWrite();
  if (!gate.ok) return gate.result;

  const kind = termKind.safeParse(formData.get("kind"));
  if (!kind.success) return { ok: false, message: (await actionDash()).lists.unknown };
  const existingId = String(formData.get("existingId") ?? "");
  const nameBn = String(formData.get("nameBn") ?? "").trim();

  const parsed = termSchema.safeParse({
    id: existingId || String(formData.get("id") ?? ""),
    name: { en: String(formData.get("nameEn") ?? ""), bn: nameBn || undefined },
    order: Number(formData.get("order") || 500),
  });
  if (!parsed.success) return invalid(parsed.error);

  const taxonomy = await getTaxonomy();
  const key = LIST[kind.data];
  const list = taxonomy[key];
  if (!existingId && list.some((t) => t.id === parsed.data.id)) {
    return { ok: false, errors: { id: (await actionDash()).lists.idTaken } };
  }
  const next: Taxonomy = {
    ...taxonomy,
    [key]: existingId
      ? list.map((t) => (t.id === existingId ? { ...t, ...parsed.data, id: existingId } : t))
      : [...list, parsed.data],
  };
  await saveTaxonomy(next);
  revalidateSite();
  const t = await actionDash();
  return { ok: true, message: existingId ? t.lists.saved : t.lists.added, data: { id: parsed.data.id } };
}

/**
 * Remove a term — only when no doctor uses it. Deleting one in use would leave
 * profiles pointing at an id that resolves to nothing, and the directory
 * filter would silently lose them.
 */
export async function deleteTermAction(
  _prev: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const gate = await adminWrite();
  if (!gate.ok) return gate.result;

  const kind = termKind.safeParse(formData.get("kind"));
  if (!kind.success) return { ok: false, message: (await actionDash()).lists.unknown };
  // The row's form posts the term as `existingId` (it is also the save form).
  const id = String(formData.get("existingId") ?? formData.get("id") ?? "");
  const taxonomyBefore = await getTaxonomy();
  if (!taxonomyBefore[LIST[kind.data]].some((t) => t.id === id)) {
    return { ok: false, message: (await actionDash()).errors.itemGone };
  }

  const { items } = await getDirectory();
  const used = items.filter((card) => card[FIELD[kind.data]].includes(id)).length;
  if (used > 0) {
    return { ok: false, message: fmt((await actionDash()).lists.usedBy, { n: used }) };
  }

  const key = LIST[kind.data];
  await saveTaxonomy({ ...taxonomyBefore, [key]: taxonomyBefore[key].filter((t) => t.id !== id) });
  revalidateSite();
  return { ok: true, message: (await actionDash()).lists.deleted };
}

