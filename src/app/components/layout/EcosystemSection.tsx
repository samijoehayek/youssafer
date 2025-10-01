"use client";

import { useState } from "react";
import Image from "next/image";

// Data updated with SVG paths instead of Lucide components
const nodeData = [
  { name: "Finance & Audit", color: "#0087E9", icon: "/icons/financeaudit.svg" },
  { name: "HR Departments", color: "#E97D2A", icon: "/icons/hr.svg" },
  { name: "Employees & Travelers", color: "#3345B6", icon: "/icons/Employees.svg" },
  { name: "Procurement", color: "#43A047", icon: "/icons/Subtract.svg" },
  { name: "Travel Agency & TMC", color: "#DC1A0C", icon: "/icons/Vector.svg" },
];

// Helper function to convert hex color to rgba for the glow effect
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const InteractiveNodes = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Default to center node

  return (
    <div className="w-full flex flex-col items-center mt-20 lg:mt-0">
      {/* Desktop Layout - Zigzag with connecting lines */}
      <div className="hidden lg:flex w-full min-h-[400px] relative items-center justify-between">
        {nodeData.map((node, index) => {
          const isZig = index % 2 !== 0; // Determines if the node is in the "up" position
          const isActive = index === activeIndex;

          return (
            <div
              key={node.name}
              className={`flex flex-col items-center gap-4 w-auto relative transition-transform duration-300 z-10 ${
                isZig ? "lg:-translate-y-12" : "lg:translate-y-12"
              } ${isActive ? "scale-105" : ""}`}
            >
              {/* Node Circle Container with new Glow effect */}
              <div className="relative flex items-center justify-center">
                {/* ✅ Outer Glow Circle (visible when active) - Made smaller */}
                <div
                  className={`absolute w-32 h-32 rounded-full transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                  style={{ backgroundColor: hexToRgba(node.color, 0.1) }}
                ></div>
                
                {/* ✅ Main Node Circle - Made smaller */}
                <div
                  className="relative w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300 cursor-pointer bg-white"
                  onClick={() => setActiveIndex(index)}
                  style={{ borderColor: node.color }}
                >
                  {/* Icon rendered using CSS Mask for dynamic coloring */}
                  <div
                    className="w-8 h-8 transition-colors duration-300"
                    style={{
                      backgroundColor: isActive ? node.color : 'rgba(13, 18, 48, 1)',
                      maskImage: `url(${node.icon})`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>
              </div>

              {/* ✅ Button updated with conditional border for inactive state */}
              <button
                onClick={() => setActiveIndex(index)}
                className="font-roboto font-semibold py-2.5 px-5 rounded-lg transition-colors duration-300 text-center text-base mt-6"
                style={{
                  backgroundColor: isActive ? node.color : "#FFFFFF",
                  color: isActive ? "white" : "#333",
                  border: isActive ? 'none' : '1px solid rgba(223, 223, 223, 1)',
                }}
              >
                {node.name}
              </button>

              {/* ✅ Connecting line position adjusted for smaller circle */}
              {index < nodeData.length - 1 && (
                <div
                  className={`hidden lg:block absolute top-10 h-[1px] bg-gray-200 w-[22vw] max-w-[280px] origin-left transform -z-10 ${
                    index % 2 === 0 ? "-rotate-[20deg]" : "rotate-[20deg]"
                  }`}
                  style={{ left: "50%" }}
                ></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Layout - Simple vertical list */}
      <div className="lg:hidden flex flex-col gap-10 items-center w-full max-w-sm">
        {nodeData.map((node, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={node.name}
              className="flex flex-col items-center gap-4"
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative flex items-center justify-center">
                  {/* ✅ Outer Glow Circle for mobile - Made smaller */}
                  <div
                    className={`absolute w-24 h-24 rounded-full transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundColor: hexToRgba(node.color, 0.1) }}
                  ></div>
                  
                  {/* ✅ Main Node Circle for mobile - Made smaller */}
                  <div
                    className="relative w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300 cursor-pointer bg-white"
                    style={{ borderColor: node.color }}
                  >
                    {/* Icon using CSS Mask for mobile */}
                    <div
                      className="w-8 h-8 transition-colors duration-300"
                      style={{
                        backgroundColor: isActive ? node.color : 'rgba(13, 18, 48, 1)',
                        maskImage: `url(${node.icon})`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                      }}
                    />
                  </div>
              </div>

              <button
                className="font-roboto font-semibold py-2 px-5 rounded-lg transition-colors duration-300 text-center text-base"
                style={{
                  backgroundColor: isActive ? node.color : "#FFFFFF",
                  color: isActive ? "white" : "#333",
                  border: isActive ? 'none' : '1px solid rgba(223, 223, 223, 1)',
                }}
              >
                {node.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export function EcosystemSection() {
  return (
    <section className="bg-white min-h-[1200px] w-full flex flex-col items-center justify-center py-24 px-6 text-center">
      {/* Main Titles */}
      <h2 className="font-poppins text-5xl lg:text-[65px] font-normal text-black leading-tight">
        Our Ecosystem. Seamless Collaboration.
      </h2>
      <h2 className="font-poppins text-5xl lg:text-[65px] font-bold text-[#293893] leading-tight">
        Smarter Travel.
      </h2>

      {/* Subtitle */}
      <p className="font-roboto text-xl lg:text-[24px] font-normal text-[#0D1230] max-w-4xl mt-8">
        Our Online Booking Tool (Skyvix) connects all key departments and
        partners—each with unique expectations and contributions. Here’s how we
        work together to unlock full value.
      </p>

      {/* Interactive Nodes Component */}
      <div className="w-full max-w-7xl mt-16">
        <InteractiveNodes />
        <div className="mb-8"></div>
        <Image
          src="/hr-department.png"
          alt="HR Department Integration Diagram"
          width={1150}
          height={650}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
