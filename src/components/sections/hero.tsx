import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-vet-pet');

  return (
    <section id="inicio" className="relative h-[90vh] min-h-[600px] w-full text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/30" />
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center md:px-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Cuidado e Amor que seu melhor amigo merece na Santa Tereza.
        </h1>
        <p className="mt-6 max-w-3xl text-lg sm:text-xl">
          Consultas, vacinas e exames com quem realmente ama animais. Agende agora sem burocracia.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 animate-pulse-yellow rounded-full bg-accent px-12 py-8 text-xl font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            Agendar Consulta pelo WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
