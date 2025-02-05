import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from './ui/button';
import { Code2, GraduationCap, Trophy, Users, LucideIcon } from 'lucide-react';

interface CardData {
  color: string;
  title: string;
  link: string;
  detail: string;
  features: string[];
  button: string;
  icon: LucideIcon;
  stats: string;
}

const cardData: CardData[] = [
  { 
    color: 'bg-orange-50', 
    title: 'Coding Clubs', 
    link: 'https://ui-layout.com/components/image-mousetrail', 
    detail: "Student-led innovation hubs with weekly projects, hackathons, and peer learning.",
    features: ["Weekly coding sessions", "Project showcases", "Peer mentoring", "Industry experts"],
    button: "Start a Club",
    icon: Code2,
    stats: "500+ active clubs"
  },
  { 
    color: 'bg-orange-50', 
    title: 'Live Online Classes', 
    link: 'https://ui-layout.com/components/progressive-carousel', 
    detail: "Grade 1–12: From Scratch to Python & AI, with bilingual support.",
    features: ["Live instruction", "Interactive coding", "1:1 mentoring", "Project-based"],
    button: "View Curriculum",
    icon: GraduationCap,
    stats: "10k+ students"
  },
  { 
    color: 'bg-orange-50', 
    title: 'Hackathons', 
    link: 'https://ui-layout.com/components/drawer', 
    detail: "Quarterly tech competitions with themes like Smart Cities & Health Tech.",
    features: ["24-hour events", "Expert judging", "Cool prizes", "Team building"],
    button: "Host a Hackathon",
    icon: Users,
    stats: "100+ events"
  },
  { 
    color: 'bg-orange-50', 
    title: 'Olympiad Prep', 
    link: 'https://ui-layout.com/components/globe', 
    detail: "Win national rankings with expert-led workshops and mock tests.",
    features: ["Mock tests", "Problem solving", "Competition prep", "Rankings"],
    button: "Train Students",
    icon: Trophy,
    stats: "90% success rate"
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const App: React.FC = () => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-7xl w-full text-center">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Our Programs Build{' '}
            <span className="text-orange-500">Future-Ready Students</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Empowering the next generation with cutting-edge technology education and hands-on experience
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {cardData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className={`${item.color} rounded-xl p-6 lg:p-8 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full w-full`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <span className="text-sm font-medium text-gray-900/80 px-3 py-1 rounded-full">
                    {item.stats}
                  </span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-orange-500 mb-3">
                  {item.title}
                </h2>
                
                <p className="text-gray-700 mb-6 flex-grow">
                  {item.detail}
                </p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {item.features.map((feature, idx) => (
                      <li 
                        key={idx}
                        className="text-sm text-gray-700 bg-white px-3 py-1.5 rounded-xl"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full bg-orange-400 text-gray-900 hover:bg-orange-500 transition-colors mt-auto"
                  onClick={handleButtonClick}
                >
                  {item.button}
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </main>
  );
};

export default App;