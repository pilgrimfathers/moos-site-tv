import React from 'react';
import { Play, Film, Radio, Tv } from 'lucide-react';
import Button from '../Button';

const streamingServices = [
  { name: 'Netflix', logo: 'N' },
  { name: 'Prime Video', logo: 'P' },
  { name: 'Disney+', logo: 'D' },
  { name: 'YouTube', logo: 'Y' },
  { name: 'HBO Max', logo: 'H' },
  { name: 'Hulu', logo: 'H' },
];

const Entertainment: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your <span className="text-[#00D3F1]">Entertainment</span> Hub
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Access all your favorite content in one place with FireOS integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-[#00D3F1]/10 to-[#00D3F1]/5 p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                All Your Favorite Apps
              </h3>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {streamingServices.map((service, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-sm flex items-center justify-center p-4 h-20"
                  >
                    <span className="text-2xl font-bold text-gray-800">{service.logo}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Play size={18} className="text-[#00D3F1]" />
                  <span className="text-gray-700">
                    Access thousands of movies and TV shows
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Film size={18} className="text-[#00D3F1]" />
                  <span className="text-gray-700">
                    4K streaming on supported platforms
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Radio size={18} className="text-[#00D3F1]" />
                  <span className="text-gray-700">
                    Music streaming services included
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Tv size={18} className="text-[#00D3F1]" />
                  <span className="text-gray-700">
                    Live TV channels and sports coverage
                  </span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button>Explore Entertainment Options</Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg" 
                alt="Entertainment Hub" 
                className="w-full rounded-lg shadow-lg"
              />
              
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex gap-3 mb-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#00D3F1] animate-pulse" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  Live Sports Coverage
                </h3>
                <p className="text-white/80 mb-4">
                  Never miss a game with our extensive sports package
                </p>
                
                <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm py-2 px-4 rounded-full">
                  <Play size={16} className="text-[#00D3F1]" />
                  <span className="text-sm text-white">Watch Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entertainment;