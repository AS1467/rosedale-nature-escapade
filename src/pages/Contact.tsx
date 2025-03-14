
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-resort-green text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-center">Contact Us</h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Get in Touch</h2>
          <p className="text-lg mb-8">
            We're here to help with your inquiries, reservations, and special requests. Reach out to us through any of the contact methods below.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-resort-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-resort-cream flex items-center justify-center mb-6">
                  <MapPin className="text-resort-green" size={28} />
                </div>
                <h3 className="text-xl font-serif mb-4">Our Location</h3>
                <p className="text-gray-700">
                  Rosedale Resort<br />
                  Pallivasal, Munnar<br />
                  Kerala 685612, India
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-resort-cream flex items-center justify-center mb-6">
                  <Phone className="text-resort-green" size={28} />
                </div>
                <h3 className="text-xl font-serif mb-4">Call Us</h3>
                <p className="text-gray-700 mb-2">Reservations</p>
                <a href="tel:+919876543210" className="text-resort-green hover:text-resort-light-green font-medium">
                  +91 98765 43210
                </a>
                <p className="text-gray-700 mt-4 mb-2">Reception</p>
                <a href="tel:+919876543211" className="text-resort-green hover:text-resort-light-green font-medium">
                  +91 98765 43211
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-resort-cream flex items-center justify-center mb-6">
                  <Mail className="text-resort-green" size={28} />
                </div>
                <h3 className="text-xl font-serif mb-4">Email Us</h3>
                <p className="text-gray-700 mb-2">For Bookings</p>
                <a href="mailto:bookings@rosedaleresort.com" className="text-resort-green hover:text-resort-light-green font-medium">
                  bookings@rosedaleresort.com
                </a>
                <p className="text-gray-700 mt-4 mb-2">For Inquiries</p>
                <a href="mailto:info@rosedaleresort.com" className="text-resort-green hover:text-resort-light-green font-medium">
                  info@rosedaleresort.com
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#25D366] text-white rounded-md hover:bg-[#128C7E] transition-colors"
            >
              <MessageCircle className="mr-2" size={20} />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-resort-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">Find Us on the Map</h2>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.3566146175!2d77.05891841391465!3d10.223684592694044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0799794d099dcf%3A0x5f37a5fc7134f0b7!2sPallivasal%2C%20Kerala!5e0!3m2!1sen!2sin!4v1651825200000!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Rosedale Resort Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
