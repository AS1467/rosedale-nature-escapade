
import { Plane, Train, Bus, Car } from 'lucide-react';

const ReachUs = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-resort-green text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-center">How to Reach Us</h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Find Your Way to Paradise</h2>
          <p className="text-lg mb-8">
            Rosedale Resort is located in Pallivasal, Munnar, Kerala. The serene location offers a perfect escape into nature while being accessible via multiple transportation options.
          </p>
        </div>
      </section>

      {/* Transportation Options */}
      <section className="py-16 bg-resort-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Air Travel */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-resort-cream flex items-center justify-center mr-4">
                  <Plane className="text-resort-green" size={24} />
                </div>
                <h3 className="text-xl font-serif">By Air</h3>
              </div>
              <div className="space-y-4">
                <p><strong>Nearest Airport:</strong> Cochin International Airport (COK)</p>
                <p><strong>Distance:</strong> 110 km (approximately 4 hours by car)</p>
                <p>
                  From the airport, you can hire a taxi or pre-arrange a pickup with the resort for a comfortable journey through the scenic Western Ghats.
                </p>
                <p>
                  <strong>Alternative:</strong> Madurai Airport (IXM) is about 140 km away and is an alternative option.
                </p>
              </div>
            </div>

            {/* Train Travel */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-resort-cream flex items-center justify-center mr-4">
                  <Train className="text-resort-green" size={24} />
                </div>
                <h3 className="text-xl font-serif">By Train</h3>
              </div>
              <div className="space-y-4">
                <p><strong>Nearest Railway Station:</strong> Aluva Railway Station</p>
                <p><strong>Distance:</strong> 90 km (approximately 3.5 hours by car)</p>
                <p>
                  Aluva is well-connected to major cities in India. From the station, taxis and buses are available to Munnar.
                </p>
                <p>
                  <strong>Alternative:</strong> Ernakulam Junction is about 100 km away and offers better connectivity.
                </p>
              </div>
            </div>

            {/* Bus Travel */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-resort-cream flex items-center justify-center mr-4">
                  <Bus className="text-resort-green" size={24} />
                </div>
                <h3 className="text-xl font-serif">By Bus</h3>
              </div>
              <div className="space-y-4">
                <p><strong>Nearest Bus Station:</strong> Munnar Bus Station</p>
                <p><strong>Distance:</strong> 5 km (approximately 15 minutes by car)</p>
                <p>
                  Regular buses operate from Kochi (Ernakulam) and other major cities to Munnar. The journey offers beautiful views of tea gardens and the Western Ghats.
                </p>
                <p>
                  From Munnar bus station, you can take a local taxi to reach Rosedale Resort.
                </p>
              </div>
            </div>

            {/* Car Travel */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-resort-cream flex items-center justify-center mr-4">
                  <Car className="text-resort-green" size={24} />
                </div>
                <h3 className="text-xl font-serif">By Car</h3>
              </div>
              <div className="space-y-4">
                <p><strong>From Kochi:</strong> 130 km (approximately 4.5 hours)</p>
                <p>
                  The drive from Kochi to Munnar is one of the most scenic routes, passing through spice gardens, waterfalls, and lush green forests.
                </p>
                <p>
                  <strong>Route:</strong> Kochi → Muvattupuzha → Kothamangalam → Adimali → Munnar → Pallivasal
                </p>
                <p>
                  Self-driving or hiring a car with a driver are both excellent options to enjoy the journey at your own pace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-white">
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

      {/* Travel Tips */}
      <section className="py-16 bg-resort-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">Travel Tips</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                <p>The best time to visit Munnar is from September to May. The monsoon season (June to August) can make roads slippery.</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                <p>Carry light woolens if you're visiting during winter (November to February) as evenings can get chilly.</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                <p>The roads to Munnar are winding mountain roads. If you're prone to motion sickness, carry appropriate medication.</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                <p>Resort pickup service is available at an additional cost. Please contact us in advance to arrange this.</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                <p>The nearest petrol station is in Munnar town, about 5 km from the resort.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReachUs;
