import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";

/**
 * The wordmark: the mark in a gradient tile, then the name in two tones.
 *
 * One component for every place the name appears — header, footer, sign-in,
 * the admin rail — because a mark re-typed at each call site drifts. The
 * gradients live in `globals.css` (`.brand-mark`, `.brand-grad`) rather than
 * here, so both halves of the lockup pull from the same three brand tokens and
 * stay in step through the light/dark swap.
 */

const sizes = {
  sm: { tile: "size-8", text: "text-[1.05rem]" },
  md: { tile: "size-9", text: "text-[clamp(1rem,4.4vw,1.2rem)]" },
  lg: { tile: "size-11", text: "text-[1.5rem]" },
} as const;

/**
 * The mark: a profile with a pulse.
 *
 * A head above a single cardiac trace. It says *profile* — this is a directory
 * of people, and the head is the thing every entry has a photograph of — and
 * it says *medicine*, without reaching for either of the two clichés. A
 * caduceus is illegible below about 32px and means "commerce" as often as
 * "medicine"; a red cross is a protected emblem that a private directory has
 * no business borrowing.
 *
 * It is not a sibling's mark recoloured, and that is deliberate. The Cef-3
 * library's drawing had three page-leaves in it because the three leaves *were*
 * the "3"; carried across to a different site they would have been three
 * leaves that mean nothing, which is the most common way a rebrand goes
 * visibly wrong.
 *
 * Two shapes, no more, because this has to survive a 16px browser tab. Earlier
 * drafts cut the trace *through* a pair of shoulders, which at small sizes
 * read unmistakably as a photograph placeholder — a sun over mountains. The
 * shoulders are gone and the trace stands clear of the head for that reason;
 * if either is put back, re-render the favicon strip before believing it works.
 *
 * Every path is `currentColor`, so the tile decides: void on the volt tile
 * here, white in the icon script's own copy.
 * The art carries its own padding inside the 48-unit box, so it can be dropped
 * in at any size without a wrapper doing the insetting.
 *
 * Duplicated in `scripts/build-icons.mjs`, which cannot import a TSX
 * component. Edit one, edit the other, and re-run the script.
 */
export function BrandArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <circle cx="24" cy="15.4" r="7" fill="currentColor" />
      <path
        d="M10 33.6h5.4l3-6.4 4 13 3.4-8.4 2.2 1.8H38"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Brand({
  lang,
  size = "md",
  className,
  withText = true,
}: {
  lang: Locale;
  size?: keyof typeof sizes;
  className?: string;
  withText?: boolean;
}) {
  const s = sizes[size];
  const name = lang === "bn" ? site.nameBn : site.name;
  // The last word goes volt: "Doctors PROFILE" / "ডক্টরস প্রোফাইল".
  const split = name.lastIndexOf(" ");
  const head = split > 0 ? name.slice(0, split + 1) : "";
  const tail = split > 0 ? name.slice(split + 1) : name;
  // Bengali gets the joining-script treatment; the Latin name must not.
  const bn = lang === "bn" ? "bn" : undefined;

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className={cn("brand-mark grid place-items-center text-accent-ink", s.tile)}>
        <BrandArt className="size-[72%]" />
      </span>
      {withText ? (
        <span
          className={cn(
            "brand-grad whitespace-nowrap font-display font-bold uppercase tracking-[0.02em]",
            s.text,
            bn,
          )}
        >
          {head}
          <span className="text-accent">{tail}</span>
        </span>
      ) : null}
    </span>
  );
}
