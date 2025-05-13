import React from "react";
import SimpleForm from "./Module 4/Advanced React Concepts/Forms/SimpleForm"; // Ensure correct file path

function App() {
  const handleFormSubmit = (formData) => {
    alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

  return (
    <div>
      <h1>React Controlled Form Example</h1>
      <SimpleForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
