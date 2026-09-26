// GENERATED FILE — do not edit by hand.
// Rebuild with: node scripts/build-fixtures.mjs
//
// The demo roster, served when no Redis is configured. Deterministic: the
// generator is seeded, so re-running produces identical output.
//
// The password hashes are real PBKDF2 hashes of the demo password printed in
// the README. That is safe because it is published — it is a demo credential,
// not a secret — and sign-in against fixtures is refused in production unless
// DEMO_MODE=1.

import type { Taxonomy } from "@/lib/schema/taxonomy";

export const demoTaxonomy: Taxonomy = {
  "rev": 1,
  "updatedAt": 1790380800000,
  "specialities": [
    {
      "id": "cardiologist",
      "name": {
        "en": "Cardiologist",
        "bn": "হৃদরোগ বিশেষজ্ঞ"
      },
      "order": 0
    },
    {
      "id": "neurologist",
      "name": {
        "en": "Neurologist",
        "bn": "স্নায়ুরোগ বিশেষজ্ঞ"
      },
      "order": 1
    },
    {
      "id": "gastroenterologist",
      "name": {
        "en": "Gastroenterologist",
        "bn": "গ্যাস্ট্রোএন্টেরোলজিস্ট"
      },
      "order": 2
    },
    {
      "id": "dermatologist",
      "name": {
        "en": "Dermatologist",
        "bn": "চর্মরোগ বিশেষজ্ঞ"
      },
      "order": 3
    },
    {
      "id": "orthopaedic-surgeon",
      "name": {
        "en": "Orthopaedic Surgeon",
        "bn": "অর্থোপেডিক সার্জন"
      },
      "order": 4
    },
    {
      "id": "paediatrician",
      "name": {
        "en": "Paediatrician",
        "bn": "শিশুরোগ বিশেষজ্ঞ"
      },
      "order": 5
    },
    {
      "id": "gynaecologist",
      "name": {
        "en": "Gynaecologist & Obstetrician",
        "bn": "স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
      },
      "order": 6
    },
    {
      "id": "nephrologist",
      "name": {
        "en": "Nephrologist",
        "bn": "কিডনি রোগ বিশেষজ্ঞ"
      },
      "order": 7
    },
    {
      "id": "endocrinologist",
      "name": {
        "en": "Endocrinologist",
        "bn": "হরমোন ও ডায়াবেটিস বিশেষজ্ঞ"
      },
      "order": 8
    },
    {
      "id": "pulmonologist",
      "name": {
        "en": "Pulmonologist",
        "bn": "বক্ষব্যাধি বিশেষজ্ঞ"
      },
      "order": 9
    },
    {
      "id": "oncologist",
      "name": {
        "en": "Oncologist",
        "bn": "ক্যান্সার বিশেষজ্ঞ"
      },
      "order": 10
    },
    {
      "id": "psychiatrist",
      "name": {
        "en": "Psychiatrist",
        "bn": "মানসিক রোগ বিশেষজ্ঞ"
      },
      "order": 11
    },
    {
      "id": "ent-specialist",
      "name": {
        "en": "ENT Specialist",
        "bn": "নাক-কান-গলা বিশেষজ্ঞ"
      },
      "order": 12
    },
    {
      "id": "ophthalmologist",
      "name": {
        "en": "Ophthalmologist",
        "bn": "চক্ষু বিশেষজ্ঞ"
      },
      "order": 13
    },
    {
      "id": "urologist",
      "name": {
        "en": "Urologist",
        "bn": "মূত্ররোগ বিশেষজ্ঞ"
      },
      "order": 14
    },
    {
      "id": "rheumatologist",
      "name": {
        "en": "Rheumatologist",
        "bn": "বাতরোগ বিশেষজ্ঞ"
      },
      "order": 15
    },
    {
      "id": "general-surgeon",
      "name": {
        "en": "General Surgeon",
        "bn": "জেনারেল সার্জন"
      },
      "order": 16
    },
    {
      "id": "hepatologist",
      "name": {
        "en": "Hepatologist",
        "bn": "লিভার রোগ বিশেষজ্ঞ"
      },
      "order": 17
    },
    {
      "id": "haematologist",
      "name": {
        "en": "Haematologist",
        "bn": "রক্তরোগ বিশেষজ্ঞ"
      },
      "order": 18
    },
    {
      "id": "dentist",
      "name": {
        "en": "Dental Surgeon",
        "bn": "ডেন্টাল সার্জন"
      },
      "order": 19
    }
  ],
  "hospitals": [
    {
      "id": "square-hospitals",
      "name": {
        "en": "Square Hospitals Ltd.",
        "bn": "স্কয়ার হাসপাতাল লিমিটেড"
      },
      "order": 0
    },
    {
      "id": "united-hospital",
      "name": {
        "en": "United Hospital Limited",
        "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
      },
      "order": 1
    },
    {
      "id": "evercare-dhaka",
      "name": {
        "en": "Evercare Hospital Dhaka",
        "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
      },
      "order": 2
    },
    {
      "id": "labaid-specialized",
      "name": {
        "en": "Labaid Specialized Hospital",
        "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
      },
      "order": 3
    },
    {
      "id": "ibn-sina",
      "name": {
        "en": "Ibn Sina Specialized Hospital",
        "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
      },
      "order": 4
    },
    {
      "id": "bsmmu",
      "name": {
        "en": "Bangabandhu Sheikh Mujib Medical University",
        "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
      },
      "order": 5
    },
    {
      "id": "dhaka-medical",
      "name": {
        "en": "Dhaka Medical College Hospital",
        "bn": "ঢাকা মেডিকেল কলেজ হাসপাতাল"
      },
      "order": 6
    },
    {
      "id": "popular-diagnostic",
      "name": {
        "en": "Popular Diagnostic Centre",
        "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
      },
      "order": 7
    },
    {
      "id": "bangladesh-specialized",
      "name": {
        "en": "Bangladesh Specialized Hospital",
        "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
      },
      "order": 8
    },
    {
      "id": "national-heart",
      "name": {
        "en": "National Heart Foundation Hospital",
        "bn": "জাতীয় হৃদরোগ ফাউন্ডেশন হাসপাতাল"
      },
      "order": 9
    },
    {
      "id": "chittagong-medical",
      "name": {
        "en": "Chattogram Medical College Hospital",
        "bn": "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল"
      },
      "order": 10
    },
    {
      "id": "imperial-chattogram",
      "name": {
        "en": "Imperial Hospital Limited",
        "bn": "ইম্পেরিয়াল হাসপাতাল লিমিটেড"
      },
      "order": 11
    },
    {
      "id": "max-chattogram",
      "name": {
        "en": "Max Hospital & Diagnostic",
        "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
      },
      "order": 12
    },
    {
      "id": "rajshahi-medical",
      "name": {
        "en": "Rajshahi Medical College Hospital",
        "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
      },
      "order": 13
    },
    {
      "id": "islami-bank-rajshahi",
      "name": {
        "en": "Islami Bank Medical College Hospital",
        "bn": "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল"
      },
      "order": 14
    },
    {
      "id": "khulna-medical",
      "name": {
        "en": "Khulna Medical College Hospital",
        "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
      },
      "order": 15
    },
    {
      "id": "gazi-medical",
      "name": {
        "en": "Gazi Medical College Hospital",
        "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
      },
      "order": 16
    },
    {
      "id": "sylhet-mag-osmani",
      "name": {
        "en": "Sylhet MAG Osmani Medical College Hospital",
        "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
      },
      "order": 17
    },
    {
      "id": "mount-adora",
      "name": {
        "en": "Mount Adora Hospital",
        "bn": "মাউন্ট এডোরা হাসপাতাল"
      },
      "order": 18
    },
    {
      "id": "rangpur-medical",
      "name": {
        "en": "Rangpur Medical College Hospital",
        "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
      },
      "order": 19
    },
    {
      "id": "barishal-sher-e-bangla",
      "name": {
        "en": "Sher-e-Bangla Medical College Hospital",
        "bn": "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল"
      },
      "order": 20
    },
    {
      "id": "mymensingh-medical",
      "name": {
        "en": "Mymensingh Medical College Hospital",
        "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
      },
      "order": 21
    },
    {
      "id": "comilla-medical",
      "name": {
        "en": "Cumilla Medical College Hospital",
        "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
      },
      "order": 22
    },
    {
      "id": "bogura-shaheed-ziaur",
      "name": {
        "en": "Shaheed Ziaur Rahman Medical College Hospital",
        "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
      },
      "order": 23
    },
    {
      "id": "faridpur-medical",
      "name": {
        "en": "Faridpur Medical College Hospital",
        "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
      },
      "order": 24
    }
  ],
  "locations": [
    {
      "id": "dhaka",
      "name": {
        "en": "Dhaka",
        "bn": "ঢাকা"
      },
      "order": 0
    },
    {
      "id": "chattogram",
      "name": {
        "en": "Chattogram",
        "bn": "চট্টগ্রাম"
      },
      "order": 1
    },
    {
      "id": "rajshahi",
      "name": {
        "en": "Rajshahi",
        "bn": "রাজশাহী"
      },
      "order": 2
    },
    {
      "id": "khulna",
      "name": {
        "en": "Khulna",
        "bn": "খুলনা"
      },
      "order": 3
    },
    {
      "id": "sylhet",
      "name": {
        "en": "Sylhet",
        "bn": "সিলেট"
      },
      "order": 4
    },
    {
      "id": "rangpur",
      "name": {
        "en": "Rangpur",
        "bn": "রংপুর"
      },
      "order": 5
    },
    {
      "id": "barishal",
      "name": {
        "en": "Barishal",
        "bn": "বরিশাল"
      },
      "order": 6
    },
    {
      "id": "mymensingh",
      "name": {
        "en": "Mymensingh",
        "bn": "ময়মনসিংহ"
      },
      "order": 7
    },
    {
      "id": "cumilla",
      "name": {
        "en": "Cumilla",
        "bn": "কুমিল্লা"
      },
      "order": 8
    },
    {
      "id": "bogura",
      "name": {
        "en": "Bogura",
        "bn": "বগুড়া"
      },
      "order": 9
    },
    {
      "id": "faridpur",
      "name": {
        "en": "Faridpur",
        "bn": "ফরিদপুর"
      },
      "order": 10
    },
    {
      "id": "jashore",
      "name": {
        "en": "Jashore",
        "bn": "যশোর"
      },
      "order": 11
    },
    {
      "id": "narayanganj",
      "name": {
        "en": "Narayanganj",
        "bn": "নারায়ণগঞ্জ"
      },
      "order": 12
    },
    {
      "id": "gazipur",
      "name": {
        "en": "Gazipur",
        "bn": "গাজীপুর"
      },
      "order": 13
    },
    {
      "id": "dinajpur",
      "name": {
        "en": "Dinajpur",
        "bn": "দিনাজপুর"
      },
      "order": 14
    }
  ]
};
