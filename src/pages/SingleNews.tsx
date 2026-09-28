import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

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

export const SingleNews = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/posts/${slug}`);
        const data = await response.json();
        
        if (data.success && data.data) {
          setPost(data.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  const getCategoryBadgeStyle = (cat: string) => {
    switch (cat) {
      case 'NEWS': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'IMPACT_STORY': return 'bg-green-100 text-green-800 border-green-200';
      case 'PRESS_RELEASE': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'COMMUNITY_UPDATE': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gold/10 text-gold border-gold/20';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex justify-center items-center">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
          <span className="text-navy font-bold text-xl">Loading article...</span>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-navy mb-4">Article Not Found</h1>
        <p className="text-dark/70 mb-8 max-w-md">The post you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/news" className="inline-flex items-center gap-2 px-8 py-3 bg-navy text-white font-bold rounded-full hover:bg-gold transition-colors">
          <ArrowLeft className="w-5 h-5" /> Back to News
        </Link>
      </div>
    );
  }

  const initials = `${post.author?.firstName?.[0] || ''}${post.author?.lastName?.[0] || ''}`;

  return (
    <div className="w-full pt-20 bg-white">
      {/* Hero Cover Image */}
      <div className="w-full h-[40vh] md:h-[60vh] bg-gray-100 relative">
        <img 
          src={post.coverImageUrl || '/placeholder.jpg'} 
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = '/placeholder.jpg' }}
        />
        <div className="absolute inset-0 bg-navy/30"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10 pb-24">
        
        {/* Post Header Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`px-4 py-1 text-xs font-bold uppercase rounded-full border ${getCategoryBadgeStyle(post.category)}`}>
              {post.category.replace('_', ' ')}
            </span>
            <span className="flex items-center gap-2 text-dark/60 text-sm font-medium">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-navy mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
            <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center font-bold text-lg shadow-inner">
              {initials || <User className="w-5 h-5" />}
            </div>
            <div>
              <div className="text-sm text-dark/60 font-medium">Written by</div>
              <div className="font-bold text-navy">{post.author?.firstName} {post.author?.lastName}</div>
            </div>
          </div>
        </motion.div>

        {/* Rich Text Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg prose-blue max-w-none text-dark/80"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link to="/news" className="inline-flex items-center gap-2 text-gold font-bold hover:text-navy transition-colors">
            <ArrowLeft className="w-5 h-5" /> Back to News & Blog
          </Link>
        </div>

      </div>
    </div>
  );
};
