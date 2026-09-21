import { HeroSection } from '../components/sections/HeroSection';
import { ProgramsSection } from '../components/sections/ProgramsSection';
import { WhatWeDoSection } from '../components/sections/WhatWeDoSection';
import { ImpactSection } from '../components/sections/ImpactSection';
import { CommunityPostsSection } from '../components/sections/CommunityPostsSection';
import { RegistrationCTA } from '../components/sections/RegistrationCTA';

export const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <ProgramsSection />
      <WhatWeDoSection />
      <ImpactSection />
      <CommunityPostsSection />
      <RegistrationCTA />
    </div>
  );
};
