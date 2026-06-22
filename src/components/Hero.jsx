import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Zap } from 'lucide-react';
import TechCube from './TechCube';
import './Hero.css';

const ROLES = ['Full-Stack Developer','Python Enthusiast','Node.js Engineer','ReactJS Builder','Problem Solver'];

function useTypewriter(texts) {
  const [display, setDisplay] = useState('');
  const [ti, setTi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const full = texts[ti]; let id;
    if (!del && ci < full.length)         id = setTimeout(() => { setDisplay(full.slice(0,ci+1)); setCi(c=>c+1); }, 68);
    else if (del && ci > 0)               id = setTimeout(() => { setDisplay(full.slice(0,ci-1)); setCi(c=>c-1); }, 32);
    else if (!del && ci === full.length)  id = setTimeout(() => setDel(true), 2200);
    else if (del && ci === 0)             { setDel(false); setTi(t=>(t+1)%texts.length); }
    return () => clearTimeout(id);
  }, [ci, del, ti, texts]);
  return display;
}

const socials = [
  { href:'https://github.com/biswajit2408',                       icon:<Github size={18}/>,   label:'GitHub' },
  { href:'https://www.linkedin.com/in/biswajit-jana-605615181',  icon:<Linkedin size={18}/>, label:'LinkedIn' },
  { href:'mailto:janabiswajit139@gmail.com',                     icon:<Mail size={18}/>,     label:'Email' },
];

const cv = {
  hidden: {},
  show:   { transition:{ staggerChildren:0.1, delayChildren:0.2 } }
};
const iv = {
  hidden: { opacity:0, y:40, rotate:2 },
  show:   { opacity:1, y:0,  rotate:0, transition:{ type:'spring', stiffness:80, damping:18 } }
};

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="hero">
      {/* Grid lines */}
      <div className="hero-grid" aria-hidden />

      {/* Background noise blobs */}
      <div className="h-blob h-blob-1" aria-hidden />
      <div className="h-blob h-blob-2" aria-hidden />

      <div className="wrap hero-wrap">
        {/* LEFT */}
        <motion.div className="hero-left" variants={cv} initial="hidden" animate="show">

          <motion.div className="hero-badge" variants={iv}>
            <Zap size={11} fill="currentColor" />
            Open to Work &mdash; Full Stack Dev
          </motion.div>

          <motion.h1 className="hero-name" variants={iv}>
            Biswajit<br />
            <span className="hero-name-em glow-y">Jana.</span>
          </motion.h1>

          <motion.div className="hero-role" variants={iv}>
            <span className="hr-bracket">{'>'}</span>
            <span className="hr-text">{role || ' '}</span>
            <span className="hr-cursor">|</span>
          </motion.div>

          <motion.p className="hero-bio" variants={iv}>
            2+ years building real products across the full stack.
            Genuinely passionate about <strong>Python</strong> &amp; <strong>Node.js</strong>.
            Love working with <strong>ReactJS</strong> and <strong>Laravel</strong> too.
          </motion.p>

          <motion.div className="hero-cta" variants={iv}>
            <motion.a href="#projects" className="btn btn-primary"
              whileHover={{ scale:1.03 }} whileTap={{ scale:.96 }}>
              View Work <ArrowRight size={15} />
            </motion.a>
            <motion.a href="/resume.pdf" download className="btn btn-ghost"
              whileHover={{ scale:1.02 }} whileTap={{ scale:.96 }}>
              Resume <Download size={15} />
            </motion.a>
          </motion.div>

          <motion.div className="hero-bottom" variants={iv}>
            <div className="hero-socials">
              {socials.map(s => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  aria-label={s.label} className="soc-btn"
                  whileHover={{ y:-4, rotate:-5, scale:1.1 }}
                  whileTap={{ scale:.9 }}>
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <div className="hero-stats">
              {[['2+','Yrs'],['10k+','Users'],['5+','Products']].map(([n,l]) => (
                <div key={l} className="hst">
                  <b>{n}</b><span>{l}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — 3D Cube */}
        <motion.div className="hero-right"
          initial={{ opacity:0, scale:.85, rotate:-4 }}
          animate={{ opacity:1, scale:1,   rotate:0 }}
          transition={{ type:'spring', stiffness:70, damping:18, delay:.35 }}>

          <div className="cube-ring" aria-hidden />
          <TechCube />

          {/* Floating pills */}
          {[
            { cls:'fp-1', label:'Python · Node.js', color:'var(--g)',  delay:.6 },
            { cls:'fp-2', label:'ReactJS · Laravel', color:'var(--y)', delay:.8 },
            { cls:'fp-3', label:'Available ✦',       color:'var(--c)', delay:1.0 },
          ].map(f => (
            <motion.div key={f.cls} className={`fp ${f.cls}`}
              style={{ '--fc': f.color }}
              initial={{ opacity:0, scale:.7 }}
              animate={{ opacity:1, scale:1 }}
              transition={{ type:'spring', stiffness:100, damping:16, delay:f.delay }}>
              {f.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="hero-scroll"
        initial={{ opacity:0 }} animate={{ opacity:1 }}
        transition={{ delay:1.4, duration:.7 }}>
        <div className="hs-line"><div className="hs-dot" /></div>
        <span>scroll</span>
      </motion.div>
    </section>
  );
}
