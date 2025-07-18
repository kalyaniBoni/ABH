
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Spice Industries",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "Aravind Bulk Harvest has been our reliable supplier for over 3 years. Their turmeric quality is exceptional and delivery is always on time. Highly recommended for bulk orders."
    },
    {
      name: "Priya Enterprises",
      company: "Food Processing Unit",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "The quality of millets and corn we receive is consistently excellent. Their understanding of export requirements has helped us expand to international markets."
    },
    {
      name: "Suresh Patel",
      company: "Patel Trading Co.",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "Professional service and competitive pricing. The team at Aravind Bulk Harvest understands our bulk requirements and always delivers quality products."
    },
    {
      name: "Lakshmi Foods",
      company: "Restaurant Chain",
      location: "Hyderabad, Telangana",
      rating: 5,
      text: "Their spices have enhanced our food quality significantly. Direct sourcing from Andhra Pradesh ensures authentic flavors for our restaurant chain."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by retailers, exporters, and industries across India
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Quote className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                    
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
