// Profiles (12)
const PROFILES = {
  glass: { name: "Glass Glow Seeker", desc: "Smooth, radiant skin with refined texture.", routine: ["Gentle cleanser + hydrating serum", "Light exfoliation 1–2x weekly", "Daily SPF"] },
  barrier: { name: "Barrier Protector", desc: "Calms irritation and strengthens the skin barrier.", routine: ["Gentle, non-foaming cleanser", "Ceramide-rich moisturizer", "Avoid over-exfoliation; barrier-supporting serums"] },
  hydration: { name: "Hydration Focused", desc: "Deep, lasting moisture for dry skin.", routine: ["Cream cleanser or cleansing oil", "Humectant serum", "Rich moisturizer at night"] },
  oil: { name: "Oil Balancer", desc: "Controls shine without over-drying.", routine: ["Light foaming cleanser", "Niacinamide or oil-regulating toner", "Lightweight moisturizer"] },
  acne: { name: "Acne Care", desc: "Reduces breakouts and prevents new ones.", routine: ["Gentle cleanser + salicylic/benzoyl peroxide", "Targeted spot treatment", "Oil-free moisturizer and SPF"] },
  sensitive: { name: "Sensitive Care", desc: "Gentle routines avoiding irritants.", routine: ["Fragrance-free gentle cleanser", "Soothing serums", "Barrier repair moisturizer + SPF"] },
  antiaging: { name: "Anti-Aging Care", desc: "Supports elasticity and reduces fine lines.", routine: ["Antioxidant serum", "Retinoid at night (if tolerated)", "Daily SPF and moisturizer"] },
  brightening: { name: "Brightening Care", desc: "Targets dark spots and uneven tone.", routine: ["Vitamin C or azelaic acid", "Consistent SPF", "Spot-fading ingredients"] },
  minimalist: { name: "Minimalist Routine", desc: "Efficient, essential-only skincare.", routine: ["Gentle cleanser", "Moisturizer suited to skin type", "Daily SPF"] },
  doublecleanse: { name: "Double Cleanser", desc: "Thorough cleansing to remove makeup.", routine: ["Oil/balm cleanse + water-based cleanser", "Light moisturizer", "Targeted treatments as needed"] },
  combo: { name: "Combination Care", desc: "Balances dry and oily areas effectively.", routine: ["Gentle cleanser", "Targeted treatments for oily/dry areas", "Moisturizer suited for combination skin"] },
  brighthydration: { name: "Bright + Hydrated", desc: "Combines glow, hydration, and even tone.", routine: ["Hydrating cleanser", "Vitamin C serum", "Moisturizer + SPF daily"] }
};

