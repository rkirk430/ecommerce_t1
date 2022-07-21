import React from 'react'
import Announcement from '../../components/Announcement'
import Navbar from '../../components/Navbar'

const Product = () => {
  return (
    <section>
        <Navbar />
        <Announcement />
        <div className="productwrapper">
            <div className="productwrapper__imgcontainer">
                <img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </div>

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
                    <div className="productwrapper__filtercontainer-size">
                        <span className='filtertitle'>Size</span>
                        <div className="filtersize">XS</div>
                        <div className="filtersize">S</div>
                        <div className="filtersize">M</div>
                        <div className="filtersize">L</div>
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Product