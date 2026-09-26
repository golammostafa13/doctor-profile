import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Trash2 } from "lucide-react";
import { ApplicationDecision } from "@/components/admin/application-decision";
import { Badge, PageHeader, Panel } from "@/components/admin/ui";
import { Button } from "@/components/ui/button";
import { deleteApplicationAction } from "@/lib/actions/admin-applications";
import { getApplication } from "@/lib/data/applications";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { fmt } from "@/lib/i18n/dash";

export default async function ApplicationDetail(props: PageProps<"/[lang]/admin/applications/[id]">) {
  const { lang, id } = await props.params;
  const app = await getApplication(id);
  if (!app) notFound();
  const a = getDictionary(lang as Locale).dash.applications;
  const when = (ms: number) =>
    new Date(ms).toLocaleString(lang === "bn" ? "bn-BD" : "en-GB", { dateStyle: "medium", timeStyle: "short" });

  const rows: [string, React.ReactNode][] = [
    [a.name, <>{app.name.en}{app.name.bn ? <span className="bn block text-ink-mute">{app.name.bn}</span> : null}</>],
    [a.speciality, app.speciality.en],
    [a.bmdc, <span key="b" className="font-mono text-accent">{app.bmdcNo}</span>],
    [a.designation, app.designation.en],
    [a.workplace, app.workplace.en],
    [a.chamber, app.chamberAddress?.en ?? "—"],
    [a.email, app.email],
    [a.phone, <span key="p" className="font-mono">{app.phone}</span>],
    [a.note, app.note ? <span className="whitespace-pre-wrap">{app.note}</span> : "—"],
    [a.submittedAt, when(app.submittedAt)],
  ];
  if (app.decidedAt) {
    rows.push([a.decided, fmt(a.decidedBy, { date: when(app.decidedAt), who: app.decidedBy ?? "" })]);
  }
  if (app.decisionNote) rows.push([a.reason, app.decisionNote]);

  return (
    <>
      <Link href={`/${lang}/admin/applications`} className="mb-4 inline-flex items-center gap-1.5 text-sm text-ink-mute hover:text-accent">
        <ArrowLeft className="size-4" aria-hidden /> {a.back}
      </Link>
      <PageHeader
        kicker={a.kickerOne}
        title={app.name.en}
        description={
          <Badge tone={app.status === "pending" ? "hot" : app.status === "approved" ? "accent" : "mute"}>{a[app.status]}</Badge>
        }
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <Panel title={a.submitted}>
          <dl className="divide-y divide-line">
            {rows.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-3 sm:grid-cols-[180px_1fr]">
                <dt className="text-sm text-ink-faint">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-ink-faint">
            {a.verifyHint}
          </p>
        </Panel>
        <div className="space-y-6">
          {app.status === "pending" ? (
            <ApplicationDecision lang={lang} id={app.id} />
          ) : app.doctorId ? (
            <Panel title={a.profile}>
              <Button asChild>
                <Link href={`/${lang}/admin/doctors/${app.doctorId}`}>{a.openDoctor}</Link>
              </Button>
            </Panel>
          ) : null}
          {app.status !== "pending" ? (
            <form action={deleteApplicationAction}>
              <input type="hidden" name="id" value={app.id} />
              <input type="hidden" name="lang" value={lang} />
              <Button type="submit" variant="ghost" size="sm">
                <Trash2 aria-hidden /> {a.deleteRecord}
              </Button>
            </form>
          ) : null}
        </div>
      </div>
    </>
  );
}
