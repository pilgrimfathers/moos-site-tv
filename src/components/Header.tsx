import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Phone, ShoppingCart, Tv2, Wind, WashingMachine } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './television/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : isActive('/') 
            ? 'bg-[#e0f7fa] py-4' 
            : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/assets/comp-logo/quachi-logo.png" 
                alt="Quachi Fire TV Logo"
                className="h-10 mr-2" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-[#00D3F1]' : 'text-gray-700 hover:text-[#00D3F1]'}`}
            >
              Home
            </Link>
            <Link 
              to="/television" 
              className={`transition-colors ${isActive('/television') ? 'text-[#00D3F1]' : 'text-gray-700 hover:text-[#00D3F1]'}`}
            >
              Television
            </Link>
            <Link 
              to="/washingmachine" 
              className={`transition-colors ${isActive('/washingmachine') ? 'text-[#00D3F1]' : 'text-gray-700 hover:text-[#00D3F1]'}`}
            >
              Washing Machine
            </Link>
            <Link 
              to="/airconditioner" 
              className={`transition-colors ${isActive('/airconditioner') ? 'text-[#00D3F1]' : 'text-gray-700 hover:text-[#00D3F1]'}`}
            >
              Air Conditioner
            </Link>
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
        <nav className={`md:hidden border-t mt-2 py-4 ${isActive('/') && !scrolled ? 'bg-[#e0f7fa]' : 'bg-white'}`}>
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`flex items-center py-2 transition-colors ${isActive('/') ? 'text-[#00D3F1]' : 'text-gray-700 hover:text-[#00D3F1]'}`}
              onClick={() => setIsOpen(false)}
            >
              <Home size={18} className="mr-2" />
              Home
            </Link>
            <Link 
              to="/television" 
              className={`flex items-center py-2 transition-colors ${isActive('/television') ? 'text-[#00D3F1]' : 'text-gray-700 hover:text-[#00D3F1]'}`}
              onClick={() => setIsOpen(false)}
            >
              <Tv2 size={18} className="mr-2" />
              Television
            </Link>
            <Link 
              to="/washingmachine" 
              className={`flex items-center py-2 transition-colors ${isActive('/washingmachine') ? 'text-[#00D3F1]' : 'text-gray-700 hover:text-[#00D3F1]'}`}
              onClick={() => setIsOpen(false)}
            >
              <WashingMachine size={18} className="mr-2" />
              Washing Machine
            </Link>
            <Link 
              to="/airconditioner" 
              className={`flex items-center py-2 transition-colors ${isActive('/airconditioner') ? 'text-[#00D3F1]' : 'text-gray-700 hover:text-[#00D3F1]'}`}
              onClick={() => setIsOpen(false)}
            >
              <Wind size={18} className="mr-2" />
              Air Conditioner
            </Link>
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