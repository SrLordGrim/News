document
  .querySelector(".menu-btn")
  .addEventListener("click", () =>
    document.querySelector(".main-nav__menu").classList.toggle("show")
  );
AOS.init();
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 600,
});
