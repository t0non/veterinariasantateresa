'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Stethoscope, Scissors, Syringe, Activity, HeartPulse, Home, Bone, CirclePlus, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const servicesList = [
    { 
      title: "Consultas Veterinárias", 
      icon: <Stethoscope size={32} />, 
      description: "Atendimento para cães, gatos e animais silvestres.",
      ctaText: "Agendar Consulta",
      whatsappText: "Olá, gostaria de agendar uma consulta veterinária."
    },
    { 
      title: "Cirurgias", 
      icon: <Scissors size={32} />, 
      description: "Procedimentos realizados com segurança e cuidado.",
      ctaText: "Falar com o Cirurgião",
      whatsappText: "Olá, preciso de informações sobre cirurgias."
    },
    { 
      title: "Vacinas e Internação", 
      icon: <Syringe size={32} />, 
      description: "Proteção e cuidado contínuo.",
      ctaText: "Verificar Carteirinha",
      whatsappText: "Olá, gostaria de verificar a carteirinha de vacinação."
    },
    { 
      title: "Exames de Hemograma e Raio-X", 
      icon: <Activity size={32} />, 
      description: "Diagnósticos rápidos com equipamentos internos.",
      ctaText: "Agendar Exame",
      whatsappText: "Olá, preciso agendar exames para meu pet."
    },
    { 
      title: "Atendimento a Domicílio", 
      icon: <Home size={32} />, 
      description: "Conforto e praticidade para você e seu pet.",
      ctaText: "Solicitar Visita",
      whatsappText: "Olá, gostaria de solicitar atendimento a domicílio."
    },
    { 
      title: "Banho e Tosa", 
      icon: <Bone size={32} />, 
      description: "Para manter seu pet limpo e bem tratado.",
      ctaText: "Quero agendar um banho",
      whatsappText: "Quero agendar um banho."
    },
    { 
      title: "Venda de Medicamentos", 
      icon: <HeartPulse size={32} />, 
      description: "Produtos de qualidade para tratamento e prevenção.",
      ctaText: "Consultar Medicamento",
      whatsappText: "Olá, preciso consultar a disponibilidade de um medicamento."
    },
    { 
      title: "Microchipagem", 
      icon: <CirclePlus size={32} />, 
      description: "Identificação segura para seu animal.",
      ctaText: "Saber mais",
      whatsappText: "Olá, gostaria de saber mais sobre microchipagem."
    },
];

const popupImages = [
  "https://files.catbox.moe/z7tmya.png", // dog
  "https://files.catbox.moe/j0tw0i.png", // cat
  "https://files.catbox.moe/4kbiwn.png", // hamster
];

export function Services() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const WHATSAPP_NUMBER = "5511999999999";

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
    <section id="servicos" className="relative z-20 pt-16 pb-24 sm:py-24 bg-gradient-to-b from-[#142850] to-[#0f172a] transition-colors duration-300">
      {/* Separator Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] sm:h-[100px] fill-[#142850]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      <div className="container px-4 md:px-6 mx-auto">
        
        <div className="text-center mb-12 pt-12">
          <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 sm:text-5xl font-headline mb-4 drop-shadow-sm">Nossos Serviços</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
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
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative transition-all duration-500 isolate"
              >
                <Image 
                  src={petImage}
                  alt="Pet espiando"
                  width={150}
                  height={150}
                  unoptimized
                  className="pet-image absolute w-28 h-auto object-contain top-0 left-1/2 z-[-1] pointer-events-none
                  opacity-0
                  md:group-hover:opacity-100 md:transition-all md:duration-500 md:ease-[cubic-bezier(0.34,1.56,0.64,1)] md:group-hover:-translate-y-full"
                  style={{ ...finalPositionStyle, ...animationVars }}
                />

                <div className="relative z-10 bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl h-full flex flex-col border-b-4 border-transparent hover:border-accent transition-all duration-300">
                   <div className="mb-4 sm:mb-5 bg-gradient-to-br from-yellow-300 to-yellow-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-lg ring-4 ring-white/50">
                    {React.cloneElement(service.icon, { className: 'text-white h-7 w-7 sm:h-8 sm:w-8' })}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#142850] to-[#2563eb] text-center mb-2 sm:mb-3 font-headline">{service.title}</h3>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full mt-auto border-primary/10 hover:border-transparent text-sm h-10 sm:h-11 bg-slate-50 hover:bg-gradient-to-r hover:from-[#142850] hover:to-[#2563eb] hover:text-white transition-all duration-300 text-primary font-medium"
                  >
                    <a 
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappText)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {service.ctaText}
                    </a>
                  </Button>

                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 -z-10"></div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <Button
            asChild
            size="lg"
            className="animate-pulse-blue-gentle rounded-full bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950 px-8 py-6 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:from-blue-500 hover:to-blue-900 border-none ring-0 outline-none focus:ring-0 focus:outline-none whitespace-normal h-auto min-h-[56px] hover:shadow-blue-600/50"
          >
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o.`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6 fill-current" />
              Agendar Serviço Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
