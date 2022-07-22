import React from 'react'
import Announcement from '../../components/Announcement'
import Navbar from '../../components/Navbar'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import "./product.css"

const Product = () => {
  return (
    <section>
        <Navbar />
        <Announcement />
        <div className="productwrapper">

            {/* Image Container */}
            <div className="productwrapper__imgcontainer">
                <img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </div>

            {/* Info Container */}
            <div className="productwrapper__infocontainer">
                <h1>Denim Jumpsuit</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, beatae. Suscipit, similique dignissimos. Accusantium, provident porro alias minus reiciendis sit voluptatibus! Laudantium quaerat dolorem enim assumenda a iusto quibusdam nihil.</p>
                <span>$20</span>
                <div className="productwrapper__filtercontainer">
                    <div className="productwrapper__filtercontainer-filter">
                        <span className='filtertitle'>Color</span>
                        <div className="filtercolor" color='black'></div>
                        <div className="filtercolor" color='darkblue'></div>
                        <div className="filtercolor" color='gray'></div>
                    </div>

                    <select name="" id="" className='filtercontainer-size'>
                        <option disabled selected> Size </option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                    </select>
                </div>

                <div className="productwrapper__cart">

                    <div className="productwrapper__cart-amountcontainer">
                        <Remove />
                        <span className='cart-amount'>1</span>
                        <Add />
                    </div>
                    <button>ADD TO CART</button>
                </div>
            </div>
        </div>
        <Newsletter />
        <Footer />
    </section>
  )
}

export default Product