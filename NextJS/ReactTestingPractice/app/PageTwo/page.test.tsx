import { render, screen } from "@testing-library/react";
import {describe,it,expect,vi} from "vitest";
import PageTwo from "./page";

describe("Page Component", () => {
  it("renders without crashing", () => {
    render(<PageTwo />);
    const selectedTag = screen.getByText(/secondpage/i)
    expect(selectedTag).toBeInTheDocument()
  });

  

  

  
});
