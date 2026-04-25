import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager at TechFlow',
    content: "NovaStream has completely transformed how our team handles data migration. What used to take hours now happens in minutes.",
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'James Wilson',
    role: 'Founder of GrowthOps',
    content: "The best automation tool I've ever used. The interface is intuitive and the customer support is top-notch.",
    avatar: 'https://i.pravatar.cc/150?u=james'
  },
  {
    name: 'Elena Rodriguez',
    role: 'CTO at Nexa Solutions',
    content: "We integrated the NovaStream API into our existing infrastructure in less than a day. Truly impressive engineering.",
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by innovative teams worldwide
            </h2>
            <p className="text-lg text-slate-600">
              Join 10,000+ companies that use NovaStream to power their growth.
            </p>
          </div>
          <div className="flex gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 font-bold text-slate-900">4.9/5 Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-700 italic leading-relaxed">
                "{t.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
