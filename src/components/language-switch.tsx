"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeNames, locales, switchLocalePath, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

/**
 * The language switch.
 *
 * Renders real links rather than a button that pushes a route, so the other
 * language is a crawlable, middle-clickable URL — which is the whole reason
 * the locale lives in the path. It also keeps the current path: switching
 * language on a doctor's profile lands on that same doctor's profile, not the
 * home page, which is the mistake almost every language switcher makes.
 */
export function LanguageSwitch({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();

  return (
    <div
      className="inline-flex h-10 items-center border border-line p-1"
      role="group"
      aria-label={label}
    >
      {locales.map((locale) => {
        const active = locale === lang;
        return (
          <Link
            key={locale}
            href={switchLocalePath(pathname, locale)}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            className={cn(
              "grid h-full place-items-center px-2.5 font-mono text-xs font-semibold uppercase transition-colors duration-200",
              locale === "bn" && "bn",
              active
                ? "bg-accent text-accent-ink"
                : "text-ink-faint hover:text-accent",
            )}
          >
            {localeNames[locale].short}
          </Link>
        );
      })}
    </div>
  );
}
