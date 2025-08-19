// quiz.js - updated with 12 profiles, 25 questions, and "I'm fine with anything" neutral options

const PROFILES = {
  glass: { name: "Glass Glow Seeker", desc: "Smooth, radiant skin with refined texture.", routine: ["Gentle cleanser + hydrating serum", "Light exfoliation 1–2x weekly", "Daily SPF"] },
  barrier: { name: "Barrier Protector", desc: "Calms irritation and strengthens the skin barrier.", routine: ["Gentle, non-foaming cleanser", "Ceramide-rich moisturizer", "Avoid over-exfoliation; barrier-supporting serums"] },
  hydration: { name: "Hydration Focused", desc: "Deep, lasting moisture for dry skin.", routine: ["Cream cleanser or cleansing oil", "Humectant serum", "Rich moisturizer at night"] },
  oil: { name: "Oil Balancer", desc: "Controls shine without over-drying.", routine: ["Light foaming cleanser", "Niacinamide or oil-regulating toner", "Lightweight moisturizer"] },
  acne: { name: "Acne Care", desc: "Reduces breakouts and prevents new ones.", routine: ["Gentle cleanser + salicylic/benzoyl peroxide", "Targeted spot treatment", "Oil-free moisturizer and SPF"] },
  sensitive: { name: "Sensitive Care", desc: "Gentle routines avoiding irritants.", routine: ["Fragrance-free gentle cleanser", "Soothing serums (niacinamide, panthenol)", "Barrier repair moisturizer + SPF"] },
  antiaging: { name: "Anti-Aging Care", desc: "Supports elasticity and reduces fine lines.", routine: ["Antioxidant serum", "Retinoid at night (tolerated)", "Daily SPF and moisturizer"] },
  brightening: { name: "Brightening Care", desc: "Targets dark spots and uneven tone.", routine: ["Vitamin C or azelaic acid", "Consistent SPF", "Spot-fading ingredients (Niacinamide, AHA)"] },
  minimalist: { name: "Minimalist Routine", desc: "Efficient, essential-only skincare.", routine: ["Gentle cleanser", "Moisturizer suited to skin type", "Daily SPF"] },
  doublecleanse: { name: "Double Cleanser", desc: "Thorough cleansing to remove makeup.", routine: ["Oil/balm cleanse + water-based cleanser", "Light moisturizer", "Targeted treatments as needed"] },
  combo: { name: "Combination Care", desc: "Balances dry and oily areas effectively.", routine: ["Gentle cleanser", "Targeted treatments for oily/dry areas", "Moisturizer suited for combination skin"] },
  brighthydration: { name: "Bright + Hydrated", desc: "Combines glow, hydration, and even tone.", routine: ["Hydrating cleanser", "Vitamin C serum", "Moisturizer + SPF daily"] }
};

