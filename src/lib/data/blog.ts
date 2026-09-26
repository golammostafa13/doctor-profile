import "server-only";
import { cache } from "react";
import { appKey, getRedis } from "@/lib/redis";
import { blogCardSchema, blogSchema, type BlogCard, type BlogPost } from "@/lib/schema/blog";

/**
 * Blog posts, written by doctors from their dashboard.
 *
 *   dp:post:<id>          one post, body included
 *   dp:idx:post:<slug>    slug → id, claimed with SET NX
 *   dp:cache:blog         every post's card (no body), for lists — one GET
 *
 * Same shape as the doctor directory: one canonical record plus one
 * pre-materialised list document, patched on each write.
 */

const KEY = {
  post: (id: string) => appKey(`post:${id}`),
  bySlug: (slug: string) => appKey(`idx:post:${slug}`),
  cards: () => appKey("cache:blog"),
} as const;

export const toBlogCard = (post: BlogPost): BlogCard => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { body, ...card } = post;
  return blogCardSchema.parse(card);
};

async function fixtures(): Promise<BlogPost[]> {
  const { demoPosts } = await import("@/lib/fixtures/blog");
  return demoPosts;
}

/** Every post's card, drafts included. Filter before showing a visitor. */
export const getBlogCards = cache(async (): Promise<BlogCard[]> => {
  const redis = await getRedis();
  if (redis) {
    const raw = await redis.get<string>(KEY.cards());
    if (raw) {
      try {
        return (JSON.parse(raw) as unknown[]).map((c) => blogCardSchema.parse(c));
      } catch {
        // derived data; fall through to empty rather than a 500
      }
    }
    return [];
  }
  return (await fixtures()).map(toBlogCard);
});

/** Published posts, newest first. */
export const getPublishedCards = cache(async (): Promise<BlogCard[]> =>
  (await getBlogCards())
    .filter((c) => c.status === "published")
    .sort((a, b) => (b.publishedAt ?? 0) - (a.publishedAt ?? 0)),
);

export async function getPost(id: string): Promise<BlogPost | null> {
  const redis = await getRedis();
  if (redis) {
    const raw = await redis.get<string>(KEY.post(id));
    if (!raw) return null;
    const parsed = blogSchema.safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : null;
  }
  return (await fixtures()).find((p) => p.id === id) ?? null;
}

export const getPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  const redis = await getRedis();
  if (redis) {
    const id = await redis.get<string>(KEY.bySlug(slug));
    return id ? getPost(id) : null;
  }
  return (await fixtures()).find((p) => p.slug === slug) ?? null;
});

/** Reserve a slug for a post; tries `slug`, `slug-2`, … */
export async function claimPostSlug(base: string, id: string): Promise<string> {
  const redis = await getRedis();
  if (!redis) throw new Error("No store configured.");
  for (let n = 1; n <= 50; n++) {
    const candidate = n === 1 ? base : `${base}-${n}`;
    const holder = await redis.get<string>(KEY.bySlug(candidate));
    if (holder === id) return candidate;
    if (!holder && (await redis.set(KEY.bySlug(candidate), id, { nx: true }))) return candidate;
  }
  throw new Error("Could not find a free address for this post.");
}

async function writeCards(mutate: (cards: BlogCard[]) => BlogCard[]) {
  const redis = await getRedis();
  if (!redis) throw new Error("No store configured.");
  const raw = await redis.get<string>(KEY.cards());
  let cards: BlogCard[] = [];
  try {
    cards = raw ? (JSON.parse(raw) as BlogCard[]) : [];
  } catch {
    cards = [];
  }
  await redis.set(KEY.cards(), JSON.stringify(mutate(cards)));
}

export async function putPost(post: BlogPost): Promise<void> {
  const redis = await getRedis();
  if (!redis) throw new Error("No store configured: cannot save posts.");
  const valid = blogSchema.parse({ ...post, updatedAt: Date.now() });
  await redis.set(KEY.post(valid.id), JSON.stringify(valid));
  await writeCards((cards) => [...cards.filter((c) => c.id !== valid.id), toBlogCard(valid)]);
}

export async function deletePost(post: BlogPost): Promise<void> {
  const redis = await getRedis();
  if (!redis) throw new Error("No store configured: cannot delete.");
  await redis.del(KEY.post(post.id));
  if ((await redis.get<string>(KEY.bySlug(post.slug))) === post.id) await redis.del(KEY.bySlug(post.slug));
  await writeCards((cards) => cards.filter((c) => c.id !== post.id));
}

export { KEY as blogKeys };
