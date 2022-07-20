import React from 'react'
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import "./productlist.css"

const ProductList = () => {
  return (
    <div className="productlist__container">
      <Navbar />
      <Announcement />
      <h1 className="productlist-title"> Dresses</h1>
      <div className="productlist__filtercontainer">

        {/* Filter Color & Size  */}
        <div className="productlist__filter">
          <span className="productlist__filtertext">
            Filter Products:
          </span>
          <select name="" id="" className="productlist__select">
            <option disabled selected>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
          </select>
          <select name="" id="" className="productlist__select">
            <option disabled selected> Size </option>
            <option> XS </option>
            <option> S </option>
            <option> M </option>
            <option> L </option>
          </select>
        </div>

        {/* Filter Product Sorting */}
        <div className="productlist__filter">
          <span className="productlist__filtertext">
            Sort Products
          </span>
          <select name="" id="" className="productlist__select">
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default ProductList