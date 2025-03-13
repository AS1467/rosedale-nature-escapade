
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-resort-green text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Resort Info */}
          <div>
            <h3 className="text-xl font-serif mb-4">Rosedale Resort</h3>
            <p className="mb-4 text-gray-200">A serene nature retreat nestled in the heart of Munnar, Kerala.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-resort-cream">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-resort-cream">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-resort-cream">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/rooms" className="text-gray-200 hover:text-white">Rooms & Pricing</Link></li>
              <li><Link to="/facilities" className="text-gray-200 hover:text-white">Facilities</Link></li>
              <li><Link to="/attractions" className="text-gray-200 hover:text-white">Nearby Attractions</Link></li>
              <li><Link to="/gallery" className="text-gray-200 hover:text-white">Gallery</Link></li>
              <li><Link to="/reviews" className="text-gray-200 hover:text-white">Guest Reviews</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Pallivasal, Munnar, Kerala 685612, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-resort-cream">+91 98765 43210</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@rosedaleresort.com" className="hover:text-resort-cream">info@rosedaleresort.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-200">Subscribe to get special offers and news.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-resort-cream"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-resort-cream text-resort-green rounded-md hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Rosedale Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
