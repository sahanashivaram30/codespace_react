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
