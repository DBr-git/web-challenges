console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

SUPER_SECRET_PASSWORD === receivedPassword
  ? console.log("Welcome! You are logged in as Brunhilde1984.")
  : console.log("Access denied!");

// Part 2: Even / Odd
const number = 5;

number % 2 === 0 ? console.log("even number") : console.log("odd number");

// Part 3: Hotdogs
const numberOfHotdogs = 99;
let price;

if (numberOfHotdogs >= 1000000) {
  price = 0.1;
} else if (numberOfHotdogs <= 999999 && numberOfHotdogs >= 100) {
  price = 1;
} else if (numberOfHotdogs <= 99 && numberOfHotdogs >= 5) {
  price = 1.5;
} else if (numberOfHotdogs <= 4) {
  price = 2;
}
console.log("Hotdog Price: " + price);

// Part 4: Daytime
const currentHour = 16;
const statement = currentHour < 17 ? "Still need to learn" : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const coach = "Esraa";
let name = "Esra";

const greeting = "Hello " + (name === coach ? "Coach" : userName) + "!";

console.log(greeting);
