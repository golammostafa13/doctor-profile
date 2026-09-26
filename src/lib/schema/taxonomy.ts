import { z } from "zod";
import { bilingual, slugSchema, timestamp } from "@/lib/schema/common";

/**
 * Specialities, hospitals and districts.
 *
 * One document rather than three key spaces, because every filter dropdown on
 * the directory page needs all three at once and a single `GET` is the whole
 * cost. The reference directory carries something like forty specialities; a
 * few hundred terms is JSON measured in kilobytes.
 *
 * A term's id is its slug, so `/specialities/cardiologist` needs no lookup
 * table and a term cannot be renamed out from under its own URL by accident —
 * changing the id is visibly changing the address.
 */

export const termSchema = z.object({
  id: slugSchema,
  name: bilingual(120),
  description: bilingual(400).optional(),
  order: z.number().int().min(0).max(999).default(500),
});

export const taxonomySchema = z.object({
  /** Bumped on every write, so a stale cached copy is detectable. */
  rev: z.number().int().nonnegative().default(0),
  updatedAt: timestamp.default(0),
  specialities: z.array(termSchema).max(200).default([]),
  hospitals: z.array(termSchema).max(500).default([]),
  locations: z.array(termSchema).max(200).default([]),
});

export const termKind = z.enum(["speciality", "hospital", "location"]);

export type Term = z.infer<typeof termSchema>;
export type Taxonomy = z.infer<typeof taxonomySchema>;
export type TermKind = z.infer<typeof termKind>;
