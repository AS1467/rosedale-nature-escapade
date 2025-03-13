
import { Star, StarHalf } from 'lucide-react';

const reviews = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    date: 'February 2023',
    comment: 'Our stay at Rosedale Resort was absolutely magical. The room overlooked the valley and waking up to the misty mountains was surreal. The staff was incredibly attentive and the homemade Kerala food was delicious. We especially loved the nature trails around the property. Will definitely be back!',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'John Williams',
    location: 'London, UK',
    rating: 5,
    date: 'December 2022',
    comment: 'Traveling from the UK, we wanted an authentic Kerala experience, and Rosedale delivered beyond expectations. The quiet location away from the touristy areas of Munnar was perfect. The rooms were spacious and clean with stunning views. The manager arranged a wonderful tea plantation tour for us. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Rajesh & Meera',
    location: 'Bangalore, India',
    rating: 4.5,
    date: 'October 2022',
    comment: 'We celebrated our anniversary at Rosedale and it was the perfect romantic getaway. The special dinner arranged under the stars was unforgettable. The only minor issue was the intermittent WiFi, but honestly, it helped us disconnect better! The room was beautiful and the balcony views were worth every penny.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Sarah Chen',
    location: 'Singapore',
    rating: 5,
    date: 'January 2023',
    comment: 'Rosedale Resort exceeded all our expectations. The location is serene and perfect for those looking to escape the noise of city life. The rooms are tastefully decorated and extremely comfortable. The highlight was the bonfire evening with local music. The staff went above and beyond to make our stay memorable.',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Arjun Nair',
    location: 'Delhi, India',
    rating: 4.5,
    date: 'March 2023',
    comment: 'Our family of four had a wonderful time at Rosedale. The kids enjoyed the open spaces and the guided nature walk arranged by the resort. The cottage was spacious and had all amenities we needed. Food was exceptional - especially the traditional Kerala breakfast. Small suggestion would be to add more activities for children.',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'David & Lisa Brown',
    location: 'Sydney, Australia',
    rating: 5,
    date: 'November 2022',
    comment: 'We stayed at Rosedale for 3 nights during our honeymoon tour of South India. The resort\'s peaceful setting was just what we needed. The staff arranged a surprise cake and flowers on arrival when they learned we were newlyweds. The guided trips to nearby attractions were well organized. Can\'t wait to visit again!',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=150&q=80'
  }
];

const renderRating = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="text-yellow-500 fill-yellow-500" size={18} />);
  }

  if (hasHalfStar) {
    stars.push(<StarHalf key="half" className="text-yellow-500 fill-yellow-500" size={18} />);
  }

  return stars;
};

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <img 
          src={review.image} 
          alt={review.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-medium">{review.name}</h3>
          <p className="text-sm text-gray-600">{review.location}</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <div className="flex mr-2">
          {renderRating(review.rating)}
        </div>
        <span className="text-sm text-gray-600">{review.date}</span>
      </div>
      <p className="text-gray-700">{review.comment}</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-resort-green text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-center">Guest Reviews</h1>
        </div>
      </div>

      {/* Overall Rating */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-2">4.9</h2>
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="text-yellow-500 fill-yellow-500" size={24} />
              ))}
            </div>
            <p className="text-lg">Based on 120+ verified guest reviews</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-resort-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">Find Us On</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="flex flex-col items-center p-6 bg-resort-cream rounded-lg hover:shadow-md transition-shadow">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Google_Reviews_logo.svg/2560px-Google_Reviews_logo.svg.png" 
                alt="Google Reviews" 
                className="h-8 mb-3"
              />
              <div className="flex items-center mb-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
                <span className="ml-2 font-medium">4.9</span>
              </div>
              <span className="text-sm text-gray-600">68 reviews</span>
            </a>

            <a href="#" className="flex flex-col items-center p-6 bg-resort-cream rounded-lg hover:shadow-md transition-shadow">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tripadvisor_lockup_horizontal_secondary_registered.svg/2560px-Tripadvisor_lockup_horizontal_secondary_registered.svg.png" 
                alt="TripAdvisor" 
                className="h-8 mb-3"
              />
              <div className="flex items-center mb-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
                <span className="ml-2 font-medium">4.8</span>
              </div>
              <span className="text-sm text-gray-600">52 reviews</span>
            </a>

            <a href="#" className="flex flex-col items-center p-6 bg-resort-cream rounded-lg hover:shadow-md transition-shadow">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png" 
                alt="Booking.com" 
                className="h-8 mb-3"
              />
              <div className="flex items-center mb-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
                <span className="ml-2 font-medium">9.2</span>
              </div>
              <span className="text-sm text-gray-600">35 reviews</span>
            </a>
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-16 bg-resort-beige">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Share Your Experience</h2>
          <p className="text-lg mb-8">
            Have you stayed with us? We'd love to hear about your experience at Rosedale Resort.
          </p>
          <div className="flex justify-center">
            <a href="#" className="resort-button">
              Write a Review
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
