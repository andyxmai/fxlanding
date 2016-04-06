import React from 'react'
import { graySection } from '../styles'

function MainGraySection ({children}) {
  return (
    <div style={graySection}>
      {children}
    </div>
  )
}

export default MainGraySection
