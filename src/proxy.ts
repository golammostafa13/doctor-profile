import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { hasLocale } from "@/lib/i18n/config";
import { preferredLocale } from "@/lib/i18n/negotiate";
import { isAdminEmail, sessionCookieName } from "@/lib/auth/config";
import { readSessionToken } from "@/lib/auth/session";

/**
 * Two jobs: the language prefix, and an optimistic guard on the dashboards.
 *
 * **Language.** Every route lives under `/[lang]`, so `/doctors` has to become
 * `/en/doctors` or `/bn/doctors`. Decided from the browser's own
 * `Accept-Language`, because a Bengali reader typing the bare domain should
 * land in Bengali. It runs once, on the way in; after that the language is in
 * the URL and every link carries it.
 *
 * **What is NOT here** is the biggest structural difference from the sibling
 * projects this borrows from: they put their entire catalogue behind a
 * password, with sign-in as almost the only open route. This is a public
 * directory — the point is that a patient finds a cardiologist without an
 * account — so everything passes through except the two dashboards.
 *
 * **The guard is optimistic**, in the sense the Next.js documentation means:
 * it keeps people out of screens they cannot use, and it costs nothing because
 * the session is a signed cookie that verifies here with no data round trip.
 * It is NOT the authorisation boundary. Every Server Action calls
 * `requireAdmin()` or `requireDoctor()` itself, because a POST never passes
 * through a page — and the matcher below cannot see `/api` at all.
 *
 * Note that the doctor branch deliberately does not check whether the record
 * still exists, is active, or has had its password reset. Those need a read,
 * which would put a round trip on every dashboard navigation; `requireDoctor()`
 * does all three where it matters.
 */

const DOCTOR_ROUTE = "doctor";
const ADMIN_ROUTE = "admin";

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);

  // --- 1. Language prefix -------------------------------------------------
  if (!hasLocale(segments[0])) {
    const target = request.nextUrl.clone();
    const chosen = preferredLocale(request.headers.get("accept-language"));
    target.pathname = pathname === "/" ? `/${chosen}` : `/${chosen}${pathname}`;
    return NextResponse.redirect(target);
  }

  const lang = segments[0];
  const route = segments[1] ?? "";

  // Everything public passes straight through, with no cookie read at all.
  if (route !== DOCTOR_ROUTE && route !== ADMIN_ROUTE) {
    return NextResponse.next();
  }

  // --- 2. The dashboards --------------------------------------------------
  const session = await readSessionToken(
    request.cookies.get(sessionCookieName)?.value,
  );

  const target = request.nextUrl.clone();
  target.search = "";

  if (!session) {
    target.pathname = `/${lang}/signin`;
    target.searchParams.set("next", pathname + search);
    return NextResponse.redirect(target);
  }

  if (route === ADMIN_ROUTE) {
    // Both halves, and the second is read from the environment here rather
    // than taken from the cookie — so removing an address from ADMIN_EMAILS
    // takes effect on the very next request.
    if (session.role === "admin" && isAdminEmail(session.email)) {
      return NextResponse.next();
    }
    target.pathname = `/${lang}/doctors`;
    return NextResponse.redirect(target);
  }

  if (session.role !== "doctor") {
    target.pathname = `/${lang}/${ADMIN_ROUTE}`;
    return NextResponse.redirect(target);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/|api/|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.[\\w]+$).*)",
  ],
};
