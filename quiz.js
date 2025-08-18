// quiz.js

// Example quiz data
const quizQuestions = [
  {
    question: "What's your main skin goal?",
    answers: [
      { text: " Glass skin glow", profile: "glass" },
      { text: " Soothe redness & sensitivity", profile: "barrier" },
      { text: " Hydrate super dry skin", profile: "dry" },
      { text: " Remove makeup thoroughly", profile: "doublecleanse" }
    ]
  },
  {
    question: "What's your skin type?",
    answers: [
      { text: "Oily", profile: "glass" },
      { text: "Sensitive", profile: "barrier" },
      { text: "Dry", profile: "dry" },
      { text: "Combination", profile: "doublecleanse" }
    ]
  }
];

// Track answers
let userAnswers = {};

// Load quiz
function loadQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  quizQuestions.forEach((q, index) => {
    const questionElem = document.createElement("div");
    questionElem.classList.add("question");

    const questionText = document.createElement("h2");
    questionText.textContent = q.question;
    questionElem.appendChild(questionText);

    q.answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.textContent = answer.text;
      btn.onclick = () => {
        userAnswers[index] = answer.profile;
        if (Object.keys(userAnswers).length === quizQuestions.length) {
          showResults();
        } else {
          Array.from(questionElem.querySelectorAll("button")).forEach(b => b.disabled = true);
        }
      };
      questionElem.appendChild(btn);
    });

    container.appendChild(questionElem);
  });
}

// Show results
function showResults() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "<h2>🎉 Your Skincare Profile:</h2>";

  const counts = {};
  Object.values(userAnswers).forEach(profile => {
    counts[profile] = (counts[profile] || 0) + 1;
  });

  const topProfile = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

  let resultText = "";
  if (topProfile === "glass") resultText = "You’re a  Glass Skin Seeker ";
  if (topProfile === "barrier") resultText = "You’re a  Barrier-Repair  ";
  if (topProfile === "dry") resultText = "You’re a Hydration  ";
  if (topProfile === "doublecleanse") resultText = "You’re a  Double Cleanser";

  const resultElem = document.createElement("p");
  resultElem.textContent = resultText;
  container.appendChild(resultElem);
}

// Start quiz when page loads
window.onload = loadQuiz;
