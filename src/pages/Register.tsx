import React from 'react';
import { RegistrationForm } from '../components/forms/RegistrationForm';

export const Register = () => {
  return (
    <div className="min-h-screen bg-offwhite py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-navy/10 border border-navy/20">
            <span className="text-navy text-xs font-bold tracking-widest uppercase">Join Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight">Create Your Account</h1>
          <p className="text-lg text-dark/70">
            Connect with people, opportunities, and a community committed to growing and succeeding together.
          </p>
        </div>
        
        <RegistrationForm />
        
        <p className="text-center text-sm text-dark/60 mt-8">
          By registering, you agree to our <a href="/terms" className="text-emerald hover:underline">Terms of Service</a> and <a href="/privacy" className="text-emerald hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};
