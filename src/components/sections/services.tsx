'use client';
import React, { useEffect, useRef } from 'react';
import { Stethoscope, Scissors, Syringe, Activity, HeartPulse, Home, Bone, CirclePlus } from 'lucide-react';

const servicesList = [
    { title: "Consultas Veterinárias", icon: <Stethoscope size={32} />, description: "Atendimento para cães, gatos e animais silvestres." },
    { title: "Cirurgias", icon: <Scissors size={32} />, description: "Procedimentos realizados com segurança e cuidado." },
    { title: "Vacinas e Internação", icon: <Syringe size={32} />, description: "Proteção e cuidado contínuo." },
    { title: "Exames de Hemograma e Raio-X", icon: <Activity size={32} />, description: "Diagnósticos rápidos com equipamentos internos." },
    { title: "Atendimento a Domicílio", icon: <Home size={32} />, description: "Conforto e praticidade para você e seu pet." },
    { title: "Banho e Tosa", icon: <Bone size={32} />, description: "Para manter seu pet limpo e bem tratado." },
    { title: "Venda de Medicamentos", icon: <HeartPulse size={32} />, description: "Produtos de qualidade para tratamento e prevenção." },
    { title: "Microchipagem", icon: <CirclePlus size={32} />, description: "Identificação segura para seu animal." },
];

const popupImages = [
  "https://files.catbox.moe/z7tmya.png", // dog
  "https://files.catbox.moe/j0tw0i.png", // cat
  "https://files.catbox.moe/4kbiwn.png", // hamster
];

export function Services() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (window.innerWidth < 768 && entry.isIntersecting) {
            const petImage = entry.target.querySelector<HTMLElement>(".pet-image");
            if (petImage) {
              petImage.classList.remove("animate-peek");
              void petImage.offsetWidth;
              petImage.classList.add("animate-peek");
            }
          }
        });
      },
      { 
        threshold: 0.2, // Dispara a animação quando 20% do card está visível
        rootMargin: "0px 0px -10% 0px"
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="servicos" 
      className="relative w-full py-16 sm:py-24 overflow-hidden"
    >
       <div 
        className="absolute inset-0 z-0 bg-primary"
      ></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"></div>


      <img
        src="https://files.catbox.moe/ondkam.png"
        alt="Gato espiando do canto"
        className="absolute bottom-0 right-0 w-32 md:w-48 h-auto z-20 pointer-events-none transform -scale-x-100"
      />

      <div className="relative container mx-auto px-4 z-10">
        <div className="text-center mb-12 pt-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline mb-4">Nossos Serviços</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Cuidado profissional com muito amor e a melhor estrutura tecnológica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => {
            const petImage = popupImages[index % popupImages.length];
            const isDog = petImage.includes('z7tmya');
            const isHamster = petImage.includes('4kbiwn');
            
            const dogPosition = { transform: 'translate(-50%, -73%)' };
            const hamsterPosition = { transform: 'translate(-70%, -100%)' };
            const catPosition = { transform: 'translate(-50%, -100%)' };

            const finalPositionStyle = isDog ? dogPosition : isHamster ? hamsterPosition : catPosition;
            
            const animationVars = {
                '--transform-start': isDog ? 'translate(-50%, 0%)' : isHamster ? 'translate(-70%, -20%)' : 'translate(-50%, -20%)',
                '--transform-peek': isDog ? 'translate(-50%, -73%)' : isHamster ? 'translate(-70%, -100%)' : 'translate(-50%, -100%)',
                '--transform-end': isDog ? 'translate(-50%, 0%)' : isHamster ? 'translate(-70%, -20%)' : 'translate(-50%, -20%)',
            } as React.CSSProperties;


            return (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="group relative bg-background/90 backdrop-blur-sm p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-visible border-b-4 border-transparent hover:border-accent"
              >
                <div className="relative z-10 transition-transform duration-500 md:group-hover:-translate-y-2">
                   <div className="mb-5 bg-gradient-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-colors">
                    {React.cloneElement(service.icon, { className: 'text-accent-foreground' })}
                  </div>
                  <h3 className="text-xl font-bold text-primary text-center mb-3 font-headline">{service.title}</h3>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <img 
                  src={petImage}
                  alt="Pet espiando"
                  className="pet-image absolute w-28 h-auto object-contain top-0 left-1/2 z-0 opacity-0 pointer-events-none md:group-hover:opacity-100 md:transition-all md:duration-500 md:ease-[cubic-bezier(0.34,1.56,0.64,1)] md:group-hover:-translate-y-full"
                  style={{ ...finalPositionStyle, ...animationVars }}
                />
                
                 <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 z-0"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
