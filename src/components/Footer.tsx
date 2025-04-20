import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Tv2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Tv2 size={32} className="text-[#00D3F1] mr-2" strokeWidth={2.5} />
              <span className="text-2xl font-bold">
                <span className="text-[#00D3F1]">Quachi</span> Fire TV
              </span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Experience premium entertainment with our advanced FireOS powered smart TV.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#00D3F1] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#00D3F1] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#00D3F1] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#00D3F1] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#00D3F1]" />
            </h3>
            
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#00D3F1] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-[#00D3F1] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#design" className="text-gray-400 hover:text-[#00D3F1] transition-colors">
                  Design
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-[#00D3F1] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D3F1] transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D3F1] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Products</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#00D3F1]" />
            </h3>
            
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D3F1] transition-colors">
                  50" Quachi Fire TV
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D3F1] transition-colors">
                  55" Quachi Fire TV
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D3F1] transition-colors">
                  65" Quachi Fire TV
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D3F1] transition-colors">
                  75" Quachi Fire TV
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D3F1] transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D3F1] transition-colors">
                  Wall Mounts
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#00D3F1]" />
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#00D3F1] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">Customer Service</p>
                  <a href="tel:+919947389209" className="text-white hover:text-[#00D3F1] transition-colors">
                    +91 994 738 9209
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#00D3F1] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">Support</p>
                  <a href="mailto:support@quachiworld.com" className="text-white hover:text-[#00D3F1] transition-colors">
                    support@quachiworld.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#00D3F1] flex-shrink-0 mt-1" />
                <address className="text-gray-400 not-italic">
                First Floor, 5/940-B, K K Tower, Mathra Road, Pantheeramkavu Kozhikode, Kerala, 673014
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Quachi Technologies. All rights reserved.
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-[#00D3F1] transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-[#00D3F1] transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-[#00D3F1] transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;