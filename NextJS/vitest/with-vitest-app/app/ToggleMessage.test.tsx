import { render, screen} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ToggleMessage from "./ToggleMeassage";
import userEvent from "@testing-library/user-event";


describe("testing useState", () => {
  it("UseState", async() => {

    render(<ToggleMessage />);
    expect(screen.queryByText(/hello world/i)).not.toBeInTheDocument()

    const content = screen.getByText("Toggle")
    expect(content).toBeInTheDocument()

    const toogle_button = screen.getByTestId("toggle-btn")
    await userEvent.click(toogle_button)
    
    const showPara = screen.getByText(/hello world/i)
    expect(showPara).toBeInTheDocument()
    
    await userEvent.click(toogle_button)
    expect(screen.queryByText(/hello world/i)).not.toBeInTheDocument()
});
});