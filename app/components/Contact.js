import React, { PropTypes } from 'react'
import { contact, form, formHeading } from '../styles'

function Contact ({onSubmitContact, onUpdateName, onUpdateEmail, onUpdateDescription, messageType, isSending, name, email, description}) {
  return (
    <div id='contact' style={contact}>
      <div style={formHeading}>
        <h2 style={{color: 'white', marginBottom: '25px'}}>Take the first step</h2>
        <p style={{width: '40%'}}>Working with foreign clients? Dealing with multiple foreign currencies in your business? You are most likely exposed to foreign exchange risks. Contact us to see how we can help you.</p>
      </div>
      {(() => {
        switch (messageType) {
          case "success":   return <div className="alert alert-success" role="alert"><b>Success!</b> We will get back to you within a day</div>
          case "failed": return <div className="alert alert-danger" role="alert">Something went wrong. Please try again</div>
          default:      return ''
        }
      })()}
      <form className="form-horizontal" style={form} onSubmit={onSubmitContact}>
        <div className="form-group" style={{width: '40%'}}>
          <label className="col-sm-3 control-label">Name</label>
          <div className="col-sm-9">
            <input type="text" className="form-control input-lg" id="name" placeholder="Name" onChange={onUpdateName} />
          </div>
        </div>
        <div className="form-group" style={{width: '40%'}}>
          <label className="col-sm-3 control-label">Email</label>
          <div className="col-sm-9">
            <input type="email" className="form-control input-lg" id="inputEmail3" placeholder="Email" onChange={onUpdateEmail} />
          </div>
        </div>
        <div className="form-group" style={{width: '40%'}}>
          <label className="col-sm-3 control-label">Description</label>
          <div className="col-sm-9">
            <textarea className="form-control input-lg" rows="5" placeholder="Briefly describe your project and how you are dealing with foreign currencies.." onChange={onUpdateDescription} ></textarea>
          </div>
        </div>
        <div className="form-group" style={{width: '40%'}}>
          <div className="col-sm-10">
            <button type="submit" className="btn btn-lg btn-warning" disabled={!description || !name || !email || isSending }>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

Contact.propTypes = {
  onSubmitContact: PropTypes.func.isRequired,
  onUpdateName: PropTypes.func.isRequired,
  onUpdateEmail: PropTypes.func.isRequired,
  onUpdateDescription: PropTypes.func.isRequired,
  messageType: PropTypes.string.isRequired,
  isSending: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Contact
