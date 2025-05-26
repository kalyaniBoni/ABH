
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, MessageCircle } from 'lucide-react';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Chat message submitted:', { name, message });
    // In a real implementation, this would send the message to a chat service
    setMessage('');
    setName('');
    setIsOpen(false);
  };

  const currentHour = new Date().getHours();
  const isBusinessHours = currentHour >= 9 && currentHour < 18;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-80 shadow-2xl">
          <CardHeader className="bg-amber-500 text-white">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">
                {isBusinessHours ? 'Chat with us!' : 'Leave a message'}
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-amber-600"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            {isBusinessHours ? (
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Hello! We're online and ready to help you with your bulk order requirements.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Textarea
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="min-h-[80px]"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-amber-500 hover:bg-amber-600"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  We're currently offline. Leave us a message and we'll get back to you!
                </p>
                <p className="text-xs text-gray-500">
                  Business Hours: Mon-Fri 9AM-6PM, Sat 9AM-2PM
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Textarea
                    placeholder="Leave your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="min-h-[80px]"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-amber-500 hover:bg-amber-600"
                  >
                    Leave Message
                  </Button>
                </form>
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-14 h-14"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default LiveChatWidget;
