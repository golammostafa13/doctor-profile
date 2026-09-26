"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Dash } from "@/lib/i18n/dash";
import type { Locale } from "@/lib/i18n/config";

/**
 * The dashboard's strings and language, provided once by the admin and doctor
 * layouts so every form and table below can read them without prop-drilling.
 */
const Ctx = createContext<{ t: Dash; lang: Locale } | null>(null);

export function DashStrings({ t, lang, children }: { t: Dash; lang: Locale; children: ReactNode }) {
  return <Ctx.Provider value={{ t, lang }}>{children}</Ctx.Provider>;
}

export function useDash(): { t: Dash; lang: Locale } {
  const value = useContext(Ctx);
  if (!value) throw new Error("useDash() outside <DashStrings>");
  return value;
}
