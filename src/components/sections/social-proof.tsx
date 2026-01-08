import Image from 'next/image';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'pet-testimonial-1',
    name: 'Ana & Toddy',
    text: 'A equipe da Santa Tereza é incrível! Cuidaram do Toddy com tanto carinho durante a cirurgia. Super recomendo!',
    rating: 5,
  },
  {
    id: 'pet-testimonial-2',
    name: 'Carlos & Mia',
    text: 'Melhor veterinária da região. Sempre atenciosos e profissionais. A Mia adora vir aqui!',
    rating: 5,
  },
  {
    id: 'pet-testimonial-3',
    name: 'Juliana & Thor',
    text: 'Desde a primeira consulta, senti muita confiança. O Dr. Ricardo é um anjo. O Thor está ótimo graças a ele.',
    rating: 5,
  },
];

export function SocialProof() {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Quem ama, recomenda</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Veja o que nossos clientes e seus pets têm a dizer sobre nós.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find(p => p.id === testimonial.id);
            return (
              <Card key={testimonial.name} className="bg-primary-foreground text-primary shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={`Foto do pet de ${testimonial.name}`}
                        width={64}
                        height={64}
                        className="h-16 w-16 rounded-full object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="mt-4 border-l-4 border-accent pl-4 italic text-muted-foreground">
                    "{testimonial.text}"
                  </blockquote>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
