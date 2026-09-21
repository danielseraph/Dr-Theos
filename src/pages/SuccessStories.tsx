import { motion } from 'framer-motion';
import { Quote, Filter, Star, BookOpen, Wrench, Briefcase, Heart, Building2, Zap } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All Stories', icon: <Star className="w-4 h-4" /> },
  { id: 'education', label: 'Student Success', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'vocational', label: 'Vocational Training', icon: <Wrench className="w-4 h-4" /> },
  { id: 'business', label: 'Business & Startups', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'women', label: 'Women Empowerment', icon: <Heart className="w-4 h-4" /> },
  { id: 'youth', label: 'Youth Success', icon: <Zap className="w-4 h-4" /> },
  { id: 'community', label: 'Community Impact', icon: <Building2 className="w-4 h-4" /> },
];

const stories = [
  {
    id: 1,
    name: 'Aminata B.',
    category: 'business',
    title: 'From Applicant to Entrepreneur',
    problem: 'Aminata had a passion for sustainable agriculture but lacked the capital and business acumen to scale her small backyard farm into a viable enterprise. She faced continuous losses due to poor market access.',
    assistance: 'Through our Entrepreneurship Program, she received 12 weeks of business training, a micro-grant for modern farming equipment, and was paired with an agricultural business mentor.',
    outcome: 'Today, Aminata runs a thriving organic farm employing three local youths. She supplies fresh produce to two regional supermarkets and has seen a 400% increase in her household income.',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=600&auto=format&fit=crop',
    quote: 'The Hub didn`t just give me money; they gave me a roadmap. Now I am a proud employer in my community.'
  },
  {
    id: 2,
    name: 'Samuel O.',
    category: 'education',
    title: 'Breaking the Cycle with Education',
    problem: 'An orphan from a rural community, Samuel was forced to drop out of secondary school in his final year because he could not afford the tuition and examination fees.',
    assistance: 'The Hub awarded Samuel a full Academic Scholarship, covering his outstanding fees, textbooks, and a living stipend. He also joined our Student Support network for counseling.',
    outcome: 'Samuel passed his exams with distinction and recently gained admission to university to study Civil Engineering. He volunteers as a peer tutor on weekends.',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=600&auto=format&fit=crop',
    quote: 'Education was a closed door for me. The Hub handed me the key and told me I belonged inside.'
  },
  {
    id: 3,
    name: 'Grace M.',
    category: 'vocational',
    title: 'Stitching a New Future',
    problem: 'A single mother of two, Grace struggled to find stable employment and relied on erratic day-labor to feed her children.',
    assistance: 'Grace enrolled in our 6-month Tailoring & Garment Construction Academy. Upon graduation, she received a starter kit including a modern sewing machine and basic fabrics.',
    outcome: 'She now owns a bustling tailoring shop in her neighborhood, has taken on an apprentice, and easily pays for her children`s schooling.',
    image: 'https://images.unsplash.com/photo-1551893478-d726eaf0442c?q=80&w=600&auto=format&fit=crop',
    quote: 'With this sewing machine, I have literally stitched my family`s future back together.'
  },
  {
    id: 4,
    name: 'Kpakungu Community',
    category: 'community',
    title: 'Water is Life',
    problem: 'The village of Kpakungu faced severe water scarcity. Women and children walked over 5 kilometers daily to fetch unclean water from a seasonal river, leading to health crises.',
    assistance: 'Following a community proposal, the Hub funded and facilitated the drilling of a solar-powered borehole and established a local water-management committee.',
    outcome: 'Over 2,000 residents now have direct access to clean, safe drinking water. Waterborne diseases have dropped by 80%, and children are spending their time in school rather than fetching water.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop',
    quote: 'Clean water in our village was a dream. Today, it flows freely.'
  }
];

export const SuccessStories = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredStories = activeCategory === 'all' 
    ? stories 
    : stories.filter(s => s.category === activeCategory);

  return (
    <div className="w-full pt-20">
      
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Success Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Numbers tell part of our impact, but the true measure of our work lies in the transformed lives of the people we serve. Discover their journeys.
          </motion.p>
        </div>
      </section>

      {/* Filter Menu */}
      <section className="bg-white border-b border-gray-100 py-4 px-6 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <Filter className="w-5 h-5 text-dark/40 mr-2 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                activeCategory === cat.id 
                  ? 'bg-gold text-white border-gold' 
                  : 'bg-white text-dark/70 border-gray-200 hover:border-gold/50 hover:text-gold'
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-24 bg-offwhite px-6 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {filteredStories.map((story) => (
            <motion.div 
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col lg:flex-row group"
            >
              <div className="w-full lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{story.name}</h3>
                  <p className="text-gold font-bold tracking-widest uppercase text-xs">
                    {categories.find(c => c.id === story.category)?.label}
                  </p>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 w-full lg:w-3/5">
                <h2 className="text-2xl font-bold text-navy mb-8">"{story.title}"</h2>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-dark/40 uppercase tracking-widest mb-2">The Challenge</h4>
                    <p className="text-dark/80 leading-relaxed">{story.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-dark/40 uppercase tracking-widest mb-2">The Assistance</h4>
                    <p className="text-dark/80 leading-relaxed">{story.assistance}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-dark/40 uppercase tracking-widest mb-2">The Outcome</h4>
                    <p className="text-gold font-semibold leading-relaxed">{story.outcome}</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 flex gap-4">
                  <Quote className="w-8 h-8 text-gold shrink-0 opacity-50" />
                  <p className="text-lg italic text-navy font-medium leading-relaxed">
                    {story.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {filteredStories.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-navy mb-4">More stories coming soon</h3>
              <p className="text-dark/60">We are currently gathering and documenting impact stories for this category.</p>
            </div>
          )}
          
        </div>
      </section>

    </div>
  );
};
