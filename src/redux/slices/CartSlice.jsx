import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems:
      localStorage.getItem("cart") !== null
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const isExist = state.cartItems.find((e) => e.id === newItem.id);
      if (isExist) {
        state.cartItems = state.cartItems.map((e) =>
          e.id === newItem.id ? newItem : e
        );
      } else {
        state.cartItems = [...state.cartItems, newItem];
      }

      toast.success("Added To Shopping Cart");
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((e) => e.id !== action.payload);
      toast.success("Deleted");
    },
  },
});
export const { addToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
