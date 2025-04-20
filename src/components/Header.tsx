import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Phone, ShoppingCart, Tv2 } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Tv2 
              size={32} 
              className="text-[#00D3F1] mr-2" 
              strokeWidth={2.5}
            />
            <span className="text-xl md:text-2xl font-bold">
              <span className="text-[#00D3F1]">Quachi</span> Fire TV
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#00D3F1] transition-colors">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-[#00D3F1] transition-colors">
              Features
            </a>
            <a href="#design" className="text-gray-700 hover:text-[#00D3F1] transition-colors">
              Design
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#00D3F1] transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#00D3F1] transition-colors">
              Contact
            </a>
            <Button>
              <ShoppingCart size={18} className="mr-2" />
              Buy Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t mt-2 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              className="flex items-center text-gray-700 hover:text-[#00D3F1] py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Home size={18} className="mr-2" />
              Home
            </a>
            <a 
              href="#features" 
              className="flex items-center text-gray-700 hover:text-[#00D3F1] py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Info size={18} className="mr-2" />
              Features
            </a>
            <a 
              href="#design" 
              className="flex items-center text-gray-700 hover:text-[#00D3F1] py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Tv2 size={18} className="mr-2" />
              Design
            </a>
            <a 
              href="#testimonials" 
              className="flex items-center text-gray-700 hover:text-[#00D3F1] py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Info size={18} className="mr-2" />
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="flex items-center text-gray-700 hover:text-[#00D3F1] py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} className="mr-2" />
              Contact
            </a>
            <Button fullWidth>
              <ShoppingCart size={18} className="mr-2" />
              Buy Now
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;