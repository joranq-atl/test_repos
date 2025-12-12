// React main app component

import React, { useState } from "react";
import { Button, ButtonGroup, formatButtonLabel } from "./Button";

export function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const label = formatButtonLabel("click me");

  return (
    <div>
      <h1>Counter: {count}</h1>
      <ButtonGroup>
        <Button label={label} onClick={handleClick} />
        <Button label="Reset" onClick={resetCount} />
      </ButtonGroup>
    </div>
  );
}
