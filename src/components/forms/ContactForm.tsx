import { useState } from 'react';
import { Button } from '../common/Button';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const response = await fetch('https://theo-api-production.up.railway.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.errors && errorData.errors.length > 0) {
          throw new Error(errorData.errors[0].message);
        }
        throw new Error(errorData.message || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
    return (
      <div className="bg-gold/10 border border-gold/20 p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold text-navy mb-4">Message Sent!</h3>
        <p className="text-dark/70 mb-6">Thank you for reaching out to Dr. Theo's Empowerment Hub. Our team will get back to you shortly.</p>
        <Button variant="outline" onClick={() => setStatus('idle')} className="!text-navy !border-navy hover:!bg-navy hover:!text-white">
          Send Another Message
        </Button>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
          {errorMessage}
        </div>
      )}
      <div>
        <label className="block text-sm font-semibold text-navy mb-2">Full Name</label>
        <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClasses} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Email Address</label>
          <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-2">Subject</label>
        <input required type="text" name="subject" value={formData.subject} onChange={handleChange} className={inputClasses} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-2">Message</label>
        <textarea required minLength={10} name="message" rows={5} value={formData.message} onChange={handleChange} className={inputClasses} />
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full flex items-center justify-center gap-2" disabled={status === 'loading'}>
        {status === 'loading' ? 'SENDING...' : <>SEND MESSAGE <Send className="w-5 h-5" /></>}
      </Button>
    </form>
  );
};
