// List Items Input and Display
// Description: Build a component that allows users to enter items into a list. Each new item should be added when the "Add" button is clicked, and displayed on the page.

// Steps:
//     - Write your code within the file, by the name of component as List_Item
import React from "react";

const Ques_5_List_Items = () => {
  // Sample list of items
  const items = ["Apple 🍎", "Banana 🍌", "Cherry 🍒", "Grapes 🍇", "Mango 🥭"];

  return (
    <div>
      <h2>List of Fruits</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ques_5_List_Items;
