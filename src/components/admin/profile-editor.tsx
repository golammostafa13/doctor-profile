"use client";

import Link from "next/link";
import { useActionState, useEffect, useMemo, useState, type ReactNode } from "react";
import { ArrowDown, ArrowUp, ExternalLink, Plus, Trash2 } from "lucide-react";
import type { ActionResult } from "@/lib/admin/action";
import type { MediaRef } from "@/lib/schema/common";
import type { DoctorEditable, PaperKind } from "@/lib/schema/doctor";
import { FormMessage, ImageField, Submit } from "@/components/admin/form-bits";
import { Button } from "@/components/ui/button";
import { FieldError, fieldClass } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import { useDash } from "@/components/dash/dash-strings";

/**
 * Everything on a doctor's public page, in one form.
 *
 * Held as one object in state and posted as JSON (see
 * `saveDoctorProfileAction`): a profile with a dozen repeatable sections does
 * not flatten into named form fields without inventing a naming scheme. The
 * server validates it with the same schema a doctor's own edit uses, and its
 * errors come back keyed by path — `chambers.1.appointmentPhone` — which is
 * how each message finds the input it belongs beside.
 */

type Bi = { en: string; bn?: string };
type Opt = { id: string; name: string };
type Errors = Record<string, string>;

export interface EditorProps {
  lang: string;
  /** The record id, posted for the admin action; the doctor action ignores it. */
  id?: string;
  /** Admin or doctor save — same payload, different authority. */
  saveAction: (prev: ActionResult, formData: FormData) => Promise<ActionResult>;
  linkNo: string;
  initial: DoctorEditable;
  specialities: Opt[];
  hospitals: Opt[];
  locations: Opt[];
}

const newRowId = () => crypto.randomUUID().replace(/-/g, "").slice(0, 10);

/**
 * Blank strings become absent, and an object with nothing left in it becomes
 * absent too — so an untouched optional Bengali field, or an optional
 * "location" pair left empty, is omitted rather than sent as `""` and
 * rejected.
 */
function clean(value: unknown): unknown {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed === "" ? undefined : trimmed;
  }
  if (Array.isArray(value)) return value.map(clean).filter((v) => v !== undefined);
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    let meaningful = false;
    for (const [key, v] of Object.entries(value)) {
      const c = clean(v);
      if (c === undefined) continue;
      out[key] = c;
      if (c !== false) meaningful = true;
    }
    return meaningful ? out : undefined;
  }
  return value;
}

/**
 * Rows keep their position even when blank, so a server error at
 * `education.2` still points at the third row on screen.
 */
function rows<T extends { id: string }>(list: T[]) {
  return list.map((row, i) => {
    const { id, ...rest } = row as T & { order?: number };
    delete (rest as { order?: number }).order;
    return { ...((clean(rest) as object) ?? {}), id, order: Math.min(i, 49) };
  });
}

function toPayload(s: DoctorEditable) {
  const top = clean({
    ...s,
    chambers: undefined,
    education: undefined,
    experience: undefined,
    awards: undefined,
    fellowships: undefined,
    papers: undefined,
  }) as Record<string, unknown>;
  // `about` and a paper's `summary` are always-present pairs whose English may
  // be empty (bilingualOptional), so they are sent even when blank.
  const blank = { en: "" };
  return {
    ...top,
    about: top.about ?? blank,
    photo: s.photo,
    chambers: rows(s.chambers),
    education: rows(s.education),
    experience: rows(s.experience),
    awards: rows(s.awards),
    fellowships: rows(s.fellowships),
    papers: rows(s.papers).map((p) => ({ summary: blank, ...p })),
  };
}

