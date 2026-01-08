'use client';

import { useState, useEffect, useCallback } from 'react';
import { PawPrint } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Paw {
  id: number;
  x: number;
  y: number;
  rotation: number;
  side: 'left' | 'right';
}

export function PawPrintTrail() {
  const [paws, setPaws] = useState<Paw[]>([]);
  const [lastScrollY, setLastScrollY] = useState(0);

  const addPaw = useCallback((scrollY: number) => {
    const lastPaw = paws[paws.length - 1];
    const newSide = lastPaw?.side === 'left' ? 'right' : 'left';
    
    // Position paws on either side of the screen
    const xPosition = newSide === 'left' 
      ? Math.random() * 20 + 5 
      : 100 - (Math.random() * 20 + 5);

    const newPaw: Paw = {
      id: Date.now() + Math.random(),
      x: xPosition,
      y: scrollY + window.innerHeight - 100, // Start from bottom
      rotation: Math.random() * 40 - 20,
      side: newSide,
    };
    
    setPaws((prevPaws) => [...prevPaws, newPaw]);
  }, [paws]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add a paw every 150px of scrolling
      if (Math.abs(currentScrollY - lastScrollY) > 150) {
        addPaw(currentScrollY);
        setLastScrollY(currentScrollY);
      }

      // Clean up paws that are way off-screen
      setPaws((prevPaws) =>
        prevPaws.filter(
          (paw) => paw.y > currentScrollY - window.innerHeight * 2
        )
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [addPaw, lastScrollY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {paws.map((paw) => (
        <PawPrint
          key={paw.id}
          className={cn(
            'absolute text-primary/10 animate-paw-fade-in',
            paw.side === 'left' ? 'transform -scale-x-100' : ''
          )}
          style={{
            left: `${paw.x}%`,
            top: `${paw.y}px`,
            transform: `rotate(${paw.rotation}deg) ${paw.side === 'left' ? 'scaleX(-1)' : 'scaleX(1)'}`,
            width: '40px',
            height: '40px'
          }}
        />
      ))}
    </div>
  );
}
