import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-primary-700 uppercase bg-primary-50 rounded-full border border-primary-200">
              Introducing NovaStream 2.0
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Automate your workflow <span className="text-primary-600">without the complexity.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              The all-in-one platform to connect your apps, automate repetitive tasks, and scale your business faster than ever before.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="w-full sm:w-auto bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary-500/25 active:scale-95">
                Start for free <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" /> Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Cancel anytime
              </div>
            </div>
          </motion.div>

          {/* Dummy Dashboard UI */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 relative mx-auto max-w-5xl"
          >
            <div className="relative rounded-2xl border-4 border-slate-900/5 bg-slate-100 p-2 shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Product Dashboard" 
                className="rounded-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
