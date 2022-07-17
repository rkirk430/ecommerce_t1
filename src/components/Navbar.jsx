import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';



const Navbar = () => {
  return (
    <div className='nav__container'>
      <div className="nav__container-wrapper">
        <div className="nav__left">
          <div className="nav__left-language">
            EN
          </div>
          <div className="nav__left-search">
            <SearchIcon />
          </div>
        </div>
        <div className="nav__center">
          Center
        </div>
        <div className="nav__right">
          Right
        </div>
      </div>
    </div>
  )
}

export default Navbar