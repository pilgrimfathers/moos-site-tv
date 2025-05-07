import React from 'react';
import { WifiIcon, HomeIcon, BarChart2, Smartphone } from 'lucide-react';
import FeatureCard from './FeatureCard';

const SmartFeatures: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Intelligent <span className="text-[#00D3F1]">Smart</span> Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Take control of your entertainment experience with advanced smart capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<WifiIcon size={32} />}
            title="Data Usage Monitoring"
            description="Keep track of your internet consumption with built-in data monitoring tools."
          />
          
          <FeatureCard 
            icon={<HomeIcon size={32} />}
            title="Smart Home Integration"
            description="Control compatible smart home devices directly from your TV interface."
          />
          
          <FeatureCard 
            icon={<BarChart2 size={32} />}
            title="Viewing Analytics"
            description="Get insights into your viewing habits and personalized recommendations."
          />
          
          <FeatureCard 
            icon={<Smartphone size={32} />}
            title="Mobile Companion"
            description="Use your smartphone as a remote, keyboard, and content casting device."
          />
        </div>

        <div className="mt-16 md:mt-24">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  User-Friendly Interface
                </h3>
                
                <p className="text-gray-600 mb-8">
                  Navigate effortlessly through content with our intuitive, responsive interface 
                  designed for seamless interaction and quick access to your favorite features.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#00D3F1]/10 flex items-center justify-center text-[#00D3F1]">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Voice Control</h4>
                      <p className="text-sm text-gray-600">
                        Search for content, adjust settings, and control your TV using simple voice commands.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#00D3F1]/10 flex items-center justify-center text-[#00D3F1]">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Customizable Home Screen</h4>
                      <p className="text-sm text-gray-600">
                        Arrange your apps, channels, and content recommendations to suit your preferences.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#00D3F1]/10 flex items-center justify-center text-[#00D3F1]">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Universal Search</h4>
                      <p className="text-sm text-gray-600">
                        Find content across all your streaming services with a single search.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/assets/images/conferance-call.jpeg" 
                  alt="Smart Features" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-[#00D3F1]" />
                      <span className="text-white text-sm font-medium">Voice Assistant Active</span>
                    </div>
                    <p className="text-white text-opacity-80 text-sm">
                      "Play the latest episode of my favorite show"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFeatures;