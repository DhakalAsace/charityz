import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-orange-500 text-white">
      <div className="container mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Zap className="w-6 h-6 sm:w-8 sm:h-8 mr-2 text-white" />
          <span className="text-xl sm:text-2xl font-bold">CharityZ</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4 sm:space-x-6">
            <li><Link to="/" className="hover:text-orange-200 transition-colors duration-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-200 transition-colors duration-200">About</Link></li>
            <li><Link to="/donate" className="hover:text-orange-200 transition-colors duration-200">Donate</Link></li>
            <li><Link to="/volunteer" className="hover:text-orange-200 transition-colors duration-200">Volunteer</Link></li>
            <li><Link to="/events" className="hover:text-orange-200 transition-colors duration-200">Events</Link></li>
            <li><Link to="/programs" className="hover:text-orange-200 transition-colors duration-200">Programs</Link></li>
            <li><Link to="/contact" className="hover:text-orange-200 transition-colors duration-200">Contact</Link></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-orange-600 py-4">
          <ul className="flex flex-col space-y-2">
            <li><Link to="/" className="block px-4 py-2 hover:bg-orange-700" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="block px-4 py-2 hover:bg-orange-700" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/donate" className="block px-4 py-2 hover:bg-orange-700" onClick={toggleMenu}>Donate</Link></li>
            <li><Link to="/volunteer" className="block px-4 py-2 hover:bg-orange-700" onClick={toggleMenu}>Volunteer</Link></li>
            <li><Link to="/events" className="block px-4 py-2 hover:bg-orange-700" onClick={toggleMenu}>Events</Link></li>
            <li><Link to="/programs" className="block px-4 py-2 hover:bg-orange-700" onClick={toggleMenu}>Programs</Link></li>
            <li><Link to="/contact" className="block px-4 py-2 hover:bg-orange-700" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;