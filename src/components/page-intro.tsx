import type { CSSProperties, ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import { textClass } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

/** The kicker / title / lead block every public page opens with. */
export function PageIntro({
  lang,
  kicker,
  title,
  lead,
  children,
}: {
  lang: Locale;
  kicker: string;
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  const bn = textClass(lang);
  return (
    <header className="max-w-3xl">
      <p className={cn("rise hud-label", bn)}>{kicker}</p>
      <h1
        className={cn("rise mt-4 font-display text-[clamp(2.2rem,6vw,3.6rem)] font-bold uppercase leading-[1.02]", bn)}
        style={{ "--lag": 1 } as CSSProperties}
      >
        {title}
      </h1>
      {lead ? (
        <p className={cn("rise mt-3 text-lg text-ink-mute", bn)} style={{ "--lag": 2 } as CSSProperties}>
          {lead}
        </p>
      ) : null}
      {children}
    </header>
  );
}
