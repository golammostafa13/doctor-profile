import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { DoctorAccount } from "@/components/admin/doctor-account";
import { ProfileEditor } from "@/components/admin/profile-editor";
import { Badge, PageHeader } from "@/components/admin/ui";
import { getRecord } from "@/lib/data/doctors";
import { getTaxonomy } from "@/lib/data/taxonomy";
import { doctorEditableSchema } from "@/lib/schema/doctor";
import { saveDoctorProfileAction } from "@/lib/actions/admin-doctors";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { pick } from "@/lib/i18n/content";
import { fmt } from "@/lib/i18n/dash";

export default async function EditDoctor(props: PageProps<"/[lang]/admin/doctors/[id]">) {
  const { lang, id } = await props.params;
  const [record, taxonomy] = await Promise.all([getRecord(id), getTaxonomy()]);
  const t = getDictionary(lang as Locale).dash;
  if (!record) notFound();

  // Only the editable fields cross to the browser: the hash and sign-in
  // metadata stay on the server, and the account panel gets them one by one.
  const editable = doctorEditableSchema.parse(record);
  const opts = (terms: { id: string; name: { en: string; bn?: string } }[]) =>
    terms.map((term) => ({ id: term.id, name: pick(term.name, lang as Locale) }));

  return (
    <>
      <Link
        href={`/${lang}/admin/doctors`}
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-ink-mute hover:text-accent"
      >
        <ArrowLeft className="size-4" aria-hidden /> {t.account.back}
      </Link>
      <PageHeader
        kicker={fmt(t.account.doctorKicker, { link: record.linkNo })}
        title={record.name.en}
        description={
          <span className="flex flex-wrap items-center gap-2">
            {record.speciality.en}
            <Badge tone={record.status === "active" ? "mute" : "hot"}>{t.common[record.status]}</Badge>
            {record.featured ? <Badge tone="accent">{t.common.featured}</Badge> : null}
          </span>
        }
      />
      <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
        <div className="min-w-0">
          <ProfileEditor
            lang={lang}
            id={record.id}
            saveAction={saveDoctorProfileAction}
            linkNo={record.linkNo}
            initial={editable}
            specialities={opts(taxonomy.specialities)}
            hospitals={opts(taxonomy.hospitals)}
            locations={opts(taxonomy.locations)}
          />
        </div>
        <aside>
          <DoctorAccount
            lang={lang}
            id={record.id}
            linkNo={record.linkNo}
            email={record.email}
            status={record.status}
            featured={record.featured}
            order={record.order}
            lastLoginAt={record.lastLoginAt}
            passwordSetAt={record.passwordSetAt}
          />
        </aside>
      </div>
    </>
  );
}
