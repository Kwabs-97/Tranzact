//Per request safe redux store creation
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cart-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
};
