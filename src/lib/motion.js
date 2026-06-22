// Shared framer-motion variants & transitions

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16,1,0.3,1] } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -44 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.7, ease: [0.16,1,0.3,1] } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 44 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.7, ease: [0.16,1,0.3,1] } },
};

export const stagger = (delay = 0.08) => ({
  hidden: {},
  show:   { transition: { staggerChildren: delay } },
});

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16,1,0.3,1] } },
};

export const VIEWPORT = { once: true, margin: '-60px' };
