"use client";
import ReactPlayer from 'react-player';
import { MorphingText } from './ui/morphing-text';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] });

export default function Hero() {
  const texts = [
    "Coding Clubs",
    "Live Classes",
    "Hackathons",
    "Olympiad Support",
  ];

  return (
    <div className="relative w-full h-screen flex items-center mt-[20px] justify-center text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <ReactPlayer
          url="/bg-video.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          config={{ file: { attributes: { playsInline: true } } }}
        />
        <div className="absolute top-0 left-0 w-full h-[770px] bg-black opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className={nunito.className}>
          <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Transform Your School into a <br className="hidden sm:block" />
            <span className="sm:pl-0 lg:pl-[100px]">Tech Innovation Hub</span>
          </h1>
        </div>
        <p className="text-xl sm:text-2xl font-bold mt-4">What we offer:</p>
        <div className="mt-4">
          <MorphingText texts={texts} />
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition-colors">
            Schedule a Free Demo →
          </button>
          <button className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
            Download NEP 2020 Coding Guide
          </button>
        </div>
      </div>
    </div>
  );
}