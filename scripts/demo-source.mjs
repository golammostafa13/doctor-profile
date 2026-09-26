/**
 * The vocabulary the demo roster is assembled from.
 *
 * Real Bangladeshi specialities, hospitals and districts, so the filters have
 * something plausible to filter and the Bengali column is genuinely Bengali
 * rather than transliterated English. The people are invented.
 */

export const SPECIALITIES = [
  ["cardiologist", "Cardiologist", "হৃদরোগ বিশেষজ্ঞ"],
  ["neurologist", "Neurologist", "স্নায়ুরোগ বিশেষজ্ঞ"],
  ["gastroenterologist", "Gastroenterologist", "গ্যাস্ট্রোএন্টেরোলজিস্ট"],
  ["dermatologist", "Dermatologist", "চর্মরোগ বিশেষজ্ঞ"],
  ["orthopaedic-surgeon", "Orthopaedic Surgeon", "অর্থোপেডিক সার্জন"],
  ["paediatrician", "Paediatrician", "শিশুরোগ বিশেষজ্ঞ"],
  ["gynaecologist", "Gynaecologist & Obstetrician", "স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ"],
  ["nephrologist", "Nephrologist", "কিডনি রোগ বিশেষজ্ঞ"],
  ["endocrinologist", "Endocrinologist", "হরমোন ও ডায়াবেটিস বিশেষজ্ঞ"],
  ["pulmonologist", "Pulmonologist", "বক্ষব্যাধি বিশেষজ্ঞ"],
  ["oncologist", "Oncologist", "ক্যান্সার বিশেষজ্ঞ"],
  ["psychiatrist", "Psychiatrist", "মানসিক রোগ বিশেষজ্ঞ"],
  ["ent-specialist", "ENT Specialist", "নাক-কান-গলা বিশেষজ্ঞ"],
  ["ophthalmologist", "Ophthalmologist", "চক্ষু বিশেষজ্ঞ"],
  ["urologist", "Urologist", "মূত্ররোগ বিশেষজ্ঞ"],
  ["rheumatologist", "Rheumatologist", "বাতরোগ বিশেষজ্ঞ"],
  ["general-surgeon", "General Surgeon", "জেনারেল সার্জন"],
  ["hepatologist", "Hepatologist", "লিভার রোগ বিশেষজ্ঞ"],
  ["haematologist", "Haematologist", "রক্তরোগ বিশেষজ্ঞ"],
  ["dentist", "Dental Surgeon", "ডেন্টাল সার্জন"],
];

export const HOSPITALS = [
  ["square-hospitals", "Square Hospitals Ltd.", "স্কয়ার হাসপাতাল লিমিটেড", "dhaka"],
  ["united-hospital", "United Hospital Limited", "ইউনাইটেড হাসপাতাল লিমিটেড", "dhaka"],
  ["evercare-dhaka", "Evercare Hospital Dhaka", "এভারকেয়ার হাসপাতাল ঢাকা", "dhaka"],
  ["labaid-specialized", "Labaid Specialized Hospital", "ল্যাবএইড স্পেশালাইজড হাসপাতাল", "dhaka"],
  ["ibn-sina", "Ibn Sina Specialized Hospital", "ইবনে সিনা স্পেশালাইজড হাসপাতাল", "dhaka"],
  ["bsmmu", "Bangabandhu Sheikh Mujib Medical University", "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়", "dhaka"],
  ["dhaka-medical", "Dhaka Medical College Hospital", "ঢাকা মেডিকেল কলেজ হাসপাতাল", "dhaka"],
  ["popular-diagnostic", "Popular Diagnostic Centre", "পপুলার ডায়াগনস্টিক সেন্টার", "dhaka"],
  ["bangladesh-specialized", "Bangladesh Specialized Hospital", "বাংলাদেশ স্পেশালাইজড হাসপাতাল", "dhaka"],
  ["national-heart", "National Heart Foundation Hospital", "জাতীয় হৃদরোগ ফাউন্ডেশন হাসপাতাল", "dhaka"],
  ["chittagong-medical", "Chattogram Medical College Hospital", "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল", "chattogram"],
  ["imperial-chattogram", "Imperial Hospital Limited", "ইম্পেরিয়াল হাসপাতাল লিমিটেড", "chattogram"],
  ["max-chattogram", "Max Hospital & Diagnostic", "ম্যাক্স হাসপাতাল ও ডায়াগনস্টিক", "chattogram"],
  ["rajshahi-medical", "Rajshahi Medical College Hospital", "রাজশাহী মেডিকেল কলেজ হাসপাতাল", "rajshahi"],
  ["islami-bank-rajshahi", "Islami Bank Medical College Hospital", "ইসলামী ব্যাংক মেডিকেল কলেজ হাসপাতাল", "rajshahi"],
  ["khulna-medical", "Khulna Medical College Hospital", "খুলনা মেডিকেল কলেজ হাসপাতাল", "khulna"],
  ["gazi-medical", "Gazi Medical College Hospital", "গাজী মেডিকেল কলেজ হাসপাতাল", "khulna"],
  ["sylhet-mag-osmani", "Sylhet MAG Osmani Medical College Hospital", "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল", "sylhet"],
  ["mount-adora", "Mount Adora Hospital", "মাউন্ট এডোরা হাসপাতাল", "sylhet"],
  ["rangpur-medical", "Rangpur Medical College Hospital", "রংপুর মেডিকেল কলেজ হাসপাতাল", "rangpur"],
  ["barishal-sher-e-bangla", "Sher-e-Bangla Medical College Hospital", "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল", "barishal"],
  ["mymensingh-medical", "Mymensingh Medical College Hospital", "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল", "mymensingh"],
  ["comilla-medical", "Cumilla Medical College Hospital", "কুমিল্লা মেডিকেল কলেজ হাসপাতাল", "cumilla"],
  ["bogura-shaheed-ziaur", "Shaheed Ziaur Rahman Medical College Hospital", "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল", "bogura"],
  ["faridpur-medical", "Faridpur Medical College Hospital", "ফরিদপুর মেডিকেল কলেজ হাসপাতাল", "faridpur"],
];

