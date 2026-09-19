import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { WorkGrowWinSection } from '../components/sections/WorkGrowWinSection';
import { WhatWeDoSection } from '../components/sections/WhatWeDoSection';
import { ImpactSection } from '../components/sections/ImpactSection';
import { CommunityPostsSection } from '../components/sections/CommunityPostsSection';
import { RegistrationCTA } from '../components/sections/RegistrationCTA';

export const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <WorkGrowWinSection />
      <WhatWeDoSection />
      <ImpactSection />
      <CommunityPostsSection />
      <RegistrationCTA />
    </div>
  );
};
