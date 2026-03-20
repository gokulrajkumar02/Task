import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

test("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", { level: 2, name: "App Router" }),
  ).toBeDefined();

  const counterValue = screen.getByText("0")
  expect(counterValue).toBeInTheDocument()

  const incrementValue = screen.getByTestId("increment-btn")
  expect(incrementValue.textContent).toBe("Increment")
  
  const decrementValue = screen.getByTestId("decrement-btn")
  expect(decrementValue.textContent).toBe("Decrement")


});
