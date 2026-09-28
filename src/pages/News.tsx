import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'https://theo-api-production.up.railway.app';

type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  coverImageUrl: string | null;
  publishedAt: string;
  author: { firstName: string; lastName: string };
};

export const News = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async (cat: string, p: number, append: boolean = false) => {
    try {
      setLoading(true);
      let url = `${API_BASE_URL}/api/posts?page=${p}&limit=9`;
      if (cat) {
        url += `&category=${cat}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      if (data.success) {
        setPosts(append ? [...posts, ...data.data] : data.data);
        setTotalPages(data.pagination?.totalPages || 1);
      } else {
        if (!append) setPosts([]);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      if (!append) setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(category, 1, false);
    setPage(1);
  }, [category]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(category, nextPage, true);
  };

  const getCategoryBadgeStyle = (cat: string) => {
    switch (cat) {
      case 'NEWS': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'IMPACT_STORY': return 'bg-green-100 text-green-800 border-green-200';
      case 'PRESS_RELEASE': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'COMMUNITY_UPDATE': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gold/10 text-gold border-gold/20';
    }
  };

  const formatCategory = (cat: string) => cat.replace('_', ' ');

  const filterButtons = [
    { label: 'All', value: '' },
    { label: 'News', value: 'NEWS' },
    { label: 'Press Release', value: 'PRESS_RELEASE' },
    { label: 'Impact Story', value: 'IMPACT_STORY' },
    { label: 'Community Update', value: 'COMMUNITY_UPDATE' }
  ];

  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-6">
            News & Blog
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Stay updated with our latest impact stories, press releases, and community announcements.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-offwhite px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setCategory(btn.value)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  category === btn.value 
                    ? 'bg-navy text-white shadow-md' 
                    : 'bg-white text-navy border border-gray-200 hover:border-gold hover:text-gold'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading && posts.length === 0 ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
                  <div className="w-full h-48 bg-gray-200"></div>
                  <div className="p-6 space-y-4">
                    <div className="w-24 h-6 bg-gray-200 rounded-full"></div>
                    <div className="w-full h-8 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-8 bg-gray-200 rounded"></div>
                    <div className="w-full h-4 bg-gray-200 rounded mt-4"></div>
                    <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))
            ) : posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col">
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img 
                      src={post.coverImageUrl || '/placeholder.jpg'} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => { e.currentTarget.src = '/placeholder.jpg' }}
                    />
                    <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase rounded-full border ${getCategoryBadgeStyle(post.category)}`}>
                      {formatCategory(post.category)}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-dark/50 mb-4 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author?.firstName} {post.author?.lastName}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2 leading-tight group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>

                    <div className="text-dark/70 line-clamp-3 mb-6 text-sm"
                         dangerouslySetInnerHTML={{ __html: post.content.substring(0, 150) + '...' }}
                    />

                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <Link to={`/news/${post.slug}`} className="inline-flex items-center gap-2 text-gold font-bold hover:text-navy transition-colors text-sm uppercase tracking-wider">
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="text-gray-400 mb-4">
                  <Calendar className="w-16 h-16 mx-auto opacity-50" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">No posts found</h3>
                <p className="text-dark/60">No posts match this category yet. Check back soon!</p>
              </div>
            )}
          </div>

          {page < totalPages && (
            <div className="mt-16 text-center">
              <button 
                onClick={loadMore}
                disabled={loading}
                className="inline-flex items-center justify-center px-8 py-3 font-bold text-white bg-navy hover:bg-gold rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'LOADING...' : 'LOAD MORE POSTS'}
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
