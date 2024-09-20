import React from 'react';
import '../app/globals.css'; // Ensure the correct path

import { useState } from 'react';

const Skills = () => {
  // State to track which subcategory is expanded
  const [openCategory, setOpenCategory] = useState(null);

  // Toggle the category
  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section className="skills-container" id="skills">
      <h2>Skills</h2>
      <div className="grid-categories">
        {/* Programming Languages */}
        <div className="skill-category">
          <h3 onClick={() => toggleCategory('programming')}>Programming Languages</h3>
          <div className={`skill-booklet ${openCategory === 'programming' ? 'open' : ''}`}>
            <div className="skill-card java">
              <i className="fab fa-java"></i>
              <p>Java</p>
            </div>
            <div className="skill-card python">
              <i className="fab fa-python"></i>
              <p>Python</p>
            </div>
            <div className="skill-card js">
              <i className="fab fa-js"></i>
              <p>JavaScript</p>
            </div>
            <div className="skill-card cplusplus">
              <i className="fas fa-code"></i>
              <p>C++</p>
            </div>
          </div>
        </div>

        {/* ML Frameworks */}
        <div className="skill-category">
          <h3 onClick={() => toggleCategory('ml-frameworks')}>ML Frameworks</h3>
          <div className={`skill-booklet ${openCategory === 'ml-frameworks' ? 'open' : ''}`}>
            <div className="skill-card tensorflow">
              <i className="fas fa-brain"></i>
              <p>TensorFlow</p>
            </div>
            <div className="skill-card pytorch">
              <i className="fas fa-brain"></i>
              <p>PyTorch</p>
            </div>
            <div className="skill-card keras">
              <i className="fas fa-brain"></i>
              <p>Keras</p>
            </div>
            <div className="skill-card scikit-learn">
              <i className="fas fa-brain"></i>
              <p>Scikit-learn</p>
            </div>
          </div>
        </div>

        {/* Embedded Tools */}
        <div className="skill-category">
          <h3 onClick={() => toggleCategory('embedded-tools')}>Embedded Tools</h3>
          <div className={`skill-booklet ${openCategory === 'embedded-tools' ? 'open' : ''}`}>
            <div className="skill-card rpi">
              <i className="fas fa-microchip"></i>
              <p>Raspberry Pi</p>
            </div>
            <div className="skill-card vlsi">
              <i className="fas fa-microchip"></i>
              <p>VLSI Design</p>
            </div>
            <div className="skill-card arduino">
              <i className="fas fa-microchip"></i>
              <p>Arduino</p>
            </div>
            <div className="skill-card embedded-c">
              <i className="fas fa-microchip"></i>
              <p>Embedded C</p>
            </div>
          </div>
        </div>

        {/* Cloud/Containerization Tools */}
        <div className="skill-category">
          <h3 onClick={() => toggleCategory('cloud')}>Cloud & Containerization</h3>
          <div className={`skill-booklet ${openCategory === 'cloud' ? 'open' : ''}`}>
            <div className="skill-card aws">
              <i className="fab fa-aws"></i>
              <p>AWS</p>
            </div>
            <div className="skill-card azure">
              <i className="fab fa-microsoft"></i>
              <p>Azure</p>
            </div>
            <div className="skill-card docker">
              <i className="fab fa-docker"></i>
              <p>Docker</p>
            </div>
            <div className="skill-card kubernetes">
              <i className="fas fa-cloud"></i>
              <p>Kubernetes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Skills;
