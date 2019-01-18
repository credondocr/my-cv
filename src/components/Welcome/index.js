import React, { Component } from 'react'

export default class extends Component {
  render () {
    var frames = this.props.welcome.frames
    return (
      <section id='welcome'>
        <div id='slides'>
          <div className='overlay' />
          <div className='slides-container'>
            {frames.map((frame) => {
              return <img src={frame} alt='1' />
            })}
          </div>
          <nav className='slides-navigation'>
            <a href='#nothing' rel='noopener noreferrer' className='next' />
            <a href='#nothing' rel='noopener noreferrer' className='prev' />
          </nav>
          <div className='welcome-message'>
            <div className='heading'>
              <p>HI, I am {this.props.welcome.name}</p>
              <p className='small'>{this.props.welcome.job} from {this.props.welcome.country}</p>
            </div>
            <a href='#home' className='borderBtn scrollto'>MORE ABOUT ME</a>
          </div>
        </div>
      </section>
    )
  }
}
