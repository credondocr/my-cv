import React, { Component } from 'react'
import './App.css'
import Loader from './components/Loader'
import Welcome from './components/Welcome'
import Navigation from './components/Navigation'
import Info from './components/Info'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import config from './data/config'
class App extends Component {
  render () {
    return (
      <div className='App'>
        <Loader />
        <Welcome welcome={config.welcome} />
        <Navigation />
        <Info jobPosition={config.jobPosition} name={config.name} linkedinUrl={config.linkedinUrl} />
        <AboutMe description={config.description} slogan={config.slogan} hobbies={config.hobbies} />
        <Skills skills={config.skills} />
        <Experience experiences={config.experiences} />
        <Contact contact={config.contact} />
        <Footer socialMedia={config.socialMedia} domain={config.domain} year={(new Date()).getFullYear()} />
      </div>
    )
  }
}

export default App
