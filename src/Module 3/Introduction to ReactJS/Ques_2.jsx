// Embedding JavaScript Expressions in JSX
// Description: Embed a JavaScript expression in JSX to display the current year.
// Use this component in App.js
function Ques_2() {
  const year = new Date().getFullYear();
  return <div>The current year is {year}</div>;
}

export default Ques_2;


