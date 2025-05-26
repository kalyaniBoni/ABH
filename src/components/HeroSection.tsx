
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      ></div>
      
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Bulk Spices & Grains
          <span className="block text-amber-300">Direct from Andhra Pradesh</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Supplying turmeric, corn, millets, spices, and raw cashew in 10-ton minimum orders 
          to retailers, exporters, and industries.
        </p>
        
        <Button 
          onClick={scrollToContact}
          size="lg" 
          className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Request a Quote
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
