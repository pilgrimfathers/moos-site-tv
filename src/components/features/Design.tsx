import React from 'react';
import { Maximize, Minimize2, Layers } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Design: React.FC = () => {
  return (
    <section id="design" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="text-[#00D3F1]">Design</span> Excellence
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Seamlessly blend technology with aesthetics through our thoughtfully crafted design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ultra-Thin Bezel Design
            </h3>
            
            <p className="text-gray-600 mb-8">
              Our ultra-thin bezel design maximizes your viewing area while minimizing distractions, 
              providing an immersive experience that puts content front and center.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#00D3F1]/10 flex items-center justify-center text-[#00D3F1] flex-shrink-0">
                  <Maximize size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Expansive Screen-to-Body Ratio</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Enjoy more screen and less frame with our 98% screen-to-body ratio.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#00D3F1]/10 flex items-center justify-center text-[#00D3F1] flex-shrink-0">
                  <Minimize2 size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Sleek Profile</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Only 1.4 inches at its thickest point, our TV complements any modern space.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#00D3F1]/10 flex items-center justify-center text-[#00D3F1] flex-shrink-0">
                  <Layers size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Premium Materials</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Crafted with high-grade aluminum frame and tempered glass for durability and style.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img 
                src="/assets/images/fireOs.jpeg" 
                alt="Quachi Fire TV Design" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md">
                <span className="font-medium text-sm">Ultra-Thin 4.9mm Bezel</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Layers size={32} />}
            title="Premium Build Quality"
            description="Made with high-quality materials and precision engineering for a product that looks and feels premium."
          />
          
          <FeatureCard 
            icon={<Maximize size={32} />}
            title="Multiple Size Options"
            description='Available in 50", 55", 65", and 75" sizes to fit any room in your home.'
          />
          
          <FeatureCard 
            icon={<Minimize2 size={32} />}
            title="Compact Base Design"
            description="The elegant stand takes up minimal space while providing stable support for your TV."
          />
        </div>
      </div>
    </section>
  );
};

export default Design;