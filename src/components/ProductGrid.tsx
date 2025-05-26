
import { Card, CardContent } from "@/components/ui/card";

const ProductGrid = () => {
  const products = [
    {
      name: "Turmeric",
      description: "High-curcumin content turmeric, ideal for culinary and medicinal uses.",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Corn",
      description: "Premium-grade corn suitable for food processing and animal feed.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "from-yellow-300 to-yellow-500"
    },
    {
      name: "Millets",
      description: "Diverse range of millets, rich in nutrients and fiber.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "from-amber-400 to-orange-400"
    },
    {
      name: "Spices",
      description: "Aromatic spices sourced directly from local farms.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "from-red-400 to-red-600"
    },
    {
      name: "Raw Cashew",
      description: "Naturally cultivated raw cashew nuts, processed using traditional techniques by tribal communities in Kurupam.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`}></div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-800">10+ Tons</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
