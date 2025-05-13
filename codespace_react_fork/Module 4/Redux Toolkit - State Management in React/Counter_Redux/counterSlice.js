import { createSlice } from "@reduxjs/toolkit";

// Initial state for the counter
const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Increment the count
    increment: (state) => {
      state.count += 1;
    },
    // Decrement the count, ensuring it doesn't go below zero
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    // Reset the count to zero
    reset: (state) => {
      state.count = 0;
    },
    // Set count to a specific value with validation
    setCount: (state, action) => {
      if (typeof action.payload === "number" && action.payload >= 0) {
        state.count = action.payload;
      }
    },
  },
});

// Export actions for use in components
export const { increment, decrement, reset, setCount } = counterSlice.actions;

// Export reducer for store configuration
export default counterSlice.reducer;
