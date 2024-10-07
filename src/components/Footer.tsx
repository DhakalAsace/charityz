import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-500 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Zap className="w-6 h-6 mr-2 text-white" />
              <span className="text-xl font-bold">CharityZ</span>
            </Link>
            <p className="text-sm">CharityZ is dedicated to making a positive impact in our community through various programs and initiatives.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-orange-200 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/donate" className="text-sm hover:text-orange-200 transition-colors duration-200">Donate</Link></li>
              <li><Link to="/volunteer" className="text-sm hover:text-orange-200 transition-colors duration-200">Volunteer</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-orange-200 transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-sm hover:text-orange-200 transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm hover:text-orange-200 transition-colors duration-200">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-orange-200 transition-colors duration-200"><Facebook size={20} /></a>
              <a href="#" className="text-white hover:text-orange-200 transition-colors duration-200"><Twitter size={20} /></a>
              <a href="#" className="text-white hover:text-orange-200 transition-colors duration-200"><Instagram size={20} /></a>
              <a href="#" className="text-white hover:text-orange-200 transition-colors duration-200"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 CharityZ. All rights reserved.</p>
          <p className="mt-2">Crafted with care by <a href="https://fiverr.com/asaced" className="underline hover:text-orange-200 transition-colors duration-200">asace</a></p>
          <p className="mt-1">Built to showcase React, TypeScript, Tailwind CSS, and Vite skills</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;