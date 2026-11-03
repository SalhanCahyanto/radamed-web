'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  className,
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

