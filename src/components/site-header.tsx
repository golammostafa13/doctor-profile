import Link from "next/link";
import { Brand } from "@/components/brand";
import { LanguageSwitch } from "@/components/language-switch";
import { SearchPalette } from "@/components/search/search-palette";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/i18n/config";
import { textClass } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

/**
 * The site header.
 *
 * A Server Component: the only interactive parts are the search palette and
 * the language switch, which are their own client islands. That keeps the nav
 * links, the brand and the dictionary out of the client bundle entirely.
 *
 * No theme toggle: the site is dark-only (see app/[lang]/layout.tsx).
 */
export function SiteHeader({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const bn = textClass(lang);

  const links = [
    { href: "/doctors", label: dict.common.doctors },
    { href: "/specialities", label: dict.common.specialities },
    { href: "/blog", label: dict.common.blog },
    { href: "/about", label: dict.common.about },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-[18px] backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
        <Link href={localePath(lang)} className="shrink-0">
          <Brand lang={lang} size="md" />
        </Link>

        <nav className="ml-4 hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={localePath(lang, link.href)}
              className={cn(
                "relative px-3 py-2 font-mono text-[0.78rem] uppercase tracking-[0.12em] text-ink-mute transition-colors duration-200 hover:text-accent",
                // A volt underline that draws in from the left on hover.
                "after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100",
                bn,
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <SearchPalette lang={lang} strings={dict.search} />
          <LanguageSwitch lang={lang} label={dict.common.switchLanguage} />
          <Button asChild size="sm" className={cn("hidden sm:inline-flex", bn)}>
            <Link href={localePath(lang, "/signin")}>{dict.common.signIn}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
