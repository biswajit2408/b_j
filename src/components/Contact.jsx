import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <div className="contact-wrapper reveal">
        <h2 className="section-title" style={{marginBottom: '1rem'}}>Get In <span>Touch</span></h2>
        <p className="contact-subtitle">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>

        <div className="contact-boxes">
          <a href="mailto:janabiswajit139@gmail.com" className="contact-box">
            <div className="contact-icon-wrapper">
              <Mail size={24} />
            </div>
            <h4>Email</h4>
            <p>janabiswajit139@gmail.com</p>
          </a>

          <a href="tel:+919033638853" className="contact-box">
            <div className="contact-icon-wrapper">
              <Phone size={24} />
            </div>
            <h4>Phone</h4>
            <p>+91 9033638853</p>
          </a>

          <div className="contact-box">
            <div className="contact-icon-wrapper">
              <MapPin size={24} />
            </div>
            <h4>Location</h4>
            <p>Rajkot, Gujarat</p>
          </div>
        </div>
        
        <div className="footer-social">
          <a href="https://github.com/biswajit2408" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/biswajit-jana-605615181" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>
        
        <div className="footer-credit">
          <p>Designed and Built by Biswajit Jana.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
