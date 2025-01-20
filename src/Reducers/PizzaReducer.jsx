import { createSlice } from "@reduxjs/toolkit";
const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    orders: 0,
  },
  reducers: {
    addOrder: (state) => {
      state.orders += 1
    },
    cancelOrder: (state) => {
      state.orders -= 1
    },
    resetOrder: (state) => {
      state.orders = 0;
    }
  }
})
export const { addOrder, cancelOrder, resetOrder } = pizzaSlice.actions;
export default pizzaSlice.reducer