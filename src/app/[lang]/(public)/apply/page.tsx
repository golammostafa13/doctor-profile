import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ApplyForm } from "@/components/apply/apply-form";
import { getTaxonomy } from "@/lib/data/taxonomy";
import { getDictionary } from "@/lib/i18n";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { textClass } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

export async function generateMetadata(props: PageProps<"/[lang]/apply">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  return { title: getDictionary(lang).apply.title };
}

export default async function ApplyPage(props: PageProps<"/[lang]/apply">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const bn = textClass(locale);
  const taxonomy = await getTaxonomy();
  // The function-valued string stays on the server; the form gets text only.
  const { rateLimited: _drop, ...strings } = dict.apply;
  void _drop;

  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <p className={cn("hud-label", bn)}>{dict.apply.kicker}</p>
      <h1 className={cn("mt-4 font-display text-4xl font-bold uppercase leading-[1.02] sm:text-5xl", bn)}>{dict.apply.title}</h1>
      <p className={cn("mt-4 max-w-2xl text-lg text-ink-mute", bn)}>{dict.apply.lead}</p>
      <div className="mt-10 border border-line bg-surface/70 p-5 sm:p-8">
        <ApplyForm lang={locale} t={strings} specialities={taxonomy.specialities.map((s) => s.name.en)} />
      </div>
    </main>
  );
}
