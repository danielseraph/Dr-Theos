import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2, Sparkles, User, Mail, Phone, Ticket } from 'lucide-react';
import { Button } from '../common/Button';
import { rsvpForEvent } from '../../utils/eventsApi';
import type { Event, RsvpPayload } from '../../types/events';

interface RsvpFormProps {
  event: Event;
  onSuccess?: () => void;
}

export const RsvpForm: React.FC<RsvpFormProps> = ({ event, onSuccess }) => {
  const [formData, setFormData] = useState<RsvpPayload>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    ticketsCount: 1,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setFeedbackMessage('');

    try {
      const response = await rsvpForEvent(event.id, {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        ticketsCount: Number(formData.ticketsCount) || 1,
      });

      setStatus('success');
      setFeedbackMessage(
        response.message || `You're registered! We've saved your spot for ${event.title}.`
      );
      if (onSuccess) onSuccess();
    } catch (err: any) {
      setStatus('error');
      setFeedbackMessage(err.message || 'Something went wrong while reserving your spot. Please try again.');
    }
  };

  const inputClass = (field: string) =>
    `w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all outline-none bg-gray-50 focus:bg-white text-navy ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
        : 'border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20'
    }`;

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl border-2 border-emerald-500/20 p-8 text-center shadow-lg space-y-5"
      >
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Confirmed RSVP
          </div>
          <h3 className="text-2xl font-black text-navy">You're Registered!</h3>
          <p className="text-dark/70 text-sm mt-2 leading-relaxed max-w-md mx-auto">
            {feedbackMessage || `We've saved your spot for ${event.title}. We look forward to seeing you there!`}
          </p>
        </div>

        {/* Confirmation Details Card */}
        <div className="bg-offwhite rounded-xl p-5 border border-gray-100 text-left text-xs text-dark/75 space-y-2">
          <div className="font-bold text-navy text-sm border-b border-gray-200 pb-2">
            Registration Overview
          </div>
          <div><span className="font-semibold text-navy">Attendee:</span> {formData.firstName} {formData.lastName}</div>
          <div><span className="font-semibold text-navy">Email:</span> {formData.email}</div>
          <div><span className="font-semibold text-navy">Date & Time:</span> {event.eventDate} ({event.time})</div>
          <div><span className="font-semibold text-navy">Venue:</span> {event.location}</div>
          <div><span className="font-semibold text-navy">Admission:</span> {event.isFree ? 'Free Admission' : event.fee}</div>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phoneNumber: '',
              ticketsCount: 1,
            });
          }}
          className="text-xs font-bold text-navy hover:text-gold transition-colors underline underline-offset-4"
        >
          Register another guest →
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-md">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider mb-2">
          <Ticket className="w-3.5 h-3.5" /> RSVP Registration
        </div>
        <h3 className="text-2xl font-bold text-navy">Reserve Your Spot</h3>
        <p className="text-xs sm:text-sm text-dark/60 mt-1">
          {event.isFree
            ? 'Admission is free, but space is limited. Register early to guarantee entry.'
            : `Tickets are ${event.fee || 'subsidized'}. Reserve your seat now.`}
        </p>
      </div>

      {status === 'error' && feedbackMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              First Name <span className="text-gold">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-dark/40 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className={inputClass('firstName')}
              />
            </div>
            {errors.firstName && (
              <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Last Name <span className="text-gold">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-dark/40 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className={inputClass('lastName')}
              />
            </div>
            {errors.lastName && (
              <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold text-navy mb-1.5">
            Email Address <span className="text-gold">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-dark/40 absolute left-3.5 top-3.5" />
            <input
              type="email"
              required
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass('email')}
            />
          </div>
          {errors.email && (
            <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.email}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-bold text-navy mb-1.5">
            Phone Number <span className="text-gold">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-dark/40 absolute left-3.5 top-3.5" />
            <input
              type="tel"
              required
              placeholder="+234 800 000 0000"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              className={inputClass('phoneNumber')}
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.phoneNumber}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-2 font-bold shadow-md hover:shadow-lg transition-all"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Reserving Your Spot...
              </>
            ) : (
              'Reserve My Spot'
            )}
          </Button>
          <p className="text-center text-[11px] text-dark/50 mt-2.5">
            We will send event confirmation and reminder details to your email.
          </p>
        </div>
      </form>
    </div>
  );
};
