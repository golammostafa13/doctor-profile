import { PageHeader } from "@/components/admin/ui";
import { ProfileEditor } from "@/components/admin/profile-editor";
import { saveOwnProfileAction } from "@/lib/actions/doctor";
import { requireDoctor } from "@/lib/auth/current";
import { getTaxonomy } from "@/lib/data/taxonomy";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { pick } from "@/lib/i18n/content";
import { doctorEditableSchema } from "@/lib/schema/doctor";

export default async function DoctorProfile(props: PageProps<"/[lang]/doctor/profile">) {
  const { lang } = await props.params;
  const locale = lang as Locale;
  const t = getDictionary(locale).dash;
  const [{ record }, taxonomy] = await Promise.all([requireDoctor(), getTaxonomy()]);
  const opts = (terms: { id: string; name: { en: string; bn?: string } }[]) =>
    terms.map((term) => ({ id: term.id, name: pick(term.name, locale) }));

  return (
    <>
      <PageHeader kicker={t.doctorProfile.kicker} title={t.doctorProfile.title} description={t.doctorProfile.description} />
      <ProfileEditor
        lang={lang}
        saveAction={saveOwnProfileAction}
        linkNo={record.linkNo}
        initial={doctorEditableSchema.parse(record)}
        specialities={opts(taxonomy.specialities)}
        hospitals={opts(taxonomy.hospitals)}
        locations={opts(taxonomy.locations)}
      />
    </>
  );
}
