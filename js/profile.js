const darkmodeToggle = document.querySelector(
  `[data-js="setting-section--switch--checkbox"]`
);

darkmodeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
