// quiz.js
// 20 questions, scoring per option, picks the highest scoring profile.
// Profiles: glass, barrier, hydration, oil, acne, sensitive, antiaging, brightening, minimalist, doublecleanse

const PROFILES = {
  glass: {
    name: "Glass Glow Seeker",
    desc: "Focused on smooth, radiant skin and refined texture.",
    routine: [
      "Gentle cleanser + hydrating serum (Hyaluronic acid)",
      "Light exfoliation (AHA/BHA) 1–2x weekly",
      "Daily SPF"
    ]
  },
  barrier: {
    name: "Barrier Protector",
    desc: "Prioritizes calming irritation and strengthening the skin barrier.",
    routine: [
      "Gentle, non-foaming cleanser",
      "Ceramide-rich moisturizer",
      "Avoid over-exfoliation; use barrier-supporting serums"
    ]
  },
  hydration: {
    name: "Hydration Focused",
    desc: "Needs deep, lasting moisture for dry or flaky skin.",
    routine: [
      "Cream cleanser or cleansing oil",
      "Humectant serum (Hyaluronic acid + glycerin)",
      "Rich moisturizer with occlusives at night"
    ]
  },
  oil: {
    name: "Oil Balancer",
    desc: "Works to regulate sebum and control shine without over-drying.",
    routine: [
      "Light foaming cleanser",
      "Oil-regulating toner or niacinamide serum",
      "Lightweight, non-comedogenic moisturizer"
    ]
  },
  acne: {
    name: "Acne Care",
    desc: "Aims to reduce breakouts and prevent new ones.",
    routine: [
      "Gentle cleanser; consider benzoyl peroxide or salicylic acid",
      "Targeted spot treatment",
      "Oil-free moisturizer and daily SPF"
    ]
  },
  sensitive: {
    name: "Sensitive Care",
    desc: "Gentle, soothing routines that avoid irritants.",
    routine: [
      "Very gentle cleanser (fragrance-free)",
      "Soothing serums (niacinamide, panthenol)",
      "Barrier repair moisturizers and daily SPF"
    ]
  },
  antiaging: {
    name: "Anti-Aging Care",
    desc: "Supports elasticity and reduces appearance of fine lines.",
    routine: [
      "Antioxidant serum (vitamin C)",
      "Retinoid at night (as tolerated)",
      "Daily SPF and moisturizing support"
    ]
  },
  brightening: {
    name: "Brightening Care",
    desc: "Targets dark spots and uneven skin tone.",
    routine: [
      "Vitamin C or azelaic acid in morning",
      "Consistent SPF use",
      "Targeted spot-fading ingredients (Niacinamide, AHA)"
    ]
  },
  minimalist: {
    name: "Minimalist Routine",
    desc: "Efficient, essential-only skincare with easy steps.",
    routine: [
      "Gentle cleanser",
      "Moisturizer suited to skin type",
      "Daily SPF"
    ]
  },
  doublecleanse: {
    name: "Double Cleanser",
    desc: "Prefers thorough cleansing and removes makeup thoroughly.",
    routine: [
      "Oil/balm cleanse followed by water-based cleanser",
      "Light moisturizer",
      "Targeted treatments as needed"
    ]
  }
};

