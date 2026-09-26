import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge, Empty, PageHeader } from "@/components/admin/ui";
import { listApplications } from "@/lib/data/applications";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";

const TABS = ["pending", "approved", "rejected", "all"] as const;

export default async function AdminApplications(props: PageProps<"/[lang]/admin/applications">) {
  const { lang } = await props.params;
  const { status: raw } = await props.searchParams;
  const status = TABS.find((t) => t === raw) ?? "pending";
  const all = await listApplications();
  const t = getDictionary(lang as Locale).dash;
  const a = t.applications;
  const rows = status === "all" ? all : all.filter((a) => a.status === status);

  return (
    <>
      <PageHeader
        kicker={a.kicker}
        title={a.title}
        description={
          <>
            {a.descLead}{" "}
            <Link href={`/${lang}/apply`} className="text-accent hover:underline" target="_blank">
              /apply
            </Link>
            {a.descTail}
          </>
        }
      />
      <div className="mb-4 flex flex-wrap gap-1.5">
        {TABS.map((tab) => {
          const n = tab === "all" ? all.length : all.filter((a) => a.status === tab).length;
          return (
            <Link
              key={tab}
              href={`?status=${tab}`}
              aria-current={tab === status ? "page" : undefined}
              className={cn(
                "flex h-9 items-center border px-3 font-display text-[0.78rem] font-semibold uppercase tracking-[0.08em]",
                tab === status ? "border-accent bg-accent text-accent-ink" : "border-line text-ink-mute hover:border-accent hover:text-accent",
              )}
            >
              {a[tab]} <span className="ml-1.5 font-mono text-[0.7rem] opacity-70">{n}</span>
            </Link>
          );
        })}
      </div>

      {rows.length === 0 ? (
        <Empty title={status === "pending" ? a.nothingWaiting : a.noneHere}>
          {status === "pending" ? a.newAppear : null}
        </Empty>
      ) : (
        <ul className="divide-y divide-line border border-line">
          {rows.map((app) => (
            <li key={app.id}>
              <Link
                href={`/${lang}/admin/applications/${app.id}`}
                className="group grid gap-2 px-4 py-3.5 transition-colors hover:bg-accent-soft/40 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-6"
              >
                <span className="min-w-0">
                  <span className="block truncate font-medium group-hover:text-accent">{app.name.en}</span>
                  <span className="block truncate text-sm text-ink-mute">
                    {app.speciality.en} · {app.workplace.en} · BMDC {app.bmdcNo}
                  </span>
                </span>
                <span className="font-mono text-xs text-ink-faint">
                  {new Date(app.submittedAt).toLocaleDateString(lang === "bn" ? "bn-BD" : "en-GB", { dateStyle: "medium" })}
                </span>
                <span className="flex items-center gap-3">
                  <Badge tone={app.status === "pending" ? "hot" : app.status === "approved" ? "accent" : "mute"}>
                    {a[app.status]}
                  </Badge>
                  <ArrowRight className="size-4 text-ink-faint group-hover:text-accent" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
