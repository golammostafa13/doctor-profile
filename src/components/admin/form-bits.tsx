"use client";

import { useRef, useState, useTransition, type ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { ImageUp, Loader2, Trash2 } from "lucide-react";
import { uploadImageAction } from "@/lib/actions/admin-doctors";
import type { ActionResult } from "@/lib/admin/action";
import type { ImagePreset } from "@/lib/media";
import type { MediaRef } from "@/lib/schema/common";
import { Button } from "@/components/ui/button";
import { FieldError, fieldClass } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import { useDash } from "@/components/dash/dash-strings";

/** A submit button that knows its form is in flight. */
export function Submit({
  children,
  variant,
  size,
  className,
  name,
  value,
}: {
  children: ReactNode;
  variant?: "primary" | "outline" | "soft" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
  name?: string;
  value?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant={variant} size={size} disabled={pending} className={className} name={name} value={value}>
      {pending ? <Loader2 className="animate-spin" aria-hidden /> : null}
      {children}
    </Button>
  );
}

/** The result line under a form: saved, or what went wrong. */
export function FormMessage({ state }: { state: ActionResult<unknown> }) {
  if (!state.message) return null;
  return (
    <p
      role={state.ok ? "status" : "alert"}
      className={cn("text-sm", state.ok ? "text-accent" : "text-danger")}
    >
      {state.message}
    </p>
  );
}

/** One labelled input with its error beneath. */
export function Field({
  label,
  name,
  error,
  hint,
  className,
  inputClassName,
  ...input
}: {
  label: string;
  name: string;
  error?: string;
  hint?: ReactNode;
  className?: string;
  inputClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block">
        <span className="text-sm font-medium">{label}</span>
        {hint ? <span className="ml-2 text-xs text-ink-faint">{hint}</span> : null}
      </label>
      <input id={name} name={name} className={fieldClass(error, inputClassName)} aria-invalid={Boolean(error)} {...input} />
      <FieldError message={error} />
    </div>
  );
}

/**
 * English and Bengali side by side, posted as `<name>En` / `<name>Bn`.
 * English carries the requirement; Bengali is always optional.
 */
export function BiField({
  label,
  name,
  defaultValue,
  errors,
  required,
  multiline,
  rows = 4,
}: {
  label: string;
  name: string;
  defaultValue?: { en?: string; bn?: string } | null;
  errors?: Record<string, string>;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}) {
  const { t } = useDash();
  const errEn = errors?.[`${name}En`] ?? errors?.[`${name}.en`];
  const errBn = errors?.[`${name}Bn`] ?? errors?.[`${name}.bn`];
  const Tag = multiline ? "textarea" : "input";
  return (
    <fieldset>
      <legend className="mb-1.5 text-sm font-medium">
        {label}
        {required ? <span className="text-hot"> *</span> : null}
      </legend>
      <div className="grid gap-2 sm:grid-cols-2">
        <div>
          <Tag
            name={`${name}En`}
            aria-label={`${label} (${t.common.english})`}
            placeholder={t.common.english}
            defaultValue={defaultValue?.en ?? ""}
            required={required}
            rows={multiline ? rows : undefined}
            className={fieldClass(errEn, multiline ? "h-auto py-3" : undefined)}
          />
          <FieldError message={errEn} />
        </div>
        <div>
          <Tag
            name={`${name}Bn`}
            aria-label={`${label} (${t.common.bengali})`}
            placeholder={t.common.bengali}
            lang="bn"
            defaultValue={defaultValue?.bn ?? ""}
            rows={multiline ? rows : undefined}
            className={fieldClass(errBn, cn("bn", multiline ? "h-auto py-3" : undefined))}
          />
          <FieldError message={errBn} />
        </div>
      </div>
    </fieldset>
  );
}

/**
 * Upload an image, preview it, and post its reference.
 *
 * The file goes up the moment it is picked (see `uploadImageAction`), so the
 * preview is the stored, re-encoded image rather than the local file — what
 * you see is what the page will show. Controlled when `onChange` is passed;
 * otherwise it posts the reference as JSON in a hidden `name` input.
 */
export function ImageField({
  label,
  name,
  preset,
  value: controlled,
  defaultValue = null,
  onChange,
  error,
  hint,
  aspect = "aspect-square",
}: {
  label: string;
  name?: string;
  preset: ImagePreset;
  value?: MediaRef | null;
  defaultValue?: MediaRef | null;
  onChange?: (value: MediaRef | null) => void;
  error?: string;
  hint?: ReactNode;
  aspect?: string;
}) {
  const { t } = useDash();
  const [own, setOwn] = useState<MediaRef | null>(defaultValue);
  const value = controlled !== undefined ? controlled : own;
  const [message, setMessage] = useState<string>();
  const [pending, start] = useTransition();
  const input = useRef<HTMLInputElement>(null);

  const set = (next: MediaRef | null) => {
    setOwn(next);
    onChange?.(next);
  };

  const upload = (file: File) => {
    setMessage(undefined);
    const form = new FormData();
    form.set("file", file);
    form.set("preset", preset);
    start(async () => {
      const result = await uploadImageAction(form);
      if (result.ok && result.data) set(result.data);
      else setMessage(result.message ?? t.errors.uploadFailed);
      if (input.current) input.current.value = "";
    });
  };

  return (
    <div>
      <p className="mb-1.5 text-sm font-medium">
        {label}
        {hint ? <span className="ml-2 text-xs font-normal text-ink-faint">{hint}</span> : null}
      </p>
      <div className="flex flex-wrap items-start gap-4">
        <div
          className={cn(
            "relative grid w-40 place-items-center overflow-hidden border border-line bg-bg",
            aspect,
          )}
        >
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value.url} alt="" className="h-full w-full object-cover" />
          ) : (
            <ImageUp className="size-8 text-ink-faint" aria-hidden />
          )}
          {pending ? (
            <div className="absolute inset-0 grid place-items-center bg-bg/70">
              <Loader2 className="size-6 animate-spin text-accent" aria-hidden />
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-2">
          <input
            ref={input}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            className="sr-only"
            id={`${name ?? label}-file`}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) upload(file);
            }}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={pending}
            onClick={() => input.current?.click()}
          >
            <ImageUp aria-hidden />
            {value ? t.common.replace : t.common.upload}
          </Button>
          {value ? (
            <Button type="button" variant="ghost" size="sm" disabled={pending} onClick={() => set(null)}>
              <Trash2 aria-hidden />
              {t.common.remove}
            </Button>
          ) : null}
          {value ? (
            <p className="font-mono text-[0.65rem] text-ink-faint">
              {value.width}×{value.height} · {Math.round(value.bytes / 1024)}KB
            </p>
          ) : null}
        </div>
      </div>
      {name ? <input type="hidden" name={name} value={value ? JSON.stringify(value) : ""} /> : null}
      <FieldError message={message ?? error} />
    </div>
  );
}
