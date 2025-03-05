import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    cartProduct: [],
    totalQuantity: 0,
    totalPrice: 0,
    isLoading: false,
    isError: false,
  },

  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      console.log("product is added ", product);
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
      const productId = action.payload;
      console.log("product is removed ", productId);
      console.log("Cart Before Removing: ", state.cartProduct);
      console.log("Trying to remove ID: ", productId);

      const existingItem = state.cartProduct.find(
        (item) => item.id === productId
      );
      console.log("product in existingItem ", existingItem);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= existingItem.price;
        } else {
          state.totalQuantity -= existingItem.quantity;
          state.totalPrice -= existingItem.price * existingItem.quantity;

          state.cartProduct = state.cartProduct.filter(
            (item) => item.id !== productId
          );
        }

        console.log("Cart After Removing: ", state.cartProduct);
      }
    },
    removeAllProducts: (state) => {
      state.cartProduct = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },

    addQuantity: (state, action) => {},
    removeQuantity: (state, action) => {},
    clearQuantity: (state, action) => {},
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.isLoading = true;
        state.data = [];
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        console.error("ERROR", action.payload);
        state.isError = true;
        state.data = [];
      });
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
