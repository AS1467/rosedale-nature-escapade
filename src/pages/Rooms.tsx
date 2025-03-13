
import { Link } from 'react-router-dom';
import { Wifi, Coffee, Tv, Bath, Utensils, Thermometer } from 'lucide-react';

const roomTypes = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'Our Deluxe Rooms offer the perfect blend of comfort and natural beauty, with large windows that frame breathtaking views of the surrounding tea gardens and mountains.',
    price: 'INR 5,000/night',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
    amenities: ['King-size bed', 'Mountain view', 'Private bathroom', 'Free WiFi', 'Room service']
  },
  {
    id: 2,
    name: 'Premium Suite',
    description: 'Spacious and luxurious, our Premium Suites feature separate living areas and private balconies where you can enjoy your morning tea while taking in the panoramic views of the misty mountains.',
    price: 'INR 8,000/night',
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80',
    amenities: ['King-size bed', 'Separate living area', 'Private balcony', 'Premium toiletries', 'Room service']
  },
  {
    id: 3,
    name: 'Family Cottage',
    description: 'Perfect for families, our cottages offer ample space with two bedrooms, a cozy living area, and a private garden where children can play safely while parents relax.',
    price: 'INR 10,000/night',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80',
    amenities: ['Two bedrooms', 'Living area', 'Private garden', 'Family dining space', 'Children\'s play area']
  },
  {
    id: 4,
    name: 'Honeymoon Suite',
    description: 'Designed for romance, our Honeymoon Suites feature a four-poster bed, jacuzzi bath, and a private deck where couples can stargaze under the clear Munnar sky.',
    price: 'INR 12,000/night',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
    amenities: ['Four-poster bed', 'Jacuzzi bath', 'Private deck', 'Champagne service', 'Romantic dining setup']
  }
];

const Rooms = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-resort-green text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-center">Rooms & Pricing</h1>
        </div>
      </div>

      {/* Common Amenities */}
      <section className="py-16 bg-resort-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">All Rooms Include</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3">
                <Wifi className="text-resort-green" size={20} />
              </div>
              <h3 className="font-medium">Free WiFi</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3">
                <Coffee className="text-resort-green" size={20} />
              </div>
              <h3 className="font-medium">Tea/Coffee Maker</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3">
                <Tv className="text-resort-green" size={20} />
              </div>
              <h3 className="font-medium">HD Television</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3">
                <Bath className="text-resort-green" size={20} />
              </div>
              <h3 className="font-medium">24/7 Hot Water</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3">
                <Utensils className="text-resort-green" size={20} />
              </div>
              <h3 className="font-medium">Room Service</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3">
                <Thermometer className="text-resort-green" size={20} />
              </div>
              <h3 className="font-medium">Climate Control</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Room Types</h2>
          <div className="space-y-16">
            {roomTypes.map((room, index) => (
              <div 
                key={room.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-serif mb-3">{room.name}</h3>
                  <p className="text-resort-brown font-medium mb-4">{room.price}</p>
                  <p className="text-gray-700 mb-6">{room.description}</p>
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Room Amenities:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-resort-green rounded-full mr-2"></div>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact" className="resort-button inline-block">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Policy */}
      <section className="py-16 bg-resort-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">Booking Information</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-resort-green mb-2">Check-in / Check-out</h3>
                <p>Check-in: 12:00 PM | Check-out: 11:00 AM</p>
              </div>
              <div>
                <h3 className="font-medium text-resort-green mb-2">Reservation Policy</h3>
                <p>50% advance payment is required to confirm your booking. The balance can be paid at the time of check-in.</p>
              </div>
              <div>
                <h3 className="font-medium text-resort-green mb-2">Cancellation Policy</h3>
                <p>Cancellations made 7 days prior to check-in date will receive a full refund. Cancellations made less than 7 days will be charged 1 night's stay.</p>
              </div>
              <div>
                <h3 className="font-medium text-resort-green mb-2">Children Policy</h3>
                <p>Children below 5 years of age can stay free of charge. Extra beds are available at an additional cost.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-resort-green text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us now to check availability and make a reservation.
          </p>
          <Link to="/contact" className="px-8 py-3 bg-white text-resort-green rounded-md hover:bg-resort-cream transition-colors duration-300 font-medium text-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
