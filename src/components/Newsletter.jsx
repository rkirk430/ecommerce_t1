import React from 'react'

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
            <input placeholder='Your Email'/>
            <button className='newsletter__container-button'/>
        </div>
    </div>
  )
}

export default Newsletter