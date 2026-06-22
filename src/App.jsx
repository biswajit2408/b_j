import { useEffect, useRef } from 'react';
import { inject } from '@vercel/analytics';
import { initScroll }  from './lib/scroll';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import About           from './components/About';
import Skills          from './components/Skills';
import Experience      from './components/Experience';
import Projects        from './components/Projects';
import Education       from './components/Education';
import Contact         from './components/Contact';
import ScrollLine      from './components/ScrollLine';
import './App.css';

export default function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    inject();
    lenisRef.current = initScroll();
    return () => lenisRef.current?.destroy();
  }, []);

  return (
    <div className="app grain">
      <Navbar />
      <main className="main-content">
        <ScrollLine />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Contact />
    </div>
  );
}
