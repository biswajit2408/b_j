import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section container">
      <h2 className="section-title reveal">Education & <span>Certifications</span></h2>
      
      <div className="edu-cert-container">
        
        <div className="edu-section reveal">
          <div className="edu-title">
            <GraduationCap size={28} className="edu-icon" />
            <h3>Academic Background</h3>
          </div>
          
          <div className="edu-card">
            <h4>Master of Computer Application (MCA)</h4>
            <h5>Vellore Institute of Technology | Vellore</h5>
            <span className="edu-date">May 2023</span>
          </div>
          
          <div className="edu-card">
            <h4>Bachelor of Computer Application (BCA)</h4>
            <h5>Marwadi University | Rajkot, Gujarat</h5>
            <span className="edu-date">May 2021</span>
          </div>
        </div>

        <div className="cert-section reveal" style={{transitionDelay: '200ms'}}>
          <div className="edu-title">
            <Award size={28} className="edu-icon" />
            <h3>Certifications</h3>
          </div>
          
          <ul className="cert-list">
            <li>Hewlett Packard Enterprise Software Engineering Job Simulation on Forage</li>
            <li>What is Data Science? on Coursera</li>
            <li>Tools for Data Science on Coursera</li>
            <li>Data Science Methodology on Coursera</li>
            <li>Python for Data Science, AI & Development on Coursera</li>
            <li>Python Project for Data Science on Coursera</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
