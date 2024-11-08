const bookmarkImg = document.querySelector(`[data-js="quiz-card--bookmark"]`);
console.log(bookmarkImg);

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
