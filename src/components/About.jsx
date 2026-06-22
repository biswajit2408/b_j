import { motion } from 'framer-motion';
import { MapPin, Github, Code2, Briefcase } from 'lucide-react';
import Tilt3D from './Tilt3D';
import './About.css';

const daily = ['Python','Node.js','ReactJS','Laravel','MySQL','PostgreSQL','REST APIs','Git'];

const spring = { type:'spring', stiffness:70, damping:18, mass:1.1 };

const left  = { hidden:{ opacity:0, x:-70, rotate:-2 }, show:{ opacity:1, x:0, rotate:0, transition:spring } };
const right = { hidden:{ opacity:0, x: 70, rotate: 2 }, show:{ opacity:1, x:0, rotate:0, transition:spring } };
const up    = { hidden:{ opacity:0, y:50 },              show:{ opacity:1, y:0,             transition:spring } };

const VP = { once:true, margin:'-80px' };

export default function About() {
  return (
    <section id="about" className="section ab-section">
      <div className="wrap">
        <div className="ab-heading">
          <motion.p className="sec-num" variants={up} initial="hidden" whileInView="show" viewport={VP}>01 — About</motion.p>
          <motion.h2 className="sh" variants={up} initial="hidden" whileInView="show" viewport={VP}>
            Building things that <em>matter</em>
          </motion.h2>
        </div>
        <span className="sec-ghost" aria-hidden>01</span>

        <div className="ab-grid">
          {/* Bio — LEFT */}
          <motion.div className="ab-bio cc" variants={left} initial="hidden" whileInView="show" viewport={VP}>
            <div className="ab-bio-tag">bio.txt</div>
            <p>
              Hey, I'm <strong>Biswajit Jana</strong> — a full-stack developer at{' '}
              <strong>Techxperts (Creative Web)</strong>, Rajkot. I work across the entire
              stack: database design, backend APIs, frontend interfaces, and data pipelines.
            </p>
            <p>
              I'm genuinely passionate about <strong className="hl-g">Python</strong> and{' '}
              <strong className="hl-c">Node.js</strong>. I also work with{' '}
              <strong className="hl-p">Laravel</strong> and <strong className="hl-y">ReactJS</strong>.
              I care about clean architecture and software that ships.
            </p>
          </motion.div>

          {/* Stats — RIGHT */}
          <motion.div className="ab-stats" variants={right} initial="hidden" whileInView="show" viewport={VP}>
            {[
              { n:'2+', l:'Years Experience', c:'var(--y)' },
              { n:'10k+', l:'Users on my products', c:'var(--c)' },
              { n:'5+', l:'Live products shipped', c:'var(--p)' },
            ].map((s,i) => (
              <Tilt3D key={i} className="ab-stat cc" intensity={12} style={{ '--ac': s.c }}>
                <span className="abs-num depth">{s.n}</span>
                <span className="abs-label depth-sm">{s.l}</span>
              </Tilt3D>
            ))}
          </motion.div>

          {/* Available — LEFT */}
          <motion.div variants={left} initial="hidden" whileInView="show" viewport={VP}>
            <Tilt3D className="ab-avail cc" intensity={8}>
              <div className="aa-dot" /><div className="aa-ring" />
              <div className="depth">
                <strong>Available for hire</strong>
                <p>Open to full-time roles &amp; freelance</p>
              </div>
            </Tilt3D>
          </motion.div>

          {/* Stack marquee — RIGHT */}
          <motion.div className="ab-stack cc" variants={right} initial="hidden" whileInView="show" viewport={VP}>
            <p className="ab-stack-label">daily stack</p>
            <div className="mm-outer">
              <div className="mm-track">
                {[...daily,...daily].map((t,i) => <span key={i} className="mm-chip">{t}</span>)}
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div variants={left} initial="hidden" whileInView="show" viewport={VP}>
            <Tilt3D className="ab-loc cc" intensity={10}>
              <div className="depth">
                <MapPin size={20} className="ab-ico-p" />
                <div>
                  <strong>Rajkot, Gujarat</strong>
                  <p>India · IST (UTC+5:30)</p>
                </div>
              </div>
            </Tilt3D>
          </motion.div>

          {/* Philosophy */}
          <motion.div variants={right} initial="hidden" whileInView="show" viewport={VP}>
            <Tilt3D className="ab-phil cc" intensity={7}>
              <div className="depth">
                <Code2 size={18} className="ab-ico-y" />
                <blockquote>"Ship fast. Break nothing. Refactor often."</blockquote>
              </div>
            </Tilt3D>
          </motion.div>

          {/* GitHub */}
          <motion.div variants={up} initial="hidden" whileInView="show" viewport={VP}>
            <Tilt3D className="ab-gh cc" intensity={9}>
              <div className="depth ab-gh-inner">
                <Github size={28} />
                <div>
                  <strong>biswajit2408</strong>
                  <motion.a href="https://github.com/biswajit2408" target="_blank" rel="noreferrer"
                    className="ab-gh-link" whileHover={{ x:4 }}>
                    View GitHub →
                  </motion.a>
                </div>
              </div>
            </Tilt3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
