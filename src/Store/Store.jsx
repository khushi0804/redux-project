import { configureStore } from "@reduxjs/toolkit";
import PizzaReducer from '../Reducers/PizzaReducer';
import ProductReducer from '../Reducers/ProductReducer'
export const store = configureStore({
  reducer: {
    pizza: PizzaReducer,
    products: ProductReducer,
  }
})

export default store