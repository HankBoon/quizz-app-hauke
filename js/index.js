console.clear();

const homeHighlight = document.querySelector('[data-js="home-highlight"]');
const bookmarkHighlight = document.querySelector(
  '[data-js="bookmark-highlight"]'
);
const profileHighlight = document.querySelector(
  '[data-js="profile-highlight"]'
);

//Debug
console.log(homeHighlight);
console.log(bookmarkHighlight);
console.log(profileHighlight);

/* //Highlight Home Button
homeHighlight.addEventListener("click", () => {
  homeHighlight.classList.add("navbar-highlight");
  bookmarkHighlight.classList.remove("navbar-highlight");
  profileHighlight.classList.remove("navbar-highlight");
}); */

const navLinks = [homeHighlight, bookmarkHighlight, profileHighlight];

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    link.classList.add("navbar-highlight");
    // Set session storage for the active link
    sessionStorage.setItem("highlightedLink", link.getAttribute("data-js"));

    // Highlight the clicked link and remove from others
    navLinks.forEach((otherLink) =>
      otherLink.classList.toggle("navbar-highlight", otherLink === link)
    );

    // Navigate after the highlight change
    setTimeout(() => {
      window.location.href = link.href;
    }, 100);
  });
});

// Set the highlight based on the stored value on page load
window.addEventListener("load", () => {
  const highlightedLink = sessionStorage.getItem("highlightedLink");
  if (highlightedLink) {
    document
      .querySelector(`[data-js="${highlightedLink}"]`)
      .classList.add("navbar-highlight");
  }
});
