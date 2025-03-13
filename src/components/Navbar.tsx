
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-semibold text-resort-green">
            Rosedale Resort
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground hover:text-resort-green transition-colors">Home</Link>
            <Link to="/rooms" className="text-foreground hover:text-resort-green transition-colors">Rooms</Link>
            <Link to="/reach-us" className="text-foreground hover:text-resort-green transition-colors">How to Reach</Link>
            <Link to="/facilities" className="text-foreground hover:text-resort-green transition-colors">Facilities</Link>
            <Link to="/attractions" className="text-foreground hover:text-resort-green transition-colors">Attractions</Link>
            <Link to="/reviews" className="text-foreground hover:text-resort-green transition-colors">Reviews</Link>
            <Link to="/gallery" className="text-foreground hover:text-resort-green transition-colors">Gallery</Link>
            <Link to="/contact" className="text-foreground hover:text-resort-green transition-colors">Contact</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" className="px-4 py-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Home</Link>
            <Link to="/rooms" className="px-4 py-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Rooms</Link>
            <Link to="/reach-us" className="px-4 py-2 hover:bg-muted rounded-md" onClick={toggleMenu}>How to Reach</Link>
            <Link to="/facilities" className="px-4 py-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Facilities</Link>
            <Link to="/attractions" className="px-4 py-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Attractions</Link>
            <Link to="/reviews" className="px-4 py-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Reviews</Link>
            <Link to="/gallery" className="px-4 py-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Gallery</Link>
            <Link to="/contact" className="px-4 py-2 hover:bg-muted rounded-md" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
