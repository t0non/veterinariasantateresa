import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';
import { Logo } from '../logo';

export function Footer() {
  return (
    <footer id="contato" className="bg-gradient-to-br from-[#142850] to-[#0a1529] border-t-0 pt-16 sm:pt-24 pb-8 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-headline">Onde nos encontrar</h2>
            <p className="mt-4 text-lg text-gray-300 font-medium">
                Venha nos visitar e traga seu melhor amigo para um check-up!
            </p>
            <div className="mt-6 space-y-4 text-lg text-gray-300">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <p className="font-bold text-white">Endereço Completo:</p>
                  <p>Rua Gabro, 87 - Santa Tereza</p>
                  <p>Belo Horizonte - MG, 31010-170</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-white">Horário de Funcionamento:</p>
                  <p>Segunda a Sexta: 08:00–21:00</p>
                  <p>Sábado e Domingo: 08:00–17:00</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-white">Telefone:</p>
                  <p>(31) 2535-9027</p>
                </div>
              </div>
            </div>
            <Button asChild size="lg" className="mt-8 bg-accent text-white hover:bg-accent/90 border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 font-bold text-lg">
              <a href="https://www.google.com/maps/dir/?api=1&destination=Rua+Gabro,87,Santa+Tereza,Belo+Horizonte" target="_blank" rel="noopener noreferrer">
                Traçar rota agora
              </a>
            </Button>
          </div>
          <div className="h-64 sm:h-80 md:h-full w-full overflow-hidden rounded-lg shadow-2xl p-1 bg-white/10">
            <iframe 
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=pt-BR&amp;q=Rua%20Gabro,%2087%20-%20Santa%20Tereza,%20Belo%20Horizonte+(Veterin%C3%A1ria%20Santa%20Tereza)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '300px', borderRadius: '0.3rem' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Veterinária Santa Tereza"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="brightness-0 invert opacity-80">
                <Logo />
            </div>
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
                <p>&copy; {new Date().getFullYear()} Veterinária Santa Tereza. Todos os direitos reservados.</p>
                <p className="text-lg mt-2 md:mt-0 font-medium text-gray-300">
                    Site desenvolvido pela <span className="font-bold text-white">TopMkt</span> • <a href="https://wa.me/553197922538" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-accent transition-colors">(31) 9792-2538</a>
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
}
