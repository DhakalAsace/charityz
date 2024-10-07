import React from 'react';
import { Heart, Users, Lightbulb, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">About CharityZ</h1>
      <div className="mb-8 p-4 sm:p-6 bg-orange-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="mb-4">CharityZ is a non-profit organization dedicated to making a positive impact in our community and beyond. Founded in 2010, we have been working tirelessly to address critical social issues and improve the lives of those in need.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="p-4 sm:p-6 bg-teal-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
          <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 flex items-center">
            <Lightbulb className="mr-2" size={24} /> Our Vision
          </h2>
          <p>We envision a world where every individual has access to education, healthcare, and opportunities for personal growth and development.</p>
        </div>
        
        <div className="p-4 sm:p-6 bg-purple-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-3 flex items-center">
            <Globe className="mr-2" size={24} /> Our Mission
          </h2>
          <p>Our mission is to empower communities through sustainable development programs, promote health and wellness, and provide educational opportunities to those who need it most.</p>
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold text-orange-600 mt-8 mb-4">Our Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 bg-yellow-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center transform hover:-translate-y-1">
          <Heart className="text-yellow-500 mr-3" size={20} />
          <span>Compassion</span>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center transform hover:-translate-y-1">
          <Users className="text-green-500 mr-3" size={20} />
          <span>Integrity</span>
        </div>
        <div className="p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center transform hover:-translate-y-1">
          <Lightbulb className="text-blue-500 mr-3" size={20} />
          <span>Innovation</span>
        </div>
      </div>

      <div className="mt-8 p-4 sm:p-6 bg-orange-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-base sm:text-lg font-semibold">Join us in our journey to create a better world for all. Together, we can make a difference!</p>
      </div>
    </div>
  );
};

export default About;