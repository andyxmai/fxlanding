import React from 'react'
import Scroll from 'react-scroll'
import { navbar, navbarList, navbarListContainer, logoContainer } from '../styles'

var Link    = Scroll.Link;

function Header () {
  return (
    <div className='container' style={navbar}>
      <div style={logoContainer}>
        <h3 style={{color: '#65B1AC'}}>JumpFloat</h3>
      </div>
      <div style={navbarListContainer}>
        <ul style={navbarList}>
          <li><Link href to="firstSection" spy={true} smooth={true} offset={-50} duration={500}>About</Link></li>
          <li><Link href to="team" spy={true} smooth={true} offset={-50} duration={500}>Team</Link></li>
          <li><Link href to="contact" spy={true} smooth={true} offset={-50} duration={500}>Contact</Link></li>
          <li><Link href to="http://blog.jumpfloat.com">Blog</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
