import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Todos from "./Module 4/Redux Toolkit - State Management in React/Todos_Redux/Todos";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>React Redux To-Do List</h1>
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
