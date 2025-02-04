"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Users, Trophy, School, Play } from 'lucide-react';
import ReactPlayer from 'react-player';

const stats = [
  {
    icon: Users,
    value: 10000,
    label: 'Students Trained',
    suffix: '+',
  },
  {
    icon: Trophy,
    value: 500,
    label: 'Hackathon Projects',
    suffix: '+',
  },
  {
    icon: School,
    value: 95,
    label: 'Schools Renew Yearly',
    suffix: '%',
  },
];

const projects = [
  {
    title: 'AI Weather Predictor',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=500',
    author: 'Team Storm',
  },
  {
    title: 'Smart Garden Monitor',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=500',
    author: 'Green Thumbs',
  },
  {
    title: 'Educational Game App',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500',
    author: 'Learning Lions',
  },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-4xl font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function ImpactSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          See How We're <span className='text-orange-500̀'>Transforming Schools</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Stats */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-2 text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>

            {/* Project Gallery */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Student Projects</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <Card key={index} className="group overflow-hidden">
                    <AspectRatio ratio={4 / 3} className="bg-muted relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center p-2">
                          <p className="font-semibold">{project.title}</p>
                          <p className="text-sm text-gray-300">{project.author}</p>
                        </div>
                      </div>
                    </AspectRatio>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Video Testimonial */}
          <div className="lg:pl-8">
            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9} className="bg-muted relative">
                {/* Thumbnail */}
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000"
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative group cursor-pointer"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/90 group-hover:bg-primary transition-colors duration-300 flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                    <div className="absolute inset-0 rounded-full animate-ping bg-primary/30" />
                  </button>
                </div>

                {/* Video Player */}
                {isPlaying && (
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=DIFCMtzg7xg"
                    width="100%"
                    height="100%"
                    playing={isPlaying}
                    controls={true}
                    className="absolute inset-0"
                  />
                )}
              </AspectRatio>
              <div className="p-6">
                <blockquote className="text-lg italic text-muted-foreground">
                  "Thanks to this program, our students built an AI model to predict crop yields! 
                  The impact on their understanding of technology and real-world applications has been incredible."
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold">Dr. Sarah Mitchell</p>
                  <p className="text-sm text-muted-foreground">Principal, Tech Academy High School</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
