import { About } from '@/components/sections/about';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { SocialProof } from '@/components/sections/social-proof';
import { WhoWeAre } from '@/components/sections/who-we-are';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <SocialProof />
      <WhoWeAre />
    </>
  );
}
