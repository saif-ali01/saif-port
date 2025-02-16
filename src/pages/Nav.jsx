import React from 'react'
import  '../Css/Nav.css'
import bgImage from "../assets/s1.jpg";

import {Link} from 'react-scroll'
const Nav = () => {
  return (
<div className="Nav">
<Link  to="main" spy={true} smooth={true} offset={50} duration={500}><div className="logo"><img src={bgImage} className='imgg' alt="" /></div></Link>
    <div className="items">
        <Link className='item active' to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
        <Link className='item' to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
        <Link className='item' to="skill" spy={true} smooth={true} offset={50} duration={500}>Skills</Link>
        <Link className='item' to="education" spy={true} smooth={true} offset={50} duration={500}>Education</Link>
        <Link className='item' to="project" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
        <Link className='item' to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
    </div>
</div>
    )
}

export default Nav