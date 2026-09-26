import type { Role } from "@/lib/schema/session";

/**
 * Who may sign in, and with what.
 *
 * Structurally the sibling projects' file with **every default removed**, and
 * that removal is the point. One of them ships
 * `export const ADMIN_PASSWORD = "Cef-33"` in committed source and uses it as
 * an env-overridable default; another defaults to `"LansoD"` / `"LansoDD"`.
 * A password with a default in the repository is a password the repository
 * hands out.
 *
 * Here an unset value disables the thing it configures. Blank `ADMIN_EMAILS`
 * means nobody administers this site; blank `ADMIN_PASSWORD` means nobody
 * signs in as administrator at all. Failing closed is the only safe direction
 * for a variable someone forgot to set.
 */

export type { Role };

/**
 * Split an address list typed into a hosting dashboard.
 *
 * Commas are the documented separator, but semicolons, newlines and bare
 * spaces all turn up in practice, and quotes come along when the value was
 * pasted out of a JSON file. Accepting all of them costs one regex and avoids
 * an unset-looking variable that is actually one stray quote.
 */
function parseEmailList(raw: string): string[] {
  return raw
    .split(/[,;\s]+/)
    .map((entry) => entry.trim().replace(/^["']|["']$/g, "").toLowerCase())
    .filter(Boolean);
}

/**
 * The addresses that administer this directory.
 *
 * Read once at module load — this is deployment configuration — but consulted
 * on *every* admin page and every admin Server Action rather than stamped into
 * the session cookie. That is what makes removing an address take effect on
 * the next request instead of whenever an eight-hour cookie expires.
 *
 * `ADMIN_EMAIL` (singular) is still read: it is the older name for the same
 * setting in the sibling projects, and someone copying an env file across will
 * bring it.
 */
export const adminEmails: readonly string[] = parseEmailList(
  process.env.ADMIN_EMAILS ?? process.env.ADMIN_EMAIL ?? "",
);

/** No fallback. `""` disables administrator sign-in entirely. */
export const adminPassword = process.env.ADMIN_PASSWORD ?? "";

/**
 * Session signing key.
 *
 * No fallback in production: `secret()` in `session.ts` returns "" when this is
 * unset there, and an empty key makes signing throw and verification return
 * null, so nobody gets in. Development falls back to a fixed insecure string so
 * a fresh clone opens locally.
 */
export const authSecret = process.env.AUTH_SECRET ?? "";

export const sessionCookieName = "dp_session";
export const sessionTtlSeconds = 8 * 60 * 60;

export const sessionCookieOptions = {
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: sessionTtlSeconds,
} as const;

export function normaliseEmail(value: string): string {
  return value.trim().toLowerCase();
}

/**
 * Whether this address is on the administrator list right now.
 *
 * An empty list matches nothing — deliberately. The dangerous shape here is
 * `adminEmails.includes(normaliseEmail(email))` against a list that parsed to
 * `[""]`, which a blank address would then match; `parseEmailList` filters
 * empties for exactly that reason.
 */
export function isAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  const normalised = normaliseEmail(email);
  if (!normalised) return false;
  return adminEmails.includes(normalised);
}

/**
 * A cheap shape test, so "that is not an email address" is not reported as a
 * failed password. Not validation — `zod` does that — just enough to route the
 * error message.
 */
export function isEmailShaped(value: string): boolean {
  return /^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(value.trim());
}

/**
 * What is missing for sign-in to work here.
 *
 * Called at boot from `instrumentation.ts` and shown on the admin dashboard.
 * Returns descriptions, never values. The failure this prevents is the quiet
 * one: a production deploy where nobody can sign in and nothing says why,
 * because every guard correctly refused and none of them is allowed to explain
 * itself to an anonymous visitor.
 */
export function auditAuthConfig(): string[] {
  const problems: string[] = [];
  const isProduction = process.env.NODE_ENV === "production";

  if (!authSecret && isProduction) {
    problems.push(
      "AUTH_SECRET is unset. Sign-in is disabled: sessions cannot be signed.",
    );
  }
  if (adminEmails.length === 0) {
    problems.push("ADMIN_EMAILS is empty. Nobody can administer this site.");
  }
  if (!adminPassword) {
    problems.push("ADMIN_PASSWORD is unset. Administrator sign-in is disabled.");
  }
  return problems;
}
