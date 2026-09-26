import Link from "next/link";
import { Plus } from "lucide-react";
import { DoctorsTable } from "@/components/admin/doctors-table";
import { PageHeader } from "@/components/admin/ui";
import { Button } from "@/components/ui/button";
import { getDirectory } from "@/lib/data/doctors";
import { getTaxonomy } from "@/lib/data/taxonomy";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { pick } from "@/lib/i18n/content";

export default async function AdminDoctors(props: PageProps<"/[lang]/admin/doctors">) {
  const { lang } = await props.params;
  const { deleted } = await props.searchParams;
  const t = getDictionary(lang as Locale).dash;
  const [{ items }, taxonomy] = await Promise.all([getDirectory(), getTaxonomy()]);

  return (
    <>
      <PageHeader
        kicker={t.doctors.kicker}
        title={t.doctors.title}
        description={t.doctors.description}
        actions={
          <Button asChild>
            <Link href={`/${lang}/admin/doctors/new`}>
              <Plus aria-hidden /> {t.overview.newDoctor}
            </Link>
          </Button>
        }
      />
      {deleted ? (
        <p role="status" className="mb-4 border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent">
          {t.doctors.deleted}
        </p>
      ) : null}
      <DoctorsTable
        lang={lang}
        doctors={items}
        specialities={taxonomy.specialities.map((s) => ({ id: s.id, name: pick(s.name, lang as Locale) }))}
      />
    </>
  );
}
