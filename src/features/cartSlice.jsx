import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProduct: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartProduct.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartProduct.push({ ...product, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += product.price;
    },

    removeProductFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartProduct.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.cartProduct = state.cartProduct.filter((item) => item.id !== id);
      }
    },
    removeAllProducts: (state, action) => {},

    addQuantity: (state, action) => {},
    removeQuantity: (state, action) => {},
    clearQuantity: (state, action) => {},
  },
});

export const CartReducer = cartSlice.reducer;
export const {
  addProductToCart,
  removeProductFromCart,
  removeAllProducts,
  addQuantity,
  clearQuantity,
} = cartSlice.actions;
