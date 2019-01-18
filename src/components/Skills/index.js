import React, { Component } from 'react'

export default class extends Component {
  render () {
    var skills = this.props.skills
    return (
      <section className='skills section colored' id='skills'>
        <div className='container'>
          <div className='divider' />
          <div className='heading'>
            <h2>TECHNICAL SKILLS</h2>
          </div>
          <div id='skills-slide'>
            {skills.map((skill, index) => {
              return (
                <div className='skill' key={index}>
                  <span className='chart' data-percent={skill.percent}>
                    <span className='percent' />
                  </span>
                  <h4>{skill.title}</h4>
                  <p>{skill.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
