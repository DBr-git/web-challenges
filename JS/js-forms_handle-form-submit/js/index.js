console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Log Data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  //Log Age-Badness-Sum
  const ageBadnessSum =
    Number(event.target.elements.age.value) +
    Number(event.target.elements.badness.value);
  console.log(ageBadnessSum);

  //Reset Form
  event.target.reset();
  event.target.elements.firstName.focus();
});
