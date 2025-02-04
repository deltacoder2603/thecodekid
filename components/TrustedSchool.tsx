import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { NumberTicker } from "./ui/number-ticker";

interface School {
  id: number;
  name: string;
  logo: string;
}

const schools: School[] = [
  { id: 1, name: "Sulochanadevi Singhania School", logo: "/schoollogo.png" },
  { id: 2, name: "Sunitidevi Singhania School", logo: "/schoollogo.png" },
  { id: 3, name: "Century Matriculation School", logo: "/schoollogo.png" },
  { id: 4, name: "DAV Collegiate School Lachipur", logo: "/schoollogo.png" },
  { id: 5, name: "Scholars Public School", logo: "/schoollogo.png" },
];

export default function TrustedSchools() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2); // Half of duplicated content
    }

    let interval: NodeJS.Timeout;
    if (width > 0) {
      interval = setInterval(() => {
        controls.start({ x: -width, transition: { duration: 12, ease: "linear" } })
          .then(() => controls.set({ x: 0 }));
      }, 12000); // Interval should match animation duration
    }

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [width, controls]);

  return (
    <div>
      <div>
        <p className='text-3xl pl-[50px] pt-[50px] font-bold'>
          Trusted by <NumberTicker
            value={250}
            className="whitespace-pre-wrap text-3xl tracking-tighter text-orange-500 font-bold dark:text-white"
          />+ Schools
        </p>
      </div>
      <div className="overflow-hidden ml-[50px] mr-[50px] bg-white py-10 relative">
        <motion.div
          ref={containerRef}
          className="flex space-x-6"
          animate={controls}
          onMouseEnter={() => controls.stop()} // Pause on hover
          onMouseLeave={() => controls.start({ x: -width, transition: { duration: 12, ease: "linear" } })}
          style={{ whiteSpace: "nowrap" }}
        >
          {[...schools, ...schools].map((school, index) => ( // Duplicate list for smooth loop
            <div
              key={`${school.id}-${index}`}
              className="w-64 h-48 p-6 bg-white shadow-lg rounded-lg text-center flex flex-col items-center justify-center"
            >
              <div className="relative w-40 h-20">
                <Image
                  src={school.logo}
                  alt={school.name}
                  fill
                  className="object-contain"
                  sizes="160px"
                  priority={index < 5} // Prioritize loading first set of images
                />
              </div>
              <p className="mt-4 font-semibold text-gray-700">{school.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
