
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, Calendar } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ProductCatalog = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // In a real implementation, this would trigger a PDF download
    toast({
      title: "Catalog Download",
      description: "Product catalog will be sent to your email within 5 minutes.",
    });
  };

  const seasonalInfo = [
    { product: "Turmeric", season: "November - February", quality: "Peak harvest season" },
    { product: "Corn", season: "March - May", quality: "Fresh crop available" },
    { product: "Millets", season: "October - January", quality: "Premium quality harvest" },
    { product: "Spices", season: "Year-round", quality: "Consistent quality" },
    { product: "Tamarind", season: "February - April", quality: "Fresh harvest season" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Product Information</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed specifications and seasonal availability information
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <FileText className="w-16 h-16 text-amber-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Catalog</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Download our comprehensive product catalog with detailed specifications, 
                pricing guidelines, and quality parameters for all our products.
              </p>
              <Button 
                onClick={handleDownload}
                className="bg-amber-500 hover:bg-amber-600 text-white"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Catalog (PDF)
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Catalog will be sent to your email
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Seasonal Availability</h3>
              </div>
              <div className="space-y-4">
                {seasonalInfo.map((item, index) => (
                  <div key={index} className="border-l-4 border-amber-500 pl-4">
                    <h4 className="font-semibold text-gray-900">{item.product}</h4>
                    <p className="text-sm text-gray-600">{item.season}</p>
                    <p className="text-xs text-green-600">{item.quality}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> While seasonal products are freshest during peak harvest, 
                  we maintain year-round inventory through proper storage and processing.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
