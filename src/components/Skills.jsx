import { motion } from 'framer-motion';
import {
  SiPhp, SiPython, SiJavascript, SiCss,
  SiReact, SiLaravel, SiPandas, SiNumpy,
  SiMysql, SiJupyter, SiGit, SiNodedotjs,
  SiNextdotjs, SiTailwindcss, SiPostgresql, SiVercel,
  SiSupabase, SiDigitalocean, SiFastapi, SiExpress,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import './Skills.css';

const row1 = [
  { name:'Python',     icon:<SiPython />,      color:'#3776ab' },
  { name:'Node.js',    icon:<SiNodedotjs />,   color:'#339933' },
  { name:'ReactJS',    icon:<SiReact />,       color:'#61dafb' },
  { name:'Laravel',    icon:<SiLaravel />,     color:'#ff2d20' },
  { name:'FastAPI',    icon:<SiFastapi />,     color:'#009688' },
  { name:'Express.js', icon:<SiExpress />,     color:'#ffffff' },
  { name:'Next.js',    icon:<SiNextdotjs />,   color:'#ffffff' },
  { name:'JavaScript', icon:<SiJavascript />,  color:'#f7df1e' },
  { name:'PHP',        icon:<SiPhp />,         color:'#777bb4' },
  { name:'Tailwind',   icon:<SiTailwindcss />, color:'#06b6d4' },
];

const row2 = [
  { name:'PostgreSQL',   icon:<SiPostgresql />,  color:'#336791' },
  { name:'MySQL',        icon:<SiMysql />,       color:'#00758f' },
  { name:'Supabase',     icon:<SiSupabase />,    color:'#3ecf8e' },
  { name:'Pandas',       icon:<SiPandas />,      color:'#e70488' },
  { name:'NumPy',        icon:<SiNumpy />,       color:'#4dabcf' },
  { name:'Git',          icon:<SiGit />,         color:'#f05032' },
  { name:'Vercel',       icon:<SiVercel />,      color:'#ffffff' },
  { name:'DigitalOcean', icon:<SiDigitalocean />,color:'#0080ff' },
  { name:'Jupyter',      icon:<SiJupyter />,     color:'#f37626' },
  { name:'Java',         icon:<FaJava />,        color:'#f89820' },
];

const concepts = [
  ['RESTful APIs','#F5E030'],['OOP','#FF2D78'],['MVC','#22FF88'],
  ['Microservices','#00E5D4'],['Data Structures','#9B5CF6'],
  ['Algorithms','#FF7A30'],['RDBMS','#F5E030'],['CRISP-DM','#FF2D78'],
  ['WebSockets','#22FF88'],['CI/CD','#00E5D4'],
];

const spring = { type:'spring', stiffness:70, damping:18 };
const VP = { once:true, margin:'-80px' };

function MarqRow({ items, reverse = false, speed = 36 }) {
  return (
    <div className="mq-outer">
      <div className="mq-track" style={{ animationDuration:`${speed}s`, animationDirection:reverse?'reverse':'normal' }}>
        {[...items,...items].map((s,i) => (
          <motion.div key={i} className="mq-item" style={{ '--sc':s.color }}
            whileHover={{ y:-6, scale:1.06, rotate:-2 }}
            transition={{ duration:.18 }}>
            <span className="mq-icon">{s.icon}</span>
            <span className="mq-name">{s.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section sk-section">
      <div className="wrap">
        <motion.p className="sec-num"
          initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }}
          transition={spring} viewport={VP}>02 — Tech Stack</motion.p>
        <motion.h2 className="sh"
          initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }}
          transition={{ ...spring, delay:.08 }} viewport={VP}>
          Tools I use <em>daily</em>
        </motion.h2>
        <motion.p className="sub"
          initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }}
          transition={{ ...spring, delay:.15 }} viewport={VP}>
          Python &amp; Node.js are my passion. ReactJS for interfaces,
          Laravel for structured APIs — I pick what the product demands.
        </motion.p>
        <span className="sec-ghost" aria-hidden>02</span>
      </div>

      <motion.div className="mq-section"
        initial={{ opacity:0 }} whileInView={{ opacity:1 }}
        transition={{ duration:.6 }} viewport={VP}>
        <MarqRow items={row1} speed={38} />
        <MarqRow items={row2} reverse speed={32} />
      </motion.div>

      <div className="wrap">
        <motion.p className="sk-label"
          initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          transition={{ duration:.5 }} viewport={VP}>
          Core Concepts
        </motion.p>
        <motion.div className="sk-chips"
          initial="hidden" whileInView="show"
          variants={{ hidden:{}, show:{ transition:{ staggerChildren:.04 } } }}
          viewport={VP}>
          {concepts.map(([label, color], i) => (
            <motion.span key={i} className="sk-chip"
              style={{ '--cc': color }}
              variants={{ hidden:{ opacity:0, scale:.8 }, show:{ opacity:1, scale:1, transition:{ type:'spring', stiffness:120, damping:14 } } }}
              whileHover={{ y:-4, scale:1.06, rotate: i%2===0 ? -2 : 2 }}>
              <span className="sk-chip-dot" />
              {label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
