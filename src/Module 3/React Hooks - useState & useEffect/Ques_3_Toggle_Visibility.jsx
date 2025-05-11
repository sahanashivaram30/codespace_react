// Toggle Visibility

// 1. Goal: Toggle the visibility of a text message.
// 2. Steps:
//     - Use useState to create a isVisible state with an initial value of false .
//     - Display a button that toggles the boolean isVisible state.
//     - Conditionally render a message when isVisible is true.
//     - Write your code within the file, by the name of component as Toggle_Visibility
import React, { useState } from "react";

const Ques_2_Text_Input_and_Display = () => {
  // State to store user input
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Enter Text Below:</h2>
      <input 
        type="text" 
        placeholder="Type something..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <p>You typed: {text}</p>
    </div>
  );
};

export default Ques_2_Text_Input_and_Display;
