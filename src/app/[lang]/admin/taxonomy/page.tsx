import Link from "next/link";
import { PageHeader, Panel } from "@/components/admin/ui";
import { TermList } from "@/components/admin/term-list";
import { countBy, getTaxonomy } from "@/lib/data/taxonomy";
import { getDirectory } from "@/lib/data/doctors";
import type { TermKind } from "@/lib/schema/taxonomy";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";

const TABS: { kind: TermKind; label: "specialities" | "hospitals" | "districts"; list: "specialities" | "hospitals" | "locations"; field: "specialityIds" | "hospitalIds" | "locationIds" }[] = [
  { kind: "speciality", label: "specialities" as const, list: "specialities", field: "specialityIds" },
  { kind: "hospital", label: "hospitals" as const, list: "hospitals", field: "hospitalIds" },
  { kind: "location", label: "districts" as const, list: "locations", field: "locationIds" },
];

export default async function AdminTaxonomy(props: PageProps<"/[lang]/admin/taxonomy">) {
  const { lang } = await props.params;
  const l = getDictionary(lang as Locale).dash.lists;
  const { kind: raw } = await props.searchParams;
  const tab = TABS.find((t) => t.kind === raw) ?? TABS[0];
  const [taxonomy, { items }] = await Promise.all([getTaxonomy(), getDirectory()]);
  const counts = countBy(items, tab.field);
  const terms = [...taxonomy[tab.list]]
    .sort((a, b) => a.order - b.order || a.name.en.localeCompare(b.name.en))
    .map((t) => ({ id: t.id, nameEn: t.name.en, nameBn: t.name.bn ?? "", order: t.order, used: counts.get(t.id) ?? 0 }));

  return (
    <>
      <PageHeader
        kicker={l.kicker}
        title={l.title}
        description={l.description}
      />
      <div className="mb-4 flex flex-wrap gap-1.5">
        {TABS.map((t) => (
          <Link
            key={t.kind}
            href={`?kind=${t.kind}`}
            aria-current={t.kind === tab.kind ? "page" : undefined}
            className={cn(
              "flex h-9 items-center border px-3 font-display text-[0.78rem] font-semibold uppercase tracking-[0.08em]",
              t.kind === tab.kind ? "border-accent bg-accent text-accent-ink" : "border-line text-ink-mute hover:border-accent hover:text-accent",
            )}
          >
            {l[t.label]} <span className="ml-1.5 font-mono text-[0.7rem] opacity-70">{taxonomy[t.list].length}</span>
          </Link>
        ))}
      </div>
      <Panel>
        <TermList key={tab.kind} kind={tab.kind} terms={terms} />
      </Panel>
    </>
  );
}
