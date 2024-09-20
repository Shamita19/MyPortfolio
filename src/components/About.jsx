import React from 'react';
import '../app/globals.css'; // Ensure the correct path

const About = () => {
  return (
    <section className="about-container" id="about">
      <h2>About Me</h2>
      <div className="flex-about">
        {/* Card 1 */}
        <div className="card">
          <div className="card-inner">
            {/* Front Face */}
            <div className="card-front">
              <h3>About</h3>
            </div>
            {/* Back Face */}
            <div className="card-back">
              <p>
              Hey! I’m Sura Sudhir Shamita Naidu, a Machine Learning enthusiast with a Master's in Computer Engineering from George Mason University. I'm passionate about transforming technology beyond mere lines of code. 
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-inner">
            {/* Front Face */}
            <div className="card-front">
              <h3>Experience</h3>
            </div>
            {/* Back Face */}
            <div className="card-back">
              <p>
              I've worked on AI and data engineering, enhancing healthcare chatbots at Healthi AI and optimizing data workflows at Tata Consultancy Services.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-inner">
            {/* Front Face */}
            <div className="card-front">
              <h3>Fun Facts</h3>
            </div>
            {/* Back Face */}
            <div className="card-back">
              <p>
              When I'm not coding, I love exploring new cities, hiking, and catching sunsets. Travel sparks my creativity and influences my work. Baking is my other passion—my second lab—where I experiment with new recipes, always with music playing in the background.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
