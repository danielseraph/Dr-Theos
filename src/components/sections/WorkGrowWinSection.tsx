import React from 'react';

const steps = [
  {
    id: '01',
    title: 'WORK TOGETHER',
    description: 'We bring people, ideas, skills, and resources together to create meaningful opportunities.',
    colorClass: 'bg-navy text-white',
    accentColor: 'text-emerald',
  },
  {
    id: '02',
    title: 'GROW TOGETHER',
    description: 'We learn from one another, develop our strengths, and create an environment where everyone can progress.',
    colorClass: 'bg-emerald text-white',
    accentColor: 'text-navy',
  },
  {
    id: '03',
    title: 'WIN TOGETHER',
    description: 'Our success is measured not only by individual achievements, but by what we accomplish together.',
    colorClass: 'bg-white text-navy border border-gray-200',
    accentColor: 'text-gold',
  }
];

export const WorkGrowWinSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">The Journey of Synergy</h2>
          <p className="text-dark/70 text-lg">Our core philosophy drives everything we do. It's a continuous cycle of collective advancement.</p>
        </div>

        {/* The Journey Layout */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`rounded-2xl p-8 md:p-10 shadow-lg transform transition-transform hover:-translate-y-2 ${step.colorClass} relative`}
              >
                {/* Connecting Line (Mobile) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-8 left-1/2 w-0.5 h-8 bg-gray-200 -translate-x-1/2"></div>
                )}
                
                <div className="flex justify-between items-start mb-12">
                  <h3 className="text-2xl font-bold tracking-tight w-2/3 leading-tight">{step.title}</h3>
                  <span className={`text-4xl font-black opacity-20 ${step.accentColor}`}>{step.id}</span>
                </div>
                
                <p className="text-lg leading-relaxed opacity-90">
                  "{step.description}"
                </p>
                
                {/* Decorative Arrow/Connector indicating flow */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-10 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
