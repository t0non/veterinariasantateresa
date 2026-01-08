
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function WhoWeAre() {
  const whoWeAreImage = PlaceHolderImages.find(p => p.id === 'who-we-are-facade');
  
  return (
    <section id="quem-somos" className="py-16 sm:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-80 md:h-full rounded-lg overflow-hidden md:-ml-32">
            {whoWeAreImage && (
                <Image
                src={whoWeAreImage.imageUrl}
                alt={whoWeAreImage.description}
                width={600}
                height={450}
                className="w-full h-full object-cover"
                data-ai-hint={whoWeAreImage.imageHint}
                />
            )}
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              Quem Somos??
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              <span className="bg-accent/30 px-2 py-1 rounded-md">Desde 2008</span>, a Veterinária Santa Tereza tem sido <span className="bg-accent/30 px-2 py-1 rounded-md">referência</span> em cuidados veterinários em Belo Horizonte e região leste. Localizada na Rua Gabro, 87, no bairro Santa Tereza, nossa clínica se destaca por proporcionar um atendimento ágil e especializado, sempre focado no bem-estar dos pets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
