
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-brand-500 to-brand-700"></div>
              <span className="text-xl font-bold text-white">SwiftMedia</span>
            </div>
            <p className="text-gray-300 mb-6">
              AI-powered media planning that delivers results in minutes, not days.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-brand-400 transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-400 transition-colors">AI Media Planning</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-400 transition-colors">Budget Optimization</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-400 transition-colors">Data Analytics</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-400 transition-colors">Performance Tracking</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-400 transition-colors">Custom Solutions</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-brand-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Media Avenue, Technology Park, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-brand-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-brand-400 flex-shrink-0" />
                <span className="text-gray-300">info@swiftmedia.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} SwiftMedia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
