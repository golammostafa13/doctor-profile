import Link from "next/link";
import { Pencil, Plus, Power, Trash2 } from "lucide-react";
import { SLOTS } from "@/components/admin/ad-form";
import { Badge, Empty, PageHeader } from "@/components/admin/ui";
import { Button } from "@/components/ui/button";
import { deleteAdAction, toggleAdAction } from "@/lib/actions/admin-ads";
import { adState, getAds } from "@/lib/data/ads";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { fmt } from "@/lib/i18n/dash";

export default async function AdminAds(props: PageProps<"/[lang]/admin/ads">) {
  const { lang } = await props.params;
  const { items } = await getAds();
  const a = getDictionary(lang as Locale).dash.ads;

  return (
    <>
      <PageHeader
        kicker={a.kicker}
        title={a.title}
        description={a.description}
        actions={
          <Button asChild>
            <Link href={`/${lang}/admin/ads/new`}>
              <Plus aria-hidden /> {a.newAd}
            </Link>
          </Button>
        }
      />
      {items.length === 0 ? (
        <Empty title={a.none}>{a.noneHint}</Empty>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {items.map((ad) => {
            const state = adState(ad);
            return (
              <li key={ad.id} className="border border-line bg-surface/70">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ad.image.url} alt="" className="aspect-[16/5] w-full object-cover" />
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate font-medium">{ad.label}</p>
                      <p className="text-sm text-ink-mute">{a[SLOTS.find((s) => s.id === ad.slot)?.short ?? "slotGridShort"]} · {fmt(a.weight, { n: ad.weight })}</p>
                    </div>
                    <Badge tone={state === "live" ? "accent" : state === "scheduled" ? "mute" : "hot"}>{a[state]}</Badge>
                  </div>
                  <div className="mt-4 flex gap-1">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/${lang}/admin/ads/${ad.id}`}>
                        <Pencil aria-hidden /> {getDictionary(lang as Locale).dash.common.edit}
                      </Link>
                    </Button>
                    <form action={toggleAdAction}>
                      <input type="hidden" name="id" value={ad.id} />
                      <Button type="submit" variant="ghost" size="sm">
                        <Power aria-hidden /> {ad.enabled ? a.disable : a.enable}
                      </Button>
                    </form>
                    <form action={deleteAdAction} className="ml-auto">
                      <input type="hidden" name="id" value={ad.id} />
                      <Button type="submit" variant="ghost" size="sm" aria-label={getDictionary(lang as Locale).dash.common.delete}>
                        <Trash2 aria-hidden />
                      </Button>
                    </form>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
