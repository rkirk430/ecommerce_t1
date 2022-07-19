import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer__container">
        <div className="footer__left">
            <h1 className="footer__left-logo">
                LAMA.
            </h1>

            <div className="footer__left-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam enim iusto nulla rem molestias laudantium, architecto ipsam illo. Nobis officiis iusto alias esse vel provident nisi obcaecati non exercitationem aperiam!</div>

            <div className="footer__left-socials">
                <div className="footer__left-socialfb"><Facebook/></div>
                <div className="footer__left-socialig"><Instagram/></div>
                <div className="footer__left-socialtwt"><Twitter/></div>
                <div className="footer__left-socialpins"><Pinterest/></div>
            </div>

        </div>

        <div className="footer__center">

        </div>

        <div className="footer__right">

        </div>
    </div>
  )
}

export default Footer