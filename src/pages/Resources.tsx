import { motion } from 'framer-motion';
import { BookOpen, Briefcase, GraduationCap, Wrench, CircleDollarSign, Compass, Users, FileText, Download } from 'lucide-react';
import { Button } from '../components/common/Button';

const resourceCategories = [
  { icon: <Briefcase className="w-8 h-8" />, title: 'Entrepreneurship Guides', desc: 'Step-by-step guides on starting a business, writing a business plan, and accessing capital.' },
  { icon: <CircleDollarSign className="w-8 h-8" />, title: 'Financial Literacy', desc: 'Materials covering budgeting, saving, understanding credit, and managing personal and business finances.' },
  { icon: <Wrench className="w-8 h-8" />, title: 'Vocational Training Materials', desc: 'Manuals, tool guides, and safety protocols for our various vocational skills programs.' },
  { icon: <GraduationCap className="w-8 h-8" />, title: 'Scholarship Resources', desc: 'Tips on applying for scholarships, essay writing guides, and interview preparation.' },
  { icon: <Compass className="w-8 h-8" />, title: 'Career Resources', desc: 'CV writing templates, interview preparation guides, and job search strategies.' },
  { icon: <FileText className="w-8 h-8" />, title: 'Educational Articles', desc: 'Articles on personal development, study habits, and navigating academic challenges.' },
  { icon: <Users className="w-8 h-8" />, title: 'Leadership Materials', desc: 'Modules on community leadership, effective communication, and conflict resolution.' },
  { icon: <BookOpen className="w-8 h-8" />, title: 'Youth-Development', desc: 'Mentorship toolkits, goal-setting worksheets, and life-skills manuals for young people.' },
];

const featuredResources = [
  { title: 'The Ultimate Guide to Starting a Small Business in Nigeria', category: 'Entrepreneurship', type: 'PDF Document', size: '2.4 MB' },
  { title: 'Personal Budgeting Template 2026', category: 'Financial Literacy', type: 'Excel Spreadsheet', size: '1.1 MB' },
  { title: 'How to Write a Winning Scholarship Essay', category: 'Scholarships', type: 'PDF Guide', size: '1.8 MB' },
  { title: 'Beginner\'s Guide to Tailoring & Pattern Drafting', category: 'Vocational', type: 'PDF Manual', size: '5.6 MB' },
];

export const Resources = () => {
  return (
    <div className="w-full pt-20">
      
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-6">
            Educational Resources
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Access our free library of guides, templates, and training materials designed to help you succeed in education, business, and life.
          </motion.p>
        </div>
      </section>

      {/* Resource Categories Grid */}
      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Browse by Category</h2>
            <p className="text-dark/60 text-lg">Select a topic below to view available learning materials and downloads.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((cat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all group cursor-pointer flex flex-col h-full">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold/20 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{cat.title}</h3>
                <p className="text-dark/60 text-sm leading-relaxed flex-grow">{cat.desc}</p>
                <span className="text-gold font-bold text-sm mt-6 flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Resources &rarr;
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Downloads */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-2">Featured Downloads</h2>
              <p className="text-dark/60">Our most popular templates and guides.</p>
            </div>
            <Button variant="outline" className="mt-4 sm:mt-0">View All Downloads</Button>
          </div>

          <div className="space-y-4">
            {featuredResources.map((res, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex flex-col sm:flex-row items-center justify-between p-6 bg-offwhite rounded-2xl border border-gray-100 hover:border-gold/30 transition-colors">
                <div className="flex items-center gap-5 w-full sm:w-auto mb-4 sm:mb-0">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-navy shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg leading-tight mb-1">{res.title}</h4>
                    <div className="flex items-center gap-3 text-sm text-dark/50">
                      <span className="font-semibold text-gold">{res.category}</span>
                      <span>&bull;</span>
                      <span>{res.type}</span>
                      <span>&bull;</span>
                      <span>{res.size}</span>
                    </div>
                  </div>
                </div>
                <Button variant="primary" size="sm" className="w-full sm:w-auto shrink-0 flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
