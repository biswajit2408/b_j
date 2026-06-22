import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav-inner wrap">
        <a href="#" className="nav-logo">B<span>J</span></a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
              Hire Me
            </a>
          </li>
        </ul>

        <button className="nav-burger" aria-label="menu" onClick={() => setOpen(!open)}>
          <span className={open ? 'x' : ''} />
          <span className={open ? 'x' : ''} />
          <span className={open ? 'x' : ''} />
        </button>
      </div>
    </nav>
  );
}
