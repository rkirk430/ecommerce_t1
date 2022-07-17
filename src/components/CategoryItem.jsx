import React from 'react'
import './categoryitem.css'


const CategoryItem = ({item}) => {
  return (
    <div className="categoryitem__container">
        <img src={item.img} className="categoryitem__container-image" />
        <div className="categoryitem__container-info">
            <div className="categoryitem__container-infotitle">
                {item.title}
            </div>
            <button className='categoryitem__container-infobutton'>Shop Now</button>
        </div>
    </div>  


  )
}

export default CategoryItem