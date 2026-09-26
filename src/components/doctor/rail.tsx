"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Arrow buttons for a native horizontal scroller.
 *
 * The scroller itself stays plain overflow with snap points — touch, trackpad
 * and keyboard already work — and this only adds what a mouse user without a
 * horizontal wheel is missing: a way to page it, and a sign that there is more
 * to the right. Each arrow disables at its end so it never looks like it did
 * nothing.
 */
export function Rail({
  children,
  prevLabel,
  nextLabel,
}: {
  children: ReactNode;
  prevLabel: string;
  nextLabel: string;
}) {
  const host = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: true });

  const scroller = () => host.current?.querySelector<HTMLElement>("ul") ?? null;

  useEffect(() => {
    const el = scroller();
    if (!el) return;
    const update = () =>
      setEdges({
        start: el.scrollLeft <= 4,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
      });
    update();
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  function page(direction: 1 | -1) {
    const el = scroller();
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: "smooth" });
  }

  const arrow =
    "grid size-9 place-items-center border border-line bg-surface text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-ink active:translate-y-px disabled:pointer-events-none disabled:opacity-35";

  return (
    <div ref={host} className="relative">
      {children}
      {edges.start && edges.end ? null : (
        <div className="mt-3 flex justify-end gap-2">
          <button
            type="button"
            className={arrow}
            onClick={() => page(-1)}
            disabled={edges.start}
            aria-label={prevLabel}
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            className={cn(arrow)}
            onClick={() => page(1)}
            disabled={edges.end}
            aria-label={nextLabel}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}
