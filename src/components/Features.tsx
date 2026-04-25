import React from 'react';
import { 
  Cloud, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Users, 
  Code2 
} from 'lucide-react';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Optimized for speed and efficiency. Get your workflows running in seconds, not hours.',
    icon: Zap,
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    title: 'Bank-grade Security',
    description: 'Your data is encrypted and protected with industry-leading security protocols.',
    icon: ShieldCheck,
    color: 'bg-green-50 text-green-600'
  },
  {
    title: 'Cloud Integrated',
    description: 'Seamlessly sync across all your favorite cloud applications and services.',
    icon: Cloud,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Real-time Analytics',
    description: 'Track every automation and monitor performance with detailed dashboards.',
    icon: BarChart3,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Team Collaboration',
    description: 'Built for teams of all sizes. Share workflows and manage permissions easily.',
    icon: Users,
    color: 'bg-orange-50 text-orange-600'
  },
  {
    title: 'Developer Friendly',
    description: 'Powerful API and SDK support for deep integrations and custom solutions.',
    icon: Code2,
    color: 'bg-indigo-50 text-indigo-600'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Powerful features to accelerate your growth
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to manage your business operations and automate complex workflows without writing a single line of code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/5 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
