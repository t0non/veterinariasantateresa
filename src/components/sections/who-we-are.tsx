'use client';

import Image from 'next/image';

export function WhoWeAre() {
  
  return (
    <section id="quem-somos" className="relative w-full py-16 sm:py-24 bg-blue-50 overflow-hidden z-30">
      {/* Separator Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] sm:h-[100px] fill-blue-50">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      <div className="relative container mx-auto px-4 md:px-6 z-10 pb-24">
        <div className="md:hidden text-left mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 sm:text-5xl font-headline">
              Quem Somos?
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left order-last md:order-none" data-aos="fade-right">
            <h2 className="hidden md:block text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 sm:text-5xl font-headline">
              Quem Somos?
            </h2>
            <div className="mt-6 text-lg leading-8 text-blue-900/70 space-y-4">
              <p>
                <span className="bg-gradient-to-r from-amber-200 to-yellow-400 px-2 py-0.5 rounded-md font-bold text-[#142850] shadow-sm">Desde 2008</span>, a Veterinária Santa Tereza tem sido <span className="bg-gradient-to-r from-amber-200 to-yellow-400 px-2 py-0.5 rounded-md font-bold text-[#142850] shadow-sm">referência</span> em cuidados veterinários em Belo Horizonte e região leste.
              </p>
              <p>
                Localizada na Rua Gabro, 87, no bairro Santa Tereza, nossa clínica se destaca por proporcionar um atendimento ágil e especializado, sempre focado no bem-estar dos pets.
              </p>
              <p>
                Nossa equipe é formada por profissionais apaixonados que tratam cada animal como se fosse da família, garantindo diagnósticos precisos e tratamentos eficazes.
              </p>
            </div>
          </div>
          
          <div className="relative h-64 sm:h-[400px] w-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 p-1 rounded-3xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500" data-aos="fade-left">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
             <Image
                src="/images/fachada.webp"
                alt="Fachada da Veterinária Santa Tereza"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
             />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
