import React from 'react'
import "../Css/Main.css"
import About from './About'
import Home from './Home'
import MySkills from './MySkills'
import Project from './Project'
import Contact from './Contact'
import Education from './Education'
const Main = () => {
  return (
  <div className="Main" id='main'>
      <Home />
      <About />
      <MySkills /> 
       <Education />
      <Project />
      <Contact />
  </div>
  )
}

export default Main