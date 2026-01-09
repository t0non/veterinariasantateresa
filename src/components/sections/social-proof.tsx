'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    id: 'pet-testimonial-1',
    name: 'Alyson França',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Altamente recomendado. Excelente clínica, profissionais carinhosos e ótimos. Fidelinho frequentou por muito tempo o estabelecimento e contou com o carinho de pessoas muito bacanas, como o vet. Daniel, mas também diversos outros, especialmente do banho e tosa.',
    rating: 5,
  },
  {
    id: 'pet-testimonial-2',
    name: 'Marilene Amador',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Quero agradecer a toda equipe médica (Dra. Daniela, dr. Caio e dr. Daniel) Pelo profissionalismo carinho e dedicação prestados a Kira. Muito obrigado por proporcionar a minha melhor amiga (Kira ) mais saude e vida. Deus abençoe vcs.',
    rating: 5,
  },
  {
    id: 'pet-testimonial-3',
    name: 'Luiza Carvalho Martins',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Indico muito esta clínica, ótimo atendimento valores justos. A clínica é ótima, bem organizada,limpinha, e bem equipada, profissionais excelentes, cuidadosos com os pets e com a gente TB, equipe de veterinários completa e bem treinada.',
    rating: 5,
  },
  {
    id: 'pet-testimonial-4',
    name: 'Luly Lage',
    image: 'https://randomuser.me/api/portraits/women/90.jpg',
    text: 'Um ambiente amigável, onde não só os pets - que são a prioridade - como também nós, que nos preocupamos com eles, nos sentimos sempre em casa. Obrigada a toda equipe pelo carinho com a Arwen sempre que ela precisa de algo!',
    rating: 5,
  },
  {
    id: 'pet-testimonial-5',
    name: 'Vinícius Gamaliel',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'Local maravilhoso, me deu todo suporte quando precisei com meu cachorro. Ele ficou internado por vários dias e foi muito bem tratado. Agradeço demais.',
    rating: 5,
  },
];

export function SocialProof() {
  const [starsVisible, setStarsVisible] = useState(0);
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          [1, 2, 3, 4, 5].forEach((i) => {
            setTimeout(() => {
              setStarsVisible(i);
              if (i === 5) {
                const rect = containerRef.current?.getBoundingClientRect();
                if (rect) {
                    const x = (rect.left + rect.width / 2) / window.innerWidth;
                    const y = (rect.top + rect.height / 2) / window.innerHeight;
                    
                    const count = 400;
                    const defaults = {
                        origin: { x, y },
                        colors: ['#FFD700', '#FFA500', '#FF4500', '#2563eb', '#1d4ed8', '#60a5fa'],
                        disableForReducedMotion: true
                    };

                    const fire = (particleRatio: number, opts: any) => {
                        confetti({
                            ...defaults,
                            ...opts,
                            particleCount: Math.floor(count * particleRatio)
                        });
                    }

                    fire(0.25, {
                        spread: 26,
                        startVelocity: 55,
                    });
                    fire(0.2, {
                        spread: 60,
                    });
                    fire(0.35, {
                        spread: 100,
                        decay: 0.91,
                        scalar: 0.8
                    });
                    fire(0.1, {
                        spread: 120,
                        startVelocity: 25,
                        decay: 0.92,
                        scalar: 1.2,
                        shapes: ['star']
                    });
                    fire(0.1, {
                        spread: 120,
                        startVelocity: 45,
                    });
                }
              }
            }, i * 600);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="depoimentos" className="relative z-20 py-16 sm:py-24 bg-white text-foreground overflow-hidden">
      {/* Separator Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] sm:h-[100px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      <svg width="0" height="0" className="absolute">
        <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </svg>
      <div className="container relative z-10 mx-auto px-4 md:px-6" ref={containerRef}>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#142850] to-[#2563eb] sm:text-5xl font-headline mb-4">
            O que dizem sobre nós
          </h2>
          <div className="flex justify-center mb-6 min-h-[48px] items-center gap-2">
             <div className="flex gap-1 sm:gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="relative transition-all duration-1000" 
                       style={{ 
                         transform: i < starsVisible ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-180deg)',
                         opacity: i < starsVisible ? 1 : 0.2
                       }}>
                    {/* Realistic 3D Gold Star */}
                    <svg width="48" height="48" viewBox="0 0 24 24" className="drop-shadow-lg">
                        <defs>
                            <linearGradient id="gold-shine" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FFF7CC" />
                                <stop offset="50%" stopColor="#FFD700" />
                                <stop offset="100%" stopColor="#B8860B" />
                            </linearGradient>
                        </defs>
                        {/* 5 Rays with 2 facets each for 3D effect */}
                        <g transform="translate(12, 12.5) scale(0.85)">
                             {/* Top Ray */}
                             <path d="M0 -11 L3 -3 L0 0 Z" fill="#FCD34D" /> {/* Right facet */}
                             <path d="M0 -11 L-3 -3 L0 0 Z" fill="#D97706" /> {/* Left facet */}
                             
                             {/* Top Right Ray */}
                             <path d="M10.5 -3.4 L3 -3 L0 0 Z" fill="#F59E0B" />
                             <path d="M10.5 -3.4 L4.8 2.5 L0 0 Z" fill="#FCD34D" />
                             
                             {/* Bottom Right Ray */}
                             <path d="M6.5 9 L4.8 2.5 L0 0 Z" fill="#D97706" />
                             <path d="M6.5 9 L0 5 L0 0 Z" fill="#F59E0B" />
                             
                             {/* Bottom Left Ray */}
                             <path d="M-6.5 9 L0 5 L0 0 Z" fill="#FCD34D" />
                             <path d="M-6.5 9 L-4.8 2.5 L0 0 Z" fill="#D97706" />
                             
                             {/* Top Left Ray */}
                             <path d="M-10.5 -3.4 L-4.8 2.5 L0 0 Z" fill="#F59E0B" />
                             <path d="M-10.5 -3.4 L-3 -3 L0 0 Z" fill="#FCD34D" />
                        </g>
                    </svg>
                  </div>
                ))}
             </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Quem ama, recomenda</h2>
          <p className="mt-4 text-xl font-semibold text-primary/80">
            Mais de 5.000 pets atendidos com carinho e dedicação.
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
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => {
              return (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="bg-white border-muted shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative h-16 w-16 shrink-0">
                             <Image
                               src={testimonial.image}
                               alt={`Foto de ${testimonial.name}`}
                               fill
                               className="rounded-full object-cover border-2 border-accent"
                             />
                          </div>
                          <div>
                            <p className="font-bold text-primary">{testimonial.name}</p>
                            <div className="flex">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground flex-grow">
                          "{testimonial.text}"
                        </blockquote>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
