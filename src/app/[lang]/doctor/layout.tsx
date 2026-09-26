import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { DashShell } from "@/components/dash/dash-shell";
import { getDoctor } from "@/lib/auth/current";
import { getDictionary } from "@/lib/i18n";
import { hasLocale, type Locale } from "@/lib/i18n/config";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

/**
 * The doctor's dashboard. `getDoctor()` re-checks the record on every render:
 * it still exists, is not suspended, and the password has not been reset
 * since this session was issued.
 */
export default async function DoctorLayout(props: LayoutProps<"/[lang]/doctor">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const doctor = await getDoctor();
  if (!doctor) redirect(`/${lang}/signin`);

  const t = getDictionary(lang as Locale).dash;
  const base = `/${lang}/doctor`;
  return (
    <DashShell
      lang={lang as Locale}
      kicker={t.nav.doctorConsole}
      email={doctor.record.email}
      home={base}
      items={[
        { href: base, label: t.nav.home, icon: "gauge", exact: true },
        { href: `${base}/profile`, label: t.nav.profile, icon: "profile" },
        { href: `${base}/posts`, label: t.nav.posts, icon: "posts" },
        { href: `${base}/account`, label: t.nav.account, icon: "account" },
      ]}
    >
      {props.children}
    </DashShell>
  );
}
