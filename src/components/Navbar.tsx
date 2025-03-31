import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-8">
        <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
          AiMedia
        </Link>
        
        <div className="space-x-4">
          <Link to="/about" className="text-gray-600 hover:text-gray-800 transition-colors">About</Link>
          <Link to="/services" className="text-gray-600 hover:text-gray-800 transition-colors">Services</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-gray-800 transition-colors">Pricing</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</Link>
          <Button asChild variant="outline">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
