import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';

const faqs = [
  {
    question: 'Who can benefit from the organization?',
    answer: 'Our programs are primarily designed for underprivileged individuals, including vulnerable children, youth, women, and budding entrepreneurs located in our areas of operation. Specific eligibility criteria vary by program, but our core focus is always on those who lack access to necessary educational or financial resources.'
  },
  {
    question: 'Where do you operate?',
    answer: 'Dr. Theo\'s Empowerment Hub is currently headquartered and operates primarily within Bayelsa State, Nigeria. We focus on both urban centers and surrounding rural communities where empowerment initiatives are most needed.'
  },
  {
    question: 'How can I apply for assistance?',
    answer: 'You can apply directly through our website by visiting the Application Portal. There, you can select the specific program you are interested in (e.g., Scholarships, Vocational Training, Business Support) and fill out the required online application form.'
  },
  {
    question: 'How are beneficiaries selected?',
    answer: 'Beneficiaries are selected based on the specific eligibility requirements of each program, which usually include an assessment of financial need, motivation, and potential for impact. We maintain a transparent selection process; in some cases, selection is merit-based, while in others, it may involve random selection among qualified applicants.'
  },
  {
    question: 'How can I donate?',
    answer: 'Donating is easy and secure. You can visit our Donate page to make a one-time or recurring contribution. We accept direct bank transfers for local donors and provide secure online payment options for international supporters.'
  },
  {
    question: 'Can I volunteer?',
    answer: 'Yes! We are always looking for passionate individuals to join our team. We offer various roles ranging from mentorship and teaching to administrative and event support. You can read more about available roles and apply on our Volunteer page.'
  },
  {
    question: 'Can my company partner with you?',
    answer: 'Absolutely. We actively seek partnerships with corporations, small businesses, NGOs, and government agencies. We offer multiple partnership models including Corporate Sponsorship, Skills Training Partnerships, and Equipment Donations. Visit our Partner With Us page for more details.'
  },
  {
    question: 'How do I sponsor a program?',
    answer: 'If you wish to sponsor a specific program or fund a named scholarship, you can indicate this preference on our Donate page or contact our partnerships team directly via the Partner With Us page to discuss a custom sponsorship arrangement.'
  },
  {
    question: 'How are donations used?',
    answer: 'We are committed to financial transparency. Donations go directly toward funding our core mission areas: educational scholarships, vocational training equipment, entrepreneurship grants, and community development projects. Detailed breakdowns of our expenditures are published annually in our Transparency section.'
  },
  {
    question: 'How can I report a concern?',
    answer: 'We take accountability and safeguarding very seriously. If you have any concerns regarding our programs, staff, or policies, please contact us directly via our official email or phone number listed on the Contact Us page. All reports are handled with strict confidentiality.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full pt-20">
      
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
              <MessageCircleQuestion className="w-8 h-8 text-gold" />
            </div>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Find quick answers to common questions about our programs, application processes, donations, and partnerships.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: index * 0.05 }}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-gold shadow-md' : 'border-gray-100 shadow-sm hover:border-gold/30'}`}
                >
                  <button 
                    onClick={() => toggleOpen(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg pr-8 ${isOpen ? 'text-gold' : 'text-navy'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-gold/10 text-gold' : 'bg-offwhite text-dark/40'}`}>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-dark/70 leading-relaxed border-t border-gray-50 mt-2 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-16 bg-white px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Still have questions?</h2>
          <p className="text-dark/60 mb-8 max-w-xl mx-auto">If you couldn't find the answer you were looking for, please don't hesitate to reach out to our team directly.</p>
          <Link to="/contact">
            <Button variant="primary" size="lg">Contact Us</Button>
          </Link>
        </div>
      </section>

    </div>
  );
};
