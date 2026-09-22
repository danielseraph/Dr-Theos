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
            <h4 className="text-gold font-semibold mb-4 text-sm tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/70 hover:text-gold transition-colors text-sm">About Us</Link></li>
              <li><Link to="/programs" className="text-white/70 hover:text-gold transition-colors text-sm">Programs</Link></li>
              <li><Link to="/careers" className="text-white/70 hover:text-gold transition-colors text-sm">Careers</Link></li>
              <li><Link to="/resources" className="text-white/70 hover:text-gold transition-colors text-sm">Resources</Link></li>
              <li><Link to="/faq" className="text-white/70 hover:text-gold transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm tracking-widest uppercase">Contact</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>info@drtheoshub.org</li>
              <li>+234 (0) 800 000 0000</li>
              <li>Dr. Theo's Empowerment Hub<br />Calabar, Cross River State<br/>Nigeria</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm tracking-widest uppercase">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">
              Get updates on programs, scholarships, and success stories.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className="bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-2 rounded-lg text-sm focus:outline-none focus:border-gold" />
              <Button variant="primary" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50 space-y-6 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Dr. Theo's Empowerment Hub. All rights reserved.</p>
          
          <div className="flex gap-4">
            <a href="https://web.facebook.com/john.theophilus.okosigha" className="hover:text-gold transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="https://www.instagram.com/dr._j.theo/" className="hover:text-gold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>

          <div className="flex space-x-6">
            <Link to="/policies" className="hover:text-white transition-colors">Policies & Legal</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Report a Concern</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
