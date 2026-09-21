import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter } from 'lucide-react';
import { Button } from '../components/common/Button';

const eventTypes = ['All', 'Training', 'Workshop', 'Community Outreach', 'Fundraising', 'Webinar', 'Conference', 'Ceremony'];

const events = [
  {
    id: 1,
    type: 'Conference',
    status: 'upcoming',
    title: 'Empowerment Summit 2026',
    description: 'Our flagship annual summit bringing together beneficiaries, donors, partners, community leaders, and experts for a day of inspiration, panel discussions, and strategic networking. This year\'s theme: "Roots to Results — Measuring Real Impact."',
    date: 'October 18, 2026',
    time: '9:00 AM – 5:00 PM WAT',
    location: 'Calabar International Conference Centre, Cross River State',
    seats: 'Limited seats — 200 available',
    free: false,
    fee: '₦5,000 (subsidized for beneficiaries)',
  },
  {
    id: 2,
    type: 'Training',
    status: 'upcoming',
    title: 'Digital Skills & Social Media Marketing Bootcamp — Cohort 1',
    description: 'A 4-week intensive bootcamp covering smartphone content creation, social media management, basic graphic design, and online income generation for young people aged 18–30.',
    date: 'October 6 – November 1, 2026',
    time: 'Tuesdays & Thursdays, 10:00 AM – 1:00 PM',
    location: 'Dr. Theo\'s Hub Training Centre, Calabar',
    seats: '30 participants',
    free: true,
    fee: 'Free (application required)',
  },
  {
    id: 3,
    type: 'Webinar',
    status: 'upcoming',
    title: 'From Idea to Business — Entrepreneurship Webinar for Beginners',
    description: 'A free online webinar for aspiring entrepreneurs who want to turn their ideas into sustainable businesses. Facilitated by our Entrepreneurship Program Director with guest speakers from the local business community.',
    date: 'September 28, 2026',
    time: '3:00 PM – 5:00 PM WAT',
    location: 'Online (Zoom) — Link sent upon registration',
    seats: 'Unlimited',
    free: true,
    fee: 'Free',
  },
  {
    id: 4,
    type: 'Ceremony',
    status: 'upcoming',
    title: 'Scholarship Award Ceremony — 2026 Cohort',
    description: 'A formal ceremony to officially present the 2026 scholarship awards to our 15 selected beneficiaries. Families, sponsors, board members, and media are warmly invited to celebrate this milestone.',
    date: 'October 2, 2026',
    time: '11:00 AM – 2:00 PM WAT',
    location: 'Dr. Theo\'s Empowerment Hub, Calabar',
    seats: 'Invitation-based + Open to public',
    free: true,
    fee: 'Free entry',
  },
  {
    id: 5,
    type: 'Community Outreach',
    status: 'upcoming',
    title: 'Free Health Screening & Community Outreach Day',
    description: 'In partnership with local healthcare volunteers, we are hosting a free community outreach day offering basic health checks, nutritional advice, and information on our empowerment programs.',
    date: 'October 11, 2026',
    time: '8:00 AM – 3:00 PM',
    location: 'Kpakungu Community Square, Cross River State',
    seats: 'Open to all community members',
    free: true,
    fee: 'Free',
  },
  {
    id: 6,
    type: 'Fundraising',
    status: 'upcoming',
    title: 'Annual Charity Gala Dinner — "Building Futures Together"',
    description: 'An elegant evening of celebration, storytelling, and fundraising. Guests will hear directly from our beneficiaries, enjoy live entertainment, and have the opportunity to sponsor a student, a vocational seat, or a community project.',
    date: 'November 8, 2026',
    time: '6:00 PM – 10:00 PM',
    location: 'Metropolitan Club, Calabar',
    seats: 'Table bookings available (10 per table)',
    free: false,
    fee: '₦50,000/seat | ₦450,000/table',
  },
  {
    id: 7,
    type: 'Workshop',
    status: 'upcoming',
    title: 'Women in Business — Leadership & Financial Literacy Workshop',
    description: 'A practical one-day workshop for women entrepreneurs and aspiring businesswomen covering financial planning, pricing strategies, record keeping, and accessing capital.',
    date: 'October 25, 2026',
    time: '9:00 AM – 4:00 PM',
    location: 'Dr. Theo\'s Hub Training Centre, Calabar',
    seats: '40 participants',
    free: true,
    fee: 'Free (registration required)',
  },
  {
    id: 8,
    type: 'Training',
    status: 'past',
    title: 'Tailoring & Garment Construction — Cohort 3 (Completed)',
    description: 'Our third cohort of the Tailoring & Garment Construction program successfully completed their 6-month course. 22 graduates received starter kits and certificates.',
    date: 'March – August 2026',
    time: 'Weekdays, 9:00 AM – 12:00 PM',
    location: 'Dr. Theo\'s Hub Training Centre, Calabar',
    seats: '22 participants (Completed)',
    free: true,
    fee: 'Free',
  },
];

