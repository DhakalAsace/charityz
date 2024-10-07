import React from 'react';
import { Link } from 'react-router-dom';

const Events: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">Upcoming Events</h1>
      <p className="mb-6">Join us for these exciting events to support our cause and connect with our community!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-orange-100 p-4 sm:p-6 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-3">Annual Charity Gala</h2>
          <p className="mb-2"><strong>Date:</strong> September 15, 2024</p>
          <p className="mb-2"><strong>Time:</strong> 7:00 PM - 11:00 PM</p>
          <p className="mb-2"><strong>Location:</strong> Grand Ballroom, City Center Hotel</p>
          <p className="mb-4">Join us for an elegant evening of dinner, dancing, and fundraising for our education initiatives.</p>
          <Link to="/events/charity-gala" className="btn-primary">Get Tickets</Link>
        </div>

        <div className="bg-teal-100 p-4 sm:p-6 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3">Community Clean-up Day</h2>
          <p className="mb-2"><strong>Date:</strong> October 8, 2024</p>
          <p className="mb-2"><strong>Time:</strong> 9:00 AM - 1:00 PM</p>
          <p className="mb-2"><strong>Location:</strong> Riverside Park</p>
          <p className="mb-4">Help us beautify our local park and promote environmental awareness in our community.</p>
          <Link to="/events/community-cleanup" className="btn-secondary">Register to Volunteer</Link>
        </div>

        <div className="bg-purple-100 p-4 sm:p-6 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-3">Charity Fun Run</h2>
          <p className="mb-2"><strong>Date:</strong> November 12, 2024</p>
          <p className="mb-2"><strong>Time:</strong> 8:00 AM - 12:00 PM</p>
          <p className="mb-2"><strong>Location:</strong> City Park</p>
          <p className="mb-4">Run or walk to raise funds for our health and wellness programs. All fitness levels welcome!</p>
          <Link to="/events/fun-run" className="bg-purple-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-purple-600 transition duration-300">Sign Up</Link>
        </div>

        <div className="bg-yellow-100 p-4 sm:p-6 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-yellow-600 mb-3">Holiday Toy Drive</h2>
          <p className="mb-2"><strong>Date:</strong> December 1-20, 2024</p>
          <p className="mb-2"><strong>Time:</strong> Various drop-off times</p>
          <p className="mb-2"><strong>Location:</strong> Multiple locations citywide</p>
          <p className="mb-4">Spread joy this holiday season by donating new, unwrapped toys for children in need.</p>
          <Link to="/events/toy-drive" className="bg-yellow-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-yellow-600 transition duration-300">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Events;