import React from 'react'
import "../Css/MySkill.css"
const MySkills = () => {
  const skill = "< My Skills>";
  const skill1 = "</My Skills>";
  return (
    <div className="MySkill" id='skill'>
      <div className="myskill-left">
        {skill}
        <h1>Skills.. </h1>
        <br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam impedit ullam, deleniti magni quasi minus ratione atque molestiae exercitationem adipisci quo, explicabo maiores recusandae illum? Corporis, fugit? Obcaecati, et autem.</p>
        <br />
        {skill1}
      </div>
      <div className="myskill-right">
        <div className="progressbar">
           <h6>React JS</h6>
           <div className="pb1">
              <div className="pb2"></div>
           </div>
        </div>
        <div className="progressbar">
           <h6>Java</h6>
           <div className="pb1">
              <div className="pb2" style={{backgroundColor:"rgb(189, 4, 173)" , width:"24rem"}}></div>
           </div>
        </div>
        <div className="progressbar">
           <h6>Node JS</h6>
           <div className="pb1">
              <div className="pb2" style={{backgroundColor:"rgba(17, 250, 250, 0.884)" , width:"22rem"}}></div>
           </div>
        </div>
        <div className="progressbar">
           <h6>Rest API</h6>
           <div className="pb1">
              <div className="pb2" style={{backgroundColor:"rgba(0, 255, 76, 0.938)" , width:"22rem"}}></div>
           </div>
        </div>
        <div className="progressbar">
           <h6>MongoDB</h6>
           <div className="pb1">
              <div className="pb2" style={{backgroundColor:"rgba(255, 158, 11, 0.938)" , width:"24rem"}}></div>
           </div>
        </div>
       
      </div>

    </div>
    )
}

export default MySkills