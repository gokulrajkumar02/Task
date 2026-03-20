import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Counter from "./counter";

describe("Counter", () => {

  it("Counter Value", () => {
    render(<Counter />);
    const content = screen.getByTestId("counter-value");
    expect(content.textContent).toEqual("0");
  });

  it("Increment", async () => {
    render(<Counter isNegative={false} />);
    const button = screen.getByTestId("increment-btn");
    await userEvent.click(button);
    await userEvent.click(button);
    const counterValue = screen.getByTestId("counter-value");
    
    const dec_button = screen.getByTestId("decrement-btn");
    counterValue.textContent = "12"
    await userEvent.click(dec_button);
    expect(counterValue.textContent).toEqual("1");
  });
  
  it("decrement", async () => {
    render(<Counter  isNegative={false}/>);
    const button = screen.getByTestId("decrement-btn");
    
    await userEvent.click(button); 
    
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue.textContent).toEqual("-1");
  });
  it("Increment then decrement", async () =>{
    render(<Counter isNegative={false}/>)
    const counterValue = screen.getByTestId("counter-value");
    const inc_btn = screen.getByTestId("increment-btn");
    const dec_btn = screen.getByTestId("decrement-btn");
    await userEvent.click(inc_btn)
    await userEvent.click(dec_btn)
    expect(counterValue.textContent).toEqual("0");
  })
  
  it("decrement not to -1", async()=>{
    render(<Counter isNegative={true}/>)
    const counterValue = screen.getByTestId("counter-value");
    const dec_btn = screen.getByTestId("decrement-btn");
    await userEvent.click(dec_btn)
    expect(counterValue.textContent).toEqual("0");

  })

});