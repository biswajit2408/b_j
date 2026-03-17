import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Data Integration Automation",
      company: "Techxperts (Creative Web)",
      description: "Built middleware and API layers to aggregate multi-source data into CRM with dynamic filtering and configuration for flexible integrations. Developed automated RESTful services to ingest external data, cutting manual updates by 100% and enhancing data accuracy by 98%. Created a dynamic, configuration-driven filtering module eliminating hard-coded parameters.",
      tech: ["RESTful APIs", "CRM", "Automations"],
      link: "#" // Placeholder link
    },
    {
      title: "Scalable Web Applications Platform",
      company: "Techxperts (Creative Web)",
      description: "Designed and deployed multi-tenant web applications with performant frontend libraries and robust backend architectures. Optimized component rendering for performance, improving page load times by ~30% and supporting 10k+ active users. Implemented monitoring and test suites to raise quality, reducing production defects by ~35%.",
      tech: ["Modern Frontend", "Backend Architecture", "Testing"],
      link: "#" // Placeholder link
    },
    {
      title: "Guided Chatbot",
      company: "Techxperts (Creative Web)",
      description: "Engineered an intelligent hybrid chatbot integrating Natural Language Processing (NLP) with deterministic regex patterns to provide instant, automated support within a portal. The dual-engine approach prioritized high-confidence exact matches while gracefully handling conversational queries, drastically reducing manual support tickets and improving user experience.",
      tech: ["Python", "NLP", "Regex", "API Integration"],
      link: "#" // Placeholder link
    }
  ];

  return (
    <section id="projects" className="section container">
      <h2 className="section-title reveal">Featured <span>Projects</span></h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card reveal" key={index} style={{ transitionDelay: `${index * 150}ms` }}>
            <div className="project-header">
              <FolderGit2 className="project-folder" size={40} />
              <div className="project-links">
                <a href={project.link} aria-label="External Link">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="project-content">
              <span className="project-company">{project.company}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">
                {project.description}
              </p>
            </div>

            <ul className="project-tech-list">
              {project.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
