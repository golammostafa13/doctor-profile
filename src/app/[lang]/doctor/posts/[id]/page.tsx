import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/admin/ui";
import { PostEditor } from "@/components/doctor-dash/post-editor";
import { requireDoctor } from "@/lib/auth/current";
import { getPost } from "@/lib/data/blog";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";

/** `/doctor/posts/new` writes a new post; any other id edits one of theirs. */
export default async function EditPost(props: PageProps<"/[lang]/doctor/posts/[id]">) {
  const { lang, id } = await props.params;
  const p = getDictionary(lang as Locale).dash.posts;
  const { record } = await requireDoctor();
  const post = id === "new" ? undefined : await getPost(id);
  if (id !== "new" && (!post || post.authorDoctorId !== record.id)) notFound();

  return (
    <>
      <Link href={`/${lang}/doctor/posts`} className="mb-4 inline-flex items-center gap-1.5 text-sm text-ink-mute hover:text-accent">
        <ArrowLeft className="size-4" aria-hidden /> {p.back}
      </Link>
      <PageHeader kicker={p.kicker} title={post ? p.editTitle : p.newTitle} />
      <PostEditor lang={lang} post={post ?? undefined} />
    </>
  );
}
