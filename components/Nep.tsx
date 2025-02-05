import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, BookOpen, Brain, Laptop } from "lucide-react"
import Link from "next/link"

export default function NEP2020Spotlight() {
  return (
    <Card className="w-full max-w-3xl mb-[100px] mx-auto overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-orange-300 to-orange-600 text-white p-6">
        <CardTitle className="text-2xl md:text-3xl font-bold text-center">
          Your School&apos;s Gateway to NEP 2020 Success
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 text-center md:text-left">NEP 2020 Alignment</h3>
            <div className="flex justify-center">
              <svg className="w-full max-w-xs" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="150" r="145" stroke="#4B5563" strokeWidth="2" />
                <circle cx="150" cy="150" r="100" fill="#60A5FA" fillOpacity="0.2" />
                <circle cx="150" cy="70" r="45" fill="#818CF8" />
                <circle cx="230" cy="190" r="45" fill="#34D399" />
                <circle cx="70" cy="190" r="45" fill="#F472B6" />
                <text x="150" y="60" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">Critical</text>
                <text x="150" y="75" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">Thinking</text>
                <text x="230" y="190" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">Creativity</text>
                <text x="70" y="185" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">Digital</text>
                <text x="70" y="200" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">Literacy</text>
                <text x="150" y="150" fill="#4B5563" fontSize="16" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">Coding</text>
              </svg>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 text-center md:text-left">Key Features</h3>
            <ul className="space-y-4">
              <li className="flex items-start shadow-xl hover:shadow-2xl bg-blue-50 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Integrated Curriculum:</span>
                  <p className="text-sm text-gray-600 mt-1">Coding seamlessly integrated into math and science syllabi</p>
                </div>
              </li>
              <li className="flex items-start shadow-xl hover:shadow-2xl bg-purple-50 p-3 rounded-lg">
                <Brain className="w-6 h-6 mr-3 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Teacher Empowerment:</span>
                  <p className="text-sm text-gray-600 mt-1">Comprehensive training for experiential learning techniques</p>
                </div>
              </li>
              <li className="flex items-start bg-green-50 p-3 shadow-xl hover:shadow-2xl rounded-lg">
                <Laptop className="w-6 h-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Skill Certification:</span>
                  <p className="text-sm text-gray-600 mt-1">Recognized certification for skill-based progress tracking</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 p-6 flex justify-center">
        <Link href="https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf"><Button className="w-full sm:w-auto" size="lg">
          <Download className="w-5 h-5 mr-2" />
          Download Free NEP Compliance Checklist
        </Button></Link>
      </CardFooter>
    </Card>
  )
}
