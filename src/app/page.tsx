import { About } from '@/components/sections/about';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { SocialProof } from '@/components/sections/social-proof';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SocialProof />
      <About />
    </>
  );
}
