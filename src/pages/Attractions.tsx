
import { MapPin, Clock } from 'lucide-react';

const attractions = [
  {
    name: 'Eravikulam National Park',
    distance: '10 km',
    duration: '30 minutes',
    description: 'Home to the endangered Nilgiri Tahr, this national park offers breathtaking views of rolling hills and rare mountain flora. The park is also known for the Neelakurinji flower that blooms once every 12 years.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Mattupetty Dam',
    distance: '12 km',
    duration: '35 minutes',
    description: 'A picturesque dam offering boating facilities and surrounded by hills and tea plantations. The reservoir is ideal for a peaceful boat ride while enjoying the scenic beauty of the surrounding landscapes.',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Tea Museum',
    distance: '8 km',
    duration: '25 minutes',
    description: 'Learn about the history and process of tea production in Munnar. The museum showcases photographs and machinery representing the evolution of tea plantations in this region since the 1880s.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Echo Point',
    distance: '15 km',
    duration: '40 minutes',
    description: 'A serene spot known for its natural echo phenomenon. Surrounded by the beautiful Mattupetty Lake, it\'s a perfect place to experience the acoustic marvel while enjoying the picturesque scenery.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Top Station',
    distance: '32 km',
    duration: '1 hour 15 minutes',
    description: 'The highest point in Munnar, offering a panoramic view of the Western Ghats and the neighboring state of Tamil Nadu. Known for its breathtaking views of the Theni Valley and vibrant Neelakurinji blooms.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Attukal Waterfalls',
    distance: '9 km',
    duration: '25 minutes',
    description: 'A mesmerizing waterfall cascading down the hills, perfect for nature lovers and photographers. The scenic journey to the falls through cardamom plantations is as rewarding as the destination itself.',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80'
  }
];

const Attractions = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-resort-green text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-center">Nearby Attractions</h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Explore Munnar's Treasures</h2>
          <p className="text-lg mb-8">
            Munnar is blessed with numerous natural wonders and cultural attractions. During your stay at Rosedale Resort, explore these nearby gems to experience the true essence of this hill station.
          </p>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-16 bg-resort-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <h3 className="text-xl font-serif mb-2">{attraction.name}</h3>
                    <div className="flex flex-wrap mb-4 text-sm">
                      <div className="flex items-center mr-6 mb-2">
                        <MapPin size={16} className="text-resort-green mr-1" />
                        <span>{attraction.distance}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <Clock size={16} className="text-resort-green mr-1" />
                        <span>{attraction.duration} drive</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{attraction.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Assistance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">Travel Assistance</h2>
          <div className="bg-resort-cream p-6 rounded-lg">
            <p className="mb-6">
              Our front desk can help arrange transportation and guided tours to any of these attractions. We offer:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                <p>Private car rentals with experienced drivers</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                <p>Guided tour packages with knowledgeable local guides</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                <p>Packed lunches for day trips</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                <p>Early breakfast arrangements for early morning excursions</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                <p>Custom itineraries based on your interests and time constraints</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seasonal Attractions */}
      <section className="py-16 bg-resort-beige">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">Seasonal Highlights</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-serif mb-4">Winter (November - February)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Misty landscapes perfect for photography</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Bird watching in Eravikulam National Park</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Christmas and New Year celebrations</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Summer (March - May)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Clear mountain views and stargazing</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Ideal weather for trekking and outdoor activities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Tea harvesting season (witnessing the process)</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">Attractions Map</h2>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125428.30037339586!2d77.0016949491278!3d10.088041728798384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0799794d099dcf%3A0x5f37a5fc7134f0b7!2sMunnar%2C%20Kerala!5e0!3m2!1sen!2sin!4v1651825200000!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Munnar Attractions Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attractions;
