// Form with Multiple Input Fields
// Description: Create a form for user registration with fields for username, email, and password. Display the entered data under the form.


// Steps:
//     - Write your code within the file, by the name of component as Complex_Form

import React, { useState } from "react";

const Ques_7_Complete_Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}`);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2>Complete Form Submission</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Ques_7_Complete_Form;