export function ProfileEditor({ lang, id, saveAction, linkNo, initial, specialities, hospitals, locations }: EditorProps) {
  const { t } = useDash();
  const e = t.editor;
  const [doc, setDoc] = useState<DoctorEditable>(initial);
  const [saved, setSaved] = useState(() => JSON.stringify(initial));
  const [state, action] = useActionState<ActionResult, FormData>(async (prev, formData) => {
    const result = await saveAction(prev, formData);
    if (result.ok) setSaved(String(formData.get("snapshot")));
    return result;
  }, { ok: false });
  const errors: Errors = state.errors ?? {};
  const snapshot = JSON.stringify(doc);
  const dirty = snapshot !== saved;

  // Leaving with unsaved edits asks first: this form is long, and a stray
  // back-swipe on a laptop trackpad should not cost ten minutes of typing.
  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  const set = <K extends keyof DoctorEditable>(key: K, value: DoctorEditable[K]) =>
    setDoc((d) => ({ ...d, [key]: value }));

  const payload = useMemo(() => JSON.stringify(toPayload(doc)), [doc]);
  const sectionErrors = (prefix: string) =>
    Object.keys(errors).filter((k) => k === prefix || k.startsWith(`${prefix}.`)).length;

  const sections = [
    ["basics", e.basics],
    ["contact", e.contact],
    ["chambers", e.chambers],
    ["education", e.education],
    ["experience", e.experienceNav],
    ["lists", e.lists],
    ["awards", e.awards],
    ["fellowships", e.fellowships],
    ["papers", e.papersNav],
  ] as const;

  return (
    <form action={action} className="space-y-6">
      {id ? <input type="hidden" name="id" value={id} /> : null}
      <input type="hidden" name="payload" value={payload} />
      <input type="hidden" name="snapshot" value={snapshot} />

      <nav aria-label={e.sectionsLabel} className="-mx-4 overflow-x-auto px-4">
        <ul className="flex gap-1">
          {sections.map(([key, label]) => {
            const count =
              key === "basics"
                ? ["name", "speciality", "designation", "workplace", "about", "bmdcNo", "degrees", "photo", "yearsExperience", "patientsServed"].reduce((n, k) => n + sectionErrors(k), 0)
                : key === "contact"
                  ? ["publicPhone", "publicEmail", "whatsapp", "publicAddress", "social"].reduce((n, k) => n + sectionErrors(k), 0)
                  : key === "lists"
                    ? ["qualifications", "skills", "achievements"].reduce((n, k) => n + sectionErrors(k), 0)
                    : sectionErrors(key);
            return (
              <li key={key} className="shrink-0">
                <a
                  href={`#ed-${key}`}
                  className={cn(
                    "flex h-9 items-center gap-2 border px-3 font-display text-[0.75rem] font-semibold uppercase tracking-[0.08em] transition-colors",
                    count ? "border-danger text-danger" : "border-line text-ink-mute hover:border-accent hover:text-accent",
                  )}
                >
                  {label}
                  {count ? <span className="font-mono text-[0.65rem]">{count}</span> : null}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <Section id="basics" title={e.basics}>
        <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
          <ImageField
            label={e.photo}
            preset="portrait"
            hint={e.photoHint}
            value={doc.photo}
            onChange={(photo: MediaRef | null) => set("photo", photo)}
            error={errors.photo}
          />
          <div className="grid content-start gap-4">
            <BiInput label={e.name} required value={doc.name} onChange={(v) => set("name", v)} path="name" errors={errors} />
            <BiInput label={e.designation} required value={doc.designation} onChange={(v) => set("designation", v)} path="designation" errors={errors} />
            <BiInput label={e.workplace} required value={doc.workplace} onChange={(v) => set("workplace", v)} path="workplace" errors={errors} />
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          <div>
            <p className="mb-1.5 text-sm font-medium">{e.specialities} <span className="text-xs text-ink-faint">{e.specialitiesHint}</span></p>
            <div className="flex flex-wrap gap-1.5">
              {specialities.map((s) => {
                const on = doc.specialityIds.includes(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => {
                      const ids = on ? doc.specialityIds.filter((x) => x !== s.id) : [...doc.specialityIds, s.id].slice(0, 6);
                      setDoc((d) => ({
                        ...d,
                        specialityIds: ids,
                        // The headline follows the first pick until someone types their own.
                        speciality: !d.speciality.en && !on ? { en: s.name } : d.speciality,
                      }));
                    }}
                    className={cn(
                      "h-8 border px-3 text-[0.8rem] transition-colors",
                      on ? "border-accent bg-accent text-accent-ink" : "border-line text-ink-mute hover:border-accent hover:text-accent",
                    )}
                  >
                    {s.name}
                  </button>
                );
              })}
            </div>
            <FieldError message={errors.specialityIds} />
          </div>
          <BiInput label={e.headline} hint={e.headlineHint} required value={doc.speciality} onChange={(v) => set("speciality", v)} path="speciality" errors={errors} />
          <div className="grid gap-4 sm:grid-cols-2">
            <TextInput
              label={e.degrees}
              hint={e.degreesHint}
              value={doc.degrees.join(", ")}
              onChange={(v) => set("degrees", v.split(",").map((x) => x.trim()).filter(Boolean))}
              error={errors.degrees ?? Object.entries(errors).find(([k]) => k.startsWith("degrees."))?.[1]}
              placeholder="MBBS, FCPS (Medicine)"
            />
            <TextInput label={e.bmdc} value={doc.bmdcNo ?? ""} onChange={(v) => set("bmdcNo", v)} error={errors.bmdcNo} />
            <NumInput label={e.years} value={doc.yearsExperience} onChange={(v) => set("yearsExperience", v)} error={errors.yearsExperience} />
            <NumInput label={e.patients} value={doc.patientsServed} onChange={(v) => set("patientsServed", v)} error={errors.patientsServed} />
          </div>
          <BiInput label={e.bio} multiline rows={6} value={doc.about} onChange={(v) => set("about", v)} path="about" errors={errors} />
        </div>
      </Section>

      <Section id="contact" title={e.contact}>
        <div className="grid gap-4 sm:grid-cols-3">
          <TextInput label={e.publicPhone} inputMode="tel" value={doc.publicPhone ?? ""} onChange={(v) => set("publicPhone", v)} error={errors.publicPhone} placeholder="01XXXXXXXXX" />
          <TextInput label={e.whatsapp} inputMode="tel" value={doc.whatsapp ?? ""} onChange={(v) => set("whatsapp", v)} error={errors.whatsapp} placeholder="01XXXXXXXXX" />
          <TextInput label={e.publicEmail} type="email" value={doc.publicEmail ?? ""} onChange={(v) => set("publicEmail", v)} error={errors.publicEmail} />
        </div>
        <div className="mt-4">
          <BiInput label={e.publicAddress} value={doc.publicAddress ?? { en: "" }} onChange={(v) => set("publicAddress", v)} path="publicAddress" errors={errors} />
        </div>
        <p className="mb-2 mt-6 text-sm font-medium">{e.links} <span className="text-xs text-ink-faint">{e.linksHint}</span></p>
        <div className="grid gap-4 sm:grid-cols-3">
          {(["website", "facebook", "linkedin", "youtube", "instagram", "twitter"] as const).map((key) => (
            <TextInput
              key={key}
              label={key[0].toUpperCase() + key.slice(1)}
              type="url"
              value={doc.social[key] ?? ""}
              onChange={(v) => set("social", { ...doc.social, [key]: v })}
              error={errors[`social.${key}`]}
              placeholder="https://"
            />
          ))}
        </div>
      </Section>

      <Section id="chambers" title={e.chambers} description={e.chambersHint}>
        <Repeater
          items={doc.chambers}
          onChange={(v) => set("chambers", v)}
          addLabel={e.addChamber}
          make={() => ({ id: newRowId(), hospital: { en: "" }, address: { en: "" }, visitingHours: { en: "" }, order: 0 })}
          render={(row, update, i) => {
            const p = `chambers.${i}`;
            return (
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <SelectInput
                    label={e.hospitalFilter}
                    value={row.hospitalId ?? ""}
                    options={hospitals}
                    onChange={(v) => {
                      const term = hospitals.find((h) => h.id === v);
                      update({ hospitalId: v || undefined, hospital: !row.hospital.en && term ? { en: term.name } : row.hospital });
                    }}
                  />
                  <SelectInput label={e.district} value={row.locationId ?? ""} options={locations} onChange={(v) => update({ locationId: v || undefined })} />
                </div>
                <BiInput label={e.chamberName} required value={row.hospital} onChange={(v) => update({ hospital: v })} path={`${p}.hospital`} errors={errors} />
                <BiInput label={e.address} required value={row.address} onChange={(v) => update({ address: v })} path={`${p}.address`} errors={errors} />
                <BiInput label={e.hours} required value={row.visitingHours} onChange={(v) => update({ visitingHours: v })} path={`${p}.visitingHours`} errors={errors} />
                <div className="grid gap-4 sm:grid-cols-3">
                  <TextInput label={e.apptPhone} inputMode="tel" value={row.appointmentPhone ?? ""} onChange={(v) => update({ appointmentPhone: v })} error={errors[`${p}.appointmentPhone`]} placeholder="01XXXXXXXXX" />
                  <NumInput label={e.lat} step="any" value={row.geo?.lat} onChange={(v) => update({ geo: { lat: v as number, lng: row.geo?.lng as number } })} error={errors[`${p}.geo.lat`] ?? errors[`${p}.geo`]} />
                  <NumInput label={e.lng} step="any" value={row.geo?.lng} onChange={(v) => update({ geo: { lat: row.geo?.lat as number, lng: v as number } })} error={errors[`${p}.geo.lng`]} />
                </div>
              </div>
            );
          }}
        />
      </Section>

      <Section id="education" title={e.education}>
        <Repeater
          items={doc.education}
          onChange={(v) => set("education", v)}
          addLabel={e.addEducation}
          make={() => ({ id: newRowId(), degree: { en: "" }, institution: { en: "" }, order: 0 })}
          render={(row, update, i) => (
            <div className="grid gap-4">
              <BiInput label={e.degree} required value={row.degree} onChange={(v) => update({ degree: v })} path={`education.${i}.degree`} errors={errors} />
              <BiInput label={e.institution} required value={row.institution} onChange={(v) => update({ institution: v })} path={`education.${i}.institution`} errors={errors} />
              <YearPair row={row} update={update} path={`education.${i}`} errors={errors} />
            </div>
          )}
        />
      </Section>

      <Section id="experience" title={e.experience}>
        <Repeater
          items={doc.experience}
          onChange={(v) => set("experience", v)}
          addLabel={e.addPosition}
          make={() => ({ id: newRowId(), role: { en: "" }, organisation: { en: "" }, current: false, order: 0 })}
          render={(row, update, i) => (
            <div className="grid gap-4">
              <BiInput label={e.role} required value={row.role} onChange={(v) => update({ role: v })} path={`experience.${i}.role`} errors={errors} />
              <BiInput label={e.organisation} required value={row.organisation} onChange={(v) => update({ organisation: v })} path={`experience.${i}.organisation`} errors={errors} />
              <BiInput label={e.location} value={row.location ?? { en: "" }} onChange={(v) => update({ location: v })} path={`experience.${i}.location`} errors={errors} />
              <div className="flex flex-wrap items-end gap-4">
                <YearPair row={row} update={update} path={`experience.${i}`} errors={errors} />
                <label className="flex h-12 items-center gap-2 text-sm">
                  <input type="checkbox" checked={row.current} onChange={(e) => update({ current: e.target.checked })} className="size-4 accent-[var(--accent)]" />
                  {e.current}
                </label>
              </div>
            </div>
          )}
        />
      </Section>

      <Section id="lists" title={e.lists} description={e.listsHint}>
        <div className="grid gap-4 lg:grid-cols-3">
          <LinesInput label={e.qualifications} value={doc.qualifications} onChange={(v) => set("qualifications", v)} errors={errors} path="qualifications" />
          <LinesInput label={e.skills} value={doc.skills} onChange={(v) => set("skills", v)} errors={errors} path="skills" />
          <LinesInput label={e.achievements} value={doc.achievements} onChange={(v) => set("achievements", v)} errors={errors} path="achievements" />
        </div>
      </Section>

      <Section id="awards" title={e.awards}>
        <Repeater
          items={doc.awards}
          onChange={(v) => set("awards", v)}
          addLabel={e.addAward}
          make={() => ({ id: newRowId(), title: { en: "" }, order: 0 })}
          render={(row, update, i) => (
            <div className="grid gap-4">
              <BiInput label={e.awardTitle} required value={row.title} onChange={(v) => update({ title: v })} path={`awards.${i}.title`} errors={errors} />
              <BiInput label={e.issuer} value={row.issuer ?? { en: "" }} onChange={(v) => update({ issuer: v })} path={`awards.${i}.issuer`} errors={errors} />
              <NumInput label={e.year} value={row.year} onChange={(v) => update({ year: v })} error={errors[`awards.${i}.year`]} className="max-w-40" />
            </div>
          )}
        />
      </Section>

      <Section id="fellowships" title={e.fellowships}>
        <Repeater
          items={doc.fellowships}
          onChange={(v) => set("fellowships", v)}
          addLabel={e.addFellowship}
          make={() => ({ id: newRowId(), subject: { en: "" }, order: 0 })}
          render={(row, update, i) => (
            <div className="grid gap-4">
              <BiInput label={e.subject} required value={row.subject} onChange={(v) => update({ subject: v })} path={`fellowships.${i}.subject`} errors={errors} />
              <div className="grid gap-4 sm:grid-cols-2">
                <BiInput label={e.country} value={row.country ?? { en: "" }} onChange={(v) => update({ country: v })} path={`fellowships.${i}.country`} errors={errors} />
                <BiInput label={e.duration} value={row.duration ?? { en: "" }} onChange={(v) => update({ duration: v })} path={`fellowships.${i}.duration`} errors={errors} />
              </div>
              <NumInput label={e.year} value={row.year} onChange={(v) => update({ year: v })} error={errors[`fellowships.${i}.year`]} className="max-w-40" />
            </div>
          )}
        />
      </Section>

      <Section id="papers" title={e.papers}>
        <Repeater
          items={doc.papers}
          onChange={(v) => set("papers", v)}
          addLabel={e.addItem}
          make={() => ({ id: newRowId(), kind: "publication" as PaperKind, title: { en: "" }, summary: { en: "" }, image: null, order: 0 })}
          render={(row, update, i) => {
            const p = `papers.${i}`;
            return (
              <div className="grid gap-4 lg:grid-cols-[auto_1fr]">
                <ImageField label={e.thumbnail} preset="banner" aspect="aspect-[4/3]" value={row.image} onChange={(image) => update({ image })} />
                <div className="grid content-start gap-4">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <SelectInput
                      label={e.kind}
                      value={row.kind}
                      options={[
                        { id: "publication", name: e.publication },
                        { id: "interview", name: e.interview },
                        { id: "seminar", name: e.seminar },
                      ]}
                      onChange={(v) => update({ kind: (v || "publication") as PaperKind })}
                      noBlank
                    />
                    <TextInput label={e.date} type="date" value={row.date ?? ""} onChange={(v) => update({ date: v })} error={errors[`${p}.date`]} />
                    <TextInput label={e.source} type="url" value={row.sourceUrl ?? ""} onChange={(v) => update({ sourceUrl: v })} error={errors[`${p}.sourceUrl`]} placeholder="https://" />
                  </div>
                  <BiInput label={e.awardTitle} required value={row.title} onChange={(v) => update({ title: v })} path={`${p}.title`} errors={errors} />
                  <BiInput label={e.summary} multiline rows={3} value={row.summary} onChange={(v) => update({ summary: v })} path={`${p}.summary`} errors={errors} />
                </div>
              </div>
            );
          }}
        />
      </Section>

      <div className="sticky bottom-0 z-20 -mx-4 flex flex-wrap items-center gap-4 border-t border-line bg-bg/95 px-4 py-3 backdrop-blur sm:-mx-8 sm:px-8">
        <Submit>{e.saveProfile}</Submit>
        <Button asChild variant="outline">
          <Link href={`/${lang}/doctors/${linkNo}`} target="_blank">
            {t.common.viewPublic} <ExternalLink aria-hidden />
          </Link>
        </Button>
        {dirty ? <span className="font-mono text-xs uppercase tracking-[0.14em] text-hot">{t.common.unsaved}</span> : null}
        <FormMessage state={state} />
      </div>
    </form>
  );
}

// --- Pieces ------------------------------------------------------------------

function Section({ id, title, description, children }: { id: string; title: string; description?: string; children: ReactNode }) {
  return (
    <section id={`ed-${id}`} className="scroll-mt-24 border border-line bg-surface/70 p-5 sm:p-6">
      <h2 className="font-display text-lg font-semibold uppercase tracking-[0.04em]">{title}</h2>
      {description ? <p className="mt-1 text-sm text-ink-mute">{description}</p> : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}

function BiInput({
  label,
  hint,
  value,
  onChange,
  path,
  errors,
  required,
  multiline,
  rows = 4,
}: {
  label: string;
  hint?: string;
  value: Bi;
  onChange: (v: Bi) => void;
  path: string;
  errors: Errors;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}) {
  const { t } = useDash();
  const errEn = errors[`${path}.en`] ?? errors[path];
  const errBn = errors[`${path}.bn`];
  const Tag = multiline ? "textarea" : "input";
  return (
    <fieldset>
      <legend className="mb-1.5 text-sm font-medium">
        {label}
        {required ? <span className="text-hot"> *</span> : null}
        {hint ? <span className="ml-2 text-xs font-normal text-ink-faint">{hint}</span> : null}
      </legend>
      <div className="grid gap-2 sm:grid-cols-2">
        <div>
          <Tag
            aria-label={`${label} (${t.common.english})`}
            placeholder={t.common.english}
            value={value.en}
            rows={multiline ? rows : undefined}
            onChange={(e) => onChange({ ...value, en: e.target.value })}
            className={fieldClass(errEn, multiline ? "h-auto py-3" : undefined)}
          />
          <FieldError message={errEn} />
        </div>
        <div>
          <Tag
            aria-label={`${label} (${t.common.bengali})`}
            placeholder={t.common.bengali}
            lang="bn"
            value={value.bn ?? ""}
            rows={multiline ? rows : undefined}
            onChange={(e) => onChange({ ...value, bn: e.target.value })}
            className={fieldClass(errBn, cn("bn", multiline ? "h-auto py-3" : undefined))}
          />
          <FieldError message={errBn} />
        </div>
      </div>
    </fieldset>
  );
}

function TextInput({
  label,
  hint,
  value,
  onChange,
  error,
  className,
  ...rest
}: {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-sm font-medium">
        {label}
        {hint ? <span className="ml-2 text-xs font-normal text-ink-faint">{hint}</span> : null}
      </span>
      <input value={value} onChange={(e) => onChange(e.target.value)} className={fieldClass(error)} aria-invalid={Boolean(error)} {...rest} />
      <FieldError message={error} />
    </label>
  );
}

function NumInput({
  label,
  value,
  onChange,
  error,
  className,
  step,
}: {
  label: string;
  value: number | undefined;
  onChange: (v: number | undefined) => void;
  error?: string;
  className?: string;
  step?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <input
        type="number"
        inputMode="decimal"
        step={step}
        value={value ?? ""}
        onChange={(e) => {
          const n = e.target.value === "" ? undefined : Number(e.target.value);
          onChange(n === undefined || Number.isNaN(n) ? undefined : n);
        }}
        className={fieldClass(error)}
      />
      <FieldError message={error} />
    </label>
  );
}

function SelectInput({
  label,
  value,
  options,
  onChange,
  noBlank,
}: {
  label: string;
  value: string;
  options: Opt[];
  onChange: (v: string) => void;
  noBlank?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className={fieldClass()}>
        {noBlank ? null : <option value="">—</option>}
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name}
          </option>
        ))}
      </select>
    </label>
  );
}

/** One line per item. Keeps blank lines while typing; drops them on save. */
function LinesInput({
  label,
  value,
  onChange,
  errors,
  path,
}: {
  label: string;
  value: string[];
  onChange: (v: string[]) => void;
  errors: Errors;
  path: string;
}) {
  const [text, setText] = useState(value.join("\n"));
  const error = errors[path] ?? Object.entries(errors).find(([k]) => k.startsWith(`${path}.`))?.[1];
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">
        {label} <span className="font-mono text-xs text-ink-faint">{value.length}</span>
      </span>
      <textarea
        rows={8}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          onChange(e.target.value.split("\n").map((l) => l.trim()).filter(Boolean));
        }}
        className={fieldClass(error, "h-auto py-3")}
      />
      <FieldError message={error} />
    </label>
  );
}

