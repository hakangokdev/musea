'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'glass-red';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  loading = false,
  icon,
  iconPosition = 'left',
  disabled,
  ...props
}) => {
  const baseClasses = 'font-poppins font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden inline-flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-museum-red text-museum-white hover:bg-opacity-90 focus:ring-museum-red shadow-lg hover:shadow-xl',
    secondary: 'bg-museum-black text-museum-white hover:bg-opacity-90 focus:ring-museum-black shadow-lg hover:shadow-xl',
    outline: 'border-2 border-museum-black text-museum-black hover:bg-museum-black hover:text-museum-white focus:ring-museum-black',
    ghost: 'text-museum-black hover:bg-museum-light focus:ring-museum-black',
    glass: 'bg-white/5 backdrop-blur-md border border-white/10 text-museum-white hover:bg-white/10 hover:border-white/20 focus:ring-white/30 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300',
    'glass-red': 'bg-museum-red/10 backdrop-blur-md border border-museum-red/20 text-museum-white hover:bg-museum-red/20 hover:border-museum-red/30 focus:ring-museum-red/30 shadow-lg hover:shadow-museum-red/25 hover:-translate-y-0.5 transition-all duration-300'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md min-h-[36px]',
    md: 'px-6 py-3 text-base rounded-lg min-h-[44px]',
    lg: 'px-8 py-4 text-lg rounded-xl min-h-[52px]'
  };
  
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const isDisabled = disabled || loading;
  
  return (
    <motion.button
      className={classes}
      disabled={isDisabled}
      whileHover={!isDisabled ? { scale: 1.02 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Content */}
      <div className="relative flex items-center gap-2">
        {loading && (
          <Loader2 className={`${iconSizes[size]} animate-spin`} />
        )}
        
        {!loading && icon && iconPosition === 'left' && (
          <span className={iconSizes[size]}>{icon}</span>
        )}
        
        <span>{children}</span>
        
        {!loading && icon && iconPosition === 'right' && (
          <span className={iconSizes[size]}>{icon}</span>
        )}
      </div>
    </motion.button>
  );
};