import React from 'react'
import {hero} from '../styles'

function MainContainer ({children}) {
  return (
    <div style={hero}>
      {children}
    </div>
  )
}

export default MainContainer
