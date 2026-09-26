"use server";

import { actionDash, adminWrite, invalid, revalidateSite, type ActionResult } from "@/lib/admin/action";
import { media, opt, pair, str } from "@/lib/admin/form";
import { saveSettings } from "@/lib/data/settings";
import { settingsSchema } from "@/lib/schema/settings";

export async function saveSettingsAction(
  _prev: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const gate = await adminWrite();
  if (!gate.ok) return gate.result;

  const announcementText = pair(formData, "announcementText");
  const parsed = settingsSchema.safeParse({
    rev: 0,
    updatedAt: 0,
    sponsor: {
      enabled: formData.get("sponsorEnabled") === "on",
      company: pair(formData, "company") ?? { en: "" },
      product: pair(formData, "product"),
      generic: pair(formData, "generic"),
      courtesyLabel: pair(formData, "courtesyLabel") ?? { en: "" },
      logo: media(formData, "logo"),
      pack: media(formData, "pack"),
      href: opt(formData, "sponsorHref"),
      note: pair(formData, "note") ?? { en: "" },
    },
    directory: {
      perPage: Number(str(formData, "perPage") || 12),
      defaultSort: str(formData, "defaultSort") || "featured",
    },
    announcement: announcementText
      ? {
          enabled: formData.get("announcementEnabled") === "on",
          text: announcementText,
          href: opt(formData, "announcementHref"),
        }
      : undefined,
  });
  if (!parsed.success) return invalid(parsed.error);

  const { sponsor, directory, announcement } = parsed.data;
  await saveSettings({ sponsor, directory, announcement });
  revalidateSite();
  return { ok: true, message: (await actionDash()).settings.saved };
}
