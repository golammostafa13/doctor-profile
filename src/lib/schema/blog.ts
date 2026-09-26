import { z } from "zod";
import {
  bilingual,
  bilingualOptional,
  linkNoSchema,
  mediaRefSchema,
  slugSchema,
  timestamp,
} from "@/lib/schema/common";

export const blogStatus = z.enum(["draft", "published"]);

export const blogSchema = z.object({
  id: z.string().min(1),
  slug: slugSchema,
  title: bilingual(200),
  excerpt: bilingualOptional(400),
  /**
   * Markdown, rendered server-side through a strict allowlist.
   *
   * Never `dangerouslySetInnerHTML` on this: it is text typed by a doctor into
   * a form, which is to say it is text typed by whoever currently holds that
   * doctor's password.
   */
  body: bilingualOptional(40_000),
  cover: mediaRefSchema.nullable().default(null),
  authorDoctorId: z.string().min(1),
  authorName: bilingual(120),
  authorLinkNo: linkNoSchema,
  tags: z.array(z.string().trim().max(40)).max(10).default([]),
  status: blogStatus.default("draft"),
  publishedAt: timestamp.nullable().default(null),
  createdAt: timestamp,
  updatedAt: timestamp,
});

/** The list projection: everything but the body, which is the bulk. */
export const blogCardSchema = blogSchema.omit({ body: true });

export type BlogStatus = z.infer<typeof blogStatus>;
export type BlogPost = z.infer<typeof blogSchema>;
export type BlogCard = z.infer<typeof blogCardSchema>;
