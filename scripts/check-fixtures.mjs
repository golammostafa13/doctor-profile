/**
 * Validates the generated fixtures against the real schemas.
 *
 * The generator writes plain objects; only this proves they are actually
 * DoctorRecords. Run it after `build-fixtures.mjs` — a fixture that does not
 * parse is a runtime failure on whatever page happens to read it first.
 */
import { readFileSync } from "node:fs";
const src = readFileSync("src/lib/fixtures/doctors.ts", "utf8");
// Anchor on the assignment, not the first "[" — that one belongs to the
// `DoctorRecord[]` type annotation.
const marker = "export const demoDoctors: DoctorRecord[] = ";
const json = src.slice(src.indexOf(marker) + marker.length, src.lastIndexOf("]") + 1);
const doctors = JSON.parse(json);

const { doctorRecordSchema } = await import("../dist-check/doctor.js");
let bad = 0;
for (const d of doctors) {
  const r = doctorRecordSchema.safeParse(d);
  if (!r.success) {
    bad++;
    if (bad <= 3) console.log(`  ${d.id}:`, JSON.stringify(r.error.issues.slice(0, 3)));
  }
}
console.log(bad ? `${bad}/${doctors.length} FAILED` : `all ${doctors.length} records valid`);
process.exit(bad ? 1 : 0);
