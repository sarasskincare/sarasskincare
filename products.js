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
    link: "https://www.cerave.com/our-products/cleansers/foaming-facial-cleanser",
    image: "images/cerave-cleanser.jpg"
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
    image: "images/cerave-hydrating-cleanser.jpg"
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
      "in some cases doesnt take eye makeup off"
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
    image: "images/clinique-cleansing-balm.jpg"
  }
];

