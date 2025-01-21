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
        
        <p>Hi, I’m Shamita Naidu! I’m a tech enthusiast with a passion for solving real-world problems through AI and machine learning. With a strong foundation in Python, cloud platforms like AWS, and tools like Docker, I love tackling challenges head-on and delivering solutions that don’t just work—they shine. Oh, and I’m always looking for the next exciting project to push the boundaries of what technology can do! 🚀</p>
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
