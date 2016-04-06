import React from 'react'
import {whiteSection} from '../styles'

function MainWhiteSection ({children}) {
  return (
    <div style={whiteSection}>
      {children}
    </div>
  )
}

export default MainWhiteSection
