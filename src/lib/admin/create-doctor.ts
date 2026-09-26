import "server-only";
import {
  doctorKeys,
  claimEmail,
  claimSlug,
  putRecord,
  releaseClaim,
  reserveLinkNo,
} from "@/lib/data/doctors";
import { newId, toSlug } from "@/lib/admin/action";
import { getRedis } from "@/lib/redis";
import { doctorRecordSchema, type DoctorRecord, type DoctorStatus } from "@/lib/schema/doctor";
import type { Bilingual } from "@/lib/schema/common";

/**
 * Bring a doctor into existence — from the admin "new doctor" form, or from an
 * approved application. The one path, so both produce the same record.
 *
 * Claims happen in order of how likely they are to fail (the address is the
 * only one a person chose), and each is released if a later step fails, so an
 * abandoned attempt does not leave an address that can never be used again.
 */
export interface NewDoctor {
  name: Bilingual;
  email: string;
  passwordHash: string;
  speciality: Bilingual;
  specialityIds: string[];
  designation: Bilingual;
  workplace: Bilingual;
  bmdcNo?: string;
  publicPhone?: string;
  status: DoctorStatus;
  createdBy: string;
}

export type CreateOutcome =
  | { ok: true; record: DoctorRecord }
  | { ok: false; field?: string; code?: "email" | "slug"; message: string };

export async function createDoctor(input: NewDoctor): Promise<CreateOutcome> {
  const id = newId("doc");
  const email = input.email.trim().toLowerCase();

  if (!(await claimEmail(email, id))) {
    return { ok: false, field: "email", code: "email", message: "Another doctor already signs in with this address." };
  }

  const base = toSlug(input.name.en);
  let slug = "";
  for (let n = 1; n <= 50 && !slug; n++) {
    const candidate = n === 1 ? base : `${base}-${n}`;
    if (await claimSlug(candidate, id)) slug = candidate;
  }
  if (!slug) {
    await releaseClaim("email", email, id);
    return { ok: false, code: "slug", message: "Could not find a free address for this profile." };
  }

  const linkNo = await reserveLinkNo(id);
  const now = Date.now();
  const parsed = doctorRecordSchema.safeParse({
    id,
    linkNo,
    slug,
    email,
    passwordHash: input.passwordHash,
    passwordVersion: 1,
    passwordSetAt: now,
    status: input.status,
    featured: false,
    order: 500,
    name: input.name,
    speciality: input.speciality,
    specialityIds: input.specialityIds,
    designation: input.designation,
    workplace: input.workplace,
    bmdcNo: input.bmdcNo,
    publicPhone: input.publicPhone,
    about: { en: "" },
    createdAt: now,
    updatedAt: now,
    createdBy: input.createdBy,
  });

  if (!parsed.success) {
    await releaseClaim("email", email, id);
    await releaseClaim("slug", slug, id);
    const redis = await getRedis();
    await redis?.del(doctorKeys.byLink(linkNo));
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Invalid doctor." };
  }

  await putRecord(parsed.data);
  return { ok: true, record: parsed.data };
}
