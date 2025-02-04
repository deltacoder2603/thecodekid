"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import TrustedSchools from "@/components/TrustedSchool";
import { WhyChoose } from "@/components/WhyChoose";
import Index from "@/components/FeaturedPrograms";
import { ImpactSection } from "@/components/ImpactProof";
import NEP2020Spotlight from "@/components/Nep";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="h-screen flex items-center justify-center text-white">Loading...</div>}>
        <Hero />
      </Suspense>
      <TrustedSchools />
      <WhyChoose />
      <Index />
      <Suspense fallback={<div className="h-screen flex items-center justify-center text-white">Loading...</div>}>
        <ImpactSection />
      </Suspense>
      <NEP2020Spotlight />
      <Form id="contact-form" />
      <Footer />
    </>
  );
}
