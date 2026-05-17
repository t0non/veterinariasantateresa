import { About } from '@/components/sections/about';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { BlueTriangleSeparator } from '@/components/blue-triangle-separator';
import { SocialProof } from '@/components/sections/social-proof';
import { WhoWeAre } from '@/components/sections/who-we-are';
import { Team } from '@/components/sections/team';
import { FAQ } from '@/components/sections/faq';
import { StructuredData } from '@/components/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clínica Veterinária em Belo Horizonte | Santa Tereza',
  description: 'Clínica Veterinária em BH. Consultas, vacinas, cirurgias e especialidades. Equipe apaixonada pelo que faz. Agende agora na Veterinária Santa Tereza!',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Clínica Veterinária em Belo Horizonte | Santa Tereza',
    description: 'Clínica Veterinária em BH. Consultas, vacinas e especialidades.',
    url: 'https://veterinariasantatereza.com.br',
  }
};

export default function Home() {
  return (
    <>
      <StructuredData type="general" />
      <Hero />
      <Services />
      <BlueTriangleSeparator />
      <SocialProof />
      <WhoWeAre />
      <Team />
      <About />
      <FAQ />
    </>
  );
}
