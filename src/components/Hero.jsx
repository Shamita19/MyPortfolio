import React from 'react';
import '../app/globals.css'; // Ensure the correct path
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <img src="/Shamita-profile.jpeg" alt="Profile" className="profile-img" />
      <div className="hero-text">
        <h2>Hello! I'm Shamita Naidu</h2>
        <p>
        <Typewriter
          options={{
            strings: ['Developer', 'AI/ML Engineer', 'Problem Solver', 'Researcher'],
            autoStart: true,
            loop: true,
          }}
        />
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/shamita-naidu-7555101b9/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Shamita19" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
