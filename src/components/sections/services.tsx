import React from 'react';
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
  "https://files.catbox.moe/4kbiwn.png", // hamster
  "https://files.catbox.moe/j0tw0i.png", // cat
  "https://files.catbox.moe/z7tmya.png", // dog
];

export function Services() {
  return (
    <section 
      id="servicos" 
      className="relative w-full py-16 sm:py-24 overflow-hidden"
    >
       <div 
        className="absolute inset-0 z-0 bg-yellow-400"
      ></div>

      <img
        src="https://files.catbox.moe/ondkam.png"
        alt="Gato espiando do canto"
        className="absolute bottom-0 right-0 w-64 md:w-80 h-auto z-20 pointer-events-none transform -scale-x-100"
      />

      <div className="relative container mx-auto px-4 z-10">
        <div className="text-center mb-12 pt-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline mb-4">Nossos Serviços</h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Cuidado profissional com muito amor e a melhor estrutura tecnológica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => {
            const petImage = popupImages[index % popupImages.length];
            const isCat = petImage.includes('j0tw0i');
            const isHamster = petImage.includes('4kbiwn');
            
            const finalPositionStyle = isCat || isHamster 
              ? { transform: 'translate(-50%, calc(-100% + 15px))' }
              : { transform: 'translate(-50%, calc(-100% + 30px))' };

            return (
              <div 
                key={index}
                className="group relative bg-background/90 backdrop-blur-sm p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-visible border-b-4 border-transparent hover:border-accent"
              >
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                   <div className="mb-5 bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                    {React.cloneElement(service.icon, { className: 'text-primary' })}
                  </div>
                  <h3 className="text-xl font-bold text-primary text-center mb-3 font-headline">{service.title}</h3>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <img 
                  src={petImage}
                  alt="Pet espiando"
                  className={`absolute w-28 h-auto object-contain
                             top-0 left-1/2 
                             z-20 opacity-0 -translate-y-full
                             transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                             group-hover:opacity-100 
                             pointer-events-none`}
                  style={finalPositionStyle}
                />
                
                 <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 z-0"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};