
import Image from 'next/image';

export function WhoWeAre() {
  
  return (
    <section id="quem-somos" className="relative py-16 sm:py-24 bg-background overflow-hidden">
      <div className="relative container mx-auto px-4 md:px-6" style={{ zIndex: 2 }}>
        <div className="grid gap-12 items-center">
          <div className="max-w-3xl mx-auto text-left">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              Quem Somos?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              <span className="bg-accent/30 px-2 py-1 rounded-md">Desde 2008</span>, a Veterinária Santa Tereza tem sido <span className="bg-accent/30 px-2 py-1 rounded-md">referência</span> em cuidados veterinários em Belo Horizonte e região leste. Localizada na Rua Gabro, 87, no bairro Santa Tereza, nossa clínica se destaca por proporcionar um atendimento ágil e especializado, sempre focado no bem-estar dos pets.
            </p>
            <div className="mt-8">
              <Image
                src="https://files.catbox.moe/8bhvmu.png"
                alt="Fachada da clínica Veterinária Santa Tereza"
                width={540}
                height={360}
                className="rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
