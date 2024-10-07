import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Clock, Heart } from 'lucide-react';

const Volunteer: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">Volunteer with CharityZ</h1>
      <p className="mb-6">Volunteering is a rewarding way to give back to your community and make a real difference in people's lives. Join our team of dedicated volunteers and help us create positive change!</p>

      <div className="mb-8">
        <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="CharityZ volunteers" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      <h2 className="text-2xl font-semibold text-orange-600 mt-6 mb-3">Current Volunteer Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
          <Users className="w-10 h-10 text-orange-500 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Community Outreach Coordinator</h3>
          <p>Help us connect with local communities and spread awareness about our programs.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
          <Award className="w-10 h-10 text-teal-500 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Fundraising Event Planner</h3>
          <p>Organize and coordinate fundraising events to support our various initiatives.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
          <Clock className="w-10 h-10 text-purple-500 mb-3" />
          <h3 className="text-xl font-semibold mb-2">After-School Tutor</h3>
          <p>Provide academic support to students in our after-school programs.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-orange-600 mt-6 mb-3">Benefits of Volunteering</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Make a positive impact in your community</li>
        <li>Develop new skills and gain valuable experience</li>
        <li>Meet like-minded individuals and expand your network</li>
        <li>Boost your resume and career prospects</li>
        <li>Improve your mental health and well-being</li>
      </ul>

      <div className="bg-teal-100 p-6 rounded-lg mb-6 shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <Heart className="w-6 h-6 text-teal-500 mr-2" />
          Ready to Join Our Team?
        </h3>
        <Link to="/contact" className="btn-secondary inline-block">Apply to Volunteer</Link>
      </div>

      <p className="text-sm">For more information about our volunteer programs, please contact our Volunteer Coordinator at volunteer@charityz.org</p>
    </div>
  );
};

export default Volunteer;