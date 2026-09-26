import { NextResponse } from "next/server";
import { getProfileByLinkNo } from "@/lib/data/doctors";
import { buildVCard } from "@/lib/vcard";
import { hasLocale } from "@/lib/i18n/config";

/**
 * "Save Contact" — the doctor as a .vcf file.
 *
 * A route handler rather than a data URL built in the browser, so the button
 * is an ordinary link: it works with right-click-save, it works on a phone
 * where a data: download is awkward, and it needs no JavaScript at all.
 *
 * Cached hard at the CDN. A doctor's contact details change about never, and
 * this is the one endpoint someone might hit repeatedly while trying to get a
 * file onto a phone.
 */
export async function GET(
  request: Request,
  ctx: RouteContext<"/api/vcard/[linkNo]">,
) {
  const { linkNo } = await ctx.params;
  const profile = await getProfileByLinkNo(linkNo);
  if (!profile || profile.status !== "active") {
    return new NextResponse("Not found", { status: 404 });
  }

  const requested = new URL(request.url).searchParams.get("lang");
  const lang = hasLocale(requested ?? undefined) ? requested! : "en";

  const card = buildVCard(profile, lang as "en" | "bn");
  const filename = `${profile.slug || profile.linkNo}.vcf`;

  return new NextResponse(card, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
