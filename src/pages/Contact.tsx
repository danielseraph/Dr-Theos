import { ContactForm } from '../components/forms/ContactForm';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <div className="w-full pt-20">
      
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            We are here to help. Reach out to us for inquiries regarding programs, partnerships, donations, or general support.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <div className="lg:col-span-5 flex flex-col space-y-10">
              
              <div>
                <h3 className="text-2xl font-bold text-navy mb-6">Official Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100 mr-5">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">Email Us</h4>
                      <a href="mailto:info@drtheoshub.org" className="text-dark/70 hover:text-gold transition-colors block">info@drtheoshub.org</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100 mr-5">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">Call Us</h4>
                      <a href="tel:+234 8103826273" className="text-dark/70 hover:text-gold transition-colors block">+234 810 382 6273</a>
                      <a href="tel:+1 4153258335" className="text-dark/70 hover:text-gold transition-colors block">+1 415 325 8335</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100 mr-5">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">Office Address</h4>
                      <p className="text-dark/70 leading-relaxed">Dr. Theo's Empowerment Hub<br/>Bayelsa State<br/>Nigeria</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100 mr-5">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">Office Hours</h4>
                      <p className="text-dark/70">Monday - Friday: 9:00 AM - 5:00 PM<br/>Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-navy mb-4">Program-Specific Contacts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100">
                    <span className="font-medium text-navy text-sm">Partnerships & Sponsorships</span>
                    <a href="mailto:partners@drtheoshub.org" className="text-gold text-sm font-bold hover:underline">partners@drtheoshub.org</a>
                  </div>
                  <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100">
                    <span className="font-medium text-navy text-sm">Scholarships & Education</span>
                    <a href="mailto:scholarships@drtheoshub.org" className="text-gold text-sm font-bold hover:underline">scholarships@drtheoshub.org</a>
                  </div>
                  <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100">
                    <span className="font-medium text-navy text-sm">Vocational Training</span>
                    <a href="mailto:training@drtheoshub.org" className="text-gold text-sm font-bold hover:underline">training@drtheoshub.org</a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-navy mb-4">Connect on Social Media</h3>
                <div className="flex gap-4">
                  <a href="https://web.facebook.com/john.theophilus.okosigha" className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/dr._j.theo/" className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 h-fit sticky top-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-navy">Send us a Message</h3>
              </div>
              <ContactForm />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};
