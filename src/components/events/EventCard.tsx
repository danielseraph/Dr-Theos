import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import type { Event } from '../../types/events';

interface EventCardProps {
  event: Event;
  index?: number;
}

const typeBadgeStyles: Record<string, string> = {
  TRAINING: 'bg-blue-50 text-blue-800 border-blue-200',
  WORKSHOP: 'bg-amber-50 text-amber-800 border-amber-200',
  CONFERENCE: 'bg-purple-50 text-purple-800 border-purple-200',
  COMMUNITY_OUTREACH: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  WEBINAR: 'bg-sky-50 text-sky-800 border-sky-200',
  FUNDRAISING: 'bg-rose-50 text-rose-800 border-rose-200',
  CEREMONY: 'bg-yellow-50 text-yellow-800 border-yellow-200',
};

export const EventCard: React.FC<EventCardProps> = ({ event, index = 0 }) => {
  // Format Date for Badge: e.g. "OCT 18"
  const formatDateBadge = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) {
        const parts = dateStr.split(' ');
        return { month: parts[0]?.slice(0, 3).toUpperCase() || 'EVENT', day: parts[1] || '' };
      }
      return {
        month: d.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
        day: d.getDate(),
      };
    } catch {
      return { month: 'EVENT', day: '' };
    }
  };

  const dateBadge = formatDateBadge(event.eventDate);
  const normalizedType = event.type.toUpperCase().replace(/\s+/g, '_');
  const badgeStyle = typeBadgeStyles[normalizedType] || 'bg-gold/10 text-gold border-gold/20';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group h-full"
    >
      {/* Cover Image Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-navy/5">
        <img
          src={event.coverImageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80';
          }}
        />

        {/* Date Badge Overlay */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-2 text-center shadow-md min-w-[56px] border border-gray-100">
          <span className="block text-[11px] font-black tracking-wider text-gold">
            {dateBadge.month}
          </span>
          <span className="block text-xl font-black text-navy leading-none mt-0.5">
            {dateBadge.day}
          </span>
        </div>

        {/* Category & Status Overlay */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border shadow-sm backdrop-blur-sm ${badgeStyle}`}
          >
            {event.type.replace(/_/g, ' ')}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Price & Seats Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
              event.isFree
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-gold/15 text-gold border border-gold/30'
            }`}
          >
            {event.isFree ? 'Free Admission' : event.fee || 'Ticketed'}
          </span>

          {event.seats && (
            <span className="text-xs text-dark/50 font-medium">
              {event.seats}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2 leading-snug group-hover:text-gold transition-colors">
          <Link to={`/events/${event.slug || event.id}`}>{event.title}</Link>
        </h3>

        {/* Description snippet */}
        <p className="text-dark/65 text-sm leading-relaxed line-clamp-2 mb-6 flex-grow">
          {event.description}
        </p>

        {/* Meta details (Time & Location) */}
        <div className="space-y-2 pt-4 border-t border-gray-100 text-xs text-dark/70 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold shrink-0" />
            <span className="truncate">{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <Link
            to={`/events/${event.slug || event.id}`}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy text-white text-sm font-bold hover:bg-gold hover:text-navy transition-all duration-300 shadow-sm group-hover:shadow"
          >
            {event.status === 'PAST' ? 'View Details' : 'Register / Details'}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
