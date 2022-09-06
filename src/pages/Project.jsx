import React from 'react'
import "../Css/Project.css"
const Project = () => {
  const pro = "<Project>";
  const pro1 = "</Project>";

  return (
    <div className='Project' id="project" >
      {pro}
      <div className="pro" >
        <div className="pro1" >
          <h6 style={{color:" #ee5c42ea"}}>Chat App</h6>
          <p className='pp'>Chat web Application using Socket.io</p>
          <a href="#">Code on Github</a>
        </div>
        <div className="pro1" style={{borderTop:"3px solid #18f5f5f9"}}>
          <h6 style={{color:" #18f5f5f9"}}>Rest API</h6>
          <p className='pp'>E-Commerce Rest Api using Node & MongoDB</p>
          <a href="#">Code on Github</a>
        </div>
        <div className="pro1" style={{borderTop:"3px solid #18f548"}}>
          <h6 style={{color:" #18f548"}}> E-Commerce Front-End</h6>
          <p className='pp'>E-Commerce Front-End using reactJS</p>
          <a href="#">Code on Github</a>
        </div>
        <div className="pro1" style={{borderTop:"3px solid #ff09def8"}}>
          <h6 style={{color:" #ff09def8"}}>PortFolio</h6>
          <p className='pp'>PortFolio using ReactJS</p>
          <a href="#">Code on Github</a>
        </div>
        <div className="pro1"style={{borderTop:"3px solid #f5cd18f8"}}>
          <h6 style={{color:" #f5cd18f8"}}>Java</h6>
          <p className='pp'>Upcomming</p>
          <a href="#">Code on Github</a>
        </div>
        <div className="pro1" style={{borderTop:"3px solid #3e4bfff8"}}>
          <h6 style={{color:" #3e4bfff8"}}>Java</h6>
          <p className='pp'>Upcomming</p>
          <a href="#">Code on Github</a>
        </div>

      
      
      </div>
      {pro1}
    </div>
  )
}

export default Project