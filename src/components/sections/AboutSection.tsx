import React from 'react';
import { Button } from '../common/Button';

export const AboutSection = () => {
  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-gold/10 border border-gold/20">
              <span className="text-gold text-xs font-bold tracking-widest uppercase">Our Vision</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              One People. One Purpose. <span className="text-emerald">One Future.</span>
            </h2>
            
            <p className="text-lg text-dark/80 mb-8 leading-relaxed">
              We believe in the power of collective ambition. When individuals come together with a shared purpose, we create an environment where collaboration breeds opportunity, and opportunity leads to shared success. We are building a community where your growth is our growth.
            </p>
            
            <Button variant="primary" size="lg">
              LEARN ABOUT US
            </Button>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-navy/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 -right-4 w-2 h-24 bg-gold rounded-full transform -translate-y-1/2"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-gray-200">
              {/* Fallback placeholder if no image is provided */}
              <div className="absolute inset-0 bg-navy/5 flex items-center justify-center">
                <span className="text-navy/20 font-medium">Community Image Placeholder</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
                alt="Community members collaborating" 
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
