import { ArrowUpRight } from "lucide-react";
import { getAds, pickAd } from "@/lib/data/ads";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { pick, textClass } from "@/lib/i18n/content";
import type { AdSlot as Slot } from "@/lib/schema/ads";
import { cn } from "@/lib/utils";

/**
 * One live advertisement for a slot, or nothing.
 *
 * Always labelled "Advertisement" in the reader's language: on a directory of
 * doctors, a sponsored image beside a profile must never read as that
 * doctor's endorsement. `rel="sponsored"` says the same to search engines.
 *
 * Chosen at render time, so on these statically regenerated pages the pick
 * changes per revalidation rather than per visitor — a rotation in hours,
 * not seconds, which is honest about what a cached page can do.
 */
export async function AdSlot({
  slot,
  lang,
  className,
}: {
  slot: Slot;
  lang: Locale;
  className?: string;
}) {
  const { items } = await getAds();
  const ad = pickAd(items, slot);
  if (!ad) return null;

  const dict = getDictionary(lang);
  const bn = textClass(lang);
  const headline = pick(ad.headline, lang);
  const body = pick(ad.body, lang);
  const cta = pick(ad.cta, lang);
  const compact = slot === "footer";

  return (
    <aside aria-label={dict.sponsor.advertisement} className={cn("w-full", className)}>
      <p className={cn("mb-1.5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-ink-faint", bn)}>
        {dict.sponsor.advertisement}
      </p>
      <a
        href={ad.href}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="hud-card group block border border-line bg-surface/70 transition-colors hover:border-accent"
      >
        <div className={cn("grid", headline || body ? "sm:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]" : "")}>
          <picture className="block overflow-hidden">
            {ad.imageMobile ? <source media="(max-width: 639px)" srcSet={ad.imageMobile.url} /> : null}
            <img
              src={ad.image.url}
              alt={pick(ad.alt, lang)}
              width={ad.image.width}
              height={ad.image.height}
              loading="lazy"
              decoding="async"
              className={cn("h-full w-full object-cover", compact ? "max-h-24" : "max-h-72")}
            />
          </picture>
          {headline || body || cta ? (
            <div className={cn("flex flex-col justify-center gap-2 p-5", bn)}>
              {headline ? <p className="font-display text-lg font-semibold uppercase leading-tight">{headline}</p> : null}
              {body ? <p className="text-sm text-ink-mute">{body}</p> : null}
              {cta ? (
                <span className="mt-1 inline-flex items-center gap-1 font-display text-sm font-semibold uppercase text-accent">
                  {cta}
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      </a>
    </aside>
  );
}
