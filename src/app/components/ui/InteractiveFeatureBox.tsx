"use client";

import { useState } from "react";
import Image from "next/image"; // 1. Import the Next.js Image component
import {
  User,
  ShieldCheck,
  Search,
  CheckSquare,
  Building,
  BarChart3,
} from "lucide-react";
import Link from 'next/link';


// Data for our navigation items
const features = [
  {
    id: "profile",
    name: "Profile Management",
    icon: User,
    title: "Seamless Profile Management",
    subtitle:
      "Centralized traveler and company profiles for easy access and control.",
    image: "/featurebox.png",
  },
  {
    id: "policy",
    name: "Policy Enforcement",
    icon: ShieldCheck,
    title: "Strict Policy Enforcement",
    subtitle: "Automated travel policy application to ensure compliance.",
    image: "/featurebox.png",
  },
  {
    id: "booking",
    name: "Search & Booking",
    icon: Search,
    title: "Intuitive Search & Booking",
    subtitle: "Smart, real-time booking across flights, hotels, and more.",
    image: "/featurebox.png",
  },
  {
    id: "workflows",
    name: "Approval Workflows",
    icon: CheckSquare,
    title: "Custom Approval Workflows",
    subtitle: "Customizable approval layers to match your internal processes.",
    image: "/featurebox.png",
  },
  {
    id: "multi-entity",
    name: "Multi-Entity & POS",
    icon: Building,
    title: "Flexible Multi-Entity Management",
    subtitle: "Support for multiple companies, regions, and points of sale.",
    image: "/featurebox.png",
  },
  {
    id: "reports",
    name: "Reports & Compliance",
    icon: BarChart3,
    title: "Insightful Reports & Compliance",
    subtitle:
      "Actionable insights with full visibility and audit-ready reports.",
    image: "/featurebox.png",
  },
];

const PlaceholderButton = () => (
  <Link
    href="/demo"
    className="text-xl border border-active-blue text-active-blue px-8 py-3 rounded-md"
  >
    Request a demo
  </Link>
);

export function InteractiveFeatureBox() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const activeFeature = features[activeFeatureIndex];

  return (
    <div className="bg-white w-full h-full rounded-[30px] shadow-2xl p-6 lg:p-8 flex flex-col">
      {/* Mini Navbar */}
      <nav className="w-full bg-[#F8F8F8] rounded-xl p-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {features.map((feature, index) => (
            <button
              key={feature.name}
              onClick={() => setActiveFeatureIndex(index)}
              className={`flex items-center justify-center text-center gap-2 p-3 rounded-lg transition-all duration-300 ${
                activeFeatureIndex === index
                  ? "bg-white shadow-sm"
                  : "hover:bg-white/70"
              }`}
            >
              <feature.icon
                className={`w-5 h-5 transition-colors ${
                  activeFeatureIndex === index
                    ? "text-[#F1570A]"
                    : "text-gray-500"
                }`}
              />
              <span
                className={`font-medium text-sm ${
                  activeFeatureIndex === index
                    ? "text-[#F1570A]"
                    : "text-gray-600"
                }`}
              >
                {feature.name}
              </span>
            </button>
          ))}
        </div>
      </nav>

      <div className="border-b my-6 border-gray-200"></div>

      {/* Content Area - 2 Columns */}
      {/* 2. Added `items-center` to vertically center the columns */}
      <div className="flex-grow flex flex-col md:flex-row gap-8 lg:gap-12 mt-4 items-center">
        {/* Left Column (30%) */}
        <div className="w-full md:w-[35%] lg:w-[30%] flex flex-col justify-center pl-8">
          <div className="text-left">
            <h3 className="font-semibold text-4xl leading-tight text-gray-800">
              {activeFeature.name}
            </h3>
            <p className="text-lg text-gray-600 mt-4">
              {activeFeature.subtitle}
            </p>
            <div className="mt-18">
              <PlaceholderButton />
            </div>
          </div>
        </div>

        {/* Right Column (70%) */}
        {/* 3. Replaced the placeholder with the Next.js Image component */}
        <div className="w-full md:w-[65%] lg:w-[70%] relative aspect-video">
          <Image
            src={activeFeature.image}
            alt={activeFeature.title}
            fill
            className="object-contain"
            priority // Helps with loading performance
          />
        </div>
      </div>
    </div>
  );
}