// QUESTIONS ARRAY (20). Each option has a scores object (profileKey: weight)
const QUESTIONS = [
  {
    question: "How would you describe your skin type?",
    options: [
      { text: "Oily", scores: { oil: 3, acne: 2, glass: 1 } },
      { text: "Dry", scores: { hydration: 3, barrier: 1, antiaging: 1 } },
      { text: "Combination", scores: { glass: 1, oil: 1, hydration: 1 } },
      { text: "Normal", scores: { glass: 2, minimalist: 1 } },
      { text: "Sensitive", scores: { sensitive: 3, barrier: 1 } }
    ]
  },
  {
    question: "How does your skin usually feel by the end of the day?",
    options: [
      { text: "Very greasy", scores: { oil: 2, acne: 1 } },
      { text: "Tight / dry", scores: { hydration: 2, barrier: 1 } },
      { text: "Balanced", scores: { minimalist: 2, glass: 1 } },
      { text: "Irritated", scores: { sensitive: 3, barrier: 1 } }
    ]
  },
  {
    question: "Do you experience breakouts often?",
    options: [
      { text: "Yes, regularly", scores: { acne: 3, oil: 1 } },
      { text: "Occasionally", scores: { acne: 2, brightening: 1 } },
      { text: "Rarely", scores: { glass: 1, minimalist: 1 } },
      { text: "Almost never", scores: { minimalist: 2, glass: 1 } }
    ]
  },
  {
    question: "Do you struggle with blackheads or clogged pores?",
    options: [
      { text: "Yes, a lot", scores: { doublecleanse: 2, oil: 1, acne: 1 } },
      { text: "Sometimes", scores: { doublecleanse: 1, brightening: 1 } },
      { text: "Not really", scores: { minimalist: 1, glass: 1 } }
    ]
  },
  {
    question: "What’s your main skincare goal right now?",
    options: [
      { text: "Clear breakouts", scores: { acne: 3 } },
      { text: "Hydrate dryness", scores: { hydration: 3 } },
      { text: "Even skin tone / fade dark spots", scores: { brightening: 3 } },
      { text: "Calm redness / irritation", scores: { barrier: 3, sensitive: 1 } },
      { text: "Achieve smoother, more radiant skin", scores: { glass: 3 } }
    ]
  },
  {
    question: "Do you have dark spots or hyperpigmentation?",
    options: [
      { text: "Yes, noticeable", scores: { brightening: 3, antiaging: 1 } },
      { text: "A few spots", scores: { brightening: 2 } },
      { text: "Not at all", scores: { minimalist: 1 } }
    ]
  },
  {
    question: "Is redness or rosacea a concern?",
    options: [
      { text: "Yes", scores: { sensitive: 3, barrier: 2 } },
      { text: "A little", scores: { barrier: 2, sensitive: 1 } },
      { text: "No", scores: {} }
    ]
  },
  {
    question: "Do you feel your skin barrier is compromised (itchy/tight/flaky)?",
    options: [
      { text: "Yes, very reactive", scores: { barrier: 3, sensitive: 2 } },
      { text: "Sometimes", scores: { barrier: 2 } },
      { text: "No, it feels fine", scores: { minimalist: 1 } }
    ]
  },
  {
    question: "How often do you wear makeup?",
    options: [
      { text: "Every day", scores: { doublecleanse: 3, glass: 1 } },
      { text: "A few times a week", scores: { doublecleanse: 2, minimalist: 1 } },
      { text: "Rarely", scores: { minimalist: 2 } },
      { text: "Never", scores: { minimalist: 2, sensitive: 1 } }
    ]
  },
  {
    question: "Do you currently double cleanse?",
    options: [
      { text: "Yes, always", scores: { doublecleanse: 3 } },
      { text: "Sometimes", scores: { doublecleanse: 1 } },
      { text: "Never", scores: { minimalist: 1 } }
    ]
  },
  {
    question: "How consistent is your routine?",
    options: [
      { text: "Morning & night, every day", scores: { glass: 1, antiaging: 1 } },
      { text: "Once a day", scores: { minimalist: 1 } },
      { text: "A few times a week", scores: {} },
      { text: "Rarely", scores: {} }
    ]
  },
  {
    question: "Do you exfoliate (chemical or physical)?",
    options: [
      { text: "Yes, regularly", scores: { brightening: 1, glass: 1, acne: 1 } },
      { text: "Sometimes", scores: { brightening: 1 } },
      { text: "No", scores: { barrier: 1, sensitive: 1 } }
    ]
  },
  {
    question: "How much time do you spend in the sun (day-to-day)?",
    options: [
      { text: "A lot (outdoors daily)", scores: { antiaging: 2, brightening: 1 } },
      { text: "Moderate", scores: { antiaging: 1 } },
      { text: "Minimal", scores: {} }
    ]
  },
  {
    question: "How often do you wear sunscreen?",
    options: [
      { text: "Every day", scores: { antiaging: 1 } },
      { text: "Sometimes", scores: { antiaging: 1, brightening: 1 } },
      { text: "Never", scores: { antiaging: 2, brightening: 1 } }
    ]
  },
  {
    question: "How is your sleep generally?",
    options: [
      { text: "7–9 hours, consistent", scores: {} },
      { text: "5–6 hours, irregular", scores: { antiaging: 1, barrier: 1 } },
      { text: "Less than 5 hours", scores: { antiaging: 2, acne: 1 } }
    ]
  },
  {
    question: "Which climate best fits where you live?",
    options: [
      { text: "Hot & humid", scores: { oil: 1, acne: 1 } },
      { text: "Cold & dry", scores: { hydration: 2, barrier: 1 } },
      { text: "Balanced / mild", scores: { minimalist: 1 } }
    ]
  },
  {
    question: "Do you prefer fragrance-free products?",
    options: [
      { text: "Yes, always", scores: { sensitive: 1, barrier: 1 } },
      { text: "Sometimes", scores: {} },
      { text: "I don't mind fragrance", scores: {} }
    ]
  },
  {
    question: "What’s your preferred price range for skincare?",
    options: [
      { text: "Affordable / drugstore", scores: { minimalist: 1 } },
      { text: "Mid-range", scores: { glass: 1, brightening: 1 } },
      { text: "Premium / luxury", scores: { antiaging: 1, glass: 1 } }
    ]
  },
  {
    question: "How many steps do you want in your routine?",
    options: [
      { text: "Minimal (2–3)", scores: { minimalist: 3 } },
      { text: "Standard (4–5)", scores: { glass: 1, barrier: 1 } },
      { text: "Multi-step (6+)", scores: { glass: 2, doublecleanse: 1 } }
    ]
  },
  {
    question: "Which best describes your ideal routine?",
    options: [
      { text: "Quick & simple", scores: { minimalist: 2 } },
      { text: "Balanced & effective", scores: { glass: 1, barrier: 1 } },
      { text: "Detailed & thorough", scores: { doublecleanse: 1, antiaging: 1 } }
    ]
  }
];

