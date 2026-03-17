import React from 'react';
import './Experience.css';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <h2 className="section-title reveal">Professional <span>Experience</span></h2>
      
      <div className="timeline">
        <div className="timeline-item reveal">
          <div className="timeline-dot">
            <Briefcase size={20} />
          </div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3>Software Developer</h3>
              <span className="timeline-date">Oct 2023 - Present</span>
            </div>
            <h4 className="timeline-company">Techxperts (Creative Web) | Rajkot</h4>
            <ul className="timeline-list">
              <li>Led full-stack web development with secure backend frameworks and modern frontend libraries, delivering robust, scalable features.</li>
              <li>Implemented RESTful APIs with authentication, validation, and documentation; streamlined integrations with external systems to reduce manual operations.</li>
              <li>Designed configurable request modules leveraging recursion and data structures to minimize hard-coded logic and simplify maintenance.</li>
              <li>Performed data analysis and debugging in Python (pandas), improving data integrity by 80% through anomaly detection and remediation.</li>
              <li>Optimized performance and reliability via code reviews, MVC best practices, and tests; reduced API latency by 30% and improved uptime by 20%.</li>
              <li>Collaborated with stakeholders to prioritize backlog and enhance workflows, increasing adoption and reducing manual effort by 95%.</li>
            </ul>
            <div className="timeline-tech">
              <span>Backend APIs</span>
              <span>Modern Frontend</span>
              <span>Python (pandas)</span>
              <span>Relational DBs</span>
            </div>
          </div>
        </div>
        
        {/* Additional timeline items can be added here easily */}
        
      </div>
    </section>
  );
};

export default Experience;
