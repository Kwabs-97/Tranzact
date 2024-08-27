import { createSlice } from "@reduxjs/toolkit";

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
const initialState = {
  value: 0,
};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    addToCart: (state) => {
      state.value += 1;
    },
    removeFromCart: (state) => {
      state.value += -1;
    },
  },
});

// Export the generated action creators for use in components
export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.value;

// Export the slice reducer for use in the store configuration
export default cartSlice.reducer;
