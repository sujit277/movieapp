import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter Component", () => {
  test("Counter Component renders with intial value", () => {
    render(<Counter count={0} />);
    const counterText = screen.getByRole("heading");
    expect(counterText).toHaveTextContent("0");
  });

  test("Increment button Increment the displayed value", async () => {
    const user = userEvent.setup();
    render(<Counter count={0} />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    const counterText = screen.getByRole("heading");
    expect(counterText).toHaveTextContent("1");
  });

  test("Decrement button Decrement the displayed value", async () => {
    const user = userEvent.setup();
    render(<Counter count={1} />);
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    await user.click(decrementButton);
    const counterText = screen.getByRole("heading");
    expect(counterText).toHaveTextContent("0");
  });
});
