import { About } from '@/components/sections/about';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { BlueTriangleSeparator } from '@/components/blue-triangle-separator';
import { SocialProof } from '@/components/sections/social-proof';
import { WhoWeAre } from '@/components/sections/who-we-are';
import { Team } from '@/components/sections/team';
import { FAQ } from '@/components/sections/faq';

export default function Home() {
  return (
    <>
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
