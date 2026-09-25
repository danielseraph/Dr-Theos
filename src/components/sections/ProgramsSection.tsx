import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    id: 'education',
    title: 'Education & Scholarships',
    description: 'Providing access to quality education and financial support for deserving students.',
    image: '/sch.jpeg'
  },
  {
    id: 'vocational',
    title: 'Vocational Training',
    description: 'Equipping individuals with practical skills for sustainable employment and self-reliance.',
    image: '/skill.jpeg'
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    description: 'Fostering innovation and providing resources to help new businesses thrive.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'youth',
    title: 'Youth Empowerment',
    description: 'Mentoring and guiding the next generation to achieve their full potential.',
    image: '/youth.jpeg'
  },
  {
    id: 'women',
    title: 'Women Empowerment',
    description: 'Supporting women through leadership programs, education, and economic opportunities.',
    image: '/woman.jpeg'
  },
  {
    id: 'community',
    title: 'Community Development',
    description: 'Building stronger, more resilient communities through collaborative local projects.',
    image: '/comm-deve.jpg'
  }
];

export const ProgramsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Main Programs</h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Discover the pathways we've built to support our community and create lasting positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="bg-offwhite rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-75 overflow-hidden bg-gray-100">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-navy mb-3">{prog.title}</h3>
                <p className="text-dark/70 mb-6 line-clamp-3 text-sm flex-1 leading-relaxed">
                  {prog.description}
                </p>
                <Link
                  to={`/programs/${prog.id}`}
                  className="text-gold font-medium inline-flex items-center mt-auto hover:text-gold-dark transition-colors"
                >
                  Learn more{' '}
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
