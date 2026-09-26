"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { actionDash, invalid, newId, revalidateSite, toSlug, type ActionResult } from "@/lib/admin/action";
import { media, str } from "@/lib/admin/form";
import { sessionCookieName, sessionCookieOptions } from "@/lib/auth/config";
import { requireDoctor } from "@/lib/auth/current";
import { hashPassword, verifyPassword } from "@/lib/auth/password";
import { signSession } from "@/lib/auth/session";
import { claimPostSlug, deletePost, getPost, putPost } from "@/lib/data/blog";
import { canPersist, putRecord } from "@/lib/data/doctors";
import { blogSchema } from "@/lib/schema/blog";
import { doctorEditableSchema } from "@/lib/schema/doctor";

/**
 * A doctor's own actions.
 *
 * The doctor id ALWAYS comes from the session (`requireDoctor()`), never from
 * the form — the one rule that stops a doctor editing someone else by
 * changing a hidden field. The profile is validated by `doctorEditableSchema`,
 * which has no status, featured, email or password fields, so those cannot be
 * smuggled into a save.
 */

async function doctorWrite() {
  const doctor = await requireDoctor();
  if (!(await canPersist())) {
    return { ok: false as const, result: { ok: false, message: (await actionDash()).errors.noStore } };
  }
  return { ok: true as const, ...doctor };
}

export async function saveOwnProfileAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const gate = await doctorWrite();
  if (!gate.ok) return gate.result;

  let payload: unknown;
  try {
    payload = JSON.parse(String(formData.get("payload") ?? "{}"));
  } catch {
    return { ok: false, message: (await actionDash()).errors.unreadableForm };
  }
  const parsed = doctorEditableSchema.safeParse(payload);
  if (!parsed.success) return invalid(parsed.error);

  await putRecord({ ...gate.record, ...parsed.data });
  revalidateSite();
  return { ok: true, message: (await actionDash()).editor.saved };
}

/**
 * Change password. Bumps the version — which signs out every other device —
 * and re-issues this device's cookie with the new version, so the person who
 * just changed it is not signed out too.
 */
export async function changeOwnPasswordAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const gate = await doctorWrite();
  if (!gate.ok) return gate.result;
  const t = await actionDash();

  const current = String(formData.get("current") ?? "");
  const next = String(formData.get("next") ?? "");
  const confirm = String(formData.get("confirm") ?? "");
  if (next.length < 10 || next.length > 200) return { ok: false, errors: { next: t.errors.min10 } };
  if (next !== confirm) return { ok: false, errors: { confirm: t.doctorAccount.mismatch } };
  if (!(await verifyPassword(current, gate.record.passwordHash))) {
    return { ok: false, errors: { current: t.doctorAccount.wrongCurrent } };
  }

  const passwordVersion = gate.record.passwordVersion + 1;
  await putRecord({
    ...gate.record,
    passwordHash: await hashPassword(next),
    passwordVersion,
    passwordSetAt: Date.now(),
  });
  const token = await signSession({
    role: "doctor",
    sub: gate.record.id,
    email: gate.record.email,
    name: gate.record.name.en,
    linkNo: gate.record.linkNo,
    pv: passwordVersion,
  });
  (await cookies()).set(sessionCookieName, token, sessionCookieOptions);
  return { ok: true, message: t.doctorAccount.changed };
}

/** Create or update one of the doctor's posts; `intent` is draft or publish. */
export async function savePostAction(
  _prev: ActionResult<{ id: string }>,
  formData: FormData,
): Promise<ActionResult<{ id: string }>> {
  const gate = await doctorWrite();
  if (!gate.ok) return gate.result;
  const t = await actionDash();
  const { record } = gate;

  const id = str(formData, "id");
  const existing = id ? await getPost(id) : null;
  if (id && (!existing || existing.authorDoctorId !== record.id)) {
    return { ok: false, message: t.posts.notYours };
  }

  const publish = str(formData, "intent") === "publish";
  const now = Date.now();
  const postId = existing?.id ?? newId("post");
  const titleEn = str(formData, "titleEn");
  const slug = existing?.slug ?? (titleEn ? await claimPostSlug(toSlug(titleEn), postId) : "");
  const bn = (name: string) => str(formData, `${name}Bn`) || undefined;

  const parsed = blogSchema.safeParse({
    id: postId,
    slug: slug || "untitled",
    title: { en: titleEn, bn: bn("title") },
    excerpt: { en: str(formData, "excerptEn"), bn: bn("excerpt") },
    body: { en: String(formData.get("bodyEn") ?? "").trim(), bn: String(formData.get("bodyBn") ?? "").trim() || undefined },
    cover: media(formData, "cover"),
    authorDoctorId: record.id,
    authorName: record.name,
    authorLinkNo: record.linkNo,
    tags: str(formData, "tags").split(",").map((x) => x.trim()).filter(Boolean).slice(0, 10),
    status: publish ? "published" : "draft",
    publishedAt: publish ? (existing?.publishedAt ?? now) : (existing?.publishedAt ?? null),
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  });
  if (!parsed.success) return invalid(parsed.error);

  await putPost(parsed.data);
  revalidateSite();
  return { ok: true, message: publish ? t.posts.publishedMsg : t.posts.savedDraft, data: { id: postId } };
}

export async function deleteOwnPostAction(formData: FormData): Promise<void> {
  const gate = await doctorWrite();
  if (!gate.ok) return;
  const post = await getPost(str(formData, "id"));
  if (!post || post.authorDoctorId !== gate.record.id) return;
  await deletePost(post);
  revalidateSite();
  redirect(`/${str(formData, "lang") || "en"}/doctor/posts?deleted=1`);
}
