import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Michael Thompson",
    role: "Tech Enthusiast",
    content: "The picture quality on the Quachi Fire TV is outstanding. I've owned several smart TVs before, but this one blows them all away with its crisp colors and smooth performance.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Movie Lover",
    content: "I love how easy it is to find and watch my favorite shows. The Fire OS integration is seamless, and the interface is so intuitive. Definitely the best TV purchase I've made.",
    rating: 4.5
  },
  {
    name: "David Chen",
    role: "Smart Home Owner",
    content: "Being able to control my smart home devices directly from my TV is incredibly convenient. The voice control works flawlessly and the response time is impressive.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Interior Designer",
    content: "Not only does this TV perform beautifully, but it also looks stunning in my client's living room. The thin bezels and sleek design complement any modern space.",
    rating: 4.5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={18} className="text-yellow-500 fill-yellow-500" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" size={18} className="text-yellow-500 fill-yellow-500" />);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our <span className="text-[#00D3F1]">Customers</span> Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from satisfied Quachi Fire TV owners about their experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 shadow-md">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full">
                      <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#00D3F1] flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-[#00D3F1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00D3F1] z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-[#00D3F1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00D3F1] z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === activeIndex ? 'bg-[#00D3F1]' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;