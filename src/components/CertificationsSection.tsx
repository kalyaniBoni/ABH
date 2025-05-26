
const CertificationsSection = () => {
  const certifications = [
    {
      name: "FSSAI",
      description: "Food Safety and Standards Authority of India certification ensuring food safety compliance",
      logo: "🏛️"
    },
    {
      name: "Organic Certified",
      description: "Certified organic products meeting international organic standards",
      logo: "🌱"
    },
    {
      name: "Export Quality",
      description: "Products meeting international export quality standards and regulations",
      logo: "🌍"
    },
    {
      name: "ISO Compliant",
      description: "Quality management systems compliant with international ISO standards",
      logo: "⭐"
    },
    {
      name: "Spice Board Certified",
      description: "Spice Board of India certification for quality spice products",
      logo: "🌶️"
    },
    {
      name: "GSTIN Registered",
      description: "GST registration ensuring compliance with Indian tax regulations",
      logo: "📋"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Certifications & Quality Assurance</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality is backed by industry-recognized certifications and standards
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{cert.logo}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.name}</h3>
              <p className="text-gray-600 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-6 shadow-lg inline-block">
            <h4 className="text-lg font-bold text-gray-900 mb-2">GSTIN: 37BFDPP9463D1Z6</h4>
            <p className="text-gray-600">Registered business ensuring tax compliance and transparency</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
