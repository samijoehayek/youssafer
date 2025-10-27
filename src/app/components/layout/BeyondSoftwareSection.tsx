"use client";

import { useState, useRef } from "react";
import {
  Monitor,
  Map,
  Users,
  Bot,
  BarChart,
} from "lucide-react";
import Link from "next/link";
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
    className={`bg-white rounded-2xl p-6 flex items-center gap-5 w-full flex-shrink-0`}
  >
    <div
      className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
      style={{ backgroundColor: card.circleColor }}
    >
      <card.icon className="w-8 h-8" style={{ color: card.iconColor }} />
    </div>
    <div>
      <h3 className="font-poppins font-bold text-xl lg:text-[28px] text-[#0D1230]">
        {card.title}
      </h3>
      <p className="font-normal text-sm lg:text-base text-[#0D1230] mt-1" style={{ fontFamily: 'var(--font-roboto)' }}>
        {card.subtitle}
      </p>
    </div>
  </div>
);

export function BeyondSoftwareSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleNext = () => {
    if (currentIndex < cardData.length - 4) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const CARD_HEIGHT = 144;

  // Touch/Mouse event handlers for mobile scrolling
  const handleTouchStart = (e: React.TouchEvent) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartY(e.touches[0].clientY);
      setScrollTop(scrollContainerRef.current.scrollTop);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const currentY = e.touches[0].clientY;
    const diff = startY - currentY;
    scrollContainerRef.current.scrollTop = scrollTop + diff;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="bg-[#EFF1FB] min-h-[1000px] w-full flex items-center py-24 px-6 lg:px-40">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="max-w-xl">
            <h2 className="font-poppins text-[28px] md:text-5xl lg:text-[65px] font-normal text-black leading-tight">
              Beyond Software
            </h2>
            <h2 className="font-poppins text-[28px] md:text-5xl lg:text-[65px] font-bold text-[#293893] leading-tight mt-1">
              We Power Travel Operations
            </h2>
            <p className="text-[16px] md:text-xl lg:text-[24px] font-normal mt-6 lg:mt-8 text-gray-700" style={{ fontFamily: 'var(--font-roboto)' }}>
              Boost your travel capabilities with services designed to optimize
              both digital and offline experiences.
            </p>
            <div className="pt-6 lg:pt-8">
              <Link
                href="/pilot"
                className="inline-block bg-active-blue text-white text-sm md:text-base font-medium px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Vertical Slider (Desktop) / Touch Scroll (Mobile) */}
        <div className="lg:w-1/2 flex items-center justify-center lg:justify-end gap-6 w-full mt-12 lg:mt-0">
          {/* Mobile: Touch scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="w-full lg:w-[80%] max-w-md h-[500px] lg:h-[660px] overflow-y-auto lg:overflow-hidden relative scrollbar-hide gradient-mask-desktop"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Desktop: Animated transform */}
            <div
              className="lg:absolute lg:top-0 lg:left-0 lg:right-0 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateY(-${currentIndex * CARD_HEIGHT}px)`,
              }}
            >
              <div className="flex flex-col gap-4 lg:gap-6">
                {cardData.map((card, index) => (
                  <SliderCard
                    key={index}
                    card={card}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Slider Arrows - Hidden on mobile */}
          <div className="hidden lg:flex flex-col gap-4">
            <button
              onClick={handlePrev}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:scale-100"
              disabled={currentIndex === 0}
            >
              <Image src="/icons/uparrow.svg" alt="Up" width={24} height={24} />
            </button>
            <button
              onClick={handleNext}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:scale-100"
              disabled={currentIndex >= cardData.length - 4}
            >
              <Image src="/icons/downarrow.svg" alt="Down" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Styles for scrollbar hiding and gradient mask */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (min-width: 1024px) {
          .gradient-mask-desktop {
            -webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
            mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
          }
        }
      `}</style>
    </section>
  );
}