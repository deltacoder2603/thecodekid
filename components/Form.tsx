"use client";

import React, { useState } from 'react';
import { Calendar, Users, Rocket, Send } from 'lucide-react';

interface FormProps {
  id?: string;
}

function OnboardingStep({ number, title, description, icon: Icon }: {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="relative flex flex-col items-center">
      {number !== 3 && (
        <div className="absolute top-12 left-1/2 h-24 w-px bg-gradient-to-b from-orange-500 to-orange-300 md:w-full md:h-px md:top-12 md:-right-1/2 md:left-auto" />
      )}
      <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
        <Icon className="w-12 h-12 text-white" />
      </div>
      <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-blue-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-white shadow-sm">
        {number}
      </div>
      <h3 className="mt-6 text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-center text-gray-600 max-w-xs">{description}</p>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    schoolName: '',
    role: '',
    studentsCount: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="john@school.edu"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-1">
            School Name *
          </label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            required
            value={formData.schoolName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="Tech Academy"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
            Your Role *
          </label>
          <select
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          >
            <option value="">Select your role</option>
            <option value="principal">Principal</option>
            <option value="teacher">Teacher</option>
            <option value="it_coordinator">IT Coordinator</option>
            <option value="administrator">Administrator</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="col-span-1">
          <label htmlFor="studentsCount" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Students
          </label>
          <select
            id="studentsCount"
            name="studentsCount"
            value={formData.studentsCount}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          >
            <option value="">Select range</option>
            <option value="1-100">1-100</option>
            <option value="101-500">101-500</option>
            <option value="501-1000">501-1000</option>
            <option value="1000+">1000+</option>
          </select>
        </div>

        <div className="col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="Tell us about your school's tech education goals..."
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center"
        >
          Schedule Your Demo
          <Send className="ml-2 w-5 h-5" />
        </button>
      </div>
    </form>
  );
}

const Form: React.FC<FormProps> = () => {
  return (
    <div id="contact-form" className="min-h-screen"> {/* ✅ Added correct id here */}
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className='text-orange-500'>Get Started</span> in 3 Simple Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community of innovative educators and transform your school &apos; s tech education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 max-w-4xl mx-auto mb-20">
          <OnboardingStep number={1} title="Book a Demo" description="30-min session to tailor programs for your school" icon={Calendar} />
          <OnboardingStep number={2} title="Onboard & Train" description="Teacher workshops + student orientation" icon={Users} />
          <OnboardingStep number={3} title="Launch & Celebrate" description="Host your first hackathon within 45 days!" icon={Rocket} />
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your <span className='text-orange-500'>Demo Session</span></h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Form;