// Full 25 questions (slightly descriptive + “I’m fine with anything”)
const QUESTIONS = [
  { question: "How would you describe your overall skin type?", options: [
      { text: "Very oily", scores: { oil: 3, acne: 2 } },
      { text: "Dry or flaky", scores: { hydration: 3, barrier: 1 } },
      { text: "Combination", scores: { combo: 3, glass: 1 } },
      { text: "Balanced/normal", scores: { minimalist: 2, glass: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you struggle with dryness and tightness?", options: [
      { text: "Yes, constantly", scores: { hydration: 3, barrier: 1 } },
      { text: "Occasionally", scores: { hydration: 2, combo: 1 } },
      { text: "Not really", scores: { minimalist: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you have dark spots or uneven skin tone?", options: [
      { text: "Yes, noticeable", scores: { brightening: 3, antiaging: 1 } },
      { text: "A few spots", scores: { brighthydration: 2 } },
      { text: "No, even tone", scores: { glass: 1, minimalist: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you want glowing, radiant skin?", options: [
      { text: "Yes, very important", scores: { glass: 3, brighthydration: 2 } },
      { text: "Somewhat", scores: { glass: 1, brightening: 1 } },
      { text: "Not a priority", scores: { minimalist: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you prefer fragrance-free products?", options: [
      { text: "Always fragrance-free", scores: { sensitive: 2, barrier: 1 } },
      { text: "Sometimes depends", scores: { glass: 1, brightening: 1 } },
      { text: "Don’t mind fragrance", scores: { glass: 1, doublecleanse: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you have fine lines or wrinkles?", options: [
      { text: "Yes, noticeable", scores: { antiaging: 3 } },
      { text: "A few minor lines", scores: { antiaging: 2, brighthydration: 1 } },
      { text: "No, smooth skin", scores: { glass: 1, minimalist: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you prefer lightweight or rich moisturizers?", options: [
      { text: "Lightweight", scores: { glass: 1, oil: 1 } },
      { text: "Rich and hydrating", scores: { hydration: 2, brighthydration: 1 } },
      { text: "Depends on product", scores: { combo: 1, minimalist: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you like serums or treatments in your routine?", options: [
      { text: "Yes, often", scores: { brightening: 2, antiaging: 2, brighthydration: 1 } },
      { text: "Sometimes", scores: { glass: 1, combo: 1 } },
      { text: "Rarely", scores: { minimalist: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you wear makeup daily?", options: [
      { text: "Yes, every day", scores: { doublecleanse: 3 } },
      { text: "Occasionally", scores: { doublecleanse: 1, glass: 1 } },
      { text: "Rarely/never", scores: { minimalist: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you prefer products that are multi-purpose?", options: [
      { text: "Yes, efficient", scores: { minimalist: 2, brighthydration: 1 } },
      { text: "Somewhat depends", scores: { glass: 1, combo: 1 } },
      { text: "No, separate products", scores: { doublecleanse: 1, antiaging: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "How important is anti-aging for you?", options: [
      { text: "Very important", scores: { antiaging: 3 } },
      { text: "Somewhat", scores: { antiaging: 1, brighthydration: 1 } },
      { text: "Not important", scores: { glass: 1, minimalist: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you prefer cream, gel, or lightweight textures?", options: [
      { text: "Creamy/rich", scores: { hydration: 2, brighthydration: 1 } },
      { text: "Gel/lightweight", scores: { glass: 1, oil: 1 } },
      { text: "Depends on product", scores: { combo: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you want your routine simple or detailed?", options: [
      { text: "Simple/minimal", scores: { minimalist: 3 } },
      { text: "Detailed/multi-step", scores: { glass: 1, doublecleanse: 1, brighthydration: 1 } },
      { text: "Don’t mind", scores: {} },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you want brightening as a top priority?", options: [
      { text: "Yes, very important", scores: { brightening: 3, brighthydration: 2 } },
      { text: "Somewhat", scores: { brighthydration: 1 } },
      { text: "Not important", scores: { minimalist: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you like exfoliation in your routine?", options: [
      { text: "Yes, regularly", scores: { glass: 2, brightening: 1 } },
      { text: "Occasionally", scores: { brighthydration: 1, antiaging: 1 } },
      { text: "Rarely", scores: { minimalist: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you have sensitivity to harsh ingredients?", options: [
      { text: "Yes, very sensitive", scores: { sensitive: 3, barrier: 2 } },
      { text: "Mild sensitivity", scores: { sensitive: 1, glass: 1 } },
      { text: "No sensitivity", scores: { glass: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you like scented products?", options: [
      { text: "Yes, I enjoy fragrance", scores: { glass: 1, doublecleanse: 1 } },
      { text: "Sometimes", scores: { glass: 1, brighthydration: 1 } },
      { text: "No, prefer fragrance-free", scores: { sensitive: 2 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you like masks in your routine?", options: [
      { text: "Yes, regularly", scores: { hydration: 2, brightening: 1 } },
      { text: "Occasionally", scores: { glass: 1 } },
      { text: "Rarely", scores: { minimalist: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you prefer morning or night routines?", options: [
      { text: "Morning focus", scores: { glass: 1, brightening: 1 } },
      { text: "Night focus", scores: { hydration: 1, antiaging: 2 } },
      { text: "Both", scores: { brighthydration: 1 } },
      { text: "I’m fine with anything", scores: {} }
  ]},
  { question: "Do you use sunscreen daily?", optio
