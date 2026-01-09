'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export function MobileStickyBar() {
  // SUBSTITUA COM SEUS DADOS REAIS
  const whatsappNumber = "5511999999999";
  const phoneNumber = "3125359027";
  const message = "Olá! Vi no Google e preciso de atendimento para meu pet.";

  return (
    // md:hidden -> Garante que SÓ aparece no celular (esconde em telas médias/grandes)
    <div className="fixed bottom-0 left-0 right-0 z-[100] flex h-[65px] bg-white shadow-[0_-5px_15px_rgba(0,0,0,0.1)] md:hidden font-sans">
      
      {/* BOTÃO 1: LIGAR AGORA (Para emergências/quem prefere voz) */}
      <a 
        href={`tel:${phoneNumber}`} 
        className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-red-500 via-red-600 to-red-800 text-white border-r border-white/20 active:from-red-700 active:to-red-900 transition-all"
      >
        <Phone size={20} className="mb-1 text-white" />
        <span className="text-xs font-bold uppercase tracking-wide">Ligar Agora</span>
      </a>

      {/* BOTÃO 2: WHATSAPP (Destaque total) */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex-[1.4] flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white active:from-green-700 active:to-green-900 transition-colors relative overflow-hidden"
      >
        {/* Efeito de Brilho Passando (Shimmer Effect) para chamar atenção */}
        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>

        <div className="relative flex items-center gap-2">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-white w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] font-medium opacity-90 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              Veterinário Online
            </span>
            <span className="text-sm font-extrabold uppercase">Chamar no Whats</span>
          </div>
        </div>
      </a>

      {/* Estilo para a animação de brilho */}
      <style jsx>{`
        @keyframes shimmer {
          100% { left: 100%; }
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite;
        }
      `}</style>
    </div>
  );
};
