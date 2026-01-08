import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Logo } from '../logo';

export function Footer() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'map-location');

  return (
    <footer id="contato" className="bg-secondary border-t pt-16 sm:pt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Onde nos encontrar</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Venha nos visitar e traga seu melhor amigo para um check-up!
            </p>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-primary">Endereço Completo:</p>
                  <p>Rua dos Animais Felizes, 123 - Bairro Santa Tereza</p>
                  <p>Cidade, Estado - CEP 12345-678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-primary">Horário de Funcionamento:</p>
                  <p>Segunda a Sexta: 8h às 19h</p>
                  <p>Sábados: 8h às 14h</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-primary">Telefone:</p>
                  <p>(11) 4567-8901</p>
                </div>
              </div>
            </div>
            <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="https://www.google.com/maps/dir/?api=1&destination=Rua+dos+Animais+Felizes,123,Cidade" target="_blank" rel="noopener noreferrer">
                Traçar rota agora
              </a>
            </Button>
          </div>
          <div className="h-80 md:h-full w-full overflow-hidden rounded-lg shadow-lg">
            {mapImage && (
              <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                width={600}
                height={450}
                className="h-full w-full object-cover"
                data-ai-hint={mapImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
      <div className="mt-16 border-t pt-8 pb-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <Logo />
            <p className='mt-4 sm:mt-0'>&copy; {new Date().getFullYear()} Veterinária Santa Tereza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
