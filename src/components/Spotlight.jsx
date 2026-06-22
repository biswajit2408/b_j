import { useEffect } from 'react';
import './Spotlight.css';

export default function Spotlight() {
  useEffect(() => {
    const move = e => {
      document.documentElement.style.setProperty('--mx', e.clientX + 'px');
      document.documentElement.style.setProperty('--my', e.clientY + 'px');
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return <div className="spotlight" aria-hidden />;
}
