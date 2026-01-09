import React from 'react';
import Image from 'next/image';

export function BlueTriangleSeparator() {
  return (
    <div className="relative w-full z-30 h-[50px] md:h-[120px]" style={{ marginTop: '-2px' }}>
      {/* 1. Triângulo Azul (Fundo) - Extendido para evitar gaps */}
      <div className="absolute inset-x-0 top-[-2px] bottom-0 bg-[#0f172a] z-10"></div>

      {/* 2. Gato (Meio) */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-visible">
        <div className="container mx-auto px-4 relative h-full">
           {/* Wrapper de Posicionamento */}
           <div className="absolute bottom-0 left-[85%] sm:left-[15%] lg:left-[12.5%] -translate-x-1/2 w-72 sm:w-96 md:w-[500px] h-auto z-20">
              {/* Wrapper de Espelhamento */}
              <div className="-scale-x-100 w-full h-full">
                 {/* Wrapper de Animação (Float) */}
                 <div className="w-full h-full relative">
                    <Image
                      src="/images/gatoloco.png"
                      alt="Gato espiando"
                      fill
                      className="object-contain transition-transform duration-500 hover:-translate-y-4"
                      sizes="(max-width: 768px) 384px, 500px"
                    />
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* 3. Máscaras Brancas (Frente) */}
      <svg
        className="absolute inset-0 w-full h-full z-30"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
      >
         {/* Left Mask - Extended to avoid gaps */}
         <path d="M-1,59 L600,100 L-1,101 Z" fill="#FFFFFF" stroke="none" />
         {/* Right Mask - Extended to avoid gaps */}
         <path d="M1201,59 L600,100 L1201,101 Z" fill="#FFFFFF" stroke="none" />
      </svg>
    </div>
  );
}
