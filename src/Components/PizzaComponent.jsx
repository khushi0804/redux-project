import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, cancelOrder, resetOrder } from '../Reducers/PizzaReducer';
 
function PizzaComponent() {
  const orders = useSelector((state) => state.pizza.orders);
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Pizza Orders</h1>
      <p className="text-xl mb-4">Current Orders: {orders} </p>
      <div className="flex gap-4">
        <button onClick={()=> dispatch(addOrder())}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Order
        </button>
        <button
        onClick={()=>dispatch(cancelOrder())}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Cancel Order
        </button>
        <button
        onClick={()=>dispatch(resetOrder())}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Reset Orders
        </button>
      </div>
    </div>
  );
}

export default PizzaComponent