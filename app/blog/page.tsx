import FeaturedEventCard from "@/components/FeaturedEventCard"
import Footer from "@/components/Footer"
import GridEventCard from "@/components/GridEventCard"
import Navbar from "@/components/Navbar"

export interface Event {
  id: number
  title: string
  description: string
  image: string
  url: string
}



const dummyEvents: Event[] = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    description:
      "Explore how artificial intelligence is reshaping the landscape of web development. From intelligent code completion to automated testing, discover the cutting-edge technologies that are revolutionizing the way we build websites and applications.",
    image: "/bg1.png",
    url: "#",
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    description:
      "Dive deep into the world of React Hooks and learn how to build more efficient and maintainable components. This comprehensive guide covers everything from useState and useEffect to custom hooks.",
    image: "/bg1.png",
    url: "#",
  },
  {
    id: 3,
    title: "The Rise of Jamstack",
    description:
      "Discover why Jamstack architecture is gaining popularity among developers and businesses alike. Learn about its benefits, use cases, and how it's changing the way we approach web development.",
    image: "/bg1.png",
    url: "#",
  },
  {
    id: 4,
    title: "Optimizing Web Performance",
    description:
      "Unlock the secrets to lightning-fast websites. This article covers essential techniques for improving load times, reducing server response times, and creating a smoother user experience.",
    image: "/bg1.png",
    url: "#",
  },
  {
    id: 5,
    title: "Designing for Accessibility",
    description:
      "Learn how to create websites that are truly inclusive. This guide covers WCAG guidelines, assistive technologies, and best practices for designing and developing accessible web experiences.",
    image: "/bg1.png",
    url: "#",
  },
  {
    id: 6,
    title: "The Power of GraphQL",
    description:
      "Explore how GraphQL is changing the way we think about APIs. From its flexible query language to its efficient data loading, discover why developers are falling in love with GraphQL.",
    image: "/bg1.png",
    url: "#",
  },
  {
    id: 7,
    title: "Mastering CSS Grid",
    description:
      "Take your layouts to the next level with CSS Grid. This comprehensive tutorial covers everything from basic grid concepts to advanced layout techniques that will transform your web designs.",
    image: "/bg1.png",
    url: "#",
  },
]

export default function BlogPage() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen mt-[70px] bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-orange-500">Our Blogs</h1>

        {/* Featured Event */}
        <div className="mb-16">
          <FeaturedEventCard event={dummyEvents[0]} />
        </div>

        {/* Grid Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyEvents.slice(1).map((event) => (
            <GridEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

