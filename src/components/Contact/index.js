import React, { Component } from 'react'

export default class extends Component {
  render () {
    var phones = this.props.contact.phones
    var emails = this.props.contact.emails
    return (
      <section className='section contact-section active' id='contact'>
        <div className='container contact-box'>
          <div className='center'>
            <div className='section-block contact-block'>
              <div className='block-header'>
                <h2>Contact Me</h2>
                <p>I'll be happy to hear from you</p>
              </div>
              <div className='row contact-infos'>
                <div className='col-sm-4 col-xs-6 '>
                  <div className='contact-info'>
                    <i className='ion-ios-location-outline' />
                    <h4>Address</h4>
                    <p>
                      {this.props.contact.address}
                    </p>
                  </div>
                </div>
                <div className='col-sm-4 col-xs-6'>
                  <div className='contact-info'>
                    <i className='ion-ios-telephone-outline' />
                    <h4>Phone</h4>
                    {phones.map((phone, index) => {
                      return (
                        <p key={index}>
                          {phone}
                        </p>
                      )
                    })}
                  </div>
                </div>
                <div className='col-sm-4 col-xs-12'>
                  <div className='contact-info'>
                    <i className='ion-ios-email-outline' />
                    <h4>Email</h4>
                    {emails.map((email, index) => {
                      return (
                        <p key={index}>
                          {email}
                        </p>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
