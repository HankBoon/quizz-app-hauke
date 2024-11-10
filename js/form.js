const answerQuestionField = document.querySelector(
  `[data-js="quiz-card--question-answer"]`
);
const questionForm = document.querySelector(`[data-js="form-section--form"]`);

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  event.target.reset();
  event.target.elements.question.focus();
});
