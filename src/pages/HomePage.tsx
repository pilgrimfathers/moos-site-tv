import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/hero';
import { BadgeCheck } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      {/* tv hero section */}
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

      {/* ac hero section */}
      <div className="bg-[#f0fafd] py-20 px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Introducing <span className="text-[#53dafc]">VITAMIN C</span></h2>
            <h3 className="text-3xl font-bold mt-2">Releasing <span className="text-[#53dafc]">AC</span></h3>
            <button className="mt-8 bg-[#53dafc] hover:bg-[#00b8e6] text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Explore More →
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Side Features */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex flex-row-reverse lg:flex-row items-start bg-white/70 p-5 rounded-xl shadow-sm">
                <div className="bg-[#f0fafd] p-3 rounded-full ml-4 lg:ml-0 lg:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#53dafc]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="text-right lg:text-left">
                  <h4 className="text-xl font-semibold text-[#53dafc]">Cool in a Minute</h4>
                  <p className="text-gray-700">Rapid cooling drops the room temperature to 18°C within 60 seconds.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex flex-row-reverse lg:flex-row items-start bg-white/70 p-5 rounded-xl shadow-sm">
                <div className="bg-[#f0fafd] p-3 rounded-full ml-4 lg:ml-0 lg:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#53dafc]"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>
                </div>
                <div className="text-right lg:text-left">
                  <h4 className="text-xl font-semibold text-[#53dafc]">Optimum Temperature</h4>
                  <p className="text-gray-700">Maintains a default 24°C for ideal comfort and energy efficiency.</p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex flex-row-reverse lg:flex-row items-start bg-white/70 p-5 rounded-xl shadow-sm">
                <div className="bg-[#f0fafd] p-3 rounded-full ml-4 lg:ml-0 lg:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#53dafc]"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                </div>
                <div className="text-right lg:text-left">
                  <h4 className="text-xl font-semibold text-[#53dafc]">Pin-Drop Silence</h4>
                  <p className="text-gray-700">Noise control ensures a peaceful and quiet environment.</p>
                </div>
              </div>
            </div>
            
            {/* Center - AC Image */}
            <div className="flex justify-center items-center">
              <img 
                src="/assets/images/hero-ac.png" 
                alt="Air Conditioner" 
                className="max-w-full h-auto object-contain"
              />
            </div>
            
            {/* Right Side Features */}
            <div className="space-y-6">
              {/* Feature 4 */}
              <div className="flex items-start bg-white/70 p-5 rounded-xl shadow-sm">
                <div className="bg-[#f0fafd] p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#53dafc]"><path d="M2 12h6"/><path d="M22 12h-6"/><path d="M12 2v6"/><path d="M12 22v-6"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m4.93 19.07 4.24-4.24"/></svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#53dafc]">Auto Restart</h4>
                  <p className="text-gray-700">Automatically resumes operation after a power outage.</p>
                </div>
              </div>
              
              {/* Feature 5 */}
              <div className="flex items-start bg-white/70 p-5 rounded-xl shadow-sm">
                <div className="bg-[#f0fafd] p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#53dafc]"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2"/><path d="M9 18v-6"/><path d="M15 9v6"/><path d="M15 15h-6"/><path d="M9 9h6"/></svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#53dafc]">Hidden Display</h4>
                  <p className="text-gray-700">Smart display stays hidden to avoid light disturbance at night.</p>
                </div>
              </div>
              
              {/* Feature 6 */}
              <div className="flex items-start bg-white/70 p-5 rounded-xl shadow-sm">
                <div className="bg-[#f0fafd] p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#53dafc]"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M15 9.354a4 4 0 1 0 0 5.292"/></svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#53dafc]">Sleep Mode</h4>
                  <p className="text-gray-700">Adjusts temperature at night for better sleep and energy savings.</p>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>

      {/* washing machine hero section */}
      <div className="bg-white py-20 px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Washing Machine Image */}
            <div className="lg:w-1/2 relative flex justify-center items-center">
                <img 
                  src="/assets/images/hero-washing.png" 
                  alt="Washing Machine" 
                  className="max-w-[85%] h-auto object-contain"
                />
            </div>
            
            {/* Right - Text and Features */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-2">The Art of</h2>
              <h3 className="text-5xl font-bold text-[#53dafc] mb-6">Intelligent Washing</h3>
              
              <p className="text-lg text-gray-800 mb-8">
                Engineered for elegance and performance, our premium washing 
                machine blends cutting-edge technology with sleek design for a 
                superior laundry experience.
              </p>
              
              <button className="mb-10 bg-[#53dafc] hover:bg-[#00b8e6] text-white font-semibold px-8 py-3 rounded-full transition-colors">
                Explore More →
              </button>
              
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#b3ebf2] p-3 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#53dafc]"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Rust-Free Body</h4>
                    <p className="text-gray-700">Made with high-grade plastic for enhanced durability and corrosion resistance.</p>
                  </div>
                </div>
                
                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#b3ebf2] p-3 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#53dafc]"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Soak Function</h4>
                    <p className="text-gray-700">Soaks clothes thoroughly for deep cleaning with better detergent action.</p>
                  </div>
                </div>
                
                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#b3ebf2] p-3 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#53dafc]"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Filter</h4>
                    <p className="text-gray-700">Advanced filter traps detergent residue and lint for cleaner clothes and easy maintenance.</p>
                  </div>
                </div>
                
                {/* Feature 4 */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#b3ebf2] p-3 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#53dafc]"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Buzzer</h4>
                    <p className="text-gray-700">A buzzer sounds to notify you when the washing cycle ends, so you never miss it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage; 