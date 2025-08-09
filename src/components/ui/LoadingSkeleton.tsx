'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
  animation?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
  animation = true
}) => {
  const baseClasses = 'bg-museum-light';
  
  const variantClasses = {
    text: 'rounded',
    rectangular: 'rounded-lg',
    circular: 'rounded-full'
  };
  
  const style = {
    width: width || (variant === 'text' ? '100%' : undefined),
    height: height || (variant === 'text' ? '1em' : undefined)
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  if (animation) {
    return (
      <motion.div
        className={classes}
        style={style}
        animate={{
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    );
  }
  
  return <div className={classes} style={style} />;
};

// Specific skeleton components
export const ArtworkCardSkeleton: React.FC = () => (
  <div className="space-y-4">
    <Skeleton variant="rectangular" className="aspect-[3/4] w-full" />
    <div className="space-y-2">
      <Skeleton variant="text" height="1.5rem" width="80%" />
      <Skeleton variant="text" height="1rem" width="60%" />
    </div>
  </div>
);

export const HeaderSkeleton: React.FC = () => (
  <div className="bg-museum-white border-b border-museum-light p-6">
    <div className="flex items-center justify-between max-w-7xl mx-auto">
      <Skeleton variant="text" width="120px" height="2rem" />
      <div className="hidden md:flex items-center space-x-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} variant="text" width="80px" height="1rem" />
        ))}
      </div>
      <Skeleton variant="rectangular" width="120px" height="44px" />
    </div>
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="min-h-screen flex items-center bg-museum-white p-8">
    <div className="max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <Skeleton variant="text" width="200px" height="1rem" />
            <div className="space-y-2">
              <Skeleton variant="text" width="100%" height="4rem" />
              <Skeleton variant="text" width="80%" height="4rem" />
              <Skeleton variant="text" width="60%" height="4rem" />
            </div>
            <Skeleton variant="text" width="100%" height="1.5rem" />
            <Skeleton variant="text" width="90%" height="1.5rem" />
          </div>
          <div className="flex gap-4">
            <Skeleton variant="rectangular" width="180px" height="52px" />
            <Skeleton variant="rectangular" width="160px" height="52px" />
          </div>
        </div>
        <div className="relative">
          <Skeleton variant="rectangular" className="aspect-[4/5] w-full" />
        </div>
      </div>
    </div>
  </div>
);

export const GallerySkeleton: React.FC = () => (
  <div className="py-20 bg-museum-light">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16 space-y-4">
        <Skeleton variant="text" width="200px" height="1rem" className="mx-auto" />
        <Skeleton variant="text" width="400px" height="3rem" className="mx-auto" />
        <Skeleton variant="text" width="600px" height="1.5rem" className="mx-auto" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <ArtworkCardSkeleton key={i} />
        ))}
      </div>
    </div>
  </div>
);

// Loading spinner component
export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
  
  return (
    <motion.div
      className={`${sizeClasses[size]} border-2 border-museum-light border-t-museum-red rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
};

// Page loading component
export const PageLoading: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-museum-white">
    <div className="text-center space-y-4">
      <LoadingSpinner size="lg" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-museum-medium font-poppins">Loading...</p>
      </motion.div>
    </div>
  </div>
);