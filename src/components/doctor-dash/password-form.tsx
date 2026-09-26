"use client";

import { useActionState } from "react";
import { changeOwnPasswordAction } from "@/lib/actions/doctor";
import type { ActionResult } from "@/lib/admin/action";
import { Field, FormMessage, Submit } from "@/components/admin/form-bits";
import { useDash } from "@/components/dash/dash-strings";

export function PasswordForm() {
  const a = useDash().t.doctorAccount;
  const [state, action] = useActionState<ActionResult, FormData>(changeOwnPasswordAction, { ok: false });
  const e = state.errors ?? {};
  return (
    <form action={action} key={state.ok ? "done" : "form"} className="max-w-md space-y-4">
      <Field label={a.current} name="current" type="password" autoComplete="current-password" required error={e.current} />
      <Field label={a.newPassword} name="next" type="password" autoComplete="new-password" required minLength={10} error={e.next} />
      <Field label={a.confirm} name="confirm" type="password" autoComplete="new-password" required minLength={10} error={e.confirm} />
      <div className="flex flex-wrap items-center gap-3">
        <Submit>{a.save}</Submit>
        <FormMessage state={state} />
      </div>
    </form>
  );
}
