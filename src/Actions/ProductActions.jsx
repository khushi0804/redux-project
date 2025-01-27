import axios from "axios";
import { getproducts } from "../Reducers/ProductReducer";

export const asyncgetproducts = () => async (dispatch, getState) => {
  try {
    console.log(getState());
    const res = await axios.get('https://fakestoreapi.com/products');
    dispatch(getproducts(res.data))
  }
  catch (err) {
    console.log(err);
  }

}