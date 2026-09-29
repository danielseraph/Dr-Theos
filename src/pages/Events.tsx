import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Calendar, Sparkles } from 'lucide-react';
import { EventCard } from '../components/events/EventCard';
import { getEvents } from '../utils/eventsApi';
import type { Event, EventStatus, EventType } from '../types/events';

const categoryFilters: { label: string; value: EventType }[] = [
  { label: 'All Categories', value: 'ALL' },
  { label: 'Trainings', value: 'TRAINING' },
  { label: 'Workshops', value: 'WORKSHOP' },
  { label: 'Conferences', value: 'CONFERENCE' },
  { label: 'Outreach', value: 'COMMUNITY_OUTREACH' },
  { label: 'Webinars', value: 'WEBINAR' },
];

export const Events: React.FC = () => {
  const [statusTab, setStatusTab] = useState<EventStatus>('UPCOMING');
  const [selectedType, setSelectedType] = useState<EventType>('ALL');
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);

  const fetchEventsData = async (
    targetPage: number = 1,
    append: boolean = false,
    currentStatus = statusTab,
    currentType = selectedType
  ) => {
    try {
      setLoading(true);
      const res = await getEvents({
        page: targetPage,
        limit: 9,
        status: currentStatus,
        type: currentType,
      });

      if (res.success) {
        setEvents((prev) => (append ? [...prev, ...res.data] : res.data));
        setTotalPages(res.pagination?.totalPages || 1);
        setTotalCount(res.pagination?.total || res.data.length);
      } else {
        if (!append) setEvents([]);
      }
    } catch (err) {
      console.error('Failed to load events:', err);
      if (!append) setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  // Refetch when status tab or category filter changes
  useEffect(() => {
    setPage(1);
    fetchEventsData(1, false, statusTab, selectedType);
  }, [statusTab, selectedType]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchEventsData(nextPage, true, statusTab, selectedType);
  };

  return (
    <div className="w-full pt-20 bg-offwhite min-h-screen">
      {/* Hero Banner */}
      <section className="bg-navy text-white py-20 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" /> Empowering Communities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Events & Community Programs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Discover our upcoming vocational trainings, educational masterclasses, summits, and
            community outreaches. Reserve your spot today!
          </motion.p>
        </div>
      </section>

      {/* Filter and Tab Section */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Status Segmented Control (Upcoming vs Past) */}
          <div className="flex items-center bg-gray-100/90 p-1 rounded-full border border-gray-200">
            <button
              onClick={() => setStatusTab('UPCOMING')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                statusTab === 'UPCOMING'
                  ? 'bg-navy text-white shadow-sm'
                  : 'text-dark/60 hover:text-navy'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setStatusTab('PAST')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                statusTab === 'PAST'
                  ? 'bg-navy text-white shadow-sm'
                  : 'text-dark/60 hover:text-navy'
              }`}
            >
              Past Events
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide max-w-full">
            <Filter className="w-4 h-4 text-dark/30 shrink-0 ml-1" />
            {categoryFilters.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedType(cat.value)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  selectedType === cat.value
                    ? 'bg-gold text-navy border-gold shadow-sm'
                    : 'bg-white text-dark/65 border-gray-200 hover:border-gold/50 hover:text-navy'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Events Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Header subtitle */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-black text-navy flex items-center gap-2">
            <span>{statusTab === 'UPCOMING' ? 'Upcoming Schedule' : 'Past Archive'}</span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-navy/10 text-navy">
              {totalCount} {totalCount === 1 ? 'Event' : 'Events'}
            </span>
          </h2>
        </div>

        {/* Loading Skeletons */}
        {loading && events.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm animate-pulse flex flex-col h-96"
              >
                <div className="h-52 bg-gray-200 w-full" />
                <div className="p-6 space-y-4 flex-grow">
                  <div className="w-24 h-4 bg-gray-200 rounded-full" />
                  <div className="w-full h-6 bg-gray-200 rounded" />
                  <div className="w-3/4 h-4 bg-gray-200 rounded" />
                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    <div className="w-1/2 h-3 bg-gray-200 rounded" />
                    <div className="w-2/3 h-3 bg-gray-200 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : events.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <EventCard key={event.id || index} event={event} index={index} />
              ))}
            </div>

            {/* Load More Pagination */}
            {page < totalPages && (
              <div className="mt-16 text-center">
                <button
                  onClick={handleLoadMore}
                  disabled={loading}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-navy text-white text-sm font-bold hover:bg-gold hover:text-navy transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {loading ? 'Loading More Events...' : 'Load More Events'}
                </button>
              </div>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl border border-gray-100 p-16 text-center shadow-sm max-w-lg mx-auto">
            <div className="w-16 h-16 bg-navy/5 text-navy rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-2">No Events Found</h3>
            <p className="text-sm text-dark/60 leading-relaxed mb-6">
              There are currently no {statusTab.toLowerCase()} events matching the selected category.
              Please check back soon or try selecting a different category filter.
            </p>
            <button
              onClick={() => {
                setSelectedType('ALL');
                setStatusTab('UPCOMING');
              }}
              className="inline-block px-6 py-2.5 rounded-full bg-navy text-white text-xs font-bold hover:bg-gold hover:text-navy transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
