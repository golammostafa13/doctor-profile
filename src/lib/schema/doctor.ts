import { z } from "zod";
import {
  bdPhone,
  bilingual,
  bilingualOptional,
  httpsUrl,
  linkNoSchema,
  mediaRefSchema,
  slugSchema,
  timestamp,
} from "@/lib/schema/common";

/**
 * The doctor record.
 *
 * Modelled on the live reference directory's payload, but with its two worst
 * habits fixed. That site stores every nested field as a JSON string *inside*
 * a JSON field, so the client double-parses everything; and its ids do not
 * agree with themselves — speciality `3` is "Cardiologist" in the search
 * response and "Dermatologist" on the profile whose every other field
 * describes a cardiologist. Here the nesting is real, validated structure, and
 * a speciality is a reference into one taxonomy rather than a name copied into
 * each record.
 */

/** `order` appears on every repeatable row: doctors reorder their own lists. */
const ordered = { order: z.number().int().min(0).max(49).default(0) };

/**
 * A chamber: where and when this doctor actually sees patients.
 *
 * The most load-bearing section on the page — it is what a patient came for —
 * and the only one with a phone number attached to it.
 */
export const chamberSchema = z.object({
  id: z.string().min(1),
  hospital: bilingual(160),
  address: bilingual(300),
  /** Taxonomy ids, so the directory filters without matching strings. */
  hospitalId: z.string().max(64).optional(),
  locationId: z.string().max(64).optional(),
  /** Free text: real schedules are "Sat–Thu, except Friday", not a grid. */
  visitingHours: bilingual(200),
  appointmentPhone: bdPhone.optional(),
  /**
   * Coordinates, not an embed. A Google Maps iframe would need `frame-src
   * https://www.google.com` in the CSP and ~800KB of third-party script on the
   * page whose selling point is how it moves; a marker plus a link out opens
   * the native maps app on a phone, which is what a patient wants anyway.
   */
  geo: z
    .object({
      lat: z.number().min(-90).max(90),
      lng: z.number().min(-180).max(180),
    })
    .optional(),
  ...ordered,
});

export const educationSchema = z.object({
  id: z.string().min(1),
  degree: bilingual(120),
  institution: bilingual(200),
  yearFrom: z.number().int().min(1940).max(2100).optional(),
  yearTo: z.number().int().min(1940).max(2100).optional(),
  ...ordered,
});

export const experienceSchema = z.object({
  id: z.string().min(1),
  role: bilingual(160),
  organisation: bilingual(200),
  location: bilingual(120).optional(),
  yearFrom: z.number().int().min(1940).max(2100).optional(),
  yearTo: z.number().int().min(1940).max(2100).optional(),
  current: z.boolean().default(false),
  ...ordered,
});

export const awardSchema = z.object({
  id: z.string().min(1),
  title: bilingual(200),
  issuer: bilingual(160).optional(),
  year: z.number().int().min(1900).max(2100).optional(),
  ...ordered,
});

export const fellowshipSchema = z.object({
  id: z.string().min(1),
  subject: bilingual(200),
  country: bilingual(80).optional(),
  /** "6 months", "1 year" — a duration as written, not a computed span. */
  duration: bilingual(60).optional(),
  year: z.number().int().min(1940).max(2100).optional(),
  ...ordered,
});

/**
 * Publications, interviews and seminars.
 *
 * One shape for all three — the reference site serves them from one endpoint
 * with only `from=` differing, and they genuinely are the same record. Each
 * carries a thumbnail and a downloadable file, so these are real documents
 * rather than a list of titles.
 */
export const paperKind = z.enum(["publication", "interview", "seminar"]);

export const paperSchema = z.object({
  id: z.string().min(1),
  kind: paperKind,
  title: bilingual(300),
  summary: bilingualOptional(1200),
  /** ISO date, so it sorts as a string and formats per locale. */
  date: z.iso.date().optional(),
  image: mediaRefSchema.nullable().default(null),
  /** Served by the file route, not linked off-site. */
  file: z.string().max(200).optional(),
  sourceUrl: httpsUrl.optional(),
  ...ordered,
});

export const socialSchema = z.object({
  facebook: httpsUrl.optional(),
  instagram: httpsUrl.optional(),
  linkedin: httpsUrl.optional(),
  twitter: httpsUrl.optional(),
  youtube: httpsUrl.optional(),
  website: httpsUrl.optional(),
});

export const doctorStatus = z.enum(["active", "hidden", "suspended"]);
export type DoctorStatus = z.infer<typeof doctorStatus>;

/**
 * What a doctor may change about themselves.
 *
 * Note what is deliberately absent: `email`, `linkNo`, `slug`, `status`,
 * `featured`, `order`, `passwordHash`. Zod strips unknown keys by default, so
 * a hand-crafted POST carrying `status: "active"` has that field removed here
 * rather than merged into the record. That is the first of two defences; the
 * second is that every doctor action builds its patch field by field instead
 * of spreading parsed input, and derives the doctor id from the session rather
 * than from the form.
 */
