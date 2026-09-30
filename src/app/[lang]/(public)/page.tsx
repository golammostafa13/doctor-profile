import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import { CountUp } from "@/components/doctor/count-up";
import { DoctorCard } from "@/components/doctor/doctor-card";
import { Button } from "@/components/ui/button";
import { getPublicCards } from "@/lib/data/doctors";
import { getTaxonomy } from "@/lib/data/taxonomy";
import { getPublishedCards } from "@/lib/data/blog";
import { PostCard } from "@/components/blog/post-card";
import { getDictionary } from "@/lib/i18n";
import { hasLocale, localePath, type Locale } from "@/lib/i18n/config";
import { contentClass, pick, textClass } from "@/lib/i18n/content";
import { formatNumberIn } from "@/lib/i18n/format";
import { termCounts } from "@/lib/search";
import { cn } from "@/lib/utils";

/**
 * The front page.
 *
 * Its whole job is to get a visitor searching, so the search box is the hero:
 * a plain GET form to the directory, which means it works before any script
 * has loaded — the directory reads `?q=` from the URL either way. Beside it,
 * the most common specialities as one-tap filters, a few live totals, and the
 * featured doctors.
 *
 * Statically rendered and revalidated on the directory's window.
 */
export const revalidate = 300;

export default async function HomePage(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const bn = textClass(locale);

  const [cards, taxonomy, posts] = await Promise.all([getPublicCards(), getTaxonomy(), getPublishedCards()]);
  const counts = termCounts(cards);
  const count = (kind: string, id: string) => counts.get(`${kind}:${id}`) ?? 0;

  const popular = [...taxonomy.specialities]
    .filter((term) => count("speciality", term.id) > 0)
    .sort((a, b) => count("speciality", b.id) - count("speciality", a.id))
    .slice(0, 6);

  const featured = cards
    .filter((card) => card.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 6);

  const used = (kind: "specialityIds" | "hospitalIds" | "locationIds") =>
    new Set(cards.flatMap((card) => card[kind])).size;

  const stats = [
    { label: dict.home.statDoctors, value: cards.length },
    { label: dict.home.statSpecialities, value: used("specialityIds") },
    { label: dict.home.statHospitals, value: used("hospitalIds") },
    { label: dict.home.statDistricts, value: used("locationIds") },
  ];

  const directory = localePath(locale, "/doctors");
  const locations = new Map(taxonomy.locations.map((term) => [term.id, term]));

  return (
    <main id="main">
      {/* ---- Hero ------------------------------------------------------ */}
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-16 text-center sm:pt-24">
        <p className={cn("rise hud-label", bn)}>{dict.home.kicker}</p>

        <h1
          className={cn(
            "rise mt-6 font-display font-bold uppercase leading-[0.98] tracking-[0.005em]",
            bn,
          )}
          style={{ "--lag": 1 } as React.CSSProperties}
        >
          <span className="block text-[clamp(2.4rem,8vw,5.2rem)] text-ink">
            {dict.home.titleLead}
          </span>
          <span className="block text-[clamp(2.4rem,8vw,5.2rem)] text-hot [text-shadow:0_0_48px_var(--glow-title)]">
            {dict.home.titleAccent}
          </span>
        </h1>

        <p
          className={cn("rise mx-auto mt-6 max-w-xl text-lg text-ink-mute", bn)}
          style={{ "--lag": 2 } as React.CSSProperties}
        >
          {dict.home.lead}
        </p>

        {/* A real form: GET /doctors?q=…, so it searches without JavaScript. */}
        <form
          action={directory}
          method="get"
          role="search"
          className="rise hud-frame mx-auto mt-10 flex max-w-2xl flex-col gap-2 sm:flex-row"
          style={{ "--lag": 3 } as React.CSSProperties}
        >
          <label className="relative flex-1">
            <span className="sr-only">{dict.common.searchDoctors}</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-accent" />
            <input
              type="search"
              name="q"
              placeholder={dict.search.placeholder}
              autoComplete="off"
              className={cn(
                "h-14 w-full border border-line bg-surface/90 pl-12 pr-4 text-base text-ink placeholder:text-ink-faint transition-[border-color,box-shadow] focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-soft)] focus:outline-none",
                bn,
              )}
            />
          </label>
          <Button type="submit" size="lg" className={cn("h-14", bn)}>
            {dict.home.searchCta} <ArrowRight />
          </Button>
        </form>

        {popular.length ? (
          <div
            className="rise mt-6 flex flex-wrap items-center justify-center gap-2"
            style={{ "--lag": 4 } as React.CSSProperties}
          >
            <span className={cn("mr-1 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-ink-faint", bn)}>
              {dict.home.popular}
            </span>
            {popular.map((term) => (
              <Link
                key={term.id}
                href={`${directory}?speciality=${encodeURIComponent(term.id)}`}
                className={cn(
                  "group flex items-center gap-2 border border-line bg-bg/60 px-3 py-1.5 text-sm text-ink-mute transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent",
                  contentClass(term.name, locale),
                )}
              >
                {pick(term.name, locale)}
                <span className="font-mono text-[0.66rem] text-ink-faint group-hover:text-accent">
                  {formatNumberIn(count("speciality", term.id), locale)}
                </span>
              </Link>
            ))}
          </div>
        ) : null}
      </section>

      {/* ---- Totals, like the reference's scoreboard ----------------- */}
      <section className="mx-auto max-w-5xl px-4">
        <dl className="hud-card grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              // dt before dd, as a <dl> wants; flex-col-reverse draws the
              // figure on top.
              className={cn(
                "flex flex-col-reverse px-4 py-6 text-center",
                i < 2 && "border-b border-line sm:border-b-0",
              )}
            >
              <dt className={cn("mt-2 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-ink-faint", bn)}>
                {stat.label}
              </dt>
              <dd className="font-display text-4xl font-bold text-hot">
                <CountUp value={stat.value} lang={locale} delay={i * 150} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---- Featured -------------------------------------------------- */}
      {featured.length ? (
        <section className="mx-auto mt-24 max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className={cn("hud-label", bn)}>{dict.home.kicker}</p>
              <h2 className={cn("mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold uppercase", bn)}>
                {dict.home.featured}
              </h2>
            </div>
            <Button asChild variant="outline" className={bn}>
              <Link href={directory}>
                {dict.home.seeAll} <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((card, i) => (
              <DoctorCard
                key={card.id}
                card={card}
                lang={locale}
                index={i}
                locations={locations}
              />
            ))}
          </div>
        </section>
      ) : null}

      {/* ---- Latest posts ---------------------------------------------- */}
      {posts.length ? (
        <section className="mx-auto mt-24 max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className={cn("hud-label", bn)}>{dict.blog.kicker}</p>
              <h2 className={cn("mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold uppercase", bn)}>
                {dict.home.latestPosts}
              </h2>
            </div>
            <Button asChild variant="outline" className={bn}>
              <Link href={localePath(locale, "/blog")}>
                {dict.blog.back} <ArrowRight />
              </Link>
            </Button>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((post, i) => (
              <li key={post.id}>
                <PostCard post={post} lang={locale} index={i} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
