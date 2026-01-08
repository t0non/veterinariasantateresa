import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Bird, Rabbit, Cat, Dog } from 'lucide-react';

export function About() {
  const receptionImage = PlaceHolderImages.find(p => p.id === 'clinic-reception');
  const birdImage = PlaceHolderImages.find(p => p.id === 'diverse-bird');
  const rabbitImage = PlaceHolderImages.find(p => p.id === 'diverse-rabbit');
  
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Nossa Paixão é Cuidar</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Na Veterinária Santa Tereza, acreditamos que todo animal merece o melhor cuidado. Nossa equipe é apaixonada e preparada para atender uma grande diversidade de pets com a mesma dedicação e amor.
            </p>
            <div className="mt-6 flex items-center gap-4 text-primary">
                <Dog className="h-8 w-8"/>
                <Cat className="h-8 w-8"/>
                <Bird className="h-8 w-8"/>
                <Rabbit className="h-8 w-8"/>
                <span className="font-semibold">+ muito mais!</span>
            </div>
            <p className="mt-4 text-muted-foreground">
              De cães e gatos a aves e coelhos, seu melhor amigo está em boas mãos. Nossa estrutura foi pensada para oferecer conforto e segurança para todos os pacientes.
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-96 md:h-[500px]">
             {receptionImage && (
                <div className='col-span-1 row-span-2'>
                    <Image
                        src={receptionImage.imageUrl}
                        alt={receptionImage.description}
                        width={400}
                        height={600}
                        className="h-full w-full rounded-lg object-cover shadow-lg"
                        data-ai-hint={receptionImage.imageHint}
                    />
                </div>
            )}
            {birdImage && (
                <div className='col-span-1 row-span-1'>
                    <Image
                        src={birdImage.imageUrl}
                        alt={birdImage.description}
                        width={300}
                        height={300}
                        className="h-full w-full rounded-lg object-cover shadow-lg"
                        data-ai-hint={birdImage.imageHint}
                    />
                </div>
            )}
            {rabbitImage && (
                <div className='col-span-1 row-span-1'>
                    <Image
                        src={rabbitImage.imageUrl}
                        alt={rabbitImage.description}
                        width={300}
                        height={300}
                        className="h-full w-full rounded-lg object-cover shadow-lg"
                        data-ai-hint={rabbitImage.imageHint}
                    />
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
