import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Calendar, ArrowRight, ChevronLeft, ChevronRight, Zap } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const changeImage = (direction: 'next' | 'prev') => {
    setCurrentImageIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % heroImages.length;
      } else {
        return (prevIndex - 1 + heroImages.length) % heroImages.length;
      }
    });
  };

  return (
    <div className="bg-white">
      <section className="relative bg-orange-500 text-white py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-50"></div>
          {heroImages.map((img, index) => (
            <img 
              key={index}
              src={img}
              alt={`Charity background ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
        <button onClick={() => changeImage('prev')} className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-1 sm:p-2 rounded-full text-orange-600 hover:bg-opacity-75 transition-all duration-300 z-10">
          <ChevronLeft size={20} />
        </button>
        <button onClick={() => changeImage('next')} className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-1 sm:p-2 rounded-full text-orange-600 hover:bg-opacity-75 transition-all duration-300 z-10">
          <ChevronRight size={20} />
        </button>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 animate-fade-in-down">Welcome to CharityZ</h1>
          <p className="text-lg sm:text-xl mb-8 animate-fade-in-up">Empowering communities, one act at a time</p>
          <Link to="/donate" className="btn-primary inline-flex items-center animate-pulse">
            Donate Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-500 mb-4 mx-auto" />
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">10,000+</h3>
              <p className="text-center">Lives Impacted</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">500+</h3>
              <p className="text-center">Active Volunteers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">50+</h3>
              <p className="text-center">Ongoing Projects</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Featured Causes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-orange-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Education" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Education for All</h3>
              <p className="mb-4">Help provide quality education to underprivileged children.</p>
              <Link to="/donate" className="btn-secondary inline-block">Support Now</Link>
            </div>
            <div className="bg-teal-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Healthcare" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Healthcare Access</h3>
              <p className="mb-4">Support our efforts to provide healthcare to remote communities.</p>
              <Link to="/donate" className="btn-secondary inline-block">Support Now</Link>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Environment" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Environmental Protection</h3>
              <p className="mb-4">Join our mission to preserve and protect our natural environment.</p>
              <Link to="/donate" className="btn-secondary inline-block">Support Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;