import { configureStore } from "@reduxjs/toolkit";
import PizzaReducer from '../Reducers/PizzaReducer'
export const store = configureStore({
  reducer: {
    pizza: PizzaReducer,
  }
})

export default store