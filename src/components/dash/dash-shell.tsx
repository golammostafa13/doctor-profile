import Link from "next/link";
import type { ReactNode } from "react";
import { ExternalLink, LogOut } from "lucide-react";
import { Brand } from "@/components/brand";
import { DashNav, type NavItem } from "@/components/dash/dash-nav";
import { DashStrings } from "@/components/dash/dash-strings";
import { LanguageSwitch } from "@/components/language-switch";
import { Button } from "@/components/ui/button";
import { signOutAction } from "@/lib/actions/auth";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { textClass } from "@/lib/i18n/content";
import { storageMode } from "@/lib/redis";
import { cn } from "@/lib/utils";

/**
 * The frame shared by the admin console and the doctor dashboard: sidebar,
 * language switch, sign-out, and the strings every client form reads.
 */
export function DashShell({
  lang,
  kicker,
  email,
  home,
  items,
  children,
}: {
  lang: Locale;
  kicker: string;
  email: string;
  home: string;
  items: NavItem[];
  children: ReactNode;
}) {
  const dict = getDictionary(lang);
  const t = dict.dash;
  const bn = textClass(lang);

  return (
    <DashStrings t={t} lang={lang}>
      <div className={cn("min-h-dvh lg:grid lg:grid-cols-[248px_1fr]", bn)}>
        <aside className="border-b border-line bg-bg-deep/80 px-4 py-4 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:border-b-0 lg:border-r lg:py-6">
          <div className="mb-4 flex items-center justify-between gap-3 lg:mb-8 lg:block">
            <Link href={home} className="block">
              <Brand lang={lang} size="sm" />
            </Link>
            <p className={cn("hud-label lg:mt-4", bn)}>{kicker}</p>
          </div>
          <DashNav items={items} label={kicker} />
          <div className="mt-4 hidden border-t border-line pt-4 lg:mt-auto lg:block">
            <div className="mb-3">
              <LanguageSwitch lang={lang} label={dict.common.switchLanguage} />
            </div>
            <p className="truncate font-mono text-xs text-ink-faint" title={email}>
              {email}
            </p>
            <div className="mt-3 flex gap-2">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link href={`/${lang}`} target="_blank">
                  {t.common.site} <ExternalLink aria-hidden />
                </Link>
              </Button>
              <form action={signOutAction}>
                <input type="hidden" name="lang" value={lang} />
                <Button type="submit" variant="ghost" size="sm" aria-label={t.common.signOut} title={t.common.signOut}>
                  <LogOut aria-hidden />
                </Button>
              </form>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          {/* Only when saving is impossible. Which store is in use is on the System page. */}
          {storageMode() === "none" ? (
            <div role="status" className="border-b border-hot/50 bg-hot-soft px-4 py-2.5 text-sm text-hot sm:px-8">
              <strong>{t.common.readOnly}</strong> {t.common.readOnlyBody}
            </div>
          ) : null}
          <main id="main" className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-10">
            {children}
          </main>
          <div className="flex items-center gap-3 px-4 pb-8 lg:hidden">
            <LanguageSwitch lang={lang} label={dict.common.switchLanguage} />
            <form action={signOutAction}>
              <input type="hidden" name="lang" value={lang} />
              <Button type="submit" variant="ghost" size="sm">
                <LogOut aria-hidden /> {t.common.signOut}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </DashStrings>
  );
}
