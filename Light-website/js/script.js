const menuHamburger = document.querySelector(".menu-hamburger");
const closeIcon = document.querySelector(".close-icon");
const navBar = document.querySelector(".navbar");

menuHamburger.addEventListener("click", function () {
  navBar.classList.toggle("open");
  document.body.classList.toggle("open-navbar");
});

closeIcon.addEventListener("click", function () {
  navBar.classList.remove("open");
  document.body.classList.remove("open-navbar");
});
