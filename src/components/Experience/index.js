import React, { Component } from 'react'

export default class extends Component {
  render () {
    var experiences = this.props.experiences
    return (
      <section className='experience section' id='experience'>
        <div className='container'>
          <div className='divider' />
          <div className='heading'>
            <h2>WORK EXPERIENCE</h2>
          </div>
          <div className='row'>
            <div className='timeline'>
              <ul>

                {experiences.map((experience, index) => {
                  return (
                    <li className={index % 2 === 0 ? 'animated' : 'animated odd'} key={index}>
                      <div className='point' />
                      <div className='bubble'>
                        <div className='bubble-arrow' />
                        <p className='date'>{experience.date}</p>
                        <p className='name'>{experience.name}</p>
                        <p className='title'>{experience.title}</p>
                        <p className='highlights'>
                          <h4 className={'titles-experience'}>Highlights</h4>
                          {experience.highlight.map((account, index) => {
                            return (
                              <p key={index}>
                                <strong className={'titles-experience'}><a href={account.url} className={'titles-experience'}>{account.name}</a>: </strong>{account.shortDescription}
                              </p>
                            )
                          })}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
