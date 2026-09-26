/**
 * Generates the committed demo roster.
 *
 *   node scripts/build-fixtures.mjs
 *
 * Writes `src/lib/fixtures/doctors.ts` and `src/lib/fixtures/taxonomy.ts`.
 *
 * These are what the site serves when no Redis is configured, which is what
 * lets the demo run with no account anywhere. Reads work; writes do not
 * persist — `canPersist()` reports that rather than pretending otherwise.
 *
 * Deterministic: a seeded PRNG, so re-running produces byte-identical output
 * and the diff stays empty unless the generator actually changed. A fixture
 * that reshuffles itself on every run is a fixture nobody can review.
 *
 * The password hashes are real PBKDF2 hashes of a password printed in the
 * README. That is safe precisely because it is published — it is a demo
 * credential, not a secret — and `src/lib/actions/auth.ts` refuses fixture
 * sign-in in production unless DEMO_MODE=1, so this cannot quietly become a
 * way into a real deployment.
 */
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { portraitSvg } from "./demo-portraits.mjs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import {
  SPECIALITIES, HOSPITALS, DISTRICTS, GIVEN, FAMILY,
  MEDICAL_COLLEGES, STREETS,
} from "./demo-source.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const portraitDir = join(root, "public", "demo", "portraits");
const photoDir = join(root, "public", "demo", "photos");

// Stock photographs from scripts/fetch-demo-photos.mjs, when they have been
// fetched; otherwise every doctor keeps a drawn portrait.
const photoPool = existsSync(join(photoDir, "manifest.json"))
  ? JSON.parse(readFileSync(join(photoDir, "manifest.json"), "utf8"))
  : null;
const photoNext = { female: 0, male: 0 };
const outDir = join(root, "src", "lib", "fixtures");

const COUNT = 100;
const DEMO_PASSWORD = "Square";

/** mulberry32: small, seeded, and good enough for placing fake chambers. */
function rng(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = rng(20260926);
const pick = (list) => list[Math.floor(rand() * list.length)];
const pickN = (list, n) => {
  const copy = [...list];
  const out = [];
  while (out.length < n && copy.length) out.push(copy.splice(Math.floor(rand() * copy.length), 1)[0]);
  return out;
};
const int = (min, max) => min + Math.floor(rand() * (max - min + 1));

// --- PBKDF2, matching src/lib/auth/password.ts exactly ---------------------
const ITERATIONS = 210_000;
const b64 = (bytes) => Buffer.from(bytes).toString("base64");
// The salt comes from the doctor's id rather than the RNG, so re-running the
// generator leaves every hash — and the diff — unchanged.
async function hashPassword(plain, id) {
  const salt = new Uint8Array(createHash("sha256").update(`salt:${id}`).digest()).slice(0, 16);
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(plain), { name: "PBKDF2" }, false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations: ITERATIONS, hash: "SHA-256" }, key, 256);
  return `pbkdf2$${ITERATIONS}$${b64(salt)}$${b64(new Uint8Array(bits))}`;
}

const DEGREE_SETS = [
  ["MBBS", "FCPS (Medicine)"],
  ["MBBS", "MD (Cardiology)"],
  ["MBBS", "FCPS (Surgery)", "MS"],
  ["MBBS", "DTCD", "MD"],
  ["MBBS", "MRCP (UK)"],
  ["MBBS", "FCPS", "FACC"],
  ["BDS", "FCPS (Dental Surgery)"],
];

const SKILLS = [
  "Interventional procedures", "Diagnostic imaging", "Emergency management",
  "Minimally invasive surgery", "Chronic disease management", "Preventive care",
  "Clinical research", "Patient counselling", "Ultrasonography",
  "Endoscopic procedures", "Paediatric care", "Post-operative rehabilitation",
];

const ACHIEVEMENTS = [
  "Established a district-level screening programme",
  "Published in a peer-reviewed international journal",
  "Trained junior consultants in advanced procedures",
  "Led a hospital quality-improvement initiative",
  "Presented at a national medical conference",
  "Developed a follow-up protocol adopted department-wide",
];

const QUALIFICATION_TEMPLATES = [
  (y) => `${y}+ years of clinical practice`,
  () => "Advanced Cardiac Life Support (ACLS) certified",
  () => "International fellowship training",
  () => "Extensive ICU and emergency care experience",
  () => "Member, Bangladesh Medical Association",
];

const toSlug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const usedLink = new Set();
function linkNo() {
  for (;;) {
    const n = String(100_000_000 + Math.floor(rand() * 899_999_999));
    if (!usedLink.add(n)) continue;
    return n;
  }
}

const usedSlug = new Map();
function uniqueSlug(base) {
  const n = (usedSlug.get(base) ?? 0) + 1;
  usedSlug.set(base, n);
  return n === 1 ? base : `${base}-${n}`;
}

const NOW = Date.UTC(2026, 8, 26);

