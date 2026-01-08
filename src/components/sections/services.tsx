import React from 'react';
import { Stethoscope, Scissors, Syringe, Activity, Home, HeartPulse, Bath, Pill } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
    { title: "Consultas", icon: <Stethoscope size={32} className="text-primary"/>, description: "Atendimento clínico completo para cães, gatos e silvestres." },
    { title: "Cirurgias", icon: <Scissors size={32} className="text-primary"/>, description: "Centro cirúrgico equipado e monitoramento constante." },
    { title: "Vacinação", icon: <Syringe size={32} className="text-primary"/>, description: "Protocolos de imunização atualizados e seguros." },
    { title: "Exames", icon: <Activity size={32} className="text-primary"/>, description: "Laboratório próprio para resultados rápidos e precisos." },
    { title: "Atendimento a Domicílio", icon: <Home size={32} className="text-primary"/>, description: "Conforto e praticidade para você e seu pet." },
    { title: "Internação", icon: <HeartPulse size={32} className="text-primary"/>, description: "Baias individuais e climatizadas com supervisão 24h." },
    { title: "Banho e Tosa", icon: <Bath size={32} className="text-primary"/>, description: "Estética animal com produtos hipoalergênicos." },
    { title: "Medicamentos", icon: <Pill size={32} className="text-primary"/>, description: "Produtos de qualidade para tratamento e prevenção." },
];

export function Services() {
  return (
    <section 
      id="servicos" 
      className="relative w-full py-16 sm:py-24"
      style={{
        backgroundImage: "url('https://files.catbox.moe/oy9c84.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-background/80 z-0"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos cuidado completo para o seu melhor amigo com a melhor estrutura da região.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-accent"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-secondary rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-3 font-headline">{service.title}</h3>
              <p className="text-muted-foreground text-center text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
