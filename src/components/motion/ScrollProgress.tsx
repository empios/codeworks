import React from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

// Pasek postępu czytania pod nagłówkiem (wzorzec Scroll Progress z Motion Primitives):
// pokazuje, jak daleko jesteś na długiej stronie. Przy reduced motion bez sprężyny.
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const smooth = useSpring(scrollYProgress, { stiffness: 200, damping: 50, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-20 z-50 h-0.5 origin-left bg-gradient-to-r from-ubuntuOrange-50 to-ubuntuOrange-40 pointer-events-none"
      style={{ scaleX: reduce ? scrollYProgress : smooth }}
    />
  );
};
