
import { Card, CardContent } from "@/components/ui/card";
import { Award, MapPin, Users, Truck } from 'lucide-react';

const EnhancedAboutSection = () => {
  const highlights = [
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Based in the fertile lands of Parvathipuram Manyam, Andhra Pradesh, known for high-quality agricultural produce"
    },
    {
      icon: Users,
      title: "Experienced Leadership",
      description: "Led by Mr. Potnuru Madhusudhan Rao with extensive experience in agricultural trading"
    },
    {
      icon: Truck,
      title: "Reliable Supply Chain",
      description: "Direct sourcing from local farmers ensures freshness and competitive pricing"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "All products meet export standards with proper certifications and quality testing"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Aravind Traders</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for bulk agricultural products from the heart of Andhra Pradesh
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Aravind Traders has been a cornerstone in the agricultural trading sector of Andhra Pradesh, 
              specializing in the bulk supply of premium turmeric, corn, millets, spices, and tamarind. 
              We serve retailers, wholesalers, exporters, and industrial buyers with a commitment to quality 
              and reliability.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded and managed by Mr. Potnuru Madhusudhan Rao, our company leverages decades of 
              experience in understanding market demands and maintaining strong relationships with 
              local farming communities. This ensures we can provide consistent quality and competitive 
              pricing year-round.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our strategic location in Parvathipuram Manyam allows us to source directly from some of 
              the most fertile agricultural lands in India, ensuring that every product meets our 
              stringent quality standards before reaching our customers.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-8 text-white">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold">MR</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Mr. Potnuru Madhusudhan Rao</h3>
                <p className="text-lg opacity-90 mb-4">Founder & Managing Director</p>
                <p className="text-sm opacity-80">Leading Aravind Traders with dedication and expertise in agricultural trading</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutSection;
