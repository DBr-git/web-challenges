console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const numberA = Number(event.target.elements.numberA.value);
  const numberB = Number(event.target.elements.numberB.value);
  const operation = event.target.elements.operator.value;

  //Solution with if Statement
  /* 
  if (operation === "addition") {
    result = add(numberA, numberB);
  } else if (operation === "subtraction") {
    result = subtract(numberA, numberB);
  } else if (operation === "multiplication") {
    result = multiply(numberA, numberB);
  } else {
    result = divide(numberA, numberB);
  }
 */

  //Solution with Switch Statement
  /* 
  switch (operation) {
    case "addition":
      result = add(numberA, numberB);
      break;
    case "subtraction":
      result = subtract(numberA, numberB);
      break;
    case "multiplication":
      result = multiply(numberA, numberB);
      break;
    default:
      result = divide(numberA, numberB);
  }
 */

  //Solution with Lookup Object

  const operations = {
    addition: add,
    subtraction: subtract,
    multiplication: multiply,
    division: divide,
  };
  result = operations[operation](numberA, numberB);

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
