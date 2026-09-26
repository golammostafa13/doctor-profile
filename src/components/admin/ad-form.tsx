"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { saveAdAction } from "@/lib/actions/admin-ads";
import type { ActionResult } from "@/lib/admin/action";
import type { Ad } from "@/lib/schema/ads";
import { BiField, Field, FormMessage, ImageField, Submit } from "@/components/admin/form-bits";
import { Panel } from "@/components/admin/ui";
import { FieldError, fieldClass } from "@/components/ui/field";
import { useDash } from "@/components/dash/dash-strings";

/** Slot → dashboard string keys for its long and short names. */
export const SLOTS = [
  { id: "list-leaderboard", long: "slotLeaderboard", short: "slotLeaderboardShort" },
  { id: "profile-rail", long: "slotProfile", short: "slotProfileShort" },
  { id: "footer", long: "slotFooter", short: "slotFooterShort" },
  { id: "blog-inline", long: "slotBlog", short: "slotBlogShort" },
  { id: "grid-native", long: "slotGrid", short: "slotGridShort" },
] as const satisfies readonly { id: Ad["slot"]; long: string; short: string }[];

/** Epoch ms → "YYYY-MM-DD" in Dhaka time, for a date input. */
function dhaka(ms: number | null | undefined): string {
  if (!ms) return "";
  return new Date(ms + 6 * 3600_000).toISOString().slice(0, 10);
}

export function AdForm({ lang, ad }: { lang: string; ad?: Ad }) {
  const router = useRouter();
  const { t } = useDash();
  const a = t.ads;
  const optional = t.common.optional;
  const [state, action] = useActionState<ActionResult<{ id: string }>, FormData>(async (prev, formData) => {
    const result = await saveAdAction(prev, formData);
    // A new ad gets its own address once it exists, so a reload edits it.
    if (result.ok && !ad && result.data) router.replace(`/${lang}/admin/ads/${result.data.id}?saved=1`);
    return result;
  }, { ok: false });
  const e = state.errors ?? {};

  return (
    <form action={action} className="grid gap-6 xl:grid-cols-[1fr_340px]">
      <input type="hidden" name="id" value={ad?.id ?? ""} />
      <div className="space-y-6">
        <Panel title={a.creative}>
          <div className="grid gap-6 sm:grid-cols-2">
            <ImageField label={a.image} name="image" preset="banner" aspect="aspect-[16/5]" defaultValue={ad?.image ?? null} error={e.image} hint={a.imageHint} />
            <ImageField label={a.phoneImage} name="imageMobile" preset="banner" aspect="aspect-[4/3]" defaultValue={ad?.imageMobile ?? null} hint={optional} />
          </div>
          <div className="mt-6 grid gap-4">
            <BiField label={a.alt} name="alt" required defaultValue={ad?.alt} errors={prefixed(e, "alt")} />
            <BiField label={a.headline} name="headline" defaultValue={ad?.headline} errors={prefixed(e, "headline")} />
            <BiField label={a.body} name="body" multiline rows={2} defaultValue={ad?.body} errors={prefixed(e, "body")} />
            <BiField label={a.cta} name="cta" defaultValue={ad?.cta} errors={prefixed(e, "cta")} />
            <Field label={a.link} name="href" type="url" required placeholder="https://" defaultValue={ad?.href} error={e.href} />
          </div>
        </Panel>
      </div>

      <div className="space-y-6">
        <Panel title={a.placement}>
          <div className="space-y-4">
            <Field label={a.internalName} name="label" required defaultValue={ad?.label} error={e.label} hint={a.internalHint} />
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">{a.slot}</span>
              <select name="slot" defaultValue={ad?.slot ?? "list-leaderboard"} className={fieldClass(e.slot)}>
                {SLOTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {a[s.long]}
                  </option>
                ))}
              </select>
              <FieldError message={e.slot} />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <Field label={a.starts} name="activeFrom" type="date" defaultValue={dhaka(ad?.activeFrom)} />
              <Field label={a.ends} name="activeUntil" type="date" defaultValue={dhaka(ad?.activeUntil)} error={e.activeUntil} />
            </div>
            <Field label={a.weightLabel} name="weight" type="number" min={0} max={100} defaultValue={ad?.weight ?? 50} hint={a.weightHint} error={e.weight} />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="enabled" defaultChecked={ad?.enabled ?? true} className="size-4 accent-[var(--accent)]" />
              {a.enabled}
            </label>
          </div>
        </Panel>
        <div className="flex flex-wrap items-center gap-3">
          <Submit>{ad ? a.save : a.create}</Submit>
          <FormMessage state={state} />
        </div>
      </div>
    </form>
  );
}

/** Map `alt.en` → `altEn`, which is what BiField looks up. */
function prefixed(errors: Record<string, string>, name: string) {
  return {
    [`${name}En`]: errors[`${name}.en`] ?? errors[name],
    [`${name}Bn`]: errors[`${name}.bn`],
  } as Record<string, string>;
}
