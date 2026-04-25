import React from 'react';
import { Zap, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary-600 p-1.5 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">NovaStream</span>
            </div>
            <p className="text-slate-500 mb-8 max-w-xs">
              Empowering businesses to automate the future. Simple, powerful, and secure.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white border border-slate-200 rounded-lg hover:border-primary-500 transition-colors">
                <Twitter className="w-5 h-5 text-slate-600" />
              </a>
              <a href="#" className="p-2 bg-white border border-slate-200 rounded-lg hover:border-primary-500 transition-colors">
                <Github className="w-5 h-5 text-slate-600" />
              </a>
              <a href="#" className="p-2 bg-white border border-slate-200 rounded-lg hover:border-primary-500 transition-colors">
                <Linkedin className="w-5 h-5 text-slate-600" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-primary-600">Features</a></li>
              <li><a href="#" className="hover:text-primary-600">Integrations</a></li>
              <li><a href="#" className="hover:text-primary-600">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-600">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-primary-600">About Us</a></li>
              <li><a href="#" className="hover:text-primary-600">Careers</a></li>
              <li><a href="#" className="hover:text-primary-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-600">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-primary-600">Documentation</a></li>
              <li><a href="#" className="hover:text-primary-600">Community</a></li>
              <li><a href="#" className="hover:text-primary-600">Blog</a></li>
              <li><a href="#" className="hover:text-primary-600">Support Center</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} NovaStream Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary-600">Cookie Settings</a>
            <a href="#" className="hover:text-primary-600">Global System Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
