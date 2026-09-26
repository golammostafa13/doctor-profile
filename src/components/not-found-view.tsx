"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hasLocale, localePath, type Locale } from "@/lib/i18n/config";
import { textClass } from "@/lib/i18n/content";
import type { Dictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function NotFoundView({
  strings,
}: {
  strings: Record<Locale, Dictionary["notFound"]>;
}) {
  const params = useParams<{ lang?: string }>();
  const lang: Locale = hasLocale(params.lang) ? params.lang : "en";
  const t = strings[lang];

  return (
    <main id="main" className="mx-auto flex max-w-3xl flex-col items-start px-4 py-24 sm:py-32">
      <p className={cn("hud-label", textClass(lang))}>{t.kicker}</p>
      <h1
        className={cn(
          "mt-4 font-display text-4xl font-bold uppercase tracking-tight sm:text-6xl",
          textClass(lang),
        )}
      >
        {t.title}
      </h1>
      <p className={cn("mt-4 max-w-xl text-lg text-ink-mute", textClass(lang))}>{t.body}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild>
          <Link href={localePath(lang, "/doctors")}>
            {t.browse}
            <ArrowRight aria-hidden />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={localePath(lang)}>{t.home}</Link>
        </Button>
      </div>
    </main>
  );
}
