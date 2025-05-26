
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the minimum order quantity?",
      answer: "10 tons (10,000 kgs) for all products. This ensures cost-effective logistics and competitive pricing for our clients."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we cater to exporters and can handle international logistics. We work with reliable freight forwarders to ensure timely and safe delivery worldwide."
    },
    {
      question: "What are the payment terms?",
      answer: "Payment terms are negotiable based on order volume and client profile. We offer flexible payment options including advance payment, LC, and credit terms for established clients."
    },
    {
      question: "How do you ensure product quality?",
      answer: "We adhere to strict quality control measures and hold relevant certifications including FSSAI, Organic, and Export Quality certifications. All products undergo rigorous testing before dispatch."
    },
    {
      question: "What is your delivery timeline?",
      answer: "Typically 7-15 days from order confirmation, depending on the product and destination. We provide tracking information for all shipments."
    },
    {
      question: "Do you provide samples?",
      answer: "Yes, we provide samples for quality evaluation. Sample costs are adjustable against bulk orders."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
