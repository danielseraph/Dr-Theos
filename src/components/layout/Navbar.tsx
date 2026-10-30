import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../common/Button';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { name: 'HOME', path: '/' },
  {
    name: 'ABOUT US',
    path: '/about',
    dropdown: [
      { name: 'Our Mission', path: '/about/mission' },
      { name: 'Vision & Objectives', path: '/about/vision' },
      { name: 'Founder', path: '/about/founder' },
      { name: 'Leadership', path: '/about/leadership' },
      { name: 'Policies', path: '/about/policies' },
    ],
  },
  {
    name: 'OUR PROGRAMS',
    path: '/programs',
    dropdown: [
      { name: 'Vocational Training', path: '/programs/vocational' },
      { name: 'Scholarships', path: '/programs/scholarships' },
      { name: 'Business Development', path: '/programs/entrepreneurship' },
      { name: 'Youth Development', path: '/programs/youth' },
      { name: 'Women Empowerment', path: '/programs/women' },
      { name: 'Community Development', path: '/programs/community' },
      { name: 'Skills Acquisition', path: '/programs/skills' },
      { name: 'Mentorship', path: '/programs/mentorship' },
      { name: 'Children Support', path: '/programs/children' },
    ],
  },
  {
    name: 'OUR IMPACT',
    path: '/impact',
    dropdown: [
      { name: 'Impact Dashboard', path: '/impact' },
      { name: 'Support', path: '/impact/support' },
      { name: 'Success Stories', path: '/impact/success-stories' },
      { name: 'Financial Transparency', path: '/impact/financial-transparency' },
    ],
  },
  {
    name: 'MEDIA & NEWS',
    path: '#',
    dropdown: [
      { name: 'News', path: '/news' },
      { name: 'Events', path: '/events' },
      { name: 'Gallery', path: '/gallery' },
    ],
  },
  {
    name: 'RESOURCES',
    path: '#',
    dropdown: [
      { name: 'Educational Downloads', path: '/resources' },
      { name: 'FAQ', path: '/faq' },
    ],
  },
  {
    name: 'GET INVOLVED',
    path: '/get-involved',
    dropdown: [
      { name: 'Partner With Us', path: '/get-involved/partner' },
      { name: 'Careers & Volunteer', path: '/get-involved/careers' },
      { name: 'Donate', path: '/get-involved/donate' },
      { name: 'Apply for Support', path: '/get-involved/apply' },
    ],
  },
  { name: 'CONTACT', path: '/contact' },
];

const DesktopDropdown = ({ item, isScrolled }: { item: any, isScrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to={item.path}
        className={cn(
          "flex items-center text-xs xl:text-sm font-semibold transition-colors hover:text-gold py-2",
          isScrolled ? "text-dark" : "text-white"
        )}
      >
        {item.name}
        <ChevronDown className="ml-1 w-4 h-4" />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-10 left-0 w-56 bg-white shadow-xl rounded-xl py-2 z-50 border border-gray-100"
          >
            {item.dropdown.map((dropItem: any) => (
              <Link
                key={dropItem.name}
                to={dropItem.path}
                className="block px-4 py-2 text-sm text-dark hover:bg-gold/5 hover:text-gold transition-colors font-medium"
              >
                {dropItem.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileDropdown = ({ item, setIsMobileMenuOpen }: { item: any, setIsMobileMenuOpen: (v: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3.5 text-white font-bold text-base hover:text-gold transition-colors"
      >
        <span>{item.name}</span>
        <ChevronDown className={cn("w-5 h-5 text-gold transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-3 flex flex-col space-y-2.5 border-l-2 border-gold/30 my-1 ml-2">
              {item.dropdown.map((dropItem: any) => (
                <Link
                  key={dropItem.name}
                  to={dropItem.path}
                  className="text-sm text-white/80 hover:text-gold block font-medium py-1 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {dropItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : cn('py-5', isHome ? 'bg-transparent text-white' : 'bg-navy text-white')
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 xl:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center transition-opacity hover:opacity-80 shrink-0"
        >
          <img src="/logo.jpg" alt="Dr. Theo's Empowerment Foundation" className="h-10 w-auto object-contain rounded" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
          {navLinks.map((link) => (
            link.dropdown ? (
              <DesktopDropdown key={link.name} item={link} isScrolled={isScrolled} />
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-xs xl:text-sm font-semibold transition-colors hover:text-gold py-2 flex items-center",
                  isScrolled ? "text-dark" : "text-white"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className={cn(
            "lg:hidden p-2.5 rounded-xl transition-all duration-200 active:scale-95 z-50",
            isScrolled 
              ? "text-navy hover:bg-gray-100" 
              : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className={cn("w-6 h-6", isScrolled ? "text-dark" : "text-white")} />
        </button>
      </div>

      {/* Fullscreen Mobile Drawer with Smooth Animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 lg:hidden bg-navy/95 backdrop-blur-md flex flex-col"
          >
            {/* Top header bar of full screen drawer */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 transition-opacity hover:opacity-80"
              >
                <img
                  src="/logo.jpg"
                  alt="Dr. Theo's Empowerment Foundation"
                  className="h-10 w-auto object-contain rounded"
                />
                <span className="text-white font-bold text-sm tracking-wide">
                  Dr. Theo's Foundation
                </span>
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Nav Items list with staggered animation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex-1 overflow-y-auto px-6 py-6 space-y-1"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.25 }}
                >
                  {link.dropdown ? (
                    <div className="border-b border-white/10 py-1">
                      <MobileDropdown item={link} setIsMobileMenuOpen={setIsMobileMenuOpen} />
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-white hover:text-gold font-bold text-base py-3.5 border-b border-white/10 flex items-center justify-between transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{link.name}</span>
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="flex flex-col gap-3 pt-6 pb-8"
              >
                <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full justify-center shadow-lg shadow-gold/20 py-3 font-bold">
                    DONATE
                  </Button>
                </Link>
                <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-center border-gold text-gold hover:bg-gold hover:text-navy py-3 font-bold">
                    APPLY FOR SUPPORT
                  </Button>
                </Link>
                <Link to="/volunteer" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="secondary" className="w-full justify-center py-3 font-bold">
                    VOLUNTEER
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
