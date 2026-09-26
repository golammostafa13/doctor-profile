import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AdForm } from "@/components/admin/ad-form";
import { PageHeader } from "@/components/admin/ui";
import { getAds } from "@/lib/data/ads";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";

/** `/admin/ads/new` creates; any other id edits. */
export default async function EditAd(props: PageProps<"/[lang]/admin/ads/[id]">) {
  const { lang, id } = await props.params;
  const { saved } = await props.searchParams;
  const ad = id === "new" ? undefined : (await getAds()).items.find((a) => a.id === id);
  if (id !== "new" && !ad) notFound();
  const a = getDictionary(lang as Locale).dash.ads;

  return (
    <>
      <Link href={`/${lang}/admin/ads`} className="mb-4 inline-flex items-center gap-1.5 text-sm text-ink-mute hover:text-accent">
        <ArrowLeft className="size-4" aria-hidden /> {a.back}
      </Link>
      <PageHeader kicker={a.kickerOne} title={ad ? ad.label : a.newAd} />
      {saved ? (
        <p role="status" className="mb-4 border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent">
          {a.created}
        </p>
      ) : null}
      <AdForm lang={lang} ad={ad} />
    </>
  );
}
