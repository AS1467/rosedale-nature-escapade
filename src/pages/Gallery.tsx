
import { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    alt: 'Resort exterior view with mountains in background',
    category: 'resort'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    alt: 'Luxury hotel room with mountain view',
    category: 'rooms'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    alt: 'Resort restaurant with outdoor seating',
    category: 'dining'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80',
    alt: 'Scenic view of tea plantations in Munnar',
    category: 'surroundings'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80',
    alt: 'Premium suite bedroom',
    category: 'rooms'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
    alt: 'Resort swimming pool surrounded by nature',
    category: 'facilities'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    alt: 'Mountain hiking trail near resort',
    category: 'surroundings'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80',
    alt: 'Outdoor bonfire area',
    category: 'facilities'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
    alt: 'Sunrise view from resort balcony',
    category: 'surroundings'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80',
    alt: 'Resort spa treatment room',
    category: 'facilities'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    alt: 'Family cottage interior',
    category: 'rooms'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80',
    alt: 'Tea plantation tour',
    category: 'activities'
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80',
    alt: 'Traditional Kerala dinner setup',
    category: 'dining'
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    alt: 'Misty morning view from resort',
    category: 'surroundings'
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
    alt: 'Deluxe bathroom with amenities',
    category: 'rooms'
  }
];

const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'rooms', name: 'Rooms & Suites' },
  { id: 'facilities', name: 'Facilities' },
  { id: 'dining', name: 'Dining' },
  { id: 'surroundings', name: 'Surroundings' },
  { id: 'activities', name: 'Activities' }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-resort-green text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-center">Our Gallery</h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Experience Rosedale Through Pictures</h2>
          <p className="text-lg mb-8">
            Explore our resort's scenic beauty, comfortable accommodations, and the natural wonders of Munnar through our curated photo gallery.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-resort-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-resort-green text-white' 
                    : 'bg-white text-resort-green hover:bg-resort-light-green hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openLightbox(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <button 
            onClick={() => navigateImage('prev')}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button 
            onClick={() => navigateImage('next')}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          
          <div className="max-w-5xl max-h-[80vh]">
            {filteredImages
              .filter(img => img.id === selectedImage)
              .map(image => (
                <div key={image.id} className="flex flex-col items-center">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="max-h-[70vh] max-w-full object-contain"
                  />
                  <p className="text-white mt-4 text-center">{image.alt}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
