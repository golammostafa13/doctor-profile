"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Copies a value — a chamber's appointment number — with a tick for feedback.
 *
 * On a desktop a `tel:` link opens nothing useful, so the number has to be
 * something a visitor can take to their phone. The label swaps for the length
 * of the tick and is announced through `aria-live`, so the confirmation is not
 * visual only.
 */
export function CopyButton({
  value,
  label,
  copiedLabel,
  className,
}: {
  value: string;
  label: string;
  copiedLabel: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked; the number is still on screen */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      title={copied ? copiedLabel : label}
      className={cn(
        "relative inline-grid size-7 place-items-center text-ink-faint transition-all duration-200 hover:bg-accent-soft hover:text-accent active:scale-90",
        copied && "bg-ok-soft text-ok hover:bg-ok-soft hover:text-ok",
        className,
      )}
    >
      <span className="sr-only" aria-live="polite">
        {copied ? copiedLabel : label}
      </span>
      <Copy
        aria-hidden="true"
        className={cn(
          "col-start-1 row-start-1 size-3.5 transition-all duration-300 ease-[var(--ease-physical)]",
          copied ? "scale-50 opacity-0" : "scale-100 opacity-100",
        )}
      />
      <Check
        aria-hidden="true"
        className={cn(
          "col-start-1 row-start-1 size-3.5 transition-all duration-300 ease-[var(--ease-physical)]",
          copied ? "scale-100 opacity-100" : "scale-50 opacity-0",
        )}
      />
    </button>
  );
}
