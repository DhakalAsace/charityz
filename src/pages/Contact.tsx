import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">Contact Us</h1>
      <p className="mb-8">We'd love to hear from you! Whether you have a question about our programs, want to volunteer, or are interested in making a donation, please don't hesitate to reach out.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Get in Touch</h2>
          <div className="flex items-center mb-4">
            <Mail className="w-6 h-6 text-orange-500 mr-2" />
            <span>info@charityheart.org</span>
          </div>
          <div className="flex items-center mb-4">
            <Phone className="w-6 h-6 text-orange-500 mr-2" />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center mb-4">
            <MapPin className="w-6 h-6 text-orange-500 mr-2" />
            <span>123 Charity Lane, Kindness City, CA 90210</span>
          </div>

          <h2 className="text-2xl font-semibold text-orange-600 mt-8 mb-4">Office Hours</h2>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 10:00 AM - 2:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;