"use client";

import { useActionState, useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { signInAction, type DoorState } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";
import { fieldClass } from "@/components/ui/field";
import type { Locale } from "@/lib/i18n/config";
import { textClass } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

export function SignInForm({
  lang,
  strings,
}: {
  lang: Locale;
  strings: {
    email: string;
    password: string;
    show: string;
    hide: string;
    submit: string;
    forgot: string;
  };
}) {
  const [state, action, pending] = useActionState<DoorState, FormData>(
    signInAction,
    { ok: false },
  );
  const [visible, setVisible] = useState(false);
  const bn = textClass(lang);

  return (
    <form action={action} className="space-y-4">
      <input type="hidden" name="lang" value={lang} />

      <div>
        <label htmlFor="email" className={cn("mb-1.5 block text-sm font-medium", bn)}>
          {strings.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={state.email}
          className={fieldClass(state.message)}
        />
      </div>

      <div>
        <label htmlFor="password" className={cn("mb-1.5 block text-sm font-medium", bn)}>
          {strings.password}
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={visible ? "text" : "password"}
            required
            autoComplete="current-password"
            className={fieldClass(state.message, "pr-12")}
          />
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? strings.hide : strings.show}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-ink-faint transition-colors hover:text-accent"
          >
            {visible ? <EyeOff className="size-[18px]" /> : <Eye className="size-[18px]" />}
          </button>
        </div>
      </div>

      {/*
        One message for every failure — wrong password, unknown address,
        suspended account, rate limited. role="alert" so a screen reader is
        told, since the only other signal is a border colour.
      */}
      {state.message ? (
        <p role="alert" className={cn("text-sm text-danger", bn)}>
          {state.message}
        </p>
      ) : null}

      <Button type="submit" disabled={pending} className={cn("w-full", bn)}>
        {pending ? <Loader2 className="size-4 animate-spin" /> : null}
        {strings.submit}
      </Button>

      <p className={cn("pt-2 text-center text-xs leading-relaxed text-ink-faint", bn)}>
        {strings.forgot}
      </p>
    </form>
  );
}
