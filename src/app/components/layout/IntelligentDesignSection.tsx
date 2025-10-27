"use client";
import React from "react";
import Image from "next/image";

// Data for the advantage cards
const advantagesData = [
  {
    icon: "/icons/icon1.svg",
    title: "Robust Security",
    subtitle: "Enterprise-grade security to protect your data and privacy.",
  },
  {
    icon: "/icons/icon2.svg",
    title: "Advanced Analytics",
    subtitle: "Gain actionable insights with our powerful reporting tools.",
  },
  {
    icon: "/icons/icon3.svg",
    title: "Global Scalability",
    subtitle: "Our platform grows with your business, wherever you are.",
  },
  {
    icon: "/icons/icon4.svg",
    title: "User-Centric Design",
    subtitle: "Intuitive interfaces that your employees will love to use.",
  },
  {
    icon: "/icons/icon5.svg",
    title: "AI-Powered Automation",
    subtitle: "Streamline workflows and reduce manual tasks with smart tech.",
  },
  {
    icon: "/icons/icon6.svg",
    title: "Full Compliance",
    subtitle:
      "Stay compliant with travel policies and regulations effortlessly.",
  },
];

// Reusable Card Component
const AdvantageCard = ({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) => (
  <div className="bg-[#F5F5F5] rounded-2xl p-4 md:p-6 flex items-center gap-4 md:gap-5 w-full text-left">
    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
      <Image src={Icon} alt={title} width={24} height={24} className="md:w-8 md:h-8" />
    </div>
    <div className="flex-1">
      <h3 className="font-poppins font-bold text-lg md:text-xl lg:text-[28px] text-[#0D1230]">
        {title}
      </h3>
      <p
        className="font-normal text-sm md:text-base lg:text-[18px] text-[#0D1230] mt-1"
        style={{ fontFamily: "var(--font-roboto)" }}
      >
        {subtitle}
      </p>
    </div>
  </div>
);

export function AdvantagesSection() {
  return (
    <section className="w-full min-h-[1200px] flex flex-col items-center justify-center py-24 px-6 lg:px-12 bg-white">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Titles */}
        <h2 className="font-poppins text-[28px] md:text-5xl lg:text-[65px] font-normal text-black leading-tight">
          Intelligent Design. Global Standards.
        </h2>
        <h2 className="font-poppins text-[28px] md:text-5xl lg:text-[70px] font-bold text-[#293893] leading-tight mt-1">
          Unlimited Growth.
        </h2>

        {/* Subtitle */}
        <p className="text-[16px] md:text-xl lg:text-[24px] font-normal mt-6 lg:mt-8 text-gray-700 max-w-3xl" style={{ fontFamily: "var(--font-roboto)" }}>
          Explore the key advantages that make Yousaffer the smart choice for
          modern travel management.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 lg:mt-40 w-full max-w-screen-xl">
          {advantagesData.map((advantage, index) => (
            <AdvantageCard
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              subtitle={advantage.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}