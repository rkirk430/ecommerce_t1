import { Circle, FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'

const Product = ({item}) => {
  return (
    <div className="product__container">
        <div className="product__container-circle">
            <Circle />
        </div>
        <img src={item.img} className="product__container-img" />

        <div className="product__container-info">

            <div className="product__container-infoicon">
                <ShoppingCartOutlined />
            </div>

            <div className="product__container-infoicon">
                <SearchOutlined />
            </div>

            <div className="product__container-infoicon">
                <FavoriteBorderOutlined />
            </div>

        </div>


    </div>
  )
}

export default Product