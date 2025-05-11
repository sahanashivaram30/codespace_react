import React from "react";
import Ques_6 from "./Ques_6";  // Ensure correct file name

function App() {
  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      <Ques_6 isLoggedIn={true} />  {/* Change to false to test */}
    </div>
  );
}

export default App;
