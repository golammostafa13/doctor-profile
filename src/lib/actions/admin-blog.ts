"use server";

import { adminWrite, revalidateSite } from "@/lib/admin/action";
import { deletePost, getPost, putPost } from "@/lib/data/blog";

/** Moderation: an administrator can take any post down, or put it back. */
export async function setPostStatusAction(formData: FormData): Promise<void> {
  const gate = await adminWrite();
  if (!gate.ok) return;
  const post = await getPost(String(formData.get("id") ?? ""));
  if (!post) return;
  const publish = formData.get("op") === "publish";
  await putPost({
    ...post,
    status: publish ? "published" : "draft",
    publishedAt: publish ? (post.publishedAt ?? Date.now()) : post.publishedAt,
  });
  revalidateSite();
}

export async function deletePostAdminAction(formData: FormData): Promise<void> {
  const gate = await adminWrite();
  if (!gate.ok) return;
  const post = await getPost(String(formData.get("id") ?? ""));
  if (!post) return;
  await deletePost(post);
  revalidateSite();
}
