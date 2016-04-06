import React from 'react'
import { Link } from 'react-router'
import { transparentBg, title, subtitle, transparentButton, sections, halfWidth, contact } from '../styles'
import MainContainer from './MainContainer'
import MainWhiteSection from './MainWhiteSection'
import MainGraySection from './MainGraySection'
import ContactContainer from '../containers/ContactContainer'

function Home () {
  return (
    <div className='col-sm-12 text-center' style={sections}>
      <MainContainer>
        <h1 style={title}>Get back money that is yours</h1>
        <p style={subtitle}>Foreign exchange risks can cost you 10% of your revenue when working with foreign clients. Unknowningly.</p>
        <a type='button' href='#learn' id="learn" className='btn btn-lg btn-success' style={transparentButton}>Learn More</a>
      </MainContainer>
      <MainWhiteSection>
        <h3 id="first">There are risks when you deal with foreign currencies because of exchange rate volatilities</h3>
      </MainWhiteSection>
      <MainGraySection>
        <h3 style={halfWidth}>By settling in your clients’ native currencies, they have effectively transferred the foreign exchange risk to you</h3>
      </MainGraySection>
      <MainWhiteSection>
        <h3>Fortunately, you can safeguard the risk and get back any money you lose. Our technology detects unfavorable exchange rate flucutations and makes sure your bottom line stays intact</h3>
      </MainWhiteSection>
      <ContactContainer />
    </div>
  )
}

export default Home
