import React from 'react';
import { projectData } from './data';
import '../app/globals.css'; // Ensure the correct path

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <i className="folder-icon fas fa-folder"></i>
              <div className="small-icons">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
