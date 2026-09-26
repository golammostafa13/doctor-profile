"use server";

import { actionDash, adminWrite, invalid, newId, revalidateSite, type ActionResult } from "@/lib/admin/action";
import { dhakaDate, media, opt, pair, str } from "@/lib/admin/form";
import { getAds, saveAds } from "@/lib/data/ads";
import { adSchema } from "@/lib/schema/ads";

export async function saveAdAction(
  _prev: ActionResult<{ id: string }>,
  formData: FormData,
): Promise<ActionResult<{ id: string }>> {
  const gate = await adminWrite();
  if (!gate.ok) return gate.result;

  const { items } = await getAds();
  const existing = items.find((ad) => ad.id === str(formData, "id"));
  const now = Date.now();

  const parsed = adSchema.safeParse({
    id: existing?.id ?? newId("ad"),
    slot: str(formData, "slot"),
    enabled: formData.get("enabled") === "on",
    label: str(formData, "label"),
    image: media(formData, "image") ?? undefined,
    imageMobile: media(formData, "imageMobile"),
    alt: pair(formData, "alt") ?? { en: "" },
    headline: pair(formData, "headline"),
    body: pair(formData, "body"),
    cta: pair(formData, "cta"),
    href: opt(formData, "href"),
    activeFrom: dhakaDate(formData, "activeFrom"),
    activeUntil: dhakaDate(formData, "activeUntil", true),
    weight: Number(str(formData, "weight") || 50),
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  });
  if (!parsed.success) return invalid(parsed.error);

  await saveAds(
    existing
      ? items.map((ad) => (ad.id === existing.id ? parsed.data : ad))
      : [...items, parsed.data],
  );
  revalidateSite();
  return { ok: true, message: (await actionDash()).ads.saved, data: { id: parsed.data.id } };
}

export async function toggleAdAction(formData: FormData): Promise<void> {
  const gate = await adminWrite();
  if (!gate.ok) return;
  const { items } = await getAds();
  const id = str(formData, "id");
  await saveAds(items.map((ad) => (ad.id === id ? { ...ad, enabled: !ad.enabled, updatedAt: Date.now() } : ad)));
  revalidateSite();
}

export async function deleteAdAction(formData: FormData): Promise<void> {
  const gate = await adminWrite();
  if (!gate.ok) return;
  const { items } = await getAds();
  const id = str(formData, "id");
  await saveAds(items.filter((ad) => ad.id !== id));
  revalidateSite();
}
