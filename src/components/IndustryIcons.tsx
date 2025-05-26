
const IndustryIcons = () => {
  const industries = [
    {
      name: "Retailers",
      description: "Supplying quality products for retail distribution",
      icon: "🏪"
    },
    {
      name: "Wholesalers",
      description: "Bulk quantities for wholesale distribution networks",
      icon: "🏭"
    },
    {
      name: "Exporters",
      description: "International quality standards for global markets",
      icon: "🚢"
    },
    {
      name: "Cold Storages",
      description: "Long-term storage solutions with quality preservation",
      icon: "❄️"
    },
    {
      name: "Food Processing",
      description: "Raw materials for food processing industries",
      icon: "⚙️"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by diverse industries across India and beyond
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-4xl group-hover:shadow-lg transition-shadow duration-300">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryIcons;
