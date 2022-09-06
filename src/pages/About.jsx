import React from 'react'
import "../Css/About.css"
const About = () => {
  const about = "<About>";
  const about1 = "</About>";

  return (
    <div className="About" id='about'>
      <div className="About-left">
        <div className="about-image">

        <img src="./bp4.jpg" alt="" />
        </div>

</div>
      <div className="About-right">
        {about}
        <h1>Me & My Self</h1>
        <p>I’m a Marn  stack Developer located in India. I have a serious passion for building Web Applicatin, Rest API and creating intuitive, dynamic user experiences..
          <br />
          <br />
          -- Well-organised person, <br />--  problem solver, <br />-- creative person.
        </p>
        <br />
        {about1}
      </div>
      
    </div>
    )
}

export default About