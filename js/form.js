const answerQuestionField = document.querySelector(
  `[data-js="quiz-card--question-answer"]`
);
const questionForm = document.querySelector(`[data-js="form-section--form"]`);
const formSection = document.querySelector(`[data-js="form-section"]`);

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  //   event.target.reset();
  event.target.elements.question.focus();

  const formElement = document.createElement("article");
  formSection.append(formElement);
  formElement.classList.add("quiz-card");

  const bmarkAnchor = document.createElement("a");
  formElement.append(bmarkAnchor);
  bmarkAnchor.href = "#";

  const bmarkImg = document.createElement("img");
  bmarkAnchor.append(bmarkImg);
  bmarkImg.classList.add("quiz-card--bookmark", "inactive");
  bmarkImg.src = "./images/bookmark-plus.svg";
  bmarkImg.alt = "bookmark icon";
  bmarkImg.setAttribute("data-js", "quiz-card--bookmark");

  const questionAnswerParagraph = document.createElement("p");
  formElement.append(questionAnswerParagraph);
  questionAnswerParagraph.classList.add("question-answer");
  questionAnswerParagraph.setAttribute("data-js", "quiz-card--question-answer");
  questionAnswerParagraph.textContent = data.question;

  const button = document.createElement("button");
  formElement.append(button);
  button.classList.add("quiz-card--button");
  button.setAttribute("data-js", "quiz-card--button");
  button.textContent = "Show answer";

  const tagContainer = document.createElement("div");
  formElement.append(tagContainer);
  tagContainer.classList.add("quiz-card--tags");

  const singleTag = document.createElement("p");
  tagContainer.append(singleTag);
  singleTag.textContent = data.tag;
});
