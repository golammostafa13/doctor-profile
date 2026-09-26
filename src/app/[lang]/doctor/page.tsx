import Link from "next/link";
import { CheckCircle2, Circle, ExternalLink, PenLine, UserRound } from "lucide-react";
import { Badge, Empty, PageHeader, Panel, Stat } from "@/components/admin/ui";
import { Button } from "@/components/ui/button";
import { requireDoctor } from "@/lib/auth/current";
import { getBlogCards } from "@/lib/data/blog";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { pick } from "@/lib/i18n/content";
import { fmt } from "@/lib/i18n/dash";

export default async function DoctorHome(props: PageProps<"/[lang]/doctor">) {
  const { lang } = await props.params;
  const locale = lang as Locale;
  const t = getDictionary(locale).dash;
  const h = t.doctorHome;
  const { record } = await requireDoctor();
  const posts = (await getBlogCards()).filter((p) => p.authorDoctorId === record.id);

  // What a patient needs from the page, in the order they need it.
  const checks = [
    { done: Boolean(record.photo), label: h.checkPhoto },
    { done: record.chambers.some((c) => c.visitingHours.en), label: h.checkChambers },
    { done: Boolean(record.publicPhone || record.chambers.some((c) => c.appointmentPhone)), label: h.checkPhone },
    { done: record.about.en.trim().length > 40, label: h.checkBio },
    { done: record.education.length > 0, label: h.checkEducation },
    { done: record.experience.length > 0, label: h.checkExperience },
    { done: Boolean(record.name.bn), label: h.checkBengali },
  ];
  const percent = Math.round((checks.filter((c) => c.done).length / checks.length) * 100);
  const base = `/${lang}/doctor`;

  return (
    <>
      <PageHeader
        kicker={h.kicker}
        title={fmt(h.greeting, { name: pick(record.name, locale) })}
        description={h.lead}
        actions={
          <>
            <Button asChild variant="outline">
              <Link href={`/${lang}/doctors/${record.linkNo}`} target="_blank">
                {h.viewProfile} <ExternalLink aria-hidden />
              </Link>
            </Button>
            <Button asChild>
              <Link href={`${base}/profile`}>
                <UserRound aria-hidden /> {h.editProfile}
              </Link>
            </Button>
          </>
        }
      />

      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label={h.statStatus} value={record.status === "active" ? "✓" : "—"} hint={record.status === "active" ? h.statusActive : h.statusHidden} tone={record.status === "active" ? "accent" : "hot"} />
        <Stat label={h.statChambers} value={record.chambers.length} />
        <Stat label={h.statPosts} value={posts.length} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Panel title={fmt(h.completeness, { n: percent })}>
          <div className="mb-5 h-2 bg-bg" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
            <div className="h-full bg-accent transition-[width]" style={{ width: `${percent}%` }} />
          </div>
          <ul className="space-y-2.5">
            {checks.map((c) => (
              <li key={c.label} className="flex items-center gap-2.5 text-sm">
                {c.done ? (
                  <CheckCircle2 className="size-4 shrink-0 text-accent" aria-hidden />
                ) : (
                  <Circle className="size-4 shrink-0 text-ink-faint" aria-hidden />
                )}
                <span className={c.done ? "text-ink-mute line-through decoration-ink-faint/50" : ""}>{c.label}</span>
              </li>
            ))}
          </ul>
          {percent === 100 ? <p className="mt-4 text-sm text-accent">{h.allSet}</p> : null}
        </Panel>

        <Panel
          title={h.recentPosts}
          actions={
            <Button asChild size="sm">
              <Link href={`${base}/posts/new`}>
                <PenLine aria-hidden /> {h.newPost}
              </Link>
            </Button>
          }
        >
          {posts.length === 0 ? (
            <Empty title={h.noPosts} />
          ) : (
            <ul className="divide-y divide-line">
              {posts
                .sort((a, b) => b.updatedAt - a.updatedAt)
                .slice(0, 5)
                .map((p) => (
                  <li key={p.id}>
                    <Link href={`${base}/posts/${p.id}`} className="group flex items-center justify-between gap-3 py-2.5">
                      <span className="truncate group-hover:text-accent">{pick(p.title, locale)}</span>
                      <Badge tone={p.status === "published" ? "accent" : "mute"}>
                        {p.status === "published" ? t.posts.published : t.posts.draft}
                      </Badge>
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </Panel>
      </div>
    </>
  );
}
