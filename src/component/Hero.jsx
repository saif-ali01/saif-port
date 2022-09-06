import React from 'react'
import "../Css/Hero.css"
const Hero = () => {
  const home = "<Home>";
  const home1 = "</Home>";

  return (
    <div className="Hero">
      <div className="left">
          {home}
        <div className="main">
        <h3><span>H</span>ey!</h3>
        <h2>I'm  <span className='saif'>Saif</span>, </h2>
        <p>web developer</p>
        </div>
      {home1}
      </div>
      <div className="right">
        <img src="./bp1.jpg" alt="no img" />
      </div>
    </div>
  )
}

export default Hero