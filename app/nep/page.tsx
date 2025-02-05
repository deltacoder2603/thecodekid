"use client";

import { motion } from "framer-motion";
import { ChevronDown, BookOpen, GraduationCap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center p-4 overflow-hidden">
          <Image
            src="/bg4.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center text-orange-300 px-6 max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Summary of the <span className="text-orange-500">NEP 2020</span>
            </h1>
            <p className="text-xl md:text-xl mx-auto mb-8 leading-relaxed">
              NEP 2020 introduces several key changes in the education system. It promotes strong foundational education
              for children, emphasizing the importance of foundational literacy and numeracy to ensure that every child
              achieves basic literacy and numeracy skills during their formative years.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white border-none"
              onClick={() => {
                document.getElementById("key-highlights")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Features
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </section>
        
        {/* Key Highlights Section */}
        <section id="key-highlights" className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
              Key highlights of the <span className="text-orange-400">NEP 2020</span>
            </h2>
            <p className="text-black text-center mb-12 max-w-3xl mx-auto">
              The NEP 2020 sets forth a vision for transforming the Indian education system, focusing on quality,
              accessibility, equity, and lifelong learning.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyHighlights.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full bg-white/10 hover:bg-white/[0.15] hover:shadow-xl transition-colors border-orange-500/20">
                    <div className="flex items-center mb-4">
                      {feature.icon}
                      <h3 className="text-xl font-semibold text-orange-400 ml-3">{feature.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {feature.points.map((point, i) => (
                        <li key={i} className="text-black flex items-start">
                          <span className="text-orange-400 mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        
        {/* Teacher Development Section */}
        <section className="py-20 px-4 bg-orange-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
              Teacher Training and <span className="text-orange-500">Professional Development</span> Framework
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teacherDev.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full bg-white hover:bg-orange-50 transition-colors border-orange-500/20">
                    <div className="text-4xl font-bold text-orange-400 mb-4">{String(index + 1).padStart(2, "0")}</div>
                    <h3 className="text-xl font-semibold text-orange-500 mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i} className="text-black flex items-start">
                          <span className="text-orange-400 mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        
        {/* Summary Section */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Summary of the <span className="text-orange-500">NEP 2020</span>
              </h2>
              <div className="flex justify-center">
                <div className="w-32 h-2 bg-yellow-200 rounded-full opacity-60"></div>
              </div>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                NEP 2020 introduces several key changes in the education system. It promotes strong foundational
                education for children, emphasizing the importance of foundational literacy and numeracy to ensure that
                every child achieves basic literacy and numeracy skills during their formative years. NEP 2020 also
                proposes a flexible and multidisciplinary curriculum, allowing schools to include a wide range of
                subjects, encouraging critical thinking and creativity in its students.
              </p>

              <p className="text-lg">
                Emphasis is also laid on the integration of technology in education, along with reforms in professional
                development for teachers. Overall, the NEP 2020 aims to transform the Indian education system by
                empowering schools with 21st-century teaching-learning solutions, helping teachers foster the holistic
                development and academic growth of their students, preparing them to be leaders in the future.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg">
                Reference Link:{" "}
                <Link
                  href="https://www.education.gov.in/"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.education.gov.in/
                </Link>
              </p>

              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold mb-[20px]">Click to get a Free PDF about National Education Policy 2020</h3>
                <Link href="https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf"><Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  National Education Policy 2020
                </Button></Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

const keyHighlights = [
  {
    title: "Early Childhood Care and Education",
    icon: <GraduationCap className="w-6 h-6 text-orange-400" />,
    points: [
      "Ensures universal access to high-quality education at an early stage",
      "Fosters creativity and teamwork in students",
      "Facilitate students' physical, socio-emotional and cognitive development",
    ],
  },
  {
    title: "School Education Structure",
    icon: <BookOpen className="w-6 h-6 text-orange-400" />,
    points: [
      "5+3+3+4 curricular structure",
      "Pre-primary education brought under formal education",
      "Reforms in the school structure as per teaching-learning requirements",
    ],
  },
  {
    title: "Multidisciplinary and Holistic Education",
    icon: <Brain className="w-6 h-6 text-orange-400" />,
    points: [
      "Experiential Learning in Classrooms",
      "Integration of subject knowledge across streams",
      "Emphasis on concept clarity over rote learning",
    ],
  },
  {
    title: "Technology in Education",
    points: [
      "Promote digital literacy",
      "Integrate EdTech tools in classroom learning",
      "Blended teaching-learning approaches",
    ],
  },
  {
    title: "Flexibility in Curriculum",
    points: [
      "Offers students a choice in subjects",
      "'Less is more' approach highlighting important concepts",
      "Includes subjects based on interests",
    ],
  },
  {
    title: "Vocational Education",
    points: [
      "Gain practical experience in chosen career path",
      "Attain employment opportunities",
      "Vocational courses to be made available online",
    ],
  },
  {
    title: "Formative Evaluation and Testing",
    points: [
      "Project based evaluation",
      "Progress card highlighting overall growth",
      "Testing based on core concept knowledge",
    ],
  },
  {
    title: "Language Policy",
    points: [
      "Emphasizes the importance of local language in foundational education",
      "Local medium of instruction till grade 5",
      "Inclusion of at least 2 languages in the curriculum",
    ],
  },
  {
    title: "Inclusive Education",
    points: [
      "Equal learning opportunities",
      "Infrastructure support for schools",
      "Accommodates diverse learning needs",
    ],
  },
]

const teacherDev = [
  {
    title: "Continuous Professional Development",
    points: ["Helps enhance teaching approaches", "Training programs and workshops for", "Minimum CPD of 50 hours"],
  },
  {
    title: "Focus on Experiential Learning",
    points: [
      "Teachers create hands-on learning opportunities",
      "Helps teachers develop 21st century skills in students",
      "Promote practical teaching in the classroom",
    ],
  },
  {
    title: "Teaching with Technology",
    points: [
      "Integrating technology with teaching methods",
      "Suggest new approaches to teaching in the classroom",
      "Using technology as a teaching aid",
    ],
  },
  {
    title: "Integrated Training Programs",
    points: ["4 year B.Ed program", "Teacher Eligibility Tests (TETs)", "teaching skills"],
  },
  {
    title: "Professional Ethics",
    points: [
      "Uphold professional integrity",
      "Respectful relationship with students",
      "Follow educational ethics in the classroom",
    ],
  },
  {
    title: "Assessment Reforms and Teacher Autonomy",
    points: [
      "Teachers should apply unique assessment techniques",
      "Freedom to implement quality teaching approaches",
      "Competency-based assessments",
    ],
  },
]

