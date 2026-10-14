import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

// Wejście treści przy przewinięciu (wzorzec InView z Motion Primitives, wartości z ui-skills better-ui):
// opacity + blur 4px + translateY 12px, 300ms ease-out, jednorazowo. Przy reduced motion tylko opacity.
// HTML z SSG jest od razu widoczny; ukrywamy tylko elementy, które po hydracji są jeszcze poniżej ekranu,
// więc treść nigdy nie znika, jeśli JS się nie załaduje.
type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** kolejność w grupie: opóźnienie = index * step */
  index?: number;
  /** odstęp w grupie (s): 0.1 dla fragmentów nagłówka, 0.05 dla elementów listy */
  step?: number;
  as?: 'div' | 'li' | 'section';
  style?: React.CSSProperties;
};

export const Reveal: React.FC<RevealProps> = ({ children, className, index = 0, step = 0.1, as = 'div', style }) => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduce = useReducedMotion();
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el && el.getBoundingClientRect().top > window.innerHeight) setArmed(true);
  }, []);

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, filter: 'blur(4px)', y: 12 };
  const shown = reduce ? { opacity: 1 } : { opacity: 1, filter: 'blur(0px)', y: 0 };
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      style={style}
      initial={false}
      animate={armed && !inView ? hidden : shown}
      transition={{ duration: 0.3, ease: 'easeOut', delay: armed ? index * step : 0 }}
    >
      {children}
    </MotionTag>
  );
};
