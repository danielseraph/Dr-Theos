import { useState } from 'react';
import { Button } from '../common/Button';

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    country: '',
    password: '',
    confirmPassword: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      // Mock duplicate email error for testing: if email is 'test@test.com'
      if (formData.email === 'test@test.com') {
        setStatus('error');
        setErrors({ email: 'This email is already registered.' });
      } else {
        setStatus('success');
      }
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-gold/10 border border-gold/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl">
          âœ“
        </div>
        <h3 className="text-2xl font-bold text-navy mb-4">Registration successful.</h3>
        <p className="text-dark/70 mb-8">Welcome to the community. We've sent a confirmation email with next steps.</p>
        <Button variant="outline" onClick={() => setStatus('idle')} className="!text-navy !border-navy hover:!bg-navy hover:!text-white">
          Register Another Member
        </Button>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
      
      {status === 'error' && !errors.email && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm mb-6">
          A server error occurred. Please try again later.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={inputClasses} disabled={status === 'loading'} />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={inputClasses} disabled={status === 'loading'} />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} disabled={status === 'loading'} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} disabled={status === 'loading'} />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Country</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} className={inputClasses} disabled={status === 'loading'} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">State / Province</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} className={inputClasses} disabled={status === 'loading'} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-6 mt-6">
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className={inputClasses} disabled={status === 'loading'} />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className={inputClasses} disabled={status === 'loading'} />
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
        </div>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full mt-8" disabled={status === 'loading'}>
        {status === 'loading' ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
      </Button>
      
    </form>
  );
};
