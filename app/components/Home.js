import React from 'react'
import Scroll from 'react-scroll'
import { transparentBg, title, subtitle, transparentButton, sections, halfWidth, contact, teamInfo } from '../styles'
import MainContainer from './MainContainer'
import MainWhiteSection from './MainWhiteSection'
import MainGraySection from './MainGraySection'
import TeamSection from './TeamSection'
import ContactContainer from '../containers/ContactContainer'

var Link    = Scroll.Link;
var Element = Scroll.Element;

function Home () {
  return (
    <div className='col-sm-12 text-center' style={sections}>
      <MainContainer>
        <h1 style={title}>Get back money that is yours</h1>
        <p style={subtitle}>Foreign exchange risks can cost you 10% of your revenue when dealing with foreign currencies. Unknowningly.</p>
        <Link to="firstSection" spy={true} smooth={true} offset={-60} duration={500}><button className='btn btn-lg btn-success' style={transparentButton}>Learn More</button></Link>
      </MainContainer>
      <MainWhiteSection>
        <Element name="firstSection" className="element">
          <h3 id="first">There are risks when you deal with foreign currencies because of exchange rate volatilities</h3>
        </Element>
      </MainWhiteSection>
      <MainGraySection>
        <h3 style={halfWidth}>By settling in your clients’ native currencies, they have effectively transferred the foreign exchange risk to you</h3>
      </MainGraySection>
      <MainWhiteSection>
        <h3>Fortunately, you can safeguard the risk and get back any money you lose. We tailor strategies just for your business to make sure your bottom line stays protected</h3>
      </MainWhiteSection>
      <Element name="team" className="element">
        <TeamSection>
          <h2 style={{color: 'white'}}>Who we are</h2>
          <h4 style={teamInfo}>
            We are a team of Silicon Valley engineers who have experience building large-scale technology platforms and trading financial instruments on Wall Street.
          </h4>
        </TeamSection>
      </Element>
      <ContactContainer />
    </div>
  )
}

export default Home
