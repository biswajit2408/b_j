import React from 'react';
import {
  SiPhp, SiPython, SiJavascript, SiHtml5, SiCss,
  SiReact, SiBootstrap, SiPandas, SiNumpy,
  SiMysql, SiJupyter
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { Code2, BrainCircuit, Fingerprint, Sparkles } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "PHP", icon: <SiPhp /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <SiPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss /> }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "ReactJS", icon: <SiReact /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "QuickBase CRM" },
        { name: "Jupyter Notebook", icon: <SiJupyter /> }
      ]
    },
    {
      title: "AI & Development Tools",
      skills: [
        { name: "ChatGPT" },
        { name: "Gemini" },
        { name: "Antigravity" },
        { name: "Claude" },
        { name: "Cursor.ai" },
        { name: "Windsurf" }
      ]
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "OOP" },
        { name: "MVC Architecture" },
        { name: "RESTful APIs" },
        { name: "Data Structures" },
        { name: "Algorithms" }
      ]
    }
  ];

  return (
    <section id="skills" className="section container">
      <h2 className="section-title reveal">Technical <span>Skills</span></h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-category reveal" key={index} style={{ transitionDelay: `${index * 100}ms` }}>
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-chips">
              {category.skills.map((skill, i) => (
                <span className="skill-chip" key={i}>
                  {skill.icon && <span className="skill-icon">{skill.icon} </span>}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
