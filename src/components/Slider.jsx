import React from 'react'
import './slider.css'
import { useState } from "react";
import { sliderItems } from "../data";
import { ArrowLeftOutlined, ArrowRightOutlined, InsertEmoticon } from '@mui/icons-material';



const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }
  return (
    <div className="slider__container">

        {/* Left Arrow  */}
        <div className="slider__container-arrowleft" direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
        </div>


        <div className="slider__container-wrapper" slideIndex={slideIndex}>

        {/* Slider 1  */}
            {sliderItems.map(item=>(
            <div className="slider__container-wrapperslider"> {item.bg}
                <div className="image">
                    <img src={item.img} alt="" />

                </div>
                <div className="info">
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
        ))}
            {/* Slider 2 */}
            <div className="slider__container-wrapperslider">
                <div className="image">
                    <img src="https://i.pinimg.com/736x/7c/77/37/7c77370ec9cbdb15e3dbfb53f68d964a.jpg" alt="" />

                </div>
                <div className="info">
                    <h1>WINTER IS COMING</h1>
                    <p>20% OFF SALE ITEMS</p>
                    <button>SHOP NOW</button>
                </div>
            </div>



        </div>
        <div className="slider__container-arrowright" direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
        </div>



    </div>
  )
}

export default Slider