export const doctorEditableSchema = z.object({
  name: bilingual(120),
  /** The headline speciality, shown on the card. */
  speciality: bilingual(120),
  /** Taxonomy ids — the filterable truth. `speciality` is only the wording. */
  specialityIds: z.array(z.string().max(64)).max(6).default([]),
  designation: bilingual(180),
  workplace: bilingual(200),
  /** "MBBS", "FCPS (Medicine)" — short post-nominals, shown inline. */
  degrees: z.array(z.string().trim().min(1).max(60)).max(20).default([]),
  about: bilingualOptional(4000),
  /** BMDC registration. Public on purpose: it is what makes a claim checkable. */
  bmdcNo: z.string().trim().max(40).optional(),
  yearsExperience: z.number().int().min(0).max(80).optional(),
  patientsServed: z.number().int().min(0).max(10_000_000).optional(),
  photo: mediaRefSchema.nullable().default(null),
  chambers: z.array(chamberSchema).max(12).default([]),
  education: z.array(educationSchema).max(30).default([]),
  experience: z.array(experienceSchema).max(30).default([]),
  awards: z.array(awardSchema).max(30).default([]),
  fellowships: z.array(fellowshipSchema).max(30).default([]),
  papers: z.array(paperSchema).max(120).default([]),
  /** Free-text lists the reference site renders as bullets. */
  qualifications: z.array(z.string().trim().min(1).max(300)).max(30).default([]),
  skills: z.array(z.string().trim().min(1).max(200)).max(40).default([]),
  achievements: z.array(z.string().trim().min(1).max(300)).max(30).default([]),
  social: socialSchema.default({}),
  publicPhone: bdPhone.optional(),
  publicEmail: z.email().max(160).optional(),
  whatsapp: bdPhone.optional(),
  publicAddress: bilingual(300).optional(),
});

/**
 * The canonical stored record. Server-only: it carries the password hash and
 * the sign-in address, neither of which ever reaches a page.
 */
export const doctorRecordSchema = doctorEditableSchema.extend({
  id: z.string().min(1),
  linkNo: linkNoSchema,
  slug: slugSchema,
  /** The sign-in address. Not the same field as `publicEmail`. */
  email: z.email().max(160),
  passwordHash: z.string().min(1),
  /**
   * Bumped on every password change, and stamped into the session as `pv`.
   * A mismatch logs old sessions out, which is what makes an admin reset take
   * effect immediately rather than in up to eight hours.
   */
  passwordVersion: z.number().int().nonnegative().default(1),
  passwordSetAt: timestamp,
  status: doctorStatus.default("active"),
  featured: z.boolean().default(false),
  order: z.number().int().min(0).max(9999).default(500),
  /** Denormalised off `chambers`, so the directory filters without a join. */
  hospitalIds: z.array(z.string()).default([]),
  locationIds: z.array(z.string()).default([]),
  createdAt: timestamp,
  updatedAt: timestamp,
  createdBy: z.string().max(160),
  lastLoginAt: timestamp.optional(),
});

/** The public projection: the record minus everything that is a credential. */
export const doctorProfileSchema = doctorRecordSchema.omit({
  passwordHash: true,
  passwordVersion: true,
  passwordSetAt: true,
  email: true,
  createdBy: true,
  lastLoginAt: true,
});

/**
 * One row in the directory.
 *
 * Deliberately small — every doctor's card lives in a single cached document
 * that the whole directory page is rendered from, so a field added here is a
 * field multiplied by the roster. At roughly 400 bytes each, 1,500 doctors is
 * about 600KB, which is the ceiling this design is good for.
 */
export const doctorCardSchema = z.object({
  id: z.string(),
  linkNo: linkNoSchema,
  slug: slugSchema,
  name: bilingual(120),
  speciality: bilingual(120),
  designation: bilingual(180),
  workplace: bilingual(200),
  /** Precomputed "MBBS, FCPS (Medicine)" so the card does no joining. */
  degreesShort: z.string().max(160),
  photoUrl: z.string().nullable(),
  specialityIds: z.array(z.string()),
  hospitalIds: z.array(z.string()),
  locationIds: z.array(z.string()),
  chamberCount: z.number().int(),
  featured: z.boolean(),
  order: z.number().int(),
  status: doctorStatus,
  updatedAt: timestamp,
});

export type Chamber = z.infer<typeof chamberSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Award = z.infer<typeof awardSchema>;
export type Fellowship = z.infer<typeof fellowshipSchema>;
export type Paper = z.infer<typeof paperSchema>;
export type PaperKind = z.infer<typeof paperKind>;
export type Social = z.infer<typeof socialSchema>;
export type DoctorEditable = z.infer<typeof doctorEditableSchema>;
export type DoctorRecord = z.infer<typeof doctorRecordSchema>;
export type DoctorProfile = z.infer<typeof doctorProfileSchema>;
export type DoctorCard = z.infer<typeof doctorCardSchema>;
