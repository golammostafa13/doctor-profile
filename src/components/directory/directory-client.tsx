"use client";

import { useDeferredValue, useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowDownWideNarrow,
  Building2,
  CornerDownLeft,
  History,
  MapPin,
  Search,
  SlidersHorizontal,
  Stethoscope,
  X,
} from "lucide-react";
import { Avatar } from "@/components/doctor/avatar";
import { DoctorCard } from "@/components/doctor/doctor-card";
import { Highlight } from "@/components/search/highlight";
import { Button } from "@/components/ui/button";
import { fieldClass } from "@/components/ui/field";
import { localePath, type Locale } from "@/lib/i18n/config";
import { contentClass, pick, textClass } from "@/lib/i18n/content";
import { formatNumberIn } from "@/lib/i18n/format";
import {
  buildDoctorIndex,
  pushRecent,
  readRecent,
  searchDoctors,
  searchTerms,
  termCounts,
  type TermHit,
  type TermKind,
} from "@/lib/search";
import { cn } from "@/lib/utils";
import type { DoctorCard as Card } from "@/lib/schema/doctor";
import type { Term } from "@/lib/schema/taxonomy";

/**
 * The directory: search, filters and the grid.
 *
 * Everything happens in the browser, over the whole card list the server
 * handed down once. That is not a shortcut — it is what lets
 * `/[lang]/doctors` stay an ISR page despite taking search parameters. A
 * server-filtered list would read `searchParams`, which forces the route
 * dynamic, which means a Redis read per visitor instead of one per
 * revalidation window.
 *
 * The state still lives in the URL — `?q=&speciality=&hospital=&location=
 * &sort=` — written with replaceState as it changes, so a search can be
 * bookmarked, shared, and survives the back button. It is read on the client
 * (see DirectoryFromUrl) and the server-rendered HTML is the unfiltered list.
 *
 * Built to be forgiving for patients rather than precise for librarians:
 *   - suggestions as you type: matching specialities / hospitals / districts
 *     as one-click filters, and matching doctors to jump straight to;
 *   - typos, prefixes and either language all match (see lib/search.ts);
 *   - quick-filter chips for the commonest specialities;
 *   - every active filter is a chip with its own ×, so undoing one choice
 *     never means starting again;
 *   - "/" focuses the box from anywhere on the page;
 *   - an empty result offers the specific filter to drop, not just a shrug.
 */

export interface DirectoryStrings {
  lead: string;
  searchDoctors: string;
  placeholder: string;
  speciality: string;
  hospital: string;
  location: string;
  clear: string;
  /**
   * Templates containing `{n}` / `{q}`, not functions: functions cannot cross
   * the server/client boundary. The dictionary still owns the wording AND the
   * word order, because the server calls the dictionary's own function with
   * "{n}" as the argument.
   */
  resultsTemplate: string;
  doctorsCount: string;
  noResults: string;
  noResultsHint: string;
  sortBy: string;
  sortRelevance: string;
  sortFeatured: string;
  sortName: string;
  sortRecent: string;
  sortSpeciality: string;
  quickFilters: string;
  activeFilters: string;
  removeFilter: string;
  filterBy: string;
  doctors: string;
  recent: string;
  shortcut: string;
}

type Sort = "relevance" | "featured" | "name" | "recent" | "speciality";

export interface DirectoryState {
  q: string;
  speciality: string;
  hospital: string;
  location: string;
  sort: Sort | "";
}

const EMPTY: DirectoryState = { q: "", speciality: "", hospital: "", location: "", sort: "" };

const KINDS: { kind: TermKind; key: "speciality" | "hospital" | "location"; icon: typeof Stethoscope }[] = [
  { kind: "speciality", key: "speciality", icon: Stethoscope },
  { kind: "hospital", key: "hospital", icon: Building2 },
  { kind: "location", key: "location", icon: MapPin },
];

interface Props {
  cards: Card[];
  lang: Locale;
  specialities: Term[];
  hospitals: Term[];
  locations: Term[];
  strings: DirectoryStrings;
  /** Order with no query typed, set from the admin Settings screen. */
  defaultSort?: "featured" | "name" | "recent";
}

