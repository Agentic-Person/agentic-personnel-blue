'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ShimmerButtonProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ShimmerButton({ href, children = "Chat with Our AI", className = "" }: ShimmerButtonProps) {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random star positions
    const newStars = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: -10 + Math.random() * 120, // Allow stars to go slightly outside button
      y: -10 + Math.random() * 120,
      delay: Math.random() * 4
    }));
    setStars(newStars);
  }, []);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`shimmer-button ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated gradient border */}
      <div className="animated-border"></div>
      
      {/* Inner button content */}
      <div className="button-inner">
        {/* Shimmer overlay */}
        <div className="shimmer-overlay"></div>
        
        {/* Sparkle stars */}
        <div className="sparkles-container">
          {stars.map((star) => (
            <span
              key={star.id}
              className="sparkle-star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                animationDelay: `${star.delay}s`
              }}
            >
              ✨
            </span>
          ))}
        </div>
        
        {/* Floating particles */}
        <div className="particles-container">
          <span className="particle particle-1">✦</span>
          <span className="particle particle-2">★</span>
          <span className="particle particle-3">✧</span>
          <span className="particle particle-4">⋆</span>
        </div>
        
        {/* Button text */}
        <span className="button-text">{children}</span>
        
        {/* Glow effect */}
        <div className="glow-effect"></div>
      </div>
    </motion.a>
  );
}