const typeColors: Record<string, string> = {
  'Training': 'bg-navy/10 text-navy',
  'Workshop': 'bg-gold/10 text-gold',
  'Community Outreach': 'bg-gold/20 text-gold',
  'Fundraising': 'bg-navy/10 text-navy',
  'Webinar': 'bg-gold/10 text-gold',
  'Conference': 'bg-navy/10 text-navy',
  'Ceremony': 'bg-gold/20 text-gold',
};

export const Events = () => {
  const [activeType, setActiveType] = useState('All');
  const [showPast, setShowPast] = useState(false);

  const filtered = events.filter(e => {
    const matchType = activeType === 'All' || e.type === activeType;
    const matchStatus = showPast ? true : e.status === 'upcoming';
    return matchType && matchStatus;
  });

  const upcoming = filtered.filter(e => e.status === 'upcoming');
  const past = filtered.filter(e => e.status === 'past');

  return (
    <div className="w-full pt-20">

      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6">
            Events & Programs
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Join us at our upcoming trainings, workshops, outreach programs, and community events. There is always something happening at the Hub.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <Filter className="w-4 h-4 text-dark/30 shrink-0" />
            {eventTypes.map(type => (
              <button key={type} onClick={() => setActiveType(type)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  activeType === type
                    ? 'bg-gold text-navy border-gold'
                    : 'bg-white text-dark/60 border-gray-200 hover:border-gold/50'
                }`}>
                {type}
              </button>
            ))}
          </div>
          <button onClick={() => setShowPast(!showPast)}
            className={`shrink-0 text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
              showPast ? 'bg-navy text-white border-navy' : 'border-gray-200 text-dark/50 hover:border-navy'
            }`}>
            {showPast ? 'Showing All' : 'Show Past Events'}
          </button>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-offwhite px-6 min-h-96">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Upcoming */}
          {upcoming.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-gold animate-pulse inline-block"></span>
                Upcoming Events
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {upcoming.map((event, i) => (
                  <motion.div key={event.id}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: (i % 2) * 0.1 }}
                    className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all overflow-hidden flex flex-col">

                    {/* Card top strip */}
                    <div className="bg-navy px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <Calendar className="w-4 h-4 text-gold" />
                        <span className="font-semibold">{event.date}</span>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${typeColors[event.type] || 'bg-gold/10 text-gold'}`}>
                        {event.type}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-navy mb-3 leading-snug">{event.title}</h3>
                      <p className="text-dark/60 text-sm leading-relaxed mb-5 flex-grow">{event.description}</p>

                      <div className="space-y-2 mb-5">
                        <div className="flex items-start gap-2 text-sm text-dark/70">
                          <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm text-dark/70">
                          <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm text-dark/70">
                          <Users className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span>{event.seats}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className={`text-sm font-bold ${event.free ? 'text-gold' : 'text-navy'}`}>
                          {event.fee}
                        </span>
                        <Button variant="primary" size="sm" className="flex items-center gap-2">
                          Register <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Past Events */}
          {showPast && past.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-dark/40 mb-8">Past Events</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {past.map((event, i) => (
                  <motion.div key={event.id}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: (i % 2) * 0.1 }}
                    className="bg-white/60 rounded-3xl border border-gray-100 overflow-hidden flex flex-col opacity-70">
                    <div className="bg-dark/10 px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-dark/50 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">{event.date}</span>
                      </div>
                      <span className="text-xs font-bold bg-dark/10 text-dark/50 px-3 py-1 rounded-full">{event.type}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-dark/60 mb-2">{event.title}</h3>
                      <p className="text-dark/40 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-dark/40 text-lg">No events found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Submit an event CTA */}
      <section className="py-20 bg-navy text-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Host an Event With Us?</h2>
          <p className="text-white/70 mb-8 leading-relaxed">Community leaders, organizations, and volunteers are welcome to propose events that align with our mission. Get in touch with our team to discuss collaboration.</p>
          <Button variant="primary" size="lg">Contact Our Team</Button>
        </div>
      </section>

    </div>
  );
};
