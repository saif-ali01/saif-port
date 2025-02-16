import React from 'react'
import "../Css/MySkill.css"

const MySkills = () => {
  const skill = "<My Skills>";
  const skill1 = "</My Skills>";

  return (
    <div className="MySkill" id='skill'>
      <div className="myskill-left">
        <h1>Technical Expertise</h1>
        {skill}
        <br />
        <p>Full-stack developer specializing in modern web technologies with hands-on experience in building scalable applications. Proficient in both frontend and backend development with a strong focus on clean architecture and performance optimization.</p>
        <br />
        <p className='lst'>Experienced in implementing RESTful services. Strong advocate for test-driven development and code quality best practices.</p>
        <br />

        <div className="bottom">
          {skill1}
        </div>
      </div>
      <div className="myskill-right">
        <div className="progressbar">
          <h6>React JS</h6>
          <div className="pb1">
            <div className="pb2" style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className="progressbar">
          <h6>Java</h6>
          <div className="pb1">
            <div className="pb2" style={{ backgroundColor: "rgb(189, 4, 173)", width: "85%" }}></div>
          </div>
        </div>
        <div className="progressbar">
          <h6>Spring Boot</h6>
          <div className="pb1">
            <div className="pb2" style={{ backgroundColor: "rgb(209, 14, 112)", width: "80%" }}></div>
          </div>
        </div>

        <div className="progressbar">
          <h6>Rest API</h6>
          <div className="pb1">
            <div className="pb2" style={{ backgroundColor: "rgba(0, 255, 76, 0.938)", width: "85%" }}></div>
          </div>
        </div>
        <div className="progressbar">
          <h6>MongoDB</h6>
          <div className="pb1">
            <div className="pb2" style={{ backgroundColor: "rgba(255, 158, 11, 0.938)", width: "80%" }}></div>
          </div>
        </div>
        <div className="progressbar">
          <h6>Express JS</h6>
          <div className="pb1">
            <div className="pb2" style={{ backgroundColor: "rgba(17, 250, 250, 0.884)", width: "65%" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MySkills