import {
  Award as AwardIcon,
  CalendarDays,
  Clock,
  GraduationCap,
  MapPin,
  Phone,
  Stethoscope,
  UserRound,
} from "lucide-react";
import type { ReactNode } from "react";
import { CopyButton } from "@/components/doctor/copy-button";
import { Rail } from "@/components/doctor/rail";
import type { Locale } from "@/lib/i18n/config";
import { contentClass, pick, textClass, type Bilingual } from "@/lib/i18n/content";
import { formatDateIn, formatNumberIn, formatYearRangeIn } from "@/lib/i18n/format";
import { cn } from "@/lib/utils";
import type {
  Award,
  Chamber,
  Education,
  Experience,
  Fellowship,
  Paper,
} from "@/lib/schema/doctor";

/**
 * The profile's information sections.
 *
 * The reference directory presents thirteen of these in a fixed order, and the
 * brief was to be at least as informative — so the shapes here follow its
 * wording and its ordering rather than inventing a tidier taxonomy that would
 * lose fields.
 *
 * Every section is a Server Component. A profile is the page most likely to
 * be opened on a phone over a slow connection, so the only client islands are
 * the small ones that need a browser API — copying a number, paging the paper
 * rail — and the motion is CSS, scrubbed by scroll.
 *
 * The `.reveal` wrapper is on `Section`, never on a card inside it: a filled
 * scroll animation owns `transform` permanently, which would disable any hover
 * on the same element.
 */

