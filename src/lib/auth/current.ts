import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  isAdminEmail,
  sessionCookieName,
} from "@/lib/auth/config";
import { readSessionToken, type Session } from "@/lib/auth/session";
import { getRecord } from "@/lib/data/doctors";
import type { DoctorRecord } from "@/lib/schema/doctor";

/**
 * The authorisation boundary.
 *
 * `proxy.ts` also guards /admin and /doctor, but that guard is optimistic — it
 * is a redirect so nobody stares at a 403, and it only sees page navigations.
 * A Server Action is a POST endpoint reachable without ever loading a page, so
 * the functions in this file are the check that actually matters, and every
 * action calls one of them on its first line.
 */

export async function getSession(): Promise<Session | null> {
  const store = await cookies();
  return readSessionToken(store.get(sessionCookieName)?.value);
}

/**
 * An administrator, or null.
 *
 * Two independent conditions, and only one of them is in the cookie:
 * the session says the administrator password was typed, AND the address is on
 * `ADMIN_EMAILS` *right now*. The environment is re-read on every call, so
 * removing an address revokes access on the next request rather than whenever
 * an eight-hour cookie happens to expire.
 */
export async function getAdmin(): Promise<Session | null> {
  const session = await getSession();
  if (!session || session.role !== "admin") return null;
  if (!isAdminEmail(session.email)) return null;
  return session;
}

export async function requireAdmin(): Promise<Session> {
  const admin = await getAdmin();
  if (!admin) redirect("/en/signin");
  return admin;
}

/**
 * A signed-in doctor, with their current record.
 *
 * Heavier than the admin check because a doctor's credential lives in the
 * store rather than the environment, so three things are re-verified against
 * it on every dashboard render and every mutation:
 *
 *   • the record still exists — a deleted doctor's cookie is still validly
 *     signed, and would otherwise keep working until it expired;
 *   • not `suspended` — so an administrator can suspend someone
 *     mid-session rather than mid-next-week;
 *   • `passwordVersion` matches the `pv` in the session — which is what makes
 *     a password reset kill every session that doctor has open, everywhere.
 *
 * Costs one read. Only ever on dashboard pages and doctor actions, never on a
 * public page.
 */
export async function getDoctor(): Promise<{
  session: Session;
  record: DoctorRecord;
} | null> {
  const session = await getSession();
  if (!session || session.role !== "doctor") return null;

  const record = await getRecord(session.sub);
  if (!record) return null;
  // Suspension ends the session at once; a hidden (unlisted) doctor may
  // still sign in and finish their profile before it is published.
  if (record.status === "suspended") return null;
  if (record.passwordVersion !== session.pv) return null;

  return { session, record };
}

export async function requireDoctor(): Promise<{
  session: Session;
  record: DoctorRecord;
}> {
  const doctor = await getDoctor();
  if (!doctor) redirect("/en/signin");
  return doctor;
}
