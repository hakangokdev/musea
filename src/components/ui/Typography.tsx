'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface TypographyProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-large' | 'body-small' | 'caption' | 'display';
  font?: 'coanda' | 'poppins';
  color?: 'primary' | 'secondary' | 'inverse' | 'accent';
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  animate?: boolean;
  delay?: number;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  font = 'poppins',
  color = 'primary',
  className = '',
  children,
  as,
  animate = false,
  delay = 0,
  ...props
}) => {
  const fontClasses = {
    coanda: 'font-coanda',
    poppins: 'font-poppins'
  };
  
  const colorClasses = {
    primary: 'text-museum-black',
    secondary: 'text-museum-medium',
    inverse: 'text-museum-white',
    accent: 'text-museum-red'
  };
  
  const variantClasses = {
    display: 'text-6xl md:text-8xl font-black leading-none tracking-tight font-coanda',
    h1: 'text-4xl md:text-6xl font-bold leading-tight font-coanda',
    h2: 'text-3xl md:text-5xl font-bold leading-tight font-coanda',
    h3: 'text-2xl md:text-4xl font-semibold leading-snug font-coanda',
    h4: 'text-xl md:text-3xl font-semibold leading-snug font-coanda',
    h5: 'text-lg md:text-2xl font-medium leading-normal font-coanda',
    h6: 'text-base md:text-xl font-medium leading-normal font-coanda',
    'body-large': 'text-lg font-normal leading-relaxed font-poppins',
    body: 'text-base font-normal leading-normal font-poppins',
    'body-small': 'text-sm font-normal leading-normal font-poppins',
    caption: 'text-xs font-normal leading-normal font-poppins'
  };
  
  const defaultElements = {
    display: 'h1',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    'body-large': 'p',
    body: 'p',
    'body-small': 'p',
    caption: 'span'
  };
  
  const Element = as || (defaultElements[variant] as React.ElementType) || 'p';
  const classes = `${variantClasses[variant]} ${colorClasses[color]} ${className}`;
  
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }
  } : {};
  
  if (animate) {
    const { transition, ...restAnimationProps } = animationProps;
    return (
      <motion.div
        className={classes}
        initial={restAnimationProps.initial}
        animate={restAnimationProps.animate}
        transition={transition}
        {...(props as any)}
      >
        {React.createElement(Element, { className: 'inherit' }, children)}
      </motion.div>
    );
  }
  
  return React.createElement(Element, { className: classes, ...props }, children);
};