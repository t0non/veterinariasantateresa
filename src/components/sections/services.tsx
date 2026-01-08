import React from 'react';
import { Stethoscope, Scissors, Syringe, Activity, HeartPulse, Home, Bone, CirclePlus } from 'lucide-react';

const servicesList = [
    { title: "Consultas", icon: <Stethoscope size={32} className="text-primary"/>, description: "Atendimento clínico completo para seu pet." },
    { title: "Cirurgias", icon: <Scissors size={32} className="text-primary"/>, description: "Centro cirúrgico equipado e seguro." },
    { title: "Vacinação", icon: <Syringe size={32} className="text-primary"/>, description: "Imunização atualizada e protocolos seguros." },
    { title: "Exames", icon: <Activity size={32} className="text-primary"/>, description: "Diagnósticos rápidos em laboratório próprio." },
    { title: "Internação", icon: <HeartPulse size={32} className="text-primary"/>, description: "Cuidado 24h em ambiente climatizado." },
    { title: "Home Care", icon: <Home size={32} className="text-primary"/>, description: "Atendimento veterinário no seu lar." },
    { title: "Especialidades", icon: <Bone size={32} className="text-primary"/>, description: "Cardiologia, oftalmologia e mais." },
    { title: "Microchipagem", icon: <CirclePlus size={32} className="text-primary"/>, description: "Identificação segura para seu animal." },
];

const dogPopupImage = "https://files.catbox.moe/bsjtzp.png";

export function Services() {
  return (
    <section 
      id="servicos" 
      className="relative w-full py-16 sm:py-24 bg-secondary/30 overflow-hidden"
    >
       <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c-1.5 0-3 1.5-3 3 0 1.5 1.5 3 3 3 1.5 0 3-1.5 3-3 0-1.5-1.5-3-3-3zm0 10c-2.5 0-5 2.5-5 5 0 2.5 2.5 5 5 5 1.5 0 3-1.5 3-3 0-1.5-1.5-3-3-3zm-10 5c-1.5 0-3 1.5-3 3 0 1.5 1.5 3 3 3 1.5 0 3-1.5 3-3 0-1.5-1.5-3-3-3zm20 0c-1.5 0-3 1.5-3 3 0 1.5 1.5 3 3 3 1.5 0 3-1.5 3-3 0-1.5-1.5-3-3-3z' fill='%23142850' fill-rule='evenodd'/%3E%3C/svg%3E")`}}></div>

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
              className="group relative bg-background p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-visible border-b-4 border-transparent hover:border-accent"
            >
              <div className="relative z-20 bg-background transition-transform duration-500 group-hover:-translate-y-2">
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
                className="absolute w-28 h-auto object-contain bottom-0 left-1/2 transform -translate-x-1/2 z-30 opacity-0 translate-y-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:opacity-100 group-hover:translate-y-[15%] pointer-events-none"
              />
              
               <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
