import { About } from '@/components/sections/about';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { SocialProof } from '@/components/sections/social-proof';
import { WhoWeAre } from '@/components/sections/who-we-are';
import { Team } from '@/components/sections/team';
import { BlueTriangleSeparator } from '@/components/blue-triangle-separator';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <BlueTriangleSeparator />
      <WhoWeAre />
      <Team />
      <About />
      <SocialProof />
    </>
  );
}
