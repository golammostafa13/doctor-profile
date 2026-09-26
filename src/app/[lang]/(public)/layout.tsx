import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnnouncementBar } from "@/components/announcement-bar";
import { hasLocale, type Locale } from "@/lib/i18n/config";

/**
 * The public shell.
 *
 * No session is read here, and that is the structural difference from the
 * sibling projects this borrows from: their entire catalogue sits behind a
 * password. This is a directory whose whole purpose is that a patient looking
 * for a cardiologist finds one without an account, so every page under here is
 * open and statically renderable.
 */
export default async function PublicLayout(props: LayoutProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;

  return (
    <div className="flex min-h-dvh flex-col">
      <AnnouncementBar lang={locale} />
      <SiteHeader lang={locale} />
      <div className="flex-1">{props.children}</div>
      <SiteFooter lang={locale} />
    </div>
  );
}
