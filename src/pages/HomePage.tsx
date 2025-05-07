import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#e0f7fa] min-h-screen relative overflow-hidden">
        {/* Circular elements - only visible on larger screens */}
        <div className="hidden lg:block absolute w-[500px] h-[500px] rounded-full border-2 border-[#c5edf5] right-[-100px] top-[10%] z-0"></div>
        <div className="hidden lg:block absolute w-[400px] h-[400px] rounded-full border-2 border-[#c5edf5] right-[-50px] top-[20%] z-0"></div>
        <div className="hidden lg:block absolute w-[300px] h-[300px] rounded-full border-2 border-[#c5edf5] right-0 top-[30%] z-0"></div>
        
        <div className="container mx-auto px-8 sm:pt-5 md:pt-10 lg:pt-36 pb-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 lg:mb-0 z-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.2] sm:mb-4 md:mb-6 lg:mb-8">
                For The Home You Love,<br />
                The Appliances <br /> You Trust.
              </h1>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/products" className="bg-[#00d1ff] hover:bg-[#00b8e6] text-white font-semibold px-6 py-3 rounded-full inline-flex items-center transition-colors">
                  Explore Products Now →
                </Link>
                <Link to="/about" className="bg-transparent border-2 border-[#00d1ff] text-[#00d1ff] hover:bg-[#00d1ff] hover:text-white font-semibold px-6 py-3 rounded-full inline-flex items-center transition-colors">
                  Learn More →
                </Link>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="text-[#00d1ff]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.62c0-1.17.68-2.25 1.76-2.73 1.17-.51 2.61-.9 4.24-.9zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1h12v1zm-7.76-9.64c-1.79.66-3.24 1.94-3.24 3.14 0 1.71 3.1 3 7 3s7-1.29 7-3c0-1.2-1.45-2.48-3.24-3.14"/>
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
                      </svg>
                    </div>
                    <div className="ml-2">
                      <p className="text-xl font-bold">2000+</p>
                      <p className="text-sm text-gray-600">Happy Customers</p>
                    </div>
                  </div>
                </div>
                <div className="h-8 border-l border-gray-300"></div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <p className="text-xl font-bold">4.5/5</p>
                    <div className="flex text-yellow-400 ml-2">
                      ★★★★<span className="text-yellow-400">★</span>
                    </div>
                    <p className="ml-2 text-sm text-gray-600">Rating</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile image - only visible on small screens */}
            <div className="lg:hidden w-full mt-8">
              <img 
                src="/assets/images/home-hero-img.webp" 
                alt="Home appliances with gift ribbons" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Desktop image - only visible on large screens */}
        <div className="hidden lg:flex absolute top-0 right-0 w-3/5 h-full z-0">
          <img 
            src="/assets/images/home-hero-img.webp" 
            alt="Home appliances with gift ribbons" 
            className="object-contain h-5/6 w-full max-w-5xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage; 