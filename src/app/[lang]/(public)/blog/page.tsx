import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { PostCard } from "@/components/blog/post-card";
import { getPublishedCards } from "@/lib/data/blog";
import { getDictionary } from "@/lib/i18n";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { textClass } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

export const revalidate = 300;

export async function generateMetadata(props: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.blog.title,
    description: dict.blog.lead,
    alternates: { canonical: `/${lang}/blog`, languages: { en: "/en/blog", bn: "/bn/blog" } },
  };
}

export default async function BlogPage(props: PageProps<"/[lang]/blog">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const posts = await getPublishedCards();

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <PageIntro lang={locale} kicker={dict.blog.kicker} title={dict.blog.title} lead={dict.blog.lead} />
      {posts.length === 0 ? (
        <p className={cn("mt-12 text-ink-mute", textClass(locale))}>{dict.blog.none}</p>
      ) : (
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <li key={post.id} className="reveal">
              <PostCard post={post} lang={locale} index={i} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
