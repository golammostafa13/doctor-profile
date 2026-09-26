/**
 * One place to import a type from.
 *
 * The schemas are the source of truth — every type here is `z.infer`red from
 * one — but a component should not have to know which schema file a type came
 * from, and moving a schema should not touch fifty imports.
 */
export type { MediaRef, Bilingual } from "@/lib/schema/common";
export type {
  Chamber,
  Education,
  Experience,
  Award,
  Fellowship,
  Paper,
  PaperKind,
  Social,
  DoctorStatus,
  DoctorEditable,
  DoctorRecord,
  DoctorProfile,
  DoctorCard,
} from "@/lib/schema/doctor";
export type { Term, Taxonomy, TermKind } from "@/lib/schema/taxonomy";
export type { Session, Role } from "@/lib/schema/session";
export type { AdSlot, Ad, AdsDoc } from "@/lib/schema/ads";
export type { Sponsor, SiteSettings } from "@/lib/schema/settings";
export type {
  ApplicationStatus,
  ApplicationInput,
  ApplicationRecord,
} from "@/lib/schema/application";
export type { BlogStatus, BlogPost, BlogCard } from "@/lib/schema/blog";
