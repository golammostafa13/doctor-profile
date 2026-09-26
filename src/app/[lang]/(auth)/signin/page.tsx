import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SignInForm } from "@/components/auth/signin-form";
import { getDictionary } from "@/lib/i18n";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { textClass } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

/** Reads a cookie, so it can never be static. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function SignInPage(props: PageProps<"/[lang]/signin">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const bn = textClass(locale);

  return (
    <div className="hud-card hud-edge p-7 shadow-e2">
      <p className={cn("hud-label", bn)}>{dict.auth.signInLead}</p>
      <h1 className={cn("mt-3 font-display text-2xl font-bold uppercase", bn)}>
        {dict.auth.signInTitle}
      </h1>

      <div className="mt-6">
        <SignInForm
          lang={locale}
          strings={{
            email: dict.auth.email,
            password: dict.auth.password,
            show: dict.auth.showPassword,
            hide: dict.auth.hidePassword,
            submit: dict.auth.submit,
            forgot: dict.auth.forgot,
          }}
        />
      </div>
    </div>
  );
}
