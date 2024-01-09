import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0, // Add totalPrice to the initial state
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      // Recalculate total price when adding an item to the cart
      state.totalPrice = state.products.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );

      // Recalculate total price when removing an item from the cart
      state.totalPrice = state.products.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
    resetCart: (state) => {
      state.products = [];
      state.totalPrice = 0; // Reset total price when resetting the cart
    },
    updateQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      const productToUpdate = state.products.find(
        (item) => item.id === productId
      );

      if (productToUpdate) {
        productToUpdate.quantity = newQuantity;

        // Recalculate total price when updating quantity
        state.totalPrice = state.products.reduce(
          (total, item) => total + item.quantity * item.price,
          0
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
