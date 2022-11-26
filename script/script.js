// Sticky Navigation Bar On Scroll
window.addEventListener("scroll", () => {
  let header = document.querySelector(".header");
  header.classListtoggle("sticky", window.scrollY > 0);
});