/** Reads the initial state from the URL. Must sit inside <Suspense>. */
export function DirectoryFromUrl(props: Props) {
  const params = useSearchParams();
  const sort = params.get("sort") ?? "";
  const initial: DirectoryState = {
    q: params.get("q") ?? "",
    speciality: params.get("speciality") ?? "",
    hospital: params.get("hospital") ?? "",
    location: params.get("location") ?? "",
    sort: (["relevance", "featured", "name", "recent", "speciality"].includes(sort)
      ? sort
      : "") as DirectoryState["sort"],
  };
  // Keyed on the URL, so a link from the palette to a new filter while
  // already on this page starts fresh rather than keeping stale state.
  return <DirectoryClient key={params.toString()} {...props} initial={initial} />;
}

export function DirectoryClient({
  cards,
  lang,
  specialities,
  hospitals,
  locations,
  strings,
  defaultSort = "featured",
  initial = EMPTY,
}: Props & { initial?: DirectoryState }) {
  const router = useRouter();
  const [state, setState] = useState<DirectoryState>(initial);
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(-1);
  const [recent, setRecent] = useState<string[]>([]);
  const input = useRef<HTMLInputElement>(null);
  const listId = useId();
  const bn = textClass(lang);

  const set = (patch: Partial<DirectoryState>) => setState((s) => ({ ...s, ...patch }));

  // The index is built once for the life of the page, not per keystroke.
  const index = useMemo(() => buildDoctorIndex(cards), [cards]);
  const counts = useMemo(() => termCounts(cards), [cards]);
  const byId = useMemo(() => new Map(cards.map((card) => [card.id, card])), [cards]);
  const terms = useMemo(
    () => ({ speciality: specialities, hospital: hospitals, location: locations }),
    [specialities, hospitals, locations],
  );
  const termById = useMemo(() => {
    const map = new Map<string, Term>();
    for (const { kind } of KINDS) for (const t of terms[kind]) map.set(`${kind}:${t.id}`, t);
    return map;
  }, [terms]);
  const locationMap = useMemo(
    () => new Map(locations.map((term) => [term.id, term])),
    [locations],
  );

  // Keeps typing responsive: the input updates every keystroke, the expensive
  // filter runs against the settled value.
  const deferredQuery = useDeferredValue(state.q);
  const trimmed = deferredQuery.trim();

  // The URL follows the state, without a navigation or a history entry per
  // keystroke.
  useEffect(() => {
    const params = new URLSearchParams();
    (["q", "speciality", "hospital", "location", "sort"] as const).forEach((key) => {
      const value = state[key].trim();
      if (value) params.set(key, value);
    });
    const qs = params.toString();
    const next = `${window.location.pathname}${qs ? `?${qs}` : ""}`;
    if (next !== `${window.location.pathname}${window.location.search}`) {
      window.history.replaceState(window.history.state, "", next);
    }
  }, [state]);

  const sort: Sort = state.sort || (trimmed ? "relevance" : defaultSort);

  const results = useMemo(() => {
    let list = cards;
    if (trimmed) {
      // Keep the index's ranking: best match first.
      list = searchDoctors(index, trimmed)
        .map((id) => byId.get(id))
        .filter((card): card is Card => Boolean(card));
    }
    if (state.speciality) list = list.filter((c) => c.specialityIds.includes(state.speciality));
    if (state.hospital) list = list.filter((c) => c.hospitalIds.includes(state.hospital));
    if (state.location) list = list.filter((c) => c.locationIds.includes(state.location));

    const byText = (get: (c: Card) => string) => (a: Card, b: Card) =>
      get(a).localeCompare(get(b), lang === "bn" ? "bn" : "en");
    switch (sort) {
      case "relevance":
        return trimmed ? list : [...list].sort((a, b) => a.order - b.order);
      case "name":
        return [...list].sort(byText((c) => pick(c.name, lang).replace(/^(Dr\.?|ডা\.?)\s*/, "")));
      case "speciality":
        return [...list].sort(byText((c) => pick(c.speciality, lang)));
      case "recent":
        return [...list].sort((a, b) => b.updatedAt - a.updatedAt);
      default:
        return [...list].sort(
          (a, b) => Number(b.featured) - Number(a.featured) || a.order - b.order,
        );
    }
  }, [cards, index, byId, trimmed, state.speciality, state.hospital, state.location, sort, lang]);

  /* ---- Suggestions under the box --------------------------------------- */

  const live = state.q.trim();
  const suggestTerms: TermHit[] = useMemo(
    () =>
      live
        ? searchTerms(
            live,
            KINDS.map(({ kind }) => ({ kind, terms: terms[kind] })),
            counts,
            4,
          ).filter((hit) => state[hit.kind] !== hit.term.id)
        : [],
    [live, terms, counts, state],
  );
  const suggestDoctors = useMemo(
    () =>
      live
        ? searchDoctors(index, live)
            .slice(0, 4)
            .map((id) => byId.get(id))
            .filter((card): card is Card => Boolean(card))
        : [],
    [live, index, byId],
  );

  type Option =
    | { type: "recent"; q: string }
    | { type: "term"; hit: TermHit }
    | { type: "doctor"; card: Card };
  const options: Option[] = live
    ? [
        ...suggestTerms.map((hit) => ({ type: "term" as const, hit })),
        ...suggestDoctors.map((card) => ({ type: "doctor" as const, card })),
      ]
    : recent.map((q) => ({ type: "recent" as const, q }));
  const open = focused && options.length > 0;

  const choose = (option: Option) => {
    if (option.type === "recent") {
      set({ q: option.q });
    } else if (option.type === "term") {
      // Picking a filter replaces the words that suggested it.
      set({ q: "", [option.hit.kind]: option.hit.term.id });
      if (live) setRecent(pushRecent(live));
    } else {
      if (live) setRecent(pushRecent(live));
      router.push(localePath(lang, `/doctors/${option.card.linkNo}`));
      return;
    }
    setActive(-1);
    input.current?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" && options.length) {
      event.preventDefault();
      setActive((i) => (i + 1) % options.length);
    } else if (event.key === "ArrowUp" && options.length) {
      event.preventDefault();
      setActive((i) => (i <= 0 ? options.length - 1 : i - 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (open && active >= 0 && options[active]) choose(options[active]);
      else {
        if (live) setRecent(pushRecent(live));
        input.current?.blur();
      }
    } else if (event.key === "Escape") {
      if (state.q) set({ q: "" });
      else input.current?.blur();
    }
  };

  /* ---- Chips ------------------------------------------------------------ */

  const quick = useMemo(
    () =>
      [...specialities]
        .sort(
          (a, b) =>
            (counts.get(`speciality:${b.id}`) ?? 0) - (counts.get(`speciality:${a.id}`) ?? 0),
        )
        .slice(0, 8),
    [specialities, counts],
  );

  const chips = KINDS.flatMap(({ kind, key, icon }) => {
    const id = state[key];
    const term = id ? termById.get(`${kind}:${id}`) : undefined;
    return term ? [{ key, term, icon }] : [];
  });

  const dirty = Boolean(state.q || state.speciality || state.hospital || state.location);
  const countLabel = (kind: TermKind, id: string) =>
    formatNumberIn(counts.get(`${kind}:${id}`) ?? 0, lang);

  const selects = [
    { key: "speciality" as const, label: strings.speciality, terms: specialities },
    { key: "hospital" as const, label: strings.hospital, terms: hospitals },
    { key: "location" as const, label: strings.location, terms: locations },
  ];

  const sorts: { value: Sort; label: string }[] = [
    ...(trimmed ? [{ value: "relevance" as const, label: strings.sortRelevance }] : []),
    { value: "featured", label: strings.sortFeatured },
    { value: "name", label: strings.sortName },
    { value: "speciality", label: strings.sortSpeciality },
    { value: "recent", label: strings.sortRecent },
  ];

  return (
    <>
      <div className="hud-card hud-edge p-4 sm:p-5">
        {/* ---- The box, with its suggestion list ---------------------- */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-accent" />
          <input
            ref={input}
            data-page-search
            type="search"
            value={state.q}
            onChange={(event) => {
              set({ q: event.target.value });
              setActive(-1);
            }}
            onFocus={() => {
              setRecent(readRecent());
              setFocused(true);
            }}
            // Delayed so a click on a suggestion lands before the list closes.
            onBlur={() => setTimeout(() => setFocused(false), 120)}
            onKeyDown={onKeyDown}
            placeholder={strings.placeholder}
            aria-label={strings.searchDoctors}
            role="combobox"
            aria-expanded={open}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={open && active >= 0 ? `${listId}-${active}` : undefined}
            autoComplete="off"
            spellCheck={false}
            className={fieldClass(
              undefined,
              cn("h-14 pl-12 pr-24 text-base [&::-webkit-search-cancel-button]:hidden", bn),
            )}
          />
          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2">
            {state.q ? (
              <button
                type="button"
                onClick={() => {
                  set({ q: "" });
                  input.current?.focus();
                }}
                aria-label={strings.clear}
                className="grid size-8 place-items-center text-ink-faint transition-colors hover:text-accent"
              >
                <X className="size-4" />
              </button>
            ) : (
              <kbd className="kbd hidden sm:inline-grid" title={strings.shortcut}>
                /
              </kbd>
            )}
          </div>

          <div
            id={listId}
            role="listbox"
            aria-label={strings.filterBy}
            hidden={!open}
            className="absolute inset-x-0 top-full z-20 mt-1.5 max-h-[22rem] overflow-y-auto border border-line bg-surface py-1.5 shadow-e4"
          >
            {!live && recent.length ? (
              <p className={cn("hud-label px-4 pb-1 pt-2 !text-[0.62rem]", bn)}>
                {strings.recent}
              </p>
            ) : null}
            {live && suggestTerms.length ? (
              <p className={cn("hud-label px-4 pb-1 pt-2 !text-[0.62rem]", bn)}>
                {strings.filterBy}
              </p>
            ) : null}
            {options.map((option, i) => {
              const row = cn(
                "flex cursor-pointer items-center gap-3 border-l-2 px-4 py-2 text-sm transition-colors",
                i === active
                  ? "border-accent bg-accent-soft text-ink"
                  : "border-transparent text-ink-mute hover:bg-surface-2",
              );
              const common = {
                id: `${listId}-${i}`,
                role: "option" as const,
                "aria-selected": i === active,
                onMouseDown: (event: React.MouseEvent) => event.preventDefault(),
                onMouseMove: () => setActive(i),
                onClick: () => choose(option),
              };
              if (option.type === "recent") {
                return (
                  <div key={`r-${option.q}`} {...common} className={row}>
                    <History className="size-4 text-ink-faint" />
                    <span className={cn("truncate", bn)}>{option.q}</span>
                  </div>
                );
              }
              if (option.type === "term") {
                const Icon = KINDS.find((k) => k.kind === option.hit.kind)!.icon;
                return (
                  <div
                    key={`t-${option.hit.kind}-${option.hit.term.id}`}
                    {...common}
                    className={row}
                  >
                    <Icon className="size-4 shrink-0 text-accent" />
                    <span className={cn("flex-1 truncate", contentClass(option.hit.term.name, lang))}>
                      <Highlight text={pick(option.hit.term.name, lang)} query={live} />
                    </span>
                    <span className={cn("font-mono text-[0.68rem] text-ink-faint", bn)}>
                      {strings.doctorsCount.replace("{n}", formatNumberIn(option.hit.count, lang))}
                    </span>
                  </div>
                );
              }
              const first = i === suggestTerms.length;
              return (
                <div key={option.card.id}>
                  {first ? (
                    <p className={cn("hud-label px-4 pb-1 pt-3 !text-[0.62rem]", bn)}>
                      {strings.doctors}
                    </p>
                  ) : null}
                  <div {...common} className={row}>
                    <span className="size-8 shrink-0 overflow-hidden border border-line">
                      <Avatar name={option.card.name} seed={option.card.id} src={option.card.photoUrl} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={cn("block truncate text-ink", contentClass(option.card.name, lang))}>
                        <Highlight text={pick(option.card.name, lang)} query={live} />
                      </span>
                      <span className={cn("block truncate text-xs text-ink-faint", contentClass(option.card.speciality, lang))}>
                        {pick(option.card.speciality, lang)}
                      </span>
                    </span>
                    <CornerDownLeft
                      className={cn(
                        "size-4 shrink-0 text-accent transition-opacity",
                        i === active ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---- Quick filters ------------------------------------------ */}
        <div className="mt-4 flex items-center gap-3">
          <span className={cn("hidden shrink-0 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink-faint sm:inline", bn)}>
            {strings.quickFilters}
          </span>
          <div className="-mx-1 flex flex-1 gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {quick.map((term) => {
              const on = state.speciality === term.id;
              return (
                <button
                  key={term.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => set({ speciality: on ? "" : term.id })}
                  className={cn(
                    "flex shrink-0 items-center gap-2 border px-3 py-1.5 text-[0.8rem] transition-all duration-200 active:translate-y-px",
                    on
                      ? "cut border-accent bg-accent font-semibold text-accent-ink [--cut:6px]"
                      : "border-line bg-bg/60 text-ink-mute hover:-translate-y-0.5 hover:border-accent hover:text-accent",
                    contentClass(term.name, lang),
                  )}
                >
                  {pick(term.name, lang)}
                  <span
                    className={cn(
                      "font-mono text-[0.66rem]",
                      on ? "text-accent-ink/70" : "text-ink-faint",
                    )}
                  >
                    {countLabel("speciality", term.id)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ---- Filters and sort ---------------------------------------- */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {selects.map((select) => (
            <label key={select.key} className="relative block">
              <span className="sr-only">{select.label}</span>
              <SlidersHorizontal className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-ink-faint" />
              <select
                value={state[select.key]}
                onChange={(event) => set({ [select.key]: event.target.value })}
                className={fieldClass(
                  undefined,
                  cn(
                    "cursor-pointer pl-10",
                    state[select.key] && "border-accent text-accent",
                    bn,
                  ),
                )}
              >
                <option value="">{select.label}</option>
                {select.terms.map((term) => (
                  <option key={term.id} value={term.id}>
                    {pick(term.name, lang)} ({countLabel(select.key, term.id)})
                  </option>
                ))}
              </select>
            </label>
          ))}
          <label className="relative block">
            <span className="sr-only">{strings.sortBy}</span>
            <ArrowDownWideNarrow className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-ink-faint" />
            <select
              value={sort}
              onChange={(event) => set({ sort: event.target.value as Sort })}
              className={fieldClass(undefined, cn("cursor-pointer pl-10", bn))}
            >
              {sorts.map((option) => (
                <option key={option.value} value={option.value}>
                  {strings.sortBy}: {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {/* ---- Result line and active filters ---------------------------- */}
      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
        <p
          className={cn("font-display text-lg font-semibold uppercase tracking-[0.04em] text-ink", bn)}
          aria-live="polite"
        >
          <span className="text-accent">
            {strings.resultsTemplate.replace("{n}", formatNumberIn(results.length, lang))}
          </span>
          {trimmed ? <span className="text-ink-mute"> · “{trimmed}”</span> : null}
        </p>

        {chips.length ? (
          <ul aria-label={strings.activeFilters} className="flex flex-wrap gap-2">
            {chips.map(({ key, term, icon: Icon }) => (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => set({ [key]: "" })}
                  aria-label={`${strings.removeFilter}: ${pick(term.name, lang)}`}
                  className={cn(
                    "group flex items-center gap-2 border border-accent/50 bg-accent-soft py-1 pl-2.5 pr-1.5 text-sm text-accent transition-colors hover:border-hot hover:bg-hot-soft hover:text-hot",
                    contentClass(term.name, lang),
                  )}
                >
                  <Icon className="size-3.5" />
                  {pick(term.name, lang)}
                  <X className="size-3.5 transition-transform group-hover:rotate-90" />
                </button>
              </li>
            ))}
          </ul>
        ) : null}

        {dirty ? (
          <Button
            variant="ghost"
            size="sm"
            className={cn("ml-auto", bn)}
            onClick={() => setState({ ...EMPTY, sort: state.sort === "relevance" ? "" : state.sort })}
          >
            <X /> {strings.clear}
          </Button>
        ) : null}
      </div>

      {results.length === 0 ? (
        <div className="mt-8 border border-dashed border-line px-6 py-14 text-center">
          <p className={cn("font-display text-xl font-semibold uppercase text-ink", bn)}>
            {strings.noResults}
          </p>
          <p className={cn("mt-2 text-sm text-ink-mute", bn)}>{strings.noResultsHint}</p>
          {/* Offer the exact thing to undo, most restrictive first. */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {chips.map(({ key, term }) => (
              <Button
                key={key}
                variant="outline"
                size="sm"
                className={contentClass(term.name, lang)}
                onClick={() => set({ [key]: "" })}
              >
                <X /> {pick(term.name, lang)}
              </Button>
            ))}
            {state.q ? (
              <Button variant="outline" size="sm" className={bn} onClick={() => set({ q: "" })}>
                <X /> “{state.q}”
              </Button>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((card, i) => (
            <DoctorCard
              key={card.id}
              card={card}
              lang={lang}
              index={i}
              locations={locationMap}
              query={trimmed}
            />
          ))}
        </div>
      )}
    </>
  );
}