// Utility: default zeroed scores
function emptyScore() {
  const s = {};
  Object.keys(PROFILES).forEach(k => s[k] = 0);
  return s;
}

// Render quiz into DOM
function renderQuiz() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = '';
  const form = document.createElement('form');
  form.id = 'quiz-form';
  QUESTIONS.forEach((q, qi) => {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'question';
    fieldset.dataset.qIndex = qi;
    const legend = document.createElement('legend');
    legend.textContent = `${qi + 1}. ${q.question}`;
    fieldset.appendChild(legend);

    q.options.forEach((opt, oi) => {
      const label = document.createElement('label');
      label.className = 'option';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${qi}`;
      input.value = String(oi);
      // do not set required on each; we'll validate on submit
      label.appendChild(input);
      label.appendChild(document.createTextNode(opt.text));
      fieldset.appendChild(label);
    });

    form.appendChild(fieldset);
  });

  const controls = document.createElement('div');
  controls.id = 'controls';
  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.className = 'primary';
  submit.textContent = 'See My Match';
  const reset = document.createElement('button');
  reset.type = 'button';
  reset.textContent = 'Reset';
  reset.addEventListener('click', () => {
    form.reset();
    document.getElementById('result-container').style.display = 'none';
    // remove any missing highlights
    form.querySelectorAll('.missing').forEach(n => n.classList.remove('missing'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  controls.appendChild(submit);
  controls.appendChild(reset);
  form.appendChild(controls);

  form.addEventListener('submit', handleSubmit);
  container.appendChild(form);
}

// Form submit: validate, score, show results
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  // validation: ensure each question answered
  for (let i = 0; i < QUESTIONS.length; i++) {
    const key = `q${i}`;
    if (!formData.has(key)) {
      // highlight missing question and scroll
      const fieldset = form.querySelector(`fieldset[data-q-index="${i}"]`);
      if (fieldset) {
        fieldset.classList.add('missing');
        fieldset.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return alert('Please answer all questions before submitting.');
    }
  }

  // tally scores
  const scores = emptyScore();
  for (let i = 0; i < QUESTIONS.length; i++) {
    const selection = formData.get(`q${i}`);
    const optIndex = parseInt(selection, 10);
    const opt = QUESTIONS[i].options[optIndex];
    if (opt && opt.scores) {
      Object.keys(opt.scores).forEach(pk => {
        if (scores[pk] === undefined) scores[pk] = 0;
        scores[pk] += Number(opt.scores[pk]);
      });
    }
  }

  // pick top profile (handle ties with a priority fallback)
  const maxScore = Math.max(...Object.values(scores));
  const winners = Object.keys(scores).filter(k => scores[k] === maxScore);

  // fallback priority (if tie): hydration, barrier, acne, oil, sensitive, glass, brightening, antiaging, doublecleanse, minimalist
  const priority = ['hydration','barrier','acne','oil','sensitive','glass','brightening','antiaging','doublecleanse','minimalist'];
  let chosen = winners[0];
  if (winners.length > 1) {
    for (let p of priority) {
      if (winners.includes(p)) { chosen = p; break; }
    }
  }

  showResult(chosen, scores);
}

// Render result card
function showResult(profileKey, scores) {
  const resultContainer = document.getElementById('result-container');
  const profile = PROFILES[profileKey];
  resultContainer.style.display = 'block';
  resultContainer.innerHTML = '';

  const card = document.createElement('div');
  card.className = 'result-card';

  const title = document.createElement('div');
  title.className = 'result-title';
  title.textContent = profile.name;
  card.appendChild(title);

  const desc = document.createElement('div');
  desc.className = 'result-desc';
  desc.textContent = profile.desc;
  card.appendChild(desc);

  const rTitle = document.createElement('div');
  rTitle.style.fontWeight = '600';
  rTitle.style.marginBottom = '6px';
  rTitle.textContent = 'Suggested routine';
  card.appendChild(rTitle);

  const ul = document.createElement('ul');
  ul.className = 'routine';
  profile.routine.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    ul.appendChild(li);
  });
  card.appendChild(ul);

  // short reason: top 2 contributing profiles
  const sortedProfiles = Object.keys(scores).sort((a,b) => scores[b] - scores[a]);
  const topTwo = sortedProfiles.slice(0,2).map(k => PROFILES[k].name);

  const reason = document.createElement('div');
  reason.className = 'small';
  reason.textContent = `Why this match: Your answers best align with ${topTwo.join(' and ')}.`;
  card.appendChild(reason);

  const controls = document.createElement('div');
  controls.style.marginTop = '12px';
  const retake = document.createElement('button');
  retake.className = 'btn';
  retake.textContent = 'Retake quiz';
  retake.addEventListener('click', () => {
    const form = document.getElementById('quiz-form');
    form.reset();
    resultContainer.style.display = 'none';
    form.querySelectorAll('.missing').forEach(n => n.classList.remove('missing'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  controls.appendChild(retake);
  card.appendChild(controls);

  resultContainer.appendChild(card);
  // scroll to result
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// init
document.addEventListener('DOMContentLoaded', () => {
  renderQuiz();
});
