import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUp, BadgeCheck, Building2, Stethoscope, Users } from "lucide-react";
import { AdSlot } from "@/components/ad-slot";
import { Avatar } from "@/components/doctor/avatar";
import { CountUp } from "@/components/doctor/count-up";
import { SectionNav } from "@/components/doctor/section-nav";
import {
  AwardList,
  BulletList,
  ChamberList,
  PaperRail,
  Prose,
  Section,
  Timeline,
} from "@/components/doctor/profile-sections";
import { ProfileActions } from "@/components/doctor/profile-actions";
import { getProfileByLinkNo, getPublicCards } from "@/lib/data/doctors";
import { getPublishedCards } from "@/lib/data/blog";
import { PostCard } from "@/components/blog/post-card";
import { getDictionary } from "@/lib/i18n";
import { hasLocale, localePath, type Locale } from "@/lib/i18n/config";
import { contentClass, pick, textClass } from "@/lib/i18n/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * A doctor's profile.
 *
 * The longest page on the site and the one the whole directory exists to
 * deliver. Thirteen sections in the order the reference site presents them,
 * because the brief was to carry at least as much information as it does.
 *
 * Statically generated for every doctor at build time, then revalidated. A
 * profile changes when its doctor edits it, which is rarely, so paying one
 * Redis read per fifteen minutes rather than per visitor is most of the reason
 * this fits in a free tier.
 */
export const revalidate = 900;

export async function generateStaticParams() {
  const cards = await getPublicCards();
  return cards.map((card) => ({ linkNo: card.linkNo }));
}

export async function generateMetadata(
  props: PageProps<"/[lang]/doctors/[linkNo]">,
): Promise<Metadata> {
  const { lang, linkNo } = await props.params;
  if (!hasLocale(lang)) return {};
  const profile = await getProfileByLinkNo(linkNo);
  if (!profile) return {};
  const locale = lang as Locale;

  const name = pick(profile.name, locale);
  const speciality = pick(profile.speciality, locale);
  const workplace = pick(profile.workplace, locale);

  return {
    title: `${name} — ${speciality}`,
    description: `${name}, ${speciality}${workplace ? ` at ${workplace}` : ""}. ${
      profile.degrees.join(", ")
    }. Chamber address, visiting hours and appointment number.`,
    alternates: {
      canonical: `/${lang}/doctors/${linkNo}`,
      languages: {
        en: `/en/doctors/${linkNo}`,
        bn: `/bn/doctors/${linkNo}`,
      },
    },
  };
}

