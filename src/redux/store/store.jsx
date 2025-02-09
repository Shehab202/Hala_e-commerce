import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlise";
import cartSlice from '../slices/CartSlice'
const store = configureStore({
  reducer: {
    product: productSlice,
    cart:cartSlice
  },
});

export default store;
