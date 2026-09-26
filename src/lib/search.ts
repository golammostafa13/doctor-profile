import MiniSearch from "minisearch";
import type { Locale } from "@/lib/i18n/config";
import { pick, type Bilingual } from "@/lib/i18n/content";
import type { DoctorCard } from "@/lib/schema/doctor";
import type { Term } from "@/lib/schema/taxonomy";

/**
 * Search, shared by the directory and the site-wide search palette.
 *
 * Both need the same answer to "what does this query match", so both build
 * their index here. Client-safe: no server imports. Everything is in memory
 * over the whole roster, which at a few hundred doctors is a few tens of
 * kilobytes and answers in well under a frame.
 *
 * Forgiving by design, because the people searching are patients, not
 * librarians: prefix matching ("cardi" finds cardiologist), typo tolerance
 * ("cardiolgist" still does), both languages in one index (typing "হৃদরোগ" on
 * the English page works), and Bengali digits folded to Latin so a phone
 * number typed either way matches.
 */

export type TermKind = "speciality" | "hospital" | "location";

export interface TermHit {
  kind: TermKind;
  term: Term;
  /** How many doctors carry this term — shown beside the suggestion. */
  count: number;
}

const BN_DIGITS = "০১২৩৪৫৬৭৮৯";

/** Lowercased, Bengali digits folded to Latin, whitespace collapsed. */
export function normalise(text: string): string {
  return text
    .replace(/[০-৯]/g, (d) => String(BN_DIGITS.indexOf(d)))
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function both(value: Bilingual | undefined): string {
  return [value?.en, value?.bn].filter(Boolean).join(" ");
}

/** The doctor index: name weighted highest, then speciality, then the rest. */
export function buildDoctorIndex(cards: DoctorCard[]) {
  const index = new MiniSearch<{
    id: string;
    name: string;
    speciality: string;
    rest: string;
  }>({
    fields: ["name", "speciality", "rest"],
    idField: "id",
    processTerm: (term) => normalise(term),
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
      boost: { name: 3, speciality: 2 },
      // Every word the reader typed should count, but a query of three words
      // where one is a typo should still find something — so OR, ranked.
      combineWith: "OR",
    },
  });
  index.addAll(
    cards.map((card) => ({
      id: card.id,
      name: both(card.name),
      speciality: both(card.speciality),
      rest: [
        both(card.workplace),
        both(card.designation),
        card.degreesShort,
      ].join(" "),
    })),
  );
  return index;
}

/** Ids of the matching doctors, best match first. */
export function searchDoctors(
  index: ReturnType<typeof buildDoctorIndex>,
  query: string,
): string[] {
  const q = query.trim();
  if (!q) return [];
  return index.search(q).map((hit) => String(hit.id));
}

/**
 * Terms — specialities, hospitals, districts — whose name matches the query.
 *
 * A plain substring test on both languages rather than a fuzzy index: there
 * are only a few dozen terms, and "does the word I typed appear in it" is the
 * rule a reader expects a filter suggestion to follow.
 */
export function searchTerms(
  query: string,
  groups: { kind: TermKind; terms: Term[] }[],
  counts: Map<string, number>,
  limit = 6,
): TermHit[] {
  const q = normalise(query);
  if (!q) return [];
  const out: (TermHit & { rank: number })[] = [];
  for (const { kind, terms } of groups) {
    for (const term of terms) {
      const hay = normalise(both(term.name));
      const at = hay.indexOf(q);
      if (at === -1) continue;
      out.push({
        kind,
        term,
        count: counts.get(`${kind}:${term.id}`) ?? 0,
        // A match at the start of a word beats one in the middle.
        rank: at === 0 || hay[at - 1] === " " ? 0 : 1,
      });
    }
  }
  return out
    .sort((a, b) => a.rank - b.rank || b.count - a.count)
    .slice(0, limit)
    .map((hit) => ({ kind: hit.kind, term: hit.term, count: hit.count }));
}

/** `kind:id` → number of doctors, for every term any doctor carries. */
export function termCounts(cards: DoctorCard[]): Map<string, number> {
  const counts = new Map<string, number>();
  const bump = (key: string) => counts.set(key, (counts.get(key) ?? 0) + 1);
  for (const card of cards) {
    card.specialityIds.forEach((id) => bump(`speciality:${id}`));
    card.hospitalIds.forEach((id) => bump(`hospital:${id}`));
    card.locationIds.forEach((id) => bump(`location:${id}`));
  }
  return counts;
}

/**
 * Split text around the query's words, for highlighting.
 *
 * Matches the start of words only, the way the index matches, so the
 * highlight shows WHY a result came back rather than every stray letter.
 */
export function highlight(
  text: string,
  query: string,
): { text: string; hit: boolean }[] {
  const words = normalise(query)
    .split(" ")
    .filter((w) => w.length > 0)
    .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (words.length === 0 || !text) return [{ text, hit: false }];
  const pattern = new RegExp(`(^|[\\s(,./-])(${words.join("|")})`, "giu");
  const parts: { text: string; hit: boolean }[] = [];
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const start = match.index + match[1].length;
    const end = start + match[2].length;
    if (start > last) parts.push({ text: text.slice(last, start), hit: false });
    parts.push({ text: text.slice(start, end), hit: true });
    last = end;
  }
  if (last < text.length) parts.push({ text: text.slice(last), hit: false });
  return parts;
}

/** The label a term suggestion shows, in the reader's language. */
export function termLabel(hit: TermHit, lang: Locale): string {
  return pick(hit.term.name, lang);
}

/* ------------------------------------------------------------------------
   Recent searches — a per-browser convenience, so every access is guarded:
   storage can be absent, full, or throw outright in a private window.
   ------------------------------------------------------------------------ */

const RECENT_KEY = "dp:recent-searches";

export function readRecent(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    const list: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list.filter((x) => typeof x === "string").slice(0, 6) : [];
  } catch {
    return [];
  }
}

export function pushRecent(query: string): string[] {
  const q = query.trim();
  if (q.length < 2) return readRecent();
  const next = [q, ...readRecent().filter((x) => normalise(x) !== normalise(q))].slice(0, 6);
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable; the search itself still works */
  }
  return next;
}

export function clearRecent(): void {
  try {
    localStorage.removeItem(RECENT_KEY);
  } catch {
    /* nothing to clear */
  }
}
