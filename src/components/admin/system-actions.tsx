"use client";

import { useActionState } from "react";
import { Database, RefreshCw } from "lucide-react";
import { importDemoAction, rebuildDirectoryAction } from "@/lib/actions/admin-system";
import type { ActionResult } from "@/lib/admin/action";
import { Field, FormMessage, Submit } from "@/components/admin/form-bits";
import { Panel } from "@/components/admin/ui";
import { useDash } from "@/components/dash/dash-strings";

export function SystemActions() {
  const y = useDash().t.system;
  const [rebuilt, rebuild] = useActionState<ActionResult, FormData>(rebuildDirectoryAction, { ok: false });
  const [imported, doImport] = useActionState<ActionResult, FormData>(importDemoAction, { ok: false });
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Panel title={y.rebuildTitle} description={y.rebuildHint}>
        <form action={rebuild} className="flex flex-wrap items-center gap-3">
          <Submit variant="outline">
            <RefreshCw aria-hidden /> {y.rebuild}
          </Submit>
          <FormMessage state={rebuilt} />
        </form>
      </Panel>
      <Panel title={y.importTitle} tone="hot" description={y.importHint}>
        <form action={doImport} className="space-y-3">
          <Field label={y.typeImport} name="confirm" autoComplete="off" error={imported.errors?.confirm} />
          <div className="flex flex-wrap items-center gap-3">
            <Submit variant="outline">
              <Database aria-hidden /> {y.importBtn}
            </Submit>
            <FormMessage state={imported} />
          </div>
        </form>
      </Panel>
    </div>
  );
}
