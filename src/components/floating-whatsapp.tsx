'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const WhatsAppIconSVG = () => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 fill-current"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.98 2.7 15.93 3.68 17.59L2.05 22.01L6.6 20.38C8.16 21.26 9.99 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.04 3.62C16.59 3.62 20.33 7.36 20.33 11.91C20.33 16.46 16.59 20.2 12.04 20.2C10.2 20.2 8.5 19.68 7.11 18.79L6.77 18.58L4.33 19.24L4.99 16.88L4.77 16.53C3.79 15.09 3.25 13.44 3.25 11.91C3.25 7.36 6.99 3.62 12.04 3.62M17.11 14.5C16.86 14.41 15.47 13.75 15.24 13.66C15.02 13.58 14.86 13.54 14.71 13.79C14.55 14.04 14.02 14.68 13.86 14.86C13.71 15.05 13.55 15.07 13.3 14.99C13.05 14.9 11.89 14.51 10.51 13.28C9.41 12.33 8.74 11.1 8.54 10.81C8.34 10.53 8.49 10.38 8.63 10.24C8.75 10.12 8.9 9.93 9.04 9.77C9.18 9.61 9.23 9.49 9.35 9.26C9.47 9.04 9.41 8.85 9.33 8.7C9.25 8.55 8.79 7.38 8.59 6.91C8.4 6.43 8.2 6.51 8.06 6.51C7.91 6.51 7.72 6.51 7.54 6.51C7.36 6.51 7.06 6.59 6.81 6.84C6.56 7.09 5.91 7.67 5.91 8.91C5.91 10.15 6.83 11.3 6.98 11.49C7.13 11.68 8.79 14.13 11.23 15.11C11.82 15.35 12.28 15.5 12.63 15.61C13.27 15.79 13.82 15.76 14.28 15.7C14.8 15.62 16.14 14.94 16.39 14.24C16.64 13.54 16.64 12.96 16.58 12.83C16.52 12.71 16.36 12.65 16.18 12.57L17.11 14.5Z" />
    </svg>
);


export function FloatingWhatsApp() {
  const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Preciso%20de%20ajuda.";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
            aria-label="Fale conosco no WhatsApp"
          >
            <WhatsAppIconSVG />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-background text-foreground border-border">
          <p>Precisa de ajuda? Clique aqui!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
