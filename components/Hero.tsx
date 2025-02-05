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
    // Add pt-16 to account for fixed navbar height
    <div className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden pt-16">
      {/* Background Media Container */}
      <div className="absolute inset-0 -z-10"> {/* Keep background behind everything */}
        <div className="relative w-full h-full">
          {/* Show video on larger screens */}
          <div className="hidden sm:block w-full h-full">
            <ReactPlayer
              url="/bg-video.mp4"
              playing
              loop
              muted
              width="100%"
              height="100%"
              className="!absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
              style={{
                minWidth: '100%',
                minHeight: '100%',
                width: 'auto',
                height: 'auto'
              }}
              config={{
                file: {
                  attributes: {
                    playsInline: true,
                    style: {
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: '0',
                      left: '0'
                    }
                  }
                }
              }}
            />
          </div>
          {/* Show image on smaller screens */}
          <img 
            src="/bgsmall.png" 
            alt="Background" 
            className="block sm:hidden w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      </div>

      {/* Content - Adjusted padding for better mobile spacing */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto py-8 sm:py-12">
        <div className={nunito.className}>
          <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Transform Your School into a{' '}
            <br className="hidden sm:block" />
            <span className="block sm:inline sm:pl-0 lg:pl-8 mt-2 sm:mt-0">
              Tech Innovation Hub
            </span>
          </h1>
        </div>
        
        <p className="text-lg sm:text-xl lg:text-2xl font-bold mt-4 sm:mt-6">
          What we offer:
        </p>
        
        <div className="mt-4">
          <MorphingText texts={texts} />
        </div>

        {/* CTA Buttons */}
        <div className="mt-[50px] sm:mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-orange-500 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:bg-orange-600 transition-colors text-sm sm:text-base">
            Schedule a Free Demo →
          </button>
          <button className="bg-gray-800 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
            Download NEP 2020 Coding Guide
          </button>
        </div>
      </div>
    </div>
  );
}
