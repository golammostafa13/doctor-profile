"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import { ExternalLink, Save, Send, Trash2 } from "lucide-react";
import { deleteOwnPostAction, savePostAction } from "@/lib/actions/doctor";
import type { ActionResult } from "@/lib/admin/action";
import type { BlogPost } from "@/lib/schema/blog";
import { FormMessage, ImageField, Submit } from "@/components/admin/form-bits";
import { Panel } from "@/components/admin/ui";
import { useDash } from "@/components/dash/dash-strings";
import { Markdown } from "@/components/markdown";
import { Button } from "@/components/ui/button";
import { FieldError, fieldClass } from "@/components/ui/field";
import { cn } from "@/lib/utils";

type Lang = "en" | "bn";

export function PostEditor({ lang, post }: { lang: string; post?: BlogPost }) {
  const { t } = useDash();
  const p = t.posts;
  const router = useRouter();
  const [state, action] = useActionState<ActionResult<{ id: string }>, FormData>(async (prev, formData) => {
    const result = await savePostAction(prev, formData);
    if (result.ok && !post && result.data) router.replace(`/${lang}/doctor/posts/${result.data.id}`);
    return result;
  }, { ok: false });
  const e = state.errors ?? {};
  const [body, setBody] = useState<Record<Lang, string>>({ en: post?.body.en ?? "", bn: post?.body.bn ?? "" });
  const [preview, setPreview] = useState<Record<Lang, boolean>>({ en: false, bn: false });
  const published = post?.status === "published";

  const pair = (name: "title" | "excerpt", label: string, hint?: string) => (
    <fieldset>
      <legend className="mb-1.5 text-sm font-medium">
        {label}
        {name === "title" ? <span className="text-hot"> *</span> : null}
        {hint ? <span className="ml-2 text-xs font-normal text-ink-faint">{hint}</span> : null}
      </legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {(["en", "bn"] as const).map((l) => (
          <div key={l}>
            <input
              name={`${name}${l === "en" ? "En" : "Bn"}`}
              defaultValue={post?.[name][l] ?? ""}
              required={name === "title" && l === "en"}
              lang={l}
              placeholder={l === "en" ? t.common.english : t.common.bengali}
              aria-label={`${label} (${l === "en" ? t.common.english : t.common.bengali})`}
              className={fieldClass(e[`${name}.${l}`], l === "bn" ? "bn" : undefined)}
            />
            <FieldError message={e[`${name}.${l}`]} />
          </div>
        ))}
      </div>
    </fieldset>
  );

  return (
    <form action={action} className="grid gap-6 xl:grid-cols-[1fr_320px]">
      <input type="hidden" name="id" value={post?.id ?? ""} />
      <div className="space-y-6">
        <Panel>
          <div className="space-y-5">
            {pair("title", p.postTitle)}
            {pair("excerpt", p.excerpt, p.excerptHint)}
          </div>
        </Panel>

        {(["en", "bn"] as const).map((l) => (
          <Panel key={l}>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-medium">
                {p.body} — {l === "en" ? t.common.english : t.common.bengali}
                {l === "en" ? <span className="text-hot"> *</span> : null}
              </p>
              <div className="flex border border-line">
                {([false, true] as const).map((isPreview) => (
                  <button
                    key={String(isPreview)}
                    type="button"
                    aria-pressed={preview[l] === isPreview}
                    onClick={() => setPreview((s) => ({ ...s, [l]: isPreview }))}
                    className={cn(
                      "h-8 px-3 font-display text-[0.72rem] font-semibold uppercase tracking-[0.08em]",
                      preview[l] === isPreview ? "bg-accent text-accent-ink" : "text-ink-mute hover:text-accent",
                    )}
                  >
                    {isPreview ? p.preview : p.write}
                  </button>
                ))}
              </div>
            </div>
            {/* The textarea stays mounted while previewing, so the value still posts. */}
            <textarea
              name={l === "en" ? "bodyEn" : "bodyBn"}
              value={body[l]}
              onChange={(ev) => setBody((s) => ({ ...s, [l]: ev.target.value }))}
              rows={16}
              lang={l}
              required={l === "en"}
              className={cn(fieldClass(e[`body.${l}`], cn("h-auto py-3 font-mono text-sm leading-relaxed", l === "bn" && "bn")), preview[l] && "hidden")}
            />
            {preview[l] ? (
              <div className={cn("min-h-40 border border-line bg-bg/60 p-5", l === "bn" && "bn")}>
                <Markdown source={body[l]} />
              </div>
            ) : null}
            <p className="mt-2 font-mono text-[0.7rem] text-ink-faint">{p.bodyHint}</p>
            <FieldError message={e[`body.${l}`]} />
          </Panel>
        ))}
      </div>

      <div className="space-y-6">
        <Panel>
          <div className="space-y-5">
            <ImageField label={p.cover} name="cover" preset="banner" aspect="aspect-video" defaultValue={post?.cover ?? null} hint={t.common.optional} />
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">
                {p.tags} <span className="text-xs font-normal text-ink-faint">{p.tagsHint}</span>
              </span>
              <input name="tags" defaultValue={post?.tags.join(", ") ?? ""} className={fieldClass()} />
            </label>
          </div>
        </Panel>
        <div className="flex flex-wrap items-center gap-2">
          <Submit name="intent" value="publish">
            <Send aria-hidden /> {published ? p.update : p.publish}
          </Submit>
          <Submit name="intent" value="draft" variant="outline">
            <Save aria-hidden /> {published ? p.unpublish : p.saveDraft}
          </Submit>
        </div>
        <FormMessage state={state} />
        {published && post ? (
          <Button asChild variant="ghost" size="sm">
            <Link href={`/${lang}/blog/${post.slug}`} target="_blank">
              <ExternalLink aria-hidden /> {p.view}
            </Link>
          </Button>
        ) : null}
        {post ? (
          <Button type="submit" formAction={deleteOwnPostAction} variant="ghost" size="sm" formNoValidate>
            <Trash2 aria-hidden /> {p.deletePost}
          </Button>
        ) : null}
        <input type="hidden" name="lang" value={lang} />
      </div>
    </form>
  );
}
