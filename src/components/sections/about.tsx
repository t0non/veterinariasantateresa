'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Bird, Rabbit, Cat, Dog, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function About() {
  const receptionImage = PlaceHolderImages.find(p => p.id === 'clinic-reception');
  const birdImage = PlaceHolderImages.find(p => p.id === 'diverse-bird');
  const rabbitImage = PlaceHolderImages.find(p => p.id === 'diverse-rabbit');

  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [displayedImages, setDisplayedImages] = useState<string[]>([]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => {
        if (data.images && Array.isArray(data.images) && data.images.length > 0) {
            setGalleryImages(data.images);
        }
      })
      .catch(err => console.error('Error loading gallery:', err));
  }, []);

  useEffect(() => {
    if (galleryImages.length === 0) return;

    const updateImages = () => {
        setFade(false); // Start fade out
        
        setTimeout(() => {
            const shuffled = [...galleryImages].sort(() => 0.5 - Math.random());
            setDisplayedImages(shuffled.slice(0, 3));
            setFade(true); // Fade in
        }, 500); // Wait for fade out
    };

    // Initial load
    if (displayedImages.length === 0) updateImages();

    const interval = setInterval(updateImages, 1000);
    return () => clearInterval(interval);
  }, [galleryImages]);

  const getImageSrc = (index: number, fallback: any) => {
    if (displayedImages[index]) {
        return `/animais/${encodeURIComponent(displayedImages[index])}`;
    }
    return fallback?.imageUrl;
  };

  return (
    <section id="sobre" className="relative z-40 py-16 sm:py-24 bg-slate-50 overflow-hidden">
      {/* Separator Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] sm:h-[100px] fill-slate-50">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 sm:text-4xl font-headline">Nossa Paixão é Cuidar</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Na Veterinária Santa Tereza, acreditamos que todo animal merece o melhor cuidado. Nossa equipe é apaixonada e preparada para atender uma grande diversidade de pets com a mesma dedicação e amor.
            </p>
            <div className="mt-6 flex items-center gap-4 text-primary">
                <Dog className="h-8 w-8"/>
                <Cat className="h-8 w-8"/>
                <Bird className="h-8 w-8"/>
                <Rabbit className="h-8 w-8"/>
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">+ muito mais!</span>
            </div>
            <p className="mt-4 text-muted-foreground">
              De cães e gatos a aves e coelhos, seu melhor amigo está em boas mãos. Nossa estrutura foi pensada para oferecer conforto e segurança para todos os pacientes.
            </p>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="animate-pulse-blue-gentle rounded-full bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950 px-8 py-6 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:from-blue-500 hover:to-blue-900 border-none ring-0 outline-none focus:ring-0 focus:outline-none whitespace-normal h-auto min-h-[56px] hover:shadow-blue-600/50"
              >
                <a href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20mais%20sobre%20a%20cl%C3%ADnica." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 fill-current" />
                  Fale com a Gente
                </a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 h-64 sm:h-96 md:h-[500px]">
             {/* Large Image (Left) */}
             <div className='col-span-1 row-span-2 relative shadow-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 p-1 rounded-xl transform hover:scale-[1.02] transition-transform duration-300'>
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-white">
                  <Image
                      src={getImageSrc(0, receptionImage)}
                      alt="Veterinária Santa Tereza - Atendimento"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className={`object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
             </div>
             
             {/* Top Right Image */}
             <div className='col-span-1 row-span-1 relative shadow-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 p-1 rounded-xl transform hover:scale-[1.02] transition-transform duration-300'>
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-white">
                  <Image
                      src={getImageSrc(1, birdImage)}
                      alt="Paciente Especial"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className={`object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
             </div>

             {/* Bottom Right Image */}
             <div className='col-span-1 row-span-1 relative shadow-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 p-1 rounded-xl transform hover:scale-[1.02] transition-transform duration-300'>
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-white">
                  <Image
                      src={getImageSrc(2, rabbitImage)}
                      alt="Cuidado com Pets"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className={`object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