function YearPair<T extends { yearFrom?: number; yearTo?: number }>({
  row,
  update,
  path,
  errors,
}: {
  row: T;
  update: (patch: Partial<T>) => void;
  path: string;
  errors: Errors;
}) {
  const e = useDash().t.editor;
  return (
    <div className="grid grid-cols-2 gap-4 sm:w-80">
      <NumInput label={e.from} value={row.yearFrom} onChange={(v) => update({ yearFrom: v } as Partial<T>)} error={errors[`${path}.yearFrom`]} />
      <NumInput label={e.to} value={row.yearTo} onChange={(v) => update({ yearTo: v } as Partial<T>)} error={errors[`${path}.yearTo`]} />
    </div>
  );
}

function Repeater<T extends { id: string }>({
  items,
  onChange,
  make,
  render,
  addLabel,
}: {
  items: T[];
  onChange: (items: T[]) => void;
  // NoInfer: the row type comes from the list, not from the blank-row factory.
  make: () => NoInfer<T>;
  render: (row: T, update: (patch: Partial<T>) => void, index: number) => ReactNode;
  addLabel: string;
}) {
  const { t } = useDash();
  const move = (from: number, to: number) => {
    const next = [...items];
    const [row] = next.splice(from, 1);
    next.splice(to, 0, row);
    onChange(next);
  };
  return (
    <div className="space-y-4">
      {items.length === 0 ? <p className="text-sm text-ink-faint">{t.common.noneYet}</p> : null}
      {items.map((row, i) => (
        <div key={row.id} className="border border-line bg-bg/50 p-4">
          <div className="mb-4 flex items-center justify-between gap-2">
            <span className="font-mono text-xs text-ink-faint">#{String(i + 1).padStart(2, "0")}</span>
            <div className="flex gap-1">
              <RowButton label={t.common.moveUp} disabled={i === 0} onClick={() => move(i, i - 1)}>
                <ArrowUp />
              </RowButton>
              <RowButton label={t.common.moveDown} disabled={i === items.length - 1} onClick={() => move(i, i + 1)}>
                <ArrowDown />
              </RowButton>
              <RowButton label={t.common.remove} danger onClick={() => onChange(items.filter((_, j) => j !== i))}>
                <Trash2 />
              </RowButton>
            </div>
          </div>
          {render(row, (patch) => onChange(items.map((r, j) => (j === i ? { ...r, ...patch } : r))), i)}
        </div>
      ))}
      <Button type="button" variant="outline" size="sm" onClick={() => onChange([...items, make()])}>
        <Plus aria-hidden /> {addLabel}
      </Button>
    </div>
  );
}

function RowButton({
  label,
  onClick,
  disabled,
  danger,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  danger?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "grid size-8 place-items-center text-ink-mute transition-colors disabled:opacity-30 [&_svg]:size-4",
        danger ? "hover:bg-danger-soft hover:text-danger" : "hover:bg-accent-soft hover:text-accent",
      )}
    >
      {children}
    </button>
  );
}
