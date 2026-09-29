import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Clock, CheckCircle2, AlertCircle, Ticket, Loader2 } from 'lucide-react';
import { Button } from '../common/Button';

export interface EventItem {
  id: number | string;
  type: string;
  status: 'upcoming' | 'past';
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  seats: string;
  free: boolean;
  fee: string;
}

interface EventRegistrationModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://theo-api-production.up.railway.app';

export const EventRegistrationModal: React.FC<EventRegistrationModalProps> = ({
  event,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState<string>('');

  if (!isOpen || !event) return null;

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      state: '',
    });
    setFieldErrors({});
    setServerMessage('');
    setStatus('idle');
    onClose();
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setServerMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/registrations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phoneNumber: formData.phone.trim(),
          state: formData.state.trim() || undefined,
          country: 'Nigeria',
          areaOfInterest: `Event: ${event.title}`,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        if (response.status === 409) {
          // Already registered email
          setStatus('success');
          setServerMessage('You are already registered! Your spot is confirmed and your details are on file.');
          return;
        }

        if (response.status === 422 && data?.errors) {
          const mapped: Record<string, string> = {};
          for (const err of data.errors) {
            const key = err.field === 'phoneNumber' ? 'phone' : err.field;
            mapped[key] = err.message || 'Invalid value';
          }
          setFieldErrors(mapped);
          setStatus('error');
          setServerMessage(data.message || 'Please check the highlighted fields.');
          return;
        }

        throw new Error(data?.message || 'Registration failed. Please try again.');
      }

      setStatus('success');
      setServerMessage(data?.message || 'Your event registration has been received successfully!');
    } catch (err: any) {
      setStatus('error');
      setServerMessage(err.message || 'A network error occurred. Please try again.');
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-2.5 rounded-xl border text-sm transition-all outline-none bg-gray-50 focus:bg-white text-navy ${
      fieldErrors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
        : 'border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20'
    }`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-navy/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden z-10 my-8 border border-gold/20"
        >
          {/* Header Banner */}
          <div className="bg-navy p-6 text-white relative">
            <button
              onClick={handleReset}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider mb-2">
              <Ticket className="w-3.5 h-3.5" />
              Event Registration
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white leading-snug pr-8">
              {event.title}
            </h3>

            {/* Quick Details Chips */}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/80">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                {event.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold" />
                {event.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                {event.location}
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-8">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-navy">Registration Confirmed!</h4>
                <p className="text-dark/70 text-sm leading-relaxed max-w-sm mx-auto">
                  {serverMessage || `Thank you! You are officially registered for ${event.title}.`}
                </p>

                <div className="bg-offwhite p-4 rounded-2xl border border-gray-100 text-left text-xs text-dark/70 space-y-1.5">
                  <div className="font-bold text-navy text-sm mb-1">Event Summary:</div>
                  <div><strong className="text-navy">Event:</strong> {event.title}</div>
                  <div><strong className="text-navy">Date & Time:</strong> {event.date} • {event.time}</div>
                  <div><strong className="text-navy">Location:</strong> {event.location}</div>
                  <div><strong className="text-navy">Admission:</strong> {event.fee}</div>
                </div>

                <div className="pt-2">
                  <Button variant="primary" size="md" onClick={handleReset} className="w-full">
                    Done
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && serverMessage && (
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                    <span>{serverMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy mb-1">
                      First Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className={inputClass('firstName')}
                    />
                    {fieldErrors.firstName && (
                      <p className="text-[11px] text-red-600 mt-1">{fieldErrors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy mb-1">
                      Last Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className={inputClass('lastName')}
                    />
                    {fieldErrors.lastName && (
                      <p className="text-[11px] text-red-600 mt-1">{fieldErrors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass('email')}
                  />
                  {fieldErrors.email && (
                    <p className="text-[11px] text-red-600 mt-1">{fieldErrors.email}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy mb-1">
                      Phone Number <span className="text-gold">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass('phone')}
                    />
                    {fieldErrors.phone && (
                      <p className="text-[11px] text-red-600 mt-1">{fieldErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy mb-1">
                      City / State
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Yenagoa, Bayelsa"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className={inputClass('state')}
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 font-bold shadow-md hover:shadow-lg"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing Registration...
                      </>
                    ) : (
                      <>
                        Confirm My Registration
                      </>
                    )}
                  </Button>
                  <p className="text-center text-[11px] text-dark/50 mt-2">
                    Free admission & event updates will be sent to your email.
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
