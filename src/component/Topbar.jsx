import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../Css/Topbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import bgImage from "../assets/logo.png";


const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="Topbar">
      <div className="topbar-content">
        <Link 
          to="main" 
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={500} 
          onClick={closeMenu}
        >
          <div className="logo">
            <img src={bgImage} className='topbar-img' alt="logo" />
          </div>
        </Link>

        <button className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            className='nav-item' 
            to="home" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            className='nav-item' 
            to="about" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            className='nav-item' 
            to="skill" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link 
            className='nav-item' 
            to="education" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
            onClick={closeMenu}
          >
            Education
          </Link>
          <Link 
            className='nav-item' 
            to="project" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            className='nav-item' 
            to="contact" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;