// Conditional Rendering
// Description: Implement a component that renders different messages based on a passed isLoggedIn prop.

// Step 1: Write your code within the file, by the name of component as LoginMessage
// Step 2: Modify the App.js to use LoginMessage with a boolean prop

import React from "react";

const Ques_6 = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome back, User! 🎉</h2> : <h2>Please log in to continue.</h2>}
    </div>
  );
};

export default Ques_6;
