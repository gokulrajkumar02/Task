"use client";
import { useState } from "react";

const ToggleMessage = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)} data-testId="toggle-btn">Toggle</button>
      {show && <p>Hello World</p>}
    </div>
  );
};

export default ToggleMessage