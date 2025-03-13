
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Coffee, Utensils, Wind, Flame, TreePine } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80" 
            alt="Scenic view of Munnar" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 animate-fade-up">
            Rosedale Resort, Munnar
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            A Nature Retreat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/rooms" className="resort-button">
              View Rooms
            </Link>
            <Link to="/contact" className="resort-button-outline bg-transparent text-white border-white hover:bg-white hover:text-resort-green">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Welcome to Rosedale</h2>
            <p className="text-lg leading-relaxed mb-8">
              Nestled in the serene hills of Munnar, Rosedale Resort offers an idyllic escape into nature's embrace. 
              Our resort combines traditional Kerala architecture with modern comforts, providing a tranquil sanctuary for those seeking to reconnect with nature and rejuvenate their spirits.
            </p>
            <Link to="/about" className="inline-flex items-center text-resort-green hover:text-resort-light-green font-medium">
              Learn more about us <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="section-padding bg-resort-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Accommodations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Room 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80" 
                alt="Deluxe Room" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2">Deluxe Room</h3>
                <p className="text-gray-600 mb-4">Experience comfort with stunning mountain views.</p>
                <Link to="/rooms" className="text-resort-green hover:text-resort-light-green font-medium inline-flex items-center">
                  View Details <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Room 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80" 
                alt="Premium Suite" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2">Premium Suite</h3>
                <p className="text-gray-600 mb-4">Luxurious suite with private balcony and forest views.</p>
                <Link to="/rooms" className="text-resort-green hover:text-resort-light-green font-medium inline-flex items-center">
                  View Details <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Room 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80" 
                alt="Family Cottage" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2">Family Cottage</h3>
                <p className="text-gray-600 mb-4">Spacious cottage ideal for families, with garden access.</p>
                <Link to="/rooms" className="text-resort-green hover:text-resort-light-green font-medium inline-flex items-center">
                  View Details <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/rooms" className="resort-button">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Highlight */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Resort Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-resort-cream flex items-center justify-center mb-4">
                <Wifi className="text-resort-green" size={28} />
              </div>
              <h3 className="font-medium">Free WiFi</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-resort-cream flex items-center justify-center mb-4">
                <Coffee className="text-resort-green" size={28} />
              </div>
              <h3 className="font-medium">Coffee Shop</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-resort-cream flex items-center justify-center mb-4">
                <Utensils className="text-resort-green" size={28} />
              </div>
              <h3 className="font-medium">Restaurant</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-resort-cream flex items-center justify-center mb-4">
                <Flame className="text-resort-green" size={28} />
              </div>
              <h3 className="font-medium">Bonfire</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-resort-cream flex items-center justify-center mb-4">
                <TreePine className="text-resort-green" size={28} />
              </div>
              <h3 className="font-medium">Nature Trails</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-resort-cream flex items-center justify-center mb-4">
                <Wind className="text-resort-green" size={28} />
              </div>
              <h3 className="font-medium">Fresh Air</h3>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/facilities" className="text-resort-green hover:text-resort-light-green font-medium inline-flex items-center">
              View All Facilities <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-resort-green text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready for a Nature Retreat?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay at Rosedale Resort and experience the serenity of Munnar.
          </p>
          <Link to="/contact" className="px-8 py-3 bg-white text-resort-green rounded-md hover:bg-resort-cream transition-colors duration-300 font-medium text-lg">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