export function Section({
  id,
  title,
  lang,
  index = 0,
  children,
}: {
  id?: string;
  title: string;
  lang: Locale;
  index?: number;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="reveal scroll-mt-32"
      style={{ "--lag": Math.min(index, 6) * 4, "--span": "50%" } as React.CSSProperties}
    >
      {/* The reference's two-line heading: a signal HUD readout carrying the
          section's number, then the title in the display face. */}
      <p aria-hidden="true" className={cn("hud-label tabular-nums", textClass(lang))}>
        {formatNumberIn(index + 1, lang).padStart(2, lang === "bn" ? "০" : "0")}
      </p>
      <h2
        className={cn(
          "mt-2 flex items-center gap-4 font-display text-[clamp(1.35rem,3vw,1.8rem)] font-bold uppercase leading-tight tracking-[0.02em] text-ink",
          textClass(lang),
        )}
      >
        {title}
        {/* Drawn across as the section scrolls in; see .section-rule. */}
        <span aria-hidden="true" className="section-rule h-px flex-1" />
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

/** A bordered panel. Used wherever a section holds repeated rows. */
function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "panel-lift hud-card group p-5",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Line({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <p className="flex items-start gap-2.5 text-sm text-ink-mute">
      <span className="mt-0.5 shrink-0 text-ink-faint">{icon}</span>
      <span className="min-w-0">{children}</span>
    </p>
  );
}

/** Bio, and any other long prose. */
export function Prose({ text, lang }: { text: Bilingual; lang: Locale }) {
  const body = pick(text, lang);
  if (!body.trim()) return null;
  return (
    <div className={cn("max-w-2xl space-y-4", contentClass(text, lang))}>
      {body.split(/\n{2,}/).map((paragraph, i) => (
        <p key={i} className="text-[0.98rem] leading-relaxed text-ink-mute">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

/** Qualifications, skills, achievements — the three plain bullet lists. */
export function BulletList({ items, lang }: { items: string[]; lang: Locale }) {
  if (items.length === 0) return null;
  return (
    <ul className={cn("grid gap-2.5 sm:grid-cols-2", textClass(lang))}>
      {items.map((item, i) => (
        <li
          key={i}
          className="group -mx-2.5 flex items-start gap-2.5 border-l-2 border-transparent px-2.5 py-1.5 text-[0.95rem] text-ink-mute transition-colors duration-200 hover:border-accent hover:bg-accent-soft/60 hover:text-ink"
        >
          <span
            aria-hidden="true"
            className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-accent transition-transform duration-300 ease-[var(--ease-physical)] group-hover:scale-[1.8]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ChamberList({
  chambers,
  lang,
  appointmentLabel,
  mapsLabel,
  copyLabel,
  copiedLabel,
}: {
  chambers: Chamber[];
  lang: Locale;
  appointmentLabel: string;
  mapsLabel: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  if (chambers.length === 0) return null;
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {chambers.map((chamber) => (
        <Panel key={chamber.id} className="flex flex-col gap-3">
          <h3
            className={cn(
              "font-semibold leading-snug text-ink",
              contentClass(chamber.hospital, lang),
            )}
          >
            {pick(chamber.hospital, lang)}
          </h3>

          <Line icon={<Clock className="size-4" />}>
            <span className={contentClass(chamber.visitingHours, lang)}>
              {pick(chamber.visitingHours, lang)}
            </span>
          </Line>
          <Line icon={<MapPin className="size-4" />}>
            <span className={contentClass(chamber.address, lang)}>
              {pick(chamber.address, lang)}
            </span>
          </Line>
          {chamber.appointmentPhone ? (
            <Line icon={<Phone className="size-4" />}>
              <span className="inline-flex items-center gap-1">
                <a
                  href={`tel:${chamber.appointmentPhone}`}
                  className="text-accent tabular-nums transition-colors hover:text-accent-hover"
                >
                  {chamber.appointmentPhone}
                </a>
                <CopyButton
                  value={chamber.appointmentPhone}
                  label={copyLabel}
                  copiedLabel={copiedLabel}
                  className="-my-1.5"
                />
              </span>
            </Line>
          ) : null}

          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {chamber.appointmentPhone ? (
              <a
                href={`tel:${chamber.appointmentPhone}`}
                className={cn(
                  "group/call cut btn-sheen btn-glow inline-flex h-9 items-center gap-2 bg-accent px-4 font-display text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-accent-ink transition-all duration-200 [--cut:8px] hover:bg-accent-hover hover:-translate-y-0.5 active:translate-y-px",
                  textClass(lang),
                )}
              >
                <Phone className="size-4 group-hover/call:animate-[ring_0.9s_var(--ease-subtle)]" /> {appointmentLabel}
              </a>
            ) : null}
            {/*
              A link out rather than an embedded map. An iframe would need
              `frame-src https://www.google.com` in the CSP and pulls in a large
              third-party bundle; a link opens the native maps app on a phone,
              which is what someone standing outside a building actually wants.
            */}
            <a
              href={
                chamber.geo
                  ? `https://www.google.com/maps/search/?api=1&query=${chamber.geo.lat},${chamber.geo.lng}`
                  : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${chamber.hospital.en} ${chamber.address.en}`,
                    )}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group/map inline-flex h-9 items-center gap-2 border border-line px-4 font-display text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent active:translate-y-px",
                textClass(lang),
              )}
            >
              <MapPin className="size-4 transition-transform duration-300 ease-[var(--ease-physical)] group-hover/map:-translate-y-0.5" /> {mapsLabel}
            </a>
          </div>
        </Panel>
      ))}
    </div>
  );
}

/** Education and fellowships share a year-then-detail shape. */
function isFellowship(
  row: Education | Experience | Fellowship,
): row is Fellowship {
  return "subject" in row;
}

export function Timeline({
  rows,
  lang,
  presentLabel,
}: {
  rows: (Education | Experience | Fellowship)[];
  lang: Locale;
  presentLabel: string;
}) {
  if (rows.length === 0) return null;
  return (
    // The border is the unlit track; .timeline::before is the lit line drawn
    // down it as the list scrolls through, and each dot pops as it is reached.
    <ol className="timeline relative space-y-5 border-l border-line pl-6">
      {rows.map((row) => {
        const primary =
          "degree" in row ? row.degree : "role" in row ? row.role : row.subject;
        const secondary =
          "institution" in row
            ? row.institution
            : "organisation" in row
              ? row.organisation
              : row.country;
        // Education and experience carry a range; a fellowship carries a
        // single year. Narrowing on the field rather than on a `kind` tag,
        // because the schemas genuinely differ in shape and adding a
        // discriminant to all three just to unify this line would be a schema
        // change made for a rendering convenience.
        // Narrowed on `subject`, which is required and unique to a fellowship.
        // `"yearFrom" in row` would not work: `in` does not narrow on an
        // OPTIONAL property, so education would stay in the false branch too.
        const years = isFellowship(row)
          ? row.year
            ? formatYearRangeIn(row.year, row.year, lang, presentLabel)
            : ""
          : formatYearRangeIn(
              row.yearFrom,
              "current" in row && row.current ? undefined : row.yearTo,
              lang,
              presentLabel,
            );
        return (
          <li key={row.id} className="timeline-item group relative">
            <span
              aria-hidden="true"
              className="timeline-dot absolute -left-[1.72rem] top-1.5 size-2.5 rounded-full border-2 border-bg bg-accent"
            />
            {years ? (
              <p className={cn("text-xs font-medium text-ink-faint", textClass(lang))}>
                {years}
              </p>
            ) : null}
            <p
              className={cn(
                "mt-0.5 font-semibold text-ink",
                contentClass(primary, lang),
              )}
            >
              {pick(primary, lang)}
            </p>
            {secondary ? (
              <p className={cn("text-sm text-ink-mute", contentClass(secondary, lang))}>
                {pick(secondary, lang)}
              </p>
            ) : null}
            {isFellowship(row) && row.duration ? (
              <p className={cn("text-xs text-ink-faint", textClass(lang))}>
                {pick(row.duration, lang)}
              </p>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

export function AwardList({ awards, lang }: { awards: Award[]; lang: Locale }) {
  if (awards.length === 0) return null;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {awards.map((award) => (
        <Panel key={award.id} className="flex gap-3">
          <span className="grid size-9 shrink-0 place-items-center border border-hot/40 bg-hot-soft text-hot transition-transform duration-500 ease-[var(--ease-physical)] group-hover:-rotate-12 group-hover:scale-110">
            <AwardIcon className="size-5" />
          </span>
          <div className="min-w-0">
            <p
              className={cn(
                "font-medium leading-snug text-ink",
                contentClass(award.title, lang),
              )}
            >
              {pick(award.title, lang)}
            </p>
            {award.issuer ? (
              <p
                className={cn(
                  "mt-1 text-sm text-ink-mute",
                  contentClass(award.issuer, lang),
                )}
              >
                {pick(award.issuer, lang)}
              </p>
            ) : null}
          </div>
        </Panel>
      ))}
    </div>
  );
}

/**
 * Publications, interviews and seminars.
 *
 * A horizontal scroller with snap points, matching the reference site's
 * carousel — but built on native overflow scrolling rather than a JS carousel,
 * so it works with a trackpad, a touch swipe, the keyboard and a screen reader
 * without any of them being implemented.
 */
export function PaperRail({
  papers,
  lang,
  prevLabel,
  nextLabel,
}: {
  papers: Paper[];
  lang: Locale;
  prevLabel: string;
  nextLabel: string;
}) {
  if (papers.length === 0) return null;
  return (
    <Rail prevLabel={prevLabel} nextLabel={nextLabel}>
      <ul className="-mx-4 flex snap-x snap-mandatory gap-4 -mt-2 overflow-x-auto px-4 pb-3 pt-2 [scrollbar-width:thin]">
        {papers.map((paper) => (
          <li
            key={paper.id}
            className="w-[min(20rem,78vw)] shrink-0 snap-start"
          >
            <Panel className="flex h-full flex-col gap-2">
              {paper.date ? (
                <p className={cn("text-xs text-ink-faint", textClass(lang))}>
                  {formatDateIn(paper.date, lang)}
                </p>
              ) : null}
              <p
                className={cn(
                  "text-[0.95rem] font-medium leading-snug text-ink",
                  contentClass(paper.title, lang),
                )}
              >
                {pick(paper.title, lang)}
              </p>
            </Panel>
          </li>
        ))}
      </ul>
    </Rail>
  );
}

export { GraduationCap, Stethoscope, UserRound, CalendarDays };
