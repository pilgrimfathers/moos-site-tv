import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/hero';
import { BadgeCheck } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="bg-white min-h-screen relative overflow-hidden">
        {/* Optional: Decorative Circles */}
        <div className="hidden lg:block absolute w-[500px] h-[500px] rounded-full border-2 border-[#c5edf5] right-[-100px] top-[10%] z-0"></div>
        {/* ...more circles if you want... */}

        <div className="container mx-auto px-8 sm:pt-5 md:pt-10 lg:pt-36 pb-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left: Text */}
            <div className="lg:w-2/3 lg:mb-0 z-20">
              <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6">
                Experience Premium Entertainment<br />
                with <span className="text-[#53dafc]">Quachi Fire TV</span>
              </h1>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center text-lg text-gray-800"><BadgeCheck className="w-7 h-7 text-[#53dafc] mr-3" />4K Ultra HD</li>
                <li className="flex items-center text-lg text-gray-800"><BadgeCheck className="w-7 h-7 text-[#53dafc] mr-3" />FireOS Integration</li>
                <li className="flex items-center text-lg text-gray-800"><BadgeCheck className="w-7 h-7 text-[#53dafc] mr-3" />Smart Features</li>
                <li className="flex items-center text-lg text-gray-800"><BadgeCheck className="w-7 h-7 text-[#53dafc] mr-3" />Instantaneous Response</li>
                <li className="flex items-center text-lg text-gray-800"><BadgeCheck className="w-7 h-7 text-[#53dafc] mr-3" />Dynamic Color Enhancement</li>
              </ul>
              <a href="#" className="inline-block bg-[#53dafc] hover:bg-[#00b8e6] text-white font-semibold px-8 py-3 rounded-full transition-colors">Explore More →</a>
            </div>
            {/* Right: Image */}
            <div className="lg:w-2/3 w-full mt-8 lg:mt-0 relative">
              <img 
                src="/assets/images/hero-tv.png"
                alt="TV"
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage; 