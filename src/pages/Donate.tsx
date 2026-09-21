import { motion } from 'framer-motion';
import { Heart, Globe, ArrowRight, ShieldCheck, CreditCard, Landmark, BookOpen, Wrench, Briefcase, Building2 } from 'lucide-react';
import { useState } from 'react';

export const Donate = () => {
  const [region, setRegion] = useState<'nigeria' | 'international'>('nigeria');
  const [amount, setAmount] = useState<string>('50000');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');

  return (
    <div className="w-full pt-20">
      
      {/* Hero */}
      <section className="bg-navy text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Invest in Human Potential
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Your contribution directly empowers students, women, youths, and entire communities to build a self-sustaining future.
          </motion.p>
          <div className="flex items-center justify-center gap-2 text-sm text-white/60 font-medium">
            <ShieldCheck className="w-5 h-5 text-gold" /> 100% Secure & Encrypted Processing
          </div>
        </div>
      </section>

      <section className="py-20 bg-offwhite px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Why Donate / Where it goes */}
          <div className="lg:col-span-5 space-y-12">
            
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Why Donate?</h2>
              <p className="text-dark/70 leading-relaxed mb-6">
                Dr. Theo's Empowerment Hub relies on the generosity of individuals and organizations to keep our programs completely free for beneficiaries. Every donation, regardless of size, creates a ripple effect of positive change.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">Where Your Donation Goes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Education & Scholarships</h4>
                    <p className="text-sm text-dark/60 mt-1">Tuition, textbooks, and living stipends for underprivileged students.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Vocational Training</h4>
                    <p className="text-sm text-dark/60 mt-1">Sewing machines, tools, and materials for skills acquisition programs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Entrepreneurship</h4>
                    <p className="text-sm text-dark/60 mt-1">Micro-grants and startup capital for local business initiatives.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Community & Emergency</h4>
                    <p className="text-sm text-dark/60 mt-1">Water boreholes, local infrastructure, and emergency social support.</p>
                  </div>
                </li>
              </ul>
              <p className="text-xs text-dark/40 mt-4 italic">* A small percentage is allocated to essential administrative costs to keep the Hub operational.</p>
            </div>
          </div>

          {/* Right Column: Donation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100 sticky top-28">
              
              {/* Type toggle */}
              <div className="flex bg-offwhite p-1 rounded-xl mb-8">
                <button 
                  onClick={() => setDonationType('one-time')}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${donationType === 'one-time' ? 'bg-white text-navy shadow-sm' : 'text-dark/50 hover:text-navy'}`}
                >
                  Give Once
                </button>
                <button 
                  onClick={() => setDonationType('monthly')}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${donationType === 'monthly' ? 'bg-gold text-white shadow-sm' : 'text-dark/50 hover:text-navy'}`}
                >
                  <Heart className="w-4 h-4" /> Monthly
                </button>
              </div>

              {/* Region Selection */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-navy mb-3">Select Your Region</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setRegion('nigeria')}
                    className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${region === 'nigeria' ? 'border-gold bg-gold/5' : 'border-gray-100 bg-white hover:border-gold/30'}`}
                  >
                    <Landmark className={`w-6 h-6 ${region === 'nigeria' ? 'text-gold' : 'text-dark/40'}`} />
                    <div className="text-left">
                      <div className={`font-bold ${region === 'nigeria' ? 'text-gold' : 'text-navy'}`}>Nigeria</div>
                      <div className="text-xs text-dark/50">NGN Payments</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => setRegion('international')}
                    className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${region === 'international' ? 'border-gold bg-gold/5' : 'border-gray-100 bg-white hover:border-gold/30'}`}
                  >
                    <Globe className={`w-6 h-6 ${region === 'international' ? 'text-gold' : 'text-dark/40'}`} />
                    <div className="text-left">
                      <div className={`font-bold ${region === 'international' ? 'text-gold' : 'text-navy'}`}>International</div>
                      <div className="text-xs text-dark/50">USD / Card</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-navy mb-3">Donation Amount ({region === 'nigeria' ? '₦' : '$'})</label>
                
                {region === 'nigeria' ? (
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {['10000', '25000', '50000', '100000', '250000'].map(val => (
                      <button 
                        key={val}
                        onClick={() => setAmount(val)}
                        className={`py-3 rounded-xl border font-bold transition-all ${amount === val ? 'bg-navy text-white border-navy' : 'bg-white border-gray-200 text-navy hover:border-navy'}`}
                      >
                        ₦{parseInt(val).toLocaleString()}
                      </button>
                    ))}
                    <button 
                      onClick={() => setAmount('custom')}
                      className={`py-3 rounded-xl border font-bold transition-all ${amount === 'custom' ? 'bg-navy text-white border-navy' : 'bg-white border-gray-200 text-navy hover:border-navy'}`}
                    >
                      Custom
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {['25', '50', '100', '250', '500'].map(val => (
                      <button 
                        key={val}
                        onClick={() => setAmount(val)}
                        className={`py-3 rounded-xl border font-bold transition-all ${amount === val ? 'bg-navy text-white border-navy' : 'bg-white border-gray-200 text-navy hover:border-navy'}`}
                      >
                        ${val}
                      </button>
                    ))}
                    <button 
                      onClick={() => setAmount('custom')}
                      className={`py-3 rounded-xl border font-bold transition-all ${amount === 'custom' ? 'bg-navy text-white border-navy' : 'bg-white border-gray-200 text-navy hover:border-navy'}`}
                    >
                      Custom
                    </button>
                  </div>
                )}

                {amount === 'custom' && (
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-dark/50">{region === 'nigeria' ? '₦' : '$'}</span>
                    <input type="number" className="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-300 focus:border-gold outline-none font-bold text-lg" placeholder="Enter amount" />
                  </div>
                )}
              </div>

              {/* Payment Info */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-navy mb-3">Payment Method</label>
                
                {region === 'nigeria' ? (
                  <div className="bg-gold/5 border border-gold/20 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4 text-gold font-bold">
                      <Landmark className="w-5 h-5" /> Direct Bank Transfer
                    </div>
                    <div className="space-y-2 text-sm text-dark/80">
                      <div className="flex justify-between border-b border-gold/10 pb-2">
                        <span>Bank Name:</span> <span className="font-bold">Guaranty Trust Bank (GTB)</span>
                      </div>
                      <div className="flex justify-between border-b border-gold/10 py-2">
                        <span>Account Name:</span> <span className="font-bold">Dr Theos Empowerment Hub</span>
                      </div>
                      <div className="flex justify-between pt-2">
                        <span>Account Number:</span> <span className="font-bold text-lg">0123456789</span>
                      </div>
                    </div>
                    <p className="text-xs text-dark/50 mt-4">Please include your email in the transfer narration for a receipt.</p>
                  </div>
                ) : (
                  <div className="bg-offwhite border border-gray-200 rounded-xl p-6 text-center">
                    <CreditCard className="w-8 h-8 text-navy mx-auto mb-3" />
                    <h4 className="font-bold text-navy mb-1">Secure Card Payment</h4>
                    <p className="text-sm text-dark/60 mb-4">You will be redirected to our secure payment gateway (Stripe/Paystack) to complete your transaction.</p>
                    <button className="w-full bg-navy text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-navy/90 transition-colors">
                      Proceed to Checkout <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Specific Sponsorships */}
              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-sm font-bold text-navy uppercase tracking-widest mb-4">Other ways to give</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <button className="text-left p-3 rounded-lg border border-gray-200 hover:border-gold transition-colors">
                    <div className="font-bold text-navy text-sm">Sponsor a Student</div>
                    <div className="text-xs text-dark/50">Fund a full year of tuition</div>
                  </button>
                  <button className="text-left p-3 rounded-lg border border-gray-200 hover:border-gold transition-colors">
                    <div className="font-bold text-navy text-sm">Corporate Sponsorship</div>
                    <div className="text-xs text-dark/50">Partner as a business</div>
                  </button>
                  <button className="text-left p-3 rounded-lg border border-gray-200 hover:border-navy transition-colors">
                    <div className="font-bold text-navy text-sm">Donate Equipment</div>
                    <div className="text-xs text-dark/50">Laptops, tools, machines</div>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
