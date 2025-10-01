"use client";

import { useState } from 'react';
import Image from 'next/image';
import { X, Check } from 'lucide-react';

// Data structure remains the same
const cardSets = [
  {
    negative: {
      bgColor: "#FFEBEB",
      icon: X,
      outerCircleColor: "#DC1A0C",
      innerCircleColor: "#FF3C38",
      title: "In the Eye of the Client",
      subtitle: "Our travel agent handles everything, we don’t need tech right now."
    },
    positive: {
      bgColor: "#E8F5E9",
      icon: Check,
      outerCircleColor: "#4CAF50",
      innerCircleColor: "#79C57C",
      title: "In the Eye of the Expert",
      subtitle: "Human support is great, but without smart tools and automation"
    }
  },
  {
    negative: {
      bgColor: "#FFEBEB",
      icon: X,
      outerCircleColor: "#DC1A0C",
      innerCircleColor: "#FF3C38",
      title: "Complex Approval Chains",
      subtitle: "Getting trip approvals takes too long and involves too much manual follow-up, delaying bookings."
    },
    positive: {
      bgColor: "#E8F5E9",
      icon: Check,
      outerCircleColor: "#4CAF50",
      innerCircleColor: "#79C57C",
      title: "Automated Workflows",
      subtitle: "Our system automates approval requests, sending notifications and reminders to ensure timely responses."
    }
  }
];

// ✅ Reusable Card Component - Refactored for new vertical layout
const InfoCard = ({
  bgColor,
  icon: Icon,
  outerCircleColor,
  innerCircleColor,
  title,
  subtitle,
}: {
  bgColor: string;
  icon: React.ElementType;
  outerCircleColor: string;
  innerCircleColor: string;
  title: string;
  subtitle: string;
}) => (
  // Main card container, no underglow
  <div className="w-full max-w-md">
    {/* ✅ Layout changed to flex-col for vertical stacking, items-start for left alignment */}
    <div className="rounded-2xl p-6 flex flex-col items-start text-left gap-4 w-full h-full" style={{ backgroundColor: bgColor }}>
      {/* Icon section */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute w-full h-full rounded-full" style={{ backgroundColor: outerCircleColor }}></div>
        <div className="absolute w-14 h-14 rounded-full" style={{ backgroundColor: innerCircleColor }}></div>
        <Icon className="w-8 h-8 text-white relative" />
      </div>
      {/* Text content - Now stacked vertically below icon */}
      <div>
        <h3 className="font-poppins font-bold text-xl text-gray-800">
          {title}
        </h3>
        <p className="font-roboto text-base text-gray-600 mt-2">
          {subtitle}
        </p>
      </div>
    </div>
  </div>
);


export function AligningExpectationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cardSets.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cardSets.length) % cardSets.length);
  };
  
  // ✅ Adjusted height for the new, taller card layout
  const CARD_SET_HEIGHT = 240; 

  return (
    <section className="relative w-full min-h-[800px] flex items-center justify-center py-24 px-6 lg:px-12 overflow-hidden bg-white">
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[450px] h-auto hidden lg:block">
         <Image src="/plane.png" alt="Airplane flying" width={450} height={300} style={{objectFit:"contain"}} />
      </div>

      <div className="container mx-auto flex flex-col items-center text-center max-w-6xl z-10">
        <h2 className="font-poppins text-5xl md:text-[56px] font-normal text-black leading-tight">
          Aligning Travel Expectations with Reality
        </h2>
        <h2 className="font-poppins text-6xl md:text-[56px] font-bold text-[#293893] leading-tight mt-1">
          The Power of Expertise
        </h2>
        
        <p className="font-poppins text-xl md:text-[24px] font-normal mt-8 text-gray-700 max-w-3xl">
          With our blend of hands-on corporate travel expertise and cutting-edge tech, we go beyond tools—we solve real business challenges.
        </p>

        <div className="flex items-center gap-6 mt-16 w-full justify-center">
          {/* ✅ Slider container height adjusted */}
          <div className="relative h-[220px] w-full max-w-4xl overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${currentIndex * CARD_SET_HEIGHT}px)` }}
            >
                {cardSets.map((cardPair, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-8 justify-center h-[220px] mb-5">
                      <InfoCard {...cardPair.negative} />
                      <InfoCard {...cardPair.positive} />
                    </div>
                ))}
            </div>
          </div>

          {/* ✅ Slider Arrows with new background color */}
          <div className="flex flex-col gap-4">
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
              style={{ backgroundColor: 'rgba(245, 245, 245, 1)' }}
            >
              <Image src="/icons/uparrow.svg" alt="Up" width={24} height={24} />
            </button>
            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
              style={{ backgroundColor: 'rgba(245, 245, 245, 1)' }}
            >
              <Image src="/icons/downarrow.svg" alt="Down" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

