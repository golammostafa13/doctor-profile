import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { DashShell } from "@/components/dash/dash-shell";
import { getAdmin } from "@/lib/auth/current";
import { listApplications } from "@/lib/data/applications";
import { getDictionary } from "@/lib/i18n";
import { hasLocale, type Locale } from "@/lib/i18n/config";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

/**
 * The admin shell.
 *
 * Checks the session itself rather than trusting the proxy's redirect: the
 * proxy is optimistic, this is the page-level check, and every action checks
 * again (`adminWrite`) because a POST never renders this layout.
 */
export default async function AdminLayout(props: LayoutProps<"/[lang]/admin">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const admin = await getAdmin();
  if (!admin) redirect(`/${lang}/signin?next=/${lang}/admin`);

  const t = getDictionary(lang as Locale).dash;
  const pending = (await listApplications()).filter((a) => a.status === "pending").length;
  const base = `/${lang}/admin`;

  return (
    <DashShell
      lang={lang as Locale}
      kicker={t.nav.adminConsole}
      email={admin.email}
      home={base}
      items={[
        { href: base, label: t.nav.overview, icon: "gauge", exact: true },
        { href: `${base}/doctors`, label: t.nav.doctors, icon: "doctors" },
        { href: `${base}/applications`, label: t.nav.applications, icon: "applications", badge: pending },
        { href: `${base}/blog`, label: t.nav.blog, icon: "blog" },
        { href: `${base}/taxonomy`, label: t.nav.lists, icon: "lists" },
        { href: `${base}/ads`, label: t.nav.ads, icon: "ads" },
        { href: `${base}/settings`, label: t.nav.settings, icon: "settings" },
        { href: `${base}/system`, label: t.nav.system, icon: "system" },
      ]}
    >
      {props.children}
    </DashShell>
  );
}
