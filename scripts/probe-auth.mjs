/**
 * Drives the sign-in form in a real browser and reports where each attempt
 * lands. The things worth proving here cannot be checked by reading the code:
 * that the cookie is actually set, that the guards actually redirect, and that
 * a wrong password is not distinguishable from an unknown one.
 *
 *   node scripts/probe-auth.mjs http://localhost:3002
 */
import puppeteer from "puppeteer-core";

const base = process.argv[2] ?? "http://localhost:3002";
const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu"],
});

async function attempt(email, password, label) {
  const page = await browser.newPage();
  await page.goto(`${base}/en/signin`, { waitUntil: "networkidle2" });
  await page.type("#email", email);
  await page.type("#password", password);
  await Promise.all([
    page.click('button[type="submit"]'),
    new Promise((r) => setTimeout(r, 2500)),
  ]);
  const url = page.url().replace(base, "");
  const error = await page.evaluate(
    () => document.querySelector('[role="alert"]')?.textContent?.trim() ?? null,
  );
  const cookies = await browser.cookies();
  const has = cookies.some((c) => c.name === "dp_session" && c.value);
  console.log(
    `${label.padEnd(26)} -> ${url.padEnd(14)} cookie=${has ? "set" : "none "} ${error ? `msg="${error}"` : ""}`,
  );
  for (const c of cookies) await browser.deleteCookie(c);
  await page.close();
  return { url, error, has };
}

async function guard(path, label) {
  const page = await browser.newPage();
  await page.goto(`${base}${path}`, { waitUntil: "networkidle2" });
  console.log(`${label.padEnd(26)} -> ${page.url().replace(base, "")}`);
  await page.close();
}

try {
  // The fixture roster's first doctor, and the password the README prints.
  const { readFileSync } = await import("node:fs");
  const src = readFileSync("src/lib/fixtures/doctors.ts", "utf8");
  const email = src.match(/"email": "([^"]+)"/)[1];

  console.log("-- sign in --");
  await attempt("admin@demo.test", "demo-admin-2026", "admin, right password");
  await attempt("admin@demo.test", "wrong", "admin, wrong password");
  await attempt(email, "demo-doctor-2026", "doctor, right password");
  await attempt(email, "wrong", "doctor, wrong password");
  await attempt("nobody@nowhere.test", "wrong", "unknown account");
  await attempt("notlisted@demo.test", "demo-admin-2026", "admin pw, unlisted email");

  console.log("\n-- guards, signed out --");
  await guard("/en/admin", "/en/admin");
  await guard("/en/doctor", "/en/doctor");
  await guard("/en/doctors", "/en/doctors (public)");
} finally {
  await browser.close();
}
