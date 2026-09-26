import { motion } from 'framer-motion';
import { Star, BookOpen, Wrench, Briefcase } from 'lucide-react';

export const SuccessStories = () => {
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
            Numbers tell part of our impact, but the true measure of our work lies in the transformed lives of the people we serve. Discover their journeys through these video testimonials.
          </motion.p>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">Video Testimonials & Highlights</h2>
            <p className="text-dark/60 max-w-2xl mx-auto">Watch firsthand accounts and moments of impact from our various empowerment programs.</p>
          </div>

          <div className="space-y-16">
            {/* Category: Student Support */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2"><BookOpen className="w-6 h-6 text-gold" /> Student Support</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { id: 1, title: 'Student Support Testimonial 1', src: '/student1.mp4' },
                  { id: 2, title: 'Student Support Testimonial 2', src: '/student2.mp4' },
                  { id: 3, title: 'Student Support Testimonial 3', src: '/beneficiary3.mp4' }
                ].map((video: any) => (
                  <div key={video.id} className="bg-offwhite rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative">
                    <video src={video.src} controls className="w-full aspect-video object-cover bg-navy" preload="metadata" />
                    <div className="p-4"><h4 className="font-bold text-navy text-center">{video.title}</h4></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category: Females Tailoring */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2"><Wrench className="w-6 h-6 text-gold" /> Females Tailoring Training</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { id: 4, title: 'Tailoring Training (Female) 1', src: '/beneficiary4.mp4' },
                  { id: 5, title: 'Tailoring Training (Female) 2', src: '/beneficiary5.mp4' },
                  { id: 6, title: 'Tailoring Training (Female) 3', src: '/beneficiary7.mp4' }
                ].map((video: any) => (
                  <div key={video.id} className="bg-offwhite rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative">
                    <video src={video.src} controls className="w-full aspect-video object-cover bg-navy" preload="metadata" />
                    <div className="p-4"><h4 className="font-bold text-navy text-center">{video.title}</h4></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category: Males Tailoring */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2"><Wrench className="w-6 h-6 text-gold" /> Males Tailoring Training</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { id: 7, title: 'Tailoring Training (Male) 1', placeholder: true },
                  { id: 8, title: 'Tailoring Training (Male) 2', placeholder: true },
                  { id: 9, title: 'Tailoring Training (Male) 3', placeholder: true }
                ].map((video: any) => (
                  <div key={video.id} className="bg-offwhite rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative h-full flex flex-col">
                    {video.placeholder ? (
                      <div className="w-full aspect-video bg-gray-200 flex items-center justify-center text-dark/40 font-medium">Coming Soon</div>
                    ) : (
                      <video src={video.src} controls className="w-full aspect-video object-cover bg-navy" preload="metadata" />
                    )}
                    <div className="p-4 mt-auto"><h4 className="font-bold text-navy text-center">{video.title}</h4></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category: General Training */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2"><Briefcase className="w-6 h-6 text-gold" /> Training Programs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { id: 13, title: 'Tailoring Training Highlight', src: '/tailoring.mp4' },
                  { id: 14, title: 'Training Highlight 1', src: '/beneficiary2.mp4' },
                  { id: 15, title: 'Training Highlight 2', src: '/beneficiary1.mp4' }
                ].map((video: any) => (
                  <div key={video.id} className="bg-offwhite rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative h-full flex flex-col">
                    {video.placeholder ? (
                      <div className="w-full aspect-video bg-gray-200 flex items-center justify-center text-dark/40 font-medium">Coming Soon</div>
                    ) : (
                      <video src={video.src} controls className="w-full aspect-video object-cover bg-navy" preload="metadata" />
                    )}
                    <div className="p-4 mt-auto"><h4 className="font-bold text-navy text-center">{video.title}</h4></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category: Speeches */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2"><Star className="w-6 h-6 text-gold" /> Representative Speeches</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { id: 10, title: 'Representative Speech 1', src: '/Event1.mp4' },
                  { id: 11, title: 'Representative Speech 2', src: '/Event2.mp4' },
                  { id: 12, title: 'Representative Speech 3', placeholder: true }
                ].map((video: any) => (
                  <div key={video.id} className="bg-offwhite rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative h-full flex flex-col">
                    {video.placeholder ? (
                      <div className="w-full aspect-video bg-gray-200 flex items-center justify-center text-dark/40 font-medium">Coming Soon</div>
                    ) : (
                      <video src={video.src} controls className="w-full aspect-video object-cover bg-navy" preload="metadata" />
                    )}
                    <div className="p-4 mt-auto"><h4 className="font-bold text-navy text-center">{video.title}</h4></div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
