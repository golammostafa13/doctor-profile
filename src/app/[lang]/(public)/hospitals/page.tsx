import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { TermGrid } from "@/components/term-grid";
import { getPublicCards } from "@/lib/data/doctors";
import { countBy, getTaxonomy } from "@/lib/data/taxonomy";
import { getDictionary } from "@/lib/i18n";
import { hasLocale, type Locale } from "@/lib/i18n/config";

export const revalidate = 300;

export async function generateMetadata(props: PageProps<"/[lang]/hospitals">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.hospitalsPage.title,
    description: dict.hospitalsPage.lead,
    alternates: { canonical: `/${lang}/hospitals`, languages: { en: "/en/hospitals", bn: "/bn/hospitals" } },
  };
}

export default async function Page(props: PageProps<"/[lang]/hospitals">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const [cards, taxonomy] = await Promise.all([getPublicCards(), getTaxonomy()]);

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <PageIntro lang={locale} kicker={dict.hospitalsPage.kicker} title={dict.hospitalsPage.title} lead={dict.hospitalsPage.lead} />
      <div className="mt-12">
        <TermGrid
          lang={locale}
          terms={taxonomy.hospitals}
          counts={countBy(cards, "hospitalIds")}
          param="hospital"
          countLabel={dict.hospitalsPage.doctors}
        />
      </div>
    </main>
  );
}
