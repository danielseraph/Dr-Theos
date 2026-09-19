import React from 'react';
import { ContactForm } from '../components/forms/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-offwhite py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-gold/10 border border-gold/20">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight">We'd love to hear from you.</h1>
          <p className="text-lg text-dark/70">
            Whether you have a question about programs, partnerships, or joining the community, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100 mr-6">
                <Mail className="w-6 h-6 text-emerald" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2">Email</h4>
                <p className="text-dark/70 mb-1">For general inquiries and support.</p>
                <a href="mailto:contact@drtheos.org" className="text-emerald font-semibold hover:underline">contact@drtheos.org</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100 mr-6">
                <Phone className="w-6 h-6 text-emerald" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2">Phone</h4>
                <p className="text-dark/70 mb-1">Mon-Fri from 9am to 6pm.</p>
                <a href="tel:+15551234567" className="text-emerald font-semibold hover:underline">+1 (555) 123-4567</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100 mr-6">
                <MapPin className="w-6 h-6 text-emerald" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2">Address</h4>
                <p className="text-dark/70">123 Community Blvd.<br />New York, NY 10001</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-navy mb-8">Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
