"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#header");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("header--dark");
  } else {
    navbar.classList.remove("header--dark");
  }
});