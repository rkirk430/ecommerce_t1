import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'


const Home = () => {
  return (
    <>
        <Announcement />
        <Navbar />
        <Categories />
        <Products />
    </>
  )
}

export default Home