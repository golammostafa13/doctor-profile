"use server";

import { actionDash, adminWrite, revalidateSite, type ActionResult } from "@/lib/admin/action";
import { fmt } from "@/lib/i18n/dash";
import { rebuildDirectory } from "@/lib/data/doctors";
import { seedDemoData } from "@/lib/data/seed";
import { getRedis } from "@/lib/redis";

export async function rebuildDirectoryAction(): Promise<ActionResult> {
  const gate = await adminWrite();
  if (!gate.ok) return gate.result;
  const count = await rebuildDirectory();
  revalidateSite();
  return { ok: true, message: fmt((await actionDash()).system.rebuilt, { n: count }) };
}

/**
 * Copy the demo roster into the store. Overwrites the demo doctors' own
 * records if they are already there; real doctors are left alone.
 */
export async function importDemoAction(
  _prev: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const gate = await adminWrite();
  if (!gate.ok) return gate.result;
  if (String(formData.get("confirm") ?? "") !== "IMPORT") {
    return { ok: false, errors: { confirm: (await actionDash()).system.importConfirm } };
  }
  const store = await getRedis();
  if (!store) return { ok: false, message: (await actionDash()).errors.noStore };
  const { doctors } = await seedDemoData(store);
  revalidateSite();
  return { ok: true, message: fmt((await actionDash()).system.imported, { n: doctors }) };
}
