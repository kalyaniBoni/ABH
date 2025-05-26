
const FeatureHighlights = () => {
  const features = [
    {
      title: "Bulk Order Fulfillment",
      description: "Consistent 10-ton minimum order fulfillment with reliable supply chain management",
      icon: "📦"
    },
    {
      title: "Strategic Location", 
      description: "Proximity to rich agricultural zones ensures freshness and competitive pricing",
      icon: "📍"
    },
    {
      title: "Quality Assurance",
      description: "Products meet stringent quality standards and certifications for export markets",
      icon: "✅"
    },
    {
      title: "Reliable Logistics",
      description: "Timely delivery with robust supply chain management and tracking systems",
      icon: "🚚"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Aravind Traders</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for bulk agricultural commodities with unmatched quality and service
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
