"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Laptop, Award, School, MapPin, Building2, Users2, Play, Gamepad, BookOpenCheck, Trophy, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactPlayer from "react-player";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Yogesh and Yogita Tendulkar",
      school: "CodeKid School, Mangaon",
      content: "When the pandemic broke out and a lockdown was announced, we were really caught unawares. Suddenly schools shut down and our son was at home the whole day. Not only did his learning stop, we weren\'t sure how to keep him engaged all day either. In less than a week, his school went fully online. Classes were conducted as per the timetable. He even had homework, weekly assignments and assessments! It has been a phenomenal experience with CodeKid and we don\'t mind it being online or offline. We have become a part of his education and this in the best part.",
      videoUrl: "https://www.youtube.com/watch?v=znCgeHvmT0w"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b bg-white">
        {/* Hero Section */}
        <div className="relative w-screen h-screen">
          {/* Background Image */}
          <Image src="/bg3.png" alt="Background" layout="fill" objectFit="cover" className="h-[720px] mt-[70px]" />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>

          {/* Content Section */}
          <motion.section 
            className="absolute inset-0 flex items-center justify-center text-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-2xl text-white space-y-6">
              <h1 className="text-5xl font-bold leading-tight mt-[-100px] text-white">
                Choose <span className="text-orange-500">CodeKid</span> Powered School for Your Child
              </h1>
              <p className="text-lg text-orange-100 font-bold">
                Unlock a new world of opportunities for your child with International Standard education, extra-curricular activities, and much more.
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="bg-orange-500 rounder-xl hover:bg-orange-600">
                  Find Schools Near You
                </Button>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Salute to Parents Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6 relative z-10"
                {...fadeIn}
              >
                <h2 className="text-4xl font-bold text-orange-950">Salute To <span className="text-orange-500">Parents</span></h2>
                <p className="text-lg text-orange-800">
                  Parents are the biggest contributors to their children&apos;s lives. From providing for the basic needs of their children to helping them be ready for life, parents do it all while expecting nothing but success for their children.
                </p>
                <p className="text-lg text-orange-800">
                  The latest film from CodeKid is a tribute to all parents and caregivers, who in their own ways make numerous sacrifices to see their children grow up happy and successful.
                </p>
                <Button variant="outline" size="lg" className="bg-white hover:bg-orange-50 text-orange-500 border-orange-500">
                  <Play className="mr-2 h-4 w-4" /> Watch Video
                </Button>
              </motion.div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=800"
                  alt="Parent and child"
                  width={800}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* International Standard Section */}
        <section className="py-20 bg-orange-100">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Image
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800"
                alt="Student studying"
                width={800}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <motion.div 
                className="space-y-6"
                {...fadeIn}
              >
                <h2 className="text-4xl font-bold text-orange-950">
                  International Standard Education that&apos;s at Par with the Latest Trends
                </h2>
                <p className="text-lg text-orange-800">
                  At a CodeKid powered school, your child receives international standard education through our deeply researched curriculum. Prepare them to excel in the changing world of today and be ready for challenges of tomorrow.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gamified Learning Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                {...fadeIn}
              >
                <h2 className="text-4xl font-bold text-orange-950">
                  A Gamified Learning Experience at Home
                </h2>
                <p className="text-lg text-orange-800">
                  Studying doesn&apos;t have to be a boring task. And it shouldn&apos;t be just restricted to school. With our CodeKid Student App, your child can learn through interesting gamified modules at home.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Download App
                </Button>
              </motion.div>
              <Image
                src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?auto=format&fit=crop&w=800"
                alt="Student with laptop"
                width={800}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-[100px] flex justify-center text-orange-950">
            <span className="text-orange-500">Advantages</span> Your Child Deserves
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-orange-100 hover:border-orange-200 h-[250px] transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <feature.icon className="w-10 h-10 text-orange-500" />
                    <h3 className="text-xl font-semibold text-orange-950">{feature.title}</h3>
                    <p className="text-orange-800">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-orange-100 text-orange-500 py-20">
          <motion.div 
            className="container mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="space-y-4"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <stat.icon className="w-12 h-12 text-orange-500 mx-auto" />
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="text-xl">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold text-orange-950">
                What Happy Parents Say <span className="text-orange-500">About Us</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="relative aspect-video bg-orange-900 rounded-2xl overflow-hidden">
                <ReactPlayer
                  url={testimonials[0].videoUrl}
                  width="100%"
                  height="100%"
                  playing={isPlaying}
                  onEnded={() => setIsPlaying(false)}
                />
              </div>

              <div className="space-y-6">
                <div className="text-6xl text-orange-500">&quot;</div>
                <p className="text-lg text-orange-800">
                  {testimonials[0].content}
                </p>
                <div className="text-6xl text-orange-500 text-right">&quot;</div>
                <div className="pt-4">
                  <h3 className="text-xl mt-[-50px] font-semibold text-orange-950">
                    {testimonials[0].name}
                  </h3>
                  <p className="text-orange-500">
                    Parents, {testimonials[0].school}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}

const features = [
  {
    icon: GraduationCap,
    title: "Quality education",
    description: "Never compromise on the quality of education your child receives. At a CodeKid powered school, they only get the best learning experience and outcomes."
  },
  {
    icon: Users,
    title: "CodeKid Academy Certified teachers",
    description: "Our teachers are extensively trained and certified with experience in enabling students' success."
  },
  {
    icon: BookOpenCheck,
    title: "Deeply researched curriculum",
    description: "Our curriculum, widely acclaimed, is deeply-researched and practical in approach."
  },
  {
    icon: Globe,
    title: "Practical programs",
    description: "We also offer our trademark English curriculum (ELGA - English Language & General Awareness), as well as specific coding programs through our Coding & Computational Skills (CCS) program."
  },
  {
    icon: Laptop,
    title: "Modern infrastructure",
    description: "Our partner schools are equipped with the best-in-class facilities that you are looking for in your child's school."
  },
  {
    icon: Gamepad,
    title: "Dedicated student app",
    description: "With our dedicated CodeKid Student App that has gamified modules, learning never stops for your child, be it at school or even at home."
  },
  {
    icon: Award,
    title: "A reputed brand",
    description: "CodeKid is one of India's most trusted brands in the education sector, with a presence in over 400+ cities across the country."
  },
  {
    icon: Trophy,
    title: "National-level events",
    description: "Our exclusive events and championships provide students opportunities to compete at a national level to their all-round growth."
  },
  {
    icon: School,
    title: "LEAD Student Connect program",
    description: "The program allows students to connect with other students across the country, learn new skills, and build a professional network."
  }
];

const stats = [
  {
    icon: MapPin,
    value: "400+",
    label: "CITIES"
  },
  {
    icon: Building2,
    value: "8,000+",
    label: "SCHOOLS"
  },
  {
    icon: Users2,
    value: "35 Lakh+",
    label: "STUDENTS"
  }
];
