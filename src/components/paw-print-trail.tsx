'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { cn } from '@/lib/utils';

// SVG da patinha (pode ser movido para um arquivo separado se preferir)
const PawSVG = () => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
    <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.7-33.3-14.3-70.1 10.2-84.1s59.7.9 78.7 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54.2-47.3 78.7-33.3s29.1 51.7 10.2 84.1s-54.2 47.3-78.7 33.3zM310.2 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
  </svg>
);

interface Paw {
  id: number;
  isRight: boolean;
  offset: number;
  rotation: number;
}

export function PawPrintTrail() {
  const [paws, setPaws] = useState<Paw[]>([]);
  const lastScrollY = useRef(0);
  const stepCount = useRef(0);
  const threshold = 80; // Distância de rolagem para criar uma nova pata

  const createPaw = useCallback(() => {
    stepCount.current++;
    const isRight = stepCount.current % 2 === 0;
    const newPaw: Paw = {
      id: Date.now() + Math.random(),
      isRight: isRight,
      offset: 10 + Math.random() * 50,
      rotation: isRight ? 20 : -20,
    };

    setPaws((prevPaws) => {
        const newPaws = [...prevPaws, newPaw];
        // Remove a patinha do DOM após a animação
        setTimeout(() => {
          setPaws((currentPaws) => currentPaws.filter(p => p.id !== newPaw.id));
        }, 2000); 
        return newPaws;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDistance = Math.abs(currentScrollY - lastScrollY.current);

      if (scrollDistance > threshold) {
        createPaw();
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [createPaw]);

  return (
    <>
      {paws.map((paw) => (
        <div
          key={paw.id}
          className="paw-print"
          style={{
            transform: `rotate(${paw.rotation}deg)`,
            ...(paw.isRight
              ? { right: `${paw.offset}px` }
              : { left: `${paw.offset}px` }),
          }}
        >
          <PawSVG />
        </div>
      ))}
    </>
  );
}
