"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
    <Navbar />
    <div className="bg-white min-h-screen mt-[60px] py-16 px-4">
      <motion.div 
        className="container mx-auto max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-5xl font-bold text-orange-500 mb-16 text-center"
          variants={itemVariants}
        >
          About Us
        </motion.h1>

        <motion.section 
          className="mb-16 space-y-6"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-2 h-8 bg-orange-500 rounded"></div>
            <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            To build a future-ready generation by integrating coding and technology into everyday learning. We empower students with problem-solving skills, logical thinking, and creative confidence, preparing them to lead in a world driven by innovation.
          </p>
        </motion.section>

        <motion.section 
          className="mb-16 space-y-6"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-2 h-8 bg-orange-500 rounded"></div>
            <h2 className="text-3xl font-semibold text-gray-800">Our Vision</h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            To revolutionize education in India by making coding as fundamental as reading and writing. We envision schools where every student, regardless of background, can explore their potential, compete on global stages, and turn ideas into impact.
          </p>
        </motion.section>

        <motion.section 
          className="mb-16 space-y-6"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-2 h-8 bg-orange-500 rounded"></div>
            <h2 className="text-3xl font-semibold text-gray-800">What We Do</h2>
          </div>
          <ul className="space-y-4 text-gray-600 text-lg">
            {[
              "In-School Coding Clubs: Student-led clubs where seniors become 'Tech Captains,' guiding peers through hands-on projects in Scratch, Python, and AI.",
              "Live Online Classes: Grade-wise, NEP-aligned courses taught by coding experts. From block-based coding for young learners to advanced app development for teens.",
              "Hackathons & Competitions: Quarterly events with themes like 'Smart Cities' and 'Health Tech,' where students solve real-world problems."
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section 
          className="space-y-6"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-2 h-8 bg-orange-500 rounded"></div>
            <h2 className="text-3xl font-semibold text-gray-800">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Innovation', description: 'We turn "What if?" into "Whats next."' },
              { title: 'Collaboration', description: 'Schools, students, and parents grow together.' },
              { title: 'Empathy', description: 'Every child learns differently—we adapt to their pace.' },
              { title: 'Fun', description: 'Learning to code should feel like play, not work!' }
            ].map((value, index) => (
              <motion.div 
                key={value.title}
                className="bg-orange-50 p-6 rounded-lg border border-orange-100 hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold text-orange-600 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;