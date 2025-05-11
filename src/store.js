import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Module4/ReduxToolkit/counterSlice"; // Ensure correct file path

// Configure Redux store with reducers
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

export default store;
