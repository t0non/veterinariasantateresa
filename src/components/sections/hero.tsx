import { MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";
  const heroImageDesktop = PlaceHolderImages.find(p => p.id === 'hero-vet-pet');
  const heroImageMobile = PlaceHolderImages.find(p => p.id === 'hero-vet-pet-mobile');

  return (
    <section id="inicio" className="relative h-auto md:h-[90vh] min-h-[85dvh] md:min-h-[600px] w-full text-white overflow-hidden">
      <div data-paw-container className="absolute inset-0 overflow-hidden">
        {heroImageDesktop && (
          <Image
            src={heroImageDesktop.imageUrl}
            alt={heroImageDesktop.description}
            fill
            sizes="100vw"
            className="hidden md:block object-cover"
            data-ai-hint={heroImageDesktop.imageHint}
            priority
          />
        )}
        {heroImageMobile && (
          <Image
            src={heroImageMobile.imageUrl}
            alt={heroImageMobile.description}
            fill
            sizes="100vw"
            className="md:hidden object-cover object-bottom"
            data-ai-hint={heroImageMobile.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/20 z-0"></div>
      </div>
      
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center md:items-start justify-center px-4 text-center md:text-left md:px-6 pt-8 pb-16 md:py-0">
        <h1 className="text-[2.75rem] sm:text-6xl md:text-6xl lg:text-7xl font-bold tracking-tight font-headline drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] break-words leading-tight max-w-4xl bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent pb-2">
          Cuidado e Amor que seu melhor amigo merece.
        </h1>
        <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-xl md:text-2xl font-medium text-white drop-shadow-md px-2 md:px-0">
          Seu pet precisa de ajuda?
        </p>
        <Button
          asChild
          size="lg"
          data-aos="zoom-in"
          data-aos-delay="0"
          className="mt-5 sm:mt-8 w-full sm:w-auto animate-pulse-blue-gentle rounded-full bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950 px-6 py-4 sm:px-10 sm:py-6 text-base sm:text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:from-blue-500 hover:to-blue-900 whitespace-normal h-auto min-h-[48px] hover:shadow-blue-600/50 mx-auto md:mx-0 lg:mx-auto"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-center gap-2">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
            Agendar Consulta pelo WhatsApp
          </a>
        </Button>
        <div className="mt-4 flex items-center justify-center gap-2.5 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 w-full">
          <span className="relative flex h-4 w-4 sm:h-5 sm:w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-green-500 shadow-sm border border-white/50"></span>
          </span>
          <p className="text-base sm:text-lg font-bold text-white drop-shadow-md">
            Veterinário Online Agora
          </p>
        </div>
      </div>
    </section>
  );
}
