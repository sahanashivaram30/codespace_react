import React, { useState, useEffect } from "react";

// Utility function to validate color names
const isValidColor = (color) => {
  const s = new Option().style;
  s.color = color;
  return s.color !== "";
};

const Favorite_Color = () => {
  const [favoriteColor, setFavoriteColor] = useState("");
  const [validColor, setValidColor] = useState(true);

  // Debounce effect to optimize input handling
  useEffect(() => {
    const timer = setTimeout(() => {
      setValidColor(isValidColor(favoriteColor));
    }, 300); // 300ms debounce delay

    return () => clearTimeout(timer);
  }, [favoriteColor]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Favorite Color Picker</h2>
      <input
        type="text"
        placeholder="Enter a valid color name"
        value={favoriteColor}
        onChange={(e) => setFavoriteColor(e.target.value)}
        style={{
          padding: "10px",
          border: validColor ? "2px solid green" : "2px solid red",
        }}
      />
      <p>
        {validColor ? (
          <span style={{ color: favoriteColor }}>
            Your favorite color is: <strong>{favoriteColor}</strong>
          </span>
        ) : (
          <span style={{ color: "red" }}>Invalid color name! ❌</span>
        )}
      </p>
    </div>
  );
};

export default Favorite_Color;
