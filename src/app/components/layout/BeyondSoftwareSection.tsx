"use client";

import { useState } from "react";
// ✅ Lucide Arrow imports removed
import {
  Monitor,
  Map,
  Users,
  Bot,
  BarChart,
} from "lucide-react";
import Link from "next/link";
// ✅ Next.js Image component imported
import Image from "next/image";

// Data for the vertical slider cards
const cardData = [
  {
    icon: Monitor,
    iconColor: "#E97D2A",
    circleColor: "#FDF4ED",
    title: "CX | UX | UI Audits",
    subtitle:
      "Comprehensive analysis for travel websites and mobile apps to enhance user experience.",
  },
  {
    icon: Map,
    iconColor: "#0B99FF",
    circleColor: "#EBF6FF",
    title: "CX Strategy & Journey Mapping",
    subtitle:
      "Strategic customer experience planning tailored for travel agencies.",
  },
  {
    icon: Users,
    iconColor: "#3345B6",
    circleColor: "#ECEEFF",
    title: "Support & Account Management",
    subtitle:
      "Dedicated teams providing expert guidance and ensuring your success.",
  },
  {
    icon: Bot,
    iconColor: "#43A047",
    circleColor: "#EDF6EE",
    title: "AI & Automation Services",
    subtitle:
      "Implementing intelligent solutions to streamline workflows and reduce costs.",
  },
  {
    icon: BarChart,
    iconColor: "#DC1A0C",
    circleColor: "#FBE9E7",
    title: "Data & Analytics Consulting",
    subtitle:
      "Leveraging data insights to drive informed decisions and optimize performance.",
  },
  {
    icon: Monitor,
    iconColor: "#E97D2A",
    circleColor: "#FDF4ED",
    title: "Implementation & Onboarding",
    subtitle:
      "Seamless integration of our software into your existing ecosystem.",
  },
];

// Individual Card Component
const SliderCard = ({
  card,
}: {
  card: (typeof cardData)[0];
}) => (
  <div
    className={`bg-white rounded-2xl p-6 flex items-center gap-5 w-full`}
  >
    <div
      className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
      style={{ backgroundColor: card.circleColor }}
    >
      <card.icon className="w-8 h-8" style={{ color: card.iconColor }} />
    </div>
    <div>
      <h3 className="font-poppins font-bold text-2xl lg:text-[28px] text-[#0D1230]">
        {card.title}
      </h3>
      <p className="font-normal text-base text-[#0D1230] mt-1" style={{ fontFamily: 'var(--font-roboto)' }}>
        {card.subtitle}
      </p>
    </div>
  </div>
);

export function BeyondSoftwareSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // We can scroll until the last group of 4 cards is visible
    if (currentIndex < cardData.length - 4) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // ✅ Adjusted card height for more accurate scrolling calculation
  const CARD_HEIGHT = 144; // (Card height + gap)

  return (
    <section className="bg-[#EFF1FB] min-h-[1000px] w-full flex items-center py-24 px-6 lg:px-40">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="max-w-xl">
            <h2 className="font-poppins text-5xl md:text-[65px] font-normal text-black leading-tight">
              Beyond Software
            </h2>
            {/* ✅ Title width constrained to ensure two-line display */}
            <h2 className="font-poppins text-6xl md:text-[65px] font-bold text-[#293893] leading-tight mt-1">
              We Power Travel Operations
            </h2>
            <p className="font-poppins text-xl md:text-[24px] font-normal mt-8 text-gray-700" style={{ fontFamily: 'var(--font-roboto)' }}>
              Boost your travel capabilities with services designed to optimize
              both digital and offline experiences.
            </p>
            <div className="pt-8">
              <Link
                href="/pilot"
                 // ✅ Removed shadow-lg from the button
                 className="inline-block bg-active-blue text-white text-base font-medium px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Vertical Slider */}
        <div className="lg:w-1/2 flex items-center justify-center lg:justify-end gap-6 w-full mt-12 lg:mt-0">
          {/* Vertical Slider Implementation */}
          <div 
            // ✅ Container height increased to show 4.5 cards
            className="w-[80%] max-w-md h-[660px] overflow-hidden relative"
            style={{ 
              // ✅ Gradient mask adjusted for a later fade-out
              WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateY(-${currentIndex * CARD_HEIGHT}px)`,
              }}
            >
              <div className="flex flex-col gap-6">
                {cardData.map((card, index) => (
                  <SliderCard
                    key={index}
                    card={card}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Slider Arrows */}
          <div className="flex flex-col gap-4">
            {/* ✅ Button size reduced and shadows removed */}
            <button
              onClick={handlePrev}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:scale-100"
              disabled={currentIndex === 0}
            >
              {/* ✅ Replaced with custom SVG icon */}
              <Image src="/icons/uparrow.svg" alt="Up" width={24} height={24} />
            </button>
            <button
              onClick={handleNext}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:scale-100"
              disabled={currentIndex >= cardData.length - 4}
            >
              {/* ✅ Replaced with custom SVG icon */}
              <Image src="/icons/downarrow.svg" alt="Down" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
