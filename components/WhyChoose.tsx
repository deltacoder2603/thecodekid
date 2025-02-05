import { HoverEffect } from "./ui/card-hover-effect";

export function WhyChoose() {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-3xl text-center pt-[50px] font-bold">
        Why Schools Partner With{" "}
        <span className="text-3xl tracking-tighter text-orange-500 font-bold dark:text-white">
          TheCodeKid
        </span>
      </p>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex justify-center">
        <div className="w-full max-w-6xl">
          {/* Ensuring Cards Are Centered and Well-Spaced */}
          <div className="flex flex-wrap justify-center gap-16">
            <HoverEffect items={projects} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "NEP 2020 Aligned",
    description: "Grade-wise coding curriculum mapped to National Education Policy goals.",
  },
  {
    title: "Live & Interactive Classes",
    description: "Bilingual (English/Hindi) sessions by industry experts, integrated with academics.",
  },
  {
    title: "Competition Ready",
    description: "Hackathon planning, Olympiad prep, and national-level mentorship.",
  },
  {
    title: "For Schools, By Innovators",
    description: "Easy onboarding, teacher training, and 24/7 support.",
  },
];