export const DISTRICTS = [
  ["dhaka", "Dhaka", "ঢাকা"],
  ["chattogram", "Chattogram", "চট্টগ্রাম"],
  ["rajshahi", "Rajshahi", "রাজশাহী"],
  ["khulna", "Khulna", "খুলনা"],
  ["sylhet", "Sylhet", "সিলেট"],
  ["rangpur", "Rangpur", "রংপুর"],
  ["barishal", "Barishal", "বরিশাল"],
  ["mymensingh", "Mymensingh", "ময়মনসিংহ"],
  ["cumilla", "Cumilla", "কুমিল্লা"],
  ["bogura", "Bogura", "বগুড়া"],
  ["faridpur", "Faridpur", "ফরিদপুর"],
  ["jashore", "Jashore", "যশোর"],
  ["narayanganj", "Narayanganj", "নারায়ণগঞ্জ"],
  ["gazipur", "Gazipur", "গাজীপুর"],
  ["dinajpur", "Dinajpur", "দিনাজপুর"],
];

export const GIVEN = [
  ["Abdul", "আব্দুল"], ["Mohammad", "মোহাম্মদ"], ["Rafiqul", "রফিকুল"],
  ["Shahidul", "শহীদুল"], ["Kamrul", "কামরুল"], ["Nazmul", "নাজমুল"],
  ["Tanvir", "তানভীর"], ["Mahmudul", "মাহমুদুল"], ["Ashraful", "আশরাফুল"],
  ["Jahangir", "জাহাঙ্গীর"], ["Saiful", "সাইফুল"], ["Mizanur", "মিজানুর"],
  ["Farhana", "ফারহানা"], ["Nasrin", "নাসরিন"], ["Rubina", "রুবিনা"],
  ["Sabina", "সাবিনা"], ["Tahmina", "তাহমিনা"], ["Shirin", "শিরিন"],
  ["Ayesha", "আয়েশা"], ["Rokeya", "রোকেয়া"], ["Nusrat", "নুসরাত"],
  ["Sharmin", "শারমিন"], ["Mahfuza", "মাহফুজা"], ["Dilruba", "দিলরুবা"],
];

export const FAMILY = [
  ["Islam", "ইসলাম"], ["Rahman", "রহমান"], ["Hossain", "হোসেন"],
  ["Ahmed", "আহমেদ"], ["Chowdhury", "চৌধুরী"], ["Karim", "করিম"],
  ["Haque", "হক"], ["Alam", "আলম"], ["Sarker", "সরকার"],
  ["Bhuiyan", "ভূঁইয়া"], ["Mondal", "মণ্ডল"], ["Siddique", "সিদ্দিক"],
  ["Uddin", "উদ্দিন"], ["Akter", "আক্তার"], ["Sultana", "সুলতানা"],
  ["Begum", "বেগম"], ["Talukder", "তালুকদার"], ["Mazumder", "মজুমদার"],
];

export const MEDICAL_COLLEGES = [
  ["Dhaka Medical College", "ঢাকা মেডিকেল কলেজ"],
  ["Chattogram Medical College", "চট্টগ্রাম মেডিকেল কলেজ"],
  ["Rajshahi Medical College", "রাজশাহী মেডিকেল কলেজ"],
  ["Sir Salimullah Medical College", "স্যার সলিমুল্লাহ মেডিকেল কলেজ"],
  ["Mymensingh Medical College", "ময়মনসিংহ মেডিকেল কলেজ"],
  ["Sylhet MAG Osmani Medical College", "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ"],
];

export const STREETS = [
  ["Road 15, Sector 3, Uttara", "রোড ১৫, সেক্টর ৩, উত্তরা"],
  ["House 42, Road 12, Dhanmondi", "বাড়ি ৪২, রোড ১২, ধানমন্ডি"],
  ["Plot 81, Block E, Bashundhara", "প্লট ৮১, ব্লক ই, বসুন্ধরা"],
  ["21 Shyamoli, Mirpur Road", "২১ শ্যামলী, মিরপুর রোড"],
  ["GEC Circle, Nasirabad", "জিইসি মোড়, নাসিরাবাদ"],
  ["Zindabazar, Main Road", "জিন্দাবাজার, প্রধান সড়ক"],
  ["Station Road, Kotwali", "স্টেশন রোড, কোতোয়ালি"],
];
