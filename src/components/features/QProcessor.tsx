import React from 'react';
import { Cpu, Zap, BarChart } from 'lucide-react';
import FeatureCard from './FeatureCard';

const QProcessor: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Powered by the <span className="text-[#00D3F1]">Q Processor</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Experience lightning-fast performance and stunning picture quality with our 
            advanced Q Processor technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Cpu size={32} />}
            title="Quad-Core Processing"
            description="Four powerful cores provide seamless multitasking and responsive navigation through the interface."
          />
          
          <FeatureCard 
            icon={<Zap size={32} />}
            title="Instantaneous Response"
            description="Enjoy lag-free browsing and app switching with our advanced processor architecture."
          />
          
          <FeatureCard 
            icon={<BarChart size={32} />}
            title="Optimized Performance"
            description="Intelligent resource allocation ensures peak performance even with multiple apps running simultaneously."
          />
        </div>

        <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/6976103/pexels-photo-6976103.jpeg" 
              alt="Q Processor Technology" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Experience the Difference
            </h3>
            
            <div className="mt-6 space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00D3F1]/10 flex items-center justify-center">
                  <span className="font-bold text-[#00D3F1]">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">4K UHD Resolution</h4>
                  <p className="mt-1 text-gray-600">
                    Crisp, clear images with incredible detail and depth.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00D3F1]/10 flex items-center justify-center">
                  <span className="font-bold text-[#00D3F1]">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Dynamic Color Enhancement</h4>
                  <p className="mt-1 text-gray-600">
                    Advanced color processing for vibrant, lifelike images.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00D3F1]/10 flex items-center justify-center">
                  <span className="font-bold text-[#00D3F1]">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Motion Clarity</h4>
                  <p className="mt-1 text-gray-600">
                    Smooth motion handling for sports and action scenes without blur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QProcessor;