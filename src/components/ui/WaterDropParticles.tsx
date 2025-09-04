'use client';

import { useEffect, useState } from 'react';

interface WaterDropParticlesProps {
  x: number;
  y: number;
  onComplete?: () => void;
}

export default function WaterDropParticles({ x, y, onComplete }: WaterDropParticlesProps) {
  const [particles] = useState(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      size: Math.random() * 8 + 6,
      // Start position spread out like a shower head (30px spread)
      startX: (Math.random() - 0.5) * 30,
      startY: (Math.random() - 0.5) * 10,
      // Mostly downward velocity with slight drift (2x faster)
      vx: (Math.random() - 0.5) * 1,      // Doubled horizontal drift
      vy: Math.random() * 2 + 8,          // Doubled downward velocity (8-10 px per frame)
    }));
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 1875);  // 25% shorter lifespan (was 2500ms, now 1875ms)

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none"
          style={{
            left: `${x + particle.startX}px`,
            top: `${y + particle.startY}px`,
            animation: `fall-${particle.id} 1.875s ease-in forwards`,
            zIndex: 9999,
          }}
        >
          <style jsx>{`
            @keyframes fall-${particle.id} {
              from {
                transform: translate(0, 0);
                opacity: 0.8;
              }
              to {
                transform: translate(${particle.vx * 100}px, ${particle.vy * 100}px);
                opacity: 0;
              }
            }
          `}</style>
          <div
            className="rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: '#4e8ad3',
              boxShadow: '0 2px 4px rgba(78, 138, 211, 0.5)',
            }}
          />
        </div>
      ))}
    </>
  );
}