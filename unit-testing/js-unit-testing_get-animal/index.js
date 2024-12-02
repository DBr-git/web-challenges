export function getAnimal(animal) {
  if (!animal) {
    return "I do not like animals at all!";
  }
  if (animal === "dogs") {
    return "I like dogs!";
  } else {
    return "I totally love cats!";
  }
}
