console.clear();
// Change this value to test different "weather" conditions.
const weather = "rainy";

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = -1;
let message;

switch (weather) {
  case "sunny":
    message =
      temperature > 20
        ? "It's sunny and warm!"
        : "It's sunny, but a bit chilly!";
    break;
  case "rainy":
    message = "It's raining, dont forget your umbrella!";
    break;
  case "snowy":
    message = temperature < 0 ? "Feezing snow!" : "It's snowy!";
    break;
  default:
    console.log("can't find match");
}
