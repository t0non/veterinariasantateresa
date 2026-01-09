'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Qual o valor da consulta?",
    answer: "Os valores variam conforme o horário e especialidade. Clique no botão abaixo para receber a tabela atualizada no WhatsApp.",
    cta: "Receber tabela de preços",
    whatsappText: "Olá, gostaria de saber o valor da consulta."
  },
  {
    question: "Aceitam plano de saúde?",
    answer: "Aceitamos diversos parceiros. Envie uma foto da carteirinha para validarmos a cobertura.",
    cta: "Validar meu plano",
    whatsappText: "Olá, gostaria de verificar se aceitam meu plano de saúde."
  },
  {
    question: "Como funciona o agendamento de cirurgias?",
    answer: "Todas as cirurgias requerem uma avaliação prévia para segurança do seu pet. Fale diretamente com nossa equipe cirúrgica.",
    cta: "Falar com equipe cirúrgica",
    whatsappText: "Olá, preciso de informações sobre cirurgias."
  },
  {
    question: "Vocês atendem emergências?",
    answer: "Sim! Estamos preparados para atendimentos emergenciais. Em casos urgentes, recomendamos vir diretamente ou clicar no botão de emergência.",
    cta: "É uma emergência!",
    whatsappText: "PRECISO DE AJUDA URGENTE."
  }
];

export function FAQ() {
  const WHATSAPP_NUMBER = "5511999999999";

  return (
    <section className="relative w-full py-16 sm:py-24 bg-background z-60">
      {/* Separator Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] sm:h-[100px] fill-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 sm:text-4xl font-headline">
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Respostas rápidas para suas principais perguntas.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                <div className="flex flex-col gap-4 pt-2">
                  <p>{faq.answer}</p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full sm:w-auto self-start border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700"
                  >
                    <a 
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(faq.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {faq.cta}
                    </a>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="animate-pulse-blue-gentle rounded-full bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950 px-8 py-6 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:from-blue-500 hover:to-blue-900 border-none ring-0 outline-none focus:ring-0 focus:outline-none whitespace-normal h-auto min-h-[56px] hover:shadow-blue-600/50"
          >
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Tenho%20outra%20d%C3%BAvida.`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6 fill-current" />
              Ainda tenho dúvidas
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
