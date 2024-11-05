console.clear();
const input = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]');
console.log(input);

button.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});
