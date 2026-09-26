import Link from "next/link";
import { AlertTriangle, ArrowRight, Plus } from "lucide-react";
import { Badge, Empty, PageHeader, Panel, Stat } from "@/components/admin/ui";
import { Avatar } from "@/components/doctor/avatar";
import { Button } from "@/components/ui/button";
import { auditAuthConfig } from "@/lib/auth/config";
import { adState, getAds } from "@/lib/data/ads";
import { listApplications } from "@/lib/data/applications";
import { getDirectory } from "@/lib/data/doctors";
import { getTaxonomy } from "@/lib/data/taxonomy";
import { storageMode } from "@/lib/redis";
import { getBlogCards } from "@/lib/data/blog";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { fmt } from "@/lib/i18n/dash";

export default async function AdminOverview(props: PageProps<"/[lang]/admin">) {
  const { lang } = await props.params;
  const base = `/${lang}/admin`;
  const t = getDictionary(lang as Locale).dash;
  const [{ items }, applications, taxonomy, ads, posts] = await Promise.all([
    getDirectory(),
    listApplications(),
    getTaxonomy(),
    getAds(),
    getBlogCards(),
  ]);

  const count = (status: string) => items.filter((d) => d.status === status).length;
  const pending = applications.filter((a) => a.status === "pending");
  const liveAds = ads.items.filter((ad) => adState(ad) === "live").length;
  const recent = [...items].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 6);
  const problems = auditAuthConfig();
  if (storageMode() === "none") problems.unshift(t.errors.noStore);

  return (
    <>
      <PageHeader
        kicker={t.overview.kicker}
        title={t.overview.title}
        description={t.overview.description}
        actions={
          <Button asChild>
            <Link href={`${base}/doctors/new`}>
              <Plus aria-hidden /> {t.overview.newDoctor}
            </Link>
          </Button>
        }
      />

      {problems.length > 0 ? (
        <Panel tone="hot" className="mb-6">
          <ul className="space-y-2">
            {problems.map((p) => (
              <li key={p} className="flex gap-2 text-sm text-hot">
                <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden /> {p}
              </li>
            ))}
          </ul>
        </Panel>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label={t.overview.statDoctors} value={items.length} hint={fmt(t.overview.live, { n: count("active") })} />
        <Stat label={t.overview.statHidden} value={count("hidden") + count("suspended")} hint={t.overview.notShown} />
        <Stat
          label={t.overview.statPending}
          value={pending.length}
          tone={pending.length ? "hot" : undefined}
          hint={fmt(t.overview.receivedAll, { n: applications.length })}
        />
        <Stat
          label={t.overview.statAds}
          value={liveAds}
          hint={`${t.overview.statPosts}: ${posts.length} · ${fmt(t.overview.taxonomyHint, { s: taxonomy.specialities.length, h: taxonomy.hospitals.length })}`}
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Panel
          title={t.overview.waiting}
          actions={
            <Link href={`${base}/applications`} className="text-sm text-accent hover:underline">
              {t.overview.allApplications}
            </Link>
          }
        >
          {pending.length === 0 ? (
            <Empty title={t.overview.queueClear}>{t.overview.queueHint}</Empty>
          ) : (
            <ul className="divide-y divide-line">
              {pending.slice(0, 6).map((app) => (
                <li key={app.id}>
                  <Link
                    href={`${base}/applications/${app.id}`}
                    className="group flex items-center justify-between gap-3 py-3"
                  >
                    <span className="min-w-0">
                      <span className="block truncate font-medium group-hover:text-accent">{app.name.en}</span>
                      <span className="block truncate text-sm text-ink-mute">
                        {app.speciality.en} · BMDC {app.bmdcNo}
                      </span>
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-ink-faint group-hover:text-accent" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <Panel
          title={t.overview.recent}
          actions={
            <Link href={`${base}/doctors`} className="text-sm text-accent hover:underline">
              {t.overview.allDoctors}
            </Link>
          }
        >
          <ul className="divide-y divide-line">
            {recent.map((doc) => (
              <li key={doc.id}>
                <Link href={`${base}/doctors/${doc.id}`} className="group flex items-center gap-3 py-2.5">
                  <span className="size-10 shrink-0 overflow-hidden">
                    <Avatar name={doc.name} seed={doc.id} src={doc.photoUrl} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-medium group-hover:text-accent">{doc.name.en}</span>
                    <span className="block truncate text-sm text-ink-mute">{doc.speciality.en}</span>
                  </span>
                  {doc.status !== "active" ? <Badge tone="hot">{t.common[doc.status]}</Badge> : null}
                  {doc.featured ? <Badge tone="accent">{t.common.featured}</Badge> : null}
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </>
  );
}
