import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me3.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>

    <div className="container headercontainer">
        <h5>Hello I'm</h5>
        <h1>Pranjal Sharma</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
          <img src={ME}  alt="me"/>
        </div>

        <a href="#contact" className='scrolldown'>Scroll Down</a>
    </div>
      
    </header>
  )
}

export default Header