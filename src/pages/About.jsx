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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nemo. Voluptas amet aliquid, sequi at voluptatem odit facere dolore optio. Necessitatibus, eum! Explicabo unde molestias quidem consectetur recusandae, praesentium nisi.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis amet quam ipsa repellendus, quasi qui voluptatem excepturi officia quidem minus.
        </p>
        {about1}
      </div>
      
    </div>
    )
}

export default About