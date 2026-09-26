"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/lib/i18n/config";
import { formatCompactIn, formatNumberIn } from "@/lib/i18n/format";
import { cn } from "@/lib/utils";

/**
 * A figure that counts up to its value once the page has painted.
 *
 * The server renders the final value, so the number is right without
 * JavaScript, in a crawler and for a screen reader — the animated digits are
 * `aria-hidden` and the real one sits beside them in an `sr-only` span. It only
 * animates from zero after hydration, and the hero it lives in is still fading
 * in under `.rise` then, so the swap from the final value to zero is never
 * visible.
 *
 * Driven by requestAnimationFrame rather than CSS, because `@property`
 * counters cannot format Bengali digits or compact notation, and the digits
 * must stay in the reader's own script the whole way up.
 */
export function CountUp({
  value,
  lang,
  compact = false,
  prefix = "",
  suffix = "",
  delay = 0,
  className,
}: {
  value: number;
  lang: Locale;
  compact?: boolean;
  prefix?: string;
  suffix?: string;
  /** Milliseconds, so a row of figures can land one after another. */
  delay?: number;
  className?: string;
}) {
  const format = (n: number) =>
    compact ? formatCompactIn(n, lang) : formatNumberIn(n, lang);
  const digits = useRef<HTMLSpanElement>(null);

  // Written straight to the text node each frame rather than through state:
  // sixty re-renders a second of a component whose only output is a string
  // would be all cost and no benefit.
  useEffect(() => {
    const el = digits.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const write = (n: number) => {
      el.textContent = compact ? formatCompactIn(n, lang) : formatNumberIn(n, lang);
    };

    // --dur-block. An ease-out-expo, so the digits rush and then settle, which
    // reads as a total arriving rather than a timer running.
    const duration = 1400;
    let start = 0;
    let frame = 0;
    write(0);
    el.classList.remove("count-landed");

    const tick = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, Math.max(0, (now - start - delay) / duration));
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      write(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
      else el.classList.add("count-landed");
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      write(value);
    };
  }, [value, delay, compact, lang]);

  const final = `${prefix}${format(value)}${suffix}`;

  return (
    <span className={cn("relative inline-block", className)}>
      <span className="sr-only">{final}</span>
      <span aria-hidden="true" className="inline-block tabular-nums">
        {prefix}
        {/* Keyed, so a new value remounts rather than React patching a text
            node the animation has already replaced. */}
        <span key={`${lang}:${compact}:${value}`} ref={digits} className="inline-block">
          {format(value)}
        </span>
        {suffix}
      </span>
    </span>
  );
}
