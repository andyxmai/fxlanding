import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../main.css'
import Header from './Header'

const Main = React.createClass({
  render () {
    return (
      <div className='main-container'>
        <Header />
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

export default Main;
