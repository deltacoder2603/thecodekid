"use client"

import { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { FaBookOpen, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const features = [
  {
    icon: <FaBookOpen className="text-3xl text-yellow-500" />,
    title: "Simplify teaching",
    description: "Ready-to-use resources to make teaching easier."
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-red-500" />,
    title: "Comprehensive Training",
    description: "Become excellent with our structured training program."
  },
  {
    icon: <FaUsers className="text-3xl text-yellow-500" />,
    title: "Join 50K+ Teachers",
    description: "Be a part of the CodeKid Super Teachers community."
  }
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Page() {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [playing, setPlaying] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-[700px] sm:h-[600px] md:h-[720px] mt-[50px] md:mt-[70px]">
        <Image
          src="/bg2.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-transparent" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 container mx-auto px-4 py-16 sm:py-24"
      >
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-950 mb-6 leading-tight">
              Transform
              <span className="text-orange-500"> teaching </span>
              in your school
            </h1>
            <p className="text-base sm:text-lg text-orange-800 mb-6 leading-relaxed">
              CodeKid provides a Teacher Capability System which supports teachers with:
            </p>
            <ul className="list-disc list-inside text-orange-800 mb-6 space-y-2 text-sm sm:text-base">
              <li>Latest ed-tech solutions to improve classroom experience and save time</li>
              <li>
                Ready-made teaching resources, feedback, training sessions, and improvement toolkits by our
                CodeKid Academic experts
              </li>
              <li>Access to a network of 50K+ excellent teachers across India</li>
            </ul>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white group transition-all duration-300"
            >
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Placeholder for Future Image/Visuals */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full flex justify-center md:justify-end"
          >
            {/* Add an image or illustration here if needed */}
          </motion.div>
        </div>
      </motion.div>
    </section>

        {/* Stats Section */}
        <motion.section
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={stagger}
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "400+", label: "CITIES" },
                { number: "8,000+", label: "SCHOOLS" },
                { number: "50,000+", label: "TEACHERS" },
                { number: "35 Lakh+", label: "STUDENTS" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="text-center p-8 rounded-2xl bg-orange-50 hover:bg-orange-100 transition-colors duration-300"
                >
                  <span className="text-4xl font-bold text-orange-500 block mb-2">{stat.number}</span>
                  <p className="text-lg text-orange-950">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Super Teacher Section */}
        <section className="py-24 bg-orange-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl lg:text-4xl font-bold text-orange-950 mb-6">
                  Empowering Every Teacher To Become
                  <span className="text-orange-500"> A Super Teacher</span>
                </h2>
                <p className="text-lg text-orange-800 mb-6">
                  At CodeKid Partner Schools, every teacher is skilled and certified
                </p>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Know More
                </Button>
              </motion.div>
              <div className="text-white py-12 px-6 md:px-16 lg:px-32 flex flex-col items-center text-center">
                <div className="flex flex-col md:flex-row gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex-1 bg-white p-6 w-[200px] rounded-2xl hover:shadow-2xl shadow-xl"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <div className="flex items-center justify-center mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                      <p className="text-black">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-b bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-6xl mx-auto"
            >
              <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-orange-950">How does LEAD make teachers a </span>
                <span className="text-orange-500">Super Teacher?</span>
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Simplify teaching for teachers",
                    description:
                      "Readily available teaching tools and helpful resources to make teaching easy and effective.",
                    image:
                      "/fet1.png",
                  },
                  {
                    title: "Make every teacher, an excellent teacher",
                    description:
                      "Teachers are continuously trained & mentored by our dedicated academic experts through training workshops and feedback sessions",
                    image:
                      "/fet2.png",
                  },
                  {
                    title: "Access to network of 50K+ excellent teachers",
                    description:
                      "Connect, learn & share best practices by joining the largest network of 50,000+ CodeKid Certified Excellent teachers and expert faculty",
                    image:
                      "/fet3.png",
                  },
                ].map((feature, index) => (
                  <motion.div key={index} variants={fadeIn} whileHover={{ y: -10 }} className="group">
                    <Card className="h-full bg-white/50 backdrop-blur-sm border-2 border-orange-100 hover:border-orange-300 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="aspect-video relative mb-6">
                          <Image
                            src={feature.image || "/placeholder.svg"}
                            alt={feature.title}
                            width={400}
                            height={225}
                            className="rounded-lg"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-orange-950 mb-3">{feature.title}</h3>
                        <p className="text-base text-orange-800 leading-relaxed mb-4">{feature.description}</p>
                        <Button variant="ghost" className="group-hover:text-orange-500 transition-colors">
                          Know More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 bg-orange-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <motion.div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-orange-950">What our Super Teachers Say </span>
                  <span className="text-orange-500">About Us</span>
                </h2>
              </motion.div>
              <motion.div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video relative">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=tlVzYKBvfH4"
                    playing={playing}
                    controls
                    width="100%"
                    height="100%"
                    className="rounded-2xl"
                  />
                  {!playing && (
                    <motion.div whileHover={{ scale: 1.1 }} className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Button
                        size="lg"
                        className="rounded-full w-16 h-16 bg-orange-500 hover:bg-orange-600"
                        onClick={() => setPlaying(true)}
                      >
                        <Play className="h-8 w-8 text-white" />
                      </Button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
              <motion.div className="mt-8 text-center">
                <p className="text-lg text-orange-800 mb-3">
                  &quot; Ever since we &quot;ve started using CodeKid techniques, our students have started speaking English more fluently. &quot;
                </p>
                <p className="text-base font-semibold text-orange-950">Jessica Jones</p>
                <p className="text-sm text-orange-700">BCTF Teacher,Stanford School,Delhi</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
