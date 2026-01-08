
import Image from 'next/image';

export function WhoWeAre() {
  return (
    <section id="quem-somos" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-80 md:h-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://files.catbox.moe/w8r11r.png"
              alt="Fachada da Veterinária Santa Tereza"
              width={600}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              Quem Somos
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
