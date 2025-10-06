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
  },
  {
    id: "policy",
    name: "Policy Enforcement",
    icon: ShieldCheck,
    title: "Strict Policy Enforcement",
    subtitle: "Automated travel policy application to ensure compliance.",
    image: "/smartsoftware.png",
  },
  {
    id: "booking",
    name: "Search & Booking",
    icon: Search,
    title: "Intuitive Search & Booking",
    subtitle: "Smart, real-time booking across flights, hotels, and more.",
    image: "/smartsoftware.png",
  },
  {
    id: "workflows",
    name: "Approval Workflows",
    icon: CheckSquare,
    title: "Custom Approval Workflows",
    subtitle: "Customizable approval layers to match your internal processes.",
    image: "/smartsoftware.png",
  },
  {
    id: "multi-entity",
    name: "Multi-Entity & POS",
    icon: Building,
    title: "Flexible Multi-Entity Management",
    subtitle: "Support for multiple companies, regions, and points of sale.",
    image: "/smartsoftware.png",
  },
  {
    id: "reports",
    name: "Reports & Compliance",
    icon: BarChart3,
    title: "Insightful Reports & Compliance",
    subtitle:
      "Actionable insights with full visibility and audit-ready reports.",
    image: "/smartsoftware.png",
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
      {/* Mini Navbar - ✨ UPDATED SECTION ✨ */}
      <nav className="w-full bg-[#F8F8F8] rounded-xl p-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {features.map((feature, index) => {
            const isActive = activeFeatureIndex === index;
            return (
              <button
                key={feature.name}
                onClick={() => setActiveFeatureIndex(index)}
                // We removed the background/shadow from the button itself
                className="flex items-center justify-center text-center gap-2 p-3 rounded-lg transition-colors duration-300 group"
              >
                {/* 1. Icon is now wrapped in a div to create the circle */}
                <div
                  className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
                    isActive ? "bg-[#F1570A]" : "bg-white"
                  }`}
                >
                  <feature.icon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-500"
                    }`}
                  />
                </div>
                {/* 2. Text color changes based on active state */}
                <span
                  className={`font-medium text-sm transition-colors duration-300 ${
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

      {/* Content Area - No changes here */}
      <div className="flex-grow flex flex-col md:flex-row gap-8 lg:gap-12 mt-4 items-center">
        <div className="w-full md:w-[35%] lg:w-[30%] flex flex-col justify-center pl-8">
          <div className="text-left">
            <h3 className="font-poppins font-semibold text-5xl leading-tight text-active-blue">
              {activeFeature.name}
            </h3>
            <p className="text-lg text-gray-600 mt-4" style={{ fontFamily: 'var(--font-roboto)' }}>
              {activeFeature.subtitle}
            </p>
            <div className="mt-18">
              <PlaceholderButton />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[65%] lg:w-[70%] relative aspect-video">
          <Image
            src={activeFeature.image}
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