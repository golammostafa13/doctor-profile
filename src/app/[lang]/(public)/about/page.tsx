import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Languages, RefreshCw, Scale } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/doctor/count-up";
import { getPublicCards } from "@/lib/data/doctors";
import { getTaxonomy } from "@/lib/data/taxonomy";
import { getDictionary } from "@/lib/i18n";
import { hasLocale, localePath, type Locale } from "@/lib/i18n/config";
import { textClass } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

export const revalidate = 300;

export async function generateMetadata(props: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return { title: dict.aboutPage.kicker, description: dict.aboutPage.lead };
}

const ICONS = [BadgeCheck, RefreshCw, Languages, Scale];

export default async function AboutPage(props: PageProps<"/[lang]/about">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const a = dict.aboutPage;
  const bn = textClass(locale);
  const [cards, taxonomy] = await Promise.all([getPublicCards(), getTaxonomy()]);

  const stats = [
    { label: dict.home.statDoctors, value: cards.length },
    { label: dict.home.statSpecialities, value: taxonomy.specialities.length },
    { label: dict.home.statHospitals, value: taxonomy.hospitals.length },
    { label: dict.home.statDistricts, value: taxonomy.locations.length },
  ];

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <PageIntro lang={locale} kicker={a.kicker} title={a.title} lead={a.lead} />

      <dl className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="stat-tile hud-card hud-edge border border-line bg-surface/70 p-5">
            <dt className={cn("font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-faint", bn)}>{s.label}</dt>
            <dd className="mt-2 font-display text-4xl font-bold text-accent">
              <CountUp value={s.value} lang={locale} />
            </dd>
          </div>
        ))}
      </dl>

      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {a.points.map((point, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <li key={point.title} className="panel-lift hud-card border border-line bg-surface/70 p-6">
              <Icon className="size-6 text-accent" aria-hidden />
              <h2 className={cn("mt-4 font-display text-xl font-semibold uppercase", bn)}>{point.title}</h2>
              <p className={cn("mt-2 text-ink-mute", bn)}>{point.body}</p>
            </li>
          );
        })}
      </ul>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button asChild size="lg" className={bn}>
          <Link href={localePath(locale, "/doctors")}>
            {a.ctaDoctors} <ArrowRight aria-hidden />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className={bn}>
          <Link href={localePath(locale, "/apply")}>{a.ctaApply}</Link>
        </Button>
      </div>
    </main>
  );
}
