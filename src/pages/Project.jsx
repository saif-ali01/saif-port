import React from 'react'
import "../Css/Project.css"
const Project = () => {
  const pro = "<Project>";
  const pro1 = "</Project>";

  return (
    <div className='Project' id="project" >
      {pro}
        <h1>Projects</h1>
      <div className="pro" >
        <div className="pro1" >
          <h6 style={{ color: " #ee5c42ea" }}>User Authentication </h6>
          <p className='pp'>React.js-based project that implements user authentication features, including Sign Up, Sign In, Forgot Password, and OTP-based verification. </p>
          <div className="">
            <a href="https://loginpage01x.netlify.app" target="_blank" rel="noopener noreferrer">Demo</a>
            <a href="https://github.com/saif-ali01/login-registration-reactapp" target="_blank" rel="noopener noreferrer">Code on Github</a>
          </div>
        </div>
        <div className="pro1" style={{ borderTop: "3px solid #f5cd18f8" }}>
          <h6 style={{ color: " #f5cd18f8" }}>Spring Boot API</h6>
          <p className='pp'>A Spring Boot backend project for user authentication, featuring login, registration, and OTP-based email verification.</p>
          <a href="https://github.com/saif-ali01/userAuth" target="_blank" rel="noopener noreferrer">Code on Github</a>
        </div>
        <div className="pro1" style={{ borderTop: "3px solid #18f5f5f9" }}>
          <h6 style={{ color: " #18f5f5f9" }}>E-Commerce Rest API</h6>
          <p className='pp'>Experience a robust E-Commerce REST API built with Node.js and MongoDB, offering seamless product management, user authentication, and order processing. Designed for scalability and performance, it provides a secure backend solution for modern online stores.</p>
          <a href="https://github.com/saif-ali01/NodeJS-Ecommerce-API" target="_blank" rel="noopener noreferrer">Code on Github</a>
        </div>
        <div className="pro1" style={{ borderTop: "3px solid #18f548" }}>
          <h6 style={{ color: " #18f548" }}>Blogging Web app</h6>
          <p className='pp'>A blogging platform built with ReactJS, offering a seamless reading experience with clean design . Explore insightful articles, and easy navigation for an engaging user journey</p>
          <a href="https://github.com/saif-ali01/BloggingWebApp" target="_blank" rel="noopener noreferrer">Code on Github</a>
        </div>
        <div className="pro1" style={{ borderTop: "3px solid #ff09def8" }}>
          <h6 style={{ color: " #ff09def8" }}>My PortFolio</h6>
          <p className='pp'>Explore my portfolio website built with ReactJS, showcasing my skills, projects. Designed with a modern, responsive layout and interactive components. Connect with me through the integrated contact form and explore my work in web development and design.</p>
          <a href="https://github.com/saif-ali01/portfolio" target="_blank" rel="noopener noreferrer">Code on Github</a>
        </div>
      </div>
      {pro1}
    </div>
  )
}

export default Project