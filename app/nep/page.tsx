"use client"

import { motion } from "framer-motion"
import { ChevronDown, BookOpen, GraduationCap, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center p-4 overflow-hidden">
          <Image src="/bg4.png" alt="Background" layout="fill" objectFit="cover" className="absolute inset-0" />
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
                document.getElementById("key-highlights")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Explore Features
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
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
                <h3 className="text-xl font-semibold">Click to get a Free PDF about National Education Policy 2020</h3>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={() =>
                    window.open(
                      "https://questplus.in/wp-content/uploads/2024/06/NEP-2020-National-Education-Policy-2020.pdf",
                      "_blank",
                    )
                  }
                >
                  National Education Policy 2020
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
