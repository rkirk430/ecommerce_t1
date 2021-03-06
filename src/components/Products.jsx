import React from 'react'
import { popularProducts } from "../data";
import Product from "./Product";
import './products.css'


const Products = () => {
  return (
    <div className="products__container">
        {popularProducts.map((item) => (
            <Product item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Products