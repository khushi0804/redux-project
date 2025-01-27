import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getproducts } from '../Reducers/ProductReducer';
import { asyncgetproducts } from '../Actions/ProductActions';

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products || { products: [] })
  useEffect(() => {
    // dispatch(getproducts())
    dispatch(asyncgetproducts())
  }, [dispatch])
  return (
    <div>
      <h1>Products</h1>
      {/* Check if products exist and map over them */}
      {products && products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading products...</p>
      )}
    </div>  )
}

export default Products