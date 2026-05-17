import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PawPrintTrail } from '@/components/paw-print-trail';
import { SmartChatWidget } from '@/components/smart-chat-widget';
import { MobileStickyBar } from '@/components/mobile-sticky-bar';
import { AOSInit } from '@/components/aos-init';
import { Poppins, Fredoka, Playfair_Display } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://veterinariasantatereza.com.br'),
  title: 'Veterinária Santa Tereza | Cuidado e Amor para seu Pet',
  description: 'Consultas, vacinas e exames com quem realmente ama animais. Agende agora sem burocracia na Veterinária Santa Tereza, em Belo Horizonte.',
  keywords: ['veterinária', 'clínica veterinária', 'Belo Horizonte', 'pet shop', 'cuidado animal', 'cães', 'gatos', 'aves', 'coelhos'],
  authors: [{ name: 'Veterinária Santa Tereza' }],
  creator: 'Veterinária Santa Tereza',
  publisher: 'Veterinária Santa Tereza',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://veterinariasantatereza.com.br',
    title: 'Veterinária Santa Tereza | Cuidado e Amor para seu Pet',
    description: 'Consultas, vacinas e exames com quem realmente ama animais. Agende agora sem burocracia na Veterinária Santa Tereza.',
    siteName: 'Veterinária Santa Tereza',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veterinária Santa Tereza | Cuidado e Amor para seu Pet',
    description: 'Consultas, vacinas e exames com quem realmente ama animais. Agende agora sem burocracia na Veterinária Santa Tereza.',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${poppins.variable} ${fredoka.variable} ${playfair.variable} font-body antialiased`}>
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
