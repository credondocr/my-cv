import React, { Component } from 'react'

export default class extends Component {
  render () {
    var socialMedia = this.props.socialMedia
    return (
      <footer className='section'>
        <div className='container'>
          <p>&copy; {this.props.year} {this.props.domain} All Rights Reserved.</p>
          <ul>
            {socialMedia.map((media, index) => {
              return (
                <li key={index}>
                  <a target='_blank' rel='noopener noreferrer' className={media.name} href={media.url} />
                </li>
              )
            })}
          </ul>
        </div>
      </footer>
    )
  }
}
