"use client";

import React, { useState } from 'react';
import { Star, MonitorSmartphone, BookOpen, Gamepad, ArrowRight } from 'lucide-react'; // Removed unused imports
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // Keep if used later
import Link from 'next/link'; 
import Image from 'next/image'; 

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { number: '400+', label: 'CITIES' },
    { number: '8,000+', label: 'SCHOOLS' },
    { number: '50,000+', label: 'TEACHERS' },
    { number: '35 Lakh+', label: 'STUDENTS' },
  ];

  const testimonials = [
    {
      quote: "Since we've implemented LEAD's system in our school, we have seen a huge improvement in our students' English.",
      author: "Malhar Kunjir",
      role: "Director & Trustee, Kunjir Public School, Pune, Maharashtra"
    },
    {
      quote: "The digital learning solutions have transformed how we teach. Our students are more engaged than ever.",
      author: "Priya Sharma",
      role: "Principal, Modern Academy, Delhi"
    },
    {
      quote: "LEAD's comprehensive approach has helped us achieve international standards of education.",
      author: "Rajesh Kumar",
      role: "Chairman, Excellence School, Mumbai"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      <Navbar />
      {/* Other sections remain unchanged */}
      
      {/* Testimonials Section */}
      <section className="bg-orange-100 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            What Successful School Owners Say <span className='text-orange-500'>About Us</span>
          </motion.h2>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="max-w-3xl mx-auto text-center"
            >
              <Quote className="w-12 h-12 mx-auto mb-6 text-orange-500" />
              <p className="text-xl mb-6">{testimonials[currentTestimonial].quote}</p>
              <p className="font-semibold">{testimonials[currentTestimonial].author}</p>
              <p className="text-black">{testimonials[currentTestimonial].role}</p>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors"
              >
                {/* Uncomment if using ChevronLeft */}
                {/* <ChevronLeft className="w-6 h-6" /> */}
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors"
              >
                {/* Uncomment if using ChevronRight */}
                {/* <ChevronRight className="w-6 h-6" /> */}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow-lg transition-shadow hover:shadow-xl"
    >
      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-orange-600 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default App;
