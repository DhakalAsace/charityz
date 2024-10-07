import React from 'react';
import { Book, Heart, Leaf, Home } from 'lucide-react';

const ProgramCard: React.FC<{ icon: React.ReactNode; title: string; description: string; activities: string[] }> = ({ icon, title, description, activities }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-2xl font-semibold text-orange-600 ml-3">{title}</h2>
    </div>
    <p className="mb-4">{description}</p>
    <ul className="list-disc list-inside mb-4">
      {activities.map((activity, index) => (
        <li key={index}>{activity}</li>
      ))}
    </ul>
    <button className="btn-primary">Learn More</button>
  </div>
);

const Programs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">Our Programs</h1>
      <p className="mb-6">At CharityZ, we offer a variety of programs designed to address critical needs in our community and create lasting positive change.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProgramCard
          icon={<Book className="w-10 h-10 text-blue-500" />}
          title="Education Empowerment"
          description="Our education programs focus on providing access to quality learning resources, tutoring services, and scholarships to underprivileged students."
          activities={[
            "After-school tutoring",
            "STEM workshops",
            "College preparation courses",
            "Adult literacy classes"
          ]}
        />

        <ProgramCard
          icon={<Heart className="w-10 h-10 text-red-500" />}
          title="Health & Wellness Initiative"
          description="We promote community health through free clinics, health education programs, and fitness activities for all ages."
          activities={[
            "Mobile health clinics",
            "Nutrition workshops",
            "Mental health support groups",
            "Senior fitness classes"
          ]}
        />

        <ProgramCard
          icon={<Home className="w-10 h-10 text-purple-500" />}
          title="Community Development"
          description="Our community development programs aim to strengthen neighborhoods through various initiatives and support services."
          activities={[
            "Affordable housing projects",
            "Job training and placement",
            "Small business support",
            "Community gardens"
          ]}
        />

        <ProgramCard
          icon={<Leaf className="w-10 h-10 text-green-500" />}
          title="Environmental Conservation"
          description="We work to protect and preserve our environment through education, advocacy, and hands-on conservation efforts."
          activities={[
            "Recycling initiatives",
            "Tree planting campaigns",
            "Clean energy workshops",
            "Wildlife habitat restoration"
          ]}
        />
      </div>
    </div>
  );
};

export default Programs;