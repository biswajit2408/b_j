import { motion } from 'framer-motion';
import { ArrowUpRight, Star, Zap } from 'lucide-react';
import Tilt3D from './Tilt3D';
import './Projects.css';

const featured = [
  {
    num:'01', title:'Smart Bookmark Manager', company:'Personal Project',
    desc:'Next.js App Router + TypeScript + Supabase Realtime. Google OAuth, Row Level Security, smart tagging, Server Actions. Deployed on Vercel.',
    tech:['Next.js','TypeScript','Supabase','PostgreSQL','Tailwind'],
    live:'https://smartbookmark-app-beta.vercel.app/', color:'var(--y)',
  },
  {
    num:'02', title:'Gold Chain Manufacturing Tracker', company:'PM Jewellers',
    desc:'Node.js + WebSocket real-time tracker for jewellery manufacturing — lot-based tracking, automated loss calc, multi-stage workflow. DigitalOcean + Nginx + PM2.',
    tech:['React.js','Node.js','PostgreSQL','WebSocket','Nginx'],
    live:'http://134.209.153.123', color:'var(--c)',
  },
];

const others = [
  { title:'Data Integration Automation', company:'Techxperts',
    desc:'Python + Laravel middleware aggregating multi-source data into CRM — 100% manual updates eliminated, 98% accuracy improvement.',
    tech:['Python','Laravel','MySQL','REST APIs'], color:'var(--p)' },
  { title:'Scalable Web App Platform', company:'Techxperts',
    desc:'Multi-tenant ReactJS + Node.js platform — 30% faster loads, 10k+ users, 35% fewer production defects.',
    tech:['ReactJS','Node.js','Laravel','MySQL'], color:'var(--g)' },
  { title:'Guided Chatbot', company:'Techxperts',
    desc:'Python hybrid chatbot — NLP + regex dual-engine, high-confidence exact match priority. Slashed support tickets.',
    tech:['Python','FastAPI','NLP','Regex'], color:'var(--v)' },
];

const spring = { type:'spring', stiffness:70, damping:18 };
const VP = { once:true, margin:'-80px' };
const left  = { hidden:{ opacity:0, x:-70, rotate:-2 }, show:{ opacity:1, x:0, rotate:0, transition:spring } };
const right = { hidden:{ opacity:0, x: 70, rotate: 2 }, show:{ opacity:1, x:0, rotate:0, transition:spring } };

export default function Projects() {
  return (
    <section id="projects" className="section pj-section">
      <div className="wrap">
        <motion.p className="sec-num" variants={right} initial="hidden" whileInView="show" viewport={VP}>04 — Work</motion.p>
        <motion.h2 className="sh"    variants={right} initial="hidden" whileInView="show" viewport={VP}>
          Featured <em>Projects</em>
        </motion.h2>
        <motion.p className="sub"   variants={right} initial="hidden" whileInView="show" viewport={VP}>
          Things I've built as a full-stack developer — Python, Node.js, ReactJS, Laravel and more.
        </motion.p>
        <span className="sec-ghost" aria-hidden>04</span>

        {/* Featured */}
        <div className="pj-featured">
          {featured.map((p,i) => (
            <motion.div key={i}
              variants={i===0 ? left : right}
              initial="hidden" whileInView="show" viewport={VP}>
              <Tilt3D className="pj-big cc" intensity={6} style={{ '--pc': p.color }}>
                <div className="pjb-top">
                  <span className="pjb-num">{p.num}</span>
                  <span className="pjb-badge"><Star size={10} fill="currentColor"/> Featured</span>
                  <motion.a href={p.live} target="_blank" rel="noreferrer"
                    className="pjb-link" aria-label="Live"
                    whileHover={{ scale:1.15, rotate:12 }} whileTap={{ scale:.9 }}>
                    <ArrowUpRight size={15}/>
                  </motion.a>
                </div>
                <div className="pjb-body depth">
                  <p className="pj-co">{p.company}</p>
                  <h3 className="pj-title">{p.title}</h3>
                  <p className="pj-desc">{p.desc}</p>
                </div>
                <div className="pj-tags depth-sm">
                  {p.tech.map(t => <span key={t} className="pjt">{t}</span>)}
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>

        {/* Grid */}
        <motion.div className="pj-grid"
          initial="hidden" whileInView="show"
          variants={{ hidden:{}, show:{ transition:{ staggerChildren:.1 } } }}
          viewport={VP}>
          {others.map((p,i) => (
            <motion.div key={i}
              variants={{ hidden:{ opacity:0, y:50, rotate:i%2===0?-2:2 }, show:{ opacity:1, y:0, rotate:0, transition:spring } }}>
              <Tilt3D className="pj-card cc" intensity={12} style={{ '--pc': p.color }}>
                <div className="pjc-line" />
                <div className="depth">
                  <p className="pj-co">{p.company}</p>
                  <h3 className="pj-title">{p.title}</h3>
                  <p className="pj-desc">{p.desc}</p>
                </div>
                <div className="pj-tags depth-sm">
                  {p.tech.map(t => <span key={t} className="pjt">{t}</span>)}
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
