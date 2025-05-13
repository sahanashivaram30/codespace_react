// Local Storage with useEffect and useState
// Description: Create a component where the user's input is saved in local storage and persists after page reload.

// Steps to needed:
//     - useState(() => {...}) : Initializes the input with local storage value.
//     - useEffect([input]) : Updates local storage each time input changes.
//     - Write your code within the file, by the name of component as Local_Storage.
import React, { useState, useEffect } from "react";

const Local_Storage = () => {
  // Initialize state with local storage value or default to an empty string
  const [input, setInput] = useState(() => {
    return localStorage.getItem("userInput") || "";
  });

  // Update local storage whenever input changes
  useEffect(() => {
    localStorage.setItem("userInput", input);
  }, [input]);

  return (
    <div>
      <h2>Local Storage Example</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Stored Value: {input}</p>
    </div>
  );
};

export default Local_Storage;
