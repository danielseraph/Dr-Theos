import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Image as ImageIcon, Video, Filter } from 'lucide-react';

const photoCategories = ['All', 'Training', 'Beneficiaries', 'Community Projects', 'Events', 'Donations', 'Outreach'];
const videoCategories = ['All', 'Training Videos', 'Founder Messages', 'Beneficiary Testimonials', 'Project Documentation', 'Interviews', 'Events'];

const photos = [
  { id: 1, category: 'Beneficiaries', src: '/beneficiaryimage1.jpeg', alt: 'Beneficiary portrait' },
  { id: 2, category: 'Training', src: '/beneficiaryimage2.jpeg', alt: 'Skills acquisition session' },
  { id: 3, category: 'Beneficiaries', src: '/beneficiaryimage3.jpeg', alt: 'Empowerment program graduate' },
  { id: 4, category: 'Outreach', src: '/beneficiaryimage4.jpeg', alt: 'Community outreach participant' },
  { id: 5, category: 'Beneficiaries', src: '/beneficiaryimage5.jpeg', alt: 'Scholarship recipient' },
  { id: 6, category: 'Training', src: '/beneficiaryimage6.jpeg', alt: 'Vocational training workshop' },
  { id: 7, category: 'Beneficiaries', src: '/beneficiaryimage7.jpeg', alt: 'A proud beneficiary' },
  { id: 8, category: 'Donations', src: '/beneficiaryimage8.jpeg', alt: 'Receiving empowerment tools' },
  { id: 9, category: 'Beneficiaries', src: '/beneficiaryimage9.jpeg', alt: 'Community support success' },
];

const videos = [
  { id: 1, category: 'Beneficiary Testimonials', title: 'Impact Story: Vocational Success', src: '/beneficiary1.mp4', poster: '/hero1.jpeg' },
  { id: 2, category: 'Beneficiary Testimonials', title: 'Education Scholarship Impact', src: '/beneficiary2.mp4', poster: '/hero 2.jpeg' },
  { id: 3, category: 'Beneficiary Testimonials', title: 'Business Support Success', src: '/beneficiary3.mp4', poster: '/hero 3.jpeg' },
  { id: 4, category: 'Beneficiary Testimonials', title: 'Community Project Impact', src: '/beneficiary4.mp4', poster: '/hero 4.jpeg' },
  { id: 5, category: 'Beneficiary Testimonials', title: 'Empowerment Journey', src: '/beneficiary5.mp4', poster: '/hero 6.jpeg' },
  { id: 6, category: 'Beneficiary Testimonials', title: 'Skills Acquisition Success', src: '/beneficiary7.mp4', poster: '/our story.jpeg' },
  { id: 7, category: 'Events', title: 'Annual Empowerment Summit Highlights', src: '/Event1.mp4', poster: '/hero 3.jpeg' },
  { id: 8, category: 'Events', title: 'Community Outreach Program', src: '/Event2.mp4', poster: '/hero 4.jpeg' },
  { id: 9, category: 'Founder Messages', title: 'Our Vision for 2026', src: null, poster: '/Dr Theo.jpeg' },
];

export const Gallery = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [activePhotoCat, setActivePhotoCat] = useState('All');
  const [activeVideoCat, setActiveVideoCat] = useState('All');

  const filteredPhotos = photos.filter(p => activePhotoCat === 'All' || p.category === activePhotoCat);
  const filteredVideos = videos.filter(v => activeVideoCat === 'All' || v.category === activeVideoCat);

  return (
    <div className="w-full pt-20">
      
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-6">
            Media Gallery
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            See the impact of our work through photos and videos. Witness the lives being transformed and communities being built.
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center gap-4">
          <button
            onClick={() => setActiveTab('photos')}
            className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${
              activeTab === 'photos' ? 'bg-gold text-navy shadow-md' : 'bg-offwhite text-dark/60 hover:bg-gold/10 hover:text-gold'
            }`}
          >
            <ImageIcon className="w-5 h-5" /> Photos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${
              activeTab === 'videos' ? 'bg-gold text-navy shadow-md' : 'bg-offwhite text-dark/60 hover:bg-gold/10 hover:text-gold'
            }`}
          >
            <Video className="w-5 h-5" /> Videos
          </button>
        </div>
      </section>

      <div className="bg-offwhite min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          <AnimatePresence mode="wait">
            {activeTab === 'photos' && (
              <motion.div key="photos" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                {/* Photo Filters */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
                  <Filter className="w-5 h-5 text-dark/40 shrink-0 mr-2" />
                  {photoCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActivePhotoCat(cat)}
                      className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                        activePhotoCat === cat ? 'bg-navy text-white border-navy' : 'bg-white text-dark/60 border-gray-200 hover:border-navy/30'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Photo Grid */}
                {filteredPhotos.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredPhotos.map((photo) => (
                      <motion.div
                        key={photo.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="group relative rounded-2xl overflow-hidden aspect-square bg-white shadow-sm border border-gray-100 cursor-pointer"
                      >
                        <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <span className="text-gold text-xs font-bold uppercase tracking-wider mb-1">{photo.category}</span>
                          <p className="text-white text-sm font-medium leading-tight">{photo.alt}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 text-dark/50 font-medium text-lg">No photos found in this category.</div>
                )}
              </motion.div>
            )}

            {activeTab === 'videos' && (
              <motion.div key="videos" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                {/* Video Filters */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
                  <Filter className="w-5 h-5 text-dark/40 shrink-0 mr-2" />
                  {videoCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveVideoCat(cat)}
                      className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                        activeVideoCat === cat ? 'bg-navy text-white border-navy' : 'bg-white text-dark/60 border-gray-200 hover:border-navy/30'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Video Grid */}
                {filteredVideos.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredVideos.map((video) => (
                      <motion.div
                        key={video.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all cursor-pointer"
                      >
                        <div className="relative aspect-video overflow-hidden bg-navy">
                          {video.src ? (
                            <video 
                              src={video.src} 
                              poster={video.poster}
                              controls 
                              className="w-full h-full object-cover" 
                              preload="metadata"
                            />
                          ) : (
                            <>
                              <img src={video.poster} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                              <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                                <div className="w-16 h-16 rounded-full bg-gold/90 text-navy flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg backdrop-blur-sm">
                                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                                </div>
                              </div>
                            </>
                          )}
                          <div className="absolute top-4 left-4 pointer-events-none">
                             <span className="bg-navy/80 backdrop-blur-sm text-gold text-xs font-bold px-3 py-1.5 rounded-full">{video.category}</span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="font-bold text-navy text-lg leading-snug group-hover:text-gold transition-colors">{video.title}</h3>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 text-dark/50 font-medium text-lg">No videos found in this category.</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};
