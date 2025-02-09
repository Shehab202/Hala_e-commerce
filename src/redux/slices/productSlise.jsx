import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: null,
    isLoading: false,
  },
  reducers: {
    setProduct(state, action) {
      state.product = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
    loading(state) {
      state.isLoading = true;
    },
    cleareLoading(state) {
      state.isLoading = false;
    },
  },
});
export const { setProduct, setProducts, loading, cleareLoading } =
  productSlice.actions;
export default productSlice.reducer;
