
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ProductModal from './ProductModal';

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: "Turmeric",
      description: "High-curcumin content turmeric, ideal for culinary and medicinal uses.",
      color: "from-yellow-400 to-orange-500",
      specifications: "Curcumin content: 3-5%, Moisture: <10%, Origin: Andhra Pradesh",
      certifications: ["Organic Certified", "Export Quality", "FSSAI Approved"]
    },
    {
      name: "Corn",
      description: "Premium-grade corn suitable for food processing and animal feed.",
      color: "from-yellow-300 to-yellow-500",
      specifications: "Moisture: <14%, Protein: 8-10%, Origin: Local farms",
      certifications: ["Quality Tested", "Non-GMO", "FSSAI Approved"]
    },
    {
      name: "Millets",
      description: "Diverse range of millets, rich in nutrients and fiber.",
      color: "from-amber-400 to-orange-400",
      specifications: "Varieties: Pearl, Finger, Foxtail millets, Protein: 11-15%",
      certifications: ["Organic", "Nutritional Grade", "Export Quality"]
    },
    {
      name: "Spices",
      description: "Aromatic spices sourced directly from local farms.",
      color: "from-red-400 to-red-600",
      specifications: "Varieties: Chili, Coriander, Cumin, Moisture: <12%",
      certifications: ["Spice Board Certified", "Export Grade", "FSSAI Approved"]
    },
    {
      name: "Raw Cashew",
      description: "Naturally cultivated raw cashew nuts, processed using traditional techniques by tribal communities in Kurupam.",
      color: "from-green-400 to-emerald-500",
      specifications: "Grade: W320, W240, Moisture: <5%, Processing: Traditional methods",
      certifications: ["Fair Trade", "Organic", "Export Quality"]
    },
    {
      name: "Tamarind",
      description: "Premium quality tamarind with rich tangy flavor, perfect for culinary applications.",
      color: "from-amber-600 to-brown-500",
      specifications: "Moisture: <14%, Acidity: 12-18%, Origin: Andhra Pradesh",
      certifications: ["Export Quality", "FSSAI Approved", "Organic Certified"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Premium Products</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sourced directly from the fertile lands of Andhra Pradesh, our products meet the highest quality standards
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className={`h-32 bg-gradient-to-br ${product.color} flex items-center justify-center relative`}>
                <h3 className="text-3xl font-bold text-white text-center">{product.name}</h3>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-800">10+ Tons</span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};

export default ProductGrid;
