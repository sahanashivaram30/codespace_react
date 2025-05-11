// Text Input and Display
// Description: Create a React component that allows users to input text in a textbox and displays the input below the textbox.

// Steps:
//     - Write your code within the file, by the name of component as Text_Input
import React, { useState } from "react";

const Ques1_Counter = () => {
  // Initialize state variable count with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Ques1_Counter;
