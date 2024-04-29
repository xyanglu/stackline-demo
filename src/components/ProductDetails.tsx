import { Product } from '../models/Product'
import React from 'react'
import '../styles/ProductDetails.css'

interface ProductDetailsProps {
  product: Product
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <>
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <h1>{product.title}</h1>
      <p class="gray-text">{product.subtitle}</p>
      <div className="tags-container">
        {product.tags.map((tag, index) => (
          <div className="tag" key={index}>
            {tag}
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductDetails
