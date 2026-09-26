import Link from "next/link";
import { Brand } from "@/components/brand";
import { SponsorCredit } from "@/components/sponsor-credit";
import { AdSlot } from "@/components/ad-slot";
import { getSettings } from "@/lib/data/settings";
import { getDictionary } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/i18n/config";
import { pick, textClass } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

export async function SiteFooter({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const bn = textClass(lang);
  const year = new Date().getFullYear();
  const { sponsor } = await getSettings();

  const columns = [
    {
      title: dict.common.doctors,
      links: [
        { href: "/doctors", label: dict.directory.title },
        { href: "/specialities", label: dict.common.specialities },
        { href: "/hospitals", label: dict.common.hospitals },
      ],
    },
    {
      title: dict.common.about,
      links: [
        { href: "/about", label: dict.common.about },
        { href: "/contact", label: dict.common.contact },
        { href: "/sponsor", label: dict.common.sponsor },
      ],
    },
    {
      title: dict.common.signIn,
      links: [
        { href: "/signin", label: dict.common.signIn },
        { href: "/apply", label: dict.common.apply },
      ],
    },
  ];

  return (
    <footer className="relative mt-24 border-t border-line bg-bg-deep/80">
      {/* A volt-to-signal rule along the top edge: the palette, once. */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 -top-px h-px bg-[linear-gradient(90deg,transparent,var(--volt)_30%,var(--signal)_70%,transparent)]"
      />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <AdSlot slot="footer" lang={lang} className="mb-12" />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Brand lang={lang} size="sm" />
            <p className={cn("mt-4 max-w-xs text-sm text-ink-mute", bn)}>
              {dict.footer.builtFor}
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title}>
              <h2 className={cn("hud-label !text-[0.66rem]", bn)}>
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={localePath(lang, link.href)}
                      className={cn(
                        "group inline-flex items-center gap-2 text-sm text-ink-mute transition-colors duration-200 hover:text-accent",
                        bn,
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className="h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-3"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-8 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className={cn("text-sm text-ink-faint", bn)}>
            {dict.footer.rights(String(year))}
          </p>
          <SponsorCredit lang={lang} />
        </div>

        {sponsor.enabled ? (
          <p className={cn("mt-8 max-w-3xl text-xs leading-relaxed text-ink-faint", bn)}>
            {pick(sponsor.note, lang)}
          </p>
        ) : null}
      </div>
    </footer>
  );
}