async function buildDoctor(i) {
  const [given, givenBn] = pick(GIVEN);
  const [family, familyBn] = pick(FAMILY);
  const [specId, specEn, specBn] = pick(SPECIALITIES);
  const degrees = pick(DEGREE_SETS);
  const years = int(6, 32);
  const gradYear = 2026 - years - 5;

  const nameEn = `Dr. ${given} ${family}`;
  const nameBn = `ডা. ${givenBn} ${familyBn}`;
  const slug = uniqueSlug(toSlug(`${given}-${family}`));
  const link = linkNo();
  const id = `doc_${String(i + 1).padStart(3, "0")}`;

  // A drawn portrait, written beside the fixtures (see demo-portraits.mjs).
  // GIVEN lists men's names first and women's after, twelve of each.
  const female = GIVEN.findIndex(([en]) => en === given) >= 12;
  const svg = portraitSvg(id, female);
  mkdirSync(portraitDir, { recursive: true });
  writeFileSync(join(portraitDir, `${id}.svg`), svg);
  // A stock photo of the matching gender when there is one, handed out in
  // turn so faces repeat only once the pool is used up.
  const gender = female ? "female" : "male";
  const stock = photoPool?.[gender]?.length
    ? photoPool[gender][photoNext[gender]++ % photoPool[gender].length]
    : null;
  const photo = stock
    ? {
        url: `/demo/photos/${stock.file}`,
        width: 480,
        height: 480,
        hash: createHash("sha256").update(readFileSync(join(photoDir, stock.file))).digest("hex").slice(0, 16),
        bytes: stock.bytes,
      }
    : {
        url: `/demo/portraits/${id}.svg`,
        width: 480,
        height: 480,
        hash: createHash("sha256").update(svg).digest("hex").slice(0, 16),
        bytes: Buffer.byteLength(svg),
      };

  const chamberCount = int(1, 3);
  const chambers = pickN(HOSPITALS, chamberCount).map(([hid, hEn, hBn, district], ci) => {
    const [street, streetBn] = pick(STREETS);
    const [, dEn, dBn] = DISTRICTS.find((d) => d[0] === district) ?? DISTRICTS[0];
    const start = int(4, 7);
    return {
      id: `ch_${id}_${ci + 1}`,
      hospital: { en: hEn, bn: hBn },
      address: { en: `${street}, ${dEn}`, bn: `${streetBn}, ${dBn}` },
      hospitalId: hid,
      locationId: district,
      visitingHours: {
        en: `Sat–Thu, ${start}:00 PM – ${start + 3}:00 PM`,
        bn: `শনি–বৃহস্পতি, সন্ধ্যা ${start}টা – রাত ${start + 3}টা`,
      },
      appointmentPhone: `01${int(3, 9)}${String(int(10_000_000, 99_999_999))}`,
      order: ci,
    };
  });

  const [collegeEn, collegeBn] = pick(MEDICAL_COLLEGES);
  const education = [
    {
      id: `ed_${id}_1`,
      degree: { en: degrees[0], bn: degrees[0] },
      institution: { en: collegeEn, bn: collegeBn },
      yearFrom: gradYear - 5, yearTo: gradYear, order: 0,
    },
    ...(degrees[1] ? [{
      id: `ed_${id}_2`,
      degree: { en: degrees[1], bn: degrees[1] },
      institution: { en: "Bangladesh College of Physicians and Surgeons", bn: "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস" },
      yearFrom: gradYear + 1, yearTo: gradYear + 5, order: 1,
    }] : []),
  ];

  const experience = chambers.map((c, xi) => ({
    id: `ex_${id}_${xi + 1}`,
    role: { en: xi === 0 ? "Senior Consultant" : "Consultant", bn: xi === 0 ? "সিনিয়র কনসালট্যান্ট" : "কনসালট্যান্ট" },
    organisation: c.hospital,
    location: { en: c.address.en.split(", ").pop(), bn: c.address.bn.split(", ").pop() },
    yearFrom: gradYear + 6 + xi * 4,
    yearTo: xi === 0 ? undefined : gradYear + 9 + xi * 4,
    current: xi === 0,
    order: xi,
  }));

  // Only some doctors carry the deep sections, which is how a real directory
  // looks: everyone has chambers, a few have a publication record.
  const deep = i % 10 < 1 || i < 8;

  const doctor = {
    id, linkNo: link, slug,
    email: `${slug.replace(/-/g, ".")}@gmail.com.bd`,
    passwordHash: await hashPassword(DEMO_PASSWORD, id),
    passwordVersion: 1,
    passwordSetAt: NOW,
    status: "active",
    featured: i < 6,
    order: 100 + i,
    name: { en: nameEn, bn: nameBn },
    speciality: { en: specEn, bn: specBn },
    specialityIds: [specId],
    designation: {
      en: `${experience[0].role.en}, ${specEn}`,
      bn: `${experience[0].role.bn}, ${specBn}`,
    },
    workplace: chambers[0].hospital,
    degrees,
    about: {
      en: `${nameEn} is a ${specEn.toLowerCase()} with ${years} years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.`,
      bn: `${nameBn} একজন ${specBn}, বাংলাদেশে ${years} বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।`,
    },
    bmdcNo: `A-${int(10_000, 99_999)}`,
    yearsExperience: years,
    patientsServed: int(4, 48) * 1000,
    photo,
    chambers, education, experience,
    awards: deep ? [{
      id: `aw_${id}_1`,
      title: { en: `National ${specEn} Excellence Award`, bn: `জাতীয় ${specBn} শ্রেষ্ঠত্ব পুরস্কার` },
      issuer: { en: "Bangladesh Medical Association", bn: "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন" },
      year: int(2016, 2025), order: 0,
    }] : [],
    fellowships: deep ? [{
      id: `fe_${id}_1`,
      subject: { en: `Advanced ${specEn} Training`, bn: `উন্নত ${specBn} প্রশিক্ষণ` },
      country: { en: pick([["Singapore"],["India"],["Thailand"],["United Kingdom"]])[0], bn: "বিদেশ" },
      duration: { en: pick([["6 months"],["1 year"],["2 years"]])[0], bn: "" },
      year: int(2012, 2022), order: 0,
    }] : [],
    papers: deep ? [0, 1].map((p) => ({
      id: `pa_${id}_${p + 1}`,
      kind: p === 0 ? "publication" : "seminar",
      title: {
        en: p === 0
          ? `Outcomes of early intervention in ${specEn.toLowerCase()} practice: a district cohort`
          : `Advances in ${specEn.toLowerCase()} care in South Asia`,
        bn: p === 0
          ? `${specBn} চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা`
          : `দক্ষিণ এশিয়ায় ${specBn} সেবার অগ্রগতি`,
      },
      summary: { en: "", bn: "" },
      date: `${int(2019, 2025)}-${String(int(1, 12)).padStart(2, "0")}-${String(int(1, 28)).padStart(2, "0")}`,
      image: null, order: p,
    })) : [],
    qualifications: pickN(QUALIFICATION_TEMPLATES, 3).map((t) => t(years)),
    skills: pickN(SKILLS, int(4, 7)),
    achievements: deep ? pickN(ACHIEVEMENTS, 3) : pickN(ACHIEVEMENTS, 1),
    social: i % 3 === 0 ? { facebook: `https://www.facebook.com/${slug}` } : {},
    publicPhone: `01${int(3, 9)}${String(int(10_000_000, 99_999_999))}`,
    publicEmail: `${slug.replace(/-/g, ".")}@gmail.com.bd`,
    publicAddress: { en: chambers[0].address.en, bn: chambers[0].address.bn },
    hospitalIds: [...new Set(chambers.map((c) => c.hospitalId))],
    locationIds: [...new Set(chambers.map((c) => c.locationId))],
    createdAt: NOW - (COUNT - i) * 86_400_000,
    updatedAt: NOW - (COUNT - i) * 3_600_000,
    createdBy: "demo-fixture",
  };
  return doctor;
}

