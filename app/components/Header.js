import React from 'react'
import { navbar } from '../styles'

function Header () {
  return (
    <div className='container' style={navbar}>
      <h3 style={{color: 'white'}}>FX Risk Management</h3>
    </div>
  )
}

export default Header
