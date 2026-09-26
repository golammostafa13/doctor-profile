"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Check, X } from "lucide-react";
import { approveApplicationAction, rejectApplicationAction } from "@/lib/actions/admin-applications";
import type { ActionResult } from "@/lib/admin/action";
import { FormMessage, Submit } from "@/components/admin/form-bits";
import { Panel } from "@/components/admin/ui";
import { Button } from "@/components/ui/button";
import { fieldClass } from "@/components/ui/field";
import { useDash } from "@/components/dash/dash-strings";

export function ApplicationDecision({ lang, id }: { lang: string; id: string }) {
  const a = useDash().t.applications;
  const [approved, approve] = useActionState<ActionResult<{ doctorId: string }>, FormData>(approveApplicationAction, { ok: false });
  const [rejected, reject] = useActionState<ActionResult, FormData>(rejectApplicationAction, { ok: false });

  if (approved.ok && approved.data) {
    return (
      <Panel title={a.approvedTitle}>
        <p className="text-accent">{a.approvedLead}</p>
        <Button asChild className="mt-4">
          <Link href={`/${lang}/admin/doctors/${approved.data.doctorId}`}>{a.completeProfile}</Link>
        </Button>
      </Panel>
    );
  }
  if (rejected.ok) {
    return (
      <Panel title={a.rejectedTitle}>
        <p className="text-ink-mute">{a.rejectedLead}</p>
      </Panel>
    );
  }

  return (
    <div className="space-y-6">
      <Panel title={a.approveTitle} description={a.approveHint}>
        <form action={approve} className="flex flex-wrap items-center gap-3">
          <input type="hidden" name="id" value={id} />
          <Submit>
            <Check aria-hidden /> {a.approveBtn}
          </Submit>
          <FormMessage state={approved} />
        </form>
      </Panel>
      <Panel title={a.rejectTitle} tone="hot">
        <form action={reject} className="space-y-3">
          <input type="hidden" name="id" value={id} />
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">{a.reasonLabel} <span className="text-xs text-ink-faint">{a.reasonHint}</span></span>
            <textarea name="note" rows={3} maxLength={600} className={fieldClass(undefined, "h-auto py-3")} />
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <Submit variant="danger" size="sm">
              <X aria-hidden /> {a.rejectBtn}
            </Submit>
            <FormMessage state={rejected} />
          </div>
        </form>
      </Panel>
    </div>
  );
}
