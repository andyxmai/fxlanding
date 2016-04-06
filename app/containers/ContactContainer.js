import React, { Component } from 'react'
import Contact from '../components/Contact'
import axios from 'axios'

class ContactContainer extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      description: '',
      messageType: '',
      isSending: false
    }
  }

  handleSubmitContact (e) {
    e.preventDefault();
    const { name, email, description } = this.state;
    console.log(name, email, description);
    this.setState({
      isSending: true
    })
    // email to me
    axios.post('/email', {
      name,
      email,
      description
    }).then((response) => {
      this.setState({
        messageType: 'success',
        isSending: false
      })
    }).catch((response) => {
      this.setState({
        messageType: 'failed',
        isSending: false
      })
    })
  }

  handleUpdateName (e) {
    this.setState({
      name: e.target.value
    })
  }

  handleUpdateEmail (e) {
    this.setState({
      email: e.target.value
    })
  }

  handleUpdateDescription (e) {
    this.setState({
      description: e.target.value
    })
  }

  render () {
    return (
      <Contact
        onSubmitContact={(e) => this.handleSubmitContact(e)}
        onUpdateName={(e) => this.handleUpdateName(e)}
        onUpdateEmail={(e) => this.handleUpdateEmail(e)}
        onUpdateDescription={(e) => this.handleUpdateDescription(e)}
        messageType={this.state.messageType}
        isSending={this.state.isSending}
        name={this.state.name}
        email={this.state.email}
        description={this.state.description} />
    )
  }
}

export default ContactContainer
