import { motion } from 'framer-motion';
import { Briefcase, TrendingUp } from 'lucide-react';
import Tilt3D from './Tilt3D';
import './Experience.css';

const metrics = [
  { v:'30%',  l:'API Latency Cut',        c:'var(--y)' },
  { v:'80%',  l:'Data Integrity Up',      c:'var(--c)' },
  { v:'95%',  l:'Manual Effort Removed',  c:'var(--g)' },
  { v:'20%',  l:'Uptime Improved',        c:'var(--p)' },
  { v:'100%', l:'Data Updates Automated', c:'var(--o)' },
  { v:'35%',  l:'Defects Reduced',        c:'var(--v)' },
];

const bullets = [
  { tag:'Python · Pandas',    color:'var(--g)', text:'Data analysis & anomaly detection — improved data integrity by 80%. Built automated reporting pipelines.' },
  { tag:'Node.js · Sockets',  color:'var(--c)', text:'Real-time WebSocket integrations and recursive backend modules reducing hard-coded logic.' },
  { tag:'Laravel · PHP',      color:'var(--p)', text:'RESTful APIs with JWT auth, validation, Swagger docs — integrations cut manual ops by 95%.' },
  { tag:'ReactJS',            color:'var(--y)', text:'Multi-tenant frontends — 30% faster page loads, supporting 10k+ concurrent users.' },
  { tag:'MySQL · PostgreSQL', color:'var(--c)', text:'Normalised schemas, optimised queries and migrations; reduced API latency by 30%.' },
  { tag:'DevOps · Testing',   color:'var(--v)', text:'Code reviews, MVC best practices, test suites — uptime up 20%, defects down 35%.' },
];

const tech = ['Python','Node.js','Laravel','ReactJS','FastAPI','PHP','JavaScript','MySQL','PostgreSQL','WebSocket','Pandas','REST APIs','Git'];

const spring = { type:'spring', stiffness:70, damping:18 };
const VP = { once:true, margin:'-80px' };
const left  = { hidden:{ opacity:0, x:-70, rotate:-1.5 }, show:{ opacity:1, x:0, rotate:0, transition:spring } };
const right = { hidden:{ opacity:0, x: 70, rotate: 1.5 }, show:{ opacity:1, x:0, rotate:0, transition:spring } };
const up    = { hidden:{ opacity:0, y:40 },                show:{ opacity:1, y:0,            transition:spring } };

export default function Experience() {
  return (
    <section id="experience" className="section ex-section">
      <div className="wrap">
        <motion.p className="sec-num" variants={left} initial="hidden" whileInView="show" viewport={VP}>03 — Career</motion.p>
        <motion.h2 className="sh"    variants={left} initial="hidden" whileInView="show" viewport={VP}
          transition={{ ...spring, delay:.07 }}>
          Professional <em>Experience</em>
        </motion.h2>
        <motion.p className="sub"   variants={left} initial="hidden" whileInView="show" viewport={VP}
          transition={{ ...spring, delay:.13 }}>
          Full-stack work across Python, Node.js, Laravel &amp; ReactJS — real products, real traffic.
        </motion.p>
        <span className="sec-ghost" aria-hidden>03</span>

        {/* Header card */}
        <motion.div className="ex-header cc" variants={right} initial="hidden" whileInView="show" viewport={VP}>
          <div className="ex-ico"><Briefcase size={22} /></div>
          <div className="ex-meta">
            <h3>Software Developer</h3>
            <p>Techxperts (Creative Web) — Rajkot, Gujarat</p>
          </div>
          <span className="ex-badge">Oct 2023 – Present</span>
        </motion.div>

        {/* Metrics */}
        <motion.div className="ex-metrics"
          initial="hidden" whileInView="show"
          variants={{ hidden:{}, show:{ transition:{ staggerChildren:.06 } } }}
          viewport={VP}>
          {metrics.map((m,i) => (
            <motion.div key={i}
              variants={{ hidden:{ opacity:0, y:30, scale:.9 }, show:{ opacity:1, y:0, scale:1, transition:{ type:'spring', stiffness:100, damping:16 } } }}>
              <Tilt3D className="em-card cc" intensity={14} style={{ '--mc': m.c }}>
                <div className="depth">
                  <TrendingUp size={14} style={{ color:m.c, marginBottom:'.3rem' }} />
                  <span className="em-val">{m.v}</span>
                  <span className="em-label">{m.l}</span>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </motion.div>

        {/* Bullets */}
        <motion.div className="ex-bullets"
          initial="hidden" whileInView="show"
          variants={{ hidden:{}, show:{ transition:{ staggerChildren:.07 } } }}
          viewport={VP}>
          {bullets.map((b,i) => (
            <motion.div key={i} className="eb-row cc"
              style={{ '--bc': b.color }}
              variants={{ hidden:{ opacity:0, x: i%2===0 ? -40 : 40 }, show:{ opacity:1, x:0, transition:spring } }}
              whileHover={{ x:4, borderColor:b.color, boxShadow:`3px 3px 0 ${b.color}` }}>
              <span className="eb-tag">{b.tag}</span>
              <p className="eb-text">{b.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tags */}
        <motion.div className="ex-tags"
          initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          transition={{ duration:.6, delay:.2 }} viewport={VP}>
          {tech.map(t => (
            <motion.span key={t} className="ex-tag"
              whileHover={{ y:-3, color:'var(--y)', borderColor:'rgba(245,224,48,.4)' }}>
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
