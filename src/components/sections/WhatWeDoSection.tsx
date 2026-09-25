import { Users, Lightbulb, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const initiatives = [
  {
    id: 1,
    title: 'Community Building',
    description: 'We organize networking events, collaborative workshops, and social gatherings to strengthen our collective bonds.',
    icon: <Users className="w-8 h-8 text-gold" />,
  },
  {
    id: 2,
    title: 'Skill Development',
    description: 'Access exclusive training programs, mentorship opportunities, and resources designed to accelerate personal growth.',
    icon: <Lightbulb className="w-8 h-8 text-gold" />,
  },
  {
    id: 3,
    title: 'Strategic Partnerships',
    description: 'We connect our members with external organizations and opportunities to maximize collective impact and success.',
    icon: <Target className="w-8 h-8 text-navy" />,
  }
];

export const WhatWeDoSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Current Initiatives</h2>
            <p className="text-lg text-dark/70 leading-relaxed">
              We provide the framework, resources, and connections needed to turn our shared vision into measurable progress.
            </p>
          </div>
          <Link 
            to="/programs" 
            className="inline-flex items-center text-gold font-semibold hover:text-navy transition-colors group whitespace-nowrap"
          >
            VIEW ALL PROGRAMS 
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Featured Large Item */}
          <div className="relative md:col-span-12 lg:col-span-6 rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow min-h-[400px] flex flex-col justify-end">
            <img 
              src="/comm-building.jpg" 
              alt={initiatives[0].title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent" />
            
            <div className="relative p-10 md:p-12 z-10 text-white">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                {initiatives[0].icon}
              </div>
              <h3 className="text-3xl font-bold mb-4">{initiatives[0].title}</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {initiatives[0].description}
              </p>
              <Link to={`/programs/${initiatives[0].id}`} className="text-gold font-medium inline-flex items-center hover:text-white transition-colors">
                Learn more <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Side Stacked Items */}
          <div className="md:col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {initiatives.slice(1).map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col justify-center group hover:border-gold/30 hover:shadow-md transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-offwhite rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                    <p className="text-dark/70 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <Link to={`/programs/${item.id}`} className="text-gold font-medium inline-flex items-center text-sm">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
