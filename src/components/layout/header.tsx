'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetHeader } from '@/components/ui/sheet';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1,%20vi%20no%20Google%20e%20gostaria%20de%20agendar%20uma%20consulta.";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-background'
      )}
    >
      {/* Online Status Bar - Mobile Only Top Bar */}
      <div className="w-full bg-green-100 text-green-800 text-[10px] py-1 text-center font-bold md:hidden flex items-center justify-center gap-1.5 border-b border-green-200">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Veterinário Disponível Agora
      </div>

      <div className="container mx-auto flex h-24 md:h-28 items-center justify-between px-4 md:px-6">
        <Logo className="hidden sm:flex" />
        <Logo className="flex sm:hidden" />
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary transition-colors hover:text-accent-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {/* Mobile Call Button */}
          <Button asChild size="sm" className="md:hidden bg-gradient-to-r from-red-500 via-red-600 to-red-800 hover:from-red-600 hover:to-red-900 text-white font-bold animate-pulse shadow-lg border border-white/20">
            <a href="tel:3125359027">
              <Phone className="mr-2 h-4 w-4" />
              Ligar
            </a>
          </Button>

          <Button asChild className="hidden bg-accent text-accent-foreground bg-gradient-accent md:flex">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Falar com Veterinário Agora
            </a>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Abrir menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                <nav className="flex h-full flex-col justify-between py-8">
                  <div className='flex flex-col items-center gap-6'>
                    <Logo />
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-lg font-medium text-primary"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                  <Button asChild className="mt-4 w-full bg-accent text-accent-foreground bg-gradient-accent">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      Falar com Veterinário Agora
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
