import React from 'react'
import {team} from '../styles'

function TeamSection ({children}) {
  return (
    <div style={team}>
      {children}
    </div>
  )
}

export default TeamSection
