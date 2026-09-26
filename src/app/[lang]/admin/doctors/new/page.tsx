import { NewDoctorForm } from "@/components/admin/new-doctor-form";
import { PageHeader } from "@/components/admin/ui";
import { getTaxonomy } from "@/lib/data/taxonomy";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { pick } from "@/lib/i18n/content";

export default async function NewDoctor(props: PageProps<"/[lang]/admin/doctors/new">) {
  const { lang } = await props.params;
  const taxonomy = await getTaxonomy();
  const t = getDictionary(lang as Locale).dash;
  return (
    <>
      <PageHeader
        kicker={t.newDoctor.kicker}
        title={t.newDoctor.title}
        description={t.newDoctor.description}
      />
      <NewDoctorForm
        lang={lang}
        specialities={taxonomy.specialities.map((s) => ({ id: s.id, name: pick(s.name, lang as Locale) }))}
      />
    </>
  );
}
