import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  date: string;
}

// Mock Data - Will be replaced by API call
const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Annual Leadership Summit 2026',
    excerpt: 'Our most successful summit yet, bringing together leaders from across the community to chart our future course.',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    date: 'Sep 15, 2026'
  },
  {
    id: '2',
    title: 'The Power of Collective Growth',
    excerpt: 'Watch the highlights from our latest interactive workshop on scaling community initiatives.',
    mediaType: 'video',
    mediaUrl: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2070&auto=format&fit=crop',
    date: 'Sep 10, 2026'
  },
  {
    id: '3',
    title: 'New Mentorship Program Launch',
    excerpt: 'Connecting experienced professionals with emerging talent to accelerate shared success.',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    date: 'Sep 05, 2026'
  }
];

export const CommunityPostsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">From Our Community</h2>
            <p className="text-dark/70 text-lg">Stories, updates, and highlights from our shared journey.</p>
          </div>
          <Link to="/posts" className="hidden md:inline-block text-emerald font-semibold hover:text-navy transition-colors">
            READ ALL POSTS
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            <article key={post.id} className="group flex flex-col cursor-pointer">
              {/* Media Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-gray-100">
                <img 
                  src={post.mediaUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Video Overlay */}
                {post.mediaType === 'video' && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-navy ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="text-sm text-emerald font-semibold uppercase tracking-wider mb-3">
                  {post.date}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-emerald transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-dark/70 line-clamp-3 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <Link to={`/posts/${post.id}`} className="font-semibold text-navy inline-flex items-center group-hover:text-emerald transition-colors mt-auto">
                  {post.mediaType === 'video' ? 'Watch Video' : 'Read More'} 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/posts" className="inline-block text-emerald font-semibold">
            READ ALL POSTS
          </Link>
        </div>

      </div>
    </section>
  );
};
