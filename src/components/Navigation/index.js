import React, { Component } from 'react'

export default class extends Component {
  render () {
    return (
      <div className='navbar navbar-flat'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <a href='#nothing' rel='noopener noreferrer' className='navbar-brand'>MENU</a>
          </div>
          <div className='navbar-collapse collapse'>
            <nav>
              <ul className='nav navbar-nav' role='menu'>
                <li className='active'>
                  <a href='#welcome' className='scrollto'>HOME</a>
                </li>
                <li>
                  <a href='#about' className='scrollto'>ABOUT</a>
                </li>
                <li>
                  <a href='#skills' className='scrollto'>SKILLS</a>
                </li>
                <li>
                  <a href='#experience' className='scrollto'>EXPERIENCE</a>
                </li>
                <li>
                  <a href='#contact' className='scrollto'>CONTACT</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
