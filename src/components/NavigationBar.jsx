import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../app/globals.css'; // Ensure the correct path

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-container">
      <div className="navbar-container">
        <Link
          className="logo"
          to="home"
          smooth={true}
          duration={500}
          onClick={() => scroll.scrollToTop()}
        >
        </Link>
        <div className="menu-icon" onClick={toggleNav}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              className="nav-links"
              to="about-container"
              smooth={true}
              duration={500}
              onClick={toggleNav}
            >
              About
            </Link>
          </li>
          
          <li className="nav-item">
            <Link
              className="nav-links"
              to="skills"
              smooth={true}
              duration={500}
              onClick={toggleNav}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-links"
              to="projects"
              smooth={true}
              duration={500}
              onClick={toggleNav}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-links"
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleNav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
