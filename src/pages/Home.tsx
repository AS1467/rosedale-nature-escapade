import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-resort-beige py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-resort-green mb-6">
            Welcome to Rosedale Resort
          </h1>
          <p className="text-xl text-foreground mb-8">
            A serene nature retreat nestled in the heart of Munnar, Kerala.
          </p>
          {/* CTA Buttons */}
          <div className="flex justify-center space-x-6 mt-8">
            <Link to="/rooms" className="bg-resort-green text-white px-6 py-3 rounded-md hover:bg-resort-light-green transition-colors">
              View Rooms
            </Link>
            <Link to="/contact" className="bg-white text-resort-green border border-resort-green px-6 py-3 rounded-md hover:bg-resort-cream transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-serif text-resort-green mb-4">
              Experience the Beauty of Munnar
            </h2>
            <p className="text-foreground mb-6">
              Surrounded by lush green hills and tea plantations, Rosedale Resort
              offers a tranquil escape from the hustle and bustle of city life.
              Enjoy breathtaking views, comfortable accommodations, and warm
              hospitality.
            </p>
            <Link
              to="/reach-us"
              className="bg-resort-cream text-resort-green px-6 py-3 rounded-md hover:bg-resort-beige transition-colors inline-block"
            >
              How to Reach Us
            </Link>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80"
              alt="Munnar Tea Plantations"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-resort-cream">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-serif text-resort-green mb-8">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Facility Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-serif text-foreground mb-2">
                Comfortable Rooms
              </h3>
              <p className="text-foreground">
                Spacious and well-appointed rooms with modern amenities and
                stunning views.
              </p>
            </div>
            {/* Example Facility Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-serif text-foreground mb-2">
                Nature Trails
              </h3>
              <p className="text-foreground">
                Explore the surrounding hills with our guided nature trails and
                discover the local flora and fauna.
              </p>
            </div>
            {/* Example Facility Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-serif text-foreground mb-2">
                Bonfire Nights
              </h3>
              <p className="text-foreground">
                Enjoy a cozy bonfire night under the stars with music and
                delicious snacks.
              </p>
            </div>
          </div>
          <Link
            to="/facilities"
            className="bg-resort-green text-white px-6 py-3 rounded-md hover:bg-resort-light-green transition-colors inline-block mt-8"
          >
            View All Facilities
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-serif text-resort-green mb-8">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Example Gallery Image */}
            <img
              src="https://images.unsplash.com/photo-1517824806704-8bca790297cf?auto=format&fit=crop&w=400&q=80"
              alt="Resort View"
              className="rounded-lg shadow-md"
            />
            {/* Example Gallery Image */}
            <img
              src="https://images.unsplash.com/photo-1568699946688-f99a9d484717?auto=format&fit=crop&w=400&q=80"
              alt="Room Interior"
              className="rounded-lg shadow-md"
            />
            {/* Example Gallery Image */}
            <img
              src="https://images.unsplash.com/photo-1544949217-33c58934c98e?auto=format&fit=crop&w=400&q=80"
              alt="Dining Area"
              className="rounded-lg shadow-md"
            />
          </div>
          <Link
            to="/gallery"
            className="bg-resort-cream text-resort-green px-6 py-3 rounded-md hover:bg-resort-beige transition-colors inline-block mt-8"
          >
            View More Photos
          </Link>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-resort-beige">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-serif text-resort-green mb-8">
            Guest Reviews
          </h2>
          <p className="text-xl text-foreground mb-8">
            See what our guests are saying about their experience at Rosedale
            Resort.
          </p>
          <Link
            to="/reviews"
            className="bg-resort-green text-white px-6 py-3 rounded-md hover:bg-resort-light-green transition-colors inline-block"
          >
            Read Reviews
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
