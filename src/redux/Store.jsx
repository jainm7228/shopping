import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
