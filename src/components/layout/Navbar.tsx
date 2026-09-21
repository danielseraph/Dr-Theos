import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../common/Button';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { name: 'HOME', path: '/' },
  { 
    name: 'ABOUT', 
    path: '/about',
    dropdown: [
      { name: 'Our Story', path: '/about#our-story' },
      { name: 'Mission & Vision', path: '/about/mission' },
      { name: 'Core Values', path: '/about#core-values' },
      { name: 'Founder', path: '/about/founder' },
      { name: 'Leadership & Board', path: '/about/leadership' },
      { name: 'Governance', path: '/about/leadership#governance' },
    ]
  },
  { 
    name: 'PROGRAMS', 
    path: '/programs',
    dropdown: [
      { name: 'Education & Scholarships', path: '/programs/education' },
      { name: 'Vocational Training', path: '/programs/vocational' },
      { name: 'Entrepreneurship', path: '/programs/entrepreneurship' },
      { name: 'Youth Empowerment', path: '/programs/youth' },
      { name: 'Women Empowerment', path: '/programs/women' },
      { name: 'Community Development', path: '/programs/community' },
      { name: 'Scholarships', path: '/programs/scholarships' },
      { name: 'Skills Acquisition', path: '/programs/skills' },
      { name: 'Mentorship', path: '/programs/mentorship' },
    ]
  },
  { 
    name: 'IMPACT', 
    path: '/impact',
    dropdown: [
      { name: 'Our Impact', path: '/impact' },
      { name: 'Success Stories', path: '/impact/success-stories' },
      { name: 'Projects', path: '/impact/projects' },
      { name: 'Annual Reports', path: '/impact/annual-reports' },
      { name: 'Financial Transparency', path: '/impact/financial-transparency' },
    ]
  },
  { 
    name: 'GET INVOLVED', 
    path: '/get-involved',
    dropdown: [
      { name: 'Donate', path: '/get-involved/donate' },
      { name: 'Volunteer', path: '/get-involved/volunteer' },
      { name: 'Partner With Us', path: '/get-involved/partner' },
      { name: 'Sponsor a Program', path: '/get-involved/sponsor' },
      { name: 'Become a Mentor', path: '/get-involved/mentor' },
    ]
  },
  { name: 'NEWS', path: '/news' },
  { name: 'RESOURCES', path: '/resources' },
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
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 text-dark font-semibold"
      >
        <span>{item.name}</span>
        <ChevronDown className={cn("w-5 h-5 transition-transform", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-3 flex flex-col space-y-3">
              {item.dropdown.map((dropItem: any) => (
                <Link
                  key={dropItem.name}
                  to={dropItem.path}
                  className="text-sm text-dark/70 hover:text-gold block font-medium"
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
          <img src="/logo.jpg" alt="Dr. Theo's Empowerment Hub" className="h-10 w-auto object-contain rounded" />
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

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
          <Link to="/donate">
            <Button variant="primary" size="sm" className="whitespace-nowrap px-3 xl:px-4 py-2 text-xs xl:text-sm">DONATE</Button>
          </Link>
          <Link to="/apply">
            <Button variant={isScrolled ? 'outline' : 'whiteOutline'} size="sm" className="whitespace-nowrap px-3 xl:px-4 py-2 text-xs xl:text-sm">APPLY FOR SUPPORT</Button>
          </Link>
          <Link to="/volunteer">
            <Button variant="secondary" size="sm" className="whitespace-nowrap px-3 xl:px-4 py-2 text-xs xl:text-sm">VOLUNTEER</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-dark" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-dark" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 max-h-[85vh] overflow-y-auto"
          >
            <div className="py-2 px-6 flex flex-col">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <MobileDropdown key={link.name} item={link} setIsMobileMenuOpen={setIsMobileMenuOpen} />
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-dark font-semibold py-3 border-b border-gray-100 last:border-0 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              
              <div className="flex flex-col gap-3 py-6">
                <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full">DONATE</Button>
                </Link>
                <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">APPLY FOR SUPPORT</Button>
                </Link>
                <Link to="/volunteer" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="secondary" className="w-full">VOLUNTEER</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
