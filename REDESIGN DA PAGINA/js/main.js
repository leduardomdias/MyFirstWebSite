const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

const getCurrentTheme = () => {
  return localStorage.getItem("selected-theme") || "light";
};

const applyTheme = (theme) => {
  if (theme === "dark") {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(getCurrentTheme());
});

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("selected-theme", currentTheme);
});

document.addEventListener("DOMContentLoaded", () => {});
