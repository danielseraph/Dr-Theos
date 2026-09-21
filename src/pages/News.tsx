import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Tag, ArrowRight, Search, Clock } from 'lucide-react';
import { Button } from '../components/common/Button';

const categories = [
  'All',
  'Programs',
  'Scholarships',
  'Graduations',
  'Community Projects',
  'Partnerships',
  'Events',
  'Founder Updates',
  'Milestones',
];

const news = [
  {
    id: 1,
    category: 'Scholarships',
    featured: true,
    title: '2026 Academic Scholarship Awards — 15 Students Supported This Cycle',
    summary: 'Dr. Theo\'s Empowerment Hub is proud to announce the recipients of the 2026 Academic Scholarship cycle. Fifteen outstanding students from underserved communities across Cross River State have been selected to receive full tuition support, textbooks, and a monthly living stipend.',
    date: 'September 15, 2026',
    readTime: '4 min read',
    image: '/our story.jpeg',
    tags: ['Scholarships', 'Education', 'Beneficiaries'],
  },
  {
    id: 2,
    category: 'Graduations',
    featured: false,
    title: 'Tailoring & Garment Construction Cohort 3 — Graduation Ceremony',
    summary: '22 participants successfully completed our intensive 6-month Tailoring & Garment Construction program. Each graduate received a starter kit including a modern sewing machine to launch their career.',
    date: 'August 28, 2026',
    readTime: '3 min read',
    image: null,
    tags: ['Vocational', 'Graduation', 'Training'],
  },
  {
    id: 3,
    category: 'Community Projects',
    featured: false,
    title: 'Borehole Completion in Kpakungu — 2,000 Residents Now Have Clean Water',
    summary: 'Following months of planning and construction, the solar-powered borehole project in the Kpakungu community has been officially commissioned. Over 2,000 residents now have daily access to clean, safe drinking water.',
    date: 'August 10, 2026',
    readTime: '5 min read',
    image: null,
    tags: ['Community', 'Water', 'Infrastructure'],
  },
  {
    id: 4,
    category: 'Partnerships',
    featured: false,
    title: 'New Partnership Announced With Regional Technical College',
    summary: 'We are excited to announce a formal skills-training partnership with a leading regional technical college. This collaboration will significantly expand the quality and range of our vocational programs.',
    date: 'July 22, 2026',
    readTime: '3 min read',
    image: null,
    tags: ['Partnership', 'Training', 'Education'],
  },
  {
    id: 5,
    category: 'Programs',
    featured: false,
    title: 'New Program Launch: Digital Skills & Entrepreneurship for Youth',
    summary: 'We are launching a brand-new program combining digital literacy, social media marketing, and entrepreneurship training for youths aged 18–30. Applications are now open.',
    date: 'July 5, 2026',
    readTime: '4 min read',
    image: null,
    tags: ['Programs', 'Youth', 'Digital'],
  },
  {
    id: 6,
    category: 'Founder Updates',
    featured: false,
    title: 'Message From the Founder — Our Path Forward in 2026',
    summary: 'Prince Engr. Dr. John Theophilus Okosigha shares a personal reflection on the Hub\'s journey so far, the milestones achieved, and his vision for the remainder of 2026 and beyond.',
    date: 'June 30, 2026',
    readTime: '6 min read',
    image: '/Dr Theo.jpeg',
    tags: ['Founder', 'Vision', 'Leadership'],
  },
  {
    id: 7,
    category: 'Milestones',
    featured: false,
    title: 'Dr. Theo\'s Empowerment Hub Reaches 250+ Beneficiaries Milestone',
    summary: 'We are humbled and grateful to announce that we have now impacted over 250 individuals through our various programs — a milestone that reflects the generosity of our donors, partners, and dedicated team.',
    date: 'June 15, 2026',
    readTime: '3 min read',
    image: null,
    tags: ['Milestone', 'Impact', 'Growth'],
  },
  {
    id: 8,
    category: 'Events',
    featured: false,
    title: 'Empowerment Summit 2026 — Save the Date',
    summary: 'Our annual Empowerment Summit returns in October 2026 with a lineup of expert speakers, panel discussions, networking sessions, and live performances. Registration is now open.',
    date: 'June 1, 2026',
    readTime: '2 min read',
    image: null,
    tags: ['Event', 'Summit', 'Networking'],
  },
];

export const News = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featured = news.find(n => n.featured);
  const filtered = news.filter(n => !n.featured).filter(n => {
    const matchCat = activeCategory === 'All' || n.category === activeCategory;
    const matchSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full pt-20">

      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6">
            News & Updates
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Stay informed about our latest programs, community milestones, beneficiary stories, and organizational news.
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="py-16 bg-white px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-6">Featured Story</p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl overflow-hidden border border-gray-100 shadow-lg flex flex-col lg:flex-row group">
              <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden relative">
                {featured.image ? (
                  <img src={featured.image} alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-navy to-navy/70 flex items-center justify-center">
                    <Tag className="w-16 h-16 text-gold/40" />
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">{featured.category}</span>
                </div>
              </div>
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-dark/40 text-sm mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 leading-snug">{featured.title}</h2>
                <p className="text-dark/60 leading-relaxed mb-6">{featured.summary}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-gold/10 text-gold px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <Button variant="primary" size="sm" className="w-fit flex items-center gap-2">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filters + Search */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  activeCategory === cat
                    ? 'bg-gold text-navy border-gold'
                    : 'bg-white text-dark/60 border-gray-200 hover:border-gold/50'
                }`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/30" />
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-gray-200 focus:border-gold outline-none"
            />
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-offwhite px-6 min-h-96">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-dark/40 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article, i) => (
                <motion.article key={article.id}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all overflow-hidden group flex flex-col">
                  <div className="h-44 overflow-hidden relative">
                    {article.image ? (
                      <img src={article.image} alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-navy/90 to-navy/60 flex items-center justify-center">
                        <Tag className="w-10 h-10 text-gold/40" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">{article.category}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-dark/40 text-xs mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-navy leading-snug mb-3 group-hover:text-gold transition-colors">{article.title}</h3>
                    <p className="text-dark/60 text-sm leading-relaxed line-clamp-3 flex-grow">{article.summary}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded-full font-medium">{tag}</span>
                        ))}
                      </div>
                      <button className="text-xs font-bold text-gold flex items-center gap-1 hover:gap-2 transition-all">
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 bg-navy text-white px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-white/70 mb-8 leading-relaxed">Subscribe to receive our latest news, program announcements, and impact reports directly in your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-xl text-dark text-sm outline-none focus:ring-2 focus:ring-gold" />
            <Button variant="primary" className="shrink-0">Subscribe</Button>
          </div>
        </div>
      </section>

    </div>
  );
};
