import { z } from "zod";
import { bdPhone, bilingual, timestamp } from "@/lib/schema/common";

/**
 * A request to be listed.
 *
 * The one moderation point in the whole system. Admin permission is required
 * for exactly one thing — bringing a doctor into existence — and everything a
 * doctor does afterwards publishes without review.
 *
 * That single gate is not bureaucracy. This is a public medical directory, so
 * an unmoderated signup would let anyone publish a page asserting medical
 * credentials under a real-looking BMDC number, which is precisely the harm
 * the site exists to prevent. Gating entry once costs the administrator a
 * click per doctor and closes it.
 *
 * An application is NOT a doctor record: nothing is published, no `link_no` is
 * reserved, and the applicant cannot sign in. Approval is what promotes it.
 */
export const applicationStatus = z.enum(["pending", "approved", "rejected"]);

/** What the public form collects. Everything else is filled in later. */
export const applicationInputSchema = z.object({
  name: bilingual(120),
  email: z.email().max(160),
  phone: bdPhone,
  speciality: bilingual(120),
  /**
   * BMDC registration. Required here even though it is optional on a record,
   * because it is the one field that makes the claim checkable, and checking
   * it is the whole job of the person approving.
   */
  bmdcNo: z.string().trim().min(3).max(40),
  designation: bilingual(180),
  workplace: bilingual(200),
  chamberAddress: bilingual(300).optional(),
  note: z.string().trim().max(1000).optional(),
  /**
   * The applicant chooses their own password, so approval is one click rather
   * than a click plus reading a generated password down a phone line. It is
   * hashed before the application is stored — an application row is not a
   * place to keep a plaintext password while it waits for a human.
   */
  password: z
    .string()
    .min(10, "At least 10 characters.")
    .max(200),
});

export const applicationRecordSchema = applicationInputSchema
  .omit({ password: true })
  .extend({
    id: z.string().min(1),
    passwordHash: z.string().min(1),
    status: applicationStatus.default("pending"),
    submittedAt: timestamp,
    decidedAt: timestamp.optional(),
    decidedBy: z.string().max(160).optional(),
    /** Why it was rejected. Shown to nobody automatically; for the audit. */
    decisionNote: z.string().max(600).optional(),
    /** Set once approved, so the row links to what it became. */
    doctorId: z.string().max(64).optional(),
    /** Recorded for abuse triage, alongside the per-IP rate limit. */
    submittedFrom: z.string().max(64).optional(),
  });

export type ApplicationStatus = z.infer<typeof applicationStatus>;
export type ApplicationInput = z.infer<typeof applicationInputSchema>;
export type ApplicationRecord = z.infer<typeof applicationRecordSchema>;
