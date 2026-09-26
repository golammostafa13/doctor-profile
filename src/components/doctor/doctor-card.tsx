import Link from "next/link";
import { ArrowUpRight, MapPin, Stethoscope } from "lucide-react";
import { Avatar } from "@/components/doctor/avatar";
import { Highlight } from "@/components/search/highlight";
import { localePath, type Locale } from "@/lib/i18n/config";
import { contentClass, pick, textClass } from "@/lib/i18n/content";
import { formatNumberIn } from "@/lib/i18n/format";
import { cn } from "@/lib/utils";
import type { DoctorCard as Card } from "@/lib/schema/doctor";
import type { Term } from "@/lib/schema/taxonomy";

/**
 * One doctor in the grid.
 *
 * The reveal goes on the wrapper, never on the article itself. A filled scroll
 * animation owns `transform` permanently, so the element it is applied to can
 * no longer be the element that lifts on hover — the two would fight and the
 * hover would silently do nothing. Wrapper animates, card hovers.
 */
export function DoctorCard({
  card,
  lang,
  index = 0,
  locations,
  query = "",
}: {
  card: Card;
  lang: Locale;
  index?: number;
  locations?: Map<string, Term>;
  /** The directory's search, so the words that matched are marked. */
  query?: string;
}) {
  const bn = textClass(lang);
  const district = card.locationIds
    .map((id) => locations?.get(id))
    .filter(Boolean)[0];

  return (
    <div
      className="reveal-3d h-full"
      style={
        {
          // Cards cascade across a row instead of arriving as a block. Capped
          // at eight so the tail of a long grid never lags off the screen.
          "--lag": Math.min(index, 8) * 3,
          "--span": "58%",
        } as React.CSSProperties
      }
    >
      <article className="doctor-card group h-full" data-tone={card.featured ? "hot" : undefined}>
        {/* Corner brackets that lock on when the card is hovered. */}
        <span aria-hidden="true" className="card-brackets" />
        <Link
          href={localePath(lang, `/doctors/${card.linkNo}`)}
          className="flex h-full flex-col gap-4 p-5"
        >
          <div className="flex items-start gap-4">
            <span className="relative size-16 shrink-0 overflow-hidden border border-line transition-[border-color] duration-300 group-hover:border-accent">
              <Avatar
                name={card.name}
                seed={card.id}
                src={card.photoUrl}
                className="transition-transform duration-500 ease-[var(--ease-physical)] group-hover:scale-110"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span
                className={cn(
                  "block truncate font-display text-[1.08rem] font-semibold leading-snug text-ink transition-colors group-hover:text-accent",
                  contentClass(card.name, lang),
                )}
              >
                <Highlight text={pick(card.name, lang)} query={query} />
              </span>
              <span
                className={cn(
                  "mt-1 block truncate text-sm text-hot",
                  contentClass(card.speciality, lang),
                )}
              >
                <Highlight text={pick(card.speciality, lang)} query={query} />
              </span>
              {card.degreesShort ? (
                <span className="mt-1 block truncate font-mono text-[0.7rem] text-ink-faint">
                  {card.degreesShort}
                </span>
              ) : null}
            </span>
            {/* The row's number, outlined, like a track listing. */}
            <span aria-hidden="true" className={cn("hud-index -mr-1 -mt-1 text-3xl", bn)}>
              {formatNumberIn(index + 1, lang).padStart(2, lang === "bn" ? "০" : "0")}
            </span>
          </div>

          <span className="mt-auto space-y-1.5 border-t border-line pt-3.5 text-sm text-ink-mute">
            <span className="flex items-center gap-2">
              <Stethoscope className="size-4 shrink-0 text-accent" />
              <span className={cn("truncate", contentClass(card.workplace, lang))}>
                <Highlight text={pick(card.workplace, lang)} query={query} />
              </span>
            </span>
            {district ? (
              <span className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-accent" />
                <span className={cn("flex-1 truncate", bn)}>
                  {pick(district.name, lang)}
                </span>
                <ArrowUpRight className="size-4 shrink-0 -translate-x-1 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </span>
            ) : null}
          </span>
        </Link>
      </article>
    </div>
  );
}
