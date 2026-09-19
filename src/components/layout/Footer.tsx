import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

export const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-navy/90">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6 transition-opacity hover:opacity-80">
              <img src="/logo.jpg" alt="Dr. Theo's Empowerment Hub" className="h-12 w-auto object-contain rounded" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 text-balance">
              Building stronger connections, creating opportunities, and achieving meaningful progress together.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm tracking-widest uppercase">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'What We Do', 'Community', 'Posts'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '') === 'home' ? '' : item.toLowerCase().replace(/\s+/g, '')}`} className="text-white/70 hover:text-emerald transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm tracking-widest uppercase">Contact</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>contact@drtheos.org</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Community Blvd.<br />New York, NY 10001</li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm tracking-widest uppercase">Join Us</h4>
            <p className="text-white/70 text-sm mb-4">
              Be part of something bigger. Connect with people and opportunities.
            </p>
            <Link to="/register">
              <Button variant="primary" size="sm" className="w-full">
                REGISTER NOW
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50 space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Dr. Theo's Empowerment Hub. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
