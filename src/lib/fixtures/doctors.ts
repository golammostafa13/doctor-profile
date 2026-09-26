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

import type { DoctorRecord } from "@/lib/schema/doctor";

export const DEMO_PASSWORD = "demo-doctor-2026";

export const demoDoctors: DoctorRecord[] = [
  {
    "id": "doc_001",
    "linkNo": "316899286",
    "slug": "nasrin-haque",
    "email": "nasrin.haque@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$okO1Hl6CZRTMH182CZRt7Q==$OEzVt5Hd8eAfyOeAxF06wZZkpCwNiT80neUyxGlfIOI=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": true,
    "order": 100,
    "name": {
      "en": "Dr. Nasrin Haque",
      "bn": "ডা. নাসরিন হক"
    },
    "speciality": {
      "en": "Dental Surgeon",
      "bn": "ডেন্টাল সার্জন"
    },
    "specialityIds": [
      "dentist"
    ],
    "designation": {
      "en": "Senior Consultant, Dental Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, ডেন্টাল সার্জন"
    },
    "workplace": {
      "en": "Shaheed Ziaur Rahman Medical College Hospital",
      "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Nasrin Haque is a dental surgeon with 24 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নাসরিন হক একজন ডেন্টাল সার্জন, বাংলাদেশে 24 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-95051",
    "yearsExperience": 24,
    "patientsServed": 11000,
    "photo": {
      "url": "/demo/photos/f-01.webp",
      "width": 480,
      "height": 480,
      "hash": "130cac0c52ca27b0",
      "bytes": 10518
    },
    "chambers": [
      {
        "id": "ch_doc_001_1",
        "hospital": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Bogura",
          "bn": "২১ শ্যামলী, মিরপুর রোড, বগুড়া"
        },
        "hospitalId": "bogura-shaheed-ziaur",
        "locationId": "bogura",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01499418027",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_001_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 1992,
        "yearTo": 1997,
        "order": 0
      },
      {
        "id": "ed_doc_001_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1998,
        "yearTo": 2002,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_001_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Bogura",
          "bn": "বগুড়া"
        },
        "yearFrom": 2003,
        "current": true,
        "order": 0
      }
    ],
    "awards": [
      {
        "id": "aw_doc_001_1",
        "title": {
          "en": "National Dental Surgeon Excellence Award",
          "bn": "জাতীয় ডেন্টাল সার্জন শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2018,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_001_1",
        "subject": {
          "en": "Advanced Dental Surgeon Training",
          "bn": "উন্নত ডেন্টাল সার্জন প্রশিক্ষণ"
        },
        "country": {
          "en": "United Kingdom",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "2 years",
          "bn": ""
        },
        "year": 2021,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_001_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in dental surgeon practice: a district cohort",
          "bn": "ডেন্টাল সার্জন চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2025-05-26",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_001_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in dental surgeon care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় ডেন্টাল সার্জন সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2024-04-22",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "International fellowship training",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Ultrasonography",
      "Chronic disease management",
      "Post-operative rehabilitation",
      "Endoscopic procedures"
    ],
    "achievements": [
      "Established a district-level screening programme",
      "Trained junior consultants in advanced procedures",
      "Published in a peer-reviewed international journal"
    ],
    "social": {
      "facebook": "https://www.facebook.com/nasrin-haque"
    },
    "publicPhone": "01967727471",
    "publicEmail": "nasrin.haque@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "21 Shyamoli, Mirpur Road, Bogura",
      "bn": "২১ শ্যামলী, মিরপুর রোড, বগুড়া"
    },
    "hospitalIds": [
      "bogura-shaheed-ziaur"
    ],
    "locationIds": [
      "bogura"
    ],
    "createdAt": 1781740800000,
    "updatedAt": 1790020800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_002",
    "linkNo": "907645533",
    "slug": "sabina-rahman",
    "email": "sabina.rahman@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$F8BrCvNI3RVRfxGBX5hn7w==$loH1cgzCMdngUe8+L656+45iA3HX0anM0x+wTpDYJyU=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": true,
    "order": 101,
    "name": {
      "en": "Dr. Sabina Rahman",
      "bn": "ডা. সাবিনা রহমান"
    },
    "speciality": {
      "en": "Ophthalmologist",
      "bn": "চক্ষু বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ophthalmologist"
    ],
    "designation": {
      "en": "Senior Consultant, Ophthalmologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চক্ষু বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Cumilla Medical College Hospital",
      "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Medicine)"
    ],
    "about": {
      "en": "Dr. Sabina Rahman is a ophthalmologist with 15 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. সাবিনা রহমান একজন চক্ষু বিশেষজ্ঞ, বাংলাদেশে 15 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-45621",
    "yearsExperience": 15,
    "patientsServed": 25000,
    "photo": {
      "url": "/demo/photos/f-02.webp",
      "width": 480,
      "height": 480,
      "hash": "af7dc084a2d825cf",
      "bytes": 8502
    },
    "chambers": [
      {
        "id": "ch_doc_002_1",
        "hospital": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Cumilla",
          "bn": "জিইসি মোড়, নাসিরাবাদ, কুমিল্লা"
        },
        "hospitalId": "comilla-medical",
        "locationId": "cumilla",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01999342555",
        "order": 0
      },
      {
        "id": "ch_doc_002_2",
        "hospital": {
          "en": "United Hospital Limited",
          "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Dhaka",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, ঢাকা"
        },
        "hospitalId": "united-hospital",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01564802780",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_002_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Chattogram Medical College",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ"
        },
        "yearFrom": 2001,
        "yearTo": 2006,
        "order": 0
      },
      {
        "id": "ed_doc_002_2",
        "degree": {
          "en": "FCPS (Medicine)",
          "bn": "FCPS (Medicine)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2007,
        "yearTo": 2011,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_002_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Cumilla",
          "bn": "কুমিল্লা"
        },
        "yearFrom": 2012,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_002_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "United Hospital Limited",
          "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2016,
        "yearTo": 2019,
        "current": false,
        "order": 1
      }
    ],
    "awards": [
      {
        "id": "aw_doc_002_1",
        "title": {
          "en": "National Ophthalmologist Excellence Award",
          "bn": "জাতীয় চক্ষু বিশেষজ্ঞ শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2020,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_002_1",
        "subject": {
          "en": "Advanced Ophthalmologist Training",
          "bn": "উন্নত চক্ষু বিশেষজ্ঞ প্রশিক্ষণ"
        },
        "country": {
          "en": "Thailand",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "1 year",
          "bn": ""
        },
        "year": 2015,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_002_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in ophthalmologist practice: a district cohort",
          "bn": "চক্ষু বিশেষজ্ঞ চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2024-11-16",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_002_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in ophthalmologist care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় চক্ষু বিশেষজ্ঞ সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2020-08-13",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "15+ years of clinical practice",
      "Advanced Cardiac Life Support (ACLS) certified",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Ultrasonography",
      "Paediatric care",
      "Emergency management",
      "Clinical research",
      "Endoscopic procedures",
      "Chronic disease management"
    ],
    "achievements": [
      "Led a hospital quality-improvement initiative",
      "Trained junior consultants in advanced procedures",
      "Published in a peer-reviewed international journal"
    ],
    "social": {},
    "publicPhone": "01699237805",
    "publicEmail": "sabina.rahman@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Cumilla",
      "bn": "জিইসি মোড়, নাসিরাবাদ, কুমিল্লা"
    },
    "hospitalIds": [
      "comilla-medical",
      "united-hospital"
    ],
    "locationIds": [
      "cumilla",
      "dhaka"
    ],
    "createdAt": 1781827200000,
    "updatedAt": 1790024400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_003",
    "linkNo": "660823015",
    "slug": "ashraful-sultana",
    "email": "ashraful.sultana@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$Q9SP0wKFuBZAjbLDOE73PQ==$2zDZfR01pMUwMOaOKEXNCeN510sl1ji0ZAT0G428zwA=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": true,
    "order": 102,
    "name": {
      "en": "Dr. Ashraful Sultana",
      "bn": "ডা. আশরাফুল সুলতানা"
    },
    "speciality": {
      "en": "Nephrologist",
      "bn": "কিডনি রোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "nephrologist"
    ],
    "designation": {
      "en": "Senior Consultant, Nephrologist",
      "bn": "সিনিয়র কনসালট্যান্ট, কিডনি রোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Imperial Hospital Limited",
      "bn": "ইম্পেরিয়াল হাসপাতাল লিমিটেড"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Ashraful Sultana is a nephrologist with 16 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. আশরাফুল সুলতানা একজন কিডনি রোগ বিশেষজ্ঞ, বাংলাদেশে 16 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-78916",
    "yearsExperience": 16,
    "patientsServed": 48000,
    "photo": {
      "url": "/demo/photos/m-01.webp",
      "width": 480,
      "height": 480,
      "hash": "f2c01a76a10d6da5",
      "bytes": 8182
    },
    "chambers": [
      {
        "id": "ch_doc_003_1",
        "hospital": {
          "en": "Imperial Hospital Limited",
          "bn": "ইম্পেরিয়াল হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Chattogram",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, চট্টগ্রাম"
        },
        "hospitalId": "imperial-chattogram",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01392195246",
        "order": 0
      },
      {
        "id": "ch_doc_003_2",
        "hospital": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Dhaka",
          "bn": "স্টেশন রোড, কোতোয়ালি, ঢাকা"
        },
        "hospitalId": "labaid-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01432624226",
        "order": 1
      },
      {
        "id": "ch_doc_003_3",
        "hospital": {
          "en": "Popular Diagnostic Centre",
          "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Dhaka",
          "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
        },
        "hospitalId": "popular-diagnostic",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01662923419",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_003_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 2000,
        "yearTo": 2005,
        "order": 0
      },
      {
        "id": "ed_doc_003_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2006,
        "yearTo": 2010,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_003_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Imperial Hospital Limited",
          "bn": "ইম্পেরিয়াল হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2011,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_003_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2015,
        "yearTo": 2018,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_003_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Popular Diagnostic Centre",
          "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2019,
        "yearTo": 2022,
        "current": false,
        "order": 2
      }
    ],
    "awards": [
      {
        "id": "aw_doc_003_1",
        "title": {
          "en": "National Nephrologist Excellence Award",
          "bn": "জাতীয় কিডনি রোগ বিশেষজ্ঞ শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2025,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_003_1",
        "subject": {
          "en": "Advanced Nephrologist Training",
          "bn": "উন্নত কিডনি রোগ বিশেষজ্ঞ প্রশিক্ষণ"
        },
        "country": {
          "en": "Singapore",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "2 years",
          "bn": ""
        },
        "year": 2020,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_003_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in nephrologist practice: a district cohort",
          "bn": "কিডনি রোগ বিশেষজ্ঞ চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2021-03-09",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_003_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in nephrologist care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় কিডনি রোগ বিশেষজ্ঞ সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2023-06-26",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "16+ years of clinical practice",
      "Member, Bangladesh Medical Association",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Minimally invasive surgery",
      "Preventive care",
      "Emergency management",
      "Ultrasonography",
      "Post-operative rehabilitation",
      "Interventional procedures",
      "Diagnostic imaging"
    ],
    "achievements": [
      "Trained junior consultants in advanced procedures",
      "Published in a peer-reviewed international journal",
      "Developed a follow-up protocol adopted department-wide"
    ],
    "social": {},
    "publicPhone": "01712082708",
    "publicEmail": "ashraful.sultana@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Plot 81, Block E, Bashundhara, Chattogram",
      "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, চট্টগ্রাম"
    },
    "hospitalIds": [
      "imperial-chattogram",
      "labaid-specialized",
      "popular-diagnostic"
    ],
    "locationIds": [
      "chattogram",
      "dhaka"
    ],
    "createdAt": 1781913600000,
    "updatedAt": 1790028000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_004",
    "linkNo": "258772416",
    "slug": "sharmin-mondal",
    "email": "sharmin.mondal@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$n2tLQNdtgEnENzJGsKIHpQ==$Hk7nzkRtW7JpnwEumL18nhHVHv2K2bt3Z3djE3zhyiQ=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": true,
    "order": 103,
    "name": {
      "en": "Dr. Sharmin Mondal",
      "bn": "ডা. শারমিন মণ্ডল"
    },
    "speciality": {
      "en": "Paediatrician",
      "bn": "শিশুরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "paediatrician"
    ],
    "designation": {
      "en": "Senior Consultant, Paediatrician",
      "bn": "সিনিয়র কনসালট্যান্ট, শিশুরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Gazi Medical College Hospital",
      "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Surgery)",
      "MS"
    ],
    "about": {
      "en": "Dr. Sharmin Mondal is a paediatrician with 26 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. শারমিন মণ্ডল একজন শিশুরোগ বিশেষজ্ঞ, বাংলাদেশে 26 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-66096",
    "yearsExperience": 26,
    "patientsServed": 26000,
    "photo": {
      "url": "/demo/photos/f-03.webp",
      "width": 480,
      "height": 480,
      "hash": "e5187cd6939dc068",
      "bytes": 6204
    },
    "chambers": [
      {
        "id": "ch_doc_004_1",
        "hospital": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Khulna",
          "bn": "স্টেশন রোড, কোতোয়ালি, খুলনা"
        },
        "hospitalId": "gazi-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01790788779",
        "order": 0
      },
      {
        "id": "ch_doc_004_2",
        "hospital": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Rangpur",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, রংপুর"
        },
        "hospitalId": "rangpur-medical",
        "locationId": "rangpur",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01939401722",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_004_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 1990,
        "yearTo": 1995,
        "order": 0
      },
      {
        "id": "ed_doc_004_2",
        "degree": {
          "en": "FCPS (Surgery)",
          "bn": "FCPS (Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1996,
        "yearTo": 2000,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_004_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2001,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_004_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rangpur",
          "bn": "রংপুর"
        },
        "yearFrom": 2005,
        "yearTo": 2008,
        "current": false,
        "order": 1
      }
    ],
    "awards": [
      {
        "id": "aw_doc_004_1",
        "title": {
          "en": "National Paediatrician Excellence Award",
          "bn": "জাতীয় শিশুরোগ বিশেষজ্ঞ শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2020,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_004_1",
        "subject": {
          "en": "Advanced Paediatrician Training",
          "bn": "উন্নত শিশুরোগ বিশেষজ্ঞ প্রশিক্ষণ"
        },
        "country": {
          "en": "United Kingdom",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "6 months",
          "bn": ""
        },
        "year": 2014,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_004_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in paediatrician practice: a district cohort",
          "bn": "শিশুরোগ বিশেষজ্ঞ চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2025-03-10",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_004_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in paediatrician care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় শিশুরোগ বিশেষজ্ঞ সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2022-12-14",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "Advanced Cardiac Life Support (ACLS) certified",
      "26+ years of clinical practice"
    ],
    "skills": [
      "Clinical research",
      "Endoscopic procedures",
      "Diagnostic imaging",
      "Emergency management"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide",
      "Established a district-level screening programme",
      "Led a hospital quality-improvement initiative"
    ],
    "social": {
      "facebook": "https://www.facebook.com/sharmin-mondal"
    },
    "publicPhone": "01489335684",
    "publicEmail": "sharmin.mondal@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Khulna",
      "bn": "স্টেশন রোড, কোতোয়ালি, খুলনা"
    },
    "hospitalIds": [
      "gazi-medical",
      "rangpur-medical"
    ],
    "locationIds": [
      "khulna",
      "rangpur"
    ],
    "createdAt": 1782000000000,
    "updatedAt": 1790031600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_005",
    "linkNo": "978767239",
    "slug": "rokeya-akter",
    "email": "rokeya.akter@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$EsfKh5F7VOjLrjZonSMfjQ==$HfeAo1IzprD2Zjc0+iLRcs/2MNyBCJjZEO/kOb9tSTg=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": true,
    "order": 104,
    "name": {
      "en": "Dr. Rokeya Akter",
      "bn": "ডা. রোকেয়া আক্তার"
    },
    "speciality": {
      "en": "Paediatrician",
      "bn": "শিশুরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "paediatrician"
    ],
    "designation": {
      "en": "Senior Consultant, Paediatrician",
      "bn": "সিনিয়র কনসালট্যান্ট, শিশুরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "National Heart Foundation Hospital",
      "bn": "জাতীয় হৃদরোগ ফাউন্ডেশন হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MRCP (UK)"
    ],
    "about": {
      "en": "Dr. Rokeya Akter is a paediatrician with 16 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রোকেয়া আক্তার একজন শিশুরোগ বিশেষজ্ঞ, বাংলাদেশে 16 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-85201",
    "yearsExperience": 16,
    "patientsServed": 28000,
    "photo": {
      "url": "/demo/photos/f-04.webp",
      "width": 480,
      "height": 480,
      "hash": "ffbcd43f464bae4c",
      "bytes": 16510
    },
    "chambers": [
      {
        "id": "ch_doc_005_1",
        "hospital": {
          "en": "National Heart Foundation Hospital",
          "bn": "জাতীয় হৃদরোগ ফাউন্ডেশন হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Dhaka",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
        },
        "hospitalId": "national-heart",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01836896521",
        "order": 0
      },
      {
        "id": "ch_doc_005_2",
        "hospital": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Dhaka",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
        },
        "hospitalId": "labaid-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01669081374",
        "order": 1
      },
      {
        "id": "ch_doc_005_3",
        "hospital": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Dhaka",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
        },
        "hospitalId": "bsmmu",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01762719646",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_005_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 2000,
        "yearTo": 2005,
        "order": 0
      },
      {
        "id": "ed_doc_005_2",
        "degree": {
          "en": "MRCP (UK)",
          "bn": "MRCP (UK)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2006,
        "yearTo": 2010,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_005_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "National Heart Foundation Hospital",
          "bn": "জাতীয় হৃদরোগ ফাউন্ডেশন হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2011,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_005_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2015,
        "yearTo": 2018,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_005_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2019,
        "yearTo": 2022,
        "current": false,
        "order": 2
      }
    ],
    "awards": [
      {
        "id": "aw_doc_005_1",
        "title": {
          "en": "National Paediatrician Excellence Award",
          "bn": "জাতীয় শিশুরোগ বিশেষজ্ঞ শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2020,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_005_1",
        "subject": {
          "en": "Advanced Paediatrician Training",
          "bn": "উন্নত শিশুরোগ বিশেষজ্ঞ প্রশিক্ষণ"
        },
        "country": {
          "en": "United Kingdom",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "1 year",
          "bn": ""
        },
        "year": 2021,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_005_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in paediatrician practice: a district cohort",
          "bn": "শিশুরোগ বিশেষজ্ঞ চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2021-12-13",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_005_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in paediatrician care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় শিশুরোগ বিশেষজ্ঞ সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2025-02-17",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "Member, Bangladesh Medical Association",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Clinical research",
      "Chronic disease management",
      "Endoscopic procedures",
      "Minimally invasive surgery",
      "Emergency management"
    ],
    "achievements": [
      "Led a hospital quality-improvement initiative",
      "Presented at a national medical conference",
      "Trained junior consultants in advanced procedures"
    ],
    "social": {},
    "publicPhone": "01811985354",
    "publicEmail": "rokeya.akter@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Zindabazar, Main Road, Dhaka",
      "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
    },
    "hospitalIds": [
      "national-heart",
      "labaid-specialized",
      "bsmmu"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1782086400000,
    "updatedAt": 1790035200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_006",
    "linkNo": "273432324",
    "slug": "rafiqul-rahman",
    "email": "rafiqul.rahman@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$UnUhBZSLewZvkf481n//mg==$F6QndwGOiTzQ9JW5s37QIXrKrknb1WHMUCmx50otngA=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": true,
    "order": 105,
    "name": {
      "en": "Dr. Rafiqul Rahman",
      "bn": "ডা. রফিকুল রহমান"
    },
    "speciality": {
      "en": "Paediatrician",
      "bn": "শিশুরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "paediatrician"
    ],
    "designation": {
      "en": "Senior Consultant, Paediatrician",
      "bn": "সিনিয়র কনসালট্যান্ট, শিশুরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Evercare Hospital Dhaka",
      "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
    },
    "degrees": [
      "MBBS",
      "FCPS (Medicine)"
    ],
    "about": {
      "en": "Dr. Rafiqul Rahman is a paediatrician with 12 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রফিকুল রহমান একজন শিশুরোগ বিশেষজ্ঞ, বাংলাদেশে 12 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-65625",
    "yearsExperience": 12,
    "patientsServed": 46000,
    "photo": {
      "url": "/demo/photos/m-02.webp",
      "width": 480,
      "height": 480,
      "hash": "04249b8c5f88dd6e",
      "bytes": 7166
    },
    "chambers": [
      {
        "id": "ch_doc_006_1",
        "hospital": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "address": {
          "en": "Station Road, Kotwali, Dhaka",
          "bn": "স্টেশন রোড, কোতোয়ালি, ঢাকা"
        },
        "hospitalId": "evercare-dhaka",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01866739634",
        "order": 0
      },
      {
        "id": "ch_doc_006_2",
        "hospital": {
          "en": "Chattogram Medical College Hospital",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Chattogram",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, চট্টগ্রাম"
        },
        "hospitalId": "chittagong-medical",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01940188174",
        "order": 1
      },
      {
        "id": "ch_doc_006_3",
        "hospital": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Khulna",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, খুলনা"
        },
        "hospitalId": "gazi-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01977992677",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_006_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 2004,
        "yearTo": 2009,
        "order": 0
      },
      {
        "id": "ed_doc_006_2",
        "degree": {
          "en": "FCPS (Medicine)",
          "bn": "FCPS (Medicine)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2010,
        "yearTo": 2014,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_006_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2015,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_006_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Chattogram Medical College Hospital",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2019,
        "yearTo": 2022,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_006_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2023,
        "yearTo": 2026,
        "current": false,
        "order": 2
      }
    ],
    "awards": [
      {
        "id": "aw_doc_006_1",
        "title": {
          "en": "National Paediatrician Excellence Award",
          "bn": "জাতীয় শিশুরোগ বিশেষজ্ঞ শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2017,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_006_1",
        "subject": {
          "en": "Advanced Paediatrician Training",
          "bn": "উন্নত শিশুরোগ বিশেষজ্ঞ প্রশিক্ষণ"
        },
        "country": {
          "en": "India",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "1 year",
          "bn": ""
        },
        "year": 2016,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_006_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in paediatrician practice: a district cohort",
          "bn": "শিশুরোগ বিশেষজ্ঞ চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2023-03-19",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_006_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in paediatrician care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় শিশুরোগ বিশেষজ্ঞ সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2022-08-25",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "International fellowship training",
      "Extensive ICU and emergency care experience",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Ultrasonography",
      "Interventional procedures",
      "Emergency management",
      "Post-operative rehabilitation",
      "Patient counselling",
      "Endoscopic procedures"
    ],
    "achievements": [
      "Presented at a national medical conference",
      "Established a district-level screening programme",
      "Published in a peer-reviewed international journal"
    ],
    "social": {},
    "publicPhone": "01382787976",
    "publicEmail": "rafiqul.rahman@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Dhaka",
      "bn": "স্টেশন রোড, কোতোয়ালি, ঢাকা"
    },
    "hospitalIds": [
      "evercare-dhaka",
      "chittagong-medical",
      "gazi-medical"
    ],
    "locationIds": [
      "dhaka",
      "chattogram",
      "khulna"
    ],
    "createdAt": 1782172800000,
    "updatedAt": 1790038800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_007",
    "linkNo": "998100175",
    "slug": "mahfuza-uddin",
    "email": "mahfuza.uddin@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$fWLT6VIa/Y+jbmN+Qs4JWw==$rJwMOxrV7VkGwO9IR81D43Cg0cQ7Wpr8Rfa+uq7z66I=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 106,
    "name": {
      "en": "Dr. Mahfuza Uddin",
      "bn": "ডা. মাহফুজা উদ্দিন"
    },
    "speciality": {
      "en": "Pulmonologist",
      "bn": "বক্ষব্যাধি বিশেষজ্ঞ"
    },
    "specialityIds": [
      "pulmonologist"
    ],
    "designation": {
      "en": "Senior Consultant, Pulmonologist",
      "bn": "সিনিয়র কনসালট্যান্ট, বক্ষব্যাধি বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Labaid Specialized Hospital",
      "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Mahfuza Uddin is a pulmonologist with 21 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. মাহফুজা উদ্দিন একজন বক্ষব্যাধি বিশেষজ্ঞ, বাংলাদেশে 21 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-24487",
    "yearsExperience": 21,
    "patientsServed": 30000,
    "photo": {
      "url": "/demo/photos/f-05.webp",
      "width": 480,
      "height": 480,
      "hash": "4626c72ce6a10f76",
      "bytes": 12692
    },
    "chambers": [
      {
        "id": "ch_doc_007_1",
        "hospital": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Dhaka",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
        },
        "hospitalId": "labaid-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01859695542",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_007_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 1995,
        "yearTo": 2000,
        "order": 0
      },
      {
        "id": "ed_doc_007_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2001,
        "yearTo": 2005,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_007_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2006,
        "current": true,
        "order": 0
      }
    ],
    "awards": [
      {
        "id": "aw_doc_007_1",
        "title": {
          "en": "National Pulmonologist Excellence Award",
          "bn": "জাতীয় বক্ষব্যাধি বিশেষজ্ঞ শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2025,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_007_1",
        "subject": {
          "en": "Advanced Pulmonologist Training",
          "bn": "উন্নত বক্ষব্যাধি বিশেষজ্ঞ প্রশিক্ষণ"
        },
        "country": {
          "en": "Thailand",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "1 year",
          "bn": ""
        },
        "year": 2014,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_007_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in pulmonologist practice: a district cohort",
          "bn": "বক্ষব্যাধি বিশেষজ্ঞ চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2022-12-02",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_007_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in pulmonologist care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় বক্ষব্যাধি বিশেষজ্ঞ সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2020-12-01",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "21+ years of clinical practice",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Emergency management",
      "Paediatric care",
      "Clinical research",
      "Endoscopic procedures",
      "Patient counselling"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide",
      "Established a district-level screening programme",
      "Presented at a national medical conference"
    ],
    "social": {
      "facebook": "https://www.facebook.com/mahfuza-uddin"
    },
    "publicPhone": "01398552942",
    "publicEmail": "mahfuza.uddin@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "House 42, Road 12, Dhanmondi, Dhaka",
      "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
    },
    "hospitalIds": [
      "labaid-specialized"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1782259200000,
    "updatedAt": 1790042400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_008",
    "linkNo": "893256066",
    "slug": "mahmudul-talukder",
    "email": "mahmudul.talukder@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$9pA3CgLZTJPdwn2iE7/AZQ==$dkAk4bo/mxORvt0cG3wdAMDwSm7GNTStK2seQR98X+U=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 107,
    "name": {
      "en": "Dr. Mahmudul Talukder",
      "bn": "ডা. মাহমুদুল তালুকদার"
    },
    "speciality": {
      "en": "General Surgeon",
      "bn": "জেনারেল সার্জন"
    },
    "specialityIds": [
      "general-surgeon"
    ],
    "designation": {
      "en": "Senior Consultant, General Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, জেনারেল সার্জন"
    },
    "workplace": {
      "en": "Rangpur Medical College Hospital",
      "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Mahmudul Talukder is a general surgeon with 24 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. মাহমুদুল তালুকদার একজন জেনারেল সার্জন, বাংলাদেশে 24 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-77697",
    "yearsExperience": 24,
    "patientsServed": 31000,
    "photo": {
      "url": "/demo/photos/m-03.webp",
      "width": 480,
      "height": 480,
      "hash": "a5785b57b9554812",
      "bytes": 6978
    },
    "chambers": [
      {
        "id": "ch_doc_008_1",
        "hospital": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Rangpur",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, রংপুর"
        },
        "hospitalId": "rangpur-medical",
        "locationId": "rangpur",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01818303582",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_008_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 1992,
        "yearTo": 1997,
        "order": 0
      },
      {
        "id": "ed_doc_008_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1998,
        "yearTo": 2002,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_008_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rangpur",
          "bn": "রংপুর"
        },
        "yearFrom": 2003,
        "current": true,
        "order": 0
      }
    ],
    "awards": [
      {
        "id": "aw_doc_008_1",
        "title": {
          "en": "National General Surgeon Excellence Award",
          "bn": "জাতীয় জেনারেল সার্জন শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2024,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_008_1",
        "subject": {
          "en": "Advanced General Surgeon Training",
          "bn": "উন্নত জেনারেল সার্জন প্রশিক্ষণ"
        },
        "country": {
          "en": "India",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "6 months",
          "bn": ""
        },
        "year": 2016,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_008_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in general surgeon practice: a district cohort",
          "bn": "জেনারেল সার্জন চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2022-09-07",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_008_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in general surgeon care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় জেনারেল সার্জন সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2025-10-22",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "Advanced Cardiac Life Support (ACLS) certified",
      "Extensive ICU and emergency care experience",
      "24+ years of clinical practice"
    ],
    "skills": [
      "Ultrasonography",
      "Post-operative rehabilitation",
      "Chronic disease management",
      "Endoscopic procedures"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide",
      "Published in a peer-reviewed international journal",
      "Led a hospital quality-improvement initiative"
    ],
    "social": {},
    "publicPhone": "01624802031",
    "publicEmail": "mahmudul.talukder@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "House 42, Road 12, Dhanmondi, Rangpur",
      "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, রংপুর"
    },
    "hospitalIds": [
      "rangpur-medical"
    ],
    "locationIds": [
      "rangpur"
    ],
    "createdAt": 1782345600000,
    "updatedAt": 1790046000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_009",
    "linkNo": "159939341",
    "slug": "rafiqul-mondal",
    "email": "rafiqul.mondal@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$q9tk00FNULAMhncVZzEGoA==$l5hd/Iudtfualq7P9ddaX/O2wTrn2LO5ujq9rEsUVHE=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 108,
    "name": {
      "en": "Dr. Rafiqul Mondal",
      "bn": "ডা. রফিকুল মণ্ডল"
    },
    "speciality": {
      "en": "Dental Surgeon",
      "bn": "ডেন্টাল সার্জন"
    },
    "specialityIds": [
      "dentist"
    ],
    "designation": {
      "en": "Senior Consultant, Dental Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, ডেন্টাল সার্জন"
    },
    "workplace": {
      "en": "Ibn Sina Specialized Hospital",
      "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Rafiqul Mondal is a dental surgeon with 23 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রফিকুল মণ্ডল একজন ডেন্টাল সার্জন, বাংলাদেশে 23 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-54712",
    "yearsExperience": 23,
    "patientsServed": 20000,
    "photo": {
      "url": "/demo/photos/m-04.webp",
      "width": 480,
      "height": 480,
      "hash": "6a4fe31332d5a04c",
      "bytes": 8236
    },
    "chambers": [
      {
        "id": "ch_doc_009_1",
        "hospital": {
          "en": "Ibn Sina Specialized Hospital",
          "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Dhaka",
          "bn": "২১ শ্যামলী, মিরপুর রোড, ঢাকা"
        },
        "hospitalId": "ibn-sina",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01416129701",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_009_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 1993,
        "yearTo": 1998,
        "order": 0
      },
      {
        "id": "ed_doc_009_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1999,
        "yearTo": 2003,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_009_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Ibn Sina Specialized Hospital",
          "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2004,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "Advanced Cardiac Life Support (ACLS) certified",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Minimally invasive surgery",
      "Ultrasonography",
      "Emergency management",
      "Patient counselling",
      "Post-operative rehabilitation",
      "Endoscopic procedures"
    ],
    "achievements": [
      "Led a hospital quality-improvement initiative"
    ],
    "social": {},
    "publicPhone": "01451283973",
    "publicEmail": "rafiqul.mondal@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "21 Shyamoli, Mirpur Road, Dhaka",
      "bn": "২১ শ্যামলী, মিরপুর রোড, ঢাকা"
    },
    "hospitalIds": [
      "ibn-sina"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1782432000000,
    "updatedAt": 1790049600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_010",
    "linkNo": "341628089",
    "slug": "ayesha-mondal",
    "email": "ayesha.mondal@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$7xay1kxDIZC6mwKpQjiBhg==$riS6Tkqez/M9Cg5DS8GAIpXh2OEQ5jEJsIZq2GdtpCI=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 109,
    "name": {
      "en": "Dr. Ayesha Mondal",
      "bn": "ডা. আয়েশা মণ্ডল"
    },
    "speciality": {
      "en": "Paediatrician",
      "bn": "শিশুরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "paediatrician"
    ],
    "designation": {
      "en": "Senior Consultant, Paediatrician",
      "bn": "সিনিয়র কনসালট্যান্ট, শিশুরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Faridpur Medical College Hospital",
      "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MD (Cardiology)"
    ],
    "about": {
      "en": "Dr. Ayesha Mondal is a paediatrician with 25 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. আয়েশা মণ্ডল একজন শিশুরোগ বিশেষজ্ঞ, বাংলাদেশে 25 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-90810",
    "yearsExperience": 25,
    "patientsServed": 43000,
    "photo": {
      "url": "/demo/photos/f-06.webp",
      "width": 480,
      "height": 480,
      "hash": "48ed8cab0f71a41d",
      "bytes": 10316
    },
    "chambers": [
      {
        "id": "ch_doc_010_1",
        "hospital": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Faridpur",
          "bn": "২১ শ্যামলী, মিরপুর রোড, ফরিদপুর"
        },
        "hospitalId": "faridpur-medical",
        "locationId": "faridpur",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01888378881",
        "order": 0
      },
      {
        "id": "ch_doc_010_2",
        "hospital": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Rangpur",
          "bn": "২১ শ্যামলী, মিরপুর রোড, রংপুর"
        },
        "hospitalId": "rangpur-medical",
        "locationId": "rangpur",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01991309274",
        "order": 1
      },
      {
        "id": "ch_doc_010_3",
        "hospital": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Chattogram",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, চট্টগ্রাম"
        },
        "hospitalId": "max-chattogram",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01324338123",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_010_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 1991,
        "yearTo": 1996,
        "order": 0
      },
      {
        "id": "ed_doc_010_2",
        "degree": {
          "en": "MD (Cardiology)",
          "bn": "MD (Cardiology)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1997,
        "yearTo": 2001,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_010_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Faridpur",
          "bn": "ফরিদপুর"
        },
        "yearFrom": 2002,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_010_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rangpur",
          "bn": "রংপুর"
        },
        "yearFrom": 2006,
        "yearTo": 2009,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_010_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2010,
        "yearTo": 2013,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "25+ years of clinical practice",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Preventive care",
      "Diagnostic imaging",
      "Minimally invasive surgery",
      "Clinical research",
      "Endoscopic procedures"
    ],
    "achievements": [
      "Led a hospital quality-improvement initiative"
    ],
    "social": {
      "facebook": "https://www.facebook.com/ayesha-mondal"
    },
    "publicPhone": "01648609537",
    "publicEmail": "ayesha.mondal@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "21 Shyamoli, Mirpur Road, Faridpur",
      "bn": "২১ শ্যামলী, মিরপুর রোড, ফরিদপুর"
    },
    "hospitalIds": [
      "faridpur-medical",
      "rangpur-medical",
      "max-chattogram"
    ],
    "locationIds": [
      "faridpur",
      "rangpur",
      "chattogram"
    ],
    "createdAt": 1782518400000,
    "updatedAt": 1790053200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_011",
    "linkNo": "880383064",
    "slug": "rubina-mazumder",
    "email": "rubina.mazumder@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$wh6Mum0SZrD+RxGNHbAyjw==$LOLaJIjBfcpwQrXmGu5ZIqPMu5sKwTKiesGJbIA1d9w=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 110,
    "name": {
      "en": "Dr. Rubina Mazumder",
      "bn": "ডা. রুবিনা মজুমদার"
    },
    "speciality": {
      "en": "ENT Specialist",
      "bn": "নাক-কান-গলা বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ent-specialist"
    ],
    "designation": {
      "en": "Senior Consultant, ENT Specialist",
      "bn": "সিনিয়র কনসালট্যান্ট, নাক-কান-গলা বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Mymensingh Medical College Hospital",
      "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Rubina Mazumder is a ent specialist with 6 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রুবিনা মজুমদার একজন নাক-কান-গলা বিশেষজ্ঞ, বাংলাদেশে 6 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-64960",
    "yearsExperience": 6,
    "patientsServed": 4000,
    "photo": {
      "url": "/demo/photos/f-07.webp",
      "width": 480,
      "height": 480,
      "hash": "1101cb5505b1d3c5",
      "bytes": 8554
    },
    "chambers": [
      {
        "id": "ch_doc_011_1",
        "hospital": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Mymensingh",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, ময়মনসিংহ"
        },
        "hospitalId": "mymensingh-medical",
        "locationId": "mymensingh",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01432621801",
        "order": 0
      },
      {
        "id": "ch_doc_011_2",
        "hospital": {
          "en": "Popular Diagnostic Centre",
          "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Dhaka",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
        },
        "hospitalId": "popular-diagnostic",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01621033651",
        "order": 1
      },
      {
        "id": "ch_doc_011_3",
        "hospital": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Dhaka",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
        },
        "hospitalId": "labaid-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01562807048",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_011_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 2010,
        "yearTo": 2015,
        "order": 0
      },
      {
        "id": "ed_doc_011_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2016,
        "yearTo": 2020,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_011_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Mymensingh",
          "bn": "ময়মনসিংহ"
        },
        "yearFrom": 2021,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_011_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Popular Diagnostic Centre",
          "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2025,
        "yearTo": 2028,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_011_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2029,
        "yearTo": 2032,
        "current": false,
        "order": 2
      }
    ],
    "awards": [
      {
        "id": "aw_doc_011_1",
        "title": {
          "en": "National ENT Specialist Excellence Award",
          "bn": "জাতীয় নাক-কান-গলা বিশেষজ্ঞ শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2016,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_011_1",
        "subject": {
          "en": "Advanced ENT Specialist Training",
          "bn": "উন্নত নাক-কান-গলা বিশেষজ্ঞ প্রশিক্ষণ"
        },
        "country": {
          "en": "United Kingdom",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "6 months",
          "bn": ""
        },
        "year": 2017,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_011_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in ent specialist practice: a district cohort",
          "bn": "নাক-কান-গলা বিশেষজ্ঞ চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2023-09-02",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_011_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in ent specialist care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় নাক-কান-গলা বিশেষজ্ঞ সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2023-05-05",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "Advanced Cardiac Life Support (ACLS) certified",
      "International fellowship training",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Emergency management",
      "Endoscopic procedures",
      "Clinical research",
      "Paediatric care",
      "Preventive care",
      "Minimally invasive surgery"
    ],
    "achievements": [
      "Established a district-level screening programme",
      "Developed a follow-up protocol adopted department-wide",
      "Led a hospital quality-improvement initiative"
    ],
    "social": {},
    "publicPhone": "01337011721",
    "publicEmail": "rubina.mazumder@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Plot 81, Block E, Bashundhara, Mymensingh",
      "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, ময়মনসিংহ"
    },
    "hospitalIds": [
      "mymensingh-medical",
      "popular-diagnostic",
      "labaid-specialized"
    ],
    "locationIds": [
      "mymensingh",
      "dhaka"
    ],
    "createdAt": 1782604800000,
    "updatedAt": 1790056800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_012",
    "linkNo": "998105080",
    "slug": "abdul-mondal",
    "email": "abdul.mondal@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$EqCPIRlC2IdOOoyOVCcyAQ==$tNODLMKvDFz5pzOiN3QJ3niZ3VdQZa2OUgjnWmNmRH8=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 111,
    "name": {
      "en": "Dr. Abdul Mondal",
      "bn": "ডা. আব্দুল মণ্ডল"
    },
    "speciality": {
      "en": "Haematologist",
      "bn": "রক্তরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "haematologist"
    ],
    "designation": {
      "en": "Senior Consultant, Haematologist",
      "bn": "সিনিয়র কনসালট্যান্ট, রক্তরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Popular Diagnostic Centre",
      "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
    },
    "degrees": [
      "MBBS",
      "MD (Cardiology)"
    ],
    "about": {
      "en": "Dr. Abdul Mondal is a haematologist with 11 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. আব্দুল মণ্ডল একজন রক্তরোগ বিশেষজ্ঞ, বাংলাদেশে 11 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-40745",
    "yearsExperience": 11,
    "patientsServed": 28000,
    "photo": {
      "url": "/demo/photos/m-05.webp",
      "width": 480,
      "height": 480,
      "hash": "683549b71d4156cc",
      "bytes": 10406
    },
    "chambers": [
      {
        "id": "ch_doc_012_1",
        "hospital": {
          "en": "Popular Diagnostic Centre",
          "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Dhaka",
          "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
        },
        "hospitalId": "popular-diagnostic",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01728878733",
        "order": 0
      },
      {
        "id": "ch_doc_012_2",
        "hospital": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Rajshahi",
          "bn": "২১ শ্যামলী, মিরপুর রোড, রাজশাহী"
        },
        "hospitalId": "rajshahi-medical",
        "locationId": "rajshahi",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01817281573",
        "order": 1
      },
      {
        "id": "ch_doc_012_3",
        "hospital": {
          "en": "United Hospital Limited",
          "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Dhaka",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
        },
        "hospitalId": "united-hospital",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01657814761",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_012_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 2005,
        "yearTo": 2010,
        "order": 0
      },
      {
        "id": "ed_doc_012_2",
        "degree": {
          "en": "MD (Cardiology)",
          "bn": "MD (Cardiology)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2011,
        "yearTo": 2015,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_012_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Popular Diagnostic Centre",
          "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2016,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_012_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rajshahi",
          "bn": "রাজশাহী"
        },
        "yearFrom": 2020,
        "yearTo": 2023,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_012_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "United Hospital Limited",
          "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2024,
        "yearTo": 2027,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "11+ years of clinical practice",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Clinical research",
      "Paediatric care",
      "Patient counselling",
      "Diagnostic imaging",
      "Endoscopic procedures",
      "Interventional procedures"
    ],
    "achievements": [
      "Trained junior consultants in advanced procedures"
    ],
    "social": {},
    "publicPhone": "01773278785",
    "publicEmail": "abdul.mondal@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Dhaka",
      "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
    },
    "hospitalIds": [
      "popular-diagnostic",
      "rajshahi-medical",
      "united-hospital"
    ],
    "locationIds": [
      "dhaka",
      "rajshahi"
    ],
    "createdAt": 1782691200000,
    "updatedAt": 1790060400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_013",
    "linkNo": "300944823",
    "slug": "rokeya-rahman",
    "email": "rokeya.rahman@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$LUYa6Sf03RZ1ymRf/NEhXg==$wtamlRc2kZmdcW+jBFZ0EicIRAjz0mKk9Hn3M4hcYFI=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 112,
    "name": {
      "en": "Dr. Rokeya Rahman",
      "bn": "ডা. রোকেয়া রহমান"
    },
    "speciality": {
      "en": "Gastroenterologist",
      "bn": "গ্যাস্ট্রোএন্টেরোলজিস্ট"
    },
    "specialityIds": [
      "gastroenterologist"
    ],
    "designation": {
      "en": "Senior Consultant, Gastroenterologist",
      "bn": "সিনিয়র কনসালট্যান্ট, গ্যাস্ট্রোএন্টেরোলজিস্ট"
    },
    "workplace": {
      "en": "Evercare Hospital Dhaka",
      "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Rokeya Rahman is a gastroenterologist with 20 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রোকেয়া রহমান একজন গ্যাস্ট্রোএন্টেরোলজিস্ট, বাংলাদেশে 20 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-25331",
    "yearsExperience": 20,
    "patientsServed": 16000,
    "photo": {
      "url": "/demo/photos/f-08.webp",
      "width": 480,
      "height": 480,
      "hash": "37438578de6e0c01",
      "bytes": 7000
    },
    "chambers": [
      {
        "id": "ch_doc_013_1",
        "hospital": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Dhaka",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
        },
        "hospitalId": "evercare-dhaka",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01934832183",
        "order": 0
      },
      {
        "id": "ch_doc_013_2",
        "hospital": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Dhaka",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
        },
        "hospitalId": "bsmmu",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01472601246",
        "order": 1
      },
      {
        "id": "ch_doc_013_3",
        "hospital": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Sylhet",
          "bn": "২১ শ্যামলী, মিরপুর রোড, সিলেট"
        },
        "hospitalId": "sylhet-mag-osmani",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01554750638",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_013_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 1996,
        "yearTo": 2001,
        "order": 0
      },
      {
        "id": "ed_doc_013_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2002,
        "yearTo": 2006,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_013_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2007,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_013_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2011,
        "yearTo": 2014,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_013_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 2015,
        "yearTo": 2018,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "20+ years of clinical practice",
      "International fellowship training",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Post-operative rehabilitation",
      "Ultrasonography",
      "Chronic disease management",
      "Preventive care",
      "Minimally invasive surgery",
      "Endoscopic procedures"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {
      "facebook": "https://www.facebook.com/rokeya-rahman"
    },
    "publicPhone": "01698170949",
    "publicEmail": "rokeya.rahman@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "House 42, Road 12, Dhanmondi, Dhaka",
      "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
    },
    "hospitalIds": [
      "evercare-dhaka",
      "bsmmu",
      "sylhet-mag-osmani"
    ],
    "locationIds": [
      "dhaka",
      "sylhet"
    ],
    "createdAt": 1782777600000,
    "updatedAt": 1790064000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_014",
    "linkNo": "912865631",
    "slug": "tahmina-ahmed",
    "email": "tahmina.ahmed@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$Akyw4f+iDegl5vl5Ovbv9g==$gvgbOG3XgP7fh/3J/MzEQAccCifV8eabEUpfgcJsODg=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 113,
    "name": {
      "en": "Dr. Tahmina Ahmed",
      "bn": "ডা. তাহমিনা আহমেদ"
    },
    "speciality": {
      "en": "Dental Surgeon",
      "bn": "ডেন্টাল সার্জন"
    },
    "specialityIds": [
      "dentist"
    ],
    "designation": {
      "en": "Senior Consultant, Dental Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, ডেন্টাল সার্জন"
    },
    "workplace": {
      "en": "Shaheed Ziaur Rahman Medical College Hospital",
      "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Tahmina Ahmed is a dental surgeon with 28 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. তাহমিনা আহমেদ একজন ডেন্টাল সার্জন, বাংলাদেশে 28 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-13930",
    "yearsExperience": 28,
    "patientsServed": 20000,
    "photo": {
      "url": "/demo/photos/f-09.webp",
      "width": 480,
      "height": 480,
      "hash": "24ec39d0882f5a61",
      "bytes": 9424
    },
    "chambers": [
      {
        "id": "ch_doc_014_1",
        "hospital": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Bogura",
          "bn": "জিইসি মোড়, নাসিরাবাদ, বগুড়া"
        },
        "hospitalId": "bogura-shaheed-ziaur",
        "locationId": "bogura",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01314448858",
        "order": 0
      },
      {
        "id": "ch_doc_014_2",
        "hospital": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Mymensingh",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ময়মনসিংহ"
        },
        "hospitalId": "mymensingh-medical",
        "locationId": "mymensingh",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01375342914",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_014_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 1988,
        "yearTo": 1993,
        "order": 0
      },
      {
        "id": "ed_doc_014_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1994,
        "yearTo": 1998,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_014_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Bogura",
          "bn": "বগুড়া"
        },
        "yearFrom": 1999,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_014_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Mymensingh",
          "bn": "ময়মনসিংহ"
        },
        "yearFrom": 2003,
        "yearTo": 2006,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "Extensive ICU and emergency care experience",
      "28+ years of clinical practice"
    ],
    "skills": [
      "Chronic disease management",
      "Diagnostic imaging",
      "Preventive care",
      "Post-operative rehabilitation"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide"
    ],
    "social": {},
    "publicPhone": "01972172171",
    "publicEmail": "tahmina.ahmed@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Bogura",
      "bn": "জিইসি মোড়, নাসিরাবাদ, বগুড়া"
    },
    "hospitalIds": [
      "bogura-shaheed-ziaur",
      "mymensingh-medical"
    ],
    "locationIds": [
      "bogura",
      "mymensingh"
    ],
    "createdAt": 1782864000000,
    "updatedAt": 1790067600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_015",
    "linkNo": "622355990",
    "slug": "shahidul-siddique",
    "email": "shahidul.siddique@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$C7ox/Kut8+7gNglY7LBl9A==$1nSvy4ebENn5ASPmk8OHaPEtzQgKP3fyiJ9zDOalpj8=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 114,
    "name": {
      "en": "Dr. Shahidul Siddique",
      "bn": "ডা. শহীদুল সিদ্দিক"
    },
    "speciality": {
      "en": "Dermatologist",
      "bn": "চর্মরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "dermatologist"
    ],
    "designation": {
      "en": "Senior Consultant, Dermatologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চর্মরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Rangpur Medical College Hospital",
      "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Shahidul Siddique is a dermatologist with 27 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. শহীদুল সিদ্দিক একজন চর্মরোগ বিশেষজ্ঞ, বাংলাদেশে 27 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-75950",
    "yearsExperience": 27,
    "patientsServed": 15000,
    "photo": {
      "url": "/demo/photos/m-06.webp",
      "width": 480,
      "height": 480,
      "hash": "37b794fcd62127cb",
      "bytes": 11586
    },
    "chambers": [
      {
        "id": "ch_doc_015_1",
        "hospital": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Rangpur",
          "bn": "২১ শ্যামলী, মিরপুর রোড, রংপুর"
        },
        "hospitalId": "rangpur-medical",
        "locationId": "rangpur",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01749164082",
        "order": 0
      },
      {
        "id": "ch_doc_015_2",
        "hospital": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "address": {
          "en": "Station Road, Kotwali, Chattogram",
          "bn": "স্টেশন রোড, কোতোয়ালি, চট্টগ্রাম"
        },
        "hospitalId": "max-chattogram",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01768800712",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_015_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 1989,
        "yearTo": 1994,
        "order": 0
      },
      {
        "id": "ed_doc_015_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1995,
        "yearTo": 1999,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_015_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rangpur",
          "bn": "রংপুর"
        },
        "yearFrom": 2000,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_015_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2004,
        "yearTo": 2007,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Advanced Cardiac Life Support (ACLS) certified",
      "Member, Bangladesh Medical Association",
      "International fellowship training"
    ],
    "skills": [
      "Chronic disease management",
      "Paediatric care",
      "Clinical research",
      "Ultrasonography",
      "Emergency management"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {},
    "publicPhone": "01488453409",
    "publicEmail": "shahidul.siddique@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "21 Shyamoli, Mirpur Road, Rangpur",
      "bn": "২১ শ্যামলী, মিরপুর রোড, রংপুর"
    },
    "hospitalIds": [
      "rangpur-medical",
      "max-chattogram"
    ],
    "locationIds": [
      "rangpur",
      "chattogram"
    ],
    "createdAt": 1782950400000,
    "updatedAt": 1790071200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_016",
    "linkNo": "593658412",
    "slug": "shahidul-hossain",
    "email": "shahidul.hossain@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$0OJiARyyVuqgcnTrKToKMg==$NC/6fXqfFbgt6hYkIZibPwnbNJwZlS7rFlxxxr0+pek=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 115,
    "name": {
      "en": "Dr. Shahidul Hossain",
      "bn": "ডা. শহীদুল হোসেন"
    },
    "speciality": {
      "en": "Orthopaedic Surgeon",
      "bn": "অর্থোপেডিক সার্জন"
    },
    "specialityIds": [
      "orthopaedic-surgeon"
    ],
    "designation": {
      "en": "Senior Consultant, Orthopaedic Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, অর্থোপেডিক সার্জন"
    },
    "workplace": {
      "en": "Evercare Hospital Dhaka",
      "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
    },
    "degrees": [
      "MBBS",
      "FCPS (Medicine)"
    ],
    "about": {
      "en": "Dr. Shahidul Hossain is a orthopaedic surgeon with 20 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. শহীদুল হোসেন একজন অর্থোপেডিক সার্জন, বাংলাদেশে 20 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-92405",
    "yearsExperience": 20,
    "patientsServed": 15000,
    "photo": {
      "url": "/demo/photos/m-07.webp",
      "width": 480,
      "height": 480,
      "hash": "f6a79a873322a8b3",
      "bytes": 8326
    },
    "chambers": [
      {
        "id": "ch_doc_016_1",
        "hospital": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Dhaka",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, ঢাকা"
        },
        "hospitalId": "evercare-dhaka",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01494268644",
        "order": 0
      },
      {
        "id": "ch_doc_016_2",
        "hospital": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Dhaka",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, ঢাকা"
        },
        "hospitalId": "bangladesh-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01967015710",
        "order": 1
      },
      {
        "id": "ch_doc_016_3",
        "hospital": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Khulna",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, খুলনা"
        },
        "hospitalId": "gazi-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01913654642",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_016_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 1996,
        "yearTo": 2001,
        "order": 0
      },
      {
        "id": "ed_doc_016_2",
        "degree": {
          "en": "FCPS (Medicine)",
          "bn": "FCPS (Medicine)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2002,
        "yearTo": 2006,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_016_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2007,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_016_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2011,
        "yearTo": 2014,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_016_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2015,
        "yearTo": 2018,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "Advanced Cardiac Life Support (ACLS) certified",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Patient counselling",
      "Paediatric care",
      "Preventive care",
      "Endoscopic procedures",
      "Diagnostic imaging"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {
      "facebook": "https://www.facebook.com/shahidul-hossain"
    },
    "publicPhone": "01978002161",
    "publicEmail": "shahidul.hossain@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Plot 81, Block E, Bashundhara, Dhaka",
      "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, ঢাকা"
    },
    "hospitalIds": [
      "evercare-dhaka",
      "bangladesh-specialized",
      "gazi-medical"
    ],
    "locationIds": [
      "dhaka",
      "khulna"
    ],
    "createdAt": 1783036800000,
    "updatedAt": 1790074800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_017",
    "linkNo": "598603534",
    "slug": "shahidul-uddin",
    "email": "shahidul.uddin@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$HEHcy6zw2af2tOLk5tQhFg==$Usv1LXAPfQ2Kxr/fzRj3BQZGIu0I5ftEuTmVQ2KCwvs=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 116,
    "name": {
      "en": "Dr. Shahidul Uddin",
      "bn": "ডা. শহীদুল উদ্দিন"
    },
    "speciality": {
      "en": "Rheumatologist",
      "bn": "বাতরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "rheumatologist"
    ],
    "designation": {
      "en": "Senior Consultant, Rheumatologist",
      "bn": "সিনিয়র কনসালট্যান্ট, বাতরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Rajshahi Medical College Hospital",
      "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Surgery)",
      "MS"
    ],
    "about": {
      "en": "Dr. Shahidul Uddin is a rheumatologist with 11 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. শহীদুল উদ্দিন একজন বাতরোগ বিশেষজ্ঞ, বাংলাদেশে 11 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-37555",
    "yearsExperience": 11,
    "patientsServed": 13000,
    "photo": {
      "url": "/demo/photos/m-08.webp",
      "width": 480,
      "height": 480,
      "hash": "dfb3b82d5b025b95",
      "bytes": 8760
    },
    "chambers": [
      {
        "id": "ch_doc_017_1",
        "hospital": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Rajshahi",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, রাজশাহী"
        },
        "hospitalId": "rajshahi-medical",
        "locationId": "rajshahi",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01631742652",
        "order": 0
      },
      {
        "id": "ch_doc_017_2",
        "hospital": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Cumilla",
          "bn": "স্টেশন রোড, কোতোয়ালি, কুমিল্লা"
        },
        "hospitalId": "comilla-medical",
        "locationId": "cumilla",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01563678784",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_017_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 2005,
        "yearTo": 2010,
        "order": 0
      },
      {
        "id": "ed_doc_017_2",
        "degree": {
          "en": "FCPS (Surgery)",
          "bn": "FCPS (Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2011,
        "yearTo": 2015,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_017_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rajshahi",
          "bn": "রাজশাহী"
        },
        "yearFrom": 2016,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_017_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Cumilla",
          "bn": "কুমিল্লা"
        },
        "yearFrom": 2020,
        "yearTo": 2023,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "Advanced Cardiac Life Support (ACLS) certified",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Endoscopic procedures",
      "Patient counselling",
      "Chronic disease management",
      "Minimally invasive surgery",
      "Emergency management",
      "Paediatric care"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {},
    "publicPhone": "01721329164",
    "publicEmail": "shahidul.uddin@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Zindabazar, Main Road, Rajshahi",
      "bn": "জিন্দাবাজার, প্রধান সড়ক, রাজশাহী"
    },
    "hospitalIds": [
      "rajshahi-medical",
      "comilla-medical"
    ],
    "locationIds": [
      "rajshahi",
      "cumilla"
    ],
    "createdAt": 1783123200000,
    "updatedAt": 1790078400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_018",
    "linkNo": "139917554",
    "slug": "nusrat-haque",
    "email": "nusrat.haque@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$wVJBcDN5MxkRShnYxAa6Wg==$g0dHQ5LnHiZMtz5ccFwgFF9hShziVE5NOH2FCaYWYrc=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 117,
    "name": {
      "en": "Dr. Nusrat Haque",
      "bn": "ডা. নুসরাত হক"
    },
    "speciality": {
      "en": "Orthopaedic Surgeon",
      "bn": "অর্থোপেডিক সার্জন"
    },
    "specialityIds": [
      "orthopaedic-surgeon"
    ],
    "designation": {
      "en": "Senior Consultant, Orthopaedic Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, অর্থোপেডিক সার্জন"
    },
    "workplace": {
      "en": "Gazi Medical College Hospital",
      "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Nusrat Haque is a orthopaedic surgeon with 15 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নুসরাত হক একজন অর্থোপেডিক সার্জন, বাংলাদেশে 15 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-57084",
    "yearsExperience": 15,
    "patientsServed": 9000,
    "photo": {
      "url": "/demo/photos/f-10.webp",
      "width": 480,
      "height": 480,
      "hash": "4334399f43ea9651",
      "bytes": 11734
    },
    "chambers": [
      {
        "id": "ch_doc_018_1",
        "hospital": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Khulna",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, খুলনা"
        },
        "hospitalId": "gazi-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01492998711",
        "order": 0
      },
      {
        "id": "ch_doc_018_2",
        "hospital": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Cumilla",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, কুমিল্লা"
        },
        "hospitalId": "comilla-medical",
        "locationId": "cumilla",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01811512065",
        "order": 1
      },
      {
        "id": "ch_doc_018_3",
        "hospital": {
          "en": "Dhaka Medical College Hospital",
          "bn": "ঢাকা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Dhaka",
          "bn": "স্টেশন রোড, কোতোয়ালি, ঢাকা"
        },
        "hospitalId": "dhaka-medical",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01661058285",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_018_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 2001,
        "yearTo": 2006,
        "order": 0
      },
      {
        "id": "ed_doc_018_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2007,
        "yearTo": 2011,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_018_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2012,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_018_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Cumilla",
          "bn": "কুমিল্লা"
        },
        "yearFrom": 2016,
        "yearTo": 2019,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_018_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Dhaka Medical College Hospital",
          "bn": "ঢাকা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2020,
        "yearTo": 2023,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "Extensive ICU and emergency care experience",
      "15+ years of clinical practice"
    ],
    "skills": [
      "Post-operative rehabilitation",
      "Preventive care",
      "Interventional procedures",
      "Minimally invasive surgery"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide"
    ],
    "social": {},
    "publicPhone": "01495441281",
    "publicEmail": "nusrat.haque@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Zindabazar, Main Road, Khulna",
      "bn": "জিন্দাবাজার, প্রধান সড়ক, খুলনা"
    },
    "hospitalIds": [
      "gazi-medical",
      "comilla-medical",
      "dhaka-medical"
    ],
    "locationIds": [
      "khulna",
      "cumilla",
      "dhaka"
    ],
    "createdAt": 1783209600000,
    "updatedAt": 1790082000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_019",
    "linkNo": "421765115",
    "slug": "jahangir-talukder",
    "email": "jahangir.talukder@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$J5yvfSXwmPTY6TXmvl3k7A==$F3B4Ewt8stoZcMTWOwBk6QRDznkUNgWSrGxMAskLY6Y=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 118,
    "name": {
      "en": "Dr. Jahangir Talukder",
      "bn": "ডা. জাহাঙ্গীর তালুকদার"
    },
    "speciality": {
      "en": "Dermatologist",
      "bn": "চর্মরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "dermatologist"
    ],
    "designation": {
      "en": "Senior Consultant, Dermatologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চর্মরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Islami Bank Medical College Hospital",
      "bn": "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MRCP (UK)"
    ],
    "about": {
      "en": "Dr. Jahangir Talukder is a dermatologist with 6 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. জাহাঙ্গীর তালুকদার একজন চর্মরোগ বিশেষজ্ঞ, বাংলাদেশে 6 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-15486",
    "yearsExperience": 6,
    "patientsServed": 15000,
    "photo": {
      "url": "/demo/photos/m-09.webp",
      "width": 480,
      "height": 480,
      "hash": "8d7da5f471bf4bdd",
      "bytes": 7344
    },
    "chambers": [
      {
        "id": "ch_doc_019_1",
        "hospital": {
          "en": "Islami Bank Medical College Hospital",
          "bn": "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Rajshahi",
          "bn": "জিইসি মোড়, নাসিরাবাদ, রাজশাহী"
        },
        "hospitalId": "islami-bank-rajshahi",
        "locationId": "rajshahi",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01585944729",
        "order": 0
      },
      {
        "id": "ch_doc_019_2",
        "hospital": {
          "en": "Popular Diagnostic Centre",
          "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Dhaka",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
        },
        "hospitalId": "popular-diagnostic",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01789549575",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_019_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 2010,
        "yearTo": 2015,
        "order": 0
      },
      {
        "id": "ed_doc_019_2",
        "degree": {
          "en": "MRCP (UK)",
          "bn": "MRCP (UK)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2016,
        "yearTo": 2020,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_019_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Islami Bank Medical College Hospital",
          "bn": "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rajshahi",
          "bn": "রাজশাহী"
        },
        "yearFrom": 2021,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_019_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Popular Diagnostic Centre",
          "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2025,
        "yearTo": 2028,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "6+ years of clinical practice",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Post-operative rehabilitation",
      "Preventive care",
      "Minimally invasive surgery",
      "Chronic disease management",
      "Endoscopic procedures",
      "Interventional procedures"
    ],
    "achievements": [
      "Led a hospital quality-improvement initiative"
    ],
    "social": {
      "facebook": "https://www.facebook.com/jahangir-talukder"
    },
    "publicPhone": "01682603864",
    "publicEmail": "jahangir.talukder@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Rajshahi",
      "bn": "জিইসি মোড়, নাসিরাবাদ, রাজশাহী"
    },
    "hospitalIds": [
      "islami-bank-rajshahi",
      "popular-diagnostic"
    ],
    "locationIds": [
      "rajshahi",
      "dhaka"
    ],
    "createdAt": 1783296000000,
    "updatedAt": 1790085600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_020",
    "linkNo": "594397176",
    "slug": "nasrin-uddin",
    "email": "nasrin.uddin@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$6t2XCelFv6yBWRVdM5YHiw==$6ZLqV+2p2u8TqpF2n7e0yGsz/FT8GJIbohYlt4RTShE=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 119,
    "name": {
      "en": "Dr. Nasrin Uddin",
      "bn": "ডা. নাসরিন উদ্দিন"
    },
    "speciality": {
      "en": "Ophthalmologist",
      "bn": "চক্ষু বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ophthalmologist"
    ],
    "designation": {
      "en": "Senior Consultant, Ophthalmologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চক্ষু বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Sher-e-Bangla Medical College Hospital",
      "bn": "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MD (Cardiology)"
    ],
    "about": {
      "en": "Dr. Nasrin Uddin is a ophthalmologist with 6 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নাসরিন উদ্দিন একজন চক্ষু বিশেষজ্ঞ, বাংলাদেশে 6 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-98355",
    "yearsExperience": 6,
    "patientsServed": 39000,
    "photo": {
      "url": "/demo/photos/f-11.webp",
      "width": 480,
      "height": 480,
      "hash": "6b6ce55889e2c3d0",
      "bytes": 10498
    },
    "chambers": [
      {
        "id": "ch_doc_020_1",
        "hospital": {
          "en": "Sher-e-Bangla Medical College Hospital",
          "bn": "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Barishal",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, বরিশাল"
        },
        "hospitalId": "barishal-sher-e-bangla",
        "locationId": "barishal",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01851800751",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_020_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 2010,
        "yearTo": 2015,
        "order": 0
      },
      {
        "id": "ed_doc_020_2",
        "degree": {
          "en": "MD (Cardiology)",
          "bn": "MD (Cardiology)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2016,
        "yearTo": 2020,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_020_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Sher-e-Bangla Medical College Hospital",
          "bn": "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Barishal",
          "bn": "বরিশাল"
        },
        "yearFrom": 2021,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Advanced Cardiac Life Support (ACLS) certified",
      "International fellowship training",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Minimally invasive surgery",
      "Patient counselling",
      "Chronic disease management",
      "Endoscopic procedures",
      "Emergency management"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {},
    "publicPhone": "01610867395",
    "publicEmail": "nasrin.uddin@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Road 15, Sector 3, Uttara, Barishal",
      "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, বরিশাল"
    },
    "hospitalIds": [
      "barishal-sher-e-bangla"
    ],
    "locationIds": [
      "barishal"
    ],
    "createdAt": 1783382400000,
    "updatedAt": 1790089200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_021",
    "linkNo": "710504963",
    "slug": "sharmin-ahmed",
    "email": "sharmin.ahmed@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$OP6hTu59DY6qN+bKImcmsw==$UYyZUP5FK0B5k+CF2Eqn6d93E90UcutbuXQV31p+7ZM=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 120,
    "name": {
      "en": "Dr. Sharmin Ahmed",
      "bn": "ডা. শারমিন আহমেদ"
    },
    "speciality": {
      "en": "Psychiatrist",
      "bn": "মানসিক রোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "psychiatrist"
    ],
    "designation": {
      "en": "Senior Consultant, Psychiatrist",
      "bn": "সিনিয়র কনসালট্যান্ট, মানসিক রোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Mount Adora Hospital",
      "bn": "মাউন্ট এডোরা হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Medicine)"
    ],
    "about": {
      "en": "Dr. Sharmin Ahmed is a psychiatrist with 13 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. শারমিন আহমেদ একজন মানসিক রোগ বিশেষজ্ঞ, বাংলাদেশে 13 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-80625",
    "yearsExperience": 13,
    "patientsServed": 9000,
    "photo": {
      "url": "/demo/photos/f-12.webp",
      "width": 480,
      "height": 480,
      "hash": "06241c04ce1ca432",
      "bytes": 19986
    },
    "chambers": [
      {
        "id": "ch_doc_021_1",
        "hospital": {
          "en": "Mount Adora Hospital",
          "bn": "মাউন্ট এডোরা হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Sylhet",
          "bn": "জিইসি মোড়, নাসিরাবাদ, সিলেট"
        },
        "hospitalId": "mount-adora",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01598312763",
        "order": 0
      },
      {
        "id": "ch_doc_021_2",
        "hospital": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Faridpur",
          "bn": "২১ শ্যামলী, মিরপুর রোড, ফরিদপুর"
        },
        "hospitalId": "faridpur-medical",
        "locationId": "faridpur",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01811596299",
        "order": 1
      },
      {
        "id": "ch_doc_021_3",
        "hospital": {
          "en": "United Hospital Limited",
          "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Dhaka",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
        },
        "hospitalId": "united-hospital",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01488079191",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_021_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 2003,
        "yearTo": 2008,
        "order": 0
      },
      {
        "id": "ed_doc_021_2",
        "degree": {
          "en": "FCPS (Medicine)",
          "bn": "FCPS (Medicine)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2009,
        "yearTo": 2013,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_021_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Mount Adora Hospital",
          "bn": "মাউন্ট এডোরা হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 2014,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_021_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Faridpur",
          "bn": "ফরিদপুর"
        },
        "yearFrom": 2018,
        "yearTo": 2021,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_021_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "United Hospital Limited",
          "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2022,
        "yearTo": 2025,
        "current": false,
        "order": 2
      }
    ],
    "awards": [
      {
        "id": "aw_doc_021_1",
        "title": {
          "en": "National Psychiatrist Excellence Award",
          "bn": "জাতীয় মানসিক রোগ বিশেষজ্ঞ শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2022,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_021_1",
        "subject": {
          "en": "Advanced Psychiatrist Training",
          "bn": "উন্নত মানসিক রোগ বিশেষজ্ঞ প্রশিক্ষণ"
        },
        "country": {
          "en": "India",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "1 year",
          "bn": ""
        },
        "year": 2013,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_021_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in psychiatrist practice: a district cohort",
          "bn": "মানসিক রোগ বিশেষজ্ঞ চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2019-09-20",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_021_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in psychiatrist care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় মানসিক রোগ বিশেষজ্ঞ সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2020-01-11",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "International fellowship training",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Minimally invasive surgery",
      "Ultrasonography",
      "Emergency management",
      "Paediatric care"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide",
      "Presented at a national medical conference",
      "Established a district-level screening programme"
    ],
    "social": {},
    "publicPhone": "01823110862",
    "publicEmail": "sharmin.ahmed@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Sylhet",
      "bn": "জিইসি মোড়, নাসিরাবাদ, সিলেট"
    },
    "hospitalIds": [
      "mount-adora",
      "faridpur-medical",
      "united-hospital"
    ],
    "locationIds": [
      "sylhet",
      "faridpur",
      "dhaka"
    ],
    "createdAt": 1783468800000,
    "updatedAt": 1790092800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_022",
    "linkNo": "620259778",
    "slug": "tahmina-alam",
    "email": "tahmina.alam@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$Pp76z37JwVSC7uTmz8a3Tg==$mig3gQji/4eD/2IaWvZsAZXwPAtdmRMEr+d/7JmTIF4=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 121,
    "name": {
      "en": "Dr. Tahmina Alam",
      "bn": "ডা. তাহমিনা আলম"
    },
    "speciality": {
      "en": "Nephrologist",
      "bn": "কিডনি রোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "nephrologist"
    ],
    "designation": {
      "en": "Senior Consultant, Nephrologist",
      "bn": "সিনিয়র কনসালট্যান্ট, কিডনি রোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Labaid Specialized Hospital",
      "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Medicine)"
    ],
    "about": {
      "en": "Dr. Tahmina Alam is a nephrologist with 18 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. তাহমিনা আলম একজন কিডনি রোগ বিশেষজ্ঞ, বাংলাদেশে 18 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-54696",
    "yearsExperience": 18,
    "patientsServed": 38000,
    "photo": {
      "url": "/demo/photos/f-13.webp",
      "width": 480,
      "height": 480,
      "hash": "c3b7f3cf33fc69c4",
      "bytes": 13180
    },
    "chambers": [
      {
        "id": "ch_doc_022_1",
        "hospital": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Dhaka",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
        },
        "hospitalId": "labaid-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01665380461",
        "order": 0
      },
      {
        "id": "ch_doc_022_2",
        "hospital": {
          "en": "Ibn Sina Specialized Hospital",
          "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Dhaka",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
        },
        "hospitalId": "ibn-sina",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01891042846",
        "order": 1
      },
      {
        "id": "ch_doc_022_3",
        "hospital": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Rangpur",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, রংপুর"
        },
        "hospitalId": "rangpur-medical",
        "locationId": "rangpur",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01792745582",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_022_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 1998,
        "yearTo": 2003,
        "order": 0
      },
      {
        "id": "ed_doc_022_2",
        "degree": {
          "en": "FCPS (Medicine)",
          "bn": "FCPS (Medicine)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2004,
        "yearTo": 2008,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_022_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2009,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_022_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Ibn Sina Specialized Hospital",
          "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2013,
        "yearTo": 2016,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_022_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rangpur",
          "bn": "রংপুর"
        },
        "yearFrom": 2017,
        "yearTo": 2020,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "International fellowship training",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Interventional procedures",
      "Clinical research",
      "Minimally invasive surgery",
      "Chronic disease management"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {
      "facebook": "https://www.facebook.com/tahmina-alam"
    },
    "publicPhone": "01915087823",
    "publicEmail": "tahmina.alam@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Zindabazar, Main Road, Dhaka",
      "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
    },
    "hospitalIds": [
      "labaid-specialized",
      "ibn-sina",
      "rangpur-medical"
    ],
    "locationIds": [
      "dhaka",
      "rangpur"
    ],
    "createdAt": 1783555200000,
    "updatedAt": 1790096400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_023",
    "linkNo": "667769392",
    "slug": "sabina-karim",
    "email": "sabina.karim@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$Fyji+Keheot41xX50aW9XA==$w1/qcnamw7GeLmuNMOIyCpPhfapexMmiS2kpvARE4HM=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 122,
    "name": {
      "en": "Dr. Sabina Karim",
      "bn": "ডা. সাবিনা করিম"
    },
    "speciality": {
      "en": "Haematologist",
      "bn": "রক্তরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "haematologist"
    ],
    "designation": {
      "en": "Senior Consultant, Haematologist",
      "bn": "সিনিয়র কনসালট্যান্ট, রক্তরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Sylhet MAG Osmani Medical College Hospital",
      "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Surgery)",
      "MS"
    ],
    "about": {
      "en": "Dr. Sabina Karim is a haematologist with 32 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. সাবিনা করিম একজন রক্তরোগ বিশেষজ্ঞ, বাংলাদেশে 32 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-20119",
    "yearsExperience": 32,
    "patientsServed": 19000,
    "photo": {
      "url": "/demo/photos/f-14.webp",
      "width": 480,
      "height": 480,
      "hash": "07896e1a41dd70c0",
      "bytes": 9574
    },
    "chambers": [
      {
        "id": "ch_doc_023_1",
        "hospital": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Sylhet",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, সিলেট"
        },
        "hospitalId": "sylhet-mag-osmani",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01472067932",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_023_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 1984,
        "yearTo": 1989,
        "order": 0
      },
      {
        "id": "ed_doc_023_2",
        "degree": {
          "en": "FCPS (Surgery)",
          "bn": "FCPS (Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1990,
        "yearTo": 1994,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_023_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 1995,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "32+ years of clinical practice",
      "Extensive ICU and emergency care experience",
      "International fellowship training"
    ],
    "skills": [
      "Post-operative rehabilitation",
      "Interventional procedures",
      "Preventive care",
      "Endoscopic procedures",
      "Chronic disease management",
      "Clinical research",
      "Ultrasonography"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {},
    "publicPhone": "01980935173",
    "publicEmail": "sabina.karim@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Plot 81, Block E, Bashundhara, Sylhet",
      "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, সিলেট"
    },
    "hospitalIds": [
      "sylhet-mag-osmani"
    ],
    "locationIds": [
      "sylhet"
    ],
    "createdAt": 1783641600000,
    "updatedAt": 1790100000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_024",
    "linkNo": "125309052",
    "slug": "mahmudul-alam",
    "email": "mahmudul.alam@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$59vwIiLE2Hu4cLLBxVRfkw==$Wks1g73Hq/Bv5vaw1yb6POMEP++I244HmYK5+hq6f10=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 123,
    "name": {
      "en": "Dr. Mahmudul Alam",
      "bn": "ডা. মাহমুদুল আলম"
    },
    "speciality": {
      "en": "Haematologist",
      "bn": "রক্তরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "haematologist"
    ],
    "designation": {
      "en": "Senior Consultant, Haematologist",
      "bn": "সিনিয়র কনসালট্যান্ট, রক্তরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Sylhet MAG Osmani Medical College Hospital",
      "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Surgery)",
      "MS"
    ],
    "about": {
      "en": "Dr. Mahmudul Alam is a haematologist with 23 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. মাহমুদুল আলম একজন রক্তরোগ বিশেষজ্ঞ, বাংলাদেশে 23 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-24254",
    "yearsExperience": 23,
    "patientsServed": 38000,
    "photo": {
      "url": "/demo/photos/m-10.webp",
      "width": 480,
      "height": 480,
      "hash": "11c981ac51656b47",
      "bytes": 6088
    },
    "chambers": [
      {
        "id": "ch_doc_024_1",
        "hospital": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Sylhet",
          "bn": "স্টেশন রোড, কোতোয়ালি, সিলেট"
        },
        "hospitalId": "sylhet-mag-osmani",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01960583357",
        "order": 0
      },
      {
        "id": "ch_doc_024_2",
        "hospital": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Dhaka",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
        },
        "hospitalId": "labaid-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01381054174",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_024_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 1993,
        "yearTo": 1998,
        "order": 0
      },
      {
        "id": "ed_doc_024_2",
        "degree": {
          "en": "FCPS (Surgery)",
          "bn": "FCPS (Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1999,
        "yearTo": 2003,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_024_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 2004,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_024_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2008,
        "yearTo": 2011,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "23+ years of clinical practice",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Clinical research",
      "Chronic disease management",
      "Post-operative rehabilitation",
      "Interventional procedures",
      "Minimally invasive surgery",
      "Diagnostic imaging"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {},
    "publicPhone": "01754854768",
    "publicEmail": "mahmudul.alam@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Sylhet",
      "bn": "স্টেশন রোড, কোতোয়ালি, সিলেট"
    },
    "hospitalIds": [
      "sylhet-mag-osmani",
      "labaid-specialized"
    ],
    "locationIds": [
      "sylhet",
      "dhaka"
    ],
    "createdAt": 1783728000000,
    "updatedAt": 1790103600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_025",
    "linkNo": "430417268",
    "slug": "dilruba-karim",
    "email": "dilruba.karim@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$3zEIcKEr6spR2mr8ut52IA==$ZSRTRqSkb9kGk2JA0bpfSO+BD2EwEoEPslYdt1o1MEE=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 124,
    "name": {
      "en": "Dr. Dilruba Karim",
      "bn": "ডা. দিলরুবা করিম"
    },
    "speciality": {
      "en": "Dental Surgeon",
      "bn": "ডেন্টাল সার্জন"
    },
    "specialityIds": [
      "dentist"
    ],
    "designation": {
      "en": "Senior Consultant, Dental Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, ডেন্টাল সার্জন"
    },
    "workplace": {
      "en": "Faridpur Medical College Hospital",
      "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Dilruba Karim is a dental surgeon with 30 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. দিলরুবা করিম একজন ডেন্টাল সার্জন, বাংলাদেশে 30 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-54232",
    "yearsExperience": 30,
    "patientsServed": 18000,
    "photo": {
      "url": "/demo/photos/f-15.webp",
      "width": 480,
      "height": 480,
      "hash": "067277a5a0072d18",
      "bytes": 17198
    },
    "chambers": [
      {
        "id": "ch_doc_025_1",
        "hospital": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Faridpur",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ফরিদপুর"
        },
        "hospitalId": "faridpur-medical",
        "locationId": "faridpur",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01447426139",
        "order": 0
      },
      {
        "id": "ch_doc_025_2",
        "hospital": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "address": {
          "en": "Station Road, Kotwali, Dhaka",
          "bn": "স্টেশন রোড, কোতোয়ালি, ঢাকা"
        },
        "hospitalId": "bsmmu",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01595012225",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_025_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 1986,
        "yearTo": 1991,
        "order": 0
      },
      {
        "id": "ed_doc_025_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1992,
        "yearTo": 1996,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_025_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Faridpur",
          "bn": "ফরিদপুর"
        },
        "yearFrom": 1997,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_025_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2001,
        "yearTo": 2004,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "30+ years of clinical practice",
      "International fellowship training"
    ],
    "skills": [
      "Paediatric care",
      "Clinical research",
      "Minimally invasive surgery",
      "Interventional procedures",
      "Chronic disease management"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {
      "facebook": "https://www.facebook.com/dilruba-karim"
    },
    "publicPhone": "01818468552",
    "publicEmail": "dilruba.karim@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "House 42, Road 12, Dhanmondi, Faridpur",
      "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ফরিদপুর"
    },
    "hospitalIds": [
      "faridpur-medical",
      "bsmmu"
    ],
    "locationIds": [
      "faridpur",
      "dhaka"
    ],
    "createdAt": 1783814400000,
    "updatedAt": 1790107200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_026",
    "linkNo": "832814343",
    "slug": "nasrin-haque-2",
    "email": "nasrin.haque.2@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$m07c4SDVjlX4dwQgikoNBw==$VkdwP2pSeaUyiKp0ktKD8nUmWuqqhZbl1dgakFoTjLI=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 125,
    "name": {
      "en": "Dr. Nasrin Haque",
      "bn": "ডা. নাসরিন হক"
    },
    "speciality": {
      "en": "Endocrinologist",
      "bn": "হরমোন ও ডায়াবেটিস বিশেষজ্ঞ"
    },
    "specialityIds": [
      "endocrinologist"
    ],
    "designation": {
      "en": "Senior Consultant, Endocrinologist",
      "bn": "সিনিয়র কনসালট্যান্ট, হরমোন ও ডায়াবেটিস বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Max Hospital & Diagnostic",
      "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Nasrin Haque is a endocrinologist with 6 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নাসরিন হক একজন হরমোন ও ডায়াবেটিস বিশেষজ্ঞ, বাংলাদেশে 6 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-69942",
    "yearsExperience": 6,
    "patientsServed": 16000,
    "photo": {
      "url": "/demo/photos/f-16.webp",
      "width": 480,
      "height": 480,
      "hash": "9d5ba96b48a1f9eb",
      "bytes": 12416
    },
    "chambers": [
      {
        "id": "ch_doc_026_1",
        "hospital": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "address": {
          "en": "Station Road, Kotwali, Chattogram",
          "bn": "স্টেশন রোড, কোতোয়ালি, চট্টগ্রাম"
        },
        "hospitalId": "max-chattogram",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01837353185",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_026_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 2010,
        "yearTo": 2015,
        "order": 0
      },
      {
        "id": "ed_doc_026_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2016,
        "yearTo": 2020,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_026_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2021,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "6+ years of clinical practice",
      "Advanced Cardiac Life Support (ACLS) certified",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Clinical research",
      "Paediatric care",
      "Patient counselling",
      "Post-operative rehabilitation"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {},
    "publicPhone": "01624010991",
    "publicEmail": "nasrin.haque.2@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Chattogram",
      "bn": "স্টেশন রোড, কোতোয়ালি, চট্টগ্রাম"
    },
    "hospitalIds": [
      "max-chattogram"
    ],
    "locationIds": [
      "chattogram"
    ],
    "createdAt": 1783900800000,
    "updatedAt": 1790110800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_027",
    "linkNo": "363345933",
    "slug": "saiful-mondal",
    "email": "saiful.mondal@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$F82h3VzttZvX0SFfygUdcA==$gyKMakdbhej2Jpel/YOmQHf5IIVLZnae6qOGa7QkMX0=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 126,
    "name": {
      "en": "Dr. Saiful Mondal",
      "bn": "ডা. সাইফুল মণ্ডল"
    },
    "speciality": {
      "en": "Neurologist",
      "bn": "স্নায়ুরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "neurologist"
    ],
    "designation": {
      "en": "Senior Consultant, Neurologist",
      "bn": "সিনিয়র কনসালট্যান্ট, স্নায়ুরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Mount Adora Hospital",
      "bn": "মাউন্ট এডোরা হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Saiful Mondal is a neurologist with 16 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. সাইফুল মণ্ডল একজন স্নায়ুরোগ বিশেষজ্ঞ, বাংলাদেশে 16 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-13651",
    "yearsExperience": 16,
    "patientsServed": 18000,
    "photo": {
      "url": "/demo/photos/m-11.webp",
      "width": 480,
      "height": 480,
      "hash": "0641be93339c323c",
      "bytes": 7218
    },
    "chambers": [
      {
        "id": "ch_doc_027_1",
        "hospital": {
          "en": "Mount Adora Hospital",
          "bn": "মাউন্ট এডোরা হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Sylhet",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, সিলেট"
        },
        "hospitalId": "mount-adora",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01350485270",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_027_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 2000,
        "yearTo": 2005,
        "order": 0
      },
      {
        "id": "ed_doc_027_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2006,
        "yearTo": 2010,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_027_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Mount Adora Hospital",
          "bn": "মাউন্ট এডোরা হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 2011,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "Extensive ICU and emergency care experience",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Diagnostic imaging",
      "Minimally invasive surgery",
      "Chronic disease management",
      "Emergency management"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {},
    "publicPhone": "01856475525",
    "publicEmail": "saiful.mondal@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Plot 81, Block E, Bashundhara, Sylhet",
      "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, সিলেট"
    },
    "hospitalIds": [
      "mount-adora"
    ],
    "locationIds": [
      "sylhet"
    ],
    "createdAt": 1783987200000,
    "updatedAt": 1790114400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_028",
    "linkNo": "514357387",
    "slug": "dilruba-rahman",
    "email": "dilruba.rahman@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$TUa5JBBAyNm6XYMXUDgk/A==$A3IJAR729vx2vaAjo3zirCnqBoqval5xILraw2ESIoM=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 127,
    "name": {
      "en": "Dr. Dilruba Rahman",
      "bn": "ডা. দিলরুবা রহমান"
    },
    "speciality": {
      "en": "General Surgeon",
      "bn": "জেনারেল সার্জন"
    },
    "specialityIds": [
      "general-surgeon"
    ],
    "designation": {
      "en": "Senior Consultant, General Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, জেনারেল সার্জন"
    },
    "workplace": {
      "en": "Rangpur Medical College Hospital",
      "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Medicine)"
    ],
    "about": {
      "en": "Dr. Dilruba Rahman is a general surgeon with 26 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. দিলরুবা রহমান একজন জেনারেল সার্জন, বাংলাদেশে 26 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-39445",
    "yearsExperience": 26,
    "patientsServed": 46000,
    "photo": {
      "url": "/demo/photos/f-17.webp",
      "width": 480,
      "height": 480,
      "hash": "53c08967ae7e5aae",
      "bytes": 7940
    },
    "chambers": [
      {
        "id": "ch_doc_028_1",
        "hospital": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Rangpur",
          "bn": "২১ শ্যামলী, মিরপুর রোড, রংপুর"
        },
        "hospitalId": "rangpur-medical",
        "locationId": "rangpur",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01910789036",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_028_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 1990,
        "yearTo": 1995,
        "order": 0
      },
      {
        "id": "ed_doc_028_2",
        "degree": {
          "en": "FCPS (Medicine)",
          "bn": "FCPS (Medicine)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1996,
        "yearTo": 2000,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_028_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rangpur",
          "bn": "রংপুর"
        },
        "yearFrom": 2001,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "Extensive ICU and emergency care experience",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Ultrasonography",
      "Emergency management",
      "Patient counselling",
      "Paediatric care",
      "Interventional procedures"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {
      "facebook": "https://www.facebook.com/dilruba-rahman"
    },
    "publicPhone": "01695104693",
    "publicEmail": "dilruba.rahman@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "21 Shyamoli, Mirpur Road, Rangpur",
      "bn": "২১ শ্যামলী, মিরপুর রোড, রংপুর"
    },
    "hospitalIds": [
      "rangpur-medical"
    ],
    "locationIds": [
      "rangpur"
    ],
    "createdAt": 1784073600000,
    "updatedAt": 1790118000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_029",
    "linkNo": "182756027",
    "slug": "saiful-sarker",
    "email": "saiful.sarker@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$pxxmRVqm1m0fBp7Kbl0uoA==$uycRqlGlfC1PCD1qES94cAtvt5QhlWIklLgwquG6a3o=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 128,
    "name": {
      "en": "Dr. Saiful Sarker",
      "bn": "ডা. সাইফুল সরকার"
    },
    "speciality": {
      "en": "Psychiatrist",
      "bn": "মানসিক রোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "psychiatrist"
    ],
    "designation": {
      "en": "Senior Consultant, Psychiatrist",
      "bn": "সিনিয়র কনসালট্যান্ট, মানসিক রোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Khulna Medical College Hospital",
      "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Surgery)",
      "MS"
    ],
    "about": {
      "en": "Dr. Saiful Sarker is a psychiatrist with 32 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. সাইফুল সরকার একজন মানসিক রোগ বিশেষজ্ঞ, বাংলাদেশে 32 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-79425",
    "yearsExperience": 32,
    "patientsServed": 24000,
    "photo": {
      "url": "/demo/photos/m-12.webp",
      "width": 480,
      "height": 480,
      "hash": "45786b2e5059468b",
      "bytes": 6878
    },
    "chambers": [
      {
        "id": "ch_doc_029_1",
        "hospital": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Khulna",
          "bn": "২১ শ্যামলী, মিরপুর রোড, খুলনা"
        },
        "hospitalId": "khulna-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01338284847",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_029_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 1984,
        "yearTo": 1989,
        "order": 0
      },
      {
        "id": "ed_doc_029_2",
        "degree": {
          "en": "FCPS (Surgery)",
          "bn": "FCPS (Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1990,
        "yearTo": 1994,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_029_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 1995,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "Advanced Cardiac Life Support (ACLS) certified",
      "32+ years of clinical practice"
    ],
    "skills": [
      "Patient counselling",
      "Minimally invasive surgery",
      "Clinical research",
      "Ultrasonography",
      "Paediatric care",
      "Preventive care"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {},
    "publicPhone": "01430663820",
    "publicEmail": "saiful.sarker@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "21 Shyamoli, Mirpur Road, Khulna",
      "bn": "২১ শ্যামলী, মিরপুর রোড, খুলনা"
    },
    "hospitalIds": [
      "khulna-medical"
    ],
    "locationIds": [
      "khulna"
    ],
    "createdAt": 1784160000000,
    "updatedAt": 1790121600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_030",
    "linkNo": "447871287",
    "slug": "rafiqul-siddique",
    "email": "rafiqul.siddique@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$BW9yEqpvf8xHLyYGFXEwtg==$WDPUyZeEDWWjzKT7MovEwYBtFNoiVKwW8a6uqOdGCjE=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 129,
    "name": {
      "en": "Dr. Rafiqul Siddique",
      "bn": "ডা. রফিকুল সিদ্দিক"
    },
    "speciality": {
      "en": "Gastroenterologist",
      "bn": "গ্যাস্ট্রোএন্টেরোলজিস্ট"
    },
    "specialityIds": [
      "gastroenterologist"
    ],
    "designation": {
      "en": "Senior Consultant, Gastroenterologist",
      "bn": "সিনিয়র কনসালট্যান্ট, গ্যাস্ট্রোএন্টেরোলজিস্ট"
    },
    "workplace": {
      "en": "Ibn Sina Specialized Hospital",
      "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Rafiqul Siddique is a gastroenterologist with 7 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রফিকুল সিদ্দিক একজন গ্যাস্ট্রোএন্টেরোলজিস্ট, বাংলাদেশে 7 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-72486",
    "yearsExperience": 7,
    "patientsServed": 21000,
    "photo": {
      "url": "/demo/photos/m-13.webp",
      "width": 480,
      "height": 480,
      "hash": "9ccfa3b42be86fb2",
      "bytes": 9382
    },
    "chambers": [
      {
        "id": "ch_doc_030_1",
        "hospital": {
          "en": "Ibn Sina Specialized Hospital",
          "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Dhaka",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
        },
        "hospitalId": "ibn-sina",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01347460304",
        "order": 0
      },
      {
        "id": "ch_doc_030_2",
        "hospital": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Khulna",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, খুলনা"
        },
        "hospitalId": "gazi-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01399758745",
        "order": 1
      },
      {
        "id": "ch_doc_030_3",
        "hospital": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Dhaka",
          "bn": "২১ শ্যামলী, মিরপুর রোড, ঢাকা"
        },
        "hospitalId": "bangladesh-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01683537061",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_030_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 2009,
        "yearTo": 2014,
        "order": 0
      },
      {
        "id": "ed_doc_030_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2015,
        "yearTo": 2019,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_030_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Ibn Sina Specialized Hospital",
          "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2020,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_030_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2024,
        "yearTo": 2027,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_030_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2028,
        "yearTo": 2031,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "7+ years of clinical practice",
      "Member, Bangladesh Medical Association",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Preventive care",
      "Diagnostic imaging",
      "Paediatric care",
      "Post-operative rehabilitation",
      "Clinical research",
      "Emergency management"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {},
    "publicPhone": "01467411528",
    "publicEmail": "rafiqul.siddique@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "House 42, Road 12, Dhanmondi, Dhaka",
      "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
    },
    "hospitalIds": [
      "ibn-sina",
      "gazi-medical",
      "bangladesh-specialized"
    ],
    "locationIds": [
      "dhaka",
      "khulna"
    ],
    "createdAt": 1784246400000,
    "updatedAt": 1790125200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_031",
    "linkNo": "881384146",
    "slug": "rokeya-ahmed",
    "email": "rokeya.ahmed@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$pmmCydz/2EvpO26Yd8jo7A==$Ja9BhtjXDBNlWlJ62xju6/7hh+3ciWpUiSKrKEKs7ck=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 130,
    "name": {
      "en": "Dr. Rokeya Ahmed",
      "bn": "ডা. রোকেয়া আহমেদ"
    },
    "speciality": {
      "en": "ENT Specialist",
      "bn": "নাক-কান-গলা বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ent-specialist"
    ],
    "designation": {
      "en": "Senior Consultant, ENT Specialist",
      "bn": "সিনিয়র কনসালট্যান্ট, নাক-কান-গলা বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Bangabandhu Sheikh Mujib Medical University",
      "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Rokeya Ahmed is a ent specialist with 25 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রোকেয়া আহমেদ একজন নাক-কান-গলা বিশেষজ্ঞ, বাংলাদেশে 25 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-84465",
    "yearsExperience": 25,
    "patientsServed": 28000,
    "photo": {
      "url": "/demo/photos/f-18.webp",
      "width": 480,
      "height": 480,
      "hash": "fb6377f21c762bb5",
      "bytes": 12382
    },
    "chambers": [
      {
        "id": "ch_doc_031_1",
        "hospital": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Dhaka",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
        },
        "hospitalId": "bsmmu",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01786101763",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_031_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 1991,
        "yearTo": 1996,
        "order": 0
      },
      {
        "id": "ed_doc_031_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1997,
        "yearTo": 2001,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_031_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2002,
        "current": true,
        "order": 0
      }
    ],
    "awards": [
      {
        "id": "aw_doc_031_1",
        "title": {
          "en": "National ENT Specialist Excellence Award",
          "bn": "জাতীয় নাক-কান-গলা বিশেষজ্ঞ শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2023,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_031_1",
        "subject": {
          "en": "Advanced ENT Specialist Training",
          "bn": "উন্নত নাক-কান-গলা বিশেষজ্ঞ প্রশিক্ষণ"
        },
        "country": {
          "en": "India",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "1 year",
          "bn": ""
        },
        "year": 2020,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_031_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in ent specialist practice: a district cohort",
          "bn": "নাক-কান-গলা বিশেষজ্ঞ চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2021-05-01",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_031_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in ent specialist care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় নাক-কান-গলা বিশেষজ্ঞ সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2024-01-08",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "International fellowship training",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Interventional procedures",
      "Ultrasonography",
      "Diagnostic imaging",
      "Post-operative rehabilitation",
      "Chronic disease management"
    ],
    "achievements": [
      "Presented at a national medical conference",
      "Established a district-level screening programme",
      "Led a hospital quality-improvement initiative"
    ],
    "social": {
      "facebook": "https://www.facebook.com/rokeya-ahmed"
    },
    "publicPhone": "01839865504",
    "publicEmail": "rokeya.ahmed@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Road 15, Sector 3, Uttara, Dhaka",
      "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
    },
    "hospitalIds": [
      "bsmmu"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1784332800000,
    "updatedAt": 1790128800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_032",
    "linkNo": "815204899",
    "slug": "dilruba-talukder",
    "email": "dilruba.talukder@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$NF8lEwC6i77/Tz5Dpl0L7g==$ebZvyz4+Hck2di6YGnzsbuu957ADYsvOR/eNRDoEwCo=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 131,
    "name": {
      "en": "Dr. Dilruba Talukder",
      "bn": "ডা. দিলরুবা তালুকদার"
    },
    "speciality": {
      "en": "Gynaecologist & Obstetrician",
      "bn": "স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "specialityIds": [
      "gynaecologist"
    ],
    "designation": {
      "en": "Senior Consultant, Gynaecologist & Obstetrician",
      "bn": "সিনিয়র কনসালট্যান্ট, স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Shaheed Ziaur Rahman Medical College Hospital",
      "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Dilruba Talukder is a gynaecologist & obstetrician with 9 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. দিলরুবা তালুকদার একজন স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ, বাংলাদেশে 9 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-38094",
    "yearsExperience": 9,
    "patientsServed": 18000,
    "photo": {
      "url": "/demo/photos/f-19.webp",
      "width": 480,
      "height": 480,
      "hash": "2472abf26e31efdb",
      "bytes": 17314
    },
    "chambers": [
      {
        "id": "ch_doc_032_1",
        "hospital": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Bogura",
          "bn": "জিইসি মোড়, নাসিরাবাদ, বগুড়া"
        },
        "hospitalId": "bogura-shaheed-ziaur",
        "locationId": "bogura",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01654486087",
        "order": 0
      },
      {
        "id": "ch_doc_032_2",
        "hospital": {
          "en": "Chattogram Medical College Hospital",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Chattogram",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, চট্টগ্রাম"
        },
        "hospitalId": "chittagong-medical",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01330949717",
        "order": 1
      },
      {
        "id": "ch_doc_032_3",
        "hospital": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Chattogram",
          "bn": "জিইসি মোড়, নাসিরাবাদ, চট্টগ্রাম"
        },
        "hospitalId": "max-chattogram",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01617636699",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_032_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 2007,
        "yearTo": 2012,
        "order": 0
      },
      {
        "id": "ed_doc_032_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2013,
        "yearTo": 2017,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_032_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Bogura",
          "bn": "বগুড়া"
        },
        "yearFrom": 2018,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_032_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Chattogram Medical College Hospital",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2022,
        "yearTo": 2025,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_032_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2026,
        "yearTo": 2029,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "9+ years of clinical practice",
      "Member, Bangladesh Medical Association",
      "International fellowship training"
    ],
    "skills": [
      "Patient counselling",
      "Minimally invasive surgery",
      "Ultrasonography",
      "Preventive care"
    ],
    "achievements": [
      "Trained junior consultants in advanced procedures"
    ],
    "social": {},
    "publicPhone": "01749769553",
    "publicEmail": "dilruba.talukder@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Bogura",
      "bn": "জিইসি মোড়, নাসিরাবাদ, বগুড়া"
    },
    "hospitalIds": [
      "bogura-shaheed-ziaur",
      "chittagong-medical",
      "max-chattogram"
    ],
    "locationIds": [
      "bogura",
      "chattogram"
    ],
    "createdAt": 1784419200000,
    "updatedAt": 1790132400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_033",
    "linkNo": "982268296",
    "slug": "rubina-siddique",
    "email": "rubina.siddique@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$jbIa6yYZkljQ7o234gqgOw==$f0Cz//bD0KkhPexOtsFbpsK0+Z7IOBKvgkPjIdManOw=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 132,
    "name": {
      "en": "Dr. Rubina Siddique",
      "bn": "ডা. রুবিনা সিদ্দিক"
    },
    "speciality": {
      "en": "Cardiologist",
      "bn": "হৃদরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "cardiologist"
    ],
    "designation": {
      "en": "Senior Consultant, Cardiologist",
      "bn": "সিনিয়র কনসালট্যান্ট, হৃদরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Bangladesh Specialized Hospital",
      "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MRCP (UK)"
    ],
    "about": {
      "en": "Dr. Rubina Siddique is a cardiologist with 9 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রুবিনা সিদ্দিক একজন হৃদরোগ বিশেষজ্ঞ, বাংলাদেশে 9 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-38345",
    "yearsExperience": 9,
    "patientsServed": 37000,
    "photo": {
      "url": "/demo/photos/f-20.webp",
      "width": 480,
      "height": 480,
      "hash": "3c98b4c6b0eaed9a",
      "bytes": 10290
    },
    "chambers": [
      {
        "id": "ch_doc_033_1",
        "hospital": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Dhaka",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
        },
        "hospitalId": "bangladesh-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01437935604",
        "order": 0
      },
      {
        "id": "ch_doc_033_2",
        "hospital": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Rajshahi",
          "bn": "জিইসি মোড়, নাসিরাবাদ, রাজশাহী"
        },
        "hospitalId": "rajshahi-medical",
        "locationId": "rajshahi",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01553809600",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_033_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 2007,
        "yearTo": 2012,
        "order": 0
      },
      {
        "id": "ed_doc_033_2",
        "degree": {
          "en": "MRCP (UK)",
          "bn": "MRCP (UK)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2013,
        "yearTo": 2017,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_033_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2018,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_033_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rajshahi",
          "bn": "রাজশাহী"
        },
        "yearFrom": 2022,
        "yearTo": 2025,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "9+ years of clinical practice",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Preventive care",
      "Minimally invasive surgery",
      "Patient counselling",
      "Emergency management",
      "Interventional procedures"
    ],
    "achievements": [
      "Led a hospital quality-improvement initiative"
    ],
    "social": {},
    "publicPhone": "01389216854",
    "publicEmail": "rubina.siddique@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Zindabazar, Main Road, Dhaka",
      "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
    },
    "hospitalIds": [
      "bangladesh-specialized",
      "rajshahi-medical"
    ],
    "locationIds": [
      "dhaka",
      "rajshahi"
    ],
    "createdAt": 1784505600000,
    "updatedAt": 1790136000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_034",
    "linkNo": "977641613",
    "slug": "kamrul-hossain",
    "email": "kamrul.hossain@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$5LK/XwowwZjPrbeedgeYDA==$uCyYTVdODjqK7uTxPS4rSAUMNQJjouO7oUKo/DyUm5I=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 133,
    "name": {
      "en": "Dr. Kamrul Hossain",
      "bn": "ডা. কামরুল হোসেন"
    },
    "speciality": {
      "en": "Oncologist",
      "bn": "ক্যান্সার বিশেষজ্ঞ"
    },
    "specialityIds": [
      "oncologist"
    ],
    "designation": {
      "en": "Senior Consultant, Oncologist",
      "bn": "সিনিয়র কনসালট্যান্ট, ক্যান্সার বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Popular Diagnostic Centre",
      "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Kamrul Hossain is a oncologist with 12 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. কামরুল হোসেন একজন ক্যান্সার বিশেষজ্ঞ, বাংলাদেশে 12 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-51850",
    "yearsExperience": 12,
    "patientsServed": 17000,
    "photo": {
      "url": "/demo/photos/m-14.webp",
      "width": 480,
      "height": 480,
      "hash": "bb48e3accf1e60b2",
      "bytes": 11874
    },
    "chambers": [
      {
        "id": "ch_doc_034_1",
        "hospital": {
          "en": "Popular Diagnostic Centre",
          "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
        },
        "address": {
          "en": "Zindabazar, Main Road, Dhaka",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
        },
        "hospitalId": "popular-diagnostic",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01530065967",
        "order": 0
      },
      {
        "id": "ch_doc_034_2",
        "hospital": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Dhaka",
          "bn": "২১ শ্যামলী, মিরপুর রোড, ঢাকা"
        },
        "hospitalId": "square-hospitals",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01981393984",
        "order": 1
      },
      {
        "id": "ch_doc_034_3",
        "hospital": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Faridpur",
          "bn": "২১ শ্যামলী, মিরপুর রোড, ফরিদপুর"
        },
        "hospitalId": "faridpur-medical",
        "locationId": "faridpur",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01950362726",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_034_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 2004,
        "yearTo": 2009,
        "order": 0
      },
      {
        "id": "ed_doc_034_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2010,
        "yearTo": 2014,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_034_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Popular Diagnostic Centre",
          "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2015,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_034_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2019,
        "yearTo": 2022,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_034_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Faridpur",
          "bn": "ফরিদপুর"
        },
        "yearFrom": 2023,
        "yearTo": 2026,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "12+ years of clinical practice",
      "International fellowship training"
    ],
    "skills": [
      "Patient counselling",
      "Endoscopic procedures",
      "Chronic disease management",
      "Preventive care",
      "Minimally invasive surgery",
      "Emergency management",
      "Ultrasonography"
    ],
    "achievements": [
      "Trained junior consultants in advanced procedures"
    ],
    "social": {
      "facebook": "https://www.facebook.com/kamrul-hossain"
    },
    "publicPhone": "01439507952",
    "publicEmail": "kamrul.hossain@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Zindabazar, Main Road, Dhaka",
      "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
    },
    "hospitalIds": [
      "popular-diagnostic",
      "square-hospitals",
      "faridpur-medical"
    ],
    "locationIds": [
      "dhaka",
      "faridpur"
    ],
    "createdAt": 1784592000000,
    "updatedAt": 1790139600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_035",
    "linkNo": "608838579",
    "slug": "tahmina-ahmed-2",
    "email": "tahmina.ahmed.2@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$OsCENJ3TVXLYBJ6ZnlLVyg==$zh4Hl+NiUdTFsuFzfb7XWmnnrgMxLUCbggrp8libfDc=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 134,
    "name": {
      "en": "Dr. Tahmina Ahmed",
      "bn": "ডা. তাহমিনা আহমেদ"
    },
    "speciality": {
      "en": "ENT Specialist",
      "bn": "নাক-কান-গলা বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ent-specialist"
    ],
    "designation": {
      "en": "Senior Consultant, ENT Specialist",
      "bn": "সিনিয়র কনসালট্যান্ট, নাক-কান-গলা বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Sylhet MAG Osmani Medical College Hospital",
      "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MD (Cardiology)"
    ],
    "about": {
      "en": "Dr. Tahmina Ahmed is a ent specialist with 27 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. তাহমিনা আহমেদ একজন নাক-কান-গলা বিশেষজ্ঞ, বাংলাদেশে 27 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-20316",
    "yearsExperience": 27,
    "patientsServed": 30000,
    "photo": {
      "url": "/demo/photos/f-21.webp",
      "width": 480,
      "height": 480,
      "hash": "9166fcad0394011e",
      "bytes": 12032
    },
    "chambers": [
      {
        "id": "ch_doc_035_1",
        "hospital": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Sylhet",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, সিলেট"
        },
        "hospitalId": "sylhet-mag-osmani",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01771476318",
        "order": 0
      },
      {
        "id": "ch_doc_035_2",
        "hospital": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "address": {
          "en": "Station Road, Kotwali, Dhaka",
          "bn": "স্টেশন রোড, কোতোয়ালি, ঢাকা"
        },
        "hospitalId": "evercare-dhaka",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01814014815",
        "order": 1
      },
      {
        "id": "ch_doc_035_3",
        "hospital": {
          "en": "Islami Bank Medical College Hospital",
          "bn": "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Rajshahi",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, রাজশাহী"
        },
        "hospitalId": "islami-bank-rajshahi",
        "locationId": "rajshahi",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01915838147",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_035_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 1989,
        "yearTo": 1994,
        "order": 0
      },
      {
        "id": "ed_doc_035_2",
        "degree": {
          "en": "MD (Cardiology)",
          "bn": "MD (Cardiology)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1995,
        "yearTo": 1999,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_035_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 2000,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_035_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2004,
        "yearTo": 2007,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_035_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Islami Bank Medical College Hospital",
          "bn": "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rajshahi",
          "bn": "রাজশাহী"
        },
        "yearFrom": 2008,
        "yearTo": 2011,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "27+ years of clinical practice",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Endoscopic procedures",
      "Emergency management",
      "Diagnostic imaging",
      "Minimally invasive surgery",
      "Preventive care",
      "Clinical research",
      "Interventional procedures"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {},
    "publicPhone": "01612566229",
    "publicEmail": "tahmina.ahmed.2@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "House 42, Road 12, Dhanmondi, Sylhet",
      "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, সিলেট"
    },
    "hospitalIds": [
      "sylhet-mag-osmani",
      "evercare-dhaka",
      "islami-bank-rajshahi"
    ],
    "locationIds": [
      "sylhet",
      "dhaka",
      "rajshahi"
    ],
    "createdAt": 1784678400000,
    "updatedAt": 1790143200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_036",
    "linkNo": "525916694",
    "slug": "rubina-sultana",
    "email": "rubina.sultana@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$9zfPvsWQgWVh9J4KpsD4Cw==$fNcLBxOeeThx/Z427JQO+1DPZq1aVP5cEb4+u3hx5ck=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 135,
    "name": {
      "en": "Dr. Rubina Sultana",
      "bn": "ডা. রুবিনা সুলতানা"
    },
    "speciality": {
      "en": "Dental Surgeon",
      "bn": "ডেন্টাল সার্জন"
    },
    "specialityIds": [
      "dentist"
    ],
    "designation": {
      "en": "Senior Consultant, Dental Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, ডেন্টাল সার্জন"
    },
    "workplace": {
      "en": "Mymensingh Medical College Hospital",
      "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Medicine)"
    ],
    "about": {
      "en": "Dr. Rubina Sultana is a dental surgeon with 31 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রুবিনা সুলতানা একজন ডেন্টাল সার্জন, বাংলাদেশে 31 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-60882",
    "yearsExperience": 31,
    "patientsServed": 5000,
    "photo": {
      "url": "/demo/photos/f-22.webp",
      "width": 480,
      "height": 480,
      "hash": "b68c894e4fca82c9",
      "bytes": 10364
    },
    "chambers": [
      {
        "id": "ch_doc_036_1",
        "hospital": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Mymensingh",
          "bn": "স্টেশন রোড, কোতোয়ালি, ময়মনসিংহ"
        },
        "hospitalId": "mymensingh-medical",
        "locationId": "mymensingh",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01823922595",
        "order": 0
      },
      {
        "id": "ch_doc_036_2",
        "hospital": {
          "en": "Ibn Sina Specialized Hospital",
          "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Dhaka",
          "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
        },
        "hospitalId": "ibn-sina",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01955466575",
        "order": 1
      },
      {
        "id": "ch_doc_036_3",
        "hospital": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Chattogram",
          "bn": "২১ শ্যামলী, মিরপুর রোড, চট্টগ্রাম"
        },
        "hospitalId": "max-chattogram",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01432038346",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_036_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Chattogram Medical College",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ"
        },
        "yearFrom": 1985,
        "yearTo": 1990,
        "order": 0
      },
      {
        "id": "ed_doc_036_2",
        "degree": {
          "en": "FCPS (Medicine)",
          "bn": "FCPS (Medicine)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1991,
        "yearTo": 1995,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_036_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Mymensingh",
          "bn": "ময়মনসিংহ"
        },
        "yearFrom": 1996,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_036_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Ibn Sina Specialized Hospital",
          "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2000,
        "yearTo": 2003,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_036_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2004,
        "yearTo": 2007,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "International fellowship training",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Minimally invasive surgery",
      "Emergency management",
      "Post-operative rehabilitation",
      "Clinical research",
      "Preventive care",
      "Patient counselling",
      "Diagnostic imaging"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {},
    "publicPhone": "01823490071",
    "publicEmail": "rubina.sultana@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Mymensingh",
      "bn": "স্টেশন রোড, কোতোয়ালি, ময়মনসিংহ"
    },
    "hospitalIds": [
      "mymensingh-medical",
      "ibn-sina",
      "max-chattogram"
    ],
    "locationIds": [
      "mymensingh",
      "dhaka",
      "chattogram"
    ],
    "createdAt": 1784764800000,
    "updatedAt": 1790146800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_037",
    "linkNo": "398594774",
    "slug": "rokeya-mondal",
    "email": "rokeya.mondal@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$IZnsTDoM0o4V4WvosOfHSw==$75RrOzwOyWlNX6upbVgpkOLDbFPyI4fcCu/pOMRO9vE=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 136,
    "name": {
      "en": "Dr. Rokeya Mondal",
      "bn": "ডা. রোকেয়া মণ্ডল"
    },
    "speciality": {
      "en": "Orthopaedic Surgeon",
      "bn": "অর্থোপেডিক সার্জন"
    },
    "specialityIds": [
      "orthopaedic-surgeon"
    ],
    "designation": {
      "en": "Senior Consultant, Orthopaedic Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, অর্থোপেডিক সার্জন"
    },
    "workplace": {
      "en": "Faridpur Medical College Hospital",
      "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Medicine)"
    ],
    "about": {
      "en": "Dr. Rokeya Mondal is a orthopaedic surgeon with 10 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রোকেয়া মণ্ডল একজন অর্থোপেডিক সার্জন, বাংলাদেশে 10 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-82666",
    "yearsExperience": 10,
    "patientsServed": 46000,
    "photo": {
      "url": "/demo/photos/f-23.webp",
      "width": 480,
      "height": 480,
      "hash": "96e557c223c4cf0a",
      "bytes": 8966
    },
    "chambers": [
      {
        "id": "ch_doc_037_1",
        "hospital": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Faridpur",
          "bn": "২১ শ্যামলী, মিরপুর রোড, ফরিদপুর"
        },
        "hospitalId": "faridpur-medical",
        "locationId": "faridpur",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01581303594",
        "order": 0
      },
      {
        "id": "ch_doc_037_2",
        "hospital": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Khulna",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, খুলনা"
        },
        "hospitalId": "gazi-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01664664532",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_037_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 2006,
        "yearTo": 2011,
        "order": 0
      },
      {
        "id": "ed_doc_037_2",
        "degree": {
          "en": "FCPS (Medicine)",
          "bn": "FCPS (Medicine)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2012,
        "yearTo": 2016,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_037_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Faridpur",
          "bn": "ফরিদপুর"
        },
        "yearFrom": 2017,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_037_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2021,
        "yearTo": 2024,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "10+ years of clinical practice",
      "International fellowship training",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Post-operative rehabilitation",
      "Patient counselling",
      "Minimally invasive surgery",
      "Diagnostic imaging"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {
      "facebook": "https://www.facebook.com/rokeya-mondal"
    },
    "publicPhone": "01356676054",
    "publicEmail": "rokeya.mondal@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "21 Shyamoli, Mirpur Road, Faridpur",
      "bn": "২১ শ্যামলী, মিরপুর রোড, ফরিদপুর"
    },
    "hospitalIds": [
      "faridpur-medical",
      "gazi-medical"
    ],
    "locationIds": [
      "faridpur",
      "khulna"
    ],
    "createdAt": 1784851200000,
    "updatedAt": 1790150400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_038",
    "linkNo": "276443768",
    "slug": "mohammad-sultana",
    "email": "mohammad.sultana@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$dkPHO6SxgZmP1YdOfAPrGQ==$R5jWilI4+fhOfSK0TR66Pf9PvLjXO6Qv5ZyP/ffN2Rw=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 137,
    "name": {
      "en": "Dr. Mohammad Sultana",
      "bn": "ডা. মোহাম্মদ সুলতানা"
    },
    "speciality": {
      "en": "Gynaecologist & Obstetrician",
      "bn": "স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "specialityIds": [
      "gynaecologist"
    ],
    "designation": {
      "en": "Senior Consultant, Gynaecologist & Obstetrician",
      "bn": "সিনিয়র কনসালট্যান্ট, স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Shaheed Ziaur Rahman Medical College Hospital",
      "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MRCP (UK)"
    ],
    "about": {
      "en": "Dr. Mohammad Sultana is a gynaecologist & obstetrician with 25 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. মোহাম্মদ সুলতানা একজন স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ, বাংলাদেশে 25 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-74427",
    "yearsExperience": 25,
    "patientsServed": 26000,
    "photo": {
      "url": "/demo/photos/m-15.webp",
      "width": 480,
      "height": 480,
      "hash": "daded0ee2353a649",
      "bytes": 8228
    },
    "chambers": [
      {
        "id": "ch_doc_038_1",
        "hospital": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Bogura",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, বগুড়া"
        },
        "hospitalId": "bogura-shaheed-ziaur",
        "locationId": "bogura",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01744069410",
        "order": 0
      },
      {
        "id": "ch_doc_038_2",
        "hospital": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Dhaka",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
        },
        "hospitalId": "evercare-dhaka",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01730424779",
        "order": 1
      },
      {
        "id": "ch_doc_038_3",
        "hospital": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Khulna",
          "bn": "২১ শ্যামলী, মিরপুর রোড, খুলনা"
        },
        "hospitalId": "khulna-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01993224779",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_038_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 1991,
        "yearTo": 1996,
        "order": 0
      },
      {
        "id": "ed_doc_038_2",
        "degree": {
          "en": "MRCP (UK)",
          "bn": "MRCP (UK)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1997,
        "yearTo": 2001,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_038_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Bogura",
          "bn": "বগুড়া"
        },
        "yearFrom": 2002,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_038_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2006,
        "yearTo": 2009,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_038_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2010,
        "yearTo": 2013,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "25+ years of clinical practice",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Interventional procedures",
      "Preventive care",
      "Minimally invasive surgery",
      "Diagnostic imaging",
      "Clinical research",
      "Paediatric care"
    ],
    "achievements": [
      "Trained junior consultants in advanced procedures"
    ],
    "social": {},
    "publicPhone": "01644307344",
    "publicEmail": "mohammad.sultana@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Road 15, Sector 3, Uttara, Bogura",
      "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, বগুড়া"
    },
    "hospitalIds": [
      "bogura-shaheed-ziaur",
      "evercare-dhaka",
      "khulna-medical"
    ],
    "locationIds": [
      "bogura",
      "dhaka",
      "khulna"
    ],
    "createdAt": 1784937600000,
    "updatedAt": 1790154000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_039",
    "linkNo": "955014638",
    "slug": "mizanur-mondal",
    "email": "mizanur.mondal@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$1KxAVh21RFZuibglCuFVTw==$fSDed+C5sWubRq+uWUsUJUje+6SpUptJEfkB4bn4u9g=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 138,
    "name": {
      "en": "Dr. Mizanur Mondal",
      "bn": "ডা. মিজানুর মণ্ডল"
    },
    "speciality": {
      "en": "Orthopaedic Surgeon",
      "bn": "অর্থোপেডিক সার্জন"
    },
    "specialityIds": [
      "orthopaedic-surgeon"
    ],
    "designation": {
      "en": "Senior Consultant, Orthopaedic Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, অর্থোপেডিক সার্জন"
    },
    "workplace": {
      "en": "Rangpur Medical College Hospital",
      "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Mizanur Mondal is a orthopaedic surgeon with 11 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. মিজানুর মণ্ডল একজন অর্থোপেডিক সার্জন, বাংলাদেশে 11 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-55986",
    "yearsExperience": 11,
    "patientsServed": 21000,
    "photo": {
      "url": "/demo/photos/m-16.webp",
      "width": 480,
      "height": 480,
      "hash": "ab88f38258918e15",
      "bytes": 9618
    },
    "chambers": [
      {
        "id": "ch_doc_039_1",
        "hospital": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Rangpur",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, রংপুর"
        },
        "hospitalId": "rangpur-medical",
        "locationId": "rangpur",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01573789800",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_039_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 2005,
        "yearTo": 2010,
        "order": 0
      },
      {
        "id": "ed_doc_039_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2011,
        "yearTo": 2015,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_039_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rangpur",
          "bn": "রংপুর"
        },
        "yearFrom": 2016,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "11+ years of clinical practice",
      "Member, Bangladesh Medical Association",
      "International fellowship training"
    ],
    "skills": [
      "Interventional procedures",
      "Paediatric care",
      "Ultrasonography",
      "Emergency management",
      "Patient counselling"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {},
    "publicPhone": "01647388402",
    "publicEmail": "mizanur.mondal@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Zindabazar, Main Road, Rangpur",
      "bn": "জিন্দাবাজার, প্রধান সড়ক, রংপুর"
    },
    "hospitalIds": [
      "rangpur-medical"
    ],
    "locationIds": [
      "rangpur"
    ],
    "createdAt": 1785024000000,
    "updatedAt": 1790157600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_040",
    "linkNo": "410003378",
    "slug": "rokeya-sarker",
    "email": "rokeya.sarker@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$2A7ZC5eYLOirCsz3SXUCTQ==$HAT/wbTPoR/+EikT+n6IQDvreKQvmk5rcxg0+M/LRA0=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 139,
    "name": {
      "en": "Dr. Rokeya Sarker",
      "bn": "ডা. রোকেয়া সরকার"
    },
    "speciality": {
      "en": "Psychiatrist",
      "bn": "মানসিক রোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "psychiatrist"
    ],
    "designation": {
      "en": "Senior Consultant, Psychiatrist",
      "bn": "সিনিয়র কনসালট্যান্ট, মানসিক রোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Bangladesh Specialized Hospital",
      "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MD (Cardiology)"
    ],
    "about": {
      "en": "Dr. Rokeya Sarker is a psychiatrist with 27 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রোকেয়া সরকার একজন মানসিক রোগ বিশেষজ্ঞ, বাংলাদেশে 27 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-17596",
    "yearsExperience": 27,
    "patientsServed": 25000,
    "photo": {
      "url": "/demo/photos/f-24.webp",
      "width": 480,
      "height": 480,
      "hash": "d9e0d82bc95fb899",
      "bytes": 20788
    },
    "chambers": [
      {
        "id": "ch_doc_040_1",
        "hospital": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Dhaka",
          "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
        },
        "hospitalId": "bangladesh-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01323384035",
        "order": 0
      },
      {
        "id": "ch_doc_040_2",
        "hospital": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Faridpur",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ফরিদপুর"
        },
        "hospitalId": "faridpur-medical",
        "locationId": "faridpur",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01487686230",
        "order": 1
      },
      {
        "id": "ch_doc_040_3",
        "hospital": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Rangpur",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, রংপুর"
        },
        "hospitalId": "rangpur-medical",
        "locationId": "rangpur",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01840408132",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_040_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 1989,
        "yearTo": 1994,
        "order": 0
      },
      {
        "id": "ed_doc_040_2",
        "degree": {
          "en": "MD (Cardiology)",
          "bn": "MD (Cardiology)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1995,
        "yearTo": 1999,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_040_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2000,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_040_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Faridpur",
          "bn": "ফরিদপুর"
        },
        "yearFrom": 2004,
        "yearTo": 2007,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_040_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rangpur",
          "bn": "রংপুর"
        },
        "yearFrom": 2008,
        "yearTo": 2011,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "Advanced Cardiac Life Support (ACLS) certified",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Patient counselling",
      "Minimally invasive surgery",
      "Emergency management",
      "Paediatric care",
      "Endoscopic procedures",
      "Post-operative rehabilitation",
      "Chronic disease management"
    ],
    "achievements": [
      "Led a hospital quality-improvement initiative"
    ],
    "social": {
      "facebook": "https://www.facebook.com/rokeya-sarker"
    },
    "publicPhone": "01584750231",
    "publicEmail": "rokeya.sarker@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Dhaka",
      "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
    },
    "hospitalIds": [
      "bangladesh-specialized",
      "faridpur-medical",
      "rangpur-medical"
    ],
    "locationIds": [
      "dhaka",
      "faridpur",
      "rangpur"
    ],
    "createdAt": 1785110400000,
    "updatedAt": 1790161200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_041",
    "linkNo": "399121154",
    "slug": "jahangir-uddin",
    "email": "jahangir.uddin@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$eF5sx58+OrhIqwrPlgxhvg==$a5jJ4NWG1LLZt9ZbGRTfa2yucwmNfqtOt6sgX1FaI8k=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 140,
    "name": {
      "en": "Dr. Jahangir Uddin",
      "bn": "ডা. জাহাঙ্গীর উদ্দিন"
    },
    "speciality": {
      "en": "Haematologist",
      "bn": "রক্তরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "haematologist"
    ],
    "designation": {
      "en": "Senior Consultant, Haematologist",
      "bn": "সিনিয়র কনসালট্যান্ট, রক্তরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Mymensingh Medical College Hospital",
      "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Surgery)",
      "MS"
    ],
    "about": {
      "en": "Dr. Jahangir Uddin is a haematologist with 12 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. জাহাঙ্গীর উদ্দিন একজন রক্তরোগ বিশেষজ্ঞ, বাংলাদেশে 12 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-84732",
    "yearsExperience": 12,
    "patientsServed": 18000,
    "photo": {
      "url": "/demo/photos/m-17.webp",
      "width": 480,
      "height": 480,
      "hash": "71a6059c925eff3c",
      "bytes": 12132
    },
    "chambers": [
      {
        "id": "ch_doc_041_1",
        "hospital": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Mymensingh",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, ময়মনসিংহ"
        },
        "hospitalId": "mymensingh-medical",
        "locationId": "mymensingh",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01760719100",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_041_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 2004,
        "yearTo": 2009,
        "order": 0
      },
      {
        "id": "ed_doc_041_2",
        "degree": {
          "en": "FCPS (Surgery)",
          "bn": "FCPS (Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2010,
        "yearTo": 2014,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_041_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Mymensingh",
          "bn": "ময়মনসিংহ"
        },
        "yearFrom": 2015,
        "current": true,
        "order": 0
      }
    ],
    "awards": [
      {
        "id": "aw_doc_041_1",
        "title": {
          "en": "National Haematologist Excellence Award",
          "bn": "জাতীয় রক্তরোগ বিশেষজ্ঞ শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2024,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_041_1",
        "subject": {
          "en": "Advanced Haematologist Training",
          "bn": "উন্নত রক্তরোগ বিশেষজ্ঞ প্রশিক্ষণ"
        },
        "country": {
          "en": "Thailand",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "1 year",
          "bn": ""
        },
        "year": 2022,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_041_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in haematologist practice: a district cohort",
          "bn": "রক্তরোগ বিশেষজ্ঞ চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2020-02-25",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_041_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in haematologist care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় রক্তরোগ বিশেষজ্ঞ সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2022-11-06",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "12+ years of clinical practice",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Emergency management",
      "Minimally invasive surgery",
      "Clinical research",
      "Ultrasonography",
      "Endoscopic procedures",
      "Preventive care",
      "Chronic disease management"
    ],
    "achievements": [
      "Trained junior consultants in advanced procedures",
      "Established a district-level screening programme",
      "Presented at a national medical conference"
    ],
    "social": {},
    "publicPhone": "01862070563",
    "publicEmail": "jahangir.uddin@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Zindabazar, Main Road, Mymensingh",
      "bn": "জিন্দাবাজার, প্রধান সড়ক, ময়মনসিংহ"
    },
    "hospitalIds": [
      "mymensingh-medical"
    ],
    "locationIds": [
      "mymensingh"
    ],
    "createdAt": 1785196800000,
    "updatedAt": 1790164800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_042",
    "linkNo": "109761005",
    "slug": "rokeya-hossain",
    "email": "rokeya.hossain@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$9H9vSzkASqtSdOiIpJxWDw==$PZjJNMFjpqRjFu7tfB43eoql+6XRU2lE0JCYlMZsRXU=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 141,
    "name": {
      "en": "Dr. Rokeya Hossain",
      "bn": "ডা. রোকেয়া হোসেন"
    },
    "speciality": {
      "en": "Paediatrician",
      "bn": "শিশুরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "paediatrician"
    ],
    "designation": {
      "en": "Senior Consultant, Paediatrician",
      "bn": "সিনিয়র কনসালট্যান্ট, শিশুরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Gazi Medical College Hospital",
      "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Rokeya Hossain is a paediatrician with 26 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রোকেয়া হোসেন একজন শিশুরোগ বিশেষজ্ঞ, বাংলাদেশে 26 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-75836",
    "yearsExperience": 26,
    "patientsServed": 9000,
    "photo": {
      "url": "/demo/photos/f-25.webp",
      "width": 480,
      "height": 480,
      "hash": "1d55b1e4979f5513",
      "bytes": 9922
    },
    "chambers": [
      {
        "id": "ch_doc_042_1",
        "hospital": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Khulna",
          "bn": "২১ শ্যামলী, মিরপুর রোড, খুলনা"
        },
        "hospitalId": "gazi-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01564339241",
        "order": 0
      },
      {
        "id": "ch_doc_042_2",
        "hospital": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Cumilla",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, কুমিল্লা"
        },
        "hospitalId": "comilla-medical",
        "locationId": "cumilla",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01634099594",
        "order": 1
      },
      {
        "id": "ch_doc_042_3",
        "hospital": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Dhaka",
          "bn": "২১ শ্যামলী, মিরপুর রোড, ঢাকা"
        },
        "hospitalId": "labaid-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01612986343",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_042_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Chattogram Medical College",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ"
        },
        "yearFrom": 1990,
        "yearTo": 1995,
        "order": 0
      },
      {
        "id": "ed_doc_042_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1996,
        "yearTo": 2000,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_042_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2001,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_042_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Cumilla",
          "bn": "কুমিল্লা"
        },
        "yearFrom": 2005,
        "yearTo": 2008,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_042_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2009,
        "yearTo": 2012,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "Member, Bangladesh Medical Association",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Emergency management",
      "Clinical research",
      "Preventive care",
      "Ultrasonography"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {},
    "publicPhone": "01663909173",
    "publicEmail": "rokeya.hossain@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "21 Shyamoli, Mirpur Road, Khulna",
      "bn": "২১ শ্যামলী, মিরপুর রোড, খুলনা"
    },
    "hospitalIds": [
      "gazi-medical",
      "comilla-medical",
      "labaid-specialized"
    ],
    "locationIds": [
      "khulna",
      "cumilla",
      "dhaka"
    ],
    "createdAt": 1785283200000,
    "updatedAt": 1790168400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_043",
    "linkNo": "467406896",
    "slug": "tanvir-haque",
    "email": "tanvir.haque@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$3wIOpc5jQ5eUIhtt0XLyqg==$3QTc9uBEAEwUn9eBeOCDfzuhlfgKxU9w30WqK+N5N0Y=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 142,
    "name": {
      "en": "Dr. Tanvir Haque",
      "bn": "ডা. তানভীর হক"
    },
    "speciality": {
      "en": "Gynaecologist & Obstetrician",
      "bn": "স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "specialityIds": [
      "gynaecologist"
    ],
    "designation": {
      "en": "Senior Consultant, Gynaecologist & Obstetrician",
      "bn": "সিনিয়র কনসালট্যান্ট, স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Khulna Medical College Hospital",
      "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Tanvir Haque is a gynaecologist & obstetrician with 20 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. তানভীর হক একজন স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ, বাংলাদেশে 20 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-79326",
    "yearsExperience": 20,
    "patientsServed": 13000,
    "photo": {
      "url": "/demo/photos/m-18.webp",
      "width": 480,
      "height": 480,
      "hash": "81e4d81b0f662f70",
      "bytes": 6622
    },
    "chambers": [
      {
        "id": "ch_doc_043_1",
        "hospital": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Khulna",
          "bn": "জিইসি মোড়, নাসিরাবাদ, খুলনা"
        },
        "hospitalId": "khulna-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01933323051",
        "order": 0
      },
      {
        "id": "ch_doc_043_2",
        "hospital": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Dhaka",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
        },
        "hospitalId": "square-hospitals",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01616749445",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_043_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 1996,
        "yearTo": 2001,
        "order": 0
      },
      {
        "id": "ed_doc_043_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2002,
        "yearTo": 2006,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_043_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2007,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_043_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2011,
        "yearTo": 2014,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "20+ years of clinical practice",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Minimally invasive surgery",
      "Endoscopic procedures",
      "Preventive care",
      "Emergency management",
      "Post-operative rehabilitation"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {
      "facebook": "https://www.facebook.com/tanvir-haque"
    },
    "publicPhone": "01711953606",
    "publicEmail": "tanvir.haque@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Khulna",
      "bn": "জিইসি মোড়, নাসিরাবাদ, খুলনা"
    },
    "hospitalIds": [
      "khulna-medical",
      "square-hospitals"
    ],
    "locationIds": [
      "khulna",
      "dhaka"
    ],
    "createdAt": 1785369600000,
    "updatedAt": 1790172000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_044",
    "linkNo": "960395653",
    "slug": "rubina-rahman",
    "email": "rubina.rahman@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$K0t74iJCw5wH5QQPAzTFzw==$9ZM2rD2ztzQoJ6k9iseMhmJPspYEeInHlhyP6AKLFDg=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 143,
    "name": {
      "en": "Dr. Rubina Rahman",
      "bn": "ডা. রুবিনা রহমান"
    },
    "speciality": {
      "en": "Gynaecologist & Obstetrician",
      "bn": "স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "specialityIds": [
      "gynaecologist"
    ],
    "designation": {
      "en": "Senior Consultant, Gynaecologist & Obstetrician",
      "bn": "সিনিয়র কনসালট্যান্ট, স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Gazi Medical College Hospital",
      "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Rubina Rahman is a gynaecologist & obstetrician with 17 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রুবিনা রহমান একজন স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ, বাংলাদেশে 17 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-64256",
    "yearsExperience": 17,
    "patientsServed": 47000,
    "photo": {
      "url": "/demo/photos/f-26.webp",
      "width": 480,
      "height": 480,
      "hash": "6276c22b32f84f9d",
      "bytes": 12152
    },
    "chambers": [
      {
        "id": "ch_doc_044_1",
        "hospital": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Khulna",
          "bn": "জিইসি মোড়, নাসিরাবাদ, খুলনা"
        },
        "hospitalId": "gazi-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01746084649",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_044_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Chattogram Medical College",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ"
        },
        "yearFrom": 1999,
        "yearTo": 2004,
        "order": 0
      },
      {
        "id": "ed_doc_044_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2005,
        "yearTo": 2009,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_044_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2010,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "Member, Bangladesh Medical Association",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Ultrasonography",
      "Emergency management",
      "Preventive care",
      "Patient counselling",
      "Endoscopic procedures",
      "Chronic disease management"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {},
    "publicPhone": "01453035022",
    "publicEmail": "rubina.rahman@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Khulna",
      "bn": "জিইসি মোড়, নাসিরাবাদ, খুলনা"
    },
    "hospitalIds": [
      "gazi-medical"
    ],
    "locationIds": [
      "khulna"
    ],
    "createdAt": 1785456000000,
    "updatedAt": 1790175600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_045",
    "linkNo": "686658479",
    "slug": "farhana-karim",
    "email": "farhana.karim@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$rab3trco+PM5xDinOJFwSQ==$rCSc4/fq1AeMLI2Swo14LSJXPqqBgpqnbqNc15RjHKc=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 144,
    "name": {
      "en": "Dr. Farhana Karim",
      "bn": "ডা. ফারহানা করিম"
    },
    "speciality": {
      "en": "Rheumatologist",
      "bn": "বাতরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "rheumatologist"
    ],
    "designation": {
      "en": "Senior Consultant, Rheumatologist",
      "bn": "সিনিয়র কনসালট্যান্ট, বাতরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Square Hospitals Ltd.",
      "bn": "স্কয়ার হাসপাতাল লিমিটেড"
    },
    "degrees": [
      "MBBS",
      "MD (Cardiology)"
    ],
    "about": {
      "en": "Dr. Farhana Karim is a rheumatologist with 10 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. ফারহানা করিম একজন বাতরোগ বিশেষজ্ঞ, বাংলাদেশে 10 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-70869",
    "yearsExperience": 10,
    "patientsServed": 29000,
    "photo": {
      "url": "/demo/photos/f-27.webp",
      "width": 480,
      "height": 480,
      "hash": "83c0a4fc9bc8d117",
      "bytes": 8986
    },
    "chambers": [
      {
        "id": "ch_doc_045_1",
        "hospital": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "Station Road, Kotwali, Dhaka",
          "bn": "স্টেশন রোড, কোতোয়ালি, ঢাকা"
        },
        "hospitalId": "square-hospitals",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01650804796",
        "order": 0
      },
      {
        "id": "ch_doc_045_2",
        "hospital": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Dhaka",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
        },
        "hospitalId": "bangladesh-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01983199819",
        "order": 1
      },
      {
        "id": "ch_doc_045_3",
        "hospital": {
          "en": "Mount Adora Hospital",
          "bn": "মাউন্ট এডোরা হাসপাতাল"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Sylhet",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, সিলেট"
        },
        "hospitalId": "mount-adora",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01613628662",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_045_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 2006,
        "yearTo": 2011,
        "order": 0
      },
      {
        "id": "ed_doc_045_2",
        "degree": {
          "en": "MD (Cardiology)",
          "bn": "MD (Cardiology)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2012,
        "yearTo": 2016,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_045_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2017,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_045_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2021,
        "yearTo": 2024,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_045_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Mount Adora Hospital",
          "bn": "মাউন্ট এডোরা হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 2025,
        "yearTo": 2028,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "Advanced Cardiac Life Support (ACLS) certified",
      "International fellowship training"
    ],
    "skills": [
      "Preventive care",
      "Paediatric care",
      "Diagnostic imaging",
      "Interventional procedures"
    ],
    "achievements": [
      "Led a hospital quality-improvement initiative"
    ],
    "social": {},
    "publicPhone": "01615353370",
    "publicEmail": "farhana.karim@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Dhaka",
      "bn": "স্টেশন রোড, কোতোয়ালি, ঢাকা"
    },
    "hospitalIds": [
      "square-hospitals",
      "bangladesh-specialized",
      "mount-adora"
    ],
    "locationIds": [
      "dhaka",
      "sylhet"
    ],
    "createdAt": 1785542400000,
    "updatedAt": 1790179200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_046",
    "linkNo": "854429126",
    "slug": "farhana-begum",
    "email": "farhana.begum@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$D7aCFwI+QLSeeOh5HMCPOA==$urmHxYgPZc2o6CPpY31kjW7PP9u0WD+Cs9JAqR8rAvw=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 145,
    "name": {
      "en": "Dr. Farhana Begum",
      "bn": "ডা. ফারহানা বেগম"
    },
    "speciality": {
      "en": "General Surgeon",
      "bn": "জেনারেল সার্জন"
    },
    "specialityIds": [
      "general-surgeon"
    ],
    "designation": {
      "en": "Senior Consultant, General Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, জেনারেল সার্জন"
    },
    "workplace": {
      "en": "Bangladesh Specialized Hospital",
      "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Surgery)",
      "MS"
    ],
    "about": {
      "en": "Dr. Farhana Begum is a general surgeon with 21 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. ফারহানা বেগম একজন জেনারেল সার্জন, বাংলাদেশে 21 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-42299",
    "yearsExperience": 21,
    "patientsServed": 10000,
    "photo": {
      "url": "/demo/photos/f-28.webp",
      "width": 480,
      "height": 480,
      "hash": "22960dec2376c29a",
      "bytes": 10372
    },
    "chambers": [
      {
        "id": "ch_doc_046_1",
        "hospital": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Dhaka",
          "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
        },
        "hospitalId": "bangladesh-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01756592971",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_046_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 1995,
        "yearTo": 2000,
        "order": 0
      },
      {
        "id": "ed_doc_046_2",
        "degree": {
          "en": "FCPS (Surgery)",
          "bn": "FCPS (Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2001,
        "yearTo": 2005,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_046_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2006,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "21+ years of clinical practice",
      "International fellowship training"
    ],
    "skills": [
      "Diagnostic imaging",
      "Minimally invasive surgery",
      "Patient counselling",
      "Chronic disease management",
      "Interventional procedures"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide"
    ],
    "social": {
      "facebook": "https://www.facebook.com/farhana-begum"
    },
    "publicPhone": "01891878166",
    "publicEmail": "farhana.begum@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Dhaka",
      "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
    },
    "hospitalIds": [
      "bangladesh-specialized"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1785628800000,
    "updatedAt": 1790182800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_047",
    "linkNo": "807715015",
    "slug": "mizanur-karim",
    "email": "mizanur.karim@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$S6sPB5kfJpxEb+qmKf5ehQ==$3jW4SYVfhSRDs1n1sclsycrqHKtfydmB25kQnlqveZE=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 146,
    "name": {
      "en": "Dr. Mizanur Karim",
      "bn": "ডা. মিজানুর করিম"
    },
    "speciality": {
      "en": "Oncologist",
      "bn": "ক্যান্সার বিশেষজ্ঞ"
    },
    "specialityIds": [
      "oncologist"
    ],
    "designation": {
      "en": "Senior Consultant, Oncologist",
      "bn": "সিনিয়র কনসালট্যান্ট, ক্যান্সার বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Sher-e-Bangla Medical College Hospital",
      "bn": "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Surgery)",
      "MS"
    ],
    "about": {
      "en": "Dr. Mizanur Karim is a oncologist with 31 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. মিজানুর করিম একজন ক্যান্সার বিশেষজ্ঞ, বাংলাদেশে 31 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-72300",
    "yearsExperience": 31,
    "patientsServed": 38000,
    "photo": {
      "url": "/demo/photos/m-19.webp",
      "width": 480,
      "height": 480,
      "hash": "d46f008f1884eef2",
      "bytes": 7184
    },
    "chambers": [
      {
        "id": "ch_doc_047_1",
        "hospital": {
          "en": "Sher-e-Bangla Medical College Hospital",
          "bn": "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Barishal",
          "bn": "জিইসি মোড়, নাসিরাবাদ, বরিশাল"
        },
        "hospitalId": "barishal-sher-e-bangla",
        "locationId": "barishal",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01498402775",
        "order": 0
      },
      {
        "id": "ch_doc_047_2",
        "hospital": {
          "en": "United Hospital Limited",
          "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Dhaka",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
        },
        "hospitalId": "united-hospital",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01498840016",
        "order": 1
      },
      {
        "id": "ch_doc_047_3",
        "hospital": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Chattogram",
          "bn": "২১ শ্যামলী, মিরপুর রোড, চট্টগ্রাম"
        },
        "hospitalId": "max-chattogram",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01885759594",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_047_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 1985,
        "yearTo": 1990,
        "order": 0
      },
      {
        "id": "ed_doc_047_2",
        "degree": {
          "en": "FCPS (Surgery)",
          "bn": "FCPS (Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1991,
        "yearTo": 1995,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_047_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Sher-e-Bangla Medical College Hospital",
          "bn": "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Barishal",
          "bn": "বরিশাল"
        },
        "yearFrom": 1996,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_047_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "United Hospital Limited",
          "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2000,
        "yearTo": 2003,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_047_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2004,
        "yearTo": 2007,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Advanced Cardiac Life Support (ACLS) certified",
      "31+ years of clinical practice",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Patient counselling",
      "Interventional procedures",
      "Diagnostic imaging",
      "Emergency management"
    ],
    "achievements": [
      "Trained junior consultants in advanced procedures"
    ],
    "social": {},
    "publicPhone": "01913359204",
    "publicEmail": "mizanur.karim@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Barishal",
      "bn": "জিইসি মোড়, নাসিরাবাদ, বরিশাল"
    },
    "hospitalIds": [
      "barishal-sher-e-bangla",
      "united-hospital",
      "max-chattogram"
    ],
    "locationIds": [
      "barishal",
      "dhaka",
      "chattogram"
    ],
    "createdAt": 1785715200000,
    "updatedAt": 1790186400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_048",
    "linkNo": "427756560",
    "slug": "shirin-haque",
    "email": "shirin.haque@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$lS75aX98mRPjelMJGl3pYA==$9xXZBEVq6VSVzw8kAS5SGDx52L7246ACX6Za1hz4hic=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 147,
    "name": {
      "en": "Dr. Shirin Haque",
      "bn": "ডা. শিরিন হক"
    },
    "speciality": {
      "en": "Psychiatrist",
      "bn": "মানসিক রোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "psychiatrist"
    ],
    "designation": {
      "en": "Senior Consultant, Psychiatrist",
      "bn": "সিনিয়র কনসালট্যান্ট, মানসিক রোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Square Hospitals Ltd.",
      "bn": "স্কয়ার হাসপাতাল লিমিটেড"
    },
    "degrees": [
      "MBBS",
      "MRCP (UK)"
    ],
    "about": {
      "en": "Dr. Shirin Haque is a psychiatrist with 7 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. শিরিন হক একজন মানসিক রোগ বিশেষজ্ঞ, বাংলাদেশে 7 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-62643",
    "yearsExperience": 7,
    "patientsServed": 31000,
    "photo": {
      "url": "/demo/photos/f-29.webp",
      "width": 480,
      "height": 480,
      "hash": "eb8dbdf49b345baf",
      "bytes": 10432
    },
    "chambers": [
      {
        "id": "ch_doc_048_1",
        "hospital": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Dhaka",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
        },
        "hospitalId": "square-hospitals",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01438230533",
        "order": 0
      },
      {
        "id": "ch_doc_048_2",
        "hospital": {
          "en": "Chattogram Medical College Hospital",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Chattogram",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, চট্টগ্রাম"
        },
        "hospitalId": "chittagong-medical",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01393315611",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_048_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 2009,
        "yearTo": 2014,
        "order": 0
      },
      {
        "id": "ed_doc_048_2",
        "degree": {
          "en": "MRCP (UK)",
          "bn": "MRCP (UK)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2015,
        "yearTo": 2019,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_048_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2020,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_048_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Chattogram Medical College Hospital",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2024,
        "yearTo": 2027,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "Member, Bangladesh Medical Association",
      "7+ years of clinical practice"
    ],
    "skills": [
      "Patient counselling",
      "Preventive care",
      "Endoscopic procedures",
      "Post-operative rehabilitation",
      "Diagnostic imaging",
      "Clinical research"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {},
    "publicPhone": "01986749127",
    "publicEmail": "shirin.haque@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Road 15, Sector 3, Uttara, Dhaka",
      "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
    },
    "hospitalIds": [
      "square-hospitals",
      "chittagong-medical"
    ],
    "locationIds": [
      "dhaka",
      "chattogram"
    ],
    "createdAt": 1785801600000,
    "updatedAt": 1790190000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_049",
    "linkNo": "443501451",
    "slug": "mahfuza-siddique",
    "email": "mahfuza.siddique@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$EWDhpx6rLP0RbYBHkpfeZg==$fP9ILn/wokgVTuQjqxqzmJ1vaJejoZJzVLNWS9vZY6Q=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 148,
    "name": {
      "en": "Dr. Mahfuza Siddique",
      "bn": "ডা. মাহফুজা সিদ্দিক"
    },
    "speciality": {
      "en": "Paediatrician",
      "bn": "শিশুরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "paediatrician"
    ],
    "designation": {
      "en": "Senior Consultant, Paediatrician",
      "bn": "সিনিয়র কনসালট্যান্ট, শিশুরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Bangabandhu Sheikh Mujib Medical University",
      "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Mahfuza Siddique is a paediatrician with 30 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. মাহফুজা সিদ্দিক একজন শিশুরোগ বিশেষজ্ঞ, বাংলাদেশে 30 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-68482",
    "yearsExperience": 30,
    "patientsServed": 42000,
    "photo": {
      "url": "/demo/photos/f-30.webp",
      "width": 480,
      "height": 480,
      "hash": "e7e4b09c1fd2fe07",
      "bytes": 7878
    },
    "chambers": [
      {
        "id": "ch_doc_049_1",
        "hospital": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Dhaka",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
        },
        "hospitalId": "bsmmu",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01436888741",
        "order": 0
      },
      {
        "id": "ch_doc_049_2",
        "hospital": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Chattogram",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, চট্টগ্রাম"
        },
        "hospitalId": "max-chattogram",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01530315915",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_049_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 1986,
        "yearTo": 1991,
        "order": 0
      },
      {
        "id": "ed_doc_049_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1992,
        "yearTo": 1996,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_049_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 1997,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_049_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2001,
        "yearTo": 2004,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "Extensive ICU and emergency care experience",
      "International fellowship training"
    ],
    "skills": [
      "Clinical research",
      "Patient counselling",
      "Interventional procedures",
      "Emergency management"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {
      "facebook": "https://www.facebook.com/mahfuza-siddique"
    },
    "publicPhone": "01883353773",
    "publicEmail": "mahfuza.siddique@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Road 15, Sector 3, Uttara, Dhaka",
      "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
    },
    "hospitalIds": [
      "bsmmu",
      "max-chattogram"
    ],
    "locationIds": [
      "dhaka",
      "chattogram"
    ],
    "createdAt": 1785888000000,
    "updatedAt": 1790193600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_050",
    "linkNo": "972546610",
    "slug": "kamrul-karim",
    "email": "kamrul.karim@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$sk04QzlduvA30N/MJeSm9Q==$U8R1aaZ4ZTphSHAs+518d7mMjaxyTkOhox1hKs8gUhA=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 149,
    "name": {
      "en": "Dr. Kamrul Karim",
      "bn": "ডা. কামরুল করিম"
    },
    "speciality": {
      "en": "Dermatologist",
      "bn": "চর্মরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "dermatologist"
    ],
    "designation": {
      "en": "Senior Consultant, Dermatologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চর্মরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Evercare Hospital Dhaka",
      "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Kamrul Karim is a dermatologist with 28 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. কামরুল করিম একজন চর্মরোগ বিশেষজ্ঞ, বাংলাদেশে 28 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-78057",
    "yearsExperience": 28,
    "patientsServed": 5000,
    "photo": {
      "url": "/demo/photos/m-20.webp",
      "width": 480,
      "height": 480,
      "hash": "836f75314e6f554e",
      "bytes": 12180
    },
    "chambers": [
      {
        "id": "ch_doc_050_1",
        "hospital": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Dhaka",
          "bn": "২১ শ্যামলী, মিরপুর রোড, ঢাকা"
        },
        "hospitalId": "evercare-dhaka",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01670735220",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_050_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 1988,
        "yearTo": 1993,
        "order": 0
      },
      {
        "id": "ed_doc_050_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1994,
        "yearTo": 1998,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_050_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 1999,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "International fellowship training",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Ultrasonography",
      "Paediatric care",
      "Chronic disease management",
      "Patient counselling",
      "Endoscopic procedures",
      "Preventive care"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {},
    "publicPhone": "01926368649",
    "publicEmail": "kamrul.karim@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "21 Shyamoli, Mirpur Road, Dhaka",
      "bn": "২১ শ্যামলী, মিরপুর রোড, ঢাকা"
    },
    "hospitalIds": [
      "evercare-dhaka"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1785974400000,
    "updatedAt": 1790197200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_051",
    "linkNo": "116040140",
    "slug": "nazmul-hossain",
    "email": "nazmul.hossain@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$gFAQulhERFhSPXwypD6bzA==$SuB/K+OtkqpY08dWA6Uss+C+dEoGISsuBGqj51MF2so=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 150,
    "name": {
      "en": "Dr. Nazmul Hossain",
      "bn": "ডা. নাজমুল হোসেন"
    },
    "speciality": {
      "en": "ENT Specialist",
      "bn": "নাক-কান-গলা বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ent-specialist"
    ],
    "designation": {
      "en": "Senior Consultant, ENT Specialist",
      "bn": "সিনিয়র কনসালট্যান্ট, নাক-কান-গলা বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Sher-e-Bangla Medical College Hospital",
      "bn": "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Nazmul Hossain is a ent specialist with 17 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নাজমুল হোসেন একজন নাক-কান-গলা বিশেষজ্ঞ, বাংলাদেশে 17 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-67862",
    "yearsExperience": 17,
    "patientsServed": 26000,
    "photo": {
      "url": "/demo/photos/m-21.webp",
      "width": 480,
      "height": 480,
      "hash": "a5bb1a80f84e1eb6",
      "bytes": 16656
    },
    "chambers": [
      {
        "id": "ch_doc_051_1",
        "hospital": {
          "en": "Sher-e-Bangla Medical College Hospital",
          "bn": "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Barishal",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, বরিশাল"
        },
        "hospitalId": "barishal-sher-e-bangla",
        "locationId": "barishal",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01849839919",
        "order": 0
      },
      {
        "id": "ch_doc_051_2",
        "hospital": {
          "en": "Ibn Sina Specialized Hospital",
          "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Dhaka",
          "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
        },
        "hospitalId": "ibn-sina",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01510125446",
        "order": 1
      },
      {
        "id": "ch_doc_051_3",
        "hospital": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "address": {
          "en": "Station Road, Kotwali, Chattogram",
          "bn": "স্টেশন রোড, কোতোয়ালি, চট্টগ্রাম"
        },
        "hospitalId": "max-chattogram",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01717361624",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_051_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Chattogram Medical College",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ"
        },
        "yearFrom": 1999,
        "yearTo": 2004,
        "order": 0
      },
      {
        "id": "ed_doc_051_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2005,
        "yearTo": 2009,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_051_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Sher-e-Bangla Medical College Hospital",
          "bn": "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Barishal",
          "bn": "বরিশাল"
        },
        "yearFrom": 2010,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_051_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Ibn Sina Specialized Hospital",
          "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2014,
        "yearTo": 2017,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_051_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2018,
        "yearTo": 2021,
        "current": false,
        "order": 2
      }
    ],
    "awards": [
      {
        "id": "aw_doc_051_1",
        "title": {
          "en": "National ENT Specialist Excellence Award",
          "bn": "জাতীয় নাক-কান-গলা বিশেষজ্ঞ শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2021,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_051_1",
        "subject": {
          "en": "Advanced ENT Specialist Training",
          "bn": "উন্নত নাক-কান-গলা বিশেষজ্ঞ প্রশিক্ষণ"
        },
        "country": {
          "en": "India",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "6 months",
          "bn": ""
        },
        "year": 2013,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_051_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in ent specialist practice: a district cohort",
          "bn": "নাক-কান-গলা বিশেষজ্ঞ চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2019-02-01",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_051_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in ent specialist care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় নাক-কান-গলা বিশেষজ্ঞ সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2023-11-10",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "Advanced Cardiac Life Support (ACLS) certified",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Post-operative rehabilitation",
      "Paediatric care",
      "Clinical research",
      "Emergency management",
      "Interventional procedures",
      "Preventive care",
      "Endoscopic procedures"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide",
      "Led a hospital quality-improvement initiative",
      "Published in a peer-reviewed international journal"
    ],
    "social": {},
    "publicPhone": "01899933716",
    "publicEmail": "nazmul.hossain@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Road 15, Sector 3, Uttara, Barishal",
      "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, বরিশাল"
    },
    "hospitalIds": [
      "barishal-sher-e-bangla",
      "ibn-sina",
      "max-chattogram"
    ],
    "locationIds": [
      "barishal",
      "dhaka",
      "chattogram"
    ],
    "createdAt": 1786060800000,
    "updatedAt": 1790200800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_052",
    "linkNo": "126086923",
    "slug": "ayesha-akter",
    "email": "ayesha.akter@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$PmxvW1gp4Njos+8JP8yWzA==$j/fg1JHJ2JMHXnbdTCi0fWV+HJ3sF8NnxtHiPW3vElQ=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 151,
    "name": {
      "en": "Dr. Ayesha Akter",
      "bn": "ডা. আয়েশা আক্তার"
    },
    "speciality": {
      "en": "Nephrologist",
      "bn": "কিডনি রোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "nephrologist"
    ],
    "designation": {
      "en": "Senior Consultant, Nephrologist",
      "bn": "সিনিয়র কনসালট্যান্ট, কিডনি রোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Bangabandhu Sheikh Mujib Medical University",
      "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Ayesha Akter is a nephrologist with 7 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. আয়েশা আক্তার একজন কিডনি রোগ বিশেষজ্ঞ, বাংলাদেশে 7 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-96605",
    "yearsExperience": 7,
    "patientsServed": 18000,
    "photo": {
      "url": "/demo/photos/f-31.webp",
      "width": 480,
      "height": 480,
      "hash": "899d85997a98c19f",
      "bytes": 13114
    },
    "chambers": [
      {
        "id": "ch_doc_052_1",
        "hospital": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Dhaka",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
        },
        "hospitalId": "bsmmu",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01952120479",
        "order": 0
      },
      {
        "id": "ch_doc_052_2",
        "hospital": {
          "en": "Mount Adora Hospital",
          "bn": "মাউন্ট এডোরা হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Sylhet",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, সিলেট"
        },
        "hospitalId": "mount-adora",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01729357801",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_052_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 2009,
        "yearTo": 2014,
        "order": 0
      },
      {
        "id": "ed_doc_052_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2015,
        "yearTo": 2019,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_052_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2020,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_052_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Mount Adora Hospital",
          "bn": "মাউন্ট এডোরা হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 2024,
        "yearTo": 2027,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "7+ years of clinical practice",
      "Advanced Cardiac Life Support (ACLS) certified",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Preventive care",
      "Interventional procedures",
      "Emergency management",
      "Clinical research"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {
      "facebook": "https://www.facebook.com/ayesha-akter"
    },
    "publicPhone": "01441507733",
    "publicEmail": "ayesha.akter@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "House 42, Road 12, Dhanmondi, Dhaka",
      "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
    },
    "hospitalIds": [
      "bsmmu",
      "mount-adora"
    ],
    "locationIds": [
      "dhaka",
      "sylhet"
    ],
    "createdAt": 1786147200000,
    "updatedAt": 1790204400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_053",
    "linkNo": "638206315",
    "slug": "ayesha-mazumder",
    "email": "ayesha.mazumder@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$F70kvLURobIEDdCSpD5Eag==$8xRWcwwVIkS6hvp0QoQrWjEW5DjA2ZKcD/gqN7FO394=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 152,
    "name": {
      "en": "Dr. Ayesha Mazumder",
      "bn": "ডা. আয়েশা মজুমদার"
    },
    "speciality": {
      "en": "ENT Specialist",
      "bn": "নাক-কান-গলা বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ent-specialist"
    ],
    "designation": {
      "en": "Senior Consultant, ENT Specialist",
      "bn": "সিনিয়র কনসালট্যান্ট, নাক-কান-গলা বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "National Heart Foundation Hospital",
      "bn": "জাতীয় হৃদরোগ ফাউন্ডেশন হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Ayesha Mazumder is a ent specialist with 19 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. আয়েশা মজুমদার একজন নাক-কান-গলা বিশেষজ্ঞ, বাংলাদেশে 19 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-53442",
    "yearsExperience": 19,
    "patientsServed": 48000,
    "photo": {
      "url": "/demo/photos/f-32.webp",
      "width": 480,
      "height": 480,
      "hash": "7c237c35b16f130b",
      "bytes": 7268
    },
    "chambers": [
      {
        "id": "ch_doc_053_1",
        "hospital": {
          "en": "National Heart Foundation Hospital",
          "bn": "জাতীয় হৃদরোগ ফাউন্ডেশন হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Dhaka",
          "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
        },
        "hospitalId": "national-heart",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01930895561",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_053_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 1997,
        "yearTo": 2002,
        "order": 0
      },
      {
        "id": "ed_doc_053_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2003,
        "yearTo": 2007,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_053_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "National Heart Foundation Hospital",
          "bn": "জাতীয় হৃদরোগ ফাউন্ডেশন হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2008,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Advanced Cardiac Life Support (ACLS) certified",
      "19+ years of clinical practice",
      "International fellowship training"
    ],
    "skills": [
      "Post-operative rehabilitation",
      "Paediatric care",
      "Clinical research",
      "Chronic disease management",
      "Patient counselling",
      "Diagnostic imaging",
      "Interventional procedures"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {},
    "publicPhone": "01672796053",
    "publicEmail": "ayesha.mazumder@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Dhaka",
      "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
    },
    "hospitalIds": [
      "national-heart"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1786233600000,
    "updatedAt": 1790208000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_054",
    "linkNo": "591199804",
    "slug": "farhana-chowdhury",
    "email": "farhana.chowdhury@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$a8GbPkaxTctN5fx6TzGaUg==$8UJbE9V3MN1Yo3RPgZh7ejg3s8hnjcSNUDa4Z42PiX0=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 153,
    "name": {
      "en": "Dr. Farhana Chowdhury",
      "bn": "ডা. ফারহানা চৌধুরী"
    },
    "speciality": {
      "en": "ENT Specialist",
      "bn": "নাক-কান-গলা বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ent-specialist"
    ],
    "designation": {
      "en": "Senior Consultant, ENT Specialist",
      "bn": "সিনিয়র কনসালট্যান্ট, নাক-কান-গলা বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "United Hospital Limited",
      "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
    },
    "degrees": [
      "MBBS",
      "MRCP (UK)"
    ],
    "about": {
      "en": "Dr. Farhana Chowdhury is a ent specialist with 20 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. ফারহানা চৌধুরী একজন নাক-কান-গলা বিশেষজ্ঞ, বাংলাদেশে 20 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-77688",
    "yearsExperience": 20,
    "patientsServed": 48000,
    "photo": {
      "url": "/demo/photos/f-33.webp",
      "width": 480,
      "height": 480,
      "hash": "60ded65689c048be",
      "bytes": 7462
    },
    "chambers": [
      {
        "id": "ch_doc_054_1",
        "hospital": {
          "en": "United Hospital Limited",
          "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "Station Road, Kotwali, Dhaka",
          "bn": "স্টেশন রোড, কোতোয়ালি, ঢাকা"
        },
        "hospitalId": "united-hospital",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01580601325",
        "order": 0
      },
      {
        "id": "ch_doc_054_2",
        "hospital": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Cumilla",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, কুমিল্লা"
        },
        "hospitalId": "comilla-medical",
        "locationId": "cumilla",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01846886034",
        "order": 1
      },
      {
        "id": "ch_doc_054_3",
        "hospital": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Dhaka",
          "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
        },
        "hospitalId": "bangladesh-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01361143770",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_054_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Chattogram Medical College",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ"
        },
        "yearFrom": 1996,
        "yearTo": 2001,
        "order": 0
      },
      {
        "id": "ed_doc_054_2",
        "degree": {
          "en": "MRCP (UK)",
          "bn": "MRCP (UK)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2002,
        "yearTo": 2006,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_054_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "United Hospital Limited",
          "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2007,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_054_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Cumilla",
          "bn": "কুমিল্লা"
        },
        "yearFrom": 2011,
        "yearTo": 2014,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_054_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2015,
        "yearTo": 2018,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "Extensive ICU and emergency care experience",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Post-operative rehabilitation",
      "Patient counselling",
      "Interventional procedures",
      "Chronic disease management",
      "Preventive care",
      "Clinical research",
      "Paediatric care"
    ],
    "achievements": [
      "Trained junior consultants in advanced procedures"
    ],
    "social": {},
    "publicPhone": "01940387401",
    "publicEmail": "farhana.chowdhury@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Dhaka",
      "bn": "স্টেশন রোড, কোতোয়ালি, ঢাকা"
    },
    "hospitalIds": [
      "united-hospital",
      "comilla-medical",
      "bangladesh-specialized"
    ],
    "locationIds": [
      "dhaka",
      "cumilla"
    ],
    "createdAt": 1786320000000,
    "updatedAt": 1790211600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_055",
    "linkNo": "981097928",
    "slug": "mohammad-haque",
    "email": "mohammad.haque@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$Pr33MpMk4qh1xHNqkoM2UA==$hbAdUCEluuG92rgWQejd7STlMdJbPl1KFtyjeLG58Ws=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 154,
    "name": {
      "en": "Dr. Mohammad Haque",
      "bn": "ডা. মোহাম্মদ হক"
    },
    "speciality": {
      "en": "Haematologist",
      "bn": "রক্তরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "haematologist"
    ],
    "designation": {
      "en": "Senior Consultant, Haematologist",
      "bn": "সিনিয়র কনসালট্যান্ট, রক্তরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Khulna Medical College Hospital",
      "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MRCP (UK)"
    ],
    "about": {
      "en": "Dr. Mohammad Haque is a haematologist with 16 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. মোহাম্মদ হক একজন রক্তরোগ বিশেষজ্ঞ, বাংলাদেশে 16 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-87590",
    "yearsExperience": 16,
    "patientsServed": 25000,
    "photo": {
      "url": "/demo/photos/m-22.webp",
      "width": 480,
      "height": 480,
      "hash": "7f6f2e76c22546cd",
      "bytes": 11490
    },
    "chambers": [
      {
        "id": "ch_doc_055_1",
        "hospital": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Khulna",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, খুলনা"
        },
        "hospitalId": "khulna-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01475716107",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_055_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 2000,
        "yearTo": 2005,
        "order": 0
      },
      {
        "id": "ed_doc_055_2",
        "degree": {
          "en": "MRCP (UK)",
          "bn": "MRCP (UK)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2006,
        "yearTo": 2010,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_055_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2011,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "16+ years of clinical practice",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Post-operative rehabilitation",
      "Paediatric care",
      "Interventional procedures",
      "Endoscopic procedures",
      "Emergency management"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {
      "facebook": "https://www.facebook.com/mohammad-haque"
    },
    "publicPhone": "01956112465",
    "publicEmail": "mohammad.haque@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Road 15, Sector 3, Uttara, Khulna",
      "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, খুলনা"
    },
    "hospitalIds": [
      "khulna-medical"
    ],
    "locationIds": [
      "khulna"
    ],
    "createdAt": 1786406400000,
    "updatedAt": 1790215200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_056",
    "linkNo": "361935905",
    "slug": "saiful-chowdhury",
    "email": "saiful.chowdhury@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$YQRa1UyUJT9zU1OxSQWKqg==$EnjR0RukJrHz51DXKWBiDg74zPzexfBLDaP7hl+qv0g=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 155,
    "name": {
      "en": "Dr. Saiful Chowdhury",
      "bn": "ডা. সাইফুল চৌধুরী"
    },
    "speciality": {
      "en": "Dermatologist",
      "bn": "চর্মরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "dermatologist"
    ],
    "designation": {
      "en": "Senior Consultant, Dermatologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চর্মরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Shaheed Ziaur Rahman Medical College Hospital",
      "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Saiful Chowdhury is a dermatologist with 16 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. সাইফুল চৌধুরী একজন চর্মরোগ বিশেষজ্ঞ, বাংলাদেশে 16 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-47095",
    "yearsExperience": 16,
    "patientsServed": 30000,
    "photo": {
      "url": "/demo/photos/m-23.webp",
      "width": 480,
      "height": 480,
      "hash": "dca0c4208bbfa3aa",
      "bytes": 8990
    },
    "chambers": [
      {
        "id": "ch_doc_056_1",
        "hospital": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Bogura",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, বগুড়া"
        },
        "hospitalId": "bogura-shaheed-ziaur",
        "locationId": "bogura",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01319144425",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_056_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 2000,
        "yearTo": 2005,
        "order": 0
      },
      {
        "id": "ed_doc_056_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2006,
        "yearTo": 2010,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_056_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Bogura",
          "bn": "বগুড়া"
        },
        "yearFrom": 2011,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "Advanced Cardiac Life Support (ACLS) certified",
      "International fellowship training"
    ],
    "skills": [
      "Diagnostic imaging",
      "Ultrasonography",
      "Interventional procedures",
      "Chronic disease management",
      "Post-operative rehabilitation",
      "Endoscopic procedures",
      "Clinical research"
    ],
    "achievements": [
      "Trained junior consultants in advanced procedures"
    ],
    "social": {},
    "publicPhone": "01758837154",
    "publicEmail": "saiful.chowdhury@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Zindabazar, Main Road, Bogura",
      "bn": "জিন্দাবাজার, প্রধান সড়ক, বগুড়া"
    },
    "hospitalIds": [
      "bogura-shaheed-ziaur"
    ],
    "locationIds": [
      "bogura"
    ],
    "createdAt": 1786492800000,
    "updatedAt": 1790218800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_057",
    "linkNo": "506082165",
    "slug": "mahmudul-talukder-2",
    "email": "mahmudul.talukder.2@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$bNzfnAUfJzq774PcqIj0tw==$Iy4Ffx8L4/kl0NC6JKd40Xg7zEJBupun/z7MdX/kIw8=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 156,
    "name": {
      "en": "Dr. Mahmudul Talukder",
      "bn": "ডা. মাহমুদুল তালুকদার"
    },
    "speciality": {
      "en": "Neurologist",
      "bn": "স্নায়ুরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "neurologist"
    ],
    "designation": {
      "en": "Senior Consultant, Neurologist",
      "bn": "সিনিয়র কনসালট্যান্ট, স্নায়ুরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Faridpur Medical College Hospital",
      "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Mahmudul Talukder is a neurologist with 26 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. মাহমুদুল তালুকদার একজন স্নায়ুরোগ বিশেষজ্ঞ, বাংলাদেশে 26 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-73431",
    "yearsExperience": 26,
    "patientsServed": 27000,
    "photo": {
      "url": "/demo/photos/m-24.webp",
      "width": 480,
      "height": 480,
      "hash": "6b36650fa87b4db1",
      "bytes": 4800
    },
    "chambers": [
      {
        "id": "ch_doc_057_1",
        "hospital": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Faridpur",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, ফরিদপুর"
        },
        "hospitalId": "faridpur-medical",
        "locationId": "faridpur",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01591171538",
        "order": 0
      },
      {
        "id": "ch_doc_057_2",
        "hospital": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "address": {
          "en": "Zindabazar, Main Road, Dhaka",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
        },
        "hospitalId": "evercare-dhaka",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01977399082",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_057_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 1990,
        "yearTo": 1995,
        "order": 0
      },
      {
        "id": "ed_doc_057_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1996,
        "yearTo": 2000,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_057_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Faridpur",
          "bn": "ফরিদপুর"
        },
        "yearFrom": 2001,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_057_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2005,
        "yearTo": 2008,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Advanced Cardiac Life Support (ACLS) certified",
      "26+ years of clinical practice",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Emergency management",
      "Patient counselling",
      "Paediatric care",
      "Interventional procedures",
      "Preventive care",
      "Endoscopic procedures"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {},
    "publicPhone": "01954449936",
    "publicEmail": "mahmudul.talukder.2@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Plot 81, Block E, Bashundhara, Faridpur",
      "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, ফরিদপুর"
    },
    "hospitalIds": [
      "faridpur-medical",
      "evercare-dhaka"
    ],
    "locationIds": [
      "faridpur",
      "dhaka"
    ],
    "createdAt": 1786579200000,
    "updatedAt": 1790222400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_058",
    "linkNo": "634345164",
    "slug": "nusrat-hossain",
    "email": "nusrat.hossain@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$6eyhEdcr+CFUe36P787t0w==$5d092TXfMWqwwpBDUzjtpuDoGzjh0vshuNsc9SLof+U=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 157,
    "name": {
      "en": "Dr. Nusrat Hossain",
      "bn": "ডা. নুসরাত হোসেন"
    },
    "speciality": {
      "en": "Psychiatrist",
      "bn": "মানসিক রোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "psychiatrist"
    ],
    "designation": {
      "en": "Senior Consultant, Psychiatrist",
      "bn": "সিনিয়র কনসালট্যান্ট, মানসিক রোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Square Hospitals Ltd.",
      "bn": "স্কয়ার হাসপাতাল লিমিটেড"
    },
    "degrees": [
      "MBBS",
      "FCPS (Surgery)",
      "MS"
    ],
    "about": {
      "en": "Dr. Nusrat Hossain is a psychiatrist with 12 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নুসরাত হোসেন একজন মানসিক রোগ বিশেষজ্ঞ, বাংলাদেশে 12 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-88276",
    "yearsExperience": 12,
    "patientsServed": 18000,
    "photo": {
      "url": "/demo/photos/f-34.webp",
      "width": 480,
      "height": 480,
      "hash": "82707fd3b067acef",
      "bytes": 14482
    },
    "chambers": [
      {
        "id": "ch_doc_058_1",
        "hospital": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Dhaka",
          "bn": "২১ শ্যামলী, মিরপুর রোড, ঢাকা"
        },
        "hospitalId": "square-hospitals",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01837002056",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_058_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 2004,
        "yearTo": 2009,
        "order": 0
      },
      {
        "id": "ed_doc_058_2",
        "degree": {
          "en": "FCPS (Surgery)",
          "bn": "FCPS (Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2010,
        "yearTo": 2014,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_058_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2015,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "12+ years of clinical practice",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Diagnostic imaging",
      "Ultrasonography",
      "Interventional procedures",
      "Preventive care",
      "Endoscopic procedures"
    ],
    "achievements": [
      "Led a hospital quality-improvement initiative"
    ],
    "social": {
      "facebook": "https://www.facebook.com/nusrat-hossain"
    },
    "publicPhone": "01399965020",
    "publicEmail": "nusrat.hossain@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "21 Shyamoli, Mirpur Road, Dhaka",
      "bn": "২১ শ্যামলী, মিরপুর রোড, ঢাকা"
    },
    "hospitalIds": [
      "square-hospitals"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1786665600000,
    "updatedAt": 1790226000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_059",
    "linkNo": "927903617",
    "slug": "shirin-alam",
    "email": "shirin.alam@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$64TDKDU7lsocsbN4lSZwqw==$AzWXqqzM7iqhA5FsifSSNPb5EBP9FLhkPJt6KsHHTrs=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 158,
    "name": {
      "en": "Dr. Shirin Alam",
      "bn": "ডা. শিরিন আলম"
    },
    "speciality": {
      "en": "Rheumatologist",
      "bn": "বাতরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "rheumatologist"
    ],
    "designation": {
      "en": "Senior Consultant, Rheumatologist",
      "bn": "সিনিয়র কনসালট্যান্ট, বাতরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Islami Bank Medical College Hospital",
      "bn": "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MD (Cardiology)"
    ],
    "about": {
      "en": "Dr. Shirin Alam is a rheumatologist with 19 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. শিরিন আলম একজন বাতরোগ বিশেষজ্ঞ, বাংলাদেশে 19 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-69409",
    "yearsExperience": 19,
    "patientsServed": 5000,
    "photo": {
      "url": "/demo/photos/f-35.webp",
      "width": 480,
      "height": 480,
      "hash": "af813ef2e3c73ffb",
      "bytes": 9716
    },
    "chambers": [
      {
        "id": "ch_doc_059_1",
        "hospital": {
          "en": "Islami Bank Medical College Hospital",
          "bn": "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Rajshahi",
          "bn": "জিইসি মোড়, নাসিরাবাদ, রাজশাহী"
        },
        "hospitalId": "islami-bank-rajshahi",
        "locationId": "rajshahi",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01533678697",
        "order": 0
      },
      {
        "id": "ch_doc_059_2",
        "hospital": {
          "en": "Mount Adora Hospital",
          "bn": "মাউন্ট এডোরা হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Sylhet",
          "bn": "জিইসি মোড়, নাসিরাবাদ, সিলেট"
        },
        "hospitalId": "mount-adora",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01617293318",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_059_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 1997,
        "yearTo": 2002,
        "order": 0
      },
      {
        "id": "ed_doc_059_2",
        "degree": {
          "en": "MD (Cardiology)",
          "bn": "MD (Cardiology)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2003,
        "yearTo": 2007,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_059_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Islami Bank Medical College Hospital",
          "bn": "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rajshahi",
          "bn": "রাজশাহী"
        },
        "yearFrom": 2008,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_059_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Mount Adora Hospital",
          "bn": "মাউন্ট এডোরা হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 2012,
        "yearTo": 2015,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "International fellowship training",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Clinical research",
      "Preventive care",
      "Diagnostic imaging",
      "Minimally invasive surgery"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide"
    ],
    "social": {},
    "publicPhone": "01779199243",
    "publicEmail": "shirin.alam@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Rajshahi",
      "bn": "জিইসি মোড়, নাসিরাবাদ, রাজশাহী"
    },
    "hospitalIds": [
      "islami-bank-rajshahi",
      "mount-adora"
    ],
    "locationIds": [
      "rajshahi",
      "sylhet"
    ],
    "createdAt": 1786752000000,
    "updatedAt": 1790229600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_060",
    "linkNo": "164148018",
    "slug": "dilruba-begum",
    "email": "dilruba.begum@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$5vBddmHz89B+lGgVNAsNzg==$fruSyCwyUFFrWsVg42YEL8pB0SLNXu23xphgD06HScw=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 159,
    "name": {
      "en": "Dr. Dilruba Begum",
      "bn": "ডা. দিলরুবা বেগম"
    },
    "speciality": {
      "en": "Dermatologist",
      "bn": "চর্মরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "dermatologist"
    ],
    "designation": {
      "en": "Senior Consultant, Dermatologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চর্মরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Shaheed Ziaur Rahman Medical College Hospital",
      "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Dilruba Begum is a dermatologist with 15 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. দিলরুবা বেগম একজন চর্মরোগ বিশেষজ্ঞ, বাংলাদেশে 15 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-78290",
    "yearsExperience": 15,
    "patientsServed": 35000,
    "photo": {
      "url": "/demo/photos/f-36.webp",
      "width": 480,
      "height": 480,
      "hash": "5be0a45bb4be2742",
      "bytes": 11588
    },
    "chambers": [
      {
        "id": "ch_doc_060_1",
        "hospital": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Bogura",
          "bn": "স্টেশন রোড, কোতোয়ালি, বগুড়া"
        },
        "hospitalId": "bogura-shaheed-ziaur",
        "locationId": "bogura",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01863578141",
        "order": 0
      },
      {
        "id": "ch_doc_060_2",
        "hospital": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Rajshahi",
          "bn": "জিইসি মোড়, নাসিরাবাদ, রাজশাহী"
        },
        "hospitalId": "rajshahi-medical",
        "locationId": "rajshahi",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01518358563",
        "order": 1
      },
      {
        "id": "ch_doc_060_3",
        "hospital": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Mymensingh",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, ময়মনসিংহ"
        },
        "hospitalId": "mymensingh-medical",
        "locationId": "mymensingh",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01314713742",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_060_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 2001,
        "yearTo": 2006,
        "order": 0
      },
      {
        "id": "ed_doc_060_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2007,
        "yearTo": 2011,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_060_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Bogura",
          "bn": "বগুড়া"
        },
        "yearFrom": 2012,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_060_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rajshahi",
          "bn": "রাজশাহী"
        },
        "yearFrom": 2016,
        "yearTo": 2019,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_060_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Mymensingh",
          "bn": "ময়মনসিংহ"
        },
        "yearFrom": 2020,
        "yearTo": 2023,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "15+ years of clinical practice",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Endoscopic procedures",
      "Minimally invasive surgery",
      "Interventional procedures",
      "Diagnostic imaging"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {},
    "publicPhone": "01869535897",
    "publicEmail": "dilruba.begum@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Bogura",
      "bn": "স্টেশন রোড, কোতোয়ালি, বগুড়া"
    },
    "hospitalIds": [
      "bogura-shaheed-ziaur",
      "rajshahi-medical",
      "mymensingh-medical"
    ],
    "locationIds": [
      "bogura",
      "rajshahi",
      "mymensingh"
    ],
    "createdAt": 1786838400000,
    "updatedAt": 1790233200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_061",
    "linkNo": "216705053",
    "slug": "nusrat-begum",
    "email": "nusrat.begum@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$B52pfVfXuBuyq8wSGBQ6xw==$casL7lqrgBLYSgaG8Md0pAKEN4+F9vWEh1TqmLKQ1Dw=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 160,
    "name": {
      "en": "Dr. Nusrat Begum",
      "bn": "ডা. নুসরাত বেগম"
    },
    "speciality": {
      "en": "Endocrinologist",
      "bn": "হরমোন ও ডায়াবেটিস বিশেষজ্ঞ"
    },
    "specialityIds": [
      "endocrinologist"
    ],
    "designation": {
      "en": "Senior Consultant, Endocrinologist",
      "bn": "সিনিয়র কনসালট্যান্ট, হরমোন ও ডায়াবেটিস বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Bangladesh Specialized Hospital",
      "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Nusrat Begum is a endocrinologist with 21 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নুসরাত বেগম একজন হরমোন ও ডায়াবেটিস বিশেষজ্ঞ, বাংলাদেশে 21 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-83981",
    "yearsExperience": 21,
    "patientsServed": 25000,
    "photo": {
      "url": "/demo/photos/f-37.webp",
      "width": 480,
      "height": 480,
      "hash": "0b02d523fe3a6185",
      "bytes": 11334
    },
    "chambers": [
      {
        "id": "ch_doc_061_1",
        "hospital": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Dhaka",
          "bn": "স্টেশন রোড, কোতোয়ালি, ঢাকা"
        },
        "hospitalId": "bangladesh-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01517207834",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_061_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 1995,
        "yearTo": 2000,
        "order": 0
      },
      {
        "id": "ed_doc_061_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2001,
        "yearTo": 2005,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_061_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2006,
        "current": true,
        "order": 0
      }
    ],
    "awards": [
      {
        "id": "aw_doc_061_1",
        "title": {
          "en": "National Endocrinologist Excellence Award",
          "bn": "জাতীয় হরমোন ও ডায়াবেটিস বিশেষজ্ঞ শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2024,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_061_1",
        "subject": {
          "en": "Advanced Endocrinologist Training",
          "bn": "উন্নত হরমোন ও ডায়াবেটিস বিশেষজ্ঞ প্রশিক্ষণ"
        },
        "country": {
          "en": "India",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "1 year",
          "bn": ""
        },
        "year": 2015,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_061_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in endocrinologist practice: a district cohort",
          "bn": "হরমোন ও ডায়াবেটিস বিশেষজ্ঞ চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2022-09-08",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_061_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in endocrinologist care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় হরমোন ও ডায়াবেটিস বিশেষজ্ঞ সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2024-09-17",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "International fellowship training",
      "Member, Bangladesh Medical Association",
      "21+ years of clinical practice"
    ],
    "skills": [
      "Preventive care",
      "Post-operative rehabilitation",
      "Interventional procedures",
      "Emergency management",
      "Paediatric care",
      "Patient counselling",
      "Chronic disease management"
    ],
    "achievements": [
      "Led a hospital quality-improvement initiative",
      "Published in a peer-reviewed international journal",
      "Presented at a national medical conference"
    ],
    "social": {
      "facebook": "https://www.facebook.com/nusrat-begum"
    },
    "publicPhone": "01898870221",
    "publicEmail": "nusrat.begum@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Dhaka",
      "bn": "স্টেশন রোড, কোতোয়ালি, ঢাকা"
    },
    "hospitalIds": [
      "bangladesh-specialized"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1786924800000,
    "updatedAt": 1790236800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_062",
    "linkNo": "500621261",
    "slug": "rubina-begum",
    "email": "rubina.begum@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$pFmsGhhFS7nEXQxxNRdGvQ==$F4XasyDBoE5kHImvms8LuULpoFBA0BbuY+mucUq/I0I=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 161,
    "name": {
      "en": "Dr. Rubina Begum",
      "bn": "ডা. রুবিনা বেগম"
    },
    "speciality": {
      "en": "Nephrologist",
      "bn": "কিডনি রোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "nephrologist"
    ],
    "designation": {
      "en": "Senior Consultant, Nephrologist",
      "bn": "সিনিয়র কনসালট্যান্ট, কিডনি রোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Sher-e-Bangla Medical College Hospital",
      "bn": "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Medicine)"
    ],
    "about": {
      "en": "Dr. Rubina Begum is a nephrologist with 30 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রুবিনা বেগম একজন কিডনি রোগ বিশেষজ্ঞ, বাংলাদেশে 30 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-48352",
    "yearsExperience": 30,
    "patientsServed": 35000,
    "photo": {
      "url": "/demo/photos/f-38.webp",
      "width": 480,
      "height": 480,
      "hash": "e515f0bae4187e97",
      "bytes": 7848
    },
    "chambers": [
      {
        "id": "ch_doc_062_1",
        "hospital": {
          "en": "Sher-e-Bangla Medical College Hospital",
          "bn": "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Barishal",
          "bn": "স্টেশন রোড, কোতোয়ালি, বরিশাল"
        },
        "hospitalId": "barishal-sher-e-bangla",
        "locationId": "barishal",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01844914879",
        "order": 0
      },
      {
        "id": "ch_doc_062_2",
        "hospital": {
          "en": "Chattogram Medical College Hospital",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Chattogram",
          "bn": "স্টেশন রোড, কোতোয়ালি, চট্টগ্রাম"
        },
        "hospitalId": "chittagong-medical",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01627870434",
        "order": 1
      },
      {
        "id": "ch_doc_062_3",
        "hospital": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Sylhet",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, সিলেট"
        },
        "hospitalId": "sylhet-mag-osmani",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01634375102",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_062_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 1986,
        "yearTo": 1991,
        "order": 0
      },
      {
        "id": "ed_doc_062_2",
        "degree": {
          "en": "FCPS (Medicine)",
          "bn": "FCPS (Medicine)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1992,
        "yearTo": 1996,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_062_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Sher-e-Bangla Medical College Hospital",
          "bn": "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Barishal",
          "bn": "বরিশাল"
        },
        "yearFrom": 1997,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_062_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Chattogram Medical College Hospital",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2001,
        "yearTo": 2004,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_062_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 2005,
        "yearTo": 2008,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "Member, Bangladesh Medical Association",
      "30+ years of clinical practice"
    ],
    "skills": [
      "Post-operative rehabilitation",
      "Emergency management",
      "Clinical research",
      "Patient counselling",
      "Interventional procedures",
      "Ultrasonography"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide"
    ],
    "social": {},
    "publicPhone": "01794684294",
    "publicEmail": "rubina.begum@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Barishal",
      "bn": "স্টেশন রোড, কোতোয়ালি, বরিশাল"
    },
    "hospitalIds": [
      "barishal-sher-e-bangla",
      "chittagong-medical",
      "sylhet-mag-osmani"
    ],
    "locationIds": [
      "barishal",
      "chattogram",
      "sylhet"
    ],
    "createdAt": 1787011200000,
    "updatedAt": 1790240400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_063",
    "linkNo": "616195910",
    "slug": "sabina-talukder",
    "email": "sabina.talukder@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$gXzsQuDfM7jSQShu4kW7IA==$OIAv8J2mS1oCIq/Ys1XF0uSLo3ui7wRcBqd9g2eeQ10=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 162,
    "name": {
      "en": "Dr. Sabina Talukder",
      "bn": "ডা. সাবিনা তালুকদার"
    },
    "speciality": {
      "en": "Hepatologist",
      "bn": "লিভার রোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "hepatologist"
    ],
    "designation": {
      "en": "Senior Consultant, Hepatologist",
      "bn": "সিনিয়র কনসালট্যান্ট, লিভার রোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Mount Adora Hospital",
      "bn": "মাউন্ট এডোরা হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Sabina Talukder is a hepatologist with 19 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. সাবিনা তালুকদার একজন লিভার রোগ বিশেষজ্ঞ, বাংলাদেশে 19 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-47547",
    "yearsExperience": 19,
    "patientsServed": 17000,
    "photo": {
      "url": "/demo/photos/f-39.webp",
      "width": 480,
      "height": 480,
      "hash": "e6f4f5a8161b56bc",
      "bytes": 14624
    },
    "chambers": [
      {
        "id": "ch_doc_063_1",
        "hospital": {
          "en": "Mount Adora Hospital",
          "bn": "মাউন্ট এডোরা হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Sylhet",
          "bn": "জিইসি মোড়, নাসিরাবাদ, সিলেট"
        },
        "hospitalId": "mount-adora",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01868953859",
        "order": 0
      },
      {
        "id": "ch_doc_063_2",
        "hospital": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Cumilla",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, কুমিল্লা"
        },
        "hospitalId": "comilla-medical",
        "locationId": "cumilla",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01739382269",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_063_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Chattogram Medical College",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ"
        },
        "yearFrom": 1997,
        "yearTo": 2002,
        "order": 0
      },
      {
        "id": "ed_doc_063_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2003,
        "yearTo": 2007,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_063_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Mount Adora Hospital",
          "bn": "মাউন্ট এডোরা হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 2008,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_063_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Cumilla",
          "bn": "কুমিল্লা"
        },
        "yearFrom": 2012,
        "yearTo": 2015,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "19+ years of clinical practice",
      "Extensive ICU and emergency care experience",
      "International fellowship training"
    ],
    "skills": [
      "Ultrasonography",
      "Endoscopic procedures",
      "Emergency management",
      "Paediatric care"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide"
    ],
    "social": {},
    "publicPhone": "01498720680",
    "publicEmail": "sabina.talukder@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Sylhet",
      "bn": "জিইসি মোড়, নাসিরাবাদ, সিলেট"
    },
    "hospitalIds": [
      "mount-adora",
      "comilla-medical"
    ],
    "locationIds": [
      "sylhet",
      "cumilla"
    ],
    "createdAt": 1787097600000,
    "updatedAt": 1790244000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_064",
    "linkNo": "196757762",
    "slug": "rubina-rahman-2",
    "email": "rubina.rahman.2@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$0RUtnSvhQmqgHxVAtHQMkA==$lsald1C1tYaIGcNMsMWxyBgLqkoRxlm9ZX1yVa8sUrQ=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 163,
    "name": {
      "en": "Dr. Rubina Rahman",
      "bn": "ডা. রুবিনা রহমান"
    },
    "speciality": {
      "en": "Gynaecologist & Obstetrician",
      "bn": "স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "specialityIds": [
      "gynaecologist"
    ],
    "designation": {
      "en": "Senior Consultant, Gynaecologist & Obstetrician",
      "bn": "সিনিয়র কনসালট্যান্ট, স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Sylhet MAG Osmani Medical College Hospital",
      "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Rubina Rahman is a gynaecologist & obstetrician with 27 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রুবিনা রহমান একজন স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ, বাংলাদেশে 27 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-15701",
    "yearsExperience": 27,
    "patientsServed": 4000,
    "photo": {
      "url": "/demo/photos/f-40.webp",
      "width": 480,
      "height": 480,
      "hash": "d44ed1e79e6a90f9",
      "bytes": 13122
    },
    "chambers": [
      {
        "id": "ch_doc_064_1",
        "hospital": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Sylhet",
          "bn": "স্টেশন রোড, কোতোয়ালি, সিলেট"
        },
        "hospitalId": "sylhet-mag-osmani",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01374215992",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_064_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 1989,
        "yearTo": 1994,
        "order": 0
      },
      {
        "id": "ed_doc_064_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1995,
        "yearTo": 1999,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_064_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 2000,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "Advanced Cardiac Life Support (ACLS) certified",
      "International fellowship training"
    ],
    "skills": [
      "Clinical research",
      "Post-operative rehabilitation",
      "Preventive care",
      "Endoscopic procedures",
      "Minimally invasive surgery"
    ],
    "achievements": [
      "Trained junior consultants in advanced procedures"
    ],
    "social": {
      "facebook": "https://www.facebook.com/rubina-rahman-2"
    },
    "publicPhone": "01822354542",
    "publicEmail": "rubina.rahman.2@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Sylhet",
      "bn": "স্টেশন রোড, কোতোয়ালি, সিলেট"
    },
    "hospitalIds": [
      "sylhet-mag-osmani"
    ],
    "locationIds": [
      "sylhet"
    ],
    "createdAt": 1787184000000,
    "updatedAt": 1790247600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_065",
    "linkNo": "214490374",
    "slug": "mahmudul-talukder-3",
    "email": "mahmudul.talukder.3@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$WbNt2T8qI7E6iFEIHsUT1g==$D0Jgxgox3ixYt0rWXIRw0866Q6FO4Id2buX3+MdQvRY=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 164,
    "name": {
      "en": "Dr. Mahmudul Talukder",
      "bn": "ডা. মাহমুদুল তালুকদার"
    },
    "speciality": {
      "en": "Endocrinologist",
      "bn": "হরমোন ও ডায়াবেটিস বিশেষজ্ঞ"
    },
    "specialityIds": [
      "endocrinologist"
    ],
    "designation": {
      "en": "Senior Consultant, Endocrinologist",
      "bn": "সিনিয়র কনসালট্যান্ট, হরমোন ও ডায়াবেটিস বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Khulna Medical College Hospital",
      "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Mahmudul Talukder is a endocrinologist with 9 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. মাহমুদুল তালুকদার একজন হরমোন ও ডায়াবেটিস বিশেষজ্ঞ, বাংলাদেশে 9 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-26041",
    "yearsExperience": 9,
    "patientsServed": 5000,
    "photo": {
      "url": "/demo/photos/m-25.webp",
      "width": 480,
      "height": 480,
      "hash": "ee26badca353e060",
      "bytes": 7862
    },
    "chambers": [
      {
        "id": "ch_doc_065_1",
        "hospital": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Khulna",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, খুলনা"
        },
        "hospitalId": "khulna-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01710766217",
        "order": 0
      },
      {
        "id": "ch_doc_065_2",
        "hospital": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Cumilla",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, কুমিল্লা"
        },
        "hospitalId": "comilla-medical",
        "locationId": "cumilla",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01424512536",
        "order": 1
      },
      {
        "id": "ch_doc_065_3",
        "hospital": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Dhaka",
          "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
        },
        "hospitalId": "labaid-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01858776506",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_065_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 2007,
        "yearTo": 2012,
        "order": 0
      },
      {
        "id": "ed_doc_065_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2013,
        "yearTo": 2017,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_065_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2018,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_065_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Cumilla",
          "bn": "কুমিল্লা"
        },
        "yearFrom": 2022,
        "yearTo": 2025,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_065_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2026,
        "yearTo": 2029,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "International fellowship training",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Interventional procedures",
      "Emergency management",
      "Paediatric care",
      "Ultrasonography",
      "Patient counselling",
      "Preventive care"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {},
    "publicPhone": "01367088788",
    "publicEmail": "mahmudul.talukder.3@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Road 15, Sector 3, Uttara, Khulna",
      "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, খুলনা"
    },
    "hospitalIds": [
      "khulna-medical",
      "comilla-medical",
      "labaid-specialized"
    ],
    "locationIds": [
      "khulna",
      "cumilla",
      "dhaka"
    ],
    "createdAt": 1787270400000,
    "updatedAt": 1790251200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_066",
    "linkNo": "142987108",
    "slug": "nazmul-chowdhury",
    "email": "nazmul.chowdhury@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$9KCBeRRSPFcg+Wws71Njuw==$pQ8CiYMVt5VOT2WtKKQK41H1e4psoN9HbfJblmgZYrI=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 165,
    "name": {
      "en": "Dr. Nazmul Chowdhury",
      "bn": "ডা. নাজমুল চৌধুরী"
    },
    "speciality": {
      "en": "ENT Specialist",
      "bn": "নাক-কান-গলা বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ent-specialist"
    ],
    "designation": {
      "en": "Senior Consultant, ENT Specialist",
      "bn": "সিনিয়র কনসালট্যান্ট, নাক-কান-গলা বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Rangpur Medical College Hospital",
      "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MRCP (UK)"
    ],
    "about": {
      "en": "Dr. Nazmul Chowdhury is a ent specialist with 22 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নাজমুল চৌধুরী একজন নাক-কান-গলা বিশেষজ্ঞ, বাংলাদেশে 22 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-11121",
    "yearsExperience": 22,
    "patientsServed": 22000,
    "photo": {
      "url": "/demo/photos/m-26.webp",
      "width": 480,
      "height": 480,
      "hash": "a3d9f78ac47e6e4c",
      "bytes": 9478
    },
    "chambers": [
      {
        "id": "ch_doc_066_1",
        "hospital": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Rangpur",
          "bn": "স্টেশন রোড, কোতোয়ালি, রংপুর"
        },
        "hospitalId": "rangpur-medical",
        "locationId": "rangpur",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01329381366",
        "order": 0
      },
      {
        "id": "ch_doc_066_2",
        "hospital": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Bogura",
          "bn": "জিইসি মোড়, নাসিরাবাদ, বগুড়া"
        },
        "hospitalId": "bogura-shaheed-ziaur",
        "locationId": "bogura",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01419425187",
        "order": 1
      },
      {
        "id": "ch_doc_066_3",
        "hospital": {
          "en": "United Hospital Limited",
          "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Dhaka",
          "bn": "২১ শ্যামলী, মিরপুর রোড, ঢাকা"
        },
        "hospitalId": "united-hospital",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01345282536",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_066_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 1994,
        "yearTo": 1999,
        "order": 0
      },
      {
        "id": "ed_doc_066_2",
        "degree": {
          "en": "MRCP (UK)",
          "bn": "MRCP (UK)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2000,
        "yearTo": 2004,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_066_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rangpur",
          "bn": "রংপুর"
        },
        "yearFrom": 2005,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_066_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Bogura",
          "bn": "বগুড়া"
        },
        "yearFrom": 2009,
        "yearTo": 2012,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_066_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "United Hospital Limited",
          "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2013,
        "yearTo": 2016,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "International fellowship training",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Emergency management",
      "Minimally invasive surgery",
      "Chronic disease management",
      "Patient counselling"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {},
    "publicPhone": "01861513145",
    "publicEmail": "nazmul.chowdhury@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Rangpur",
      "bn": "স্টেশন রোড, কোতোয়ালি, রংপুর"
    },
    "hospitalIds": [
      "rangpur-medical",
      "bogura-shaheed-ziaur",
      "united-hospital"
    ],
    "locationIds": [
      "rangpur",
      "bogura",
      "dhaka"
    ],
    "createdAt": 1787356800000,
    "updatedAt": 1790254800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_067",
    "linkNo": "775219748",
    "slug": "kamrul-uddin",
    "email": "kamrul.uddin@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$5Frrdn95+rLnxut+1JenYA==$0a4BbARAQcYwztHjxMJRDljRInWWlnmgdL3TT4JxGeI=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 166,
    "name": {
      "en": "Dr. Kamrul Uddin",
      "bn": "ডা. কামরুল উদ্দিন"
    },
    "speciality": {
      "en": "Gynaecologist & Obstetrician",
      "bn": "স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "specialityIds": [
      "gynaecologist"
    ],
    "designation": {
      "en": "Senior Consultant, Gynaecologist & Obstetrician",
      "bn": "সিনিয়র কনসালট্যান্ট, স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "National Heart Foundation Hospital",
      "bn": "জাতীয় হৃদরোগ ফাউন্ডেশন হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MRCP (UK)"
    ],
    "about": {
      "en": "Dr. Kamrul Uddin is a gynaecologist & obstetrician with 23 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. কামরুল উদ্দিন একজন স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ, বাংলাদেশে 23 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-76305",
    "yearsExperience": 23,
    "patientsServed": 16000,
    "photo": {
      "url": "/demo/photos/m-27.webp",
      "width": 480,
      "height": 480,
      "hash": "c9792b30a9310855",
      "bytes": 9788
    },
    "chambers": [
      {
        "id": "ch_doc_067_1",
        "hospital": {
          "en": "National Heart Foundation Hospital",
          "bn": "জাতীয় হৃদরোগ ফাউন্ডেশন হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Dhaka",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, ঢাকা"
        },
        "hospitalId": "national-heart",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01592525334",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_067_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 1993,
        "yearTo": 1998,
        "order": 0
      },
      {
        "id": "ed_doc_067_2",
        "degree": {
          "en": "MRCP (UK)",
          "bn": "MRCP (UK)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1999,
        "yearTo": 2003,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_067_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "National Heart Foundation Hospital",
          "bn": "জাতীয় হৃদরোগ ফাউন্ডেশন হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2004,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "Member, Bangladesh Medical Association",
      "23+ years of clinical practice"
    ],
    "skills": [
      "Preventive care",
      "Endoscopic procedures",
      "Minimally invasive surgery",
      "Paediatric care"
    ],
    "achievements": [
      "Led a hospital quality-improvement initiative"
    ],
    "social": {
      "facebook": "https://www.facebook.com/kamrul-uddin"
    },
    "publicPhone": "01735462886",
    "publicEmail": "kamrul.uddin@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Plot 81, Block E, Bashundhara, Dhaka",
      "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, ঢাকা"
    },
    "hospitalIds": [
      "national-heart"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1787443200000,
    "updatedAt": 1790258400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_068",
    "linkNo": "762159446",
    "slug": "nazmul-uddin",
    "email": "nazmul.uddin@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$fxNEZlfZiQhhK93KTO8+MQ==$fmPL3lYVNTOVgIShkTYo8bVD9ZopfeFvBaCK+UBrOzc=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 167,
    "name": {
      "en": "Dr. Nazmul Uddin",
      "bn": "ডা. নাজমুল উদ্দিন"
    },
    "speciality": {
      "en": "Hepatologist",
      "bn": "লিভার রোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "hepatologist"
    ],
    "designation": {
      "en": "Senior Consultant, Hepatologist",
      "bn": "সিনিয়র কনসালট্যান্ট, লিভার রোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Bangabandhu Sheikh Mujib Medical University",
      "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
    },
    "degrees": [
      "MBBS",
      "MD (Cardiology)"
    ],
    "about": {
      "en": "Dr. Nazmul Uddin is a hepatologist with 10 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নাজমুল উদ্দিন একজন লিভার রোগ বিশেষজ্ঞ, বাংলাদেশে 10 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-47985",
    "yearsExperience": 10,
    "patientsServed": 44000,
    "photo": {
      "url": "/demo/photos/m-28.webp",
      "width": 480,
      "height": 480,
      "hash": "c41a571dda556947",
      "bytes": 5030
    },
    "chambers": [
      {
        "id": "ch_doc_068_1",
        "hospital": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Dhaka",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
        },
        "hospitalId": "bsmmu",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01380189047",
        "order": 0
      },
      {
        "id": "ch_doc_068_2",
        "hospital": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Faridpur",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, ফরিদপুর"
        },
        "hospitalId": "faridpur-medical",
        "locationId": "faridpur",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01991466332",
        "order": 1
      },
      {
        "id": "ch_doc_068_3",
        "hospital": {
          "en": "Sher-e-Bangla Medical College Hospital",
          "bn": "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Barishal",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, বরিশাল"
        },
        "hospitalId": "barishal-sher-e-bangla",
        "locationId": "barishal",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01468310494",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_068_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 2006,
        "yearTo": 2011,
        "order": 0
      },
      {
        "id": "ed_doc_068_2",
        "degree": {
          "en": "MD (Cardiology)",
          "bn": "MD (Cardiology)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2012,
        "yearTo": 2016,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_068_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2017,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_068_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Faridpur",
          "bn": "ফরিদপুর"
        },
        "yearFrom": 2021,
        "yearTo": 2024,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_068_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Sher-e-Bangla Medical College Hospital",
          "bn": "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Barishal",
          "bn": "বরিশাল"
        },
        "yearFrom": 2025,
        "yearTo": 2028,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "Extensive ICU and emergency care experience",
      "10+ years of clinical practice"
    ],
    "skills": [
      "Diagnostic imaging",
      "Interventional procedures",
      "Chronic disease management",
      "Post-operative rehabilitation",
      "Minimally invasive surgery",
      "Emergency management",
      "Endoscopic procedures"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {},
    "publicPhone": "01576708418",
    "publicEmail": "nazmul.uddin@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Road 15, Sector 3, Uttara, Dhaka",
      "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
    },
    "hospitalIds": [
      "bsmmu",
      "faridpur-medical",
      "barishal-sher-e-bangla"
    ],
    "locationIds": [
      "dhaka",
      "faridpur",
      "barishal"
    ],
    "createdAt": 1787529600000,
    "updatedAt": 1790262000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_069",
    "linkNo": "609518274",
    "slug": "nasrin-siddique",
    "email": "nasrin.siddique@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$DCRlAzQnWUSjtfMr/blSTQ==$N6qLZh/hN7/KTqo/89NbOMTbz5Th1d5rNMb682bbtOI=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 168,
    "name": {
      "en": "Dr. Nasrin Siddique",
      "bn": "ডা. নাসরিন সিদ্দিক"
    },
    "speciality": {
      "en": "ENT Specialist",
      "bn": "নাক-কান-গলা বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ent-specialist"
    ],
    "designation": {
      "en": "Senior Consultant, ENT Specialist",
      "bn": "সিনিয়র কনসালট্যান্ট, নাক-কান-গলা বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Chattogram Medical College Hospital",
      "bn": "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Medicine)"
    ],
    "about": {
      "en": "Dr. Nasrin Siddique is a ent specialist with 23 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নাসরিন সিদ্দিক একজন নাক-কান-গলা বিশেষজ্ঞ, বাংলাদেশে 23 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-79327",
    "yearsExperience": 23,
    "patientsServed": 20000,
    "photo": {
      "url": "/demo/photos/f-41.webp",
      "width": 480,
      "height": 480,
      "hash": "66df528661cf5224",
      "bytes": 12592
    },
    "chambers": [
      {
        "id": "ch_doc_069_1",
        "hospital": {
          "en": "Chattogram Medical College Hospital",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Chattogram",
          "bn": "স্টেশন রোড, কোতোয়ালি, চট্টগ্রাম"
        },
        "hospitalId": "chittagong-medical",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01753845295",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_069_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 1993,
        "yearTo": 1998,
        "order": 0
      },
      {
        "id": "ed_doc_069_2",
        "degree": {
          "en": "FCPS (Medicine)",
          "bn": "FCPS (Medicine)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1999,
        "yearTo": 2003,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_069_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Chattogram Medical College Hospital",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2004,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "23+ years of clinical practice",
      "International fellowship training",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Paediatric care",
      "Emergency management",
      "Patient counselling",
      "Post-operative rehabilitation",
      "Interventional procedures",
      "Endoscopic procedures",
      "Clinical research"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {},
    "publicPhone": "01773986464",
    "publicEmail": "nasrin.siddique@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Chattogram",
      "bn": "স্টেশন রোড, কোতোয়ালি, চট্টগ্রাম"
    },
    "hospitalIds": [
      "chittagong-medical"
    ],
    "locationIds": [
      "chattogram"
    ],
    "createdAt": 1787616000000,
    "updatedAt": 1790265600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_070",
    "linkNo": "906111238",
    "slug": "sharmin-hossain",
    "email": "sharmin.hossain@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$tdSdJfrpBdKg76kka3oWGw==$vR06KI1+pltHpRBq2Y9SC13TuVLmKqkqKKE9cDSHxv4=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 169,
    "name": {
      "en": "Dr. Sharmin Hossain",
      "bn": "ডা. শারমিন হোসেন"
    },
    "speciality": {
      "en": "Urologist",
      "bn": "মূত্ররোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "urologist"
    ],
    "designation": {
      "en": "Senior Consultant, Urologist",
      "bn": "সিনিয়র কনসালট্যান্ট, মূত্ররোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Shaheed Ziaur Rahman Medical College Hospital",
      "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Sharmin Hossain is a urologist with 29 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. শারমিন হোসেন একজন মূত্ররোগ বিশেষজ্ঞ, বাংলাদেশে 29 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-84774",
    "yearsExperience": 29,
    "patientsServed": 10000,
    "photo": {
      "url": "/demo/photos/f-42.webp",
      "width": 480,
      "height": 480,
      "hash": "f0adad22da813898",
      "bytes": 6222
    },
    "chambers": [
      {
        "id": "ch_doc_070_1",
        "hospital": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Bogura",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, বগুড়া"
        },
        "hospitalId": "bogura-shaheed-ziaur",
        "locationId": "bogura",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01411215028",
        "order": 0
      },
      {
        "id": "ch_doc_070_2",
        "hospital": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Dhaka",
          "bn": "২১ শ্যামলী, মিরপুর রোড, ঢাকা"
        },
        "hospitalId": "labaid-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01724705185",
        "order": 1
      },
      {
        "id": "ch_doc_070_3",
        "hospital": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Mymensingh",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, ময়মনসিংহ"
        },
        "hospitalId": "mymensingh-medical",
        "locationId": "mymensingh",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01827805007",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_070_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 1987,
        "yearTo": 1992,
        "order": 0
      },
      {
        "id": "ed_doc_070_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1993,
        "yearTo": 1997,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_070_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Bogura",
          "bn": "বগুড়া"
        },
        "yearFrom": 1998,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_070_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2002,
        "yearTo": 2005,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_070_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Mymensingh",
          "bn": "ময়মনসিংহ"
        },
        "yearFrom": 2006,
        "yearTo": 2009,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "29+ years of clinical practice",
      "International fellowship training",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Ultrasonography",
      "Endoscopic procedures",
      "Clinical research",
      "Interventional procedures"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {
      "facebook": "https://www.facebook.com/sharmin-hossain"
    },
    "publicPhone": "01422322366",
    "publicEmail": "sharmin.hossain@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Plot 81, Block E, Bashundhara, Bogura",
      "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, বগুড়া"
    },
    "hospitalIds": [
      "bogura-shaheed-ziaur",
      "labaid-specialized",
      "mymensingh-medical"
    ],
    "locationIds": [
      "bogura",
      "dhaka",
      "mymensingh"
    ],
    "createdAt": 1787702400000,
    "updatedAt": 1790269200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_071",
    "linkNo": "705905391",
    "slug": "sharmin-alam",
    "email": "sharmin.alam@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$vDOuXI9jCUlsQggwBBoiCg==$BTmvUuNdkMYxZfDdcooGE5lgrwcX2jaAgWtSy24gzPM=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 170,
    "name": {
      "en": "Dr. Sharmin Alam",
      "bn": "ডা. শারমিন আলম"
    },
    "speciality": {
      "en": "Gynaecologist & Obstetrician",
      "bn": "স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "specialityIds": [
      "gynaecologist"
    ],
    "designation": {
      "en": "Senior Consultant, Gynaecologist & Obstetrician",
      "bn": "সিনিয়র কনসালট্যান্ট, স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "United Hospital Limited",
      "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
    },
    "degrees": [
      "MBBS",
      "MD (Cardiology)"
    ],
    "about": {
      "en": "Dr. Sharmin Alam is a gynaecologist & obstetrician with 14 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. শারমিন আলম একজন স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ, বাংলাদেশে 14 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-22807",
    "yearsExperience": 14,
    "patientsServed": 6000,
    "photo": {
      "url": "/demo/photos/f-43.webp",
      "width": 480,
      "height": 480,
      "hash": "9f9967c87775a63b",
      "bytes": 9056
    },
    "chambers": [
      {
        "id": "ch_doc_071_1",
        "hospital": {
          "en": "United Hospital Limited",
          "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Dhaka",
          "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
        },
        "hospitalId": "united-hospital",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01543869015",
        "order": 0
      },
      {
        "id": "ch_doc_071_2",
        "hospital": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Rangpur",
          "bn": "স্টেশন রোড, কোতোয়ালি, রংপুর"
        },
        "hospitalId": "rangpur-medical",
        "locationId": "rangpur",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01711316697",
        "order": 1
      },
      {
        "id": "ch_doc_071_3",
        "hospital": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Bogura",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, বগুড়া"
        },
        "hospitalId": "bogura-shaheed-ziaur",
        "locationId": "bogura",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01318598091",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_071_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 2002,
        "yearTo": 2007,
        "order": 0
      },
      {
        "id": "ed_doc_071_2",
        "degree": {
          "en": "MD (Cardiology)",
          "bn": "MD (Cardiology)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2008,
        "yearTo": 2012,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_071_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "United Hospital Limited",
          "bn": "ইউনাইটেড হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2013,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_071_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rangpur",
          "bn": "রংপুর"
        },
        "yearFrom": 2017,
        "yearTo": 2020,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_071_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Bogura",
          "bn": "বগুড়া"
        },
        "yearFrom": 2021,
        "yearTo": 2024,
        "current": false,
        "order": 2
      }
    ],
    "awards": [
      {
        "id": "aw_doc_071_1",
        "title": {
          "en": "National Gynaecologist & Obstetrician Excellence Award",
          "bn": "জাতীয় স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2018,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_071_1",
        "subject": {
          "en": "Advanced Gynaecologist & Obstetrician Training",
          "bn": "উন্নত স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ প্রশিক্ষণ"
        },
        "country": {
          "en": "Thailand",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "1 year",
          "bn": ""
        },
        "year": 2012,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_071_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in gynaecologist & obstetrician practice: a district cohort",
          "bn": "স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2022-08-08",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_071_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in gynaecologist & obstetrician care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2025-09-25",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "International fellowship training",
      "Member, Bangladesh Medical Association",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Patient counselling",
      "Preventive care",
      "Clinical research",
      "Interventional procedures"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide",
      "Led a hospital quality-improvement initiative",
      "Trained junior consultants in advanced procedures"
    ],
    "social": {},
    "publicPhone": "01447460709",
    "publicEmail": "sharmin.alam@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Dhaka",
      "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
    },
    "hospitalIds": [
      "united-hospital",
      "rangpur-medical",
      "bogura-shaheed-ziaur"
    ],
    "locationIds": [
      "dhaka",
      "rangpur",
      "bogura"
    ],
    "createdAt": 1787788800000,
    "updatedAt": 1790272800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_072",
    "linkNo": "454107149",
    "slug": "abdul-sultana",
    "email": "abdul.sultana@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$z3i2caYTQf9QTVydGKDiAw==$dSz48PIP4lQ4nYvOj6HQSoYp/kllTY6LPYJcR2lLlYM=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 171,
    "name": {
      "en": "Dr. Abdul Sultana",
      "bn": "ডা. আব্দুল সুলতানা"
    },
    "speciality": {
      "en": "Urologist",
      "bn": "মূত্ররোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "urologist"
    ],
    "designation": {
      "en": "Senior Consultant, Urologist",
      "bn": "সিনিয়র কনসালট্যান্ট, মূত্ররোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Max Hospital & Diagnostic",
      "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
    },
    "degrees": [
      "MBBS",
      "MD (Cardiology)"
    ],
    "about": {
      "en": "Dr. Abdul Sultana is a urologist with 21 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. আব্দুল সুলতানা একজন মূত্ররোগ বিশেষজ্ঞ, বাংলাদেশে 21 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-68860",
    "yearsExperience": 21,
    "patientsServed": 14000,
    "photo": {
      "url": "/demo/photos/m-29.webp",
      "width": 480,
      "height": 480,
      "hash": "d335e38200eeee98",
      "bytes": 20774
    },
    "chambers": [
      {
        "id": "ch_doc_072_1",
        "hospital": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Chattogram",
          "bn": "জিইসি মোড়, নাসিরাবাদ, চট্টগ্রাম"
        },
        "hospitalId": "max-chattogram",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01785018608",
        "order": 0
      },
      {
        "id": "ch_doc_072_2",
        "hospital": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Dhaka",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
        },
        "hospitalId": "bsmmu",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01456553497",
        "order": 1
      },
      {
        "id": "ch_doc_072_3",
        "hospital": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Dhaka",
          "bn": "স্টেশন রোড, কোতোয়ালি, ঢাকা"
        },
        "hospitalId": "bangladesh-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01621981900",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_072_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 1995,
        "yearTo": 2000,
        "order": 0
      },
      {
        "id": "ed_doc_072_2",
        "degree": {
          "en": "MD (Cardiology)",
          "bn": "MD (Cardiology)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2001,
        "yearTo": 2005,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_072_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2006,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_072_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2010,
        "yearTo": 2013,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_072_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2014,
        "yearTo": 2017,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "International fellowship training",
      "21+ years of clinical practice"
    ],
    "skills": [
      "Endoscopic procedures",
      "Paediatric care",
      "Post-operative rehabilitation",
      "Clinical research",
      "Minimally invasive surgery",
      "Preventive care"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {},
    "publicPhone": "01548988016",
    "publicEmail": "abdul.sultana@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Chattogram",
      "bn": "জিইসি মোড়, নাসিরাবাদ, চট্টগ্রাম"
    },
    "hospitalIds": [
      "max-chattogram",
      "bsmmu",
      "bangladesh-specialized"
    ],
    "locationIds": [
      "chattogram",
      "dhaka"
    ],
    "createdAt": 1787875200000,
    "updatedAt": 1790276400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_073",
    "linkNo": "957774758",
    "slug": "abdul-haque",
    "email": "abdul.haque@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$SOXKW6CXiPXappTwF3HcCg==$YroxeEqSd0RLX277AaZikTLMsAjAS5EyRB5sPvz/GPA=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 172,
    "name": {
      "en": "Dr. Abdul Haque",
      "bn": "ডা. আব্দুল হক"
    },
    "speciality": {
      "en": "Neurologist",
      "bn": "স্নায়ুরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "neurologist"
    ],
    "designation": {
      "en": "Senior Consultant, Neurologist",
      "bn": "সিনিয়র কনসালট্যান্ট, স্নায়ুরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Rajshahi Medical College Hospital",
      "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Abdul Haque is a neurologist with 28 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. আব্দুল হক একজন স্নায়ুরোগ বিশেষজ্ঞ, বাংলাদেশে 28 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-64938",
    "yearsExperience": 28,
    "patientsServed": 33000,
    "photo": {
      "url": "/demo/photos/m-30.webp",
      "width": 480,
      "height": 480,
      "hash": "8529006ced6c9bac",
      "bytes": 10854
    },
    "chambers": [
      {
        "id": "ch_doc_073_1",
        "hospital": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Rajshahi",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, রাজশাহী"
        },
        "hospitalId": "rajshahi-medical",
        "locationId": "rajshahi",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01342351936",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_073_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 1988,
        "yearTo": 1993,
        "order": 0
      },
      {
        "id": "ed_doc_073_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1994,
        "yearTo": 1998,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_073_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rajshahi",
          "bn": "রাজশাহী"
        },
        "yearFrom": 1999,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "28+ years of clinical practice",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Interventional procedures",
      "Minimally invasive surgery",
      "Chronic disease management",
      "Clinical research",
      "Diagnostic imaging",
      "Endoscopic procedures",
      "Post-operative rehabilitation"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {
      "facebook": "https://www.facebook.com/abdul-haque"
    },
    "publicPhone": "01782745327",
    "publicEmail": "abdul.haque@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "House 42, Road 12, Dhanmondi, Rajshahi",
      "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, রাজশাহী"
    },
    "hospitalIds": [
      "rajshahi-medical"
    ],
    "locationIds": [
      "rajshahi"
    ],
    "createdAt": 1787961600000,
    "updatedAt": 1790280000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_074",
    "linkNo": "648726426",
    "slug": "farhana-mazumder",
    "email": "farhana.mazumder@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$ePnIS+IziIKWyzwQcJaadQ==$YdoOfj/zKKqBt2Ek/rSAAF2kfrAIaz4iXtYKeAM2uug=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 173,
    "name": {
      "en": "Dr. Farhana Mazumder",
      "bn": "ডা. ফারহানা মজুমদার"
    },
    "speciality": {
      "en": "Ophthalmologist",
      "bn": "চক্ষু বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ophthalmologist"
    ],
    "designation": {
      "en": "Senior Consultant, Ophthalmologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চক্ষু বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Sylhet MAG Osmani Medical College Hospital",
      "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Farhana Mazumder is a ophthalmologist with 12 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. ফারহানা মজুমদার একজন চক্ষু বিশেষজ্ঞ, বাংলাদেশে 12 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-97434",
    "yearsExperience": 12,
    "patientsServed": 7000,
    "photo": {
      "url": "/demo/photos/f-44.webp",
      "width": 480,
      "height": 480,
      "hash": "ffa1bb3f274e0268",
      "bytes": 13700
    },
    "chambers": [
      {
        "id": "ch_doc_074_1",
        "hospital": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Sylhet",
          "bn": "২১ শ্যামলী, মিরপুর রোড, সিলেট"
        },
        "hospitalId": "sylhet-mag-osmani",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01596783747",
        "order": 0
      },
      {
        "id": "ch_doc_074_2",
        "hospital": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Khulna",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, খুলনা"
        },
        "hospitalId": "khulna-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01641387723",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_074_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 2004,
        "yearTo": 2009,
        "order": 0
      },
      {
        "id": "ed_doc_074_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2010,
        "yearTo": 2014,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_074_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 2015,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_074_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2019,
        "yearTo": 2022,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "Advanced Cardiac Life Support (ACLS) certified",
      "12+ years of clinical practice"
    ],
    "skills": [
      "Emergency management",
      "Minimally invasive surgery",
      "Endoscopic procedures",
      "Interventional procedures",
      "Preventive care",
      "Clinical research",
      "Diagnostic imaging"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {},
    "publicPhone": "01581617403",
    "publicEmail": "farhana.mazumder@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "21 Shyamoli, Mirpur Road, Sylhet",
      "bn": "২১ শ্যামলী, মিরপুর রোড, সিলেট"
    },
    "hospitalIds": [
      "sylhet-mag-osmani",
      "khulna-medical"
    ],
    "locationIds": [
      "sylhet",
      "khulna"
    ],
    "createdAt": 1788048000000,
    "updatedAt": 1790283600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_075",
    "linkNo": "571708027",
    "slug": "shahidul-alam",
    "email": "shahidul.alam@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$GdWggWys7Joawa0tNzeHVw==$ba478Cr6OLN7DpjijH8jP7cwg3ngqW9W0118D4sAo9I=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 174,
    "name": {
      "en": "Dr. Shahidul Alam",
      "bn": "ডা. শহীদুল আলম"
    },
    "speciality": {
      "en": "Orthopaedic Surgeon",
      "bn": "অর্থোপেডিক সার্জন"
    },
    "specialityIds": [
      "orthopaedic-surgeon"
    ],
    "designation": {
      "en": "Senior Consultant, Orthopaedic Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, অর্থোপেডিক সার্জন"
    },
    "workplace": {
      "en": "Cumilla Medical College Hospital",
      "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MD (Cardiology)"
    ],
    "about": {
      "en": "Dr. Shahidul Alam is a orthopaedic surgeon with 23 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. শহীদুল আলম একজন অর্থোপেডিক সার্জন, বাংলাদেশে 23 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-83086",
    "yearsExperience": 23,
    "patientsServed": 46000,
    "photo": {
      "url": "/demo/photos/m-31.webp",
      "width": 480,
      "height": 480,
      "hash": "d2d759064a8769d9",
      "bytes": 6742
    },
    "chambers": [
      {
        "id": "ch_doc_075_1",
        "hospital": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Cumilla",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, কুমিল্লা"
        },
        "hospitalId": "comilla-medical",
        "locationId": "cumilla",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01397284887",
        "order": 0
      },
      {
        "id": "ch_doc_075_2",
        "hospital": {
          "en": "Islami Bank Medical College Hospital",
          "bn": "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Rajshahi",
          "bn": "২১ শ্যামলী, মিরপুর রোড, রাজশাহী"
        },
        "hospitalId": "islami-bank-rajshahi",
        "locationId": "rajshahi",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01513311411",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_075_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 1993,
        "yearTo": 1998,
        "order": 0
      },
      {
        "id": "ed_doc_075_2",
        "degree": {
          "en": "MD (Cardiology)",
          "bn": "MD (Cardiology)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1999,
        "yearTo": 2003,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_075_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Cumilla",
          "bn": "কুমিল্লা"
        },
        "yearFrom": 2004,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_075_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Islami Bank Medical College Hospital",
          "bn": "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rajshahi",
          "bn": "রাজশাহী"
        },
        "yearFrom": 2008,
        "yearTo": 2011,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "Extensive ICU and emergency care experience",
      "23+ years of clinical practice"
    ],
    "skills": [
      "Endoscopic procedures",
      "Post-operative rehabilitation",
      "Clinical research",
      "Preventive care"
    ],
    "achievements": [
      "Led a hospital quality-improvement initiative"
    ],
    "social": {},
    "publicPhone": "01313699213",
    "publicEmail": "shahidul.alam@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "House 42, Road 12, Dhanmondi, Cumilla",
      "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, কুমিল্লা"
    },
    "hospitalIds": [
      "comilla-medical",
      "islami-bank-rajshahi"
    ],
    "locationIds": [
      "cumilla",
      "rajshahi"
    ],
    "createdAt": 1788134400000,
    "updatedAt": 1790287200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_076",
    "linkNo": "106683083",
    "slug": "dilruba-sultana",
    "email": "dilruba.sultana@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$ymCZCVcwucuYyetXfPkAGw==$fF/1SJW5riHjbH9YdT/lHgTQ5BkB4T+ISxu70Hxj4uM=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 175,
    "name": {
      "en": "Dr. Dilruba Sultana",
      "bn": "ডা. দিলরুবা সুলতানা"
    },
    "speciality": {
      "en": "Pulmonologist",
      "bn": "বক্ষব্যাধি বিশেষজ্ঞ"
    },
    "specialityIds": [
      "pulmonologist"
    ],
    "designation": {
      "en": "Senior Consultant, Pulmonologist",
      "bn": "সিনিয়র কনসালট্যান্ট, বক্ষব্যাধি বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Rangpur Medical College Hospital",
      "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Surgery)",
      "MS"
    ],
    "about": {
      "en": "Dr. Dilruba Sultana is a pulmonologist with 16 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. দিলরুবা সুলতানা একজন বক্ষব্যাধি বিশেষজ্ঞ, বাংলাদেশে 16 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-49653",
    "yearsExperience": 16,
    "patientsServed": 38000,
    "photo": {
      "url": "/demo/photos/f-45.webp",
      "width": 480,
      "height": 480,
      "hash": "07451ab9d73f9042",
      "bytes": 12152
    },
    "chambers": [
      {
        "id": "ch_doc_076_1",
        "hospital": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Rangpur",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, রংপুর"
        },
        "hospitalId": "rangpur-medical",
        "locationId": "rangpur",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01628638840",
        "order": 0
      },
      {
        "id": "ch_doc_076_2",
        "hospital": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Bogura",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, বগুড়া"
        },
        "hospitalId": "bogura-shaheed-ziaur",
        "locationId": "bogura",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01841220540",
        "order": 1
      },
      {
        "id": "ch_doc_076_3",
        "hospital": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Faridpur",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ফরিদপুর"
        },
        "hospitalId": "faridpur-medical",
        "locationId": "faridpur",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01736448441",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_076_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 2000,
        "yearTo": 2005,
        "order": 0
      },
      {
        "id": "ed_doc_076_2",
        "degree": {
          "en": "FCPS (Surgery)",
          "bn": "FCPS (Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2006,
        "yearTo": 2010,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_076_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rangpur",
          "bn": "রংপুর"
        },
        "yearFrom": 2011,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_076_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Bogura",
          "bn": "বগুড়া"
        },
        "yearFrom": 2015,
        "yearTo": 2018,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_076_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Faridpur",
          "bn": "ফরিদপুর"
        },
        "yearFrom": 2019,
        "yearTo": 2022,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "16+ years of clinical practice",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Chronic disease management",
      "Post-operative rehabilitation",
      "Interventional procedures",
      "Ultrasonography"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide"
    ],
    "social": {
      "facebook": "https://www.facebook.com/dilruba-sultana"
    },
    "publicPhone": "01963888747",
    "publicEmail": "dilruba.sultana@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Plot 81, Block E, Bashundhara, Rangpur",
      "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, রংপুর"
    },
    "hospitalIds": [
      "rangpur-medical",
      "bogura-shaheed-ziaur",
      "faridpur-medical"
    ],
    "locationIds": [
      "rangpur",
      "bogura",
      "faridpur"
    ],
    "createdAt": 1788220800000,
    "updatedAt": 1790290800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_077",
    "linkNo": "439845436",
    "slug": "tanvir-islam",
    "email": "tanvir.islam@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$T3fnsm0hoiwKJ+Xxhug0Ug==$kh0ZsS5c3G9KsVn59Qn3hCUt4aH6IN08jzWDoJWgiDA=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 176,
    "name": {
      "en": "Dr. Tanvir Islam",
      "bn": "ডা. তানভীর ইসলাম"
    },
    "speciality": {
      "en": "Ophthalmologist",
      "bn": "চক্ষু বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ophthalmologist"
    ],
    "designation": {
      "en": "Senior Consultant, Ophthalmologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চক্ষু বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Dhaka Medical College Hospital",
      "bn": "ঢাকা মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MRCP (UK)"
    ],
    "about": {
      "en": "Dr. Tanvir Islam is a ophthalmologist with 19 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. তানভীর ইসলাম একজন চক্ষু বিশেষজ্ঞ, বাংলাদেশে 19 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-12348",
    "yearsExperience": 19,
    "patientsServed": 39000,
    "photo": {
      "url": "/demo/photos/m-32.webp",
      "width": 480,
      "height": 480,
      "hash": "8cdc0fe9e506fa86",
      "bytes": 10872
    },
    "chambers": [
      {
        "id": "ch_doc_077_1",
        "hospital": {
          "en": "Dhaka Medical College Hospital",
          "bn": "ঢাকা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Dhaka",
          "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
        },
        "hospitalId": "dhaka-medical",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01765002719",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_077_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 1997,
        "yearTo": 2002,
        "order": 0
      },
      {
        "id": "ed_doc_077_2",
        "degree": {
          "en": "MRCP (UK)",
          "bn": "MRCP (UK)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2003,
        "yearTo": 2007,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_077_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Dhaka Medical College Hospital",
          "bn": "ঢাকা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2008,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "Member, Bangladesh Medical Association",
      "19+ years of clinical practice"
    ],
    "skills": [
      "Interventional procedures",
      "Emergency management",
      "Post-operative rehabilitation",
      "Clinical research",
      "Patient counselling",
      "Chronic disease management",
      "Ultrasonography"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {},
    "publicPhone": "01383617817",
    "publicEmail": "tanvir.islam@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Dhaka",
      "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
    },
    "hospitalIds": [
      "dhaka-medical"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1788307200000,
    "updatedAt": 1790294400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_078",
    "linkNo": "648608320",
    "slug": "nasrin-uddin-2",
    "email": "nasrin.uddin.2@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$il85n96opA62WzkfJoSw8A==$NAQc4TuJfSALemf1LtOSy1uWRQL7+Px/cmfxjTJFpC4=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 177,
    "name": {
      "en": "Dr. Nasrin Uddin",
      "bn": "ডা. নাসরিন উদ্দিন"
    },
    "speciality": {
      "en": "Dermatologist",
      "bn": "চর্মরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "dermatologist"
    ],
    "designation": {
      "en": "Senior Consultant, Dermatologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চর্মরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Ibn Sina Specialized Hospital",
      "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Nasrin Uddin is a dermatologist with 25 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নাসরিন উদ্দিন একজন চর্মরোগ বিশেষজ্ঞ, বাংলাদেশে 25 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-15162",
    "yearsExperience": 25,
    "patientsServed": 35000,
    "photo": {
      "url": "/demo/photos/f-46.webp",
      "width": 480,
      "height": 480,
      "hash": "05387a72fb1bf110",
      "bytes": 5414
    },
    "chambers": [
      {
        "id": "ch_doc_078_1",
        "hospital": {
          "en": "Ibn Sina Specialized Hospital",
          "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Dhaka",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
        },
        "hospitalId": "ibn-sina",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01399411779",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_078_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 1991,
        "yearTo": 1996,
        "order": 0
      },
      {
        "id": "ed_doc_078_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1997,
        "yearTo": 2001,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_078_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Ibn Sina Specialized Hospital",
          "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2002,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "25+ years of clinical practice",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Patient counselling",
      "Endoscopic procedures",
      "Paediatric care",
      "Diagnostic imaging",
      "Minimally invasive surgery"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide"
    ],
    "social": {},
    "publicPhone": "01861225213",
    "publicEmail": "nasrin.uddin.2@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Zindabazar, Main Road, Dhaka",
      "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
    },
    "hospitalIds": [
      "ibn-sina"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1788393600000,
    "updatedAt": 1790298000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_079",
    "linkNo": "130899855",
    "slug": "farhana-uddin",
    "email": "farhana.uddin@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$VqzxV8xYouJ29tQlANiqmQ==$B1tv6LRkwjPiTeim6yIVjVOEq1+F8/F83cfv/zMZqSc=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 178,
    "name": {
      "en": "Dr. Farhana Uddin",
      "bn": "ডা. ফারহানা উদ্দিন"
    },
    "speciality": {
      "en": "Ophthalmologist",
      "bn": "চক্ষু বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ophthalmologist"
    ],
    "designation": {
      "en": "Senior Consultant, Ophthalmologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চক্ষু বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Rajshahi Medical College Hospital",
      "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MD (Cardiology)"
    ],
    "about": {
      "en": "Dr. Farhana Uddin is a ophthalmologist with 13 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. ফারহানা উদ্দিন একজন চক্ষু বিশেষজ্ঞ, বাংলাদেশে 13 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-98132",
    "yearsExperience": 13,
    "patientsServed": 21000,
    "photo": {
      "url": "/demo/photos/f-47.webp",
      "width": 480,
      "height": 480,
      "hash": "a23ad70d5509bd5d",
      "bytes": 16314
    },
    "chambers": [
      {
        "id": "ch_doc_079_1",
        "hospital": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Rajshahi",
          "bn": "জিইসি মোড়, নাসিরাবাদ, রাজশাহী"
        },
        "hospitalId": "rajshahi-medical",
        "locationId": "rajshahi",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01662811373",
        "order": 0
      },
      {
        "id": "ch_doc_079_2",
        "hospital": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Bogura",
          "bn": "স্টেশন রোড, কোতোয়ালি, বগুড়া"
        },
        "hospitalId": "bogura-shaheed-ziaur",
        "locationId": "bogura",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01943349655",
        "order": 1
      },
      {
        "id": "ch_doc_079_3",
        "hospital": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Khulna",
          "bn": "জিইসি মোড়, নাসিরাবাদ, খুলনা"
        },
        "hospitalId": "gazi-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01988292776",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_079_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 2003,
        "yearTo": 2008,
        "order": 0
      },
      {
        "id": "ed_doc_079_2",
        "degree": {
          "en": "MD (Cardiology)",
          "bn": "MD (Cardiology)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2009,
        "yearTo": 2013,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_079_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rajshahi",
          "bn": "রাজশাহী"
        },
        "yearFrom": 2014,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_079_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Bogura",
          "bn": "বগুড়া"
        },
        "yearFrom": 2018,
        "yearTo": 2021,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_079_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2022,
        "yearTo": 2025,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "International fellowship training",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Patient counselling",
      "Minimally invasive surgery",
      "Emergency management",
      "Interventional procedures",
      "Diagnostic imaging",
      "Chronic disease management",
      "Post-operative rehabilitation"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {
      "facebook": "https://www.facebook.com/farhana-uddin"
    },
    "publicPhone": "01520791094",
    "publicEmail": "farhana.uddin@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Rajshahi",
      "bn": "জিইসি মোড়, নাসিরাবাদ, রাজশাহী"
    },
    "hospitalIds": [
      "rajshahi-medical",
      "bogura-shaheed-ziaur",
      "gazi-medical"
    ],
    "locationIds": [
      "rajshahi",
      "bogura",
      "khulna"
    ],
    "createdAt": 1788480000000,
    "updatedAt": 1790301600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_080",
    "linkNo": "381115874",
    "slug": "nazmul-islam",
    "email": "nazmul.islam@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$LUjZwoczllmCxloL3EVv3w==$ryNEumBfFPizL8VWXMa1Dto5vDy/6KhqUXwvYFu5pWc=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 179,
    "name": {
      "en": "Dr. Nazmul Islam",
      "bn": "ডা. নাজমুল ইসলাম"
    },
    "speciality": {
      "en": "Hepatologist",
      "bn": "লিভার রোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "hepatologist"
    ],
    "designation": {
      "en": "Senior Consultant, Hepatologist",
      "bn": "সিনিয়র কনসালট্যান্ট, লিভার রোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Gazi Medical College Hospital",
      "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MD (Cardiology)"
    ],
    "about": {
      "en": "Dr. Nazmul Islam is a hepatologist with 31 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নাজমুল ইসলাম একজন লিভার রোগ বিশেষজ্ঞ, বাংলাদেশে 31 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-97431",
    "yearsExperience": 31,
    "patientsServed": 29000,
    "photo": {
      "url": "/demo/photos/m-33.webp",
      "width": 480,
      "height": 480,
      "hash": "00f4c9effd2d91f0",
      "bytes": 8504
    },
    "chambers": [
      {
        "id": "ch_doc_080_1",
        "hospital": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Khulna",
          "bn": "স্টেশন রোড, কোতোয়ালি, খুলনা"
        },
        "hospitalId": "gazi-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01340338768",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_080_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 1985,
        "yearTo": 1990,
        "order": 0
      },
      {
        "id": "ed_doc_080_2",
        "degree": {
          "en": "MD (Cardiology)",
          "bn": "MD (Cardiology)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1991,
        "yearTo": 1995,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_080_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 1996,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "31+ years of clinical practice",
      "Member, Bangladesh Medical Association",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Endoscopic procedures",
      "Diagnostic imaging",
      "Ultrasonography",
      "Post-operative rehabilitation",
      "Patient counselling"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {},
    "publicPhone": "01410822773",
    "publicEmail": "nazmul.islam@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Khulna",
      "bn": "স্টেশন রোড, কোতোয়ালি, খুলনা"
    },
    "hospitalIds": [
      "gazi-medical"
    ],
    "locationIds": [
      "khulna"
    ],
    "createdAt": 1788566400000,
    "updatedAt": 1790305200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_081",
    "linkNo": "256758605",
    "slug": "mizanur-hossain",
    "email": "mizanur.hossain@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$ok9VwRcI5RN8LiyaP7fYlg==$3Xd9h4wDyphYtrVf0OF48nQJdyYVrwAmw1mZ8EGEBFg=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 180,
    "name": {
      "en": "Dr. Mizanur Hossain",
      "bn": "ডা. মিজানুর হোসেন"
    },
    "speciality": {
      "en": "Psychiatrist",
      "bn": "মানসিক রোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "psychiatrist"
    ],
    "designation": {
      "en": "Senior Consultant, Psychiatrist",
      "bn": "সিনিয়র কনসালট্যান্ট, মানসিক রোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Square Hospitals Ltd.",
      "bn": "স্কয়ার হাসপাতাল লিমিটেড"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Mizanur Hossain is a psychiatrist with 25 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. মিজানুর হোসেন একজন মানসিক রোগ বিশেষজ্ঞ, বাংলাদেশে 25 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-79300",
    "yearsExperience": 25,
    "patientsServed": 48000,
    "photo": {
      "url": "/demo/photos/m-34.webp",
      "width": 480,
      "height": 480,
      "hash": "53c319923e6a248c",
      "bytes": 8564
    },
    "chambers": [
      {
        "id": "ch_doc_081_1",
        "hospital": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Dhaka",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
        },
        "hospitalId": "square-hospitals",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01424846522",
        "order": 0
      },
      {
        "id": "ch_doc_081_2",
        "hospital": {
          "en": "Mount Adora Hospital",
          "bn": "মাউন্ট এডোরা হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Sylhet",
          "bn": "জিইসি মোড়, নাসিরাবাদ, সিলেট"
        },
        "hospitalId": "mount-adora",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01320315466",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_081_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 1991,
        "yearTo": 1996,
        "order": 0
      },
      {
        "id": "ed_doc_081_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1997,
        "yearTo": 2001,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_081_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2002,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_081_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Mount Adora Hospital",
          "bn": "মাউন্ট এডোরা হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 2006,
        "yearTo": 2009,
        "current": false,
        "order": 1
      }
    ],
    "awards": [
      {
        "id": "aw_doc_081_1",
        "title": {
          "en": "National Psychiatrist Excellence Award",
          "bn": "জাতীয় মানসিক রোগ বিশেষজ্ঞ শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2021,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_081_1",
        "subject": {
          "en": "Advanced Psychiatrist Training",
          "bn": "উন্নত মানসিক রোগ বিশেষজ্ঞ প্রশিক্ষণ"
        },
        "country": {
          "en": "United Kingdom",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "1 year",
          "bn": ""
        },
        "year": 2019,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_081_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in psychiatrist practice: a district cohort",
          "bn": "মানসিক রোগ বিশেষজ্ঞ চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2024-04-14",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_081_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in psychiatrist care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় মানসিক রোগ বিশেষজ্ঞ সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2023-08-22",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "International fellowship training",
      "Member, Bangladesh Medical Association",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Minimally invasive surgery",
      "Clinical research",
      "Ultrasonography",
      "Diagnostic imaging",
      "Interventional procedures",
      "Post-operative rehabilitation",
      "Paediatric care"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide",
      "Presented at a national medical conference",
      "Led a hospital quality-improvement initiative"
    ],
    "social": {},
    "publicPhone": "01719005250",
    "publicEmail": "mizanur.hossain@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Road 15, Sector 3, Uttara, Dhaka",
      "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
    },
    "hospitalIds": [
      "square-hospitals",
      "mount-adora"
    ],
    "locationIds": [
      "dhaka",
      "sylhet"
    ],
    "createdAt": 1788652800000,
    "updatedAt": 1790308800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_082",
    "linkNo": "828068577",
    "slug": "sabina-karim-2",
    "email": "sabina.karim.2@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$0VUa+xxd/dwaypF2iyp5bA==$JzumjA9XoHhMX/EraYbjVNRPrCE3Y4qgM8vCSURJe9w=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 181,
    "name": {
      "en": "Dr. Sabina Karim",
      "bn": "ডা. সাবিনা করিম"
    },
    "speciality": {
      "en": "Pulmonologist",
      "bn": "বক্ষব্যাধি বিশেষজ্ঞ"
    },
    "specialityIds": [
      "pulmonologist"
    ],
    "designation": {
      "en": "Senior Consultant, Pulmonologist",
      "bn": "সিনিয়র কনসালট্যান্ট, বক্ষব্যাধি বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Labaid Specialized Hospital",
      "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Sabina Karim is a pulmonologist with 28 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. সাবিনা করিম একজন বক্ষব্যাধি বিশেষজ্ঞ, বাংলাদেশে 28 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-83425",
    "yearsExperience": 28,
    "patientsServed": 25000,
    "photo": {
      "url": "/demo/photos/f-48.webp",
      "width": 480,
      "height": 480,
      "hash": "7056d1cdc29bc043",
      "bytes": 9012
    },
    "chambers": [
      {
        "id": "ch_doc_082_1",
        "hospital": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Dhaka",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, ঢাকা"
        },
        "hospitalId": "labaid-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01673607067",
        "order": 0
      },
      {
        "id": "ch_doc_082_2",
        "hospital": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "Station Road, Kotwali, Dhaka",
          "bn": "স্টেশন রোড, কোতোয়ালি, ঢাকা"
        },
        "hospitalId": "square-hospitals",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01326598158",
        "order": 1
      },
      {
        "id": "ch_doc_082_3",
        "hospital": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "address": {
          "en": "Station Road, Kotwali, Dhaka",
          "bn": "স্টেশন রোড, কোতোয়ালি, ঢাকা"
        },
        "hospitalId": "evercare-dhaka",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01793007274",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_082_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 1988,
        "yearTo": 1993,
        "order": 0
      },
      {
        "id": "ed_doc_082_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1994,
        "yearTo": 1998,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_082_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Labaid Specialized Hospital",
          "bn": "ল্যাবএইড স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 1999,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_082_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2003,
        "yearTo": 2006,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_082_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2007,
        "yearTo": 2010,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "Member, Bangladesh Medical Association",
      "28+ years of clinical practice"
    ],
    "skills": [
      "Preventive care",
      "Minimally invasive surgery",
      "Emergency management",
      "Interventional procedures",
      "Clinical research",
      "Diagnostic imaging",
      "Patient counselling"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {
      "facebook": "https://www.facebook.com/sabina-karim-2"
    },
    "publicPhone": "01529382421",
    "publicEmail": "sabina.karim.2@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Plot 81, Block E, Bashundhara, Dhaka",
      "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, ঢাকা"
    },
    "hospitalIds": [
      "labaid-specialized",
      "square-hospitals",
      "evercare-dhaka"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1788739200000,
    "updatedAt": 1790312400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_083",
    "linkNo": "683518813",
    "slug": "saiful-bhuiyan",
    "email": "saiful.bhuiyan@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$oQyBRToB163gIAdGM/DbOA==$w9xR8bQx0FACD0oLkWpz+G/4n/h6/sV8hweKE0jGgwM=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 182,
    "name": {
      "en": "Dr. Saiful Bhuiyan",
      "bn": "ডা. সাইফুল ভূঁইয়া"
    },
    "speciality": {
      "en": "Gastroenterologist",
      "bn": "গ্যাস্ট্রোএন্টেরোলজিস্ট"
    },
    "specialityIds": [
      "gastroenterologist"
    ],
    "designation": {
      "en": "Senior Consultant, Gastroenterologist",
      "bn": "সিনিয়র কনসালট্যান্ট, গ্যাস্ট্রোএন্টেরোলজিস্ট"
    },
    "workplace": {
      "en": "Khulna Medical College Hospital",
      "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MD (Cardiology)"
    ],
    "about": {
      "en": "Dr. Saiful Bhuiyan is a gastroenterologist with 11 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. সাইফুল ভূঁইয়া একজন গ্যাস্ট্রোএন্টেরোলজিস্ট, বাংলাদেশে 11 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-32801",
    "yearsExperience": 11,
    "patientsServed": 37000,
    "photo": {
      "url": "/demo/photos/m-35.webp",
      "width": 480,
      "height": 480,
      "hash": "715f0e94fb2c20bd",
      "bytes": 16598
    },
    "chambers": [
      {
        "id": "ch_doc_083_1",
        "hospital": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Khulna",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, খুলনা"
        },
        "hospitalId": "khulna-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01421229489",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_083_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 2005,
        "yearTo": 2010,
        "order": 0
      },
      {
        "id": "ed_doc_083_2",
        "degree": {
          "en": "MD (Cardiology)",
          "bn": "MD (Cardiology)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2011,
        "yearTo": 2015,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_083_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2016,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "11+ years of clinical practice",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Clinical research",
      "Emergency management",
      "Diagnostic imaging",
      "Post-operative rehabilitation"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {},
    "publicPhone": "01685771398",
    "publicEmail": "saiful.bhuiyan@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "House 42, Road 12, Dhanmondi, Khulna",
      "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, খুলনা"
    },
    "hospitalIds": [
      "khulna-medical"
    ],
    "locationIds": [
      "khulna"
    ],
    "createdAt": 1788825600000,
    "updatedAt": 1790316000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_084",
    "linkNo": "851480646",
    "slug": "mahfuza-haque",
    "email": "mahfuza.haque@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$zDBVdT7Lds/q1DCF0IvEog==$DuyxE7QbuEEUzL1u57ncjhfU4EN1l16SmoLpBONHK7U=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 183,
    "name": {
      "en": "Dr. Mahfuza Haque",
      "bn": "ডা. মাহফুজা হক"
    },
    "speciality": {
      "en": "Pulmonologist",
      "bn": "বক্ষব্যাধি বিশেষজ্ঞ"
    },
    "specialityIds": [
      "pulmonologist"
    ],
    "designation": {
      "en": "Senior Consultant, Pulmonologist",
      "bn": "সিনিয়র কনসালট্যান্ট, বক্ষব্যাধি বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Sylhet MAG Osmani Medical College Hospital",
      "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MD (Cardiology)"
    ],
    "about": {
      "en": "Dr. Mahfuza Haque is a pulmonologist with 15 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. মাহফুজা হক একজন বক্ষব্যাধি বিশেষজ্ঞ, বাংলাদেশে 15 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-32878",
    "yearsExperience": 15,
    "patientsServed": 35000,
    "photo": {
      "url": "/demo/photos/f-49.webp",
      "width": 480,
      "height": 480,
      "hash": "b27496ba55ab309a",
      "bytes": 10522
    },
    "chambers": [
      {
        "id": "ch_doc_084_1",
        "hospital": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Sylhet",
          "bn": "স্টেশন রোড, কোতোয়ালি, সিলেট"
        },
        "hospitalId": "sylhet-mag-osmani",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01513430850",
        "order": 0
      },
      {
        "id": "ch_doc_084_2",
        "hospital": {
          "en": "Dhaka Medical College Hospital",
          "bn": "ঢাকা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Dhaka",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
        },
        "hospitalId": "dhaka-medical",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01648642843",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_084_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 2001,
        "yearTo": 2006,
        "order": 0
      },
      {
        "id": "ed_doc_084_2",
        "degree": {
          "en": "MD (Cardiology)",
          "bn": "MD (Cardiology)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2007,
        "yearTo": 2011,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_084_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 2012,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_084_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Dhaka Medical College Hospital",
          "bn": "ঢাকা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2016,
        "yearTo": 2019,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "Extensive ICU and emergency care experience",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Clinical research",
      "Paediatric care",
      "Emergency management",
      "Chronic disease management",
      "Endoscopic procedures",
      "Minimally invasive surgery"
    ],
    "achievements": [
      "Led a hospital quality-improvement initiative"
    ],
    "social": {},
    "publicPhone": "01677524378",
    "publicEmail": "mahfuza.haque@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Sylhet",
      "bn": "স্টেশন রোড, কোতোয়ালি, সিলেট"
    },
    "hospitalIds": [
      "sylhet-mag-osmani",
      "dhaka-medical"
    ],
    "locationIds": [
      "sylhet",
      "dhaka"
    ],
    "createdAt": 1788912000000,
    "updatedAt": 1790319600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_085",
    "linkNo": "686214716",
    "slug": "nazmul-rahman",
    "email": "nazmul.rahman@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$CYyKjT4+JoOSsBvKUc0iCg==$uObPTLfSFHfmLyKCkhsaO4ZTBCe1MPVpe7G3RmqRrw0=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 184,
    "name": {
      "en": "Dr. Nazmul Rahman",
      "bn": "ডা. নাজমুল রহমান"
    },
    "speciality": {
      "en": "Rheumatologist",
      "bn": "বাতরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "rheumatologist"
    ],
    "designation": {
      "en": "Senior Consultant, Rheumatologist",
      "bn": "সিনিয়র কনসালট্যান্ট, বাতরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Mymensingh Medical College Hospital",
      "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Nazmul Rahman is a rheumatologist with 12 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নাজমুল রহমান একজন বাতরোগ বিশেষজ্ঞ, বাংলাদেশে 12 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-10128",
    "yearsExperience": 12,
    "patientsServed": 9000,
    "photo": {
      "url": "/demo/photos/m-36.webp",
      "width": 480,
      "height": 480,
      "hash": "c7659f6af4b0aa38",
      "bytes": 6238
    },
    "chambers": [
      {
        "id": "ch_doc_085_1",
        "hospital": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Mymensingh",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, ময়মনসিংহ"
        },
        "hospitalId": "mymensingh-medical",
        "locationId": "mymensingh",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01491731396",
        "order": 0
      },
      {
        "id": "ch_doc_085_2",
        "hospital": {
          "en": "National Heart Foundation Hospital",
          "bn": "জাতীয় হৃদরোগ ফাউন্ডেশন হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Dhaka",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, ঢাকা"
        },
        "hospitalId": "national-heart",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01915124063",
        "order": 1
      },
      {
        "id": "ch_doc_085_3",
        "hospital": {
          "en": "Islami Bank Medical College Hospital",
          "bn": "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Rajshahi",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, রাজশাহী"
        },
        "hospitalId": "islami-bank-rajshahi",
        "locationId": "rajshahi",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01726050183",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_085_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 2004,
        "yearTo": 2009,
        "order": 0
      },
      {
        "id": "ed_doc_085_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2010,
        "yearTo": 2014,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_085_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Mymensingh",
          "bn": "ময়মনসিংহ"
        },
        "yearFrom": 2015,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_085_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "National Heart Foundation Hospital",
          "bn": "জাতীয় হৃদরোগ ফাউন্ডেশন হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2019,
        "yearTo": 2022,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_085_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Islami Bank Medical College Hospital",
          "bn": "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rajshahi",
          "bn": "রাজশাহী"
        },
        "yearFrom": 2023,
        "yearTo": 2026,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "12+ years of clinical practice",
      "Member, Bangladesh Medical Association",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Interventional procedures",
      "Preventive care",
      "Chronic disease management",
      "Minimally invasive surgery",
      "Patient counselling",
      "Clinical research",
      "Ultrasonography"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {
      "facebook": "https://www.facebook.com/nazmul-rahman"
    },
    "publicPhone": "01475035702",
    "publicEmail": "nazmul.rahman@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Zindabazar, Main Road, Mymensingh",
      "bn": "জিন্দাবাজার, প্রধান সড়ক, ময়মনসিংহ"
    },
    "hospitalIds": [
      "mymensingh-medical",
      "national-heart",
      "islami-bank-rajshahi"
    ],
    "locationIds": [
      "mymensingh",
      "dhaka",
      "rajshahi"
    ],
    "createdAt": 1788998400000,
    "updatedAt": 1790323200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_086",
    "linkNo": "345539985",
    "slug": "farhana-haque",
    "email": "farhana.haque@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$3+VJIdxBuQJK8eV/yfmisA==$tPRKhLFOBYtVtHGWQqFvadOlmdy3NTykKQ8xHO9om3o=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 185,
    "name": {
      "en": "Dr. Farhana Haque",
      "bn": "ডা. ফারহানা হক"
    },
    "speciality": {
      "en": "Ophthalmologist",
      "bn": "চক্ষু বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ophthalmologist"
    ],
    "designation": {
      "en": "Senior Consultant, Ophthalmologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চক্ষু বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Square Hospitals Ltd.",
      "bn": "স্কয়ার হাসপাতাল লিমিটেড"
    },
    "degrees": [
      "MBBS",
      "FCPS (Surgery)",
      "MS"
    ],
    "about": {
      "en": "Dr. Farhana Haque is a ophthalmologist with 28 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. ফারহানা হক একজন চক্ষু বিশেষজ্ঞ, বাংলাদেশে 28 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-57080",
    "yearsExperience": 28,
    "patientsServed": 45000,
    "photo": {
      "url": "/demo/photos/f-50.webp",
      "width": 480,
      "height": 480,
      "hash": "408b97cc9206864d",
      "bytes": 12314
    },
    "chambers": [
      {
        "id": "ch_doc_086_1",
        "hospital": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Dhaka",
          "bn": "২১ শ্যামলী, মিরপুর রোড, ঢাকা"
        },
        "hospitalId": "square-hospitals",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01976900428",
        "order": 0
      },
      {
        "id": "ch_doc_086_2",
        "hospital": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Dhaka",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
        },
        "hospitalId": "evercare-dhaka",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01713099500",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_086_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 1988,
        "yearTo": 1993,
        "order": 0
      },
      {
        "id": "ed_doc_086_2",
        "degree": {
          "en": "FCPS (Surgery)",
          "bn": "FCPS (Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1994,
        "yearTo": 1998,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_086_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 1999,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_086_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2003,
        "yearTo": 2006,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "Advanced Cardiac Life Support (ACLS) certified",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Ultrasonography",
      "Paediatric care",
      "Interventional procedures",
      "Post-operative rehabilitation",
      "Diagnostic imaging",
      "Clinical research"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {},
    "publicPhone": "01968657113",
    "publicEmail": "farhana.haque@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "21 Shyamoli, Mirpur Road, Dhaka",
      "bn": "২১ শ্যামলী, মিরপুর রোড, ঢাকা"
    },
    "hospitalIds": [
      "square-hospitals",
      "evercare-dhaka"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1789084800000,
    "updatedAt": 1790326800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_087",
    "linkNo": "134230550",
    "slug": "tanvir-begum",
    "email": "tanvir.begum@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$T13JMaWS+8sVHBscvIYt5g==$7D7tcipzYExkgC+MD3lT3BUJaw6dux/nz/RAzMb90t0=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 186,
    "name": {
      "en": "Dr. Tanvir Begum",
      "bn": "ডা. তানভীর বেগম"
    },
    "speciality": {
      "en": "Dermatologist",
      "bn": "চর্মরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "dermatologist"
    ],
    "designation": {
      "en": "Senior Consultant, Dermatologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চর্মরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Bangladesh Specialized Hospital",
      "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Tanvir Begum is a dermatologist with 14 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. তানভীর বেগম একজন চর্মরোগ বিশেষজ্ঞ, বাংলাদেশে 14 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-87216",
    "yearsExperience": 14,
    "patientsServed": 5000,
    "photo": {
      "url": "/demo/photos/m-37.webp",
      "width": 480,
      "height": 480,
      "hash": "80944d5ccba4742e",
      "bytes": 17928
    },
    "chambers": [
      {
        "id": "ch_doc_087_1",
        "hospital": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Dhaka",
          "bn": "২১ শ্যামলী, মিরপুর রোড, ঢাকা"
        },
        "hospitalId": "bangladesh-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01347191306",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_087_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 2002,
        "yearTo": 2007,
        "order": 0
      },
      {
        "id": "ed_doc_087_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2008,
        "yearTo": 2012,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_087_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2013,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Advanced Cardiac Life Support (ACLS) certified",
      "Member, Bangladesh Medical Association",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Endoscopic procedures",
      "Preventive care",
      "Emergency management",
      "Ultrasonography",
      "Interventional procedures",
      "Minimally invasive surgery"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide"
    ],
    "social": {},
    "publicPhone": "01635695889",
    "publicEmail": "tanvir.begum@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "21 Shyamoli, Mirpur Road, Dhaka",
      "bn": "২১ শ্যামলী, মিরপুর রোড, ঢাকা"
    },
    "hospitalIds": [
      "bangladesh-specialized"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1789171200000,
    "updatedAt": 1790330400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_088",
    "linkNo": "697417045",
    "slug": "nusrat-bhuiyan",
    "email": "nusrat.bhuiyan@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$gh46aBj6oK257jP4cDd21A==$cX+qPP4BnxdKPdJtWyxzQVIwFTRBRwe88IQgE7QYLrQ=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 187,
    "name": {
      "en": "Dr. Nusrat Bhuiyan",
      "bn": "ডা. নুসরাত ভূঁইয়া"
    },
    "speciality": {
      "en": "Ophthalmologist",
      "bn": "চক্ষু বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ophthalmologist"
    ],
    "designation": {
      "en": "Senior Consultant, Ophthalmologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চক্ষু বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Evercare Hospital Dhaka",
      "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Nusrat Bhuiyan is a ophthalmologist with 13 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নুসরাত ভূঁইয়া একজন চক্ষু বিশেষজ্ঞ, বাংলাদেশে 13 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-95745",
    "yearsExperience": 13,
    "patientsServed": 18000,
    "photo": {
      "url": "/demo/photos/f-51.webp",
      "width": 480,
      "height": 480,
      "hash": "5b50e2e6b37d0aed",
      "bytes": 8674
    },
    "chambers": [
      {
        "id": "ch_doc_088_1",
        "hospital": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Dhaka",
          "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
        },
        "hospitalId": "evercare-dhaka",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01466638145",
        "order": 0
      },
      {
        "id": "ch_doc_088_2",
        "hospital": {
          "en": "Dhaka Medical College Hospital",
          "bn": "ঢাকা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Dhaka",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
        },
        "hospitalId": "dhaka-medical",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01752353259",
        "order": 1
      },
      {
        "id": "ch_doc_088_3",
        "hospital": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Chattogram",
          "bn": "২১ শ্যামলী, মিরপুর রোড, চট্টগ্রাম"
        },
        "hospitalId": "max-chattogram",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01916127491",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_088_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 2003,
        "yearTo": 2008,
        "order": 0
      },
      {
        "id": "ed_doc_088_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2009,
        "yearTo": 2013,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_088_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2014,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_088_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Dhaka Medical College Hospital",
          "bn": "ঢাকা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2018,
        "yearTo": 2021,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_088_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2022,
        "yearTo": 2025,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "International fellowship training",
      "Member, Bangladesh Medical Association",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Diagnostic imaging",
      "Minimally invasive surgery",
      "Ultrasonography",
      "Emergency management",
      "Patient counselling"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal"
    ],
    "social": {
      "facebook": "https://www.facebook.com/nusrat-bhuiyan"
    },
    "publicPhone": "01850674975",
    "publicEmail": "nusrat.bhuiyan@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "GEC Circle, Nasirabad, Dhaka",
      "bn": "জিইসি মোড়, নাসিরাবাদ, ঢাকা"
    },
    "hospitalIds": [
      "evercare-dhaka",
      "dhaka-medical",
      "max-chattogram"
    ],
    "locationIds": [
      "dhaka",
      "chattogram"
    ],
    "createdAt": 1789257600000,
    "updatedAt": 1790334000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_089",
    "linkNo": "778512425",
    "slug": "nazmul-haque",
    "email": "nazmul.haque@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$xZDTYatbRF+qwq+1qcHwsw==$c80VdxkjIGdgAJvHIEKsqHB025R2482h2efOYkWVAHQ=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 188,
    "name": {
      "en": "Dr. Nazmul Haque",
      "bn": "ডা. নাজমুল হক"
    },
    "speciality": {
      "en": "Ophthalmologist",
      "bn": "চক্ষু বিশেষজ্ঞ"
    },
    "specialityIds": [
      "ophthalmologist"
    ],
    "designation": {
      "en": "Senior Consultant, Ophthalmologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চক্ষু বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Khulna Medical College Hospital",
      "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Nazmul Haque is a ophthalmologist with 32 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নাজমুল হক একজন চক্ষু বিশেষজ্ঞ, বাংলাদেশে 32 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-87198",
    "yearsExperience": 32,
    "patientsServed": 14000,
    "photo": {
      "url": "/demo/photos/m-38.webp",
      "width": 480,
      "height": 480,
      "hash": "b77476ae31840f93",
      "bytes": 8896
    },
    "chambers": [
      {
        "id": "ch_doc_089_1",
        "hospital": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Khulna",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, খুলনা"
        },
        "hospitalId": "khulna-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01943354160",
        "order": 0
      },
      {
        "id": "ch_doc_089_2",
        "hospital": {
          "en": "Islami Bank Medical College Hospital",
          "bn": "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Rajshahi",
          "bn": "স্টেশন রোড, কোতোয়ালি, রাজশাহী"
        },
        "hospitalId": "islami-bank-rajshahi",
        "locationId": "rajshahi",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01886778941",
        "order": 1
      },
      {
        "id": "ch_doc_089_3",
        "hospital": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "address": {
          "en": "Zindabazar, Main Road, Dhaka",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
        },
        "hospitalId": "square-hospitals",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01313221867",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_089_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Chattogram Medical College",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ"
        },
        "yearFrom": 1984,
        "yearTo": 1989,
        "order": 0
      },
      {
        "id": "ed_doc_089_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1990,
        "yearTo": 1994,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_089_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 1995,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_089_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Islami Bank Medical College Hospital",
          "bn": "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rajshahi",
          "bn": "রাজশাহী"
        },
        "yearFrom": 1999,
        "yearTo": 2002,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_089_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Square Hospitals Ltd.",
          "bn": "স্কয়ার হাসপাতাল লিমিটেড"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2003,
        "yearTo": 2006,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "32+ years of clinical practice",
      "Extensive ICU and emergency care experience",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Chronic disease management",
      "Emergency management",
      "Interventional procedures",
      "Patient counselling",
      "Post-operative rehabilitation",
      "Minimally invasive surgery",
      "Preventive care"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {},
    "publicPhone": "01540959588",
    "publicEmail": "nazmul.haque@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Zindabazar, Main Road, Khulna",
      "bn": "জিন্দাবাজার, প্রধান সড়ক, খুলনা"
    },
    "hospitalIds": [
      "khulna-medical",
      "islami-bank-rajshahi",
      "square-hospitals"
    ],
    "locationIds": [
      "khulna",
      "rajshahi",
      "dhaka"
    ],
    "createdAt": 1789344000000,
    "updatedAt": 1790337600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_090",
    "linkNo": "788091324",
    "slug": "nusrat-sultana",
    "email": "nusrat.sultana@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$x4wDC+WEbzNCHJNTK5ibvQ==$WLkQ+rpy3D2V4hwbsyjBjDV4LvU5eSSDIi6ymrb8BaU=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 189,
    "name": {
      "en": "Dr. Nusrat Sultana",
      "bn": "ডা. নুসরাত সুলতানা"
    },
    "speciality": {
      "en": "Neurologist",
      "bn": "স্নায়ুরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "neurologist"
    ],
    "designation": {
      "en": "Senior Consultant, Neurologist",
      "bn": "সিনিয়র কনসালট্যান্ট, স্নায়ুরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Rangpur Medical College Hospital",
      "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Nusrat Sultana is a neurologist with 29 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নুসরাত সুলতানা একজন স্নায়ুরোগ বিশেষজ্ঞ, বাংলাদেশে 29 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-64569",
    "yearsExperience": 29,
    "patientsServed": 15000,
    "photo": {
      "url": "/demo/photos/f-52.webp",
      "width": 480,
      "height": 480,
      "hash": "dec30b2dac5cfb66",
      "bytes": 9842
    },
    "chambers": [
      {
        "id": "ch_doc_090_1",
        "hospital": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Rangpur",
          "bn": "স্টেশন রোড, কোতোয়ালি, রংপুর"
        },
        "hospitalId": "rangpur-medical",
        "locationId": "rangpur",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01921051437",
        "order": 0
      },
      {
        "id": "ch_doc_090_2",
        "hospital": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "address": {
          "en": "Zindabazar, Main Road, Dhaka",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
        },
        "hospitalId": "evercare-dhaka",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01989564700",
        "order": 1
      },
      {
        "id": "ch_doc_090_3",
        "hospital": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "GEC Circle, Nasirabad, Rajshahi",
          "bn": "জিইসি মোড়, নাসিরাবাদ, রাজশাহী"
        },
        "hospitalId": "rajshahi-medical",
        "locationId": "rajshahi",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01718494403",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_090_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 1987,
        "yearTo": 1992,
        "order": 0
      },
      {
        "id": "ed_doc_090_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1993,
        "yearTo": 1997,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_090_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rangpur Medical College Hospital",
          "bn": "রংপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rangpur",
          "bn": "রংপুর"
        },
        "yearFrom": 1998,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_090_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Evercare Hospital Dhaka",
          "bn": "এভারকেয়ার হাসপাতাল ঢাকা"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2002,
        "yearTo": 2005,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_090_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rajshahi",
          "bn": "রাজশাহী"
        },
        "yearFrom": 2006,
        "yearTo": 2009,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "29+ years of clinical practice",
      "Extensive ICU and emergency care experience",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Diagnostic imaging",
      "Clinical research",
      "Preventive care",
      "Endoscopic procedures"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {},
    "publicPhone": "01686304372",
    "publicEmail": "nusrat.sultana@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Rangpur",
      "bn": "স্টেশন রোড, কোতোয়ালি, রংপুর"
    },
    "hospitalIds": [
      "rangpur-medical",
      "evercare-dhaka",
      "rajshahi-medical"
    ],
    "locationIds": [
      "rangpur",
      "dhaka",
      "rajshahi"
    ],
    "createdAt": 1789430400000,
    "updatedAt": 1790341200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_091",
    "linkNo": "898772517",
    "slug": "nasrin-mondal",
    "email": "nasrin.mondal@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$nNXd2s59Aw+beLHIR6AnJA==$Ysg/UcWhg/CSki25cC2fn3bdjUuoc6VLRedF1XmFP70=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 190,
    "name": {
      "en": "Dr. Nasrin Mondal",
      "bn": "ডা. নাসরিন মণ্ডল"
    },
    "speciality": {
      "en": "Dental Surgeon",
      "bn": "ডেন্টাল সার্জন"
    },
    "specialityIds": [
      "dentist"
    ],
    "designation": {
      "en": "Senior Consultant, Dental Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, ডেন্টাল সার্জন"
    },
    "workplace": {
      "en": "Shaheed Ziaur Rahman Medical College Hospital",
      "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Nasrin Mondal is a dental surgeon with 22 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নাসরিন মণ্ডল একজন ডেন্টাল সার্জন, বাংলাদেশে 22 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-81024",
    "yearsExperience": 22,
    "patientsServed": 40000,
    "photo": {
      "url": "/demo/photos/f-53.webp",
      "width": 480,
      "height": 480,
      "hash": "0b2309ee62730cda",
      "bytes": 12714
    },
    "chambers": [
      {
        "id": "ch_doc_091_1",
        "hospital": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Plot 81, Block E, Bashundhara, Bogura",
          "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, বগুড়া"
        },
        "hospitalId": "bogura-shaheed-ziaur",
        "locationId": "bogura",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01756521413",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_091_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 1994,
        "yearTo": 1999,
        "order": 0
      },
      {
        "id": "ed_doc_091_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2000,
        "yearTo": 2004,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_091_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Bogura",
          "bn": "বগুড়া"
        },
        "yearFrom": 2005,
        "current": true,
        "order": 0
      }
    ],
    "awards": [
      {
        "id": "aw_doc_091_1",
        "title": {
          "en": "National Dental Surgeon Excellence Award",
          "bn": "জাতীয় ডেন্টাল সার্জন শ্রেষ্ঠত্ব পুরস্কার"
        },
        "issuer": {
          "en": "Bangladesh Medical Association",
          "bn": "বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন"
        },
        "year": 2025,
        "order": 0
      }
    ],
    "fellowships": [
      {
        "id": "fe_doc_091_1",
        "subject": {
          "en": "Advanced Dental Surgeon Training",
          "bn": "উন্নত ডেন্টাল সার্জন প্রশিক্ষণ"
        },
        "country": {
          "en": "United Kingdom",
          "bn": "বিদেশ"
        },
        "duration": {
          "en": "1 year",
          "bn": ""
        },
        "year": 2019,
        "order": 0
      }
    ],
    "papers": [
      {
        "id": "pa_doc_091_1",
        "kind": "publication",
        "title": {
          "en": "Outcomes of early intervention in dental surgeon practice: a district cohort",
          "bn": "ডেন্টাল সার্জন চিকিৎসায় প্রাথমিক হস্তক্ষেপের ফলাফল: একটি জেলা সমীক্ষা"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2023-02-08",
        "image": null,
        "order": 0
      },
      {
        "id": "pa_doc_091_2",
        "kind": "seminar",
        "title": {
          "en": "Advances in dental surgeon care in South Asia",
          "bn": "দক্ষিণ এশিয়ায় ডেন্টাল সার্জন সেবার অগ্রগতি"
        },
        "summary": {
          "en": "",
          "bn": ""
        },
        "date": "2023-03-26",
        "image": null,
        "order": 1
      }
    ],
    "qualifications": [
      "International fellowship training",
      "Advanced Cardiac Life Support (ACLS) certified",
      "22+ years of clinical practice"
    ],
    "skills": [
      "Emergency management",
      "Diagnostic imaging",
      "Endoscopic procedures",
      "Interventional procedures"
    ],
    "achievements": [
      "Published in a peer-reviewed international journal",
      "Trained junior consultants in advanced procedures",
      "Developed a follow-up protocol adopted department-wide"
    ],
    "social": {
      "facebook": "https://www.facebook.com/nasrin-mondal"
    },
    "publicPhone": "01768673236",
    "publicEmail": "nasrin.mondal@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Plot 81, Block E, Bashundhara, Bogura",
      "bn": "প্লট ৮১, ব্লক ই, বসুন্ধরা, বগুড়া"
    },
    "hospitalIds": [
      "bogura-shaheed-ziaur"
    ],
    "locationIds": [
      "bogura"
    ],
    "createdAt": 1789516800000,
    "updatedAt": 1790344800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_092",
    "linkNo": "317385673",
    "slug": "rafiqul-mondal-2",
    "email": "rafiqul.mondal.2@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$QlrgpZcLbWN55jg5xPCpyQ==$EGaUOBmXE6Rt23s5Atv0QnxuYy+kCGfR1xcbbIbD61c=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 191,
    "name": {
      "en": "Dr. Rafiqul Mondal",
      "bn": "ডা. রফিকুল মণ্ডল"
    },
    "speciality": {
      "en": "Dermatologist",
      "bn": "চর্মরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "dermatologist"
    ],
    "designation": {
      "en": "Senior Consultant, Dermatologist",
      "bn": "সিনিয়র কনসালট্যান্ট, চর্মরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Rajshahi Medical College Hospital",
      "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Rafiqul Mondal is a dermatologist with 18 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রফিকুল মণ্ডল একজন চর্মরোগ বিশেষজ্ঞ, বাংলাদেশে 18 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-62739",
    "yearsExperience": 18,
    "patientsServed": 47000,
    "photo": {
      "url": "/demo/photos/m-39.webp",
      "width": 480,
      "height": 480,
      "hash": "06a2ab71e0759ea0",
      "bytes": 7794
    },
    "chambers": [
      {
        "id": "ch_doc_092_1",
        "hospital": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Rajshahi",
          "bn": "স্টেশন রোড, কোতোয়ালি, রাজশাহী"
        },
        "hospitalId": "rajshahi-medical",
        "locationId": "rajshahi",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01975813957",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_092_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Sylhet MAG Osmani Medical College",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"
        },
        "yearFrom": 1998,
        "yearTo": 2003,
        "order": 0
      },
      {
        "id": "ed_doc_092_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2004,
        "yearTo": 2008,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_092_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Rajshahi Medical College Hospital",
          "bn": "রাজশাহী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Rajshahi",
          "bn": "রাজশাহী"
        },
        "yearFrom": 2009,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "International fellowship training",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Emergency management",
      "Chronic disease management",
      "Preventive care",
      "Clinical research",
      "Patient counselling",
      "Diagnostic imaging",
      "Paediatric care"
    ],
    "achievements": [
      "Led a hospital quality-improvement initiative"
    ],
    "social": {},
    "publicPhone": "01751536138",
    "publicEmail": "rafiqul.mondal.2@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Station Road, Kotwali, Rajshahi",
      "bn": "স্টেশন রোড, কোতোয়ালি, রাজশাহী"
    },
    "hospitalIds": [
      "rajshahi-medical"
    ],
    "locationIds": [
      "rajshahi"
    ],
    "createdAt": 1789603200000,
    "updatedAt": 1790348400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_093",
    "linkNo": "359737679",
    "slug": "rokeya-uddin",
    "email": "rokeya.uddin@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$Fmj9UEFSvFLPaWgVPdvNgQ==$+BlUjSeppvYYYBJN12uSoZdZqXfhyT3ET9faBLsDsHI=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 192,
    "name": {
      "en": "Dr. Rokeya Uddin",
      "bn": "ডা. রোকেয়া উদ্দিন"
    },
    "speciality": {
      "en": "Gynaecologist & Obstetrician",
      "bn": "স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "specialityIds": [
      "gynaecologist"
    ],
    "designation": {
      "en": "Senior Consultant, Gynaecologist & Obstetrician",
      "bn": "সিনিয়র কনসালট্যান্ট, স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Shaheed Ziaur Rahman Medical College Hospital",
      "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "MRCP (UK)"
    ],
    "about": {
      "en": "Dr. Rokeya Uddin is a gynaecologist & obstetrician with 27 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রোকেয়া উদ্দিন একজন স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ, বাংলাদেশে 27 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-48659",
    "yearsExperience": 27,
    "patientsServed": 37000,
    "photo": {
      "url": "/demo/photos/f-54.webp",
      "width": 480,
      "height": 480,
      "hash": "a8f652e656c26c16",
      "bytes": 12044
    },
    "chambers": [
      {
        "id": "ch_doc_093_1",
        "hospital": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Bogura",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, বগুড়া"
        },
        "hospitalId": "bogura-shaheed-ziaur",
        "locationId": "bogura",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01524520001",
        "order": 0
      },
      {
        "id": "ch_doc_093_2",
        "hospital": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "Station Road, Kotwali, Khulna",
          "bn": "স্টেশন রোড, কোতোয়ালি, খুলনা"
        },
        "hospitalId": "gazi-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01512906273",
        "order": 1
      },
      {
        "id": "ch_doc_093_3",
        "hospital": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Khulna",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, খুলনা"
        },
        "hospitalId": "khulna-medical",
        "locationId": "khulna",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01373347614",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_093_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 1989,
        "yearTo": 1994,
        "order": 0
      },
      {
        "id": "ed_doc_093_2",
        "degree": {
          "en": "MRCP (UK)",
          "bn": "MRCP (UK)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1995,
        "yearTo": 1999,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_093_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Shaheed Ziaur Rahman Medical College Hospital",
          "bn": "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Bogura",
          "bn": "বগুড়া"
        },
        "yearFrom": 2000,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_093_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Gazi Medical College Hospital",
          "bn": "গাজী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2004,
        "yearTo": 2007,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_093_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Khulna Medical College Hospital",
          "bn": "খুলনা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Khulna",
          "bn": "খুলনা"
        },
        "yearFrom": 2008,
        "yearTo": 2011,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "27+ years of clinical practice",
      "International fellowship training",
      "Extensive ICU and emergency care experience"
    ],
    "skills": [
      "Paediatric care",
      "Ultrasonography",
      "Emergency management",
      "Clinical research",
      "Interventional procedures",
      "Post-operative rehabilitation",
      "Chronic disease management"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide"
    ],
    "social": {},
    "publicPhone": "01663453656",
    "publicEmail": "rokeya.uddin@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "House 42, Road 12, Dhanmondi, Bogura",
      "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, বগুড়া"
    },
    "hospitalIds": [
      "bogura-shaheed-ziaur",
      "gazi-medical",
      "khulna-medical"
    ],
    "locationIds": [
      "bogura",
      "khulna"
    ],
    "createdAt": 1789689600000,
    "updatedAt": 1790352000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_094",
    "linkNo": "634006652",
    "slug": "abdul-hossain",
    "email": "abdul.hossain@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$NMHC4wO79SKT5ba2RvoiDQ==$prpnVsM5qDBYAvixD1mIsy8dBrK1siWs86Pe6zfSG84=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 193,
    "name": {
      "en": "Dr. Abdul Hossain",
      "bn": "ডা. আব্দুল হোসেন"
    },
    "speciality": {
      "en": "Dental Surgeon",
      "bn": "ডেন্টাল সার্জন"
    },
    "specialityIds": [
      "dentist"
    ],
    "designation": {
      "en": "Senior Consultant, Dental Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, ডেন্টাল সার্জন"
    },
    "workplace": {
      "en": "Cumilla Medical College Hospital",
      "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Abdul Hossain is a dental surgeon with 27 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. আব্দুল হোসেন একজন ডেন্টাল সার্জন, বাংলাদেশে 27 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-53465",
    "yearsExperience": 27,
    "patientsServed": 39000,
    "photo": {
      "url": "/demo/photos/m-40.webp",
      "width": 480,
      "height": 480,
      "hash": "a664648f510b9f53",
      "bytes": 8168
    },
    "chambers": [
      {
        "id": "ch_doc_094_1",
        "hospital": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Cumilla",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, কুমিল্লা"
        },
        "hospitalId": "comilla-medical",
        "locationId": "cumilla",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01487720629",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_094_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 1989,
        "yearTo": 1994,
        "order": 0
      },
      {
        "id": "ed_doc_094_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1995,
        "yearTo": 1999,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_094_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Cumilla Medical College Hospital",
          "bn": "কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Cumilla",
          "bn": "কুমিল্লা"
        },
        "yearFrom": 2000,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "27+ years of clinical practice",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Endoscopic procedures",
      "Paediatric care",
      "Chronic disease management",
      "Ultrasonography",
      "Preventive care",
      "Patient counselling"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide"
    ],
    "social": {
      "facebook": "https://www.facebook.com/abdul-hossain"
    },
    "publicPhone": "01477786296",
    "publicEmail": "abdul.hossain@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "House 42, Road 12, Dhanmondi, Cumilla",
      "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, কুমিল্লা"
    },
    "hospitalIds": [
      "comilla-medical"
    ],
    "locationIds": [
      "cumilla"
    ],
    "createdAt": 1789776000000,
    "updatedAt": 1790355600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_095",
    "linkNo": "233290994",
    "slug": "abdul-mondal-2",
    "email": "abdul.mondal.2@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$w2Q+k7g9t2+3xTFbkCCyfg==$OEa0DLudQZnk00+qrxvrIusb4mPv7E6FmvrAVyUOgY4=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 194,
    "name": {
      "en": "Dr. Abdul Mondal",
      "bn": "ডা. আব্দুল মণ্ডল"
    },
    "speciality": {
      "en": "Dental Surgeon",
      "bn": "ডেন্টাল সার্জন"
    },
    "specialityIds": [
      "dentist"
    ],
    "designation": {
      "en": "Senior Consultant, Dental Surgeon",
      "bn": "সিনিয়র কনসালট্যান্ট, ডেন্টাল সার্জন"
    },
    "workplace": {
      "en": "Mymensingh Medical College Hospital",
      "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS",
      "FACC"
    ],
    "about": {
      "en": "Dr. Abdul Mondal is a dental surgeon with 26 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. আব্দুল মণ্ডল একজন ডেন্টাল সার্জন, বাংলাদেশে 26 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-87011",
    "yearsExperience": 26,
    "patientsServed": 15000,
    "photo": {
      "url": "/demo/photos/m-41.webp",
      "width": 480,
      "height": 480,
      "hash": "f8afd3ddd351b5c3",
      "bytes": 6848
    },
    "chambers": [
      {
        "id": "ch_doc_095_1",
        "hospital": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Mymensingh",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ময়মনসিংহ"
        },
        "hospitalId": "mymensingh-medical",
        "locationId": "mymensingh",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01698668144",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_095_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Chattogram Medical College",
          "bn": "চট্টগ্রাম মেডিকেল কলেজ"
        },
        "yearFrom": 1990,
        "yearTo": 1995,
        "order": 0
      },
      {
        "id": "ed_doc_095_2",
        "degree": {
          "en": "FCPS",
          "bn": "FCPS"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1996,
        "yearTo": 2000,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_095_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Mymensingh Medical College Hospital",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Mymensingh",
          "bn": "ময়মনসিংহ"
        },
        "yearFrom": 2001,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "26+ years of clinical practice",
      "Member, Bangladesh Medical Association",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Emergency management",
      "Clinical research",
      "Post-operative rehabilitation",
      "Ultrasonography",
      "Paediatric care",
      "Patient counselling"
    ],
    "achievements": [
      "Led a hospital quality-improvement initiative"
    ],
    "social": {},
    "publicPhone": "01934621252",
    "publicEmail": "abdul.mondal.2@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "House 42, Road 12, Dhanmondi, Mymensingh",
      "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ময়মনসিংহ"
    },
    "hospitalIds": [
      "mymensingh-medical"
    ],
    "locationIds": [
      "mymensingh"
    ],
    "createdAt": 1789862400000,
    "updatedAt": 1790359200000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_096",
    "linkNo": "890342813",
    "slug": "nusrat-mondal",
    "email": "nusrat.mondal@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$KZO12LsB8OAyphe2NFgtxw==$/B7mthEX4cb2wy/n5+rlCni+j9DAXJCcl/jeKkh6oDc=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 195,
    "name": {
      "en": "Dr. Nusrat Mondal",
      "bn": "ডা. নুসরাত মণ্ডল"
    },
    "speciality": {
      "en": "Pulmonologist",
      "bn": "বক্ষব্যাধি বিশেষজ্ঞ"
    },
    "specialityIds": [
      "pulmonologist"
    ],
    "designation": {
      "en": "Senior Consultant, Pulmonologist",
      "bn": "সিনিয়র কনসালট্যান্ট, বক্ষব্যাধি বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Faridpur Medical College Hospital",
      "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Surgery)",
      "MS"
    ],
    "about": {
      "en": "Dr. Nusrat Mondal is a pulmonologist with 18 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নুসরাত মণ্ডল একজন বক্ষব্যাধি বিশেষজ্ঞ, বাংলাদেশে 18 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-43181",
    "yearsExperience": 18,
    "patientsServed": 37000,
    "photo": {
      "url": "/demo/photos/f-55.webp",
      "width": 480,
      "height": 480,
      "hash": "f534fae0bfa6498d",
      "bytes": 14652
    },
    "chambers": [
      {
        "id": "ch_doc_096_1",
        "hospital": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Faridpur",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ফরিদপুর"
        },
        "hospitalId": "faridpur-medical",
        "locationId": "faridpur",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01387181994",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_096_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Rajshahi Medical College",
          "bn": "রাজশাহী মেডিকেল কলেজ"
        },
        "yearFrom": 1998,
        "yearTo": 2003,
        "order": 0
      },
      {
        "id": "ed_doc_096_2",
        "degree": {
          "en": "FCPS (Surgery)",
          "bn": "FCPS (Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2004,
        "yearTo": 2008,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_096_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Faridpur Medical College Hospital",
          "bn": "ফরিদপুর মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Faridpur",
          "bn": "ফরিদপুর"
        },
        "yearFrom": 2009,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "18+ years of clinical practice",
      "Extensive ICU and emergency care experience",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Emergency management",
      "Clinical research",
      "Ultrasonography",
      "Chronic disease management"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {},
    "publicPhone": "01314412052",
    "publicEmail": "nusrat.mondal@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "House 42, Road 12, Dhanmondi, Faridpur",
      "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ফরিদপুর"
    },
    "hospitalIds": [
      "faridpur-medical"
    ],
    "locationIds": [
      "faridpur"
    ],
    "createdAt": 1789948800000,
    "updatedAt": 1790362800000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_097",
    "linkNo": "469269640",
    "slug": "nasrin-uddin-3",
    "email": "nasrin.uddin.3@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$aSlg+GQO068ecvXiup0ryg==$2WbsgkqcQVTh7PdJgWS0e6MRr+byVh+bhGRnSbuFXt4=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 196,
    "name": {
      "en": "Dr. Nasrin Uddin",
      "bn": "ডা. নাসরিন উদ্দিন"
    },
    "speciality": {
      "en": "Neurologist",
      "bn": "স্নায়ুরোগ বিশেষজ্ঞ"
    },
    "specialityIds": [
      "neurologist"
    ],
    "designation": {
      "en": "Senior Consultant, Neurologist",
      "bn": "সিনিয়র কনসালট্যান্ট, স্নায়ুরোগ বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Ibn Sina Specialized Hospital",
      "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Nasrin Uddin is a neurologist with 16 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. নাসরিন উদ্দিন একজন স্নায়ুরোগ বিশেষজ্ঞ, বাংলাদেশে 16 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-33023",
    "yearsExperience": 16,
    "patientsServed": 4000,
    "photo": {
      "url": "/demo/photos/f-56.webp",
      "width": 480,
      "height": 480,
      "hash": "9e1ef91a7d77e9bb",
      "bytes": 9898
    },
    "chambers": [
      {
        "id": "ch_doc_097_1",
        "hospital": {
          "en": "Ibn Sina Specialized Hospital",
          "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "Road 15, Sector 3, Uttara, Dhaka",
          "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
        },
        "hospitalId": "ibn-sina",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01623226627",
        "order": 0
      },
      {
        "id": "ch_doc_097_2",
        "hospital": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Dhaka",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
        },
        "hospitalId": "bsmmu",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01329977919",
        "order": 1
      }
    ],
    "education": [
      {
        "id": "ed_doc_097_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 2000,
        "yearTo": 2005,
        "order": 0
      },
      {
        "id": "ed_doc_097_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2006,
        "yearTo": 2010,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_097_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Ibn Sina Specialized Hospital",
          "bn": "ইবনে সিনা স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2011,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_097_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2015,
        "yearTo": 2018,
        "current": false,
        "order": 1
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Advanced Cardiac Life Support (ACLS) certified",
      "International fellowship training",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Clinical research",
      "Endoscopic procedures",
      "Chronic disease management",
      "Patient counselling"
    ],
    "achievements": [
      "Developed a follow-up protocol adopted department-wide"
    ],
    "social": {
      "facebook": "https://www.facebook.com/nasrin-uddin-3"
    },
    "publicPhone": "01595980224",
    "publicEmail": "nasrin.uddin.3@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Road 15, Sector 3, Uttara, Dhaka",
      "bn": "রোড ১৫, সেক্টর ৩, উত্তরা, ঢাকা"
    },
    "hospitalIds": [
      "ibn-sina",
      "bsmmu"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1790035200000,
    "updatedAt": 1790366400000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_098",
    "linkNo": "665328069",
    "slug": "rokeya-mazumder",
    "email": "rokeya.mazumder@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$YryTHblQXB7FrKOTzqkDwA==$m4J0RzEiv1M0X2z08KyeTHPMZf1TKr5rmVXP4WnFako=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 197,
    "name": {
      "en": "Dr. Rokeya Mazumder",
      "bn": "ডা. রোকেয়া মজুমদার"
    },
    "speciality": {
      "en": "Gynaecologist & Obstetrician",
      "bn": "স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "specialityIds": [
      "gynaecologist"
    ],
    "designation": {
      "en": "Senior Consultant, Gynaecologist & Obstetrician",
      "bn": "সিনিয়র কনসালট্যান্ট, স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Bangabandhu Sheikh Mujib Medical University",
      "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
    },
    "degrees": [
      "MBBS",
      "DTCD",
      "MD"
    ],
    "about": {
      "en": "Dr. Rokeya Mazumder is a gynaecologist & obstetrician with 17 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. রোকেয়া মজুমদার একজন স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ, বাংলাদেশে 17 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-67094",
    "yearsExperience": 17,
    "patientsServed": 15000,
    "photo": {
      "url": "/demo/photos/f-01.webp",
      "width": 480,
      "height": 480,
      "hash": "130cac0c52ca27b0",
      "bytes": 10518
    },
    "chambers": [
      {
        "id": "ch_doc_098_1",
        "hospital": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "address": {
          "en": "Zindabazar, Main Road, Dhaka",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
        },
        "hospitalId": "bsmmu",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 4:00 PM – 7:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 4টা – রাত 7টা"
        },
        "appointmentPhone": "01344613879",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_098_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Dhaka Medical College",
          "bn": "ঢাকা মেডিকেল কলেজ"
        },
        "yearFrom": 1999,
        "yearTo": 2004,
        "order": 0
      },
      {
        "id": "ed_doc_098_2",
        "degree": {
          "en": "DTCD",
          "bn": "DTCD"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 2005,
        "yearTo": 2009,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_098_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangabandhu Sheikh Mujib Medical University",
          "bn": "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 2010,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "17+ years of clinical practice",
      "Member, Bangladesh Medical Association",
      "International fellowship training"
    ],
    "skills": [
      "Patient counselling",
      "Paediatric care",
      "Diagnostic imaging",
      "Emergency management"
    ],
    "achievements": [
      "Trained junior consultants in advanced procedures"
    ],
    "social": {},
    "publicPhone": "01899751654",
    "publicEmail": "rokeya.mazumder@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "Zindabazar, Main Road, Dhaka",
      "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
    },
    "hospitalIds": [
      "bsmmu"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1790121600000,
    "updatedAt": 1790370000000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_099",
    "linkNo": "561633036",
    "slug": "tanvir-alam",
    "email": "tanvir.alam@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$cB0CVs/BxewPZzGmJYYgQQ==$m+SMvCKA3AupIyffMaafEd+eyAVRZ6MZSFlFOa3aR7U=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 198,
    "name": {
      "en": "Dr. Tanvir Alam",
      "bn": "ডা. তানভীর আলম"
    },
    "speciality": {
      "en": "Endocrinologist",
      "bn": "হরমোন ও ডায়াবেটিস বিশেষজ্ঞ"
    },
    "specialityIds": [
      "endocrinologist"
    ],
    "designation": {
      "en": "Senior Consultant, Endocrinologist",
      "bn": "সিনিয়র কনসালট্যান্ট, হরমোন ও ডায়াবেটিস বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Sylhet MAG Osmani Medical College Hospital",
      "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
    },
    "degrees": [
      "MBBS",
      "FCPS (Surgery)",
      "MS"
    ],
    "about": {
      "en": "Dr. Tanvir Alam is a endocrinologist with 32 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. তানভীর আলম একজন হরমোন ও ডায়াবেটিস বিশেষজ্ঞ, বাংলাদেশে 32 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-50183",
    "yearsExperience": 32,
    "patientsServed": 8000,
    "photo": {
      "url": "/demo/photos/m-42.webp",
      "width": 480,
      "height": 480,
      "hash": "14ce2e94868dde8f",
      "bytes": 7404
    },
    "chambers": [
      {
        "id": "ch_doc_099_1",
        "hospital": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "address": {
          "en": "21 Shyamoli, Mirpur Road, Sylhet",
          "bn": "২১ শ্যামলী, মিরপুর রোড, সিলেট"
        },
        "hospitalId": "sylhet-mag-osmani",
        "locationId": "sylhet",
        "visitingHours": {
          "en": "Sat–Thu, 7:00 PM – 10:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 7টা – রাত 10টা"
        },
        "appointmentPhone": "01652654235",
        "order": 0
      },
      {
        "id": "ch_doc_099_2",
        "hospital": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "address": {
          "en": "Zindabazar, Main Road, Dhaka",
          "bn": "জিন্দাবাজার, প্রধান সড়ক, ঢাকা"
        },
        "hospitalId": "bangladesh-specialized",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 6:00 PM – 9:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 6টা – রাত 9টা"
        },
        "appointmentPhone": "01964536220",
        "order": 1
      },
      {
        "id": "ch_doc_099_3",
        "hospital": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Chattogram",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, চট্টগ্রাম"
        },
        "hospitalId": "max-chattogram",
        "locationId": "chattogram",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01819360925",
        "order": 2
      }
    ],
    "education": [
      {
        "id": "ed_doc_099_1",
        "degree": {
          "en": "MBBS",
          "bn": "MBBS"
        },
        "institution": {
          "en": "Mymensingh Medical College",
          "bn": "ময়মনসিংহ মেডিকেল কলেজ"
        },
        "yearFrom": 1984,
        "yearTo": 1989,
        "order": 0
      },
      {
        "id": "ed_doc_099_2",
        "degree": {
          "en": "FCPS (Surgery)",
          "bn": "FCPS (Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1990,
        "yearTo": 1994,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_099_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Sylhet MAG Osmani Medical College Hospital",
          "bn": "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল"
        },
        "location": {
          "en": "Sylhet",
          "bn": "সিলেট"
        },
        "yearFrom": 1995,
        "current": true,
        "order": 0
      },
      {
        "id": "ex_doc_099_2",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Bangladesh Specialized Hospital",
          "bn": "বাংলাদেশ স্পেশালাইজড হাসপাতাল"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 1999,
        "yearTo": 2002,
        "current": false,
        "order": 1
      },
      {
        "id": "ex_doc_099_3",
        "role": {
          "en": "Consultant",
          "bn": "কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Max Hospital & Diagnostic",
          "bn": "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক"
        },
        "location": {
          "en": "Chattogram",
          "bn": "চট্টগ্রাম"
        },
        "yearFrom": 2003,
        "yearTo": 2006,
        "current": false,
        "order": 2
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Member, Bangladesh Medical Association",
      "Extensive ICU and emergency care experience",
      "Advanced Cardiac Life Support (ACLS) certified"
    ],
    "skills": [
      "Ultrasonography",
      "Emergency management",
      "Post-operative rehabilitation",
      "Clinical research"
    ],
    "achievements": [
      "Presented at a national medical conference"
    ],
    "social": {},
    "publicPhone": "01365931900",
    "publicEmail": "tanvir.alam@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "21 Shyamoli, Mirpur Road, Sylhet",
      "bn": "২১ শ্যামলী, মিরপুর রোড, সিলেট"
    },
    "hospitalIds": [
      "sylhet-mag-osmani",
      "bangladesh-specialized",
      "max-chattogram"
    ],
    "locationIds": [
      "sylhet",
      "dhaka",
      "chattogram"
    ],
    "createdAt": 1790208000000,
    "updatedAt": 1790373600000,
    "createdBy": "demo-fixture"
  },
  {
    "id": "doc_100",
    "linkNo": "150512070",
    "slug": "ayesha-karim",
    "email": "ayesha.karim@demo.doctorsprofile.test",
    "passwordHash": "pbkdf2$210000$z2CJGt+3FRqo93X8wD3pFg==$m3nNgkN4H1tsaDNECvMHpnZ4ud/WnMJlYn+6H7iGhFQ=",
    "passwordVersion": 1,
    "passwordSetAt": 1790380800000,
    "status": "active",
    "featured": false,
    "order": 199,
    "name": {
      "en": "Dr. Ayesha Karim",
      "bn": "ডা. আয়েশা করিম"
    },
    "speciality": {
      "en": "Oncologist",
      "bn": "ক্যান্সার বিশেষজ্ঞ"
    },
    "specialityIds": [
      "oncologist"
    ],
    "designation": {
      "en": "Senior Consultant, Oncologist",
      "bn": "সিনিয়র কনসালট্যান্ট, ক্যান্সার বিশেষজ্ঞ"
    },
    "workplace": {
      "en": "Popular Diagnostic Centre",
      "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
    },
    "degrees": [
      "BDS",
      "FCPS (Dental Surgery)"
    ],
    "about": {
      "en": "Dr. Ayesha Karim is a oncologist with 29 years of clinical experience in Bangladesh. Practice covers diagnosis, long-term management and preventive care, with a particular interest in making specialist treatment reachable outside the capital.",
      "bn": "ডা. আয়েশা করিম একজন ক্যান্সার বিশেষজ্ঞ, বাংলাদেশে 29 বছরের ক্লিনিক্যাল অভিজ্ঞতাসম্পন্ন। রোগনির্ণয়, দীর্ঘমেয়াদি ব্যবস্থাপনা ও প্রতিরোধমূলক চিকিৎসায় কাজ করেন; রাজধানীর বাইরেও বিশেষজ্ঞ সেবা পৌঁছে দেওয়ায় বিশেষ আগ্রহ।"
    },
    "bmdcNo": "A-12526",
    "yearsExperience": 29,
    "patientsServed": 13000,
    "photo": {
      "url": "/demo/photos/f-02.webp",
      "width": 480,
      "height": 480,
      "hash": "af7dc084a2d825cf",
      "bytes": 8502
    },
    "chambers": [
      {
        "id": "ch_doc_100_1",
        "hospital": {
          "en": "Popular Diagnostic Centre",
          "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
        },
        "address": {
          "en": "House 42, Road 12, Dhanmondi, Dhaka",
          "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
        },
        "hospitalId": "popular-diagnostic",
        "locationId": "dhaka",
        "visitingHours": {
          "en": "Sat–Thu, 5:00 PM – 8:00 PM",
          "bn": "শনি–বৃহস্পতি, সন্ধ্যা 5টা – রাত 8টা"
        },
        "appointmentPhone": "01334010674",
        "order": 0
      }
    ],
    "education": [
      {
        "id": "ed_doc_100_1",
        "degree": {
          "en": "BDS",
          "bn": "BDS"
        },
        "institution": {
          "en": "Sir Salimullah Medical College",
          "bn": "স্যার সলিমুল্লাহ মেডিকেল কলেজ"
        },
        "yearFrom": 1987,
        "yearTo": 1992,
        "order": 0
      },
      {
        "id": "ed_doc_100_2",
        "degree": {
          "en": "FCPS (Dental Surgery)",
          "bn": "FCPS (Dental Surgery)"
        },
        "institution": {
          "en": "Bangladesh College of Physicians and Surgeons",
          "bn": "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
        },
        "yearFrom": 1993,
        "yearTo": 1997,
        "order": 1
      }
    ],
    "experience": [
      {
        "id": "ex_doc_100_1",
        "role": {
          "en": "Senior Consultant",
          "bn": "সিনিয়র কনসালট্যান্ট"
        },
        "organisation": {
          "en": "Popular Diagnostic Centre",
          "bn": "পপুলার ডায়াগনস্টিক সেন্টার"
        },
        "location": {
          "en": "Dhaka",
          "bn": "ঢাকা"
        },
        "yearFrom": 1998,
        "current": true,
        "order": 0
      }
    ],
    "awards": [],
    "fellowships": [],
    "papers": [],
    "qualifications": [
      "Extensive ICU and emergency care experience",
      "International fellowship training",
      "Member, Bangladesh Medical Association"
    ],
    "skills": [
      "Diagnostic imaging",
      "Ultrasonography",
      "Preventive care",
      "Emergency management",
      "Chronic disease management",
      "Minimally invasive surgery"
    ],
    "achievements": [
      "Established a district-level screening programme"
    ],
    "social": {
      "facebook": "https://www.facebook.com/ayesha-karim"
    },
    "publicPhone": "01858895226",
    "publicEmail": "ayesha.karim@demo.doctorsprofile.test",
    "publicAddress": {
      "en": "House 42, Road 12, Dhanmondi, Dhaka",
      "bn": "বাড়ি ৪২, রোড ১২, ধানমন্ডি, ঢাকা"
    },
    "hospitalIds": [
      "popular-diagnostic"
    ],
    "locationIds": [
      "dhaka"
    ],
    "createdAt": 1790294400000,
    "updatedAt": 1790377200000,
    "createdBy": "demo-fixture"
  }
];
