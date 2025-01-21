import React from 'react';
import '../app/globals.css'; // Ensure the correct path

const About = () => {
  return (
    <section className="about-container" id="about">
      <h2>Experience</h2>
      <div className="flex-about">
        {/* Card 1 */}
        <div className="card">
          <div className="card-inner">
            {/* Front Face */}
            <div className="card-front">
              <h3>Kahana</h3>
              <p>Software Engineer</p>
              <p>Oct 2024 - Present</p>
            </div>
            {/* Back Face */}
            <div className="card-back">
              <p>At Kahana, I developed predictive models using hyperparameter tuning and ensemble learning, improving accuracy by 25% and enhancing strategies. I automated dashboards, reducing reporting time by 40%, and optimized data pipelines for a 30% boost in efficiency. Additionally, I conducted testing that improved deployment times by 15% and minimized errors.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-inner">
            {/* Front Face */}
            <div className="card-front">
              <h3>Healthi AI</h3>
              <p>AI Software Engineer</p>
              <p>Jul 2024 - Oct 2024</p>
            </div>
            {/* Back Face */}
            <div className="card-back">
              <p>At Healthi AI, I developed Retrieval-Augmented Generation (RAG) models, improving chatbot accuracy by 30% and enabling reliable medical advice delivery. I fine-tuned machine translation APIs, boosting translation accuracy by 20%, and expanded multilingual capabilities with LLMs to enhance user accessibility. Additionally, I conducted user testing and feedback analysis, reducing incorrect chatbot responses by 25%.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-inner">
            {/* Front Face */}
            <div className="card-front">
              <h3>Tata Consultancy Services</h3>
              <p>Assistant Systems Engineer</p>
              <p>Jul 2021 - Jul 2022</p>
            </div>
            {/* Back Face */}
            <div className="card-back">
              <p>At Tata Consultancy Services, I streamlined ETL workflows with Ab Initio scripting, reducing data processing time by 35% and improving system efficiency by 20%. I resolved 10 critical system issues, ensuring 96.9% uptime for business-critical operations. Additionally, I collaborated with cross-functional teams to enhance processes, boosting operational efficiency by 15%, and conducted ETL training sessions for new hires, increasing team productivity by 10%.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
