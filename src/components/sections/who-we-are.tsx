import { Button } from "@/components/ui/button"
import Image from "next/image";

const WHATSAPP_LINK_SAIBA_MAIS = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais.";

export function WhoWeAre() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col md:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Quem Somos</h2>
            <p className="mt-4 text-lg text-muted-foreground flex-grow">
              Desde 2008, a Veterinária Santa Tereza tem sido referência em cuidados veterinários em Belo Horizonte e região leste. Localizada na Rua Gabro, 87, no bairro Santa Tereza, nossa clínica se destaca por proporcionar um atendimento ágil e especializado, sempre focado no bem-estar dos pets.
            </p>
            <Button asChild variant="link" className="text-primary self-start px-0 mt-4">
                <a href={WHATSAPP_LINK_SAIBA_MAIS} target="_blank" rel="noopener noreferrer">SAIBA MAIS</a>
            </Button>
          </div>
          <div className="md:col-span-1 h-full w-full overflow-hidden rounded-lg shadow-lg">
            <Image
                src="https://files.catbox.moe/d0vac5.png"
                alt="Proprietário da Veterinária Santa Tereza"
                width={400}
                height={500}
                className="h-full w-full object-cover object-top"
              />
          </div>
          <div className="flex flex-col md:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Equipe</h2>
            <p className="mt-4 text-lg text-muted-foreground flex-grow">
              Na Veterinária Santa Tereza, nossa equipe de especialistas está pronta para o melhor atendimento aos seus pets. Contamos com veterinários altamente capacitados na região leste de Belo Horizonte, especializados em clínica geral, cirurgias e atendimento a animais silvestres e não convencionais.
            </p>
            <Button asChild variant="link" className="text-primary self-start px-0 mt-4">
                <a href={WHATSAPP_LINK_SAIBA_MAIS} target="_blank" rel="noopener noreferrer">SAIBA MAIS</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
