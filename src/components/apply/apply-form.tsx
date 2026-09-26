"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { applyAction, type ApplyState } from "@/lib/actions/apply";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { textClass } from "@/lib/i18n/content";
import { Button } from "@/components/ui/button";
import { FieldError, fieldClass } from "@/components/ui/field";
import { cn } from "@/lib/utils";

type Strings = Omit<Dictionary["apply"], "rateLimited">;

export function ApplyForm({
  lang,
  t,
  specialities,
}: {
  lang: Locale;
  t: Strings;
  specialities: string[];
}) {
  const [state, action, pending] = useActionState<ApplyState, FormData>(applyAction, { ok: false });
  const bn = textClass(lang);
  const e = state.errors ?? {};

  if (state.ok) {
    return (
      <div role="status" className="hud-card border border-accent/50 bg-accent-soft p-8">
        <CheckCircle2 className="size-8 text-accent" aria-hidden />
        <h2 className={cn("mt-4 font-display text-2xl font-bold uppercase", bn)}>{t.sentTitle}</h2>
        <p className={cn("mt-2 text-ink-mute", bn)}>{t.sentBody}</p>
      </div>
    );
  }

  const input = (name: string, label: string, opts: { type?: string; required?: boolean; hint?: string; placeholder?: string; err?: string; list?: string; autoComplete?: string; bengali?: boolean; inputMode?: "tel" } = {}) => (
    <label className="block">
      <span className={cn("mb-1.5 block text-sm font-medium", bn)}>
        {label}
        {opts.required ? <span className="text-hot"> *</span> : <span className="ml-1.5 text-xs font-normal text-ink-faint">{t.optional}</span>}
      </span>
      <input
        name={name}
        type={opts.type ?? "text"}
        required={opts.required}
        placeholder={opts.placeholder}
        list={opts.list}
        autoComplete={opts.autoComplete}
        inputMode={opts.inputMode}
        lang={opts.bengali ? "bn" : undefined}
        className={fieldClass(opts.err, opts.bengali ? "bn" : undefined)}
      />
      {opts.hint ? <span className={cn("mt-1 block text-xs text-ink-faint", bn)}>{opts.hint}</span> : null}
      <FieldError message={opts.err} />
    </label>
  );

  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="lang" value={lang} />
      {/* Honeypot: hidden from people and from assistive tech. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] size-px opacity-0" />

      <div className="grid gap-5 sm:grid-cols-2">
        {input("nameEn", t.name, { required: true, err: e["name.en"] ?? e.name, autoComplete: "name", placeholder: "Dr. …" })}
        {input("nameBn", t.nameBn, { bengali: true, err: e["name.bn"], placeholder: "ডা. …" })}
        {input("email", t.email, { type: "email", required: true, hint: t.emailHint, err: e.email, autoComplete: "email" })}
        {input("phone", t.phone, { type: "tel", inputMode: "tel", required: true, err: e.phone, autoComplete: "tel", placeholder: "01XXXXXXXXX" })}
        {input("specialityEn", t.speciality, { required: true, list: "apply-specialities", err: e["speciality.en"] ?? e.speciality })}
        {input("bmdcNo", t.bmdc, { required: true, err: e.bmdcNo, placeholder: "A-12345" })}
        {input("designationEn", t.designation, { required: true, err: e["designation.en"] ?? e.designation })}
        {input("workplaceEn", t.workplace, { required: true, err: e["workplace.en"] ?? e.workplace })}
      </div>
      <datalist id="apply-specialities">
        {specialities.map((s) => (
          <option key={s} value={s} />
        ))}
      </datalist>
      {input("chamberAddressEn", t.chamber, { err: e["chamberAddress.en"] })}
      <label className="block">
        <span className={cn("mb-1.5 block text-sm font-medium", bn)}>
          {t.note} <span className="ml-1.5 text-xs font-normal text-ink-faint">{t.optional}</span>
        </span>
        <textarea name="note" rows={3} maxLength={1000} className={fieldClass(e.note, "h-auto py-3")} />
        <FieldError message={e.note} />
      </label>
      {input("password", t.password, { type: "password", required: true, hint: t.passwordHint, err: e.password, autoComplete: "new-password" })}

      {state.message ? (
        <p role="alert" className={cn("text-sm text-danger", bn)}>
          {state.message}
        </p>
      ) : null}
      <Button type="submit" size="lg" disabled={pending} className={bn}>
        {pending ? <Loader2 className="animate-spin" aria-hidden /> : null}
        {t.submit}
      </Button>
    </form>
  );
}
