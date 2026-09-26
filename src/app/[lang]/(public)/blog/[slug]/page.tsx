import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { AdSlot } from "@/components/ad-slot";
import { PostCard, formatPostDate } from "@/components/blog/post-card";
import { Avatar } from "@/components/doctor/avatar";
import { Markdown } from "@/components/markdown";
import { getPostBySlug, getPublishedCards } from "@/lib/data/blog";
import { getProfileByLinkNo } from "@/lib/data/doctors";
import { getDictionary } from "@/lib/i18n";
import { hasLocale, localePath, locales, type Locale } from "@/lib/i18n/config";
import { formatNumberIn } from "@/lib/i18n/format";
import { pick, textClass } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

export const revalidate = 300;

export async function generateStaticParams() {
  const posts = await getPublishedCards();
  return locales.flatMap((lang) => posts.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata(props: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const { lang, slug } = await props.params;
  if (!hasLocale(lang)) return {};
  const post = await getPostBySlug(slug);
  if (!post || post.status !== "published") return {};
  return {
    title: pick(post.title, lang),
    description: pick(post.excerpt, lang),
    alternates: { canonical: `/${lang}/blog/${slug}`, languages: { en: `/en/blog/${slug}`, bn: `/bn/blog/${slug}` } },
  };
}

export default async function PostPage(props: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await props.params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const bn = textClass(locale);

  const post = await getPostBySlug(slug);
  if (!post || post.status !== "published") notFound();
  const [author, all] = await Promise.all([getProfileByLinkNo(post.authorLinkNo), getPublishedCards()]);
  const more = all.filter((p) => p.id !== post.id).slice(0, 3);

  const body = pick(post.body, locale);
  const minutes = Math.max(1, Math.round(body.split(/\s+/).length / 200));

  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <div className="read-progress" aria-hidden />
      <Link href={localePath(locale, "/blog")} className={cn("inline-flex items-center gap-1.5 text-sm text-ink-mute hover:text-accent", bn)}>
        <ArrowLeft className="size-4" aria-hidden /> {dict.blog.back}
      </Link>

      <header className="mt-8">
        <p className={cn("hud-label", bn)}>{post.tags[0] ?? dict.blog.kicker}</p>
        <h1 className={cn("mt-4 font-display text-[clamp(2rem,5.5vw,3.2rem)] font-bold uppercase leading-[1.05]", bn)}>
          {pick(post.title, locale)}
        </h1>
        <p className={cn("mt-4 text-lg text-ink-mute", bn)}>{pick(post.excerpt, locale)}</p>
        <p className={cn("mt-5 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint", bn)}>
          {dict.blog.by(pick(post.authorName, locale))} · {formatPostDate(post.publishedAt, locale)} ·{" "}
          {dict.blog.minRead(formatNumberIn(minutes, locale))}
        </p>
      </header>

      {post.cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.cover.url} alt="" width={post.cover.width} height={post.cover.height} className="mt-8 w-full border border-line object-cover" />
      ) : null}

      <article className={cn("mt-10", bn)}>
        <Markdown source={body} />
      </article>

      <p className={cn("mt-10 flex gap-2 border border-line bg-surface/60 p-4 text-sm text-ink-mute", bn)}>
        <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden /> {dict.blog.disclaimer}
      </p>

      {author ? (
        <section className="hud-card mt-10 border border-line bg-surface/70 p-5">
          <p className={cn("font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink-faint", bn)}>{dict.blog.aboutAuthor}</p>
          <div className="mt-4 flex items-center gap-4">
            <span className="size-16 shrink-0 overflow-hidden">
              <Avatar name={author.name} seed={author.id} src={author.photo?.url} />
            </span>
            <div className="min-w-0 flex-1">
              <p className={cn("font-display text-lg font-semibold", bn)}>{pick(author.name, locale)}</p>
              <p className={cn("text-sm text-hot", bn)}>{pick(author.speciality, locale)}</p>
              <p className={cn("truncate text-sm text-ink-mute", bn)}>{pick(author.designation, locale)}</p>
            </div>
            <Link href={localePath(locale, `/doctors/${author.linkNo}`)} className={cn("hidden items-center gap-1 font-display text-sm font-semibold uppercase text-accent hover:underline sm:inline-flex", bn)}>
              {dict.blog.viewProfile} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </section>
      ) : null}

      <AdSlot slot="blog-inline" lang={locale} className="mt-10" />

      {more.length ? (
        <section className="mt-14">
          <h2 className={cn("font-display text-2xl font-bold uppercase", bn)}>{dict.blog.moreFrom}</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:-mx-24 lg:grid-cols-3">
            {more.map((p) => (
              <li key={p.id}>
                <PostCard post={p} lang={locale} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
