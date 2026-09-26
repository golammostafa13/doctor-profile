"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { EyeOff, Pencil, Search, Star, StarOff, Eye, ExternalLink } from "lucide-react";
import { quickDoctorAction } from "@/lib/actions/admin-doctors";
import type { DoctorCard } from "@/lib/schema/doctor";
import { Avatar } from "@/components/doctor/avatar";
import { Badge, Empty } from "@/components/admin/ui";
import { fieldClass } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import { useDash } from "@/components/dash/dash-strings";
import { fmt } from "@/lib/i18n/dash";

type StatusFilter = "all" | "active" | "hidden" | "suspended" | "featured";

const FILTER_LABEL = (t: ReturnType<typeof useDash>["t"]): Record<StatusFilter, string> => ({
  all: t.doctors.filterAll,
  active: t.doctors.filterActive,
  hidden: t.doctors.filterHidden,
  suspended: t.doctors.filterSuspended,
  featured: t.doctors.filterFeatured,
});
type Sort = "updated" | "name" | "created";


export function DoctorsTable({
  lang,
  doctors,
  specialities,
}: {
  lang: string;
  doctors: DoctorCard[];
  specialities: { id: string; name: string }[];
}) {
  const { t } = useDash();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [speciality, setSpeciality] = useState("");
  const [sort, setSort] = useState<Sort>("updated");

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return doctors
      .filter((d) => {
        if (status === "featured" ? !d.featured : status !== "all" && d.status !== status) return false;
        if (speciality && !d.specialityIds.includes(speciality)) return false;
        if (!needle) return true;
        return [d.name.en, d.name.bn, d.speciality.en, d.workplace.en, d.linkNo, d.degreesShort]
          .filter(Boolean)
          .some((v) => v!.toLowerCase().includes(needle));
      })
      .sort((a, b) =>
        sort === "name"
          ? a.name.en.localeCompare(b.name.en)
          : sort === "created"
            ? a.id.localeCompare(b.id)
            : b.updatedAt - a.updatedAt,
      );
  }, [doctors, q, status, speciality, sort]);

  const counts = {
    all: doctors.length,
    active: doctors.filter((d) => d.status === "active").length,
    hidden: doctors.filter((d) => d.status === "hidden").length,
    suspended: doctors.filter((d) => d.status === "suspended").length,
    featured: doctors.filter((d) => d.featured).length,
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {(Object.keys(counts) as StatusFilter[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setStatus(key)}
            aria-pressed={status === key}
            className={cn(
              "h-9 border px-3 font-display text-[0.78rem] font-semibold uppercase tracking-[0.08em] transition-colors",
              status === key
                ? "border-accent bg-accent text-accent-ink"
                : "border-line text-ink-mute hover:border-accent hover:text-accent",
            )}
          >
            {FILTER_LABEL(t)[key]} <span className="ml-1 font-mono text-[0.7rem] opacity-70">{counts[key]}</span>
          </button>
        ))}
      </div>

      <div className="mb-4 grid gap-2 sm:grid-cols-[1fr_220px_180px]">
        <label className="relative">
          <span className="sr-only">{t.common.search}</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-faint" aria-hidden />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t.doctors.searchPlaceholder}
            className={fieldClass(undefined, "pl-11")}
          />
        </label>
        <select
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
          aria-label={t.doctors.colSpeciality}
          className={fieldClass()}
        >
          <option value="">{t.doctors.allSpecialities}</option>
          {specialities.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} aria-label={t.doctors.sortUpdated} className={fieldClass()}>
          <option value="updated">{t.doctors.sortUpdated}</option>
          <option value="name">{t.doctors.sortName}</option>
          <option value="created">{t.doctors.sortCreated}</option>
        </select>
      </div>

      <p className="mb-2 font-mono text-xs text-ink-faint">
        {fmt(t.doctors.countOf, { n: rows.length, total: doctors.length })}
      </p>

      {rows.length === 0 ? (
        <Empty title={t.doctors.noMatch}>{t.doctors.noMatchHint}</Empty>
      ) : (
        <div className="overflow-x-auto border border-line">
          <table className="w-full min-w-[760px] text-sm">
            <thead className="bg-bg-deep/80 text-left font-mono text-[0.66rem] uppercase tracking-[0.16em] text-ink-faint">
              <tr>
                <th className="px-4 py-3 font-medium">{t.doctors.colDoctor}</th>
                <th className="px-4 py-3 font-medium">{t.doctors.colSpeciality}</th>
                <th className="px-4 py-3 font-medium">{t.doctors.colLink}</th>
                <th className="px-4 py-3 font-medium">{t.doctors.colStatus}</th>
                <th className="px-4 py-3 font-medium">{t.doctors.colUpdated}</th>
                <th className="px-4 py-3 text-right font-medium">{t.doctors.colActions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rows.map((d) => (
                <tr key={d.id} className="transition-colors hover:bg-accent-soft/40">
                  <td className="px-4 py-2.5">
                    <Link href={`/${lang}/admin/doctors/${d.id}`} className="group flex items-center gap-3">
                      <span className="size-10 shrink-0 overflow-hidden">
                        <Avatar name={d.name} seed={d.id} src={d.photoUrl} />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate font-medium group-hover:text-accent">{d.name.en}</span>
                        <span className="block truncate text-xs text-ink-faint">{d.workplace.en}</span>
                      </span>
                    </Link>
                  </td>
                  <td className="px-4 py-2.5 text-ink-mute">{d.speciality.en}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-ink-mute">{d.linkNo}</td>
                  <td className="px-4 py-2.5">
                    <span className="flex flex-wrap gap-1">
                      <Badge tone={d.status === "active" ? "mute" : "hot"}>{t.common[d.status]}</Badge>
                      {d.featured ? <Badge tone="accent">{t.common.featured}</Badge> : null}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 font-mono text-xs text-ink-faint">
                    {new Date(d.updatedAt).toLocaleDateString(lang === "bn" ? "bn-BD" : "en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="flex justify-end gap-1">
                      <form action={quickDoctorAction}>
                        <input type="hidden" name="id" value={d.id} />
                        <input type="hidden" name="op" value={d.featured ? "unfeature" : "feature"} />
                        <IconButton label={d.featured ? t.doctors.unfeature : t.doctors.feature}>
                          {d.featured ? <StarOff /> : <Star />}
                        </IconButton>
                      </form>
                      <form action={quickDoctorAction}>
                        <input type="hidden" name="id" value={d.id} />
                        <input type="hidden" name="op" value={d.status === "active" ? "hidden" : "active"} />
                        <IconButton label={d.status === "active" ? t.doctors.hide : t.doctors.publish}>
                          {d.status === "active" ? <EyeOff /> : <Eye />}
                        </IconButton>
                      </form>
                      <Link
                        href={`/${lang}/doctors/${d.linkNo}`}
                        target="_blank"
                        aria-label={t.common.viewPublic}
                        title={t.common.viewPublic}
                        className="grid size-9 place-items-center text-ink-mute transition-colors hover:bg-accent-soft hover:text-accent [&_svg]:size-4"
                      >
                        <ExternalLink />
                      </Link>
                      <Link
                        href={`/${lang}/admin/doctors/${d.id}`}
                        aria-label={t.common.edit}
                        title={t.common.edit}
                        className="grid size-9 place-items-center text-ink-mute transition-colors hover:bg-accent-soft hover:text-accent [&_svg]:size-4"
                      >
                        <Pencil />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function IconButton({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button
      type="submit"
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center text-ink-mute transition-colors hover:bg-accent-soft hover:text-accent [&_svg]:size-4"
    >
      {children}
    </button>
  );
}
