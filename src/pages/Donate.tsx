import React from 'react';
import { DollarSign, Gift, Briefcase, Package } from 'lucide-react';

const Donate: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">Donate to KindSpark</h1>
      <p className="mb-6">Your generous donation helps us continue our mission of empowering communities and changing lives. Every contribution, no matter the size, makes a difference.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
        <div className="bg-orange-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-3 flex items-center">
            <DollarSign className="mr-2" size={24} /> Ways to Donate
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>One-time donation</li>
            <li>Monthly recurring donation</li>
            <li>Corporate sponsorship</li>
            <li>In-kind donations</li>
          </ul>
        </div>

        <div className="bg-teal-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 flex items-center">
            <Gift className="mr-2" size={24} /> How Your Donation Helps
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>$25 can provide a week's worth of meals for a family in need</li>
            <li>$50 can supply school materials for a child for an entire year</li>
            <li>$100 can fund a health check-up for an elderly person</li>
            <li>$500 can support a small business startup in a developing community</li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-3 flex items-center">
          <Briefcase className="mr-2" size={24} /> Ready to Make a Difference?
        </h3>
        <button className="btn-primary">Donate Now</button>
      </div>

      <div className="bg-yellow-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl sm:text-2xl font-semibold text-yellow-600 mb-3 flex items-center">
          <Package className="mr-2" size={24} /> Other Ways to Support
        </h3>
        <p className="mb-4">Can't donate money? Consider donating your time or skills! Check out our volunteer opportunities or contact us to learn about in-kind donations.</p>
        <button className="btn-secondary">Explore Opportunities</button>
      </div>

      <p className="text-sm mt-8">KindSpark is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the extent allowed by law.</p>
    </div>
  );
};

export default Donate;