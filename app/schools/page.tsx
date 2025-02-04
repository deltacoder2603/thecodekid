"use client";

import React, { useState } from 'react';
import { Star, MonitorSmartphone, BookOpen, Gamepad, ChevronLeft, ChevronRight, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image'; 

interface FeatureCardProps {
  icon: React.ReactNode; // Updated to accept React nodes
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
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 max-w-7xl ">
        {/* Background Image */}
        <div className="absolute inset-0 w-screen h-screen">
          <Image
            src="/bg1.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center mb-16 mt-[150px] ml-[110px] text-white"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Grow your school with <span className='text-orange-500'>CodeKid</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Upgrade your school with the best tech-based solutions. CodeKid &apos; s International Standard Curriculum and well-researched pedagogy ensure visible growth in student learning outcomes.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 ml-[110px] mb-16 text-white">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-orange-400">{stat.number}</h2>
              <p className="font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative mx-auto block bg-orange-500 ml-[600px] text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
        >
          Enquire Now <ArrowRight className="inline-block ml-2 w-5 h-5" />
        </motion.button>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mt-[120px] text-center text-black mb-12"
        >
          Comprehensive Digital Learning <span className='text-orange-500'>Solutions</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <MonitorSmartphone />,
              title: "Smart Classrooms",
              description: "Interactive digital learning environments with advanced audio-visual capabilities"
            },
            {
              icon: <BookOpen />,
              title: "Digital Textbooks",
              description: "QR-enabled textbooks with multimedia content for enhanced understanding"
            },
            {
              icon: <Star />,
              title: "CodeKid Student App",
              description: "All-in-one platform for assignments, live classes, and resources"
            },
            {
              icon: <Gamepad />,
              title: "Gamified Learning",
              description: "Engaging educational games and interactive quizzes"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </section>

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
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LEAD Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-black mb-12"
        >
          Why should your school be powered by CodeKid?
        </motion.h2>
        {/* Add content for this section as needed */}
      </section>

      {/* Transform Your School Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-black mb-6"><span className='text-orange-500'>Transform</span> your School with CodeKid</h2>
              <p className="text-gray-600 mb-8">
                CodeKid - School Transformation Solutions. Grow your school with help from our experts with academic and admission solutions that will transform your school.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
              >
                Check Our Solutions
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
   src="https://images.unsplash.com/photo-1503676260728-"
   alt="Modern classroom"
   width={600}
   height={400}
   className="rounded-lg shadow-xl" 
/>

            </motion.div>
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
         <h3 className="text-xl font-semibold text-orange-600 mb-2"> 
            {title} 
         </h3> 
         <p className="text-gray-600"> 
            {description} 
         </p> 
      </motion.div> 
   );
}


export default App;
