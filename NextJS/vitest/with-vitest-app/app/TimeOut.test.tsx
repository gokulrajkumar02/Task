import { render, screen} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TimeOut from "./TimeOut";

describe("testing useState", () => {
  it("TimeOut", async () => {
    render(<TimeOut />);
    const content = await screen.findByText("React testing",{},{timeout : 3000})
    expect(content).toBeInTheDocument()
  });
});