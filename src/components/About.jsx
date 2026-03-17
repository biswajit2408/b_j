import React from 'react';
import './About.css';
import { Code, Database, Layout } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section container">
      <h2 className="section-title reveal">About <span>Me</span></h2>
      
      <div className="about-content">
        <div className="about-text reveal">
          <p>
            Hello! I'm Biswajit, a passionate Software Developer based in Rajkot. 
            I enjoy creating things that live on the internet, whether that be websites, applications, 
            or anything in between. My goal is to always build products that provide pixel-perfect, 
            performant experiences.
          </p>
          <p>
            With over 2 years of professional experience, I have had the privilege to work at Techxperts (Creative Web),
            where I led full-stack development using modern web technologies, delivering secure and scalable features.
          </p>
          <p>
            When I'm not coding, I am exploring data analysis in Python using pandas to improve data integrity, 
            or discovering new ways to optimize web performance.
          </p>
        </div>

        <div className="about-cards reveal">
          <div className="feature-card">
            <Layout className="feature-icon" size={32} />
            <h3>Frontend Dev</h3>
            <p>Building responsive, interactive, and beautiful user interfaces using modern JavaScript frameworks, HTML, and CSS.</p>
          </div>
          <div className="feature-card">
            <Database className="feature-icon" size={32} />
            <h3>Backend Arch</h3>
            <p>Designing robust databases and scalable RESTful APIs with secure and performant architectures.</p>
          </div>
          <div className="feature-card">
            <Code className="feature-icon" size={32} />
            <h3>Data Analysis</h3>
            <p>Leveraging Python and pandas to perform anomaly detection, data remediation, and automation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
