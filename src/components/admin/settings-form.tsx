"use client";

import { useActionState } from "react";
import { saveSettingsAction } from "@/lib/actions/admin-settings";
import type { ActionResult } from "@/lib/admin/action";
import type { SiteSettings } from "@/lib/schema/settings";
import { BiField, Field, FormMessage, ImageField, Submit } from "@/components/admin/form-bits";
import { Panel } from "@/components/admin/ui";
import { fieldClass } from "@/components/ui/field";
import { useDash } from "@/components/dash/dash-strings";

/** `sponsor.company.en` → `companyEn`, matching the field names below. */
function flatten(errors: Record<string, string>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [path, message] of Object.entries(errors)) {
    const parts = path.split(".");
    const lang = parts.at(-1) === "en" ? "En" : parts.at(-1) === "bn" ? "Bn" : "";
    const field = lang ? parts.at(-2) : parts.at(-1);
    const prefix = parts[0] === "announcement" && field === "text" ? "announcementText" : field;
    out[`${prefix}${lang || "En"}`] = message;
    out[`${prefix}`] = message;
  }
  return out;
}

export function SettingsForm({ settings }: { settings: SiteSettings }) {
  const g = useDash().t.settings;
  const [state, action] = useActionState<ActionResult, FormData>(saveSettingsAction, { ok: false });
  const e = flatten(state.errors ?? {});
  const s = settings.sponsor;

  return (
    <form action={action} className="space-y-6">
      <Panel title={g.sponsorTitle} description={g.sponsorHint}>
        <label className="mb-5 flex items-center gap-2 text-sm">
          <input type="checkbox" name="sponsorEnabled" defaultChecked={s.enabled} className="size-4 accent-[var(--accent)]" />
          {g.showSponsor}
        </label>
        <div className="grid gap-4">
          <BiField label={g.company} name="company" required defaultValue={s.company} errors={e} />
          <BiField label={g.creditLabel} name="courtesyLabel" required defaultValue={s.courtesyLabel} errors={e} />
          <BiField label={g.product} name="product" defaultValue={s.product} errors={e} />
          <BiField label={g.generic} name="generic" defaultValue={s.generic} errors={e} />
          <BiField label={g.disclosure} name="note" required multiline rows={2} defaultValue={s.note} errors={e} />
          <Field label={g.sponsorLink} name="sponsorHref" type="url" placeholder="https://" defaultValue={s.href} error={e.sponsorHref ?? e.href} />
          <div className="grid gap-6 sm:grid-cols-2">
            <ImageField label={g.logo} name="logo" preset="logo" aspect="aspect-[16/9]" defaultValue={s.logo} hint={g.logoHint} />
            <ImageField label={g.pack} name="pack" preset="logo" defaultValue={s.pack} />
          </div>
        </div>
      </Panel>

      <Panel title={g.directory}>
        <label className="block max-w-sm">
          <span className="mb-1.5 block text-sm font-medium">{g.defaultOrder}</span>
          <select name="defaultSort" defaultValue={settings.directory.defaultSort} className={fieldClass()}>
            <option value="featured">{g.sortFeatured}</option>
            <option value="name">{g.sortName}</option>
            <option value="recent">{g.sortRecent}</option>
          </select>
        </label>
        <input type="hidden" name="perPage" value={settings.directory.perPage} />
      </Panel>

      <Panel title={g.announcement} description={g.announcementHint}>
        <label className="mb-5 flex items-center gap-2 text-sm">
          <input type="checkbox" name="announcementEnabled" defaultChecked={settings.announcement?.enabled ?? false} className="size-4 accent-[var(--accent)]" />
          {g.showAnnouncement}
        </label>
        <div className="grid gap-4">
          <BiField label={g.text} name="announcementText" defaultValue={settings.announcement?.text} errors={e} />
          <Field label={g.link} name="announcementHref" type="url" placeholder={g.linkHint} defaultValue={settings.announcement?.href} error={e.announcementHref} />
        </div>
      </Panel>

      <div className="flex flex-wrap items-center gap-3">
        <Submit>{g.save}</Submit>
        <FormMessage state={state} />
      </div>
    </form>
  );
}
