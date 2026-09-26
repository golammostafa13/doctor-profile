import { z } from "zod";
import { linkNoSchema } from "@/lib/schema/common";

/**
 * What the session cookie carries.
 *
 * Deliberately tiny — around 200 bytes signed — because it travels on every
 * request and is verified in the proxy, where there is no data round trip to
 * hide a large payload behind.
 *
 * Nothing in it is trusted on its own:
 *
 *   • `role` is a fact about the past ("the admin password was typed"). It is
 *     carried because the server cannot re-derive it. It grants nothing by
 *     itself — `getAdmin()` also requires the address to be on ADMIN_EMAILS
 *     *now*, read from the environment on every request. That is why removing
 *     an address takes effect immediately rather than whenever an eight-hour
 *     cookie happens to expire. A claim stamped into a token outlives the
 *     decision that granted it; this one does not.
 *
 *   • `pv` is the doctor's password version. `requireDoctor()` compares it
 *     with the stored record, so an admin resetting a password invalidates
 *     every session that doctor has open, everywhere, on its next request.
 */
export const sessionSchema = z.object({
  v: z.literal(1),
  role: z.enum(["admin", "doctor"]),
  /** "admin" for the environment-configured administrator, else a doctor id. */
  sub: z.string().min(1).max(64),
  email: z.string().min(3).max(160),
  name: z.string().min(1).max(120),
  /** Doctors only: lets the header link to the public profile with no lookup. */
  linkNo: linkNoSchema.optional(),
  /** Doctors only. Always 0 for the administrator, who has no stored record. */
  pv: z.number().int().nonnegative(),
  /** Seconds since the epoch. */
  exp: z.number().int(),
});

export type Session = z.infer<typeof sessionSchema>;
export type Role = Session["role"];
