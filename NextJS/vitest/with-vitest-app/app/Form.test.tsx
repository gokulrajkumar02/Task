import { render, screen } from "@testing-library/react";
import Form from "./Form";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

const user = {
  greet: (name: string) => {
    console.log(name);
  },
};

describe("testing useState", () => {
  it("TimeOut", async () => {
    const mockSubmit = vi.fn();
    render(<Form onSubmit={mockSubmit} />);
    const inputBox = screen.getByPlaceholderText("Enter username");
    expect(inputBox).toBeInTheDocument();
    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(submitButton).toBeInTheDocument();

    await userEvent.type(inputBox, "Gokul");
    await userEvent.click(submitButton);
    
    expect(mockSubmit).toHaveBeenCalledWith("Gokul");   
  });

  it("SpyOn", () => {
    const spy = vi.spyOn(user, "greet");
    user.greet("nextJS");
    expect(spy).toHaveBeenCalledWith("nextJS");
  });
});