export default async function DoctorProfilePage(
  props: PageProps<"/[lang]/doctors/[linkNo]">,
) {
  const { lang, linkNo } = await props.params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;

  const profile = await getProfileByLinkNo(linkNo);
  if (!profile || profile.status !== "active") notFound();

  const dict = getDictionary(locale);
  const bn = textClass(locale);
  const name = pick(profile.name, locale);

  const papers = {
    publication: profile.papers.filter((p) => p.kind === "publication"),
    interview: profile.papers.filter((p) => p.kind === "interview"),
    seminar: profile.papers.filter((p) => p.kind === "seminar"),
  };

  // Doctors in the same speciality, for the tail of the page.
  const articles = (await getPublishedCards()).filter((p) => p.authorDoctorId === profile.id).slice(0, 3);
  const related = (await getPublicCards())
    .filter(
      (card) =>
        card.id !== profile.id &&
        card.specialityIds.some((id) => profile.specialityIds.includes(id)),
    )
    .slice(0, 3);

  /**
   * Structured data.
   *
   * A directory's whole job is being found, and `Physician` is the schema.org
   * type search engines use to build a knowledge panel with the chamber
   * address and phone number in it — which is exactly the information someone
   * searching for this doctor wants, whether or not they ever reach this page.
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name,
    medicalSpecialty: pick(profile.speciality, locale),
    url: `${site.url}${localePath(locale, `/doctors/${profile.linkNo}`)}`,
    telephone: profile.publicPhone,
    address: profile.chambers.map((chamber) => ({
      "@type": "PostalAddress",
      streetAddress: pick(chamber.address, locale),
    })),
    alumniOf: profile.education.map((row) => ({
      "@type": "EducationalOrganization",
      name: pick(row.institution, locale),
    })),
  };

  const rail = {
    prevLabel: dict.profile.scrollPrevious,
    nextLabel: dict.profile.scrollNext,
  };

  /**
   * The sections, in the reference site's order.
   *
   * One list drives both the page and the in-page nav, so a section that is
   * empty for this doctor disappears from both, and the numbering in the
   * headings has no gaps.
   */
  const sections: { id: string; title: string; show: boolean; body: React.ReactNode }[] = [
    {
      id: "bio",
      title: dict.profile.bio,
      show: Boolean(pick(profile.about, locale).trim()),
      body: <Prose text={profile.about} lang={locale} />,
    },
    {
      id: "qualifications",
      title: dict.profile.qualifications,
      show: profile.qualifications.length > 0,
      body: <BulletList items={profile.qualifications} lang={locale} />,
    },
    {
      id: "education",
      title: dict.profile.academic,
      show: profile.education.length > 0,
      body: (
        <Timeline
          rows={profile.education}
          lang={locale}
          presentLabel={dict.common.present}
        />
      ),
    },
    {
      id: "chambers",
      title: dict.profile.chambers,
      show: profile.chambers.length > 0,
      body: (
        <ChamberList
          chambers={profile.chambers}
          lang={locale}
          appointmentLabel={dict.profile.takeAppointment}
          mapsLabel={dict.profile.openInMaps}
          copyLabel={dict.profile.copyNumber}
          copiedLabel={dict.profile.numberCopied}
        />
      ),
    },
    {
      id: "experience",
      title: dict.profile.workExperience,
      show: profile.experience.length > 0,
      body: (
        <Timeline
          rows={profile.experience}
          lang={locale}
          presentLabel={dict.common.present}
        />
      ),
    },
    {
      id: "skills",
      title: dict.profile.skills,
      show: profile.skills.length > 0,
      body: <BulletList items={profile.skills} lang={locale} />,
    },
    {
      id: "achievements",
      title: dict.profile.achievements,
      show: profile.achievements.length > 0,
      body: <BulletList items={profile.achievements} lang={locale} />,
    },
    {
      id: "awards",
      title: dict.profile.awards,
      show: profile.awards.length > 0,
      body: <AwardList awards={profile.awards} lang={locale} />,
    },
    {
      id: "fellowships",
      title: dict.profile.fellowships,
      show: profile.fellowships.length > 0,
      body: (
        <Timeline
          rows={profile.fellowships}
          lang={locale}
          presentLabel={dict.common.present}
        />
      ),
    },
    {
      id: "publications",
      title: dict.profile.publications,
      show: papers.publication.length > 0,
      body: <PaperRail papers={papers.publication} lang={locale} {...rail} />,
    },
    {
      id: "interviews",
      title: dict.profile.interviews,
      show: papers.interview.length > 0,
      body: <PaperRail papers={papers.interview} lang={locale} {...rail} />,
    },
    {
      id: "seminars",
      title: dict.profile.seminars,
      show: papers.seminar.length > 0,
      body: <PaperRail papers={papers.seminar} lang={locale} {...rail} />,
    },
    {
      id: "articles",
      title: dict.blog.title,
      show: articles.length > 0,
      body: (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((post) => (
            <li key={post.id}>
              <PostCard post={post} lang={locale} />
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: "related",
      title: dict.profile.relatedDoctors,
      show: related.length > 0,
      body: (
        <ul className="grid gap-4 sm:grid-cols-3">
          {related.map((card) => (
            <li key={card.id}>
              <Link
                href={localePath(locale, `/doctors/${card.linkNo}`)}
                className="doctor-card group flex items-center gap-3 p-4"
              >
                <span className="size-11 shrink-0 overflow-hidden border border-line transition-[border-color] duration-300 group-hover:border-accent">
                  <Avatar name={card.name} seed={card.id} src={card.photoUrl} />
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "block truncate text-sm font-medium text-ink",
                      contentClass(card.name, locale),
                    )}
                  >
                    {pick(card.name, locale)}
                  </span>
                  <span
                    className={cn(
                      "block truncate text-xs text-ink-faint",
                      contentClass(card.speciality, locale),
                    )}
                  >
                    {pick(card.speciality, locale)}
                  </span>
                </span>
                <ArrowUp
                  aria-hidden="true"
                  className="size-4 shrink-0 rotate-45 text-ink-faint opacity-0 transition-all duration-300 ease-[var(--ease-physical)] group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100"
                />
              </Link>
            </li>
          ))}
        </ul>
      ),
    },
  ].filter((section) => section.show);

  // "{n} years" split around the number, so the count-up animates only the
  // digits while the translator still decides where the word goes.
  const [yearsBefore, yearsAfter] = dict.profile.years("\u0000").split("\u0000");

  return (
    <main id="main" className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <script
        type="application/ld+json"
        // Serialised from data this server owns, not from anything a visitor
        // supplied, and `<` is escaped so a name containing markup cannot
        // close the script tag early.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Reading progress, scrubbed by the page's own scroll. Pure CSS. */}
      <div aria-hidden="true" className="read-progress" />

      {/* ---- Hero ---------------------------------------------------- */}
      <header className="rise flex flex-col gap-6 sm:flex-row sm:items-start">
        {/* Two wrappers because both effects want ::before: the outer one
            carries the corner brackets, the inner one the rotating glow. */}
        <span className="hud-frame size-28 shrink-0 sm:size-36">
          <span className="avatar-halo block size-full">
            <span className="block size-full overflow-hidden border border-line shadow-e2">
              <Avatar name={profile.name} seed={profile.id} src={profile.photo?.url} />
            </span>
          </span>
        </span>

        <div className="min-w-0 flex-1">
          <p className={cn("hud-label", contentClass(profile.speciality, locale))}>
            {pick(profile.speciality, locale)}
          </p>
          <h1
            className={cn(
              "mt-3 font-display text-[clamp(1.9rem,5vw,3rem)] font-bold uppercase leading-[1.05] tracking-[0.01em]",
              contentClass(profile.name, locale),
            )}
          >
            {name}
          </h1>
          <p
            className={cn(
              "mt-2 text-[0.95rem] text-ink-mute",
              contentClass(profile.designation, locale),
            )}
          >
            {pick(profile.designation, locale)}
          </p>
          {profile.degrees.length ? (
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {profile.degrees.map((degree, i) => (
                <li
                  key={`${degree}-${i}`}
                  className="rise border border-line bg-surface px-2.5 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-[0.06em] text-ink-mute transition-colors duration-200 hover:border-accent hover:text-accent"
                  style={{ "--lag": 3 + i } as React.CSSProperties}
                >
                  {degree}
                </li>
              ))}
            </ul>
          ) : null}

          <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {profile.yearsExperience ? (
              <Stat
                icon={<Stethoscope className="size-4" />}
                label={dict.profile.experience}
                bn={bn}
                lag={4}
              >
                <CountUp
                  value={profile.yearsExperience}
                  lang={locale}
                  prefix={yearsBefore}
                  suffix={yearsAfter}
                  delay={250}
                />
              </Stat>
            ) : null}
            {profile.patientsServed ? (
              <Stat
                icon={<Users className="size-4" />}
                label={dict.profile.patientsServed}
                bn={bn}
                lag={5}
              >
                <CountUp
                  value={profile.patientsServed}
                  lang={locale}
                  compact
                  suffix="+"
                  delay={400}
                />
              </Stat>
            ) : null}
            <Stat
              icon={<BadgeCheck className="size-4" />}
              label={dict.profile.registration}
              bn={bn}
              lag={6}
            >
              {profile.bmdcNo ?? `#${profile.linkNo}`}
            </Stat>
            <Stat
              icon={<Building2 className="size-4" />}
              label={dict.common.hospitals}
              bn={bn}
              lag={7}
            >
              <CountUp value={profile.chambers.length} lang={locale} delay={550} />
            </Stat>
          </dl>

          <ProfileActions
            lang={locale}
            linkNo={profile.linkNo}
            phone={profile.chambers[0]?.appointmentPhone ?? profile.publicPhone}
            strings={{
              appointment: dict.profile.takeAppointment,
              saveContact: dict.profile.saveContact,
              share: dict.profile.share,
              copied: dict.profile.linkCopied,
            }}
          />
        </div>
      </header>

      <SectionNav
        items={sections.map(({ id, title }) => ({ id, label: title }))}
        lang={locale}
        label={dict.profile.onThisPage}
      />

      {/* ---- Sections ------------------------------------------------ */}
      <div className="mt-10 space-y-14">
        {sections.map((section, i) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            lang={locale}
            index={i}
          >
            {section.body}
          </Section>
        ))}
      </div>

      <AdSlot slot="profile-rail" lang={locale} className="mt-14" />

      {/* A real link to #main, so it works without script; it fades in only
          once the page has scrolled, via .to-top's scroll timeline. */}
      <a
        href="#main"
        aria-label={dict.profile.backToTop}
        title={dict.profile.backToTop}
        className="to-top cut btn-glow fixed bottom-5 right-5 z-30 grid size-12 place-items-center bg-accent text-accent-ink [--cut:10px] hover:bg-accent-hover"
      >
        <ArrowUp className="size-5" />
      </a>
    </main>
  );
}

/**
 * One figure in the hero.
 *
 * `.rise` sits on the outer wrapper and the hover lift on the inner tile: the
 * entrance animation fills `transform`, so the element it runs on cannot also
 * be the one that moves on hover.
 */
function Stat({
  icon,
  label,
  bn,
  lag = 0,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  bn?: string;
  lag?: number;
  children: React.ReactNode;
}) {
  return (
    <div className="rise" style={{ "--lag": lag } as React.CSSProperties}>
      <div className="stat-tile hud-card hud-edge group h-full px-4 py-3.5">
        <dt
          className={cn(
            "flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-ink-faint",
            bn,
          )}
        >
          <span className="grid size-6 place-items-center border border-line text-accent transition-[transform,border-color] duration-500 ease-[var(--ease-physical)] group-hover:rotate-45 group-hover:border-accent [&>svg]:transition-transform [&>svg]:duration-500 group-hover:[&>svg]:-rotate-45">
            {icon}
          </span>
          <span className="truncate">{label}</span>
        </dt>
        <dd
          className={cn(
            "mt-2 truncate font-display text-2xl font-bold text-accent transition-colors group-hover:text-hot",
            bn,
          )}
        >
          {children}
        </dd>
      </div>
    </div>
  );
}
