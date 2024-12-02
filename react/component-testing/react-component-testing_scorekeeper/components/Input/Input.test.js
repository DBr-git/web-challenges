import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const onChange = jest.fn();

  render(
    <Input
      labelText="Test"
      placeholder="Placeholder"
      name="nameOfGame"
      value="testValue"
      onChange={onChange}
    />
  );

  const input = screen.getByLabelText("Test");
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("placeholder", "Placeholder");
  expect(input).toHaveAttribute("name", "nameOfGame");
  expect(input).toHaveAttribute("value", "testValue");
});

test("calls callback on every user input", async () => {});
