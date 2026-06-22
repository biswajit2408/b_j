import { useScroll, useSpring, motion } from 'framer-motion';
import './ScrollLine.css';

export default function ScrollLine() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <div className="sl-wrap" aria-hidden>
      <svg className="sl-svg" viewBox="0 0 100 2000" preserveAspectRatio="none">
        {/* Static track */}
        <path
          d="M50,0 C50,100 20,180 50,300 C80,420 20,500 50,620 C80,740 20,820 50,940 C80,1060 20,1140 50,1260 C80,1380 20,1460 50,1580 C80,1700 20,1780 50,2000"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="2"
        />
        {/* Animated draw */}
        <motion.path
          d="M50,0 C50,100 20,180 50,300 C80,420 20,500 50,620 C80,740 20,820 50,940 C80,1060 20,1140 50,1260 C80,1380 20,1460 50,1580 C80,1700 20,1780 50,2000"
          fill="none"
          stroke="url(#sl-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient id="sl-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#F5E030" />
            <stop offset="33%"  stopColor="#FF2D78" />
            <stop offset="66%"  stopColor="#00E5D4" />
            <stop offset="100%" stopColor="#9B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
