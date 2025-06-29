const products = [
  {
    name: "CeraVe Foaming Facial Cleanser",
    brand: "CeraVe",
    skinTypes: ["oily", "combination", "normal"],
    whenToNotUse: [
      "Very dry or dehydrated skin",
      "Sensitive or reactive skin prone to irritation",
      "Eczema (Atopic Dermatitis)",
      "Rosacea",
      "Broken or compromised skin barrier",
      "Allergy or sensitivity to ingredients like cocamidopropyl betaine or phenoxyethanol"
    ],
    ingredients: [
      "AQUA / WATER / EAU",
      "COCAMIDOPROPYL HYDROXYSULTAINE",
      "GLYCERIN",
      "SODIUM LAUROYL SARCOSINATE",
      "PEG-150 PENTAERYTHRITYL TETRASTEARATE",
      "NIACINAMIDE",
      "PEG-6 CAPRYLIC/CAPRIC GLYCERIDES",
      "SODIUM METHYL COCOYL TAURATE",
      "PROPYLENE GLYCOL",
      "CERAMIDE NP",
      "CERAMIDE AP",
      "CERAMIDE EOP",
      "CARBOMER",
      "METHYLPARABEN",
      "SODIUM CHLORIDE",
      "SODIUM LAUROYL LACTYLATE",
      "CHOLESTEROL",
      "DISODIUM EDTA",
      "PROPYLPARABEN",
      "CITRIC ACID",
      "TETRASODIUM EDTA",
      "HYDROLYZED HYALURONIC ACID",
      "PHYTOSPHINGOSINE",
      "XANTHAN GUM"
    ],
    allergies: ["Cocamidopropyl Betaine", "Disodium EDTA"],
    fragranceType: ["fragrancefree"],
    whatCustomersSay: [
      "Customers find this facial cleanser excellent for oily skin, effectively removing dirt and leaving skin soft after makeup removal. The product retains moisture without causing dryness or breakouts, and customers appreciate its refreshing foaming texture. They like that it has no strong scent and consider it good value for money."
    ],
    benefits: ["foaming action", "Non-Comedogenic", "gentle on skin", "helps with oil control"],
    description:
      "A gentle foaming cleanser ideal for removing excess oil without stripping the skin. Fragrance-free and non-comedogenic.",
    pH: 5.5,
    link: "https://www.cerave.com/our-products/cleansers/foaming-facial-cleanser",
    image: "images/cerave-cleanser.jpg",
    skinGoals: ["oil control", "balanced skin"]
  },
  {
    name: "CeraVe Hydrating Facial Cleanser",
    brand: "CeraVe",
    skinTypes: ["dry", "normal", "sensitive"],
    whenToNotUse: [
      "Oily or acne-prone skin (may feel heavy or leave residue)",
      "Allergy or sensitivity to ingredients like ceramides or hyaluronic acid"
    ],
    ingredients: [
      "AQUA / WATER / EAU",
      "GLYCERIN",
      "CERAMIDE NP",
      "CERAMIDE AP",
      "CERAMIDE EOP",
      "HYALURONIC ACID",
      "CHOLINE STEARATE",
      "STEARIC ACID",
      "PEG-40 STEARATE",
      "BEHENYL ALCOHOL",
      "PHYTOSPHINGOSINE",
      "CARBOMER",
      "SODIUM LAUROYL LACTYLATE",
      "METHYLPARABEN",
      "PROPYLPARABEN",
      "DISODIUM EDTA",
      "SODIUM HYDROXIDE",
      "XANTHAN GUM"
    ],
    allergies: ["Methylparaben", "Propylparaben", "Disodium EDTA"],
    fragranceType: ["fragrancefree"],
    whatCustomersSay: [
      "Loved by users with dry and sensitive skin for its creamy texture and moisturizing feel. Leaves skin clean but never tight or dry.",
      "Great for removing dirt while maintaining skin's natural moisture barrier."
    ],
    benefits: [
      "hydrating",
      "non-foaming",
      "restores skin barrier",
      "fragrance-free",
      "gentle",
      "NEA Seal of Acceptance™",
      "MVE® Delivery Technology",
      "Non-Comedogenic"
    ],
    description:
      "A creamy, hydrating cleanser designed to cleanse without stripping moisture. Ideal for dry and sensitive skin types. Contains ceramides and hyaluronic acid to help restore and maintain the skin’s natural barrier.",
    pH: 5.5,
    link: "https://www.cerave.com/our-products/cleansers/hydrating-facial-cleanser",
    image: "images/cerave-hydrating-cleanser.jpg",
    skinGoals: ["hydration", "barrier repair"]
  },
  {
    name: "Clinique Take The Day Off Cleansing Balm",
    brand: "Clinique",
    skinTypes: ["dry", "sensitive", "normal", "combination"],
    whenToNotUse: [
      "Very oily or acne-prone skin (may feel heavy or leave residue)",
      "Allergy or sensitivity to any ingredients"
    ],
    ingredients: [
      "ISODECYL NEOPENTANOATE",
      "PEG-20 GLYCERYL TRIISOSTEARATE",
      "SYNTHETIC WAX",
      "ZEA MAYS (CORN) STARCH",
      "POLYETHYLENE",
      "TOCOPHEROL (VITAMIN E)",
      "CAPRYLIC/CAPRIC TRIGLYCERIDE",
      "SILICA",
      "ALOE BARBADENSIS LEAF JUICE",
      "FRAGRANCE (PARFUM)"
    ],
    allergies: ["Fragrance"],
    fragranceType: ["light fragrance"],
    whatCustomersSay: [
      "Melts away makeup and sunscreen effortlessly, leaving skin feeling soft and clean without dryness.",
      "Gentle on sensitive skin and doesn’t irritate or cause breakouts.",
      "Luxurious balm texture feels soothing during use.",
      "In some cases doesn’t take eye makeup off"
    ],
    benefits: [
      "melts makeup and impurities",
      "non-drying",
      "soothing",
      "gentle",
      "easy to rinse",
      "makes skin feel soft and smooth"
    ],
    description:
      "A luxurious cleansing balm that dissolves makeup, dirt, and sunscreen without stripping skin’s natural moisture. Suitable for most skin types except very oily or acne-prone skin. Contains soothing aloe and vitamin E.",
    pH: 6.5,
    link: "https://www.clinique.com/product/1624/5806/skin-care/cleansers/take-the-day-off-cleansing-balm",
    image: "images/clinique-cleansing-balm.jpg",
    skinGoals: ["makeup removal", "soft skin"]
  },
  {
    name: "KraveBeauty Matcha Hemp Hydrating Cleanser",
    brand: "KraveBeauty",
    skinTypes: ["sensitive", "combination", "normal", "oily"],
    whenToNotUse: [
      "Allergy to green tea or hemp ingredients",
      "Rosacea or extremely reactive skin (may tingle a little)"
    ],
    ingredients: [
      "Water",
      "Cocamidopropyl Hydroxysultaine",
      "Glycerin",
      "Sodium Cocoyl Isethionate",
      "Camellia Sinensis (Matcha) Leaf Powder",
      "Cannabis Sativa (Hemp) Seed Oil",
      "Sodium PCA",
      "Panthenol (Pro-Vitamin B5)"
    ],
    allergies: ["Green tea", "Hemp oil"],
    fragranceType: ["fragrancefree"],
    whatCustomersSay: [
      "Leaves skin soft, never tight, and reduces redness.",
      "Perfect gentle cleanser for everyday use."
    ],
    benefits: ["antioxidant-rich", "gentle exfoliation", "pH balanced"],
    description: "A creamy, low-foaming cleanser packed with antioxidants like matcha and hemp seed oil to nourish and calm the skin without irritation.",
    pH: 5.0,
    link: "https://kravebeauty.com/products/matcha-hemp-hydrating-cleanser",
    image: "images/kravebeauty-cleanser.jpg",
    skinGoals: ["glass skin", "brightening", "gentle exfoliation"]
  }
];
{
  name: "Cetaphil Daily Facial Cleanser",
  brand: "Cetaphil",
  skinTypes: ["sensitive", "normal", "combination", "oily"],
  whenToNotUse: [
    "Very dry skin (may feel too light for deep hydration needs)",
    "Heavy makeup or waterproof sunscreen (needs double cleanse)",
    "Fragrance sensitivity (some batches include masking fragrance)",
    "Broken or compromised barrier (can feel tight on freshly stripped skin)"
  ],
  ingredients: [
    "Water",
    "Glycerin",
    "Niacinamide (Vitamin B3)",
    "Panthenol (Vitamin B5)",
    "Sodium Lauryl Glucose Carboxylate",
    "PG-Propylene Glycol",
    "Cocamidopropyl Betaine",
    "Sodium Cocoyl Glutamate",
    "Sodium Hydroxide",
    "Citric Acid"
  ],
  allergies: ["Cocamidopropyl Betaine"],
  fragranceType: ["fragrance-free", "masking fragrance"],
  whatCustomersSay: [
    "Gentle yet effective; never leaves skin tight or stripped.",
    "Perfect daily cleanser that removes dirt and light makeup without drying.",
    "Affordable, lasts forever, and trusted by dermatologists and celebs alike."
  ],
  benefits: [
    "deep cleans without stripping",
    "hydrates and soothes barrier",
    "non-comedogenic",
    "contains niacinamide & panthenol",
    "fragrance‑free formula"
  ],
  skinGoals: [
    "everyday cleanse",
    "oil control",
    "sensitive skin care",
    "hydration",
    "makeup prep cleanser"
  ],
  description:
    "A gentle, dermatologist‑recommended gel cleanser that foams just enough to remove oil, dirt, and light makeup while supporting the skin barrier with niacinamide and panthenol. Ideal for daily use and under ₹1,000.",
  pH: 6.5,
  link: "https://www.cetaphil.com/us/cleansers/daily-facial-cleanser",
  image: "images/cetaphil-daily-cleanser.jpg"
}
{
  name: "COSRX Low pH Good Morning Gel Cleanser",
  brand: "COSRX",
  skinTypes: ["oily", "combination", "acne‑prone", "sensitive", "normal"],
  whenToNotUse: [
    "Very dry or dehydrated skin (may feel a bit stripping)",
    "Allergy or sensitivity to tea tree oil or BHA",
    "Skin that reacts to essential oil scents",
    "Immediately after chemical peels or aggressive exfoliation",
    "Heavy makeup days (doesn’t remove waterproof makeup alone)"
  ],
  ingredients: [
    "Water",
    "Glycerin",
    "Cocamidopropyl Hydroxysultaine",
    "Tea Tree Leaf Oil",
    "Betaine Salicylate (BHA)",
    "Allantoin",
    "Snowbell Tree Extract",
    "Lotus Extract"
  ],
  allergies: ["Tea Tree Oil", "BHA"],
  fragranceType: ["natural tea tree scent"],
  whatCustomersSay: [
    "“It’s great for gentle use in the morning. The foam is rich and there's no feeling of dryness or tightness.”",
    "“Mildly acidic, improves texture, but not everyone loves the scent.”",
    "“Helps control oil and breakouts without irritation.”",
    "“Can feel slightly drying on super‑dry skin after heavy use.”"
  ],
  benefits: [
    "low pH (about 5–5.5) to support skin barrier",
    "gentle BHA exfoliation",
    "controls oil and prevents breakouts",
    "soothes with tea tree and allantoin",
    "cruelty‑free and affordable"
  ],
  skinGoals: [
    "detoxifying oily skin",
    "clarifying pores",
    "morning refresh",
    "gentle exfoliation for dull skin",
    "managing acne without irritation"
  ],
  description:
    "A cult‑favorite, low‑pH gel cleanser with BHA and tea tree oil to gently exfoliate, control oil, and support a healthy skin barrier—especially great for combination, oily, or acne‑prone skin.",
  pH: 5.0–5.5,
  link: "https://www.cosrx.com/collections/cleansers/products/low-ph-good-morning-gel-cleanser",
  image: "images/cosrx-low-ph-cleanser.jpg"
}
{
  name: "Eucerin Advanced Cleansing Body & Face Cleanser",
  brand: "Eucerin",
  skinTypes: ["dry", "sensitive", "eczema-prone", "normal"],
  whenToNotUse: [
    "Extremely oily or acne-prone skin (may not cleanse deeply enough)",
    "Skin sensitive to surfactants like sodium laureth sulfate (even though it's mild here)",
    "Heavy makeup wearers (needs a 2nd cleanse)"
  ],
  ingredients: [
    "Water",
    "Sodium Laureth Sulfate",
    "Cocamidopropyl Betaine",
    "PEG-7 Glyceryl Cocoate",
    "Sodium Chloride",
    "Citric Acid",
    "PEG-200 Hydrogenated Glyceryl Palmate",
    "Glycol Distearate",
    "PEG-40 Hydrogenated Castor Oil",
    "Sodium Benzoate",
    "Phenoxyethanol"
  ],
  allergies: ["Cocamidopropyl Betaine", "Phenoxyethanol"],
  fragranceType: ["fragrancefree"],
  whatCustomersSay: [
    "Very gentle on sensitive skin and doesn’t sting even with eczema.",
    "Non-irritating, no strong scent, and safe for both face and body.",
    "Skin feels clean but never tight or stripped."
  ],
  benefits: [
    "non-drying",
    "soap-free",
    "fragrance-free",
    "dual-use (face + body)",
    "safe for eczema-prone skin",
    "dermatologist-recommended"
  ],
  skinGoals: [
    "soothing sensitive skin",
    "supporting eczema-prone barrier",
    "fragrance-free cleansing",
    "non-stripping hydration"
  ],
  description:
    "A gentle, soap-free cleanser designed for both body and face. Ideal for dry, sensitive, or eczema-prone skin. Fragrance-free and dermatologist-tested to help maintain skin’s natural moisture balance.",
  pH: 5.0–5.5,
  link: "https://www.eucerinus.com/products/advanced-cleansing-body-and-face-cleanser",
  image: "images/eucerin-cleanser.jpg"
}
{
  name: "PanOxyl Acne Foaming Wash 10% Benzoyl Peroxide",
  brand: "PanOxyl",
  skinTypes: ["oily", "acne-prone", "combination", "normal"],
  whenToNotUse: [
    "Very dry or sensitive skin (can cause irritation or flaking)",
    "Eczema, rosacea, or other inflammatory skin conditions",
    "Allergy to benzoyl peroxide",
    "Broken skin or active wounds"
  ],
  ingredients: [
    "Benzoyl Peroxide 10%",
    "Water",
    "Sodium C14-16 Olefin Sulfonate",
    "Cocamidopropyl Betaine",
    "PEG-12 Dimethicone",
    "Glycerin",
    "Carbomer",
    "Sodium Hydroxide",
    "Sodium Citrate",
    "Disodium EDTA"
  ],
  allergies: ["Benzoyl Peroxide", "Cocamidopropyl Betaine", "Disodium EDTA"],
  fragranceType: ["fragrancefree"],
  whatCustomersSay: [
    "Clears breakouts fast and helps with cystic acne.",
    "Can be drying if overused, so start slow.",
    "Great for teens with hormonal breakouts along the jawline and cheeks."
  ],
  benefits: [
    "fights acne-causing bacteria",
    "clears clogged pores",
    "reduces redness",
    "fragrance-free",
    "dermatologist-recommended"
  ],
  skinGoals: [
    "clearing hormonal acne",
    "reducing breakouts",
    "preventing future pimples",
    "controlling oil"
  ],
  description:
    "A maximum strength foaming wash with 10% benzoyl peroxide. Ideal for teens with hormonal or persistent acne. Fights acne-causing bacteria and clears pores. Fragrance-free but strong—use with care and moisturize afterward.",
  pH: 5.5–6.0,
  link: "https://www.panoxyl.com/products/acne-foaming-wash/",
  image: "images/panoxyl-acne-wash.jpg"
}

  {
    name: "Neutrogena Hydro Boost Hydrating Cleansing Gel",
    brand: "Neutrogena",
    skinTypes: ["dry", "normal", "combination"],
    skinGoals: ["hydration", "plumping", "anti-aging"],
    whenToNotUse: [
      "Very oily or acne-prone skin (may not be enough for deep cleansing)",
      "Sensitivity to added fragrance"
    ],
    ingredients: [
      "WATER",
      "GLYCERIN",
      "COCO-BETAINE",
      "SODIUM CHLORIDE",
      "PEG-8",
      "SODIUM HYALURONATE",
      "FRAGRANCE",
      "POLYQUATERNIUM-10",
      "DISODIUM EDTA",
      "CITRIC ACID",
      "SODIUM BENZOATE"
    ],
    allergies: ["Fragrance", "Disodium EDTA"],
    fragranceType: ["light fragrance"],
    whatCustomersSay: [
      "Leaves skin soft and refreshed without feeling tight.",
      "Great for boosting hydration and layering under serums.",
      "Light, gel texture feels clean and non-sticky."
    ],
    benefits: ["hydrating", "refreshing texture", "gentle", "plumping effect"],
    description:
      "This gel-based facial cleanser gently cleanses while boosting hydration with hyaluronic acid. Perfect for aging or dehydrated skin needing a moisture kick.",
    pH: 5.2,
    link: "https://www.neutrogena.com/products/skincare/neutrogena-hydro-boost-hydrating-cleansing-gel-for-dry-skin/6811045.html",
    image: "images/neutrogena-hydroboost.jpg"
  }
];

