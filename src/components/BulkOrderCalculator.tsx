
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Package } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const BulkOrderCalculator = () => {
  const { toast } = useToast();
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [result, setResult] = useState(null);

  const products = [
    { name: 'Turmeric', unit: 'tons', minOrder: 10 },
    { name: 'Corn', unit: 'tons', minOrder: 10 },
    { name: 'Millets', unit: 'tons', minOrder: 10 },
    { name: 'Spices', unit: 'tons', minOrder: 10 },
    { name: 'Tamarind', unit: 'tons', minOrder: 10 }
  ];

  const handleCalculate = () => {
    if (!product || !quantity) {
      toast({
        title: "Missing Information",
        description: "Please select a product and enter quantity.",
        variant: "destructive"
      });
      return;
    }

    const qty = parseFloat(quantity);
    if (qty < 10) {
      toast({
        title: "Minimum Order Not Met",
        description: "Minimum order quantity is 10 tons for all products.",
        variant: "destructive"
      });
      return;
    }

    const weightInKg = qty * 1000;
    const estimatedTrucks = Math.ceil(qty / 25); // Assuming 25 tons per truck
    
    setResult({
      product,
      quantity: qty,
      weightInKg,
      estimatedTrucks,
      estimatedDelivery: "7-14 business days"
    });

    toast({
      title: "Calculation Complete",
      description: "Order details calculated successfully!",
    });
  };

  const handleGetQuote = () => {
    if (result) {
      toast({
        title: "Quote Request Submitted",
        description: "We'll send you a detailed quote within 24 hours.",
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Bulk Order Calculator</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your bulk order requirements and get instant estimates
          </p>
        </div>
        
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <Calculator className="w-8 h-8 text-amber-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Order Calculator</h3>
                </div>
                
                <div>
                  <Label htmlFor="product">Select Product</Label>
                  <Select value={product} onValueChange={setProduct}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a product" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((prod) => (
                        <SelectItem key={prod.name} value={prod.name}>
                          {prod.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="quantity">Quantity (in tons)</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="10"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Minimum 10 tons"
                  />
                  <p className="text-sm text-gray-500 mt-1">Minimum order: 10 tons</p>
                </div>
                
                <Button 
                  onClick={handleCalculate}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                  size="lg"
                >
                  Calculate Order
                </Button>
              </div>
              
              <div className="space-y-6">
                {result ? (
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <Package className="w-6 h-6 text-green-600 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-900">Order Summary</h4>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Product:</span>
                        <span className="font-medium">{result.product}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Quantity:</span>
                        <span className="font-medium">{result.quantity} tons</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Weight:</span>
                        <span className="font-medium">{result.weightInKg.toLocaleString()} kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Estimated Trucks:</span>
                        <span className="font-medium">{result.estimatedTrucks}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery Time:</span>
                        <span className="font-medium">{result.estimatedDelivery}</span>
                      </div>
                    </div>
                    <Button 
                      onClick={handleGetQuote}
                      className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
                    >
                      Get Detailed Quote
                    </Button>
                  </div>
                ) : (
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Select a product and enter quantity to see order summary
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BulkOrderCalculator;
