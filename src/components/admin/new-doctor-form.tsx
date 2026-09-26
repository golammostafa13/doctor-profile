"use client";

import Link from "next/link";
import { useActionState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { createDoctorAction } from "@/lib/actions/admin-doctors";
import type { ActionResult } from "@/lib/admin/action";
import { Field, FormMessage, Submit } from "@/components/admin/form-bits";
import { Panel } from "@/components/admin/ui";
import { CopyButton } from "@/components/doctor/copy-button";
import { Button } from "@/components/ui/button";
import { FieldError, fieldClass } from "@/components/ui/field";
import { useDash } from "@/components/dash/dash-strings";

type Result = ActionResult<{ id: string; password?: string }>;

export function NewDoctorForm({
  lang,
  specialities,
}: {
  lang: string;
  specialities: { id: string; name: string }[];
}) {
  const { t } = useDash();
  const n = t.newDoctor;
  const [state, action] = useActionState<Result, FormData>(createDoctorAction, { ok: false });
  const e = state.errors ?? {};

  if (state.ok && state.data) {
    return (
      <Panel title={n.created}>
        <p className="flex items-center gap-2 text-accent">
          <Check className="size-5" aria-hidden /> {n.createdLead}
        </p>
        {state.data.password ? (
          <div className="mt-5 border border-accent/40 bg-accent-soft p-4">
            <p className="text-sm">{n.generated}</p>
            <div className="mt-3 flex items-center gap-3">
              <code className="font-mono text-lg tracking-wider text-accent">{state.data.password}</code>
              <CopyButton value={state.data.password} label={t.common.copyPassword} copiedLabel={t.common.copied} />
            </div>
          </div>
        ) : null}
        <div className="mt-6 flex flex-wrap gap-2">
          <Button asChild>
            <Link href={`/${lang}/admin/doctors/${state.data.id}`}>
              {n.editFull} <ArrowRight aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="outline">
            {/* A full load, so the form starts empty rather than as this result. */}
            <a href={`/${lang}/admin/doctors/new`}>{n.addAnother}</a>
          </Button>
        </div>
      </Panel>
    );
  }

  return (
    <form action={action} className="space-y-6">
      <Panel title={n.identity}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={n.nameEn} name="nameEn" required placeholder="Dr. Farhana Islam" error={e.nameEn} />
          <Field label={n.nameBn} name="nameBn" lang="bn" placeholder="ডা. ফারহানা ইসলাম" error={e.nameBn} inputClassName="bn" />
          <div>
            <label htmlFor="specialityId" className="mb-1.5 block text-sm font-medium">
              {n.speciality}
            </label>
            <select id="specialityId" name="specialityId" required defaultValue="" className={fieldClass(e.specialityId)}>
              <option value="" disabled>
                {t.common.choose}
              </option>
              {specialities.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            <FieldError message={e.specialityId} />
          </div>
          <Field label={n.bmdc} name="bmdcNo" placeholder="A-12345" error={e.bmdcNo} />
          <Field label={n.designation} name="designationEn" required error={e.designationEn} />
          <Field label={n.workplace} name="workplaceEn" required error={e.workplaceEn} />
          <Field label={n.publicPhone} name="publicPhone" inputMode="tel" placeholder="01XXXXXXXXX" hint={t.common.optional} error={e.publicPhone} />
        </div>
      </Panel>

      <Panel title={n.signIn} description={n.signInHint}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={n.email} name="email" type="email" required autoComplete="off" error={e.email} />
          <Field
            label={n.password}
            name="password"
            type="text"
            autoComplete="new-password"
            hint={n.passwordHint}
            error={e.password}
          />
          <div>
            <label htmlFor="status" className="mb-1.5 block text-sm font-medium">
              {n.visibility}
            </label>
            <select id="status" name="status" defaultValue="active" className={fieldClass()}>
              <option value="active">{n.visActive}</option>
              <option value="hidden">{n.visHidden}</option>
            </select>
          </div>
        </div>
      </Panel>

      <div className="flex flex-wrap items-center gap-4">
        <Submit>{n.create}</Submit>
        <FormMessage state={state} />
      </div>
    </form>
  );
}
