import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  ArrowLeft,
  Share2,
  AlertCircle,
} from 'lucide-react';
import { getEventBySlug } from '../utils/eventsApi';
import { RsvpForm } from '../components/events/RsvpForm';
import type { Event } from '../types/events';

export const EventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    if (!slug) return;

    setLoading(true);
    setError(null);

    getEventBySlug(slug)
      .then((res) => {
        if (isMounted) {
          setEvent(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Event could not be found.');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-offwhite flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-3 border-gold border-t-transparent rounded-full animate-spin" />
          <p className="text-navy font-bold text-lg">Loading event details...</p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-offwhite flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-navy mb-2">Event Not Found</h2>
          <p className="text-sm text-dark/70 mb-6">
            The event you are looking for does not exist or may have been updated.
          </p>
          <Link
            to="/events"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-navy text-white text-sm font-bold hover:bg-gold hover:text-navy transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-20 bg-offwhite min-h-screen">
      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Events
        </Link>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-navy hover:border-gold hover:text-gold transition-all shadow-sm"
        >
          <Share2 className="w-3.5 h-3.5" />
          {copied ? 'Link Copied!' : 'Share Event'}
        </button>
      </div>

      {/* Hero Banner Section */}
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-navy min-h-[360px] md:min-h-[420px] flex flex-col justify-end">
          {/* Background Image with Dark & Gradient Overlays */}
          <img
            src={
              event.coverImageUrl ||
              'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80'
            }
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent" />

          {/* Banner Content */}
          <div className="relative z-10 p-6 sm:p-10 md:p-12 text-white">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-gold text-navy text-xs font-black uppercase tracking-wider">
                {event.type.replace(/_/g, ' ')}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  event.isFree ? 'bg-emerald-500/90 text-white' : 'bg-white/20 text-white backdrop-blur-md'
                }`}
              >
                {event.isFree ? 'Free Admission' : event.fee || 'Ticketed'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight max-w-4xl mb-6">
              {event.title}
            </h1>

            {/* Quick Meta Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15 text-xs sm:text-sm text-white/90">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="text-[11px] text-white/60 uppercase font-semibold">Date</div>
                  <div className="font-bold">{event.eventDate}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="text-[11px] text-white/60 uppercase font-semibold">Time</div>
                  <div className="font-bold">{event.time}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="text-[11px] text-white/60 uppercase font-semibold">Venue / Location</div>
                  <div className="font-bold truncate max-w-[200px]">{event.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Split Layout: Description & Agenda vs. RSVP Form */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Event Details & Agenda */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-navy mb-4">About This Event</h2>
              <div className="prose prose-sm sm:prose text-dark/75 leading-relaxed space-y-4">
                <p className="whitespace-pre-line text-base">{event.description}</p>
              </div>

              {/* Venue & Location Map Box */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" /> Location & Access
                </h3>
                <p className="text-sm text-dark/70">{event.location}</p>
                <div className="mt-3 p-4 rounded-xl bg-offwhite border border-gray-200 text-xs text-dark/60">
                  <strong>Directions & Venue Guidance:</strong> Check-in begins 30 minutes prior to scheduled start time. Please present your registration name or email at the reception desk.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: RSVP Form */}
          <div className="lg:col-span-5 sticky top-28">
            {event.status === 'PAST' ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm text-center">
                <div className="w-12 h-12 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Event Has Concluded</h3>
                <p className="text-xs text-dark/60 mb-6">
                  This program has already taken place. Browse our upcoming events calendar to join our next gathering!
                </p>
                <Link
                  to="/events"
                  className="inline-block w-full py-3 px-4 rounded-xl bg-navy text-white text-sm font-bold hover:bg-gold hover:text-navy transition-colors"
                >
                  Explore Upcoming Events
                </Link>
              </div>
            ) : (
              <RsvpForm event={event} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
