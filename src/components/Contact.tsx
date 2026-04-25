import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-900 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Ready to streamline your business?
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Contact our sales team for a personalized demo or get started with our free tier today. We're here to help you scale.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-500/20 p-2 rounded-lg mt-1">
                  <CheckCircle className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Expert Onboarding</h4>
                  <p className="text-slate-400">Get up and running in less than 24 hours with our success team.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-500/20 p-2 rounded-lg mt-1">
                  <CheckCircle className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">24/7 Priority Support</h4>
                  <p className="text-slate-400">Our support engineers are always available to help you build.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="bg-white p-8 rounded-3xl text-slate-900 shadow-2xl">
              {formState === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-600">We'll get back to you within 2 business hours.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-8 text-primary-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700">Work Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jane@company.com" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700">How can we help?</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Tell us about your project..." 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={formState === 'submitting'}
                    className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
