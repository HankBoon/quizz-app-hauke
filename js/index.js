const bookmarkImg = document.querySelector(`[data-js="quiz-card--bookmark"]`);
const answerButton = document.querySelector(`[data-js="quiz-card--button"]`);
const answerQuestionField = document.querySelector(
  `[data-js="quiz-card--question-answer"]`
);

bookmarkImg.addEventListener("click", () => {
  // First approach:
  bookmarkImg.src = bookmarkImg.src.endsWith("/images/bookmark-plus.svg")
    ? "./images/star.svg"
    : "./images/bookmark-plus.svg";
  console.log(bookmarkImg.src);

  // Second approach:
  //   if (bookmarkImg.src.endsWith("/images/bookmark-plus.svg")) {
  //     bookmarkImg.src = "./images/star.svg";
  //   } else {
  //     bookmarkImg.src = "./images/bookmark-plus.svg";
  //   }

  // Third approach:
  //   bookmarkImg.classList.toggle("inactive");
  //   bookmarkImg.classList.toggle("active");
});

answerButton.addEventListener("click", () => {
  answerButton.textContent.trim() === "Show answer"
    ? (answerButton.textContent = "Hide answer")
    : (answerButton.textContent = "Show answer");

  // First approach:
  //   answer.toggleAttribute("hidden");
  const question = "What does CSS stand for?";
  const answer = "Cascading Style Sheets";

  answerQuestionField.textContent === question
    ? (answerQuestionField.textContent = answer)
    : (answerQuestionField.textContent = question);
});
