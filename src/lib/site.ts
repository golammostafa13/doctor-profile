/**
 * Site constants.
 *
 * Anything with a Bengali counterpart carries it here rather than in the
 * dictionaries: these are facts about the directory and its sponsor, not
 * interface strings, and the sitemap and metadata builders need them without a
 * locale in hand.
 */
export const site = {
  name: "Doctors Profile",
  nameBn: "ডক্টরস প্রোফাইল",
  tagline: "Specialist doctors in Bangladesh",
  taglineBn: "বাংলাদেশের বিশেষজ্ঞ চিকিৎসক",
  description:
    "A directory of specialist doctors in Bangladesh: verified profiles, qualifications, chamber addresses, visiting hours and appointment numbers. Free to search, in Bengali or English.",
  descriptionBn:
    "বাংলাদেশের বিশেষজ্ঞ চিকিৎসকদের ডিরেক্টরি: যাচাই করা প্রোফাইল, যোগ্যতা, চেম্বারের ঠিকানা, সময়সূচি ও অ্যাপয়েন্টমেন্ট নম্বর। বাংলা বা ইংরেজিতে, বিনামূল্যে।",
  /** No trailing slash. Overridden per deployment by NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Shown on the contact page when set. No default: an invented address is worse than none. */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",

  /**
   * The sponsor.
   *
   * Named here rather than in the dictionaries for the same reason as the
   * site's own name: it is a fact, not a translatable string, and the courtesy
   * credit needs it without a locale in hand.
   *
   * This is the *fallback*. `dp:settings.sponsor` overrides it from the admin
   * screen, so a campaign change does not need a deploy. The fallback exists
   * because a sponsor credit that vanishes when a cache blinks is a
   * contractual problem, not a UI problem.
   */
  sponsor: {
    product: "Cef-3 200",
    productBn: "সেফ-৩ ২০০",
    generic: "Cefixime Trihydrate 200 mg",
    genericBn: "সেফিক্সিম ট্রাইহাইড্রেট ২০০ মি.গ্রা.",
    company: "Square Pharmaceuticals PLC.",
    companyBn: "স্কয়ার ফার্মাসিউটিক্যালস পিএলসি.",
    /** Self-hosted: the CSP is img-src 'self', so a hotlink would not render. */
    logo: "/square-pharma.png",
    pack: "/cef-3.png",
  },
} as const;
