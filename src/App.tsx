import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from './redux/store'
import { setProductData } from './redux/store'
import { fetchProductData } from './api'
import ProductDetails from './components/ProductDetails'
import SalesGraph from './components/SalesGraph'
import { Product } from './models/Product'
import Banner from './components/Banner'
import './styles/styles.css'

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const products: Product[] | null = useSelector(
    (state: RootState) => state.products
  )

  useEffect(() => {
    fetchProductData()
      .then((data: Product[]) => {
        const action = setProductData(data)
        dispatch(action)
      })
      .catch(error => {
        console.error('Error fetching product data:', error)
      })
  }, [dispatch])

  if (!products) {
    return <div>Loading...</div>
  }

  return (
    <div className="container">
      <Banner />
      {products.length > 0 ? (
        products.map((product, index) => (
          <>
            <div key={index} style={{ display: 'flex' }}>
              <div className="productDetailsContainer">
                <ProductDetails product={product} />
              </div>
              <div className="salesGraphContainer">
                <SalesGraph salesData={product.sales} />
              </div>
            </div>
          </>
        ))
      ) : (
        <div>No sales data available</div>
      )}
    </div>
  )
}

export default App
