"use client";
import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function SmartChatWidget() {
  const [stage, setStage] = useState('hidden'); // hidden -> typing -> bubble -> open
  const [isOpen, setIsOpen] = useState(false);

  const avatarUrl = "https://files.catbox.moe/ee41fg.png"; 
  const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";


  useEffect(() => {
    const timer1 = setTimeout(() => setStage('typing'), 2000);
    const timer2 = setTimeout(() => setStage('bubble'), 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setStage('open');
  };

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsOpen(false);
    setStage('bubble');
  };

  const handleToggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      handleOpen();
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-3 font-body">
      
      {stage === 'typing' && !isOpen && (
        <div className="bg-background px-4 py-3 rounded-t-2xl rounded-bl-2xl shadow-lg border animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></span>
          </div>
        </div>
      )}

      {stage === 'bubble' && !isOpen && (
        <div 
          onClick={handleOpen}
          className="bg-background text-primary px-5 py-3 rounded-2xl rounded-br-sm shadow-xl border cursor-pointer hover:scale-105 transition-transform duration-300 flex items-center gap-2 max-w-[250px] animate-in fade-in slide-in-from-bottom-5"
        >
          <span className="text-sm font-medium">E aí, vamos agendar uma consulta para seu pet? 🐶</span>
        </div>
      )}

      {isOpen && (
        <div className="bg-background rounded-2xl shadow-2xl w-[320px] overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300 border">
          
          <div className="bg-primary p-6 text-primary-foreground relative">
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src={avatarUrl} 
                  alt="Atendente" 
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-primary rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Santa Tereza</h3>
                <p className="text-xs text-primary-foreground/80">Online agora</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-secondary/50">
            <div className="bg-background p-4 rounded-xl rounded-tl-none shadow-sm text-foreground text-sm mb-4 border">
              Olá! Tudo bem? 👋 <br/>
              Quer receber um orçamento rápido ou agendar uma consulta?
            </div>
            
            <Button
              asChild
              className="w-full rounded-full bg-gradient-accent text-accent-foreground font-bold py-3 transition-all transform hover:-translate-y-1"
              size="lg"
            >
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sim, eu quero! 
                <Send size={18} className="group-hover:translate-x-1 transition-transform"/>
              </a>
            </Button>
             <p className="text-[10px] text-muted-foreground text-center mt-3">
              Atendimento rápido pelo WhatsApp
            </p>
          </div>
        </div>
      )}

      <button 
        onClick={handleToggle}
        className="relative w-16 h-16 rounded-full shadow-2xl border-4 border-white transition-transform hover:scale-110 active:scale-95 group"
      >
        <img 
          src={avatarUrl} 
          alt="Abrir chat" 
          className="w-full h-full rounded-full object-cover"
        />
        
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
        
        {!isOpen && (
           <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground p-1.5 rounded-full border-2 border-white">
             <MessageCircle size={14} fill="currentColor" />
           </div>
        )}
      </button>
    </div>
  );
};
