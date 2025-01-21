import React from 'react';
import '../app/globals.css'; // Ensure the correct path

import { useState } from 'react';

const Skills = () => {
  return (
    <section class="skills-container" id="skills">
  <h2>Skills</h2>
  <div class="grid-categories">
   
    <div class="skill-category">
      <h3>Programming Languages</h3>
      <div class="skills-grid">
        <div class="skill-card">
          <i class="fab fa-java"></i>
        </div>
        <div class="skill-card">
          <i class="fab fa-python"></i>
        </div>
        <div class="skill-card">
          <i class="fab fa-js"></i>
        </div>
        <div class="skill-card">
          <i class="fas fa-code"></i>
        </div>
      </div>
    </div>

  
    <div class="skill-category">
      <h3>ML Frameworks</h3>
      <div class="skills-grid">
        <div class="skill-card">
          <i class="fas fa-brain"></i>
          <p>TensorFlow</p>
        </div>
        <div class="skill-card">
          <i class="fas fa-brain"></i>
          <p>PyTorch</p>
        </div>
        <div class="skill-card">
          <i class="fas fa-brain"></i>
          <p>Keras</p>
        </div>
        <div class="skill-card">
          <i class="fas fa-brain"></i>
          <p>Scikit-learn</p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};




export default Skills;
