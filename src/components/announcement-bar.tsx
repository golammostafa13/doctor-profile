import { ArrowRight } from "lucide-react";
import { getSettings } from "@/lib/data/settings";
import type { Locale } from "@/lib/i18n/config";
import { pick, textClass } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

/** The one-line notice set on the admin Settings screen. */
export async function AnnouncementBar({ lang }: { lang: Locale }) {
  const { announcement } = await getSettings();
  if (!announcement?.enabled) return null;
  const text = pick(announcement.text, lang);
  if (!text) return null;

  const inner = (
    <span className={cn("mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center text-sm font-medium", textClass(lang))}>
      {text}
      {announcement.href ? <ArrowRight className="size-4 shrink-0" aria-hidden /> : null}
    </span>
  );

  return (
    <div role="region" aria-label="Announcement" className="bg-accent text-accent-ink">
      {announcement.href ? (
        <a href={announcement.href} className="block hover:underline">
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
}
