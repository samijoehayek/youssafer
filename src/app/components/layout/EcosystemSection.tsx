"use client";

import { useState } from "react";
import Image from "next/image";

// Data for each node (no changes here)
const ecosystemData = [
  {
    name: "Finance & Audit",
    color: "#0087E9",
    icon: "/icons/financeaudit.svg",
    title: "Finance & Audit Departments",
    relationship: "Ecosystem Relationship",
    requires: [
      "Budgets and cost centers",
      "Payment and expense solutions",
      "Audit and compliance requirements",
    ],
    expects: [
      "Real-time budget tracking",
      "Automated expense reporting",
      "Full data visibility for audits",
    ],
  },
  {
    name: "HR Departments",
    color: "#E97D2A",
    icon: "/icons/hr.svg",
    title: "HR Departments",
    relationship: "Ecosystem Relationship",
    requires: [
      "Clear travel policies by level",
      "Traveler data & profiles",
      "Support in change management and adoption",
    ],
    expects: [
      "Policy enforcement",
      "Approval automation",
      "Duty of care tracking",
    ],
  },
  {
    name: "Employees & Travelers",
    color: "#3345B6",
    icon: "/icons/Employees.svg",
    title: "Employees & Travelers",
    relationship: "Ecosystem Relationship",
    requires: [
      "Accurate personal profiles",
      "Travel preferences",
      "Timely expense submissions",
    ],
    expects: [
      "Intuitive booking experience",
      "Mobile access and support",
      "Quick reimbursement",
    ],
  },
  {
    name: "Procurement",
    color: "#43A047",
    icon: "/icons/Subtract.svg",
    title: "Procurement Departments",
    relationship: "Ecosystem Relationship",
    requires: [
      "Preferred supplier agreements",
      "Negotiated rates and fares",
      "Savings and performance KPIs",
    ],
    expects: [
      "Maximized use of preferred suppliers",
      "Negotiated savings tracking",
      "Supplier performance dashboards",
    ],
  },
  {
    name: "Travel Agency & TMC",
    color: "#DC1A0C",
    icon: "/icons/Vector.svg",
    title: "Travel Agency & TMC",
    relationship: "Ecosystem Relationship",
    requires: [
      "Access to all travel content",
      "Ticketing and fulfillment automation",
      "Agent support tools",
    ],
    expects: [
      "Efficient booking management",
      "Seamless ticketing and invoicing",
      "24/7 traveler support",
    ],
  },
];

