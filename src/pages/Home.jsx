import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
        <Announcement />
        <Navbar />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </>
  )
}

export default Home