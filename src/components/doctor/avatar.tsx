import { cn } from "@/lib/utils";
import type { Bilingual } from "@/lib/schema/common";

/**
 * A doctor's portrait, or a drawn stand-in when there is none.
 *
 * Most profiles in a new directory have no photograph, and a grid of identical
 * grey person-icons is both ugly and useless — you cannot tell one card from
 * another while scanning. So the fallback is derived from the doctor: initials
 * over a gradient whose hue comes from their id, which makes every card
 * visually distinct and stable. The same doctor always gets the same tile, on
 * every device, with no storage and no network.
 *
 * The site allows three colours, so the tile cannot take a hue from the
 * wheel. It varies within the palette instead: volt or signal initials, and a
 * diagonal cut whose angle comes from the id.
 *
 * Drawn as inline SVG rather than a canvas or an uploaded placeholder image:
 * it costs no request, needs no CSP entry, and renders identically on the
 * server, so there is nothing to hydrate and no flash of a wrong colour.
 */

function initials(name: string): string {
  const words = name
    .replace(/^(Dr\.?|ডা\.?|Prof\.?|অধ্যাপক)\s+/i, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

/**
 * A stable number from a string.
 *
 * FNV-1a rather than summing char codes: a sum gives anagrams the same tile
 * and clusters short names together.
 */
function hash(seed: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

export function Avatar({
  name,
  seed,
  src,
  className,
  rounded = "rounded-none",
}: {
  name: Bilingual | string;
  /** Stable per doctor — the id, not the name, so a rename keeps the colour. */
  seed: string;
  src?: string | null;
  className?: string;
  rounded?: string;
}) {
  const label = typeof name === "string" ? name : name.en;

  // Stock photographs on the invented demo roster (scripts/fetch-demo-photos.mjs)
  // are models, not the doctors named beside them, so they say so.
  if (src?.startsWith("/demo/photos/")) {
    return (
      <span className={cn("@container relative block h-full w-full overflow-hidden", rounded, className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${label} (demo photo)`}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {/* Too small to read on a thumbnail, so it appears from 7rem up. */}
        <span
          aria-hidden
          className="absolute bottom-1.5 left-1.5 hidden bg-bg/80 px-1.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-accent @[7rem]:block"
        >
          Demo photo
        </span>
      </span>
    );
  }

  if (src) {
    return (
      // Sized by the caller's aspect box and served from this origin with an
      // immutable, content-addressed URL, so next/image would add an optimiser
      // round trip to an image that is already exactly the bytes we want.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={label}
        className={cn("h-full w-full object-cover", rounded, className)}
        loading="lazy"
        decoding="async"
      />
    );
  }

  const h = hash(seed);
  const tone = h % 2 === 0 ? "var(--accent)" : "var(--signal)";
  const slant = 30 + (h % 40);
  const gradientId = `av-${seed.replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label={label}
      className={cn("h-full w-full", rounded, className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={tone} stopOpacity="0.28" />
          <stop offset="100%" stopColor={tone} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="var(--surface-2)" />
      <path d={`M0 ${slant}L${slant} 0H100V100H0Z`} fill={`url(#${gradientId})`} />
      <path d="M4 16V4h12M84 96h12V84" stroke={tone} strokeWidth="2.5" fill="none" />
      <text
        x="50"
        y="52"
        textAnchor="middle"
        dominantBaseline="central"
        fill={tone}
        fontSize="36"
        fontWeight="700"
        fontFamily="var(--grotesk)"
        letterSpacing="1"
      >
        {initials(label)}
      </text>
    </svg>
  );
}
