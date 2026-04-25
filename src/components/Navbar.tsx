import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      scrolled ? "bg-white/80 backdrop-blur-md border-slate-200 py-3" : "bg-transparent border-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary-600 p-1.5 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">NovaStream</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <button className="bg-primary-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 active:scale-95">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 w-full bg-white border-b border-slate-200 p-4 transition-all duration-300 md:hidden",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary-600 text-white w-full py-3 rounded-xl font-semibold mt-2">
            Get Started Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
