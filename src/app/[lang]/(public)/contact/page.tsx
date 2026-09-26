import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertCircle, Mail, Phone, Stethoscope } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n";
import { hasLocale, localePath, type Locale } from "@/lib/i18n/config";
import { textClass } from "@/lib/i18n/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export async function generateMetadata(props: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return { title: dict.contactPage.kicker, description: dict.contactPage.lead };
}

export default async function ContactPage(props: PageProps<"/[lang]/contact">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const c = getDictionary(locale).contactPage;
  const bn = textClass(locale);

  const cards = [
    {
      icon: Phone,
      title: c.patientsTitle,
      body: c.patientsBody,
      actions: null,
    },
    {
      icon: Stethoscope,
      title: c.doctorsTitle,
      body: c.doctorsBody,
      actions: (
        <div className="mt-5 flex flex-wrap gap-2">
          <Button asChild size="sm" className={bn}>
            <Link href={localePath(locale, "/apply")}>{c.apply}</Link>
          </Button>
          <Button asChild size="sm" variant="outline" className={bn}>
            <Link href={localePath(locale, "/signin")}>{c.signIn}</Link>
          </Button>
        </div>
      ),
    },
    {
      icon: AlertCircle,
      title: c.correctionsTitle,
      body: c.correctionsBody,
      actions: site.contactEmail ? (
        <a href={`mailto:${site.contactEmail}`} className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline">
          <Mail className="size-4" aria-hidden /> {site.contactEmail}
        </a>
      ) : null,
    },
  ];

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <PageIntro lang={locale} kicker={c.kicker} title={c.title} lead={c.lead} />
      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <li key={card.title} className="panel-lift hud-card flex flex-col border border-line bg-surface/70 p-6">
            <card.icon className="size-6 text-accent" aria-hidden />
            <h2 className={cn("mt-4 font-display text-xl font-semibold uppercase", bn)}>{card.title}</h2>
            <p className={cn("mt-2 text-ink-mute", bn)}>{card.body}</p>
            {card.actions}
          </li>
        ))}
      </ul>
    </main>
  );
}
