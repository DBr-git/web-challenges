console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

//Implements Dark Mode
const buttonDarkMode = document.querySelector('[data-js="dark-mode-button"]');
buttonDarkMode.addEventListener("click", () => {
  bodyElement.classList.add("body-dark");
});

//Implements Light Mode
const buttonLightMode = document.querySelector('[data-js="light-mode-button"]');
buttonLightMode.addEventListener("click", () => {
  bodyElement.classList.remove("body-dark");
});

//Implements Color Theme Toggle
const buttonToggle = document.querySelector('[data-js="toggle-button"]');
buttonToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("body-dark");
});
