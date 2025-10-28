"use client";

import { useState } from "react";
import Image from "next/image";
import {
  User,
  ShieldCheck,
  Search,
  CheckSquare,
  Building,
  BarChart3,
} from "lucide-react";
import Link from 'next/link';

// Data for our navigation items (no changes here)
const features = [
  {
    id: "profile",
    name: "Profile Management",
    icon: User,
    title: "Seamless Profile Management",
    subtitle:
      "Centralized traveler and company profiles for easy access and control.",
    image: "/smartsoftware.png",
    mobileImage: "/profileUpdatesMobile.png",
  },
  {
    id: "policy",
    name: "Policy Enforcement",
    icon: ShieldCheck,
    title: "Strict Policy Enforcement",
    subtitle: "Automated travel policy application to ensure compliance.",
    image: "/smartsoftware.png",
    mobileImage: "/profileUpdatesMobile.png",
  },
  {
    id: "booking",
    name: "Search & Booking",
    icon: Search,
    title: "Intuitive Search & Booking",
    subtitle: "Smart, real-time booking across flights, hotels, and more.",
    image: "/smartsoftware.png",
    mobileImage: "/profileUpdatesMobile.png",
  },
  {
    id: "workflows",
    name: "Approval Workflows",
    icon: CheckSquare,
    title: "Custom Approval Workflows",
    subtitle: "Customizable approval layers to match your internal processes.",
    image: "/smartsoftware.png",
    mobileImage: "/profileUpdatesMobile.png",
  },
  {
    id: "multi-entity",
    name: "Multi-Entity & POS",
    icon: Building,
    title: "Flexible Multi-Entity Management",
    subtitle: "Support for multiple companies, regions, and points of sale.",
    image: "/smartsoftware.png",
    mobileImage: "/profileUpdatesMobile.png",
  },
  {
    id: "reports",
    name: "Reports & Compliance",
    icon: BarChart3,
    title: "Insightful Reports & Compliance",
    subtitle:
      "Actionable insights with full visibility and audit-ready reports.",
    image: "/smartsoftware.png",
    mobileImage: "/profileUpdatesMobile.png",
  },
];

const PlaceholderButton = () => (
  <Link
    href="/demo"
    className="text-sm md:text-base border border-active-blue text-active-blue px-6 py-2.5 md:px-8 md:py-3 rounded-lg md:rounded-xl inline-block"
  >
    Request a Demo
  </Link>
);

export function InteractiveFeatureBox() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const activeFeature = features[activeFeatureIndex];

  return (
    <div className="bg-white w-full h-full rounded-[30px] shadow-2xl p-4 md:p-6 lg:p-8 flex flex-col">
      {/* Mini Navbar */}
      <nav className="w-full bg-[#F8F8F8] rounded-xl p-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {features.map((feature, index) => {
            const isActive = activeFeatureIndex === index;
            return (
              <button
                key={feature.name}
                onClick={() => setActiveFeatureIndex(index)}
                className="flex items-center justify-center text-center gap-2 p-2 md:p-3 rounded-lg transition-colors duration-300 group"
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full transition-all duration-300 ${
                    isActive ? "bg-[#F1570A]" : "bg-white"
                  }`}
                >
                  <feature.icon
                    className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-500"
                    }`}
                  />
                </div>
                <span
                  className={`font-medium text-xs md:text-sm transition-colors duration-300 ${
                    isActive ? "text-[#F1570A]" : "text-gray-600"
                  }`}
                >
                  {feature.name}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Content Area */}
      <div className="flex-grow flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 mt-6 md:mt-4 items-center">
        {/* Text Content - centered vertically on desktop */}
        <div className="w-full md:w-[35%] lg:w-[30%] flex flex-col justify-center px-4 md:pl-8">
          <div className="text-left">
            <h3 className="font-poppins font-semibold text-2xl md:text-4xl lg:text-5xl leading-tight text-active-blue">
              {activeFeature.name}
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-3 md:mt-4" style={{ fontFamily: 'var(--font-roboto)' }}>
              {activeFeature.subtitle}
            </p>
            <div className="mt-6 md:mt-8">
              <PlaceholderButton />
            </div>
          </div>
        </div>

        {/* Image Content - Desktop */}
        <div className="hidden md:block w-full md:w-[65%] lg:w-[70%] relative aspect-video">
          <Image
            src={activeFeature.image}
            alt={activeFeature.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Image Content - Mobile (tall aspect ratio) */}
        <div className="block md:hidden w-full relative h-[500px]">
          <Image
            src={activeFeature.mobileImage}
            alt={activeFeature.title}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}