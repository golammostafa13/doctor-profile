// Demo blog posts, written for the demo roster. Served when no data store is
// configured, and copied into one by the seed (src/lib/data/seed.ts).
//
// General health information in plain language, each ending in "see a
// doctor" rather than a treatment plan: these are signed by invented doctors,
// so they must not read as specific medical advice from a real one.

import type { BlogPost } from "@/lib/schema/blog";

const day = 24 * 60 * 60 * 1000;
const base = Date.UTC(2026, 8, 25, 4, 0, 0);

export const demoPosts: BlogPost[] = [
  {
    id: "post_demo_01",
    slug: "fever-in-children-when-to-worry",
    title: { en: "Fever in children: when to worry", bn: "শিশুর জ্বর: কখন চিন্তা করবেন" },
    excerpt: {
      en: "Most fevers are the body doing its job. A few signs mean it is time to see a doctor today.",
      bn: "বেশিরভাগ জ্বরই শরীরের স্বাভাবিক প্রতিরোধ। কিছু লক্ষণ দেখলে আজই ডাক্তার দেখানো দরকার।",
    },
    body: {
      en: `A fever is not an illness in itself — it is the body fighting one. In most children it settles within two or three days.

## What you can do at home

- Keep your child drinking: water, oral saline, breast milk or soup.
- Dress them lightly and keep the room airy.
- Give paracetamol in the dose written for their **weight**, not their age.

## See a doctor the same day if

- your baby is under three months old and has any fever;
- the fever lasts more than **three days**;
- your child is unusually drowsy, will not drink, or has fewer wet nappies;
- there is a rash that does not fade when you press a glass on it;
- breathing is fast or noisy, or there is a fit.

> Trust your instinct. If your child seems very unwell to you, that is reason enough to come in.

During dengue season, a fever with body ache, vomiting or bleeding gums needs a blood test — do not wait it out.`,
      bn: `জ্বর নিজে কোনো রোগ নয় — এটি রোগের বিরুদ্ধে শরীরের লড়াই। বেশিরভাগ শিশুর জ্বর দুই-তিন দিনে কমে যায়।

## বাড়িতে যা করবেন

- শিশুকে বারবার পানি, ওরস্যালাইন, বুকের দুধ বা স্যুপ খাওয়ান।
- হালকা কাপড় পরান, ঘরে বাতাস চলাচল রাখুন।
- প্যারাসিটামল দিন শিশুর **ওজন** অনুযায়ী মাত্রায়, বয়স অনুযায়ী নয়।

## একই দিনে ডাক্তার দেখান যদি

- শিশুর বয়স তিন মাসের কম হয় এবং জ্বর থাকে;
- জ্বর **তিন দিনের** বেশি থাকে;
- শিশু অস্বাভাবিক ঝিমিয়ে থাকে বা কিছু খেতে না চায়;
- শ্বাস দ্রুত হয় বা খিঁচুনি হয়।

> আপনার মনে হলে শিশু খুব অসুস্থ — সেটাই আসার যথেষ্ট কারণ।

ডেঙ্গুর মৌসুমে জ্বরের সঙ্গে শরীর ব্যথা, বমি বা মাড়ি থেকে রক্ত পড়লে রক্ত পরীক্ষা করান — অপেক্ষা করবেন না।`,
    },
    cover: null,
    authorDoctorId: "doc_004",
    authorName: { en: "Dr. Sharmin Mondal", bn: "ডা. শারমিন মণ্ডল" },
    authorLinkNo: "258772416",
    tags: ["children", "fever", "dengue"],
    status: "published",
    publishedAt: base - 1 * day,
    createdAt: base - 1 * day,
    updatedAt: base - 1 * day,
  },
  {
    id: "post_demo_02",
    slug: "winter-air-and-your-lungs",
    title: { en: "Dhaka's winter air and your lungs", bn: "ঢাকার শীতের বাতাস ও আপনার ফুসফুস" },
    excerpt: {
      en: "Air quality drops every winter. Here is how to protect yourself — especially with asthma or COPD.",
      bn: "প্রতি শীতে বাতাসের মান খারাপ হয়। বিশেষ করে হাঁপানি বা সিওপিডি থাকলে কীভাবে সুরক্ষিত থাকবেন।",
    },
    body: {
      en: `From November to February, Dhaka's air is often among the most polluted in the world. Fine particles (PM2.5) reach deep into the lungs.

## Who is most at risk

Children, older people, and anyone with **asthma**, **COPD** or heart disease.

## Simple protection

1. Check the air quality index in the morning; on bad days, keep outdoor exercise short.
2. A well-fitted N95 mask filters far more than a cloth one.
3. Keep windows closed during the evening rush, when pollution peaks.
4. If you have an inhaler, carry it and use your preventer every day — not only when breathless.

## When to see a doctor

A cough lasting more than three weeks, breathlessness climbing stairs, or wheezing at night all deserve a check-up.`,
      bn: `নভেম্বর থেকে ফেব্রুয়ারি ঢাকার বাতাস প্রায়ই বিশ্বের সবচেয়ে দূষিতগুলোর একটি। সূক্ষ্ম কণা (পিএম২.৫) ফুসফুসের গভীরে পৌঁছায়।

## কারা বেশি ঝুঁকিতে

শিশু, বয়স্ক এবং যাঁদের **হাঁপানি**, **সিওপিডি** বা হৃদরোগ আছে।

## সহজ সুরক্ষা

1. সকালে বায়ুমান সূচক দেখে নিন; খারাপ দিনে বাইরে ব্যায়াম কম করুন।
2. ঠিকমতো পরা এন৯৫ মাস্ক কাপড়ের মাস্কের চেয়ে অনেক ভালো।
3. সন্ধ্যায় দূষণ বেশি থাকে — তখন জানালা বন্ধ রাখুন।
4. ইনহেলার থাকলে সঙ্গে রাখুন এবং প্রতিরোধক ওষুধ প্রতিদিন নিন।

## কখন ডাক্তার দেখাবেন

তিন সপ্তাহের বেশি কাশি, সিঁড়ি উঠতে শ্বাসকষ্ট বা রাতে বুকে শোঁ শোঁ শব্দ হলে পরীক্ষা করান।`,
    },
    cover: null,
    authorDoctorId: "doc_007",
    authorName: { en: "Dr. Mahfuza Uddin", bn: "ডা. মাহফুজা উদ্দিন" },
    authorLinkNo: "998100175",
    tags: ["lungs", "air quality", "asthma"],
    status: "published",
    publishedAt: base - 3 * day,
    createdAt: base - 3 * day,
    updatedAt: base - 3 * day,
  },
  {
    id: "post_demo_03",
    slug: "acidity-what-actually-helps",
    title: { en: "Acidity: what actually helps", bn: "অ্যাসিডিটি: আসলে যা কাজে দেয়" },
    excerpt: {
      en: "Heartburn is common, but daily antacids are not the answer. Small changes do more than you would think.",
      bn: "বুক জ্বালাপোড়া খুবই সাধারণ, কিন্তু রোজ অ্যান্টাসিড সমাধান নয়। ছোট পরিবর্তনই বেশি কাজ করে।",
    },
    body: {
      en: `Burning behind the breastbone after meals — "gas" or "acidity" — is one of the most common reasons people visit a clinic.

## Habits that help

- Eat your last meal at least **three hours** before lying down.
- Smaller meals, eaten slowly.
- Cut back on fried food, very spicy curries, tea on an empty stomach and smoking.
- Raise the head of the bed slightly if symptoms come at night.

## Be careful with self-medication

Acid-reducing tablets bought without advice are often taken for months. They can hide a problem that needs attention.

## Warning signs

See a doctor promptly for difficulty swallowing, weight loss, vomiting blood, black stools, or new symptoms after the age of 45.`,
      bn: `খাবারের পর বুকের মাঝখানে জ্বালাপোড়া — "গ্যাস" বা "অ্যাসিডিটি" — ক্লিনিকে আসার সবচেয়ে সাধারণ কারণগুলোর একটি।

## যে অভ্যাসগুলো কাজে দেয়

- শোয়ার অন্তত **তিন ঘণ্টা** আগে রাতের খাবার খান।
- অল্প অল্প করে, ধীরে খান।
- ভাজাপোড়া, অতিরিক্ত ঝাল, খালি পেটে চা ও ধূমপান কমান।
- রাতে সমস্যা হলে খাটের মাথার দিক একটু উঁচু করুন।

## নিজে নিজে ওষুধ খাওয়ায় সাবধান

পরামর্শ ছাড়া কেনা অ্যাসিড কমানোর ওষুধ অনেকে মাসের পর মাস খান — এতে গুরুতর সমস্যা চাপা পড়ে যেতে পারে।

## সতর্ক সংকেত

গিলতে কষ্ট, ওজন কমে যাওয়া, রক্তবমি, কালো পায়খানা বা ৪৫ বছরের পর নতুন উপসর্গ হলে দ্রুত ডাক্তার দেখান।`,
    },
    cover: null,
    authorDoctorId: "doc_013",
    authorName: { en: "Dr. Rokeya Rahman", bn: "ডা. রোকেয়া রহমান" },
    authorLinkNo: "300944823",
    tags: ["digestion", "acidity"],
    status: "published",
    publishedAt: base - 6 * day,
    createdAt: base - 6 * day,
    updatedAt: base - 6 * day,
  },
  {
    id: "post_demo_04",
    slug: "screens-and-childrens-eyes",
    title: { en: "Screens and children's eyes", bn: "স্ক্রিন ও শিশুর চোখ" },
    excerpt: {
      en: "Short-sightedness in children is rising fast. Time outdoors is the best-proven protection.",
      bn: "শিশুদের মধ্যে দূরের জিনিস ঝাপসা দেখার সমস্যা দ্রুত বাড়ছে। বাইরে সময় কাটানোই সবচেয়ে প্রমাণিত সুরক্ষা।",
    },
    body: {
      en: `More children now need glasses for distance than a generation ago. Long hours of close work — phones, tablets, books — play a part.

## The 20-20-20 rule

Every **20 minutes**, look at something **20 feet** away for **20 seconds**.

## Outdoors is medicine

Two hours a day in daylight is linked to less short-sightedness. A walk, a playground, a rooftop — it all counts.

## Signs your child needs an eye test

- sitting very close to the television;
- squinting or tilting the head;
- headaches after school;
- a teacher mentioning trouble reading the board.

A first eye check before starting school is a good idea for every child.`,
      bn: `এক প্রজন্ম আগের চেয়ে এখন অনেক বেশি শিশুর দূরের জন্য চশমা লাগে। ফোন, ট্যাব, বই — কাছের কাজে দীর্ঘ সময় এর একটি কারণ।

## ২০-২০-২০ নিয়ম

প্রতি **২০ মিনিট** পর **২০ ফুট** দূরের কিছুর দিকে **২০ সেকেন্ড** তাকান।

## বাইরে থাকাই ওষুধ

দিনে দুই ঘণ্টা দিনের আলোয় থাকলে এই সমস্যা কম হয়। হাঁটা, খেলার মাঠ, ছাদ — সবই কাজে দেয়।

## চোখ পরীক্ষা দরকার যদি

- টেলিভিশনের খুব কাছে বসে;
- চোখ কুঁচকে বা মাথা কাত করে দেখে;
- স্কুলের পর মাথাব্যথা হয়;
- শিক্ষক বলেন বোর্ডের লেখা পড়তে কষ্ট হয়।

স্কুলে ভর্তির আগে প্রতিটি শিশুর একবার চোখ পরীক্ষা করানো ভালো।`,
    },
    cover: null,
    authorDoctorId: "doc_002",
    authorName: { en: "Dr. Sabina Rahman", bn: "ডা. সাবিনা রহমান" },
    authorLinkNo: "907645533",
    tags: ["eyes", "children"],
    status: "published",
    publishedAt: base - 9 * day,
    createdAt: base - 9 * day,
    updatedAt: base - 9 * day,
  },
  {
    id: "post_demo_05",
    slug: "sunscreen-in-a-tropical-climate",
    title: { en: "Sunscreen in a tropical climate", bn: "গ্রীষ্মপ্রধান দেশে সানস্ক্রিন" },
    excerpt: {
      en: "Sun damage is not only a fair-skin problem. How to choose and use sunscreen in Bangladesh's heat.",
      bn: "রোদের ক্ষতি শুধু ফর্সা ত্বকের সমস্যা নয়। বাংলাদেশের গরমে কীভাবে সানস্ক্রিন বাছবেন ও ব্যবহার করবেন।",
    },
    body: {
      en: `Strong sun all year causes dark patches (melasma), early wrinkles and, over decades, skin cancer — in every skin tone.

## Choosing one

- **SPF 30 or more**, labelled "broad spectrum".
- Gel or "matte" textures suit humid weather and oily skin.

## Using it properly

1. Apply two finger-lengths for the face and neck.
2. Put it on 15 minutes before going out.
3. Reapply every two to three hours outdoors, and after sweating heavily.

An umbrella, a cap and staying in the shade between 11am and 3pm help as much as the cream.

See a dermatologist for any mole that changes shape, colour or size, or a sore that does not heal.`,
      bn: `সারা বছরের কড়া রোদে মুখে কালো দাগ (মেছতা), অকালে বলিরেখা এবং দীর্ঘমেয়াদে ত্বকের ক্যানসার হতে পারে — সব ধরনের ত্বকে।

## কীভাবে বাছবেন

- **এসপিএফ ৩০ বা বেশি**, "ব্রড স্পেকট্রাম" লেখা।
- আর্দ্র আবহাওয়া ও তৈলাক্ত ত্বকে জেল বা "ম্যাট" ধরনের ভালো।

## ঠিকভাবে ব্যবহার

1. মুখ ও গলার জন্য দুই আঙুল সমান পরিমাণ নিন।
2. বাইরে যাওয়ার ১৫ মিনিট আগে লাগান।
3. বাইরে থাকলে প্রতি দুই-তিন ঘণ্টা পর এবং বেশি ঘামলে আবার লাগান।

ছাতা, টুপি এবং সকাল ১১টা থেকে বিকেল ৩টা ছায়ায় থাকা ক্রিমের মতোই কাজে দেয়।

কোনো তিলের আকার, রং বা মাপ বদলালে অথবা ঘা না শুকালে চর্মরোগ বিশেষজ্ঞ দেখান।`,
    },
    cover: null,
    authorDoctorId: "doc_015",
    authorName: { en: "Dr. Shahidul Siddique", bn: "ডা. শহীদুল সিদ্দিক" },
    authorLinkNo: "622355990",
    tags: ["skin", "sun"],
    status: "published",
    publishedAt: base - 13 * day,
    createdAt: base - 13 * day,
    updatedAt: base - 13 * day,
  },
  {
    id: "post_demo_06",
    slug: "bleeding-gums-are-not-normal",
    title: { en: "Bleeding gums are not normal", bn: "মাড়ি থেকে রক্ত পড়া স্বাভাবিক নয়" },
    excerpt: {
      en: "A little pink in the sink is the earliest sign of gum disease — and the easiest stage to reverse.",
      bn: "ব্রাশ করার সময় একটু রক্ত মাড়ির রোগের প্রথম লক্ষণ — আর এ সময়েই সবচেয়ে সহজে সারানো যায়।",
    },
    body: {
      en: `Many people see blood when brushing and brush more gently, or stop. That is the opposite of what helps.

## Why gums bleed

Plaque at the gum line inflames the gum (gingivitis). Left alone, it can loosen teeth over the years.

## What to do

- Brush twice a day for **two minutes**, angling the brush toward the gum.
- Clean between the teeth once a day with floss or an interdental brush.
- Stop smoking and chewing betel leaf (paan) — both damage gums.

Bleeding usually settles within two weeks of careful cleaning. If it does not, or your gums are swollen or receding, book a dental check-up and a professional clean.`,
      bn: `অনেকে ব্রাশ করার সময় রক্ত দেখে আস্তে ব্রাশ করেন বা বন্ধ করে দেন। অথচ করা উচিত ঠিক উল্টোটা।

## মাড়ি থেকে রক্ত কেন পড়ে

মাড়ির কিনারে জমা প্লাক মাড়িতে প্রদাহ (জিনজিভাইটিস) করে। চিকিৎসা না করলে বছরের পর বছরে দাঁত নড়ে যেতে পারে।

## যা করবেন

- দিনে দুবার **দুই মিনিট** করে ব্রাশ করুন, ব্রাশ মাড়ির দিকে একটু কাত করে।
- দিনে একবার ফ্লস বা ইন্টারডেন্টাল ব্রাশ দিয়ে দাঁতের ফাঁক পরিষ্কার করুন।
- ধূমপান ও পান-জর্দা ছাড়ুন — দুটোই মাড়ির ক্ষতি করে।

যত্ন নিয়ে পরিষ্কার করলে সাধারণত দুই সপ্তাহে রক্ত পড়া কমে যায়। না কমলে বা মাড়ি ফুলে থাকলে ডেন্টাল চেকআপ করান।`,
    },
    cover: null,
    authorDoctorId: "doc_001",
    authorName: { en: "Dr. Nasrin Haque", bn: "ডা. নাসরিন হক" },
    authorLinkNo: "316899286",
    tags: ["teeth", "gums"],
    status: "published",
    publishedAt: base - 17 * day,
    createdAt: base - 17 * day,
    updatedAt: base - 17 * day,
  },
];
