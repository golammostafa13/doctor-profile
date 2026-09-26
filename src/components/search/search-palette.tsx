"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Building2,
  CornerDownLeft,
  History,
  Loader2,
  MapPin,
  Search,
  Stethoscope,
  X,
} from "lucide-react";
import { Avatar } from "@/components/doctor/avatar";
import { Highlight } from "@/components/search/highlight";
import type { Dictionary } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/i18n/config";
import { contentClass, pick, textClass } from "@/lib/i18n/content";
import { formatNumberIn } from "@/lib/i18n/format";
import {
  buildDoctorIndex,
  clearRecent,
  pushRecent,
  readRecent,
  searchDoctors,
  searchTerms,
  termCounts,
  type TermHit,
  type TermKind,
} from "@/lib/search";
import type { DoctorCard } from "@/lib/schema/doctor";
import type { Term } from "@/lib/schema/taxonomy";
import { cn } from "@/lib/utils";

/**
 * The site-wide search palette.
 *
 * Opened from the header, or from anywhere with "/" or Ctrl/⌘+K. Results
 * arrive as the reader types — matching doctors, and the specialities,
 * hospitals and districts whose names match, each of which is a one-click
 * filter on the directory. With nothing typed it offers recent searches and
 * the most common specialities, so an empty box is never a dead end.
 *
 * A native <dialog> opened with showModal(): focus trapping, Esc to close and
 * the inert background come from the browser rather than from code here.
 * The input is an ARIA combobox over one flat listbox, so arrow keys walk
 * every option across all groups and a screen reader hears which one is
 * active.
 *
 * The roster is fetched on first open (see /api/search), not shipped with the
 * page, and kept for the life of the tab.
 */

interface Payload {
  cards: DoctorCard[];
  specialities: Term[];
  hospitals: Term[];
  locations: Term[];
}

let payload: Promise<Payload> | null = null;
function loadPayload(): Promise<Payload> {
  payload ??= fetch("/api/search")
    .then((res) => {
      if (!res.ok) throw new Error(String(res.status));
      return res.json() as Promise<Payload>;
    })
    .catch((error) => {
      payload = null; // let the next open try again
      throw error;
    });
  return payload;
}

type Option =
  | { type: "doctor"; card: DoctorCard; href: string }
  | { type: "term"; hit: TermHit; href: string }
  | { type: "query"; query: string; href: string };

const TERM_PARAM: Record<TermKind, string> = {
  speciality: "speciality",
  hospital: "hospital",
  location: "location",
};

const TERM_ICON: Record<TermKind, typeof Stethoscope> = {
  speciality: Stethoscope,
  hospital: Building2,
  location: MapPin,
};

