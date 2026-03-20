import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TestingUseState from "./TestingUseState";
import { act } from "react";

describe("testing useState", () => {


  it("UseState", () => {
    const { result } = renderHook(() => TestingUseState());
    expect(result.current.count).toBe(0);
    act(() =>{
        result.current.handleIncrement()
    })
    expect(result.current.count).toBe(1)
  });

  
});
