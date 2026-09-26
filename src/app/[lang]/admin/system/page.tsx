import { CheckCircle2, XCircle } from "lucide-react";
import { PageHeader, Panel } from "@/components/admin/ui";
import { SystemActions } from "@/components/admin/system-actions";
import { adminEmails, auditAuthConfig } from "@/lib/auth/config";
import { getDirectory } from "@/lib/data/doctors";
import { localStorePath } from "@/lib/local-store";
import { keyPrefix, storageMode } from "@/lib/redis";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { fmt } from "@/lib/i18n/dash";

export default async function AdminSystem(props: PageProps<"/[lang]/admin/system">) {
  const { lang } = await props.params;
  const y = getDictionary(lang as Locale).dash.system;
  const mode = storageMode();
  const { items, rev, builtAt } = await getDirectory();
  const problems = auditAuthConfig();

  const rows: [string, React.ReactNode, boolean][] = [
    [
      y.store,
      mode === "upstash"
        ? y.storeUpstash
        : mode === "local"
          ? `${y.storeLocal} — ${localStorePath().replace(process.cwd() + "/", "")}`
          : y.storeNone,
      mode !== "none",
    ],
    [y.prefix, <code key="p" className="font-mono">{keyPrefix() || "—"}</code>, true],
    [
      y.directoryDoc,
      fmt(y.directoryValue, {
        n: items.length,
        rev,
        when: builtAt ? new Date(builtAt).toLocaleString(lang === "bn" ? "bn-BD" : "en-GB") : "—",
      }),
      true,
    ],
    [y.admins, fmt(y.adminsValue, { n: adminEmails.length }), adminEmails.length > 0],
    [y.secret, process.env.AUTH_SECRET ? y.secretSet : y.secretDev, Boolean(process.env.AUTH_SECRET)],
    [y.env, process.env.NODE_ENV ?? "—", true],
  ];

  return (
    <>
      <PageHeader kicker={y.kicker} title={y.title} description={y.description} />
      <Panel className="mb-6">
        <dl className="divide-y divide-line">
          {rows.map(([k, v, good]) => (
            <div key={k} className="grid gap-1 py-3 sm:grid-cols-[200px_1fr] sm:items-center">
              <dt className="flex items-center gap-2 text-sm text-ink-faint">
                {good ? <CheckCircle2 className="size-4 text-accent" aria-hidden /> : <XCircle className="size-4 text-hot" aria-hidden />}
                {k}
              </dt>
              <dd className="text-sm">{v}</dd>
            </div>
          ))}
        </dl>
        {problems.length ? (
          <ul className="mt-4 space-y-1 border-t border-line pt-4 text-sm text-hot">
            {problems.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        ) : null}
      </Panel>
      <SystemActions />
    </>
  );
}
