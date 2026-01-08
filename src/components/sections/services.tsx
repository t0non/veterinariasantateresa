import Image from 'next/image';
import { Stethoscope, Scissors, Syringe, FlaskConical, MoveRight, Home, Pill, FileScan, Bath } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    title: 'Consultas Veterinárias',
    description: 'Atendimento para cães, gatos e animais silvestres.',
  },
  {
    icon: <FileScan className="h-10 w-10 text-primary" />,
    title: 'Exames de Hemograma e Raio-X',
    description: 'Diagnósticos rápidos com equipamentos internos.',
  },
  {
    icon: <Scissors className="h-10 w-10 text-primary" />,
    title: 'Cirurgias',
    description: 'Procedimentos realizados com segurança e cuidado.',
  },
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: 'Atendimento a Domicílio',
    description: 'Conforto e praticidade para você e seu pet.',
  },
  {
    icon: <Syringe className="h-10 w-10 text-primary" />,
    title: 'Vacinas e Internação',
    description: 'Proteção e cuidado contínuo.',
  },
  {
    icon: <Bath className="h-10 w-10 text-primary" />,
    title: 'Banho e Tosa',
    description: 'Para manter seu pet limpo e bem tratado.',
  },
  {
    icon: <Pill className="h-10 w-10 text-primary" />,
    title: 'Venda de Medicamentos',
    description: 'Produtos de qualidade para tratamento e prevenção.',
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-primary" />,
    title: 'Exames Laboratoriais',
    description: 'Análises completas para um diagnóstico preciso.',
  }
];

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.";

export function Services() {
  return (
    <section id="servicos" className="relative py-16 sm:py-24">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://files.catbox.moe/oy9c84.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1 
        }}
      ></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Nossos Serviços</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Oferecemos uma gama completa de serviços para garantir o bem-estar do seu animal de estimação.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="group flex flex-col items-center text-center border-2 bg-background/90 border-transparent shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-2xl">
              <CardHeader>
                {service.icon}
                <CardTitle className="mt-4 text-primary font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
              >
                Saiba mais no WhatsApp <MoveRight className="h-4 w-4" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}