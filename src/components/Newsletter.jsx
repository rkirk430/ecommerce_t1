import { Send } from '@mui/icons-material'
import React from 'react'
import "./newsletter.css"

const Newsletter = () => {
  return (
    <div className="newsletter__container">
        <h1 className="newsletter__container-header">
            Newsletter
        </h1>

        <div className="newsletter__container-text">
            Get timely updates from your favorite products.
        </div>

        <div className="newsletter__container-inputs">
            <div className="inputtag">
                <input placeholder='Your Email'/>
            </div>
            <button className='newsletter__container-button'><Send /></button>
        </div>
    </div>
  )
}

export default Newsletter