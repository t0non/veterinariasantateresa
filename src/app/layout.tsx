import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PawPrintTrail } from '@/components/paw-print-trail';
import { SmartChatWidget } from '@/components/smart-chat-widget';
import { MobileStickyBar } from '@/components/mobile-sticky-bar';
import { AOSInit } from '@/components/aos-init';

export const metadata: Metadata = {
  title: 'Veterinária Santa Tereza | Cuidado e Amor para seu Pet',
  description: 'Consultas, vacinas e exames com quem realmente ama animais. Agende agora sem burocracia na Veterinária Santa Tereza.',
  keywords: ['veterinária', 'clínica veterinária', 'pet shop', 'cuidado animal', 'cães', 'gatos', 'aves', 'coelhos'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AOSInit />
        <PawPrintTrail />
        <Header />
        <main className="pb-[70px] md:pb-0">{children}</main>
        <Footer />
        <SmartChatWidget />
        <MobileStickyBar />
        <Toaster />
      </body>
    </html>
  );
}
