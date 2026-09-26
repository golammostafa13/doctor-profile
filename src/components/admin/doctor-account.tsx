"use client";

import { useActionState } from "react";
import { KeyRound, Trash2 } from "lucide-react";
import {
  deleteDoctorAction,
  resetDoctorPasswordAction,
  updateDoctorAccountAction,
} from "@/lib/actions/admin-doctors";
import type { ActionResult } from "@/lib/admin/action";
import type { DoctorStatus } from "@/lib/schema/doctor";
import { Field, FormMessage, Submit } from "@/components/admin/form-bits";
import { Panel } from "@/components/admin/ui";
import { CopyButton } from "@/components/doctor/copy-button";
import { fieldClass } from "@/components/ui/field";
import { useDash } from "@/components/dash/dash-strings";
import { fmt } from "@/lib/i18n/dash";

export function DoctorAccount({
  lang,
  id,
  linkNo,
  email,
  status,
  featured,
  order,
  lastLoginAt,
  passwordSetAt,
}: {
  lang: string;
  id: string;
  linkNo: string;
  email: string;
  status: DoctorStatus;
  featured: boolean;
  order: number;
  lastLoginAt?: number;
  passwordSetAt: number;
}) {
  const { t, lang: ui } = useDash();
  const a = t.account;
  const [account, saveAccount] = useActionState<ActionResult, FormData>(updateDoctorAccountAction, { ok: false });
  const [reset, doReset] = useActionState<ActionResult<{ password?: string }>, FormData>(resetDoctorPasswordAction, { ok: false });
  const [removal, doDelete] = useActionState<ActionResult, FormData>(deleteDoctorAction, { ok: false });
  const date = (ms?: number) =>
    ms ? new Date(ms).toLocaleString(ui === "bn" ? "bn-BD" : "en-GB", { dateStyle: "medium", timeStyle: "short" }) : t.common.never;

  return (
    <div className="space-y-6">
      <Panel title={a.title}>
        <form action={saveAccount} className="space-y-4">
          <input type="hidden" name="id" value={id} />
          <Field label={a.signInEmail} name="email" type="email" defaultValue={email} required error={account.errors?.email} />
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">{a.status}</span>
            <select name="status" defaultValue={status} className={fieldClass()}>
              <option value="active">{a.statusActive}</option>
              <option value="hidden">{a.statusHidden}</option>
              <option value="suspended">{a.statusSuspended}</option>
            </select>
          </label>
          <div className="grid grid-cols-[1fr_auto] items-end gap-4">
            <Field label={a.order} name="order" type="number" min={0} max={9999} defaultValue={order} hint={a.orderHint} error={account.errors?.order} />
            <label className="flex h-12 items-center gap-2 text-sm">
              <input type="checkbox" name="featured" defaultChecked={featured} className="size-4 accent-[var(--accent)]" />
              {t.common.featured}
            </label>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Submit size="sm">{a.save}</Submit>
            <FormMessage state={account} />
          </div>
        </form>
        <dl className="mt-5 grid grid-cols-2 gap-2 border-t border-line pt-4 text-xs">
          <dt className="text-ink-faint">{a.linkNo}</dt>
          <dd className="font-mono">{linkNo}</dd>
          <dt className="text-ink-faint">{a.lastSignIn}</dt>
          <dd>{date(lastLoginAt)}</dd>
          <dt className="text-ink-faint">{a.passwordSet}</dt>
          <dd>{date(passwordSetAt)}</dd>
        </dl>
      </Panel>

      <Panel title={a.passwordTitle} description={a.passwordHint}>
        <form action={doReset} className="space-y-4">
          <input type="hidden" name="id" value={id} />
          <Field label={a.newPassword} name="password" type="text" autoComplete="new-password" hint={a.blankGenerate} error={reset.errors?.password} />
          <div className="flex flex-wrap items-center gap-3">
            <Submit size="sm" variant="outline">
              <KeyRound aria-hidden /> {a.reset}
            </Submit>
            <FormMessage state={reset} />
          </div>
          {reset.ok && reset.data?.password ? (
            <div className="border border-accent/40 bg-accent-soft p-3">
              <p className="text-xs">{t.common.shownOnce}</p>
              <div className="mt-2 flex items-center gap-3">
                <code className="font-mono tracking-wider text-accent">{reset.data.password}</code>
                <CopyButton value={reset.data.password} label={t.common.copyPassword} copiedLabel={t.common.copied} />
              </div>
            </div>
          ) : null}
        </form>
      </Panel>

      <Panel title={a.deleteTitle} tone="hot" description={a.deleteHint}>
        <form action={doDelete} className="space-y-4">
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="lang" value={lang} />
          <Field label={fmt(a.typeToConfirm, { code: linkNo })} name="confirm" autoComplete="off" inputMode="numeric" error={removal.errors?.confirm} />
          <div className="flex flex-wrap items-center gap-3">
            <Submit size="sm" variant="danger">
              <Trash2 aria-hidden /> {a.deleteDoctor}
            </Submit>
            <FormMessage state={removal} />
          </div>
        </form>
      </Panel>
    </div>
  );
}
