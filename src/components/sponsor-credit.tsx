import Image from "next/image";
import { site } from "@/lib/site";
import { getSettings } from "@/lib/data/settings";
import type { Locale } from "@/lib/i18n/config";
import { pick, textClass } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

/**
 * The sponsor's mark, under "Courtesy by".
 *
 * Deliberately separate from the advertisement, because it answers a different
 * question. The advertisement says *here is a product*; this says *here is who
 * paid for the directory you are reading*, which belongs in the quiet
 * furniture of the site — the footer, the foot of the sign-in card, the about
 * page. It should never animate, never ask for attention, and never compete
 * with a heading.
 *
 * The mark is a self-hosted PNG, and it has to be: the CSP ships
 * `img-src 'self' data: blob:`, so a hotlink to the company's own site would
 * simply not render.
 *
 * The words and the mark come from the admin Settings screen, falling back to
 * `site.ts`; turning the credit off there removes it everywhere.
 */
export async function SponsorCredit({
  lang,
  align = "start",
  className,
}: {
  lang: Locale;
  align?: "start" | "center";
  className?: string;
}) {
  const { sponsor } = await getSettings();
  if (!sponsor.enabled) return null;
  const bn = textClass(lang);
  const company = pick(sponsor.company, lang);

  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <p
        className={cn(
          "font-mono text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-ink-faint",
          bn,
        )}
      >
        {pick(sponsor.courtesyLabel, lang)}
      </p>
      {sponsor.logo ? (
        // An uploaded mark, already re-encoded and sized by the upload.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={sponsor.logo.url}
          alt={company}
          width={sponsor.logo.width}
          height={sponsor.logo.height}
          className="h-10 w-auto"
        />
      ) : (
      <Image
        src={site.sponsor.logo}
        // The company name, not "logo": someone hearing this page read out
        // needs to know who sponsored it, not that a picture exists.
        alt={company}
        width={229}
        height={56}
        className="h-10 w-auto dark:brightness-0 dark:invert"
      />
      )}
    </div>
  );
}
