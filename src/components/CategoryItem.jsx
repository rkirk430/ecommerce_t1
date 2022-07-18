import React from 'react'
import './categoryitem.css'


const CategoryItem = ({item}) => {
  return (
    <div className="categoryitem__container">
        <img src={item.img} className="categoryitem__container-image" />
        <div className="categoryitem__container-info">
            <h1 className="categoryitem__container-infotitle">
                {item.title}
            </h1>
            <button className='categoryitem__container-infobutton'>Shop Now</button>
        </div>
    </div>  


  )
}

export default CategoryItem