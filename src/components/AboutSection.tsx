
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Aravind Traders</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Aravind Traders is a premier wholesaler based in Parvathipuram Manyam, Andhra Pradesh, 
              specializing in bulk supply of turmeric, corn, millets, spices, and raw cashew. We cater 
              to retailers, wholesalers, exporters, and industrial buyers, ensuring a minimum order 
              quantity of 10 tons.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded and managed by Mr. Potnuru Madhusudhan Rao, Aravind Traders has established 
              a reputation for quality and reliability in the agricultural trading sector. His 
              extensive experience and commitment to excellence drive our operations forward.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Situated in the agriculturally rich region of Parvathipuram Manyam, we leverage local 
              sourcing to provide fresh and high-quality products, ensuring timely delivery and 
              competitive pricing.
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
                <p className="text-sm opacity-80">Leading Aravind Traders with dedication and expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
