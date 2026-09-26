import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Admin page furniture. Server-safe (no hooks), so pages compose it freely.
 * The admin reads English only: it is a tool for one operator, and every
 * string it would translate is a label, not content — the content fields it
 * edits are bilingual.
 */

export function PageHeader({
  kicker,
  title,
  description,
  actions,
}: {
  kicker: string;
  title: string;
  description?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        <p className="hud-label">{kicker}</p>
        <h1 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description ? <p className="mt-2 max-w-2xl text-ink-mute">{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
    </header>
  );
}

export function Panel({
  title,
  description,
  actions,
  children,
  className,
  tone,
}: {
  title?: string;
  description?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  tone?: "hot";
}) {
  return (
    <section
      className={cn(
        "border bg-surface/70 p-5 sm:p-6",
        tone === "hot" ? "border-hot/50" : "border-line",
        className,
      )}
    >
      {title || actions ? (
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            {title ? (
              <h2 className="font-display text-lg font-semibold uppercase tracking-[0.04em]">{title}</h2>
            ) : null}
            {description ? <p className="mt-1 text-sm text-ink-mute">{description}</p> : null}
          </div>
          {actions}
        </div>
      ) : null}
      {children}
    </section>
  );
}

export function Stat({
  label,
  value,
  hint,
  tone,
}: {
  label: string;
  value: ReactNode;
  hint?: ReactNode;
  tone?: "hot" | "accent";
}) {
  return (
    <div className="hud-card hud-edge border border-line bg-surface/70 p-5">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-faint">{label}</p>
      <p
        className={cn(
          "mt-2 font-display text-3xl font-bold",
          tone === "hot" ? "text-hot" : "text-accent",
        )}
      >
        {value}
      </p>
      {hint ? <p className="mt-1 text-xs text-ink-mute">{hint}</p> : null}
    </div>
  );
}

const BADGE = {
  accent: "border-accent/50 bg-accent-soft text-accent",
  hot: "border-hot/50 bg-hot-soft text-hot",
  mute: "border-line text-ink-mute",
} as const;

export function Badge({
  tone = "mute",
  children,
}: {
  tone?: keyof typeof BADGE;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center border px-2 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em]",
        BADGE[tone],
      )}
    >
      {children}
    </span>
  );
}

export function Empty({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="border border-dashed border-line px-6 py-12 text-center">
      <p className="font-display text-lg font-semibold uppercase">{title}</p>
      {children ? <div className="mt-2 text-sm text-ink-mute">{children}</div> : null}
    </div>
  );
}

export function Label({
  htmlFor,
  children,
  hint,
}: {
  htmlFor?: string;
  children: ReactNode;
  hint?: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block">
      <span className="text-sm font-medium text-ink">{children}</span>
      {hint ? <span className="ml-2 text-xs text-ink-faint">{hint}</span> : null}
    </label>
  );
}
