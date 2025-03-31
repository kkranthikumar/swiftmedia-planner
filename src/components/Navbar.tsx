
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-brand-600 to-brand-800"></div>
            <span className="text-xl font-bold text-brand-700">SwiftMedia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">Services</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">Pricing</Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">Contact</Link>
          </div>

          {/* Login Button (Desktop) */}
          <div className="hidden md:block">
            <Button className="bg-brand-600 hover:bg-brand-700 text-white rounded-md">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-brand-600 font-medium transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-brand-600 font-medium transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-brand-600 font-medium transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/pricing" 
                className="text-gray-700 hover:text-brand-600 font-medium transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-brand-600 font-medium transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-brand-600 hover:bg-brand-700 text-white rounded-md w-full">
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
