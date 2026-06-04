import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function BlurText({
  text = '',
  delay = 200,
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top', // 'top' or 'bottom'
  stepDuration = 0.35,
  className = '',
}) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stepDuration,
        delayChildren: delay / 1000,
      },
    },
  };

  const childVariants = {
    hidden: {
      filter: 'blur(10px)',
      opacity: 0,
      y: direction === 'top' ? -30 : 30,
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`blur-text-container ${className}`}
      style={{ display: 'inline-flex', flexWrap: 'wrap' }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{
            display: 'inline-block',
            whiteSpace: element === ' ' ? 'pre' : 'normal',
            marginRight: animateBy === 'words' ? '0.25em' : '0',
          }}
        >
          {element}
        </motion.span>
      ))}
    </motion.span>
  );
}