export function SearchPalette({
  lang,
  strings,
}: {
  lang: Locale;
  strings: Dictionary["search"];
}) {
  const router = useRouter();
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const listId = useId();
  const bn = textClass(lang);

  const [data, setData] = useState<Payload | null>(null);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [recent, setRecent] = useState<string[]>([]);

  const open = useCallback(() => {
    const el = dialog.current;
    if (!el || el.open) return;
    setRecent(readRecent());
    setActive(0);
    el.showModal();
    input.current?.select();
    loadPayload()
      .then((next) => {
        setData(next);
        setFailed(false);
      })
      .catch(() => setFailed(true));
  }, []);

  const close = useCallback(() => dialog.current?.close(), []);

  // "/" (outside a text field) and Ctrl/⌘+K open the palette from anywhere.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing =
        target?.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target?.tagName ?? "");
      if ((event.key === "k" || event.key === "K") && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        open();
      } else if (event.key === "/" && !typing && !event.metaKey && !event.ctrlKey) {
        event.preventDefault();
        // On a page with its own search box (the directory), "/" means that
        // box; Ctrl/⌘+K still opens the palette there.
        const local = document.querySelector<HTMLInputElement>("[data-page-search]");
        if (local) local.focus();
        else open();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const index = useMemo(() => (data ? buildDoctorIndex(data.cards) : null), [data]);
  const counts = useMemo(() => (data ? termCounts(data.cards) : new Map()), [data]);
  const byId = useMemo(
    () => new Map(data?.cards.map((card) => [card.id, card]) ?? []),
    [data],
  );

  const trimmed = query.trim();
  const directory = localePath(lang, "/doctors");

  const { doctors, terms, popular } = useMemo(() => {
    if (!data || !index) return { doctors: [], terms: [], popular: [] };
    const groups = [
      { kind: "speciality" as const, terms: data.specialities },
      { kind: "hospital" as const, terms: data.hospitals },
      { kind: "location" as const, terms: data.locations },
    ];
    const popular: TermHit[] = data.specialities
      .map((term) => ({
        kind: "speciality" as const,
        term,
        count: counts.get(`speciality:${term.id}`) ?? 0,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
    if (!trimmed) return { doctors: [], terms: [], popular };
    return {
      doctors: searchDoctors(index, trimmed)
        .slice(0, 6)
        .map((id) => byId.get(id))
        .filter((card): card is DoctorCard => Boolean(card)),
      terms: searchTerms(trimmed, groups, counts, 5),
      popular,
    };
  }, [data, index, counts, byId, trimmed]);

  const termHref = (hit: TermHit) =>
    `${directory}?${TERM_PARAM[hit.kind]}=${encodeURIComponent(hit.term.id)}`;

  // One flat list, in the order the groups are drawn, so the arrow keys and
  // aria-activedescendant agree with what the eye sees.
  const options: Option[] = useMemo(() => {
    if (!trimmed) {
      return [
        ...recent.map((q) => ({
          type: "query" as const,
          query: q,
          href: `${directory}?q=${encodeURIComponent(q)}`,
        })),
        ...popular.map((hit) => ({ type: "term" as const, hit, href: termHref(hit) })),
      ];
    }
    return [
      ...terms.map((hit) => ({ type: "term" as const, hit, href: termHref(hit) })),
      ...doctors.map((card) => ({
        type: "doctor" as const,
        card,
        href: localePath(lang, `/doctors/${card.linkNo}`),
      })),
      {
        type: "query" as const,
        query: trimmed,
        href: `${directory}?q=${encodeURIComponent(trimmed)}`,
      },
    ];
    // termHref is derived from `directory`, which is listed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trimmed, recent, popular, terms, doctors, directory, lang]);

  const go = (option: Option | undefined) => {
    if (!option) return;
    if (trimmed) setRecent(pushRecent(trimmed));
    else if (option.type === "query") setRecent(pushRecent(option.query));
    close();
    router.push(option.href);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => (options.length ? (i + 1) % options.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => (options.length ? (i - 1 + options.length) % options.length : 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      go(options[active] ?? options[options.length - 1]);
    }
  };

  // Keep the active option scrolled into view inside the result list.
  useEffect(() => {
    document
      .getElementById(`${listId}-${active}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active, listId]);

  const optionProps = (i: number, option: Option) => ({
    id: `${listId}-${i}`,
    role: "option" as const,
    "aria-selected": i === active,
    onMouseMove: () => setActive(i),
    onClick: () => go(option),
    className: cn(
      "group flex w-full cursor-pointer items-center gap-3 border-l-2 px-4 py-2.5 text-left transition-colors duration-150",
      i === active
        ? "border-accent bg-accent-soft text-ink"
        : "border-transparent text-ink-mute",
    ),
  });

  const last = options.length - 1;
  const groupLabel = (label: string, extra?: React.ReactNode) => (
    <div className="flex items-center justify-between px-4 pb-1.5 pt-4">
      <span className={cn("hud-label !text-[0.64rem]", bn)}>{label}</span>
      {extra}
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={open}
        onPointerEnter={() => void loadPayload().catch(() => {})}
        aria-label={strings.open}
        aria-haspopup="dialog"
        className={cn(
          "group flex h-10 items-center gap-2.5 border border-line bg-surface/70 px-3 text-sm text-ink-faint transition-colors duration-200 hover:border-accent hover:text-ink lg:w-64",
          bn,
        )}
      >
        <Search className="size-4 shrink-0 transition-colors group-hover:text-accent" />
        <span className="hidden flex-1 truncate text-left lg:inline">{strings.open}</span>
        <kbd className="kbd hidden lg:inline-grid">/</kbd>
      </button>

      <dialog
        ref={dialog}
        onClose={() => setQuery("")}
        // A click on the backdrop lands on the <dialog> itself.
        onClick={(event) => {
          if (event.target === dialog.current) close();
        }}
        aria-label={strings.open}
        className="search-dialog m-0 mx-auto mt-[8vh] w-[min(40rem,calc(100vw-2rem))] max-w-none border border-line bg-surface p-0 text-ink shadow-e4 backdrop:bg-bg/75 backdrop:backdrop-blur-sm"
      >
        <div className="hud-card border-0 bg-transparent">
          <div className="flex items-center gap-3 border-b border-line px-4">
            <Search className="size-5 shrink-0 text-accent" />
            <input
              ref={input}
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActive(0);
              }}
              onKeyDown={onKeyDown}
              placeholder={strings.placeholder}
              aria-label={strings.placeholder}
              role="combobox"
              aria-expanded="true"
              aria-controls={listId}
              aria-autocomplete="list"
              aria-activedescendant={options.length ? `${listId}-${active}` : undefined}
              autoComplete="off"
              spellCheck={false}
              className={cn(
                "h-14 min-w-0 flex-1 bg-transparent text-base text-ink placeholder:text-ink-faint focus:outline-none [&::-webkit-search-cancel-button]:hidden",
                bn,
              )}
            />
            {query ? (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  input.current?.focus();
                }}
                aria-label={strings.clearRecent}
                className="grid size-7 place-items-center text-ink-faint hover:text-accent"
              >
                <X className="size-4" />
              </button>
            ) : null}
            <kbd className="kbd">Esc</kbd>
          </div>

          <div
            id={listId}
            role="listbox"
            aria-label={strings.suggestions}
            className="max-h-[min(60vh,28rem)] overflow-y-auto pb-2"
          >
            {!data ? (
              <p
                className={cn(
                  "flex items-center gap-2 px-4 py-8 text-sm text-ink-faint",
                  bn,
                )}
              >
                {failed ? null : <Loader2 className="size-4 animate-spin" />}
                {failed ? strings.nothingHint : strings.loading}
              </p>
            ) : !trimmed ? (
              <>
                {recent.length ? (
                  <>
                    {groupLabel(
                      strings.recent,
                      <button
                        type="button"
                        onClick={() => {
                          clearRecent();
                          setRecent([]);
                          input.current?.focus();
                        }}
                        className={cn(
                          "font-mono text-[0.66rem] uppercase tracking-[0.16em] text-ink-faint hover:text-accent",
                          bn,
                        )}
                      >
                        {strings.clearRecent}
                      </button>,
                    )}
                    {recent.map((q, i) => {
                      return (
                        <div key={`r-${q}`} {...optionProps(i, options[i])}>
                          <History className="size-4 shrink-0 text-ink-faint" />
                          <span className={cn("flex-1 truncate", bn)}>{q}</span>
                          <ArrowRight className="size-4 opacity-0 transition-opacity group-aria-selected:opacity-100" />
                        </div>
                      );
                    })}
                  </>
                ) : null}
                {groupLabel(strings.popular)}
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {popular.map((hit, p) => {
                    const i = recent.length + p;
                    const option = options[i];
                    return (
                      <TermRow
                        key={`p-${hit.term.id}`}
                        hit={hit}
                        lang={lang}
                        count={strings.doctorsCount}
                        query=""
                        props={optionProps(i, option)}
                      />
                    );
                  })}
                </div>
                <a
                  href={directory}
                  onClick={(event) => {
                    event.preventDefault();
                    close();
                    router.push(directory);
                  }}
                  className={cn(
                    "mx-4 mt-3 flex items-center justify-center gap-2 border border-dashed border-line py-2.5 font-display text-sm uppercase tracking-[0.08em] text-ink-mute transition-colors hover:border-accent hover:text-accent",
                    bn,
                  )}
                >
                  {strings.browseAll} <ArrowRight className="size-4" />
                </a>
              </>
            ) : (
              <>
                {terms.length ? (
                  <>
                    {groupLabel(strings.filterBy)}
                    {terms.map((hit, i) => {
                      const option = options[i];
                      return (
                        <TermRow
                          key={`t-${hit.kind}-${hit.term.id}`}
                          hit={hit}
                          lang={lang}
                          count={strings.doctorsCount}
                          query={trimmed}
                          props={optionProps(i, option)}
                        />
                      );
                    })}
                  </>
                ) : null}

                {doctors.length ? (
                  <>
                    {groupLabel(strings.doctors)}
                    {doctors.map((card, d) => {
                      const i = terms.length + d;
                      const option = options[i];
                      return (
                        <div key={card.id} {...optionProps(i, option)}>
                          <span className="size-10 shrink-0 overflow-hidden">
                            <Avatar name={card.name} seed={card.id} src={card.photoUrl} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span
                              className={cn(
                                "block truncate font-medium text-ink",
                                contentClass(card.name, lang),
                              )}
                            >
                              <Highlight text={pick(card.name, lang)} query={trimmed} />
                            </span>
                            <span
                              className={cn(
                                "block truncate text-xs text-ink-faint",
                                contentClass(card.speciality, lang),
                              )}
                            >
                              <Highlight
                                text={`${pick(card.speciality, lang)} · ${pick(card.workplace, lang)}`}
                                query={trimmed}
                              />
                            </span>
                          </span>
                          <CornerDownLeft className="size-4 shrink-0 text-accent opacity-0 transition-opacity group-aria-selected:opacity-100" />
                        </div>
                      );
                    })}
                  </>
                ) : null}

                {!terms.length && !doctors.length ? (
                  <div className="px-4 py-8 text-center">
                    <p className={cn("font-display text-ink", bn)}>
                      {strings.nothing.replace("{q}", trimmed)}
                    </p>
                    <p className={cn("mt-1.5 text-sm text-ink-faint", bn)}>
                      {strings.nothingHint}
                    </p>
                  </div>
                ) : null}

                <div className="mt-2 border-t border-line font-display text-sm uppercase tracking-[0.06em]">
                  <div {...optionProps(last, options[last])}>
                    <Search className="size-4 shrink-0 text-accent" />
                    <span className={cn("flex-1 truncate", bn)}>
                      {strings.seeAll.replace("{q}", trimmed)}
                    </span>
                    <ArrowRight className="size-4 shrink-0" />
                  </div>
                </div>
              </>
            )}
          </div>

          <div
            className={cn(
              "hidden items-center gap-4 border-t border-line px-4 py-2.5 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink-faint sm:flex",
              bn,
            )}
          >
            <span className="flex items-center gap-1.5">
              <kbd className="kbd">↑</kbd>
              <kbd className="kbd">↓</kbd> {strings.navigate}
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="kbd">↵</kbd> {strings.select}
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="kbd">Esc</kbd> {strings.dismiss}
            </span>
          </div>
        </div>
      </dialog>
    </>
  );
}

function TermRow({
  hit,
  lang,
  count,
  query,
  props,
}: {
  hit: TermHit;
  lang: Locale;
  count: string;
  query: string;
  props: React.HTMLAttributes<HTMLDivElement> & { id: string };
}) {
  const Icon = TERM_ICON[hit.kind];
  return (
    <div {...props}>
      <span className="grid size-8 shrink-0 place-items-center border border-line text-accent group-aria-selected:border-accent">
        <Icon className="size-4" />
      </span>
      <span className={cn("min-w-0 flex-1 truncate", contentClass(hit.term.name, lang))}>
        <Highlight text={pick(hit.term.name, lang)} query={query} />
      </span>
      <span className={cn("shrink-0 font-mono text-[0.68rem] text-ink-faint", textClass(lang))}>
        {count.replace("{n}", formatNumberIn(hit.count, lang))}
      </span>
    </div>
  );
}
