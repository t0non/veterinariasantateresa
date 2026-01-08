
import Image from 'next/image';

export function WhoWeAre() {
  
  return (
    <section id="quem-somos" className="relative w-full py-16 sm:py-24 bg-background overflow-hidden">
      <div className="relative container mx-auto px-4 md:px-6 z-10 pb-24">
        <div className="grid gap-12 items-center">
          <div className="max-w-3xl mx-auto text-left">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              Quem Somos?
            </h2>
            <div className="mt-6 text-lg leading-8 text-muted-foreground space-y-4">
              <p>
                <span className="bg-accent/30 px-2 py-1 rounded-md font-semibold text-primary">Desde 2008</span>, a Veterinária Santa Tereza tem sido <span className="bg-accent/30 px-2 py-1 rounded-md font-semibold text-primary">referência</span> em cuidados veterinários em Belo Horizonte e região leste.
              </p>
              <p>
                Localizada na Rua Gabro, 87, no bairro Santa Tereza, nossa clínica se destaca por proporcionar um atendimento ágil e especializado, sempre focado no bem-estar dos pets.
              </p>
              <p>
                Nossa equipe é formada por profissionais apaixonados que tratam cada animal como se fosse da família, garantindo diagnósticos precisos e tratamentos eficazes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image 
        src="https://files.catbox.moe/c8bfb5.png" 
        alt="Papagaio Santa Tereza" 
        width={192}
        height={192}
        className="absolute bottom-0 right-4 w-32 md:w-48 z-20 pointer-events-none"
        style={{ filter: 'drop-shadow(0 10px 8px rgba(0, 0, 0, 0.2))' }}
      />
    </section>
  );
}
