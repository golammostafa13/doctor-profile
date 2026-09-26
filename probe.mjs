/**
 * Loads a page in headless Chrome and reports console output, page errors,
 * failed requests, and optionally a screenshot.
 *
 *   node probe.mjs <url> [screenshot.png] [waitMs]
 *
 * Unlike the sibling projects this borrows from, almost everything here is
 * public, so no session cookie is needed. Set PROBE_SESSION to a `dp_session`
 * value copied out of DevTools only when probing /doctor/* or /admin/*.
 *
 * The cookie is read from the environment rather than minted here on purpose:
 * a script in the repository that can forge a session from AUTH_SECRET is a
 * script that will eventually run somewhere it should not.
 */
import puppeteer from "puppeteer-core";

const [, , url, shot, waitMs = "6000"] = process.argv;
const session = process.env.PROBE_SESSION;

if (!url) {
  console.error("usage: node probe.mjs <url> [screenshot.png] [waitMs]");
  process.exit(2);
}

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });

  if (session) {
    const { hostname } = new URL(url);
    await browser.setCookie({
      name: "dp_session",
      value: session,
      domain: hostname,
      path: "/",
    });
  }

  const problems = [];
  page.on("console", (m) => console.log(`[console.${m.type()}] ${m.text()}`));
  page.on("pageerror", (e) => {
    problems.push(`pageerror: ${e.message}`);
    console.log(`[pageerror] ${e.message}`);
  });
  page.on("requestfailed", (r) => {
    problems.push(`requestfailed: ${r.url()}`);
    console.log(`[requestfailed] ${r.url()} — ${r.failure()?.errorText}`);
  });

  const response = await page.goto(url, {
    waitUntil: "networkidle2",
    timeout: 45_000,
  });
  console.log(`[status] ${response?.status()} ${response?.url()}`);

  await new Promise((r) => setTimeout(r, Number(waitMs)));

  // Scroll the whole page first. Entrances here are scroll-scrubbed, so an
  // element below the fold is *correctly* at opacity 0 until it enters the
  // viewport — counting those would report every long page as broken. What
  // actually matters is an element that is on screen and still invisible,
  // which is what a missing @supports fallback looks like.
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.75);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 60)));
    }
    // "instant" matters: globals.css sets `scroll-behavior: smooth`, so a
    // plain scrollTo animates and the screenshot fires mid-flight, which looks
    // exactly like a page missing its heading.
    window.scrollTo({ top: 0, behavior: "instant" });
    await new Promise((r) => setTimeout(r, 200));
  });

  const seen = await page.evaluate(() => {
    const inViewport = (el) => {
      const r = el.getBoundingClientRect();
      return r.bottom > 0 && r.top < window.innerHeight && r.width > 0;
    };
    const stranded = [...document.querySelectorAll("main *")].filter(
      (el) =>
        el.textContent?.trim() &&
        inViewport(el) &&
        getComputedStyle(el).opacity === "0",
    );
    return {
      title: document.title,
      lang: document.documentElement.lang,
      h1: document.querySelector("h1")?.textContent?.trim() ?? null,
      /** On screen but invisible. Should always be 0. */
      stranded: stranded.length,
      strandedFirst: stranded[0]?.className ?? null,
    };
  });
  console.log(`[dom] ${JSON.stringify(seen)}`);

  if (shot) {
    // Viewport-only by default. A full-page screenshot renders position:sticky
    // elements at their scrolled offset (the header lands on top of the h1),
    // and captures scroll-scrubbed content that has not entered the viewport
    // as blank — both look like bugs and neither is one. Pass PROBE_FULLPAGE=1
    // when the whole column is genuinely what you want to see.
    await page.screenshot({ path: shot, fullPage: process.env.PROBE_FULLPAGE === "1" });
    console.log(`[shot] ${shot}`);
  }

  console.log(problems.length ? `[FAIL] ${problems.length} problem(s)` : "[OK]");
} finally {
  await browser.close();
}
