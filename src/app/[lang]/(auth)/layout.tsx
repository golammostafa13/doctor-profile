import Link from "next/link";
import { notFound } from "next/navigation";
import { Brand } from "@/components/brand";
import { SponsorCredit } from "@/components/sponsor-credit";
import { hasLocale, localePath, type Locale } from "@/lib/i18n/config";

/** A single centred column. No header, nothing to click away to. */
export default async function AuthLayout(props: LayoutProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-4 py-12">
      <Link href={localePath(locale)} className="mb-8">
        <Brand lang={locale} size="lg" />
      </Link>
      <div className="w-full max-w-md">{props.children}</div>
      <SponsorCredit lang={locale} align="center" className="mt-12" />
    </div>
  );
}
