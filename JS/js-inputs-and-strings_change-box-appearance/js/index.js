console.clear();
const colorRange = document.querySelector('[data-js="input-color"]');
const radiusRange = document.querySelector('[data-js="input-radius"]');
const rotationRange = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

colorRange.addEventListener("input", () => {
  box.style.backgroundColor = `hsl(${colorRange.value}, 100%, 50%)`;
});

radiusRange.addEventListener("input", () => {
  box.style.borderRadius = `${radiusRange.value}%`;
});

rotationRange.addEventListener("input", () => {
  box.style.transform = `rotate(${rotationRange.value}deg)`;
});
