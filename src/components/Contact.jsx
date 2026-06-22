import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowRight, Sparkles } from 'lucide-react';
import Tilt3D from './Tilt3D';
import './Contact.css';

const info = [
  { icon:<Mail size={20}/>,   label:'Email',    val:'janabiswajit139@gmail.com', href:'mailto:janabiswajit139@gmail.com', color:'var(--y)' },
  { icon:<Phone size={20}/>,  label:'Phone',    val:'+91 9033638853',             href:'tel:+919033638853',                color:'var(--c)' },
  { icon:<MapPin size={20}/>, label:'Location', val:'Rajkot, Gujarat, India',     href:null,                              color:'var(--p)' },
];

const socials = [
  { href:'https://github.com/biswajit2408',                      icon:<Github size={18}/>,   label:'GitHub',   color:'var(--y)' },
  { href:'https://www.linkedin.com/in/biswajit-jana-605615181', icon:<Linkedin size={18}/>, label:'LinkedIn', color:'var(--c)' },
  { href:'mailto:janabiswajit139@gmail.com',                    icon:<Mail size={18}/>,     label:'Email',    color:'var(--p)' },
];

const spring = { type:'spring', stiffness:70, damping:18 };
const VP = { once:true, margin:'-80px' };

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="ct-glow-bg" aria-hidden />
      <div className="wrap">

        {/* Hero text */}
        <motion.div className="ct-hero"
          initial={{ opacity:0, y:60, rotate:-1.5 }}
          whileInView={{ opacity:1, y:0, rotate:0 }}
          transition={spring} viewport={VP}>
          <motion.div className="ct-badge"
            initial={{ scale:0 }} whileInView={{ scale:1 }}
            transition={{ type:'spring', stiffness:200, damping:18, delay:.2 }} viewport={VP}>
            <Sparkles size={12} /> Open to Work
          </motion.div>
          <h2 className="sh ct-title">
            Let's Build Something <em>Together</em>
          </h2>
          <p className="sub">
            I'm currently open to new opportunities. Got a project or just want to say hi?
            My inbox is always open.
          </p>
          <motion.a href="mailto:janabiswajit139@gmail.com"
            className="btn btn-primary ct-cta"
            whileHover={{ scale:1.04 }} whileTap={{ scale:.96 }}>
            <Send size={16}/> Say Hello <ArrowRight size={16}/>
          </motion.a>
        </motion.div>

        {/* Info cards */}
        <motion.div className="ct-cards"
          initial="hidden" whileInView="show"
          variants={{ hidden:{}, show:{ transition:{ staggerChildren:.1 } } }}
          viewport={VP}>
          {info.map((c,i) => (
            <motion.div key={i}
              variants={{ hidden:{ opacity:0, y:40, rotate: i%2===0 ? -3 : 3 }, show:{ opacity:1, y:0, rotate:0, transition:spring } }}>
              <Tilt3D className="ct-card cc" intensity={12} style={{ '--cc': c.color }}>
                <div className="ct-ico depth-sm">{c.icon}</div>
                <div className="depth">
                  <p className="ct-label">{c.label}</p>
                  {c.href
                    ? <a href={c.href} className="ct-val">{c.val}</a>
                    : <span className="ct-val">{c.val}</span>}
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div className="ct-bottom"
          initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          transition={{ duration:.7, delay:.3 }} viewport={VP}>
          <div className="ct-socials">
            {socials.map(s => (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                aria-label={s.label} className="ct-soc" style={{ '--sc': s.color }}
                whileHover={{ y:-5, rotate:-6, scale:1.12, borderColor:s.color, boxShadow:`3px 3px 0 ${s.color}`, color:s.color }}
                whileTap={{ scale:.88 }}>
                {s.icon}
              </motion.a>
            ))}
          </div>
          <p className="ct-credit">
            Designed &amp; Built by <span>Biswajit Jana</span> &copy; {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
