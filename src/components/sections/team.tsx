"use client";
import React from 'react';
import Image from 'next/image';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const professionals = [
  {
    id: 1,
    name: "Dra. Daniela Lage",
    crmv: "CRMV-MG 20458",
    image: "/images/team/DR DANIELA.webp",
    specialty: "Clínica Geral"
  },
  {
    id: 2,
    name: "Dr. Cairo do Vale",
    crmv: "CRMV-MG 30628",
    image: "/images/team/DR CAIRO.webp",
    specialty: "Cirurgia"
  },
  {
    id: 3,
    name: "Dr. Daniel Souza",
    crmv: "CRMV-MG 8456",
    image: "/images/team/DR DANIEL.webp",
    specialty: "Ortopedia"
  },
  {
    id: 4,
    name: "Dr. Rafael Teresa",
    crmv: "CRMV-MG 23136",
    image: "/images/team/DR RAFAEL.webp",
    specialty: "Dermatologia"
  },
  {
    id: 5,
    name: "Dr. Lucca Arantes",
    crmv: "CRMV-MG 25691",
    image: "/images/team/DR LUCCA.webp",
    specialty: "Cardiologia"
  },
  {
    id: 6,
    name: "Dr. Guilherme Marinho",
    crmv: "CRMV-MG 26342",
    image: "/images/team/DR GUILHERME.webp",
    specialty: "Diagnóstico por Imagem"
  },
];

export function Team() {
  return (
    <section id="equipe" className="relative z-50 py-16 sm:py-24 bg-gradient-to-b from-amber-400 to-orange-500">
      {/* Separator Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] sm:h-[100px] fill-amber-400">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#142850] to-[#0a1529] mb-6 font-headline drop-shadow-sm">
            Conheça Nossa Equipe
          </h2>
          <p className="text-xl text-white font-medium max-w-2xl mx-auto drop-shadow-md">
            Profissionais apaixonados e altamente qualificados prontos para cuidar do seu pet.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 pb-4">
            {professionals.map((prof) => (
              <CarouselItem key={prof.id} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="flex flex-col items-center bg-background p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-border h-full group">
                  
                  <div className="relative p-1 rounded-full bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-500 mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white">
                      <Image 
                        src={prof.image} 
                        alt={`Foto de ${prof.name}`}
                        width={192}
                        height={192}
                        sizes="192px"
                        className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {prof.name}
                    </h3>
                    <span className="block text-sm text-accent-foreground font-semibold mb-2">
                      {prof.specialty}
                    </span>
                    <p className="text-sm text-white bg-gradient-to-r from-blue-500 to-blue-700 py-1 px-3 rounded-full inline-block font-medium shadow-sm">
                      {prof.crmv}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-12 text-center">
        <Button
          asChild
          size="lg"
          className="animate-pulse-blue-gentle rounded-full bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950 px-8 py-6 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:from-blue-500 hover:to-blue-900 border-none ring-0 outline-none focus:ring-0 focus:outline-none whitespace-normal h-auto min-h-[56px] hover:shadow-blue-600/50"
        >
          <a href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20um%20especialista." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 fill-current" />
            Agendar com Especialista
          </a>
        </Button>
      </div>
    </div>
    </section>
  );
};
