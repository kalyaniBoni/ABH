
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Exports Ltd.",
      location: "Mumbai",
      text: "Aravind Bulk Harvest has been our reliable partner for turmeric exports. Their consistent quality and timely delivery have helped us maintain our international commitments.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Sharma Spice Mills",
      location: "Delhi",
      text: "The quality of corn and millets we receive from Aravind Bulk Harvest is exceptional. Their pricing is competitive and logistics are always on time.",
      rating: 5
    },
    {
      name: "Dr. Venkatesh Rao",
      company: "Rao Food Processing",
      location: "Hyderabad",
      text: "Working with Aravind Bulk Harvest for over 3 years. Their raw cashew quality is unmatched, and the tribal processing methods add authentic value to our products.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses across India for quality and reliability
          </p>
        </div>
        
        <div className="relative">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-amber-600 font-semibold">{testimonials[currentIndex].company}</div>
                  <div className="text-gray-500">{testimonials[currentIndex].location}</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:bg-amber-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:bg-amber-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-amber-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
