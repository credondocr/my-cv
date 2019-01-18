import React, { Component } from 'react'

export default class extends Component {
  render () {
    var hobbies = this.props.hobbies
    return (
      <section className='services section' id='about'>
        <div className='container'>
          <div className='divider' />
          <div className='heading wow bounceInUp'>
            <h2>HERE'S WHAT I'M DOING</h2>
            <p>
              {this.props.description}
            </p>
            <p>
              <strong>
                {this.props.slogan}
              </strong>
            </p>
          </div>
          <div className='services-inner hidethis'>
            {hobbies.map((hobbie) => {
              return (
                <div className='service col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                  <p className='icon'><i className={hobbie.icon} /></p>
                  <h3>{hobbie.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
