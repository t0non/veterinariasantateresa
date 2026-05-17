"use client";
import { useEffect, useRef } from "react";

const PawTrail = () => {
  const stepCount = useRef(0);

  useEffect(() => {
    const pawContainers = document.querySelectorAll<HTMLElement>('[data-paw-container]');
    if (pawContainers.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const handleMouseMove = (e: MouseEvent) => {
            const container = entry.target as HTMLElement;
            const rect = container.getBoundingClientRect();
            // Posição do mouse relativa ao container
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            createPaw(container, x, y);
          };

          entry.target.addEventListener('mousemove', handleMouseMove as EventListener);
          (entry.target as any).__paw_listener = handleMouseMove;
        } else {
          const handleMouseMove = (entry.target as any).__paw_listener;
          if (handleMouseMove) {
            entry.target.removeEventListener('mousemove', handleMouseMove);
          }
        }
      });
    }, { threshold: 0.1 });

    pawContainers.forEach(container => observer.observe(container));

    const createPaw = (container: HTMLElement, x: number, y: number) => {
        stepCount.current++;
        if (stepCount.current % 15 !== 0) return; // A cada 15 movimentos do mouse

        const paw = document.createElement("div");
        const size = 35;
        const isLeft = stepCount.current % 30 === 0;

        paw.style.position = "absolute";
        paw.style.left = `${x - size / 2}px`;
        paw.style.top = `${y - size / 2}px`;
        paw.style.width = `${size}px`;
        paw.style.height = `${size}px`;
        paw.style.pointerEvents = "none";
        paw.style.opacity = "0.4"; // Opacidade reduzida
        const rotation = isLeft ? -15 : 15;
        paw.style.transform = `rotate(${rotation}deg)`;
        paw.style.transition = "opacity 2.5s ease-out, transform 2.5s ease-out";
        paw.style.zIndex = "20";

        paw.innerHTML = `
            <svg viewBox="0 0 512 512" fill="#142850" xmlns="http://www.w3.org/2000/svg">
             <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.7-33.3-14.3-70.1 10.2-84.1s59.7.9 78.7 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54.2-47.3 78.7-33.3s29.1 51.7 10.2 84.1s-54.2 47.3-78.7 33.3zM310.2 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
            </svg>
        `;

        container.appendChild(paw);

        setTimeout(() => {
            paw.style.opacity = "0";
            paw.style.transform = `translateY(-20px) rotate(${rotation}deg) scale(0.9)`;
            setTimeout(() => {
                paw.remove();
            }, 2500);
        }, 100);
    };

    return () => {
      pawContainers.forEach(container => {
        const handleMouseMove = (container as any).__paw_listener;
        if (handleMouseMove) {
          container.removeEventListener('mousemove', handleMouseMove);
        }
      });
      observer.disconnect();
    };
  }, []);

  return null;
};

export { PawTrail };

export const PawPrintTrail = PawTrail;
