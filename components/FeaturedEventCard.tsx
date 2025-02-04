import Link from "next/link"
import Image from "next/image"
import type { Event } from "@/types/Event"
import type React from "react"

interface FeaturedEventCardProps {
  event: Event
}

const FeaturedEventCard: React.FC<FeaturedEventCardProps> = ({ event }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl mb-8">
      <div className="flex flex-col lg:flex-row">
        {/* Image container - Responsive height */}
        <div className="relative w-full lg:w-1/2 h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        {/* Content container - Better padding for mobile */}
        <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-orange-100 to-orange-50">
          <div className="mb-4 lg:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-4 group-hover:text-orange-700 transition-colors">
              {event.title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{event.description}</p>
          </div>
          <div className="flex justify-end">
            <Link
              href={event.url}
              className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-orange-600 text-white rounded-lg 
                       transform transition-all duration-300 hover:bg-orange-700 hover:shadow-md
                       active:scale-95 text-base sm:text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedEventCard
