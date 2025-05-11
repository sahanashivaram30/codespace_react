// Simple Form Submission
// Description: Create a simple form with a name input field and a submit button. Display an alert with the name when the form is submitted.

// Steps:
//     - onSubmit: Calls handleSubmit , which prevents the default form submission action and shows an alert.
//     - Write your code within the file, by the name of component as Simple_Form
import React, { useState } from "react";

const Toggle_Visibility = () => {
  // State to store visibility status
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h2>Toggle Visibility Example</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      {isVisible && <p>This is a secret message! 🎉</p>}
    </div>
  );
};

export default Toggle_Visibility;
