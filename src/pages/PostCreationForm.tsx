import { useState } from 'react';
import { Button } from '../components/common/Button';
import { UploadCloud, Image as ImageIcon, Video, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PostCreationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', content: '', mediaType: 'none', status: 'Draft' });
  const [status, setStatus] = useState<'idle' | 'saving'>('idle');

  const handleSubmit = (e: React.FormEvent, publish: boolean) => {
    e.preventDefault();
    setStatus('saving');
    console.log(publish ? 'Publishing' : 'Saving draft');
    // Simulate save/publish API call
    setTimeout(() => {
      setStatus('idle');
      navigate('/admin/posts');
    }, 1000);
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-dark";

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-navy">Create New Post</h1>
        <button onClick={() => navigate('/admin/posts')} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        <form className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-navy mb-2">Post Title</label>
            <input 
              type="text" 
              placeholder="Enter a descriptive title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className={inputClasses} 
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold text-navy mb-2">Content</label>
            <textarea 
              rows={8}
              placeholder="Write your post content here..."
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              className={inputClasses} 
            />
          </div>

          {/* Media Selection */}
          <div>
            <label className="block text-sm font-semibold text-navy mb-3">Media Type</label>
            <div className="flex gap-4">
              {[
                { id: 'none', label: 'None', icon: null },
                { id: 'image', label: 'Image', icon: ImageIcon },
                { id: 'video', label: 'Video', icon: Video },
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setFormData({...formData, mediaType: type.id})}
                  className={`flex-1 py-3 px-4 rounded-xl border flex items-center justify-center gap-2 font-medium transition-all ${
                    formData.mediaType === type.id 
                      ? 'border-emerald bg-emerald/5 text-emerald shadow-sm' 
                      : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {type.icon && <type.icon className="w-4 h-4" />} {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Media Upload Area (Conditional) */}
          {formData.mediaType !== 'none' && (
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center text-center bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-8 h-8 text-emerald" />
              </div>
              <h4 className="text-navy font-semibold mb-1">Click to upload {formData.mediaType}</h4>
              <p className="text-sm text-gray-500">or drag and drop here</p>
              <p className="text-xs text-gray-400 mt-4">
                {formData.mediaType === 'image' ? 'PNG, JPG, WEBP up to 5MB' : 'MP4, WebM up to 50MB'}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-end gap-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={(e) => handleSubmit(e, false)}
              className="!text-navy !border-gray-300 hover:!bg-gray-50"
              disabled={status === 'saving'}
            >
              SAVE AS DRAFT
            </Button>
            <Button 
              type="button" 
              variant="primary" 
              onClick={(e) => handleSubmit(e, true)}
              disabled={status === 'saving'}
            >
              PUBLISH POST
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
