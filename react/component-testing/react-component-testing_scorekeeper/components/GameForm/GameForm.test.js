import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);

  const input = screen.getAllByRole("textbox");
  expect(input).toHaveLength(2);

  const button = screen.getByRole("button", { name: /create game/i });
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);

  const form = screen.getByRole("form", { name: /Create a new game/i });
  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const user = userEvent.setup();
  const onCreateGame = jest.fn();

  render(<GameForm onCreateGame={onCreateGame} />);

  const input1 = screen.getByLabelText(/Name of Game/i);
  const input2 = screen.getByLabelText(/Player names, separated by comma/i);
  const button = screen.getByRole("button", { name: /create game/i });

  await user.type(input1, "TestGame");
  await user.type(input2, "Player1, Player2");
  await user.click(button);

  expect(onCreateGame).toHaveBeenCalledWith({
    nameOfGame: "TestGame",
    playerNames: ["Player1", "Player2"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const user = userEvent.setup();
  const onCreateGame = jest.fn();

  render(<GameForm onCreateGame={onCreateGame} />);

  const button = screen.getByRole("button", { name: /create game/i });

  await user.click(button);

  expect(onCreateGame).not.toHaveBeenCalled();
});
