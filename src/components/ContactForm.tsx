import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to place your bulk order? Contact us today for competitive
            pricing and reliable delivery
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <div className="bg-gray-800 rounded-lg p-6 space-y-6">
              <h3 className="text-xl font-bold mb-4 text-amber-500">
                Contact Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="text-white font-semibold text-lg">
                      +91 8073219743
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-semibold break-all">
                      aravindtraders9@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address & Business Info */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-amber-500">
                Business Address
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Location</p>
                    <p className="text-white font-semibold">
                      Kurupam, Parvathipuram Manyam
                      <br />
                      Andhra Pradesh, India - 535524
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🏛️</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">GSTIN</p>
                    <p className="text-white font-semibold">37BFDPP9463D1Z6</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours & MOQ */}
            <div className="md:col-span-2 lg:col-span-1 space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-4 text-amber-500">
                  Business Hours
                </h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-white font-semibold">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-white font-semibold">
                      9:00 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-white font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500 rounded-lg p-6 text-gray-900">
                <h4 className="text-lg font-bold mb-2">
                  Minimum Order Quantity
                </h4>
                <p className="text-xl font-bold">10 Tons (10,000 KG)</p>
                <p className="text-sm opacity-80">
                  For all products across all categories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
