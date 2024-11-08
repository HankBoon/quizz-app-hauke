const bookmarkImg = document.querySelector(`[data-js="quiz-card--bookmark"]`);
const answerButton = document.querySelector(`[data-js="quiz-card--button"]`);
const answer = document.querySelector(`[data-js="quiz-card--answer"]`);

bookmarkImg.addEventListener("click", () => {
  // First approach:
  //   bookmarkImg.src === bookmarkImg.src.endsWith("./images/bookmark-plus.svg")
  //     ? "./images/star.svg"
  //     : "./images/bookmark-plus.svg";

  // Second approach:
  //   if (bookmarkImg.src === "./images/bookmark-plus.svg") {
  //     bookmarkImg.src = "./images/star.svg";
  //   } else {
  //     bookmarkImg.src = "./images/bookmark-plus.svg";
  //   }

  // Third approach:
  bookmarkImg.classList.toggle("inactive");
  bookmarkImg.classList.toggle("active");
});

answerButton.addEventListener("click", () => {
  // First approach:
  answer.toggleAttribute("hidden");
  answerButton.textContent === "Show answer"
    ? (answerButton.textContent = "Hide answer")
    : (answerButton.textContent = "Show answer");
});
