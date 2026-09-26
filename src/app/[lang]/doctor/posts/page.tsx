import Link from "next/link";
import { PenLine } from "lucide-react";
import { Badge, Empty, PageHeader } from "@/components/admin/ui";
import { Button } from "@/components/ui/button";
import { requireDoctor } from "@/lib/auth/current";
import { getBlogCards } from "@/lib/data/blog";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { pick } from "@/lib/i18n/content";

export default async function DoctorPosts(props: PageProps<"/[lang]/doctor/posts">) {
  const { lang } = await props.params;
  const { deleted } = await props.searchParams;
  const locale = lang as Locale;
  const p = getDictionary(locale).dash.posts;
  const { record } = await requireDoctor();
  const posts = (await getBlogCards())
    .filter((x) => x.authorDoctorId === record.id)
    .sort((a, b) => b.updatedAt - a.updatedAt);

  return (
    <>
      <PageHeader
        kicker={p.kicker}
        title={p.title}
        description={p.description}
        actions={
          <Button asChild>
            <Link href={`/${lang}/doctor/posts/new`}>
              <PenLine aria-hidden /> {p.newPost}
            </Link>
          </Button>
        }
      />
      {deleted ? (
        <p role="status" className="mb-4 border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent">
          {p.deleted}
        </p>
      ) : null}
      {posts.length === 0 ? (
        <Empty title={p.none}>{p.noneHint}</Empty>
      ) : (
        <ul className="divide-y divide-line border border-line">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/${lang}/doctor/posts/${post.id}`}
                className="group grid gap-1 px-4 py-3.5 transition-colors hover:bg-accent-soft/40 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-6"
              >
                <span className="min-w-0">
                  <span className="block truncate font-medium group-hover:text-accent">{pick(post.title, locale)}</span>
                  <span className="block truncate text-sm text-ink-mute">{pick(post.excerpt, locale)}</span>
                </span>
                <span className="font-mono text-xs text-ink-faint">
                  {new Date(post.updatedAt).toLocaleDateString(lang === "bn" ? "bn-BD" : "en-GB", { dateStyle: "medium" })}
                </span>
                <Badge tone={post.status === "published" ? "accent" : "mute"}>
                  {post.status === "published" ? p.published : p.draft}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
