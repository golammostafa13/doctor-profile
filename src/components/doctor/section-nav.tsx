"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { textClass } from "@/lib/i18n/content";
import { formatNumberIn } from "@/lib/i18n/format";
import { cn } from "@/lib/utils";

/**
 * The profile's in-page navigation.
 *
 * A profile runs to thirteen sections, and on a phone the chamber address —
 * the thing most visitors came for — is several screens down. This bar sticks
 * under the site header, marks the section being read, and jumps to any other.
 *
 * Every chip is a real `#fragment` link, so it works before hydration and with
 * JavaScript off; the script only adds the smooth offset scroll and the
 * tracking pill. Tracking is a scroll listener measuring section tops against
 * a reading line rather than an IntersectionObserver, because "which section
 * is under the line" is one comparison per section, and an observer answers a
 * different question (what is visible), which is ambiguous when two short
 * sections share the screen.
 */
export function SectionNav({
  items,
  lang,
  label,
}: {
  items: { id: string; label: string }[];
  lang: Locale;
  label: string;
}) {
  const [active, setActive] = useState(items[0]?.id);
  const bar = useRef<HTMLDivElement>(null);
  const pill = useRef<HTMLSpanElement>(null);
  const rail = useRef<HTMLSpanElement>(null);

  // Where a section counts as "being read": the bar's STUCK bottom edge —
  // its sticky `top` (the header's height) plus its own height — plus some
  // air. Not its current rect: before the bar sticks that is far down the
  // page, and a jump measured from there would overshoot by the whole hero.
  const offset = () => {
    const el = bar.current;
    if (!el) return 136;
    return (parseFloat(getComputedStyle(el).top) || 0) + el.offsetHeight + 24;
  };

  // A section's top in document coordinates, from layout rather than
  // getBoundingClientRect. Sections run a scroll-scrubbed `.reveal`, so while
  // one is still entering its rect is pushed down by the entrance transform,
  // and a jump aimed at the rect would land under this bar.
  const docTop = (el: HTMLElement | null) => {
    let y = 0;
    for (let node: HTMLElement | null = el; node; node = node.offsetParent as HTMLElement | null) {
      y += node.offsetTop;
    }
    return y;
  };

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const line = window.scrollY + offset();
      let current = items[0]?.id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && docTop(el) <= line) current = item.id;
      }
      // At the very bottom the last short sections can never reach the line,
      // so the last one wins once there is nowhere further to scroll.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        current = items[items.length - 1]?.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [items]);

  // Slide the pill under the active chip, and keep that chip in view inside
  // the horizontally scrolling bar. `scrollIntoView` is not used because it
  // would also scroll the page vertically.
  useLayoutEffect(() => {
    const track = bar.current?.querySelector<HTMLElement>("[data-track]");
    const chip = track?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!track || !chip || !pill.current) return;
    pill.current.style.transform = `translateX(${chip.offsetLeft}px)`;
    pill.current.style.width = `${chip.offsetWidth}px`;
    pill.current.style.opacity = "1";
    // The lit segment of the bar's floor follows the tab, a beat behind it.
    if (rail.current) {
      rail.current.style.transform = `translateX(${chip.offsetLeft}px)`;
      rail.current.style.width = `${chip.offsetWidth}px`;
      rail.current.style.opacity = "1";
    }
    const left = chip.offsetLeft - track.clientWidth / 2 + chip.offsetWidth / 2;
    track.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  function jump(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();
    const top = docTop(el) - offset() + 8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", `#${id}`);
    setActive(id);
  }

  if (items.length < 2) return null;

  return (
    <div
      ref={bar}
      className="sticky top-16 z-30 -mx-4 mt-10 border-b border-line bg-bg/88 px-4 backdrop-blur-[18px] backdrop-saturate-150"
    >
      <nav aria-label={label} className={cn(textClass(lang))}>
        <div
          data-track
          className="relative -mx-4 flex gap-0.5 overflow-x-auto px-4 py-2.5 [mask-image:linear-gradient(90deg,transparent,#000_1rem,#000_calc(100%-1rem),transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* The active tab: a volt slab with its corners cut, like the
              primary button, and a lit strip under it on the bar's floor. */}
          <span
            ref={pill}
            aria-hidden="true"
            className="cut btn-glow pointer-events-none absolute left-0 top-2.5 h-9 bg-accent opacity-0 transition-[transform,width,opacity] duration-[var(--dur-normal)] ease-[var(--ease-physical)] [--cut:9px]"
          />
          <span
            ref={rail}
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-0.5 bg-accent opacity-0 transition-[transform,width,opacity] delay-75 duration-[var(--dur-slow)] ease-[var(--ease-physical)]"
          />
          {items.map((item, i) => (
            <a
              key={item.id}
              data-id={item.id}
              href={`#${item.id}`}
              onClick={(event) => jump(event, item.id)}
              aria-current={active === item.id ? "location" : undefined}
              className={cn(
                "group relative flex h-9 shrink-0 items-center gap-2 whitespace-nowrap px-4 font-display text-[0.8rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-200",
                active === item.id ? "text-accent-ink" : "text-ink-mute hover:text-accent",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "font-mono text-[0.66rem] font-medium tabular-nums transition-colors",
                  active === item.id ? "text-accent-ink/60" : "text-ink-faint group-hover:text-hot",
                )}
              >
                {formatNumberIn(i + 1, lang).padStart(2, lang === "bn" ? "০" : "0")}
              </span>
              {item.label}
              {/* A hover tick in the corner, where the cut would be. */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute right-1 top-1 size-1.5 border-r border-t border-accent opacity-0 transition-opacity duration-200",
                  active !== item.id && "group-hover:opacity-100",
                )}
              />
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
