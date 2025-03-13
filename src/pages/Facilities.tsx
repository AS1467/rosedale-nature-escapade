
import { Wifi, Coffee, Utensils, Bath, Wind, Flame, TreePine, Compass, BookOpen, Bike } from 'lucide-react';

const facilities = [
  {
    name: 'Free WiFi',
    description: 'Stay connected with complimentary high-speed WiFi available throughout the resort premises.',
    icon: Wifi
  },
  {
    name: 'Coffee Shop',
    description: 'Enjoy freshly brewed coffee, tea, and light snacks at our cozy coffee shop with mountain views.',
    icon: Coffee
  },
  {
    name: 'Restaurant',
    description: 'Savor authentic Kerala cuisine and continental dishes at our in-house restaurant using locally-sourced ingredients.',
    icon: Utensils
  },
  {
    name: '24/7 Hot Water',
    description: 'All rooms are equipped with 24/7 hot water supply to ensure your comfort in the cool mountain climate.',
    icon: Bath
  },
  {
    name: 'Fresh Mountain Air',
    description: 'Located at an altitude of 1,600 meters, the resort offers pristine mountain air and a pollution-free environment.',
    icon: Wind
  },
  {
    name: 'Bonfire',
    description: 'Gather around a warm bonfire in the evening for a memorable experience under the stars.',
    icon: Flame
  },
  {
    name: 'Nature Trails',
    description: 'Explore the surrounding wilderness on our guided nature trails, perfect for bird watching and flora discovery.',
    icon: TreePine
  },
  {
    name: 'Bicycle Rental',
    description: 'Discover the beauty of Munnar at your own pace with our bicycle rental service.',
    icon: Bike
  },
  {
    name: 'Guided Tours',
    description: 'Arrange guided tours to nearby attractions with our knowledgeable local guides.',
    icon: Compass
  },
  {
    name: 'Library',
    description: 'Browse our collection of books and magazines in our peaceful reading corner.',
    icon: BookOpen
  }
];

const Facilities = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-resort-green text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-center">Facilities & Amenities</h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Comfort in the Lap of Nature</h2>
          <p className="text-lg mb-8">
            At Rosedale Resort, we blend the tranquility of nature with modern comforts to ensure your stay is both rejuvenating and convenient. Explore our range of facilities designed to enhance your Munnar experience.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-resort-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-resort-cream flex items-center justify-center mr-4">
                    <facility.icon className="text-resort-green" size={24} />
                  </div>
                  <h3 className="text-xl font-serif">{facility.name}</h3>
                </div>
                <p className="text-gray-700">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">Additional Services</h2>
          <div className="bg-resort-cream p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-serif mb-4">On Request Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Airport/Railway station pickup and drop</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Laundry service</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Doctor on call</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Packed lunches for excursions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Special dietary arrangements</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Experiential Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Tea plantation tours</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Spice garden visits</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Cooking demonstrations of Kerala cuisine</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Yoga and meditation sessions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-resort-green rounded-full mt-2 mr-2"></div>
                    <p>Cultural performances (seasonal)</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-resort-beige">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">Facility Glimpses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80" 
              alt="Resort restaurant" 
              className="w-full h-64 object-cover rounded-lg shadow-sm"
            />
            <img 
              src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80" 
              alt="Nature trail" 
              className="w-full h-64 object-cover rounded-lg shadow-sm"
            />
            <img 
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80" 
              alt="Bonfire area" 
              className="w-full h-64 object-cover rounded-lg shadow-sm"
            />
            <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80" 
              alt="Coffee shop" 
              className="w-full h-64 object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
