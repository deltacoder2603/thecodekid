import Link from "next/link"
import Image from "next/image"
import type { Event } from "@/types/Event"
import type React from "react"

interface GridEventCardProps {
  event: Event
}

const GridEventCard: React.FC<GridEventCardProps> = ({ event }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 sm:p-5 bg-gradient-to-b from-orange-50 to-white">
        <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2 sm:mb-3 group-hover:text-orange-700 transition-colors">
          {event.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base line-clamp-3 mb-3 sm:mb-4">{event.description}</p>
        <Link
          href={event.url}
          className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          Learn More →
        </Link>
      </div>
    </div>
  )
}

export default GridEventCard
