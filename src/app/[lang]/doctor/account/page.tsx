import { PageHeader, Panel } from "@/components/admin/ui";
import { PasswordForm } from "@/components/doctor-dash/password-form";
import { requireDoctor } from "@/lib/auth/current";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";

export default async function DoctorAccount(props: PageProps<"/[lang]/doctor/account">) {
  const { lang } = await props.params;
  const a = getDictionary(lang as Locale).dash.doctorAccount;
  const { record } = await requireDoctor();
  return (
    <>
      <PageHeader kicker={a.kicker} title={a.title} />
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title={a.signInEmail} description={a.emailHint}>
          <p className="font-mono text-accent">{record.email}</p>
        </Panel>
        <Panel title={a.changePassword} description={a.changeHint}>
          <PasswordForm />
        </Panel>
      </div>
    </>
  );
}
