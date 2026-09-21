import { BookOpen, Wrench, Briefcase, Zap, Heart, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  { id: 'education', title: 'Education & Scholarships', description: 'Providing access to quality education and financial support for deserving students.', icon: <BookOpen className="w-8 h-8 text-gold" /> },
  { id: 'vocational', title: 'Vocational Training', description: 'Equipping individuals with practical skills for sustainable employment and self-reliance.', icon: <Wrench className="w-8 h-8 text-gold" /> },
  { id: 'entrepreneurship', title: 'Entrepreneurship', description: 'Fostering innovation and providing resources to help new businesses thrive.', icon: <Briefcase className="w-8 h-8 text-navy" /> },
  { id: 'youth', title: 'Youth Empowerment', description: 'Mentoring and guiding the next generation to achieve their full potential.', icon: <Zap className="w-8 h-8 text-gold" /> },
  { id: 'women', title: 'Women Empowerment', description: 'Supporting women through leadership programs, education, and economic opportunities.', icon: <Heart className="w-8 h-8 text-gold" /> },
  { id: 'community', title: 'Community Development', description: 'Building stronger, more resilient communities through collaborative local projects.', icon: <Users className="w-8 h-8 text-navy" /> }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <div key={prog.id} className="bg-offwhite p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {prog.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{prog.title}</h3>
              <p className="text-dark/70 mb-6 line-clamp-3">
                {prog.description}
              </p>
              <Link to={`/programs/${prog.id}`} className="text-gold font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
