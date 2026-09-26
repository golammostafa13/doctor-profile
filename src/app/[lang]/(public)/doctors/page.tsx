import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  DirectoryClient,
  DirectoryFromUrl,
  type DirectoryStrings,
} from "@/components/directory/directory-client";
import { getPublicCards } from "@/lib/data/doctors";
import { getTaxonomy } from "@/lib/data/taxonomy";
import { getSettings } from "@/lib/data/settings";
import { AdSlot } from "@/components/ad-slot";
import { getDictionary } from "@/lib/i18n";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { textClass } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

/**
 * The directory.
 *
 * ISR rather than dynamic, even though the page is filterable: the server
 * render does not read `searchParams` at all — it hands the whole card list to
 * a client island that filters in memory. Three Redis commands per
 * revalidation window, regardless of how many people are searching.
 */
export const revalidate = 300;

export async function generateMetadata(
  props: PageProps<"/[lang]/doctors">,
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang as Locale);
  return {
    title: dict.directory.title,
    description: dict.directory.lead,
    alternates: {
      canonical: `/${lang}/doctors`,
      languages: { en: "/en/doctors", bn: "/bn/doctors" },
    },
  };
}

export default async function DoctorsPage(props: PageProps<"/[lang]/doctors">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const bn = textClass(locale);

  const [cards, taxonomy, settings] = await Promise.all([
    getPublicCards(),
    getTaxonomy(),
    getSettings(),
  ]);

  // Only offer a filter that would actually match something. A dropdown full
  // of terms that return nothing is a dropdown that teaches people the search
  // is broken.
  const used = {
    speciality: new Set(cards.flatMap((card) => card.specialityIds)),
    hospital: new Set(cards.flatMap((card) => card.hospitalIds)),
    location: new Set(cards.flatMap((card) => card.locationIds)),
  };

  const directory = {
    cards,
    lang: locale,
    defaultSort: settings.directory.defaultSort,
    specialities: taxonomy.specialities.filter((t) => used.speciality.has(t.id)),
    hospitals: taxonomy.hospitals.filter((t) => used.hospital.has(t.id)),
    locations: taxonomy.locations.filter((t) => used.location.has(t.id)),
    strings: {
      lead: dict.directory.lead,
      searchDoctors: dict.common.searchDoctors,
      placeholder: dict.search.placeholder,
      speciality: dict.directory.filterSpeciality,
      hospital: dict.directory.filterHospital,
      location: dict.directory.filterLocation,
      clear: dict.directory.clearFilters,
      resultsTemplate: dict.directory.results("{n}"),
      doctorsCount: dict.search.doctorsCount,
      noResults: dict.directory.noResults,
      noResultsHint: dict.directory.noResultsHint,
      sortBy: dict.search.sortBy,
      sortRelevance: dict.directory.sortRelevance,
      sortFeatured: dict.directory.sortFeatured,
      sortName: dict.directory.sortName,
      sortRecent: dict.directory.sortRecent,
      sortSpeciality: dict.directory.sortSpeciality,
      quickFilters: dict.search.quickFilters,
      activeFilters: dict.search.activeFilters,
      removeFilter: dict.search.removeFilter,
      filterBy: dict.search.filterBy,
      doctors: dict.search.doctors,
      recent: dict.search.recent,
      shortcut: dict.search.shortcut,
    } satisfies DirectoryStrings,
  };

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <header className="max-w-2xl">
        <p className={cn("rise hud-label", bn)}>{dict.search.open}</p>
        <h1
          className={cn(
            "rise mt-4 font-display text-[clamp(2.2rem,6vw,3.6rem)] font-bold uppercase leading-[1.02]",
            bn,
          )}
          style={{ "--lag": 1 } as React.CSSProperties}
        >
          {dict.directory.title}
        </h1>
        <p
          className={cn("rise mt-3 text-lg text-ink-mute", bn)}
          style={{ "--lag": 2 } as React.CSSProperties}
        >
          {dict.directory.lead}
        </p>
      </header>

      <AdSlot slot="list-leaderboard" lang={locale} className="mt-10" />

      <div className="mt-10">
        {/*
          The URL's filters are read on the client (useSearchParams), which
          would otherwise opt this whole route out of static rendering. The
          fallback is the same directory with no filters, so the prerendered
          HTML is the full, crawlable list; the URL's state applies on
          hydration.
        */}
        <Suspense fallback={<DirectoryClient {...directory} />}>
          <DirectoryFromUrl {...directory} />
        </Suspense>
      </div>
    </main>
  );
}
