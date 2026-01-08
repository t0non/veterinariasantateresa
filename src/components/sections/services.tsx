import React from 'react';
import { Stethoscope, Scissors, Syringe, Activity, HeartPulse, Home, Bone, CirclePlus } from 'lucide-react';

const servicesList = [
    { title: "Consultas Veterinárias", icon: <Stethoscope size={32} className="text-primary"/>, description: "Atendimento para cães, gatos e animais silvestres." },
    { title: "Cirurgias", icon: <Scissors size={32} className="text-primary"/>, description: "Procedimentos realizados com segurança e cuidado." },
    { title: "Vacinas e Internação", icon: <Syringe size={32} className="text-primary"/>, description: "Proteção e cuidado contínuo." },
    { title: "Exames de Hemograma e Raio-X", icon: <Activity size={32} className="text-primary"/>, description: "Diagnósticos rápidos com equipamentos internos." },
    { title: "Atendimento a Domicílio", icon: <Home size={32} className="text-primary"/>, description: "Conforto e praticidade para você e seu pet." },
    { title: "Banho e Tosa", icon: <Bone size={32} className="text-primary"/>, description: "Para manter seu pet limpo e bem tratado." },
    { title: "Venda de Medicamentos", icon: <HeartPulse size={32} className="text-primary"/>, description: "Produtos de qualidade para tratamento e prevenção." },
    { title: "Microchipagem", icon: <CirclePlus size={32} className="text-primary"/>, description: "Identificação segura para seu animal." },
];

const dogPopupImage = "https://files.catbox.moe/z7tmya.png";

export function Services() {
  return (
    <section 
      id="servicos" 
      className="relative w-full py-16 sm:py-24 bg-background overflow-hidden"
    >
       <div className="absolute inset-0 bg-secondary/20 opacity-50 z-0"></div>
       <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://files.catbox.moe/oy9c84.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1
        }}
      ></div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuidado profissional com muito amor e a melhor estrutura tecnológica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-background/90 backdrop-blur-sm p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-visible border-b-4 border-transparent hover:border-accent"
            >
              <div className="relative z-20 transition-transform duration-500 group-hover:-translate-y-2">
                 <div className="mb-5 bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary text-center mb-3 font-headline">{service.title}</h3>
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <img 
                src={dogPopupImage}
                alt="Cachorro espiando"
                className="absolute w-28 h-auto object-contain 
                           top-0 left-1/2 transform -translate-x-1/2 
                           z-30 opacity-0 -translate-y-full 
                           transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                           group-hover:opacity-100 group-hover:-translate-y-[15%] 
                           pointer-events-none"
              />
              
               <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
