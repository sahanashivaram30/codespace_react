// Window Width

// 1. Goal: Track and display the window width as the window resizes.
// 2. Steps:
//     - Use useEffect to add an event listener for the window resize event.
//     - Use useState to store the current window width.
//     - Update the width state whenever the window is resized and display it.
//     - Write your code within the file, by the name of component as Window_Width
import React, { useState, useEffect } from "react";

const Window_Width = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Window Width Tracker</h2>
      <p>Current Window Width: <strong>{width}px</strong></p>
    </div>
  );
};

export default Window_Width;
