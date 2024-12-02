import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

// add()

test("adds numbers 2 and 3 correctly", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("add() returns a negative value if the greater argument is negative", () => {
  const result = add(-5, 2);
  expect(result).toBeLessThan(0);
});

test("add(0.1, 0.2) returns a value close to 0.3", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

// subtract()

test("subtracts numbers 15 and 5 correctly", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("subtract() returns a negative value if second argument is greater than the first one", () => {
  const result = subtract(5, 10);
  expect(result).toBeLessThan(0);
});

// multiply()

test("returns 8 for multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("returns a negative value if only the first argument is negtative", () => {
  const result = multiply(-5, 2);
  expect(result).toBeLessThan(0);
});

test("returns a positive value if called with two negative arguments", () => {
  const result = multiply(-5, -2);
  expect(result).toBeGreaterThan(0);
});

// divide()

test("returns 3 for divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("returns 'You should not do this!' if called with 0 as second argument", () => {
  const result = divide(4, 0);
  expect(result).toBe("You should not do this!");
});