// QUESTIONS ARRAY (25)
const QUESTIONS = [
{
question: "How would you describe your overall skin type?",
options: [
  { text: "My skin is very oily and shines easily", scores: { oil: 3, acne: 2 } },
  { text: "My skin feels dry or flaky", scores: { hydration: 3, barrier: 1 } },
  { text: "I have combination skin with both oily and dry areas", scores: { combo: 3, glass: 1 } },
  { text: "My skin is generally balanced/normal", scores: { minimalist: 2, glass: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "How often do you experience breakouts?",
options: [
  { text: "Regularly, several times a month", scores: { acne: 3, oil: 1 } },
  { text: "Occasionally, a few pimples", scores: { acne: 2, brighthydration: 1 } },
  { text: "Rarely, my skin is mostly clear", scores: { glass: 1, minimalist: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Do you have visible blackheads or clogged pores?",
options: [
  { text: "Yes, quite noticeable", scores: { doublecleanse: 2, oil: 1, acne: 1 } },
  { text: "Sometimes, minor congestion", scores: { doublecleanse: 1, brightening: 1 } },
  { text: "Not really, my skin is clear", scores: { minimalist: 1, glass: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Do you struggle with dryness and tightness?",
options: [
  { text: "Yes, constantly", scores: { hydration: 3, barrier: 1 } },
  { text: "Occasionally, in certain areas", scores: { hydration: 2, combo: 1 } },
  { text: "Not really, my skin feels fine", scores: { minimalist: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Does your skin often feel red or irritated?",
options: [
  { text: "Yes, it’s sensitive and easily irritated", scores: { sensitive: 3, barrier: 1 } },
  { text: "Sometimes, minor redness", scores: { barrier: 2 } },
  { text: "Rarely, my skin is calm", scores: { minimalist: 1, glass: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Do you have dark spots or uneven skin tone?",
options: [
  { text: "Yes, noticeable hyperpigmentation", scores: { brightening: 3, antiaging: 1 } },
  { text: "A few spots here and there", scores: { brighthydration: 2 } },
  { text: "No, my skin tone is even", scores: { glass: 1, minimalist: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "How important is hydration in your routine?",
options: [
  { text: "Very important, my skin feels dry often", scores: { hydration: 3, brighthydration: 1 } },
  { text: "Somewhat, I moisturize occasionally", scores: { glass: 1, combo: 1 } },
  { text: "Not a major concern", scores: { minimalist: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Do you usually double cleanse or remove makeup thoroughly?",
options: [
  { text: "Yes, every day", scores: { doublecleanse: 3 } },
  { text: "Sometimes, when I wear makeup", scores: { doublecleanse: 1, glass: 1 } },
  { text: "Rarely, I skip double cleansing", scores: { minimalist: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "How often do you exfoliate your skin?",
options: [
  { text: "Regularly (1–2x a week)", scores: { glass: 1, brightening: 1, acne: 1 } },
  { text: "Sometimes", scores: { brightening: 1, combo: 1 } },
  { text: "Never", scores: { barrier: 1, sensitive: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "How much sun exposure do you get daily?",
options: [
  { text: "A lot (outdoors frequently)", scores: { antiaging: 2, brightening: 1 } },
  { text: "Moderate exposure", scores: { antiaging: 1 } },
  { text: "Minimal sun exposure", scores: {} },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Do you consistently wear sunscreen?",
options: [
  { text: "Every day", scores: { antiaging: 1 } },
  { text: "Sometimes", scores: { antiaging: 1, brightening: 1 } },
  { text: "Rarely or never", scores: { antiaging: 2, brightening: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "How many steps do you prefer in your routine?",
options: [
  { text: "Minimal (2–3 steps)", scores: { minimalist: 3 } },
  { text: "Standard (4–5 steps)", scores: { glass: 1, barrier: 1 } },
  { text: "Multi-step (6+ steps)", scores: { glass: 2, doublecleanse: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "How sensitive is your skin to new products?",
options: [
  { text: "Very sensitive, reacts easily", scores: { sensitive: 3, barrier: 1 } },
  { text: "Somewhat sensitive", scores: { barrier: 2 } },
  { text: "Not sensitive", scores: { minimalist: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Do you prefer fragrance-free products?",
options: [
  { text: "Yes, always fragrance-free", scores: { sensitive: 2, barrier: 1 } },
  { text: "Sometimes, depending on the product", scores: { glass: 1, brightening: 1 } },
  { text: "I don’t mind fragrance", scores: { glass: 1, doublecleanse: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Do you have fine lines or wrinkles?",
options: [
  { text: "Yes, noticeable", scores: { antiaging: 3 } },
  { text: "A few minor lines", scores: { antiaging: 2, brighthydration: 1 } },
  { text: "No, my skin is smooth", scores: { glass: 1, minimalist: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Do you want glowing, radiant skin?",
options: [
  { text: "Yes, very important", scores: { glass: 3, brighthydration: 2 } },
  { text: "Somewhat important", scores: { glass: 1, brightening: 1 } },
  { text: "Not a priority", scores: { minimalist: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Do you prefer lightweight or rich moisturizers?",
options: [
  { text: "Lightweight, absorbs quickly", scores: { glass: 1, oil: 1 } },
  { text: "Rich, very hydrating", scores: { hydration: 2, brighthydration: 1 } },
  { text: "I use whatever works", scores: { combo: 1, minimalist: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Do you like serums or treatments in your routine?",
options: [
  { text: "Yes, I use serums often", scores: { brightening: 2, antiaging: 2, brighthydration: 1 } },
  { text: "Sometimes", scores: { glass: 1, combo: 1 } },
  { text: "Rarely", scores: { minimalist: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Do you wear makeup daily?",
options: [
  { text: "Yes, every day", scores: { doublecleanse: 3 } },
  { text: "Occasionally", scores: { doublecleanse: 1, glass: 1 } },
  { text: "Rarely or never", scores: { minimalist: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Do you prefer products that are multi-purpose?",
options: [
  { text: "Yes, I like efficiency", scores: { minimalist: 2, brighthydration: 1 } },
  { text: "Somewhat, depends on the product", scores: { glass: 1, combo: 1 } },
  { text: "No, I like separate products for everything", scores: { doublecleanse: 1, antiaging: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "How important is anti-aging for you?",
options: [
  { text: "Very important, I want to prevent fine lines", scores: { antiaging: 3 } },
  { text: "Somewhat, a little important", scores: { antiaging: 1, brighthydration: 1 } },
  { text: "Not important", scores: { glass: 1, minimalist: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Do you prefer cream, gel, or lightweight textures?",
options: [
  { text: "Creamy, rich textures", scores: { hydration: 2, brighthydration: 1 } },
  { text: "Gel or lightweight textures", scores: { glass: 1, oil: 1 } },
  { text: "Depends on the product", scores: { combo: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Do you want your routine to be simple or detailed?",
options: [
  { text: "Simple and minimal", scores: { minimalist: 3 } },
  { text: "Detailed with multiple steps", scores: { glass: 1, doublecleanse: 1, brighthydration: 1 } },
  { text: "I don’t mind either way", scores: {} },
  { text: "I’m fine with anything", scores: {} }
]
},
{
question: "Do you want brightening as a top priority?",
options: [
  { text: "Yes, very important", scores: { brightening: 3, brighthydration: 2 } },
  { text: "Somewhat important", scores: { brighthydration: 1 } },
  { text: "Not important", scores: { minimalist: 1 } },
  { text: "I’m fine with anything", scores: {} }
]
],
