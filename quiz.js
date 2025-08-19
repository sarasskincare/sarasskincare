// quiz.js - fully working version

// Profiles (12 total)
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

// Quiz questions (simplified example with 5 questions; replace with your full 25)
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
    question: "Do you struggle with dryness and tightness?",
    options: [
      { text: "Yes, constantly", scores: { hydration: 3, barrier: 1 } },
      { text: "Occasionally, in certain areas", scores: { hydration: 2, combo: 1 } },
      { text: "Not really, my skin feels fine", scores: { minimalist: 1 } },
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
    question: "Do you prefer products that are multi-purpose?",
    options: [
      { text: "Yes, I like efficiency", scores: { minimalist: 2, brighthydration: 1 } },
      { text: "Somewhat, depends on the product", scores: { glass: 1, combo: 1 } },
      { text: "No, I like separate products for everything", scores: { doublecleanse: 1, antiaging: 1 } },
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
  }
  // Add all remaining questions here
];

// Track answers
let userScores = {};

// Load quiz
function loadQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = ""; // clear existing content

  QUESTIONS.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("h2");
    questionText.textContent = q.question;
    questionDiv.appendChild(questionText);

    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option.text;
      btn.onclick = () => {
        // Add points for this option
        for (const profile in option.scores) {
          userScores[profile] = (userScores[profile] || 0) + option.scores[profile];
        }

        // Move to next question
        questionDiv.style.display = "none";
        const nextIndex = index + 1;
        if (nextIndex < QUESTIONS.length) {
          const nextQuestionDiv = document.getElementsByClassName("question")[nextIndex];
          if (nextQuestionDiv) nextQuestionDiv.style.display = "block";
        } else {
          showResults();
        }
      };
      questionDiv.appendChild(btn);
    });

    // Only show the first question initially
    if (index !== 0) questionDiv.style.display = "none";

    container.appendChild(questionDiv);
  });
}

// Show results
function showResults() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "<h2>🎉 Your Skincare Profile:</h2>";

  // Find top profile
  let topProfile = null;
  let topScore = -1;
  for (const profile in userScores) {
    if (userScores[profile] > topScore) {
      topScore = userScores[profile];
      topProfile = profile;
    }
  }

  if (!topProfile) {
    container.innerHTML += "<p>It seems you didn’t select any specific preferences. Try again for a more precise result!</p>";
    return;
  }

  const profileData = PROFILES[topProfile];
  container.innerHTML += `<h3>${profileData.name}</h3>`;
  container.innerHTML += `<p>${profileData.desc}</p>`;
  container.innerHTML += "<ul>";
  profileData.routine.forEach(step => {
    container.innerHTML += `<li>${step}</li>`;
  });
  container.innerHTML += "</ul>";
}

// Start quiz on page load
window.onload = loadQuiz;
