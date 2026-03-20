"use client";
import { useState } from "react";

export default function Counter(prop : any) {
  
  const [count, setCount] = useState(0);
  return (
    <>
      <h2 data-testid="counter-value">{count}</h2>
      <button type="button" onClick={() => setCount(count + 1)} data-testid="increment-btn" >
        Increment
      </button>
      <br />
      <br />
      <button type="button" onClick={() => setCount(!prop.isNegative  ? count - 1: count- 1 >= 0 ? count-1 : 0)} data-testid="decrement-btn" >
        Decrement
      </button>
    </>
  );
}
