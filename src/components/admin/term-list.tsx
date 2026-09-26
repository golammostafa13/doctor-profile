"use client";

import { useActionState, useState } from "react";
import { Check, Plus, Trash2 } from "lucide-react";
import { deleteTermAction, saveTermAction } from "@/lib/actions/admin-taxonomy";
import type { ActionResult } from "@/lib/admin/action";
import type { TermKind } from "@/lib/schema/taxonomy";
import { FormMessage, Submit } from "@/components/admin/form-bits";
import { FieldError, fieldClass } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import { useDash } from "@/components/dash/dash-strings";
import { fmt } from "@/lib/i18n/dash";

export interface TermRow {
  id: string;
  nameEn: string;
  nameBn: string;
  order: number;
  used: number;
}

/** One list — specialities, hospitals or districts — edited row by row. */
export function TermList({ kind, terms }: { kind: TermKind; terms: TermRow[] }) {
  const l = useDash().t.lists;
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();
  const shown = needle
    ? terms.filter((t) => [t.id, t.nameEn, t.nameBn].some((v) => v.toLowerCase().includes(needle)))
    : terms;

  return (
    <div className="space-y-4">
      <NewTerm kind={kind} />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={fmt(l.filter, { n: terms.length })}
        aria-label={fmt(l.filter, { n: terms.length })}
        className={fieldClass(undefined, "max-w-sm")}
      />
      <div className="overflow-x-auto border border-line">
        <div className="hidden min-w-[720px] grid-cols-[200px_1fr_1fr_90px_70px_auto] gap-3 bg-bg-deep/80 px-4 py-3 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-ink-faint md:grid">
          <span>{l.id}</span>
          <span>{l.english}</span>
          <span>{l.bengali}</span>
          <span>{l.order}</span>
          <span>{l.used}</span>
          <span />
        </div>
        <ul className="divide-y divide-line">
          {shown.map((t) => (
            <TermEditRow key={t.id} kind={kind} term={t} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function TermEditRow({ kind, term }: { kind: TermKind; term: TermRow }) {
  const { t } = useDash();
  const [saved, save] = useActionState<ActionResult<{ id: string }>, FormData>(saveTermAction, { ok: false });
  const [removed, remove] = useActionState<ActionResult, FormData>(deleteTermAction, { ok: false });
  if (removed.ok) return null;
  const e = saved.errors ?? {};
  return (
    <li className="px-4 py-3">
      <form action={save} className="grid gap-2 md:min-w-[720px] md:grid-cols-[200px_1fr_1fr_90px_70px_auto] md:items-start md:gap-3">
        <input type="hidden" name="kind" value={kind} />
        <input type="hidden" name="existingId" value={term.id} />
        <span className="truncate pt-3 font-mono text-xs text-ink-mute" title={term.id}>
          {term.id}
        </span>
        <div>
          <input name="nameEn" defaultValue={term.nameEn} required aria-label={t.lists.englishName} className={fieldClass(e["name.en"], "h-10")} />
          <FieldError message={e["name.en"]} />
        </div>
        <input name="nameBn" defaultValue={term.nameBn} lang="bn" aria-label={t.lists.bengaliName} className={fieldClass(e["name.bn"], "bn h-10")} />
        <input name="order" type="number" min={0} max={999} defaultValue={term.order} aria-label={t.lists.order} className={fieldClass(e.order, "h-10")} />
        <span className={cn("pt-2.5 font-mono text-sm", term.used ? "text-accent" : "text-ink-faint")}>{term.used}</span>
        <div className="flex items-center gap-1">
          <Submit size="sm" variant="outline">
            <Check aria-hidden />
            <span className="sr-only">{t.common.save}</span>
          </Submit>
          <button
            type="submit"
            formAction={remove}
            disabled={term.used > 0}
            title={term.used > 0 ? t.lists.inUse : t.common.delete}
            aria-label={t.common.delete}
            className="grid size-9 place-items-center text-ink-mute transition-colors hover:bg-danger-soft hover:text-danger disabled:opacity-30 disabled:hover:bg-transparent [&_svg]:size-4"
          >
            <Trash2 />
          </button>
        </div>
        <div className="md:col-span-6">
          <FormMessage state={saved.message ? saved : removed} />
        </div>
      </form>
    </li>
  );
}

function NewTerm({ kind }: { kind: TermKind }) {
  const [state, action] = useActionState<ActionResult<{ id: string }>, FormData>(saveTermAction, { ok: false });
  return (
    <form action={action} className="grid gap-3 border border-dashed border-line p-4 md:grid-cols-[1fr_1fr_200px_auto] md:items-start">
      <input type="hidden" name="kind" value={kind} />
      <input type="hidden" name="order" value="500" />
      {/* Re-keyed after each successful add, so the inputs start empty. */}
      <NewTermFields key={state.ok ? state.data?.id : "draft"} errors={state.errors ?? {}} />
      <div className="md:col-span-4">
        <FormMessage state={state} />
      </div>
    </form>
  );
}

function NewTermFields({ errors: e }: { errors: Record<string, string> }) {
  const { t } = useDash();
  const [id, setId] = useState("");
  const [idTouched, setIdTouched] = useState(false);
  const slug = (v: string) => v.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return (
    <>
      <div>
        <input
          name="nameEn"
          required
          placeholder={t.lists.englishName}
          onChange={(ev) => {
            if (!idTouched) setId(slug(ev.target.value));
          }}
          className={fieldClass(e["name.en"], "h-10")}
        />
        <FieldError message={e["name.en"]} />
      </div>
      <input name="nameBn" placeholder={t.lists.bengaliName} lang="bn" className={fieldClass(undefined, "bn h-10")} />
      <div>
        <input
          name="id"
          required
          placeholder={t.lists.urlId}
          value={id}
          onChange={(ev) => {
            setIdTouched(true);
            setId(slug(ev.target.value));
          }}
          className={fieldClass(e.id, "h-10 font-mono text-sm")}
        />
        <FieldError message={e.id} />
      </div>
      <div className="flex items-center gap-3">
        <Submit size="sm">
          <Plus aria-hidden /> {t.common.add}
        </Submit>
      </div>
    </>
  );
}
