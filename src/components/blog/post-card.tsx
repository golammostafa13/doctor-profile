import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogCard } from "@/lib/schema/blog";
import { getDictionary } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/i18n/config";
import { formatNumberIn } from "@/lib/i18n/format";
import { pick, textClass } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

export function formatPostDate(ms: number | null, lang: Locale): string {
  if (!ms) return "";
  return new Date(ms).toLocaleDateString(lang === "bn" ? "bn-BD" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
}

/** One post in a list: cover (if any), kicker, title, summary, author. */
export function PostCard({ post, lang, index }: { post: BlogCard; lang: Locale; index?: number }) {
  const dict = getDictionary(lang);
  const bn = textClass(lang);
  return (
    <Link
      href={localePath(lang, `/blog/${post.slug}`)}
      className="hud-card group relative flex h-full flex-col border border-line bg-surface/70 transition-colors hover:border-accent"
    >
      <span className="card-brackets" aria-hidden />
      {post.cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.cover.url} alt="" width={post.cover.width} height={post.cover.height} loading="lazy" className="aspect-video w-full object-cover" />
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <p className={cn("font-mono text-[0.66rem] uppercase tracking-[0.18em] text-hot", bn)}>
            {post.tags[0] ?? dict.blog.kicker}
          </p>
          {index !== undefined ? (
            <span className="hud-index">{formatNumberIn(index + 1, lang).padStart(2, lang === "bn" ? "০" : "0")}</span>
          ) : null}
        </div>
        <h2 className={cn("mt-3 font-display text-xl font-semibold leading-tight group-hover:text-accent", bn)}>
          {pick(post.title, lang)}
        </h2>
        <p className={cn("mt-2 line-clamp-3 text-sm text-ink-mute", bn)}>{pick(post.excerpt, lang)}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs text-ink-faint">
          <span className={cn("truncate", bn)}>
            {pick(post.authorName, lang)} · {formatPostDate(post.publishedAt, lang)}
          </span>
          <ArrowRight className="size-4 shrink-0 text-accent transition-transform group-hover:translate-x-1" aria-hidden />
        </div>
      </div>
    </Link>
  );
}
