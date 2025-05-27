import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const QuoteModal = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote form submitted:', formData);
    toast({
      title: "Quote Request Submitted!",
      description: "We'll send you a detailed quote within 24 hours.",
    });
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      product: '',
      quantity: '',
      message: ''
    });
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Request a Quote</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="modal-name">Name *</Label>
              <Input
                id="modal-name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="modal-company">Company Name</Label>
              <Input
                id="modal-company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Your company"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="modal-email">Email *</Label>
              <Input
                id="modal-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                placeholder="your@email.com"
              />
            </div>
            <div>
              <Label htmlFor="modal-phone">Phone Number</Label>
              <Input
                id="modal-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+91 8073219743"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="modal-product">Product Interest *</Label>
              <Select value={formData.product} onValueChange={(value) => handleInputChange('product', value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="turmeric">Turmeric</SelectItem>
                  <SelectItem value="corn">Corn</SelectItem>
                  <SelectItem value="millets">Millets</SelectItem>
                  <SelectItem value="spices">Spices</SelectItem>
                  <SelectItem value="tamarind">Tamarind</SelectItem>
                  <SelectItem value="multiple">Multiple Products</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="modal-quantity">Quantity (in tons)</Label>
              <Input
                id="modal-quantity"
                type="number"
                min="10"
                value={formData.quantity}
                onChange={(e) => handleInputChange('quantity', e.target.value)}
                placeholder="Minimum 10 tons"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="modal-message">Message</Label>
            <Textarea
              id="modal-message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="min-h-[100px]"
              placeholder="Tell us about your specific requirements, delivery timeline, and any other details..."
            />
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button 
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="flex-1 bg-amber-500 hover:bg-amber-600 text-white"
            >
              Submit Quote Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
