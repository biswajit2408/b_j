import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import Tilt3D from './Tilt3D';
import './Education.css';

const degrees = [
  { degree:'Master of Computer Application (MCA)', school:'Vellore Institute of Technology', location:'Vellore', year:'May 2023', color:'var(--y)' },
  { degree:'Bachelor of Computer Application (BCA)', school:'Marwadi University', location:'Rajkot, Gujarat', year:'May 2021', color:'var(--c)' },
];

const certs = [
  { title:'Software Engineering Job Simulation', issuer:'HPE / Forage',   color:'var(--y)' },
  { title:'What is Data Science?',               issuer:'Coursera / IBM', color:'var(--p)' },
  { title:'Tools for Data Science',              issuer:'Coursera / IBM', color:'var(--c)' },
  { title:'Data Science Methodology',            issuer:'Coursera / IBM', color:'var(--g)' },
  { title:'Python for Data Science, AI & Dev',   issuer:'Coursera / IBM', color:'var(--v)' },
  { title:'Python Project for Data Science',     issuer:'Coursera / IBM', color:'var(--o)' },
];

const spring = { type:'spring', stiffness:70, damping:18 };
const VP = { once:true, margin:'-80px' };
const left  = { hidden:{ opacity:0, x:-70, rotate:-2 }, show:{ opacity:1, x:0, rotate:0, transition:spring } };
const right = { hidden:{ opacity:0, x: 70, rotate: 2 }, show:{ opacity:1, x:0, rotate:0, transition:spring } };
const up    = { hidden:{ opacity:0, y:40 },              show:{ opacity:1, y:0,            transition:spring } };

export default function Education() {
  return (
    <section id="education" className="section ed-section">
      <div className="wrap">
        <motion.p className="sec-num" variants={left} initial="hidden" whileInView="show" viewport={VP}>05 — Background</motion.p>
        <motion.h2 className="sh"    variants={left} initial="hidden" whileInView="show" viewport={VP}>
          Education & <em>Certifications</em>
        </motion.h2>
        <motion.p className="sub"   variants={left} initial="hidden" whileInView="show" viewport={VP}>
          Academic foundations and continuous learning in CS & data science.
        </motion.p>
        <span className="sec-ghost" aria-hidden>05</span>

        <div className="ed-grid">
          {/* Degrees */}
          <motion.div variants={left} initial="hidden" whileInView="show" viewport={VP}>
            <div className="ed-head">
              <div className="ed-ico"><GraduationCap size={22}/></div>
              <h3>Academic</h3>
            </div>
            <div className="deg-list">
              {degrees.map((d,i) => (
                <motion.div key={i}
                  initial={{ opacity:0, x:-40, rotate:-1 }}
                  whileInView={{ opacity:1, x:0, rotate:0 }}
                  transition={{ ...spring, delay: i*.1 }}
                  viewport={VP}>
                  <Tilt3D className="deg-card cc" intensity={9} style={{ '--dc': d.color }}>
                    <div className="depth">
                      <span className="deg-year">{d.year}</span>
                      <h4>{d.degree}</h4>
                      <p>{d.school} — {d.location}</p>
                    </div>
                  </Tilt3D>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certs */}
          <motion.div variants={right} initial="hidden" whileInView="show" viewport={VP}>
            <div className="ed-head">
              <div className="ed-ico cert-ico"><Award size={22}/></div>
              <h3>Certifications</h3>
            </div>
            <div className="cert-list cc">
              {certs.map((c,i) => (
                <motion.div key={i} className="cert-row"
                  initial={{ opacity:0, x:40 }}
                  whileInView={{ opacity:1, x:0 }}
                  transition={{ ...spring, delay: i*.07 }}
                  viewport={VP}
                  whileHover={{ x:5, backgroundColor:'rgba(255,255,255,.04)' }}>
                  <div className="cert-dot" style={{ background:c.color, boxShadow:`0 0 8px ${c.color}` }} />
                  <div>
                    <strong>{c.title}</strong>
                    <span>{c.issuer}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
