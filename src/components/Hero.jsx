import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Typewriter = ({ text, delay, speed = 50, showCursorAfter = false, showCursorBefore = false }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsTyping(true);
            setHasStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      setIsFinished(true);
    }
  }, [currentIndex, isTyping, text, speed]);

  const showCursor = isTyping ||
    (showCursorAfter && isFinished) ||
    (showCursorBefore && !hasStarted);

  return (
    <span ref={elementRef}>
      {currentText === '' ? '\u00A0' : currentText}
      {showCursor && <span className="blinking-cursor">|</span>}
    </span>
  );
};

const RotatingTypewriter = ({ texts, delay, typeSpeed = 50, deleteSpeed = 30, pauseTime = 2000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setHasStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    const currentFullText = texts[textIndex];
    let timeoutId;

    if (!isDeleting && charIndex < currentFullText.length) {
      timeoutId = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, typeSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeoutId = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, deleteSpeed);
    } else if (!isDeleting && charIndex === currentFullText.length) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((t) => (t + 1) % texts.length);
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, hasStarted, textIndex, texts, typeSpeed, deleteSpeed, pauseTime]);

  return (
    <span ref={elementRef}>
      {currentText === '' ? '\u00A0' : currentText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">

        <div className="hero-content reveal">
          <p className="greeting">Hi, my name is</p>
          <h1 className="name">
            <Typewriter
              text="Biswajit Jana."
              delay={400}
              speed={100}
              showCursorBefore={true}
            />
          </h1>
          <h2 className="role">
            <RotatingTypewriter
              texts={["A Software Developer.", "I build scalable digital experiences."]}
              delay={2200}
              typeSpeed={60}
              deleteSpeed={30}
              pauseTime={2500}
            />
          </h2>
          <p className="summary">
            I'm a full-stack software developer with 2+ years of experience specializing
            in scalable backend architectures, modern frontend frameworks, and RESTful APIs.
            I love building secure, performant web applications from database architecture to UI design.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              Check out my work <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline" download>
              Resume <Download size={18} />
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/biswajit2408" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/biswajit-jana-605615181" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:janabiswajit139@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal relative">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="profile-frame">
            <div className="profile-placeholder">
              <span>BJ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
