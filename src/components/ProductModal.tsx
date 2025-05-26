
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className={`h-32 bg-gradient-to-br ${product.color} flex items-center justify-center rounded-lg`}>
            <h3 className="text-4xl font-bold text-white">{product.name}</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Specifications</h4>
              <p className="text-gray-600">{product.specifications}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert, index) => (
                  <span 
                    key={index}
                    className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            
            <Button 
              onClick={onClose}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white"
            >
              Request Quote for {product.name}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
