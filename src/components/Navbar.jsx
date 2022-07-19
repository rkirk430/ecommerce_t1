import React from 'react'
import './navbar.css'
import { Search } from '@mui/icons-material';
import styled from 'styled-components';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const Navbar = () => {
  return (
    <div className='nav__container'>
      <div className="nav__container-wrapper">

        <div className="nav__left">
          <div className="nav__left-language">
            EN
          </div>

          <div className="nav__left-search">
            <div className="nav__left-searchinput">
              <input placeholder='Search'/>
            </div>
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>

        </div>


        <div className="nav__center">
          <h1 className="nav__center-logo">
            LAMA.
          </h1>
        </div>

        <div className="nav__right">
            <div className='nav__right-menuitem'>REGISTER</div>
            <div className='nav__right-menuitem'>SIGNIN</div>
            <div>
              <Badge badgeContent={4} color="primary" className='nav__right-menuitem'>
                <ShoppingCartOutlinedIcon />
              </Badge>  
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar