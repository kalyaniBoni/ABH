import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProductModal from "./ProductModal";

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: "Turmeric",
      description:
        "High-curcumin content turmeric, ideal for culinary and medicinal uses.",
      image: "/product-images/292d4327-0993-43c7-9e35-0df33e9707df.png",
      specifications:
        "Curcumin content: 3-5%, Moisture: <10%, Origin: Andhra Pradesh",
      certifications: ["Organic Certified", "Export Quality", "FSSAI Approved"],
    },
    {
      name: "Corn",
      description:
        "Premium-grade corn suitable for food processing and animal feed.",
      image: "/product-images/8a2778a0-7c8a-4ece-bf82-5ecc6171b0ee.png",
      specifications: "Moisture: <14%, Protein: 8-10%, Origin: Local farms",
      certifications: ["Quality Tested", "Non-GMO", "FSSAI Approved"],
    },
    {
      name: "Millets",
      description: "Diverse range of millets, rich in nutrients and fiber.",
      image: "/product-images/03c3048a-9e09-4cb2-ab37-c4020cd91397.png",
      specifications:
        "Varieties: Pearl, Finger, Foxtail millets, Protein: 11-15%",
      certifications: ["Organic", "Nutritional Grade", "Export Quality"],
    },
    {
      name: "Spices",
      description: "Aromatic spices sourced directly from local farms.",
      image: "/product-images/d90af92f-800b-4048-82d4-fe034e722cc7.png",
      specifications: "Varieties: Chili, Coriander, Cumin, Moisture: <12%",
      certifications: [
        "Spice Board Certified",
        "Export Grade",
        "FSSAI Approved",
      ],
    },
    {
      name: "Tamarind",
      description:
        "Premium quality tamarind with rich tangy flavor, perfect for culinary applications.",
      image: "/product-images/11866c0b-b5fe-46f1-89e9-6a7747f93151.png",
      specifications: "Moisture: <14%, Acidity: 12-18%, Origin: Andhra Pradesh",
      certifications: ["Export Quality", "FSSAI Approved", "Organic Certified"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Products
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sourced directly from the fertile lands of Andhra Pradesh, our
            products meet the highest quality standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-800">
                    10+ Tons
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
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