const doctors = [];
for (let i = 0; i < COUNT; i++) doctors.push(await buildDoctor(i));

mkdirSync(outDir, { recursive: true });

const header = `// GENERATED FILE — do not edit by hand.
// Rebuild with: node scripts/build-fixtures.mjs
//
// The demo roster, served when no Redis is configured. Deterministic: the
// generator is seeded, so re-running produces identical output.
//
// The password hashes are real PBKDF2 hashes of the demo password printed in
// the README. That is safe because it is published — it is a demo credential,
// not a secret — and sign-in against fixtures is refused in production unless
// DEMO_MODE=1.
`;

writeFileSync(
  join(outDir, "doctors.ts"),
  `${header}
import type { DoctorRecord } from "@/lib/schema/doctor";

export const DEMO_PASSWORD = ${JSON.stringify(DEMO_PASSWORD)};

export const demoDoctors: DoctorRecord[] = ${JSON.stringify(doctors, null, 2)};
`,
);

const taxonomy = {
  rev: 1,
  updatedAt: NOW,
  specialities: SPECIALITIES.map(([id, en, bn], i) => ({ id, name: { en, bn }, order: i })),
  hospitals: HOSPITALS.map(([id, en, bn], i) => ({ id, name: { en, bn }, order: i })),
  locations: DISTRICTS.map(([id, en, bn], i) => ({ id, name: { en, bn }, order: i })),
};

writeFileSync(
  join(outDir, "taxonomy.ts"),
  `${header}
import type { Taxonomy } from "@/lib/schema/taxonomy";

export const demoTaxonomy: Taxonomy = ${JSON.stringify(taxonomy, null, 2)};
`,
);

const specCounts = new Map();
for (const d of doctors) for (const s of d.specialityIds) specCounts.set(s, (specCounts.get(s) ?? 0) + 1);
console.log(`wrote ${doctors.length} doctors across ${specCounts.size} specialities`);
console.log(`       ${new Set(doctors.flatMap((d) => d.hospitalIds)).size} hospitals, ${new Set(doctors.flatMap((d) => d.locationIds)).size} districts`);
console.log(`       ${doctors.filter((d) => d.papers.length).length} with papers, ${doctors.filter((d) => d.awards.length).length} with awards`);
