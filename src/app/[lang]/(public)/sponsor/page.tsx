import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { getSettings } from "@/lib/data/settings";
import { getDictionary } from "@/lib/i18n";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { pick, textClass } from "@/lib/i18n/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const revalidate = 300;

export async function generateMetadata(props: PageProps<"/[lang]/sponsor">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return { title: dict.sponsorPage.kicker, description: dict.sponsorPage.lead };
}

export default async function SponsorPage(props: PageProps<"/[lang]/sponsor">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const s = getDictionary(locale).sponsorPage;
  const bn = textClass(locale);
  const { sponsor } = await getSettings();
  const company = pick(sponsor.company, locale);
  const product = pick(sponsor.product, locale);
  const generic = pick(sponsor.generic, locale);

  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
      <PageIntro lang={locale} kicker={s.kicker} title={s.title} lead={s.lead} />

      <section className="hud-card mt-12 grid gap-8 border border-line bg-surface/70 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:p-8">
        <div className="grid h-32 w-56 place-items-center border border-line bg-bg p-4">
          {sponsor.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={sponsor.logo.url} alt={company} className="max-h-full w-auto" />
          ) : (
            <Image src={site.sponsor.logo} alt={company} width={482} height={264} className="h-auto w-full brightness-0 invert" />
          )}
        </div>
        <div className={bn}>
          <p className="font-display text-2xl font-bold uppercase">{company}</p>
          {product ? <p className="mt-2 text-lg text-accent">{product}</p> : null}
          {generic ? <p className="text-sm text-ink-mute">{generic}</p> : null}
          {sponsor.href ? (
            <Button asChild variant="outline" size="sm" className="mt-5">
              <a href={sponsor.href} target="_blank" rel="sponsored noopener noreferrer">
                {s.visit} <ArrowUpRight aria-hidden />
              </a>
            </Button>
          ) : null}
        </div>
      </section>

      <div className={cn("mt-8 space-y-4", bn)}>
        <p className="flex gap-3 text-ink-mute">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden /> {s.independence}
        </p>
        <p className="border-l-2 border-hot pl-4 text-sm text-ink-faint">{pick(sponsor.note, locale)}</p>
      </div>
    </main>
  );
}
