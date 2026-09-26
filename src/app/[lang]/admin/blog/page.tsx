import Link from "next/link";
import { EyeOff, ExternalLink, Send, Trash2 } from "lucide-react";
import { Badge, Empty, PageHeader } from "@/components/admin/ui";
import { Button } from "@/components/ui/button";
import { deletePostAdminAction, setPostStatusAction } from "@/lib/actions/admin-blog";
import { getBlogCards } from "@/lib/data/blog";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { pick } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

const TABS = ["all", "published", "drafts"] as const;

export default async function AdminBlog(props: PageProps<"/[lang]/admin/blog">) {
  const { lang } = await props.params;
  const { status: raw } = await props.searchParams;
  const tab = TABS.find((x) => x === raw) ?? "all";
  const locale = lang as Locale;
  const t = getDictionary(locale).dash;
  const b = t.blogAdmin;

  const all = (await getBlogCards()).sort((a, c) => c.updatedAt - a.updatedAt);
  const rows = tab === "all" ? all : all.filter((p) => (tab === "published" ? p.status === "published" : p.status === "draft"));
  const count = { all: all.length, published: all.filter((p) => p.status === "published").length, drafts: all.filter((p) => p.status === "draft").length };

  return (
    <>
      <PageHeader kicker={b.kicker} title={b.title} description={b.description} />
      <div className="mb-4 flex flex-wrap gap-1.5">
        {TABS.map((x) => (
          <Link
            key={x}
            href={`?status=${x}`}
            aria-current={x === tab ? "page" : undefined}
            className={cn(
              "flex h-9 items-center border px-3 font-display text-[0.78rem] font-semibold uppercase tracking-[0.08em]",
              x === tab ? "border-accent bg-accent text-accent-ink" : "border-line text-ink-mute hover:border-accent hover:text-accent",
            )}
          >
            {b[x]} <span className="ml-1.5 font-mono text-[0.7rem] opacity-70">{count[x]}</span>
          </Link>
        ))}
      </div>

      {rows.length === 0 ? (
        <Empty title={b.none}>{b.noneHint}</Empty>
      ) : (
        <ul className="divide-y divide-line border border-line">
          {rows.map((post) => (
            <li key={post.id} className="grid gap-3 px-4 py-3.5 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="min-w-0">
                <p className="truncate font-medium">{pick(post.title, locale)}</p>
                <p className="truncate text-sm text-ink-mute">
                  {pick(post.authorName, locale)} ·{" "}
                  {new Date(post.updatedAt).toLocaleDateString(lang === "bn" ? "bn-BD" : "en-GB", { dateStyle: "medium" })}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <Badge tone={post.status === "published" ? "accent" : "mute"}>
                  {post.status === "published" ? b.publishedBadge : b.draft}
                </Badge>
                {post.status === "published" ? (
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/${lang}/blog/${post.slug}`} target="_blank">
                      <ExternalLink aria-hidden /> {b.view}
                    </Link>
                  </Button>
                ) : null}
                <form action={setPostStatusAction}>
                  <input type="hidden" name="id" value={post.id} />
                  <input type="hidden" name="op" value={post.status === "published" ? "unpublish" : "publish"} />
                  <Button type="submit" variant="ghost" size="sm">
                    {post.status === "published" ? <EyeOff aria-hidden /> : <Send aria-hidden />}
                    {post.status === "published" ? b.unpublish : b.publish}
                  </Button>
                </form>
                <form action={deletePostAdminAction}>
                  <input type="hidden" name="id" value={post.id} />
                  <Button type="submit" variant="ghost" size="sm" aria-label={t.common.delete} title={t.common.delete}>
                    <Trash2 aria-hidden />
                  </Button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
