import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 -z-10" />
      
      <div 
        className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#00D3F1]/20 blur-3xl -z-10"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-6">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Experience Premium Entertainment with <span className="text-[#00D3F1]">Quachi Fire TV</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Elevate your viewing experience with stunning 4K resolution, 
              lightning-fast processing, and seamless FireOS integration.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button>
                Shop Now
              </Button>
              
              <Button variant="outline">
                Learn More <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-gray-600">4K Ultra HD</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-gray-600">FireOS Integration</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-gray-600">Smart Features</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <video 
                src="/src/assets/videos/quachi-tv-video.mp4" 
                title="Quachi Fire TV" 
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            <div className="absolute -right-4 -bottom-4 bg-white p-4 rounded-lg shadow-lg flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <span className="font-medium text-sm">Live TV Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;