// Helper function (no change)
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// InteractiveNodes component (no changes here)
const InteractiveNodes = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) => {
  return (
    <div className="w-full flex flex-col items-center mt-20 lg:mt-0">
      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full min-h-[400px] relative items-center justify-between">
        {ecosystemData.map((node, index) => {
          const isZig = index % 2 !== 0;
          const isActive = index === activeIndex;

          return (
            <div
              key={node.name}
              className={`flex flex-col items-center gap-4 w-auto relative transition-transform duration-300 z-10 ${
                isZig ? "lg:-translate-y-12" : "lg:translate-y-12"
              } ${isActive ? "scale-105" : ""}`}
            >
              {/* Node Circle Container */}
              <div className="relative flex items-center justify-center">
                <div
                  className={`absolute w-32 h-32 rounded-full transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundColor: hexToRgba(node.color, 0.1) }}
                ></div>
                <div
                  className="relative w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300 cursor-pointer bg-white"
                  onClick={() => setActiveIndex(index)}
                  style={{ borderColor: node.color }}
                >
                  <div
                    className="w-8 h-8 transition-colors duration-300"
                    style={{
                      backgroundColor: isActive
                        ? node.color
                        : "rgba(13, 18, 48, 1)",
                      maskImage: `url(${node.icon})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                  />
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => setActiveIndex(index)}
                className={`py-2.5 px-5 rounded-lg transition-colors duration-300 text-center text-base mt-6 ${
                  isActive ? "font-semibold" : "font-medium"
                }`}
                style={{
                  backgroundColor: isActive ? node.color : "#FFFFFF",
                  color: isActive ? "white" : "#333",
                  border: isActive
                    ? "none"
                    : "1px solid rgba(223, 223, 223, 1)",
                  fontFamily: "var(--font-roboto)",
                }}
              >
                {node.name}
              </button>

              {/* Connecting line */}
              {index < ecosystemData.length - 1 && (
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

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-10 items-center w-full max-w-sm">
        {ecosystemData.map((node, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={node.name}
              className="flex flex-col items-center gap-4"
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative flex items-center justify-center">
                <div
                  className={`absolute w-24 h-24 rounded-full transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundColor: hexToRgba(node.color, 0.1) }}
                ></div>
                <div
                  className="relative w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300 cursor-pointer bg-white"
                  style={{ borderColor: node.color }}
                >
                  <div
                    className="w-8 h-8 transition-colors duration-300"
                    style={{
                      backgroundColor: isActive
                        ? node.color
                        : "rgba(13, 18, 48, 1)",
                      maskImage: `url(${node.icon})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                  />
                </div>
              </div>
              <button
                className={`py-2 px-5 rounded-lg transition-colors duration-300 text-center text-base ${
                  isActive ? "font-semibold" : "font-medium"
                }`}
                style={{
                  backgroundColor: isActive ? node.color : "#FFFFFF",
                  color: isActive ? "white" : "#333",
                  border: isActive
                    ? "none"
                    : "1px solid rgba(223, 223, 223, 1)",
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

// EcosystemDetailCard component (no changes here)
const EcosystemDetailCard = ({ data }: { data: (typeof ecosystemData)[0] }) => {
  return (
    <div className="w-full bg-[#F3F4F6] rounded-3xl py-8 lg:py-12 px-4 lg:px-6 mt-16 text-left">
      {/* Header Section */}
      <div className="flex items-start gap-4 mb-8 px-2">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
          <div
            className="w-8 h-8"
            style={{
              backgroundColor: "#111827",
              maskImage: `url(${data.icon})`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{data.title}</h3>
          <p className="text-gray-600">{data.relationship}</p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="bg-white rounded-2xl p-6">
          <h4 className="font-bold text-gray-800">What Skyvix Require</h4>
          <p className="text-sm text-gray-500 mb-4">
            What We Need From The Corporate
          </p>
          <ul className="space-y-2">
            {data.requires.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 bg-[#FAFAFA] p-4 rounded-lg"
              >
                <Image
                  src="/icons/Checkmark.svg"
                  alt="check"
                  width={24}
                  height={24}
                />
                <span className="text-gray-800 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-2xl p-6">
          <h4 className="font-bold text-gray-800">
            What The Client Expect In Return
          </h4>
          <p className="text-sm text-gray-500 mb-4">
            What They Expect From Skyvix
          </p>
          <ul className="space-y-2">
            {data.expects.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 bg-[#FAFAFA] p-4 rounded-lg"
              >
                <Image
                  src="/icons/Checkmark.svg"
                  alt="check"
                  width={24}
                  height={24}
                />
                <span className="text-gray-800 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Main section component - UPDATED WITH MOBILE FONT SIZES
export function EcosystemSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="bg-white min-h-[1200px] w-full flex flex-col items-center justify-center py-24 px-6 text-center">
      {/* Main Titles */}
      <h2 className="font-poppins text-[28px] lg:text-[65px] font-normal text-black leading-tight">
        Our Ecosystem. <br />Seamless Collaboration.
      </h2>
      <h2 className="font-poppins text-[28px] lg:text-[65px] font-bold text-[#293893] leading-tight">
        Smarter Travel.
      </h2>

      {/* Subtitle */}
      <p
        className="text-[16px] lg:text-[24px] font-normal text-[#0D1230] max-w-4xl mt-8"
        style={{ fontFamily: "var(--font-roboto)" }}
      >
        Our Online Booking Tool (Skyvix) connects all key departments and
        partners—each with unique expectations and contributions. Here&lsquo;s how we
        work together to unlock full value.
      </p>

      {/* Interactive Components Container */}
      <div className="w-full max-w-7xl mt-16">
        <InteractiveNodes
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        <EcosystemDetailCard data={ecosystemData[activeIndex]} />
      </div>
    </section>
  );
}