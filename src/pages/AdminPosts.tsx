import { Button } from '../components/common/Button';
import { Plus, Image as ImageIcon, Video, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminPosts = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-navy mb-1">Posts</h1>
          <p className="text-dark/70 text-sm">Manage community updates and articles.</p>
        </div>
        <Link to="/admin/posts/new">
          <Button variant="primary" size="sm" className="flex items-center gap-2">
            <Plus className="w-4 h-4" /> Create Post
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {[
          { id: 1, title: 'Annual Leadership Summit 2026', type: 'image', status: 'Published', date: 'Sep 15, 2026' },
          { id: 2, title: 'The Power of Collective Growth', type: 'video', status: 'Published', date: 'Sep 10, 2026' },
          { id: 3, title: 'Draft: Upcoming Q4 Initiatives', type: 'image', status: 'Draft', date: 'Sep 18, 2026' }
        ].map((post) => (
          <div key={post.id} className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between sm:items-center gap-4 group hover:border-emerald/30 transition-colors">
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                {post.type === 'video' ? <Video className="w-5 h-5 text-gray-500" /> : <ImageIcon className="w-5 h-5 text-gray-500" />}
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">{post.title}</h3>
                <div className="flex items-center gap-3 text-xs text-dark/60 font-medium">
                  <span className={post.status === 'Published' ? 'text-emerald' : 'text-gold'}>
                    {post.status}
                  </span>
                  <span>â€¢</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 text-gray-500 hover:text-emerald transition-colors rounded-md hover:bg-emerald/10" title="Edit">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-500 hover:text-red-500 transition-colors rounded-md hover:bg-red-50" title="Delete">
                <Trash2 className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-500 hover:text-navy transition-colors rounded-md hover:bg-gray-100">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};
