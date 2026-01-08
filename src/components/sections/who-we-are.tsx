"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const professionals = [
  {
    id: 1,
    name: "Dra. Daniela Lage",
    crmv: "CRMV-MG 20458",
    image: "https://files.catbox.moe/ee41fg.png",
    specialty: "Clínica Geral"
  },
  {
    id: 2,
    name: "Dr. Cairo do Vale",
    crmv: "CRMV-MG 30628",
    image: "https://files.catbox.moe/bku7g5.png",
    specialty: "Cirurgia"
  },
  {
    id: 3,
    name: "Dr. Daniel Souza",
    crmv: "CRMV-MG 8456",
    image: "https://files.catbox.moe/987whh.png",
    specialty: "Ortopedia"
  },
  {
    id: 4,
    name: "Dr. Rafael Teresa",
    crmv: "CRMV-MG 23136",
    image: "https://files.catbox.moe/f9lydt.png",
    specialty: "Dermatologia"
  },
  {
    id: 5,
    name: "Dr. Lucca Arantes",
    crmv: "CRMV-MG 25691",
    image: "https://files.catbox.moe/c0ctip.png",
    specialty: "Cardiologia"
  },
  {
    id: 6,
    name: "Dr. Guilherme Marinho",
    crmv: "CRMV-MG 26342",
    image: "https://files.catbox.moe/ks4u8z.png",
    specialty: "Diagnóstico por Imagem"
  },
];

export function WhoWeAre() {
  return (
    <section id="equipe" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">
            Conheça Nossa Equipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais apaixonados e altamente qualificados prontos para cuidar do seu pet.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          className="team-swiper pb-16"
        >
          {professionals.map((prof) => (
            <SwiperSlide key={prof.id}>
              <div className="flex flex-col items-center bg-background p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-border h-full">
                
                <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden bg-primary/10 border-4 border-accent/30 shadow-sm">
                  <Image 
                    src={prof.image} 
                    alt={`Foto de ${prof.name}`}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {prof.name}
                  </h3>
                  <span className="block text-sm text-accent-foreground font-semibold mb-2">
                    {prof.specialty}
                  </span>
                  <p className="text-sm text-muted-foreground bg-muted py-1 px-3 rounded-full inline-block">
                    {prof.crmv}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .team-swiper .swiper-pagination-bullet-active {
          background-color: hsl(var(--accent)) !important;
        }
        .team-swiper .swiper-button-next, .team-swiper .swiper-button-prev {
          color: hsl(var(--primary)) !important;
        }
        .team-swiper .swiper-button-next:after, .team-swiper .swiper-button-prev:after {
          font-size: 24px !important;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};
