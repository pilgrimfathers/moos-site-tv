import React from 'react';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import Button from './Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#00D3F1]/5 relative overflow-hidden">
      <div 
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#00D3F1]/20 blur-3xl"
        aria-hidden="true"
      />
      
      <div 
        className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-[#00D3F1]/20 blur-3xl"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Upgrade Your Entertainment Experience?
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Get the Quachi Fire TV today and transform how you enjoy movies, shows, and games with stunning 4K quality.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#00D3F1] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium text-gray-900">30-Day Money Back Guarantee</span>
                    <p className="text-sm text-gray-600">
                      Try it risk-free for 30 days. Not satisfied? Return for a full refund.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#00D3F1] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium text-gray-900">Free Shipping & Installation</span>
                    <p className="text-sm text-gray-600">
                      We'll deliver and set up your new TV at no additional cost.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#00D3F1] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium text-gray-900">3-Year Warranty</span>
                    <p className="text-sm text-gray-600">
                      Your purchase is protected by our comprehensive warranty coverage.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button>
                  <ShoppingCart size={18} className="mr-2" />
                  Buy Now
                </Button>
                
                <Button variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5996237/pexels-photo-5996237.jpeg" 
                alt="Quachi Fire TV in living room" 
                className="w-full h-full object-cover"
                style={{ minHeight: '400px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex flex-col justify-end p-8 md:p-12">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wider font-medium">Limited Time Offer</span>
                    <h3 className="text-xl md:text-2xl font-bold mt-1">Save 15% on All Models</h3>
                    <p className="text-white/80 text-sm mt-2">
                      Use code <span className="font-bold">QUACHI15</span> at checkout
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

export default CTASection;