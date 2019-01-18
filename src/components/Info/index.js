import React, { Component } from 'react'

export default class extends Component {
  render () {
    return (
      <section className='hero firstSec section colored' id='home' >
        <div className='container'>
          <div className='col-xs-6 col-md-4 profilePic'>
            <img src='images/me.jpg' alt='Me' className='img-circle' />
          </div>
          <div className='heading'>
            <h1>{this.props.name}</h1>
            <h3>{this.props.jobPosition}</h3>
            <a target='_blank' rel='noopener noreferrer' href={this.props.linkedinUrl} className='borderBtn'>DOWNLOAD RESUME</a>
          </div>
        </div>
      </section>
    )
  }
}
