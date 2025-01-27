import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
}
export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getproducts: (state, action) => {
      console.log(action);
      state.products = action.payload

    }
  }
})
export const { getproducts } = ProductSlice.actions;
export default ProductSlice.reducer