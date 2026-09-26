"use client";

import { useState } from "react";
import { Check, Download, Phone, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { localePath, type Locale } from "@/lib/i18n/config";
import { textClass } from "@/lib/i18n/content";

/**
 * Appointment, Save Contact and Share.
 *
 * The only client JavaScript on a profile page, and each button degrades to
 * something sensible: the phone is a real `tel:` link, the vCard is a real
 * download URL, and share falls back to copying the address when the Web Share
 * API is absent (it is, on every desktop browser but Safari).
 */
export function ProfileActions({
  lang,
  linkNo,
  phone,
  strings,
}: {
  lang: Locale;
  linkNo: string;
  phone?: string;
  strings: {
    appointment: string;
    saveContact: string;
    share: string;
    copied: string;
  };
}) {
  const [copied, setCopied] = useState(false);
  const bn = textClass(lang);

  async function share() {
    const url = `${window.location.origin}${localePath(lang, `/doctors/${linkNo}`)}`;
    // navigator.share must be called from the gesture, and it rejects when the
    // sheet is dismissed — which is a normal outcome, not an error worth
    // reporting, hence the silent fall-through to copying.
    if (navigator.share) {
      try {
        await navigator.share({ url, title: document.title });
        return;
      } catch {
        /* dismissed, or unsupported for this payload */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked; the address bar still has the URL */
    }
  }

  return (
    <div className="mt-6 flex flex-wrap gap-2.5">
      {phone ? (
        <Button asChild className={bn}>
          <a href={`tel:${phone}`}>
            <Phone /> {strings.appointment}
          </a>
        </Button>
      ) : null}

      <Button asChild variant="soft" className={bn}>
        {/* A real URL, so it works with right-click-save and on a phone. */}
        <a href={`/api/vcard/${linkNo}`} download>
          <Download /> {strings.saveContact}
        </a>
      </Button>

      <Button variant="outline" className={bn} onClick={share}>
        {copied ? <Check /> : <Share2 />}
        {copied ? strings.copied : strings.share}
      </Button>
    </div>
  );
}
