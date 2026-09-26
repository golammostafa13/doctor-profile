"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  adminPassword,
  isAdminEmail,
  isEmailShaped,
  normaliseEmail,
  sessionCookieName,
  sessionCookieOptions,
} from "@/lib/auth/config";
import { signSession } from "@/lib/auth/session";
import {
  DUMMY_HASH,
  needsRehash,
  hashPassword,
  verifyPassword,
} from "@/lib/auth/password";
import {
  checkAccountAttempt,
  checkAddressAttempt,
  clientAddress,
} from "@/lib/auth/rate-limit";
import { getRecordByEmail, putRecordOnly, canPersist } from "@/lib/data/doctors";
import { getDictionary } from "@/lib/i18n";
import { hasLocale, type Locale } from "@/lib/i18n/config";

export interface DoorState {
  ok: boolean;
  message?: string;
  /** Echoed so a rejected form does not make someone retype their address. */
  email?: string;
}

function localeOf(formData: FormData): Locale {
  const raw = String(formData.get("lang") ?? "en");
  return hasLocale(raw) ? raw : "en";
}

/**
 * Constant-time compare for the administrator password.
 *
 * `===` on a string exits at the first differing character. Against a value an
 * attacker can submit repeatedly, that leaks the length of the shared prefix.
 */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/**
 * Whether sign-in against the committed demo fixtures is allowed.
 *
 * The fixtures carry real hashes of a password printed in the README, which is
 * exactly what makes the demo work with no accounts anywhere — and exactly
 * what must not quietly become a way into a real deployment. So in production
 * it takes an explicit opt-in.
 */
function demoLoginAllowed(): boolean {
  if (process.env.NODE_ENV !== "production") return true;
  return process.env.DEMO_MODE === "1";
}

/**
 * The door.
 *
 * One message for every failure, and one code path out. Distinguishing "no
 * such account" from "wrong password" would turn a public list of names into a
 * list of which names can sign in — and the roster here is the product, so
 * that distinction is more dangerous than usual.
 *
 * Rate limits are counted BEFORE either field is inspected, and on success as
 * well as failure. A limiter that only counts failures lets someone who
 * already holds one valid credential hammer the other for free.
 */
export async function signInAction(
  _prev: DoorState,
  formData: FormData,
): Promise<DoorState> {
  const lang = localeOf(formData);
  const dict = getDictionary(lang);
  const email = normaliseEmail(String(formData.get("email") ?? ""));
  const password = String(formData.get("password") ?? "");

  const head = await headers();
  const address = clientAddress(head);

  const [byAddress, byAccount] = await Promise.all([
    checkAddressAttempt(address),
    checkAccountAttempt(email),
  ]);
  const limited = !byAddress.ok ? byAddress : !byAccount.ok ? byAccount : null;
  if (limited) {
    return {
      ok: false,
      email,
      message: dict.auth.rateLimited(String(limited.retryAfterSeconds)),
    };
  }

  if (!isEmailShaped(email) || !password) {
    return { ok: false, email, message: dict.auth.failed };
  }

  // --- Administrator ------------------------------------------------------
  // Both halves are required: the address must be on the list AND the password
  // must match. An empty adminPassword short-circuits the whole branch, so an
  // unconfigured deployment has no administrator rather than an open one.
  if (adminPassword && isAdminEmail(email) && safeEqual(password, adminPassword)) {
    const token = await signSession({
      role: "admin",
      sub: "admin",
      email,
      name: "Administrator",
      pv: 0,
    });
    (await cookies()).set(sessionCookieName, token, sessionCookieOptions);
    redirect(`/${lang}/admin`);
  }

  // --- Doctor -------------------------------------------------------------
  // Falls through from the branch above on purpose: an address on the
  // administrator list may also belong to a doctor.
  const record = await getRecordByEmail(email);

  // Verify against a dummy hash when there is no such doctor, so the unknown
  // account path costs the same ~30ms as a wrong password. Without this,
  // response time answers "does this address have an account here?" for free.
  if (!record) {
    await verifyPassword(password, DUMMY_HASH);
    return { ok: false, email, message: dict.auth.failed };
  }

  const matched = await verifyPassword(password, record.passwordHash);
  // Hidden doctors can still sign in — that is how a new profile gets filled
  // in before it is listed. Only a suspension shuts the door.
  if (!matched || record.status === "suspended") {
    return { ok: false, email, message: dict.auth.failed };
  }

  const persists = await canPersist();
  if (!persists && !demoLoginAllowed()) {
    return { ok: false, email, message: dict.auth.notConfigured };
  }

  // Raising the iteration count later upgrades everyone as they return,
  // instead of needing a mass reset. Only possible here, with the plaintext in
  // hand, and only when there is somewhere to write it.
  if (persists) {
    await putRecordOnly({
      ...record,
      ...(needsRehash(record.passwordHash)
        ? { passwordHash: await hashPassword(password), passwordSetAt: Date.now() }
        : {}),
      lastLoginAt: Date.now(),
    });
  }

  const token = await signSession({
    role: "doctor",
    sub: record.id,
    email: record.email,
    name: record.name.en,
    linkNo: record.linkNo,
    pv: record.passwordVersion,
  });
  (await cookies()).set(sessionCookieName, token, sessionCookieOptions);
  redirect(`/${lang}/doctor`);
}

export async function signOutAction(formData: FormData): Promise<void> {
  const lang = localeOf(formData);
  (await cookies()).delete(sessionCookieName);
  redirect(`/${lang}`);
}
