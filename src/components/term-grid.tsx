import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Term } from "@/lib/schema/taxonomy";
import { localePath, type Locale } from "@/lib/i18n/config";
import { formatNumberIn } from "@/lib/i18n/format";
import { pick, textClass } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

/**
 * A grid of taxonomy terms, each linking into the directory pre-filtered.
 * Terms with doctors come first; empty ones stay listed but quiet, so the
 * page is also an honest map of what the directory does not cover yet.
 */
export function TermGrid({
  lang,
  terms,
  counts,
  param,
  countLabel,
}: {
  lang: Locale;
  terms: Term[];
  counts: Map<string, number>;
  param: "speciality" | "hospital" | "location";
  countLabel: (n: string) => string;
}) {
  const bn = textClass(lang);
  const sorted = [...terms].sort(
    (a, b) => (counts.get(b.id) ?? 0) - (counts.get(a.id) ?? 0) || pick(a.name, lang).localeCompare(pick(b.name, lang)),
  );
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {sorted.map((term, i) => {
        const n = counts.get(term.id) ?? 0;
        return (
          <li key={term.id}>
            <Link
              href={localePath(lang, `/doctors?${param}=${term.id}`)}
              className={cn(
                "hud-card group relative flex h-full items-center justify-between gap-4 border border-line bg-surface/70 p-5 transition-colors hover:border-accent",
                n === 0 && "opacity-60",
              )}
            >
              <span className="card-brackets" aria-hidden />
              <span className="min-w-0">
                <span className="hud-index">{formatNumberIn(i + 1, lang).padStart(2, lang === "bn" ? "০" : "0")}</span>
                <span className={cn("mt-2 block font-display text-lg font-semibold leading-tight group-hover:text-accent", bn)}>
                  {pick(term.name, lang)}
                </span>
                <span className={cn("mt-1 block text-sm text-ink-mute", bn)}>{countLabel(formatNumberIn(n, lang))}</span>
              </span>
              <ArrowRight className="size-5 shrink-0 text-accent transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
