import React from "react";
// app/page.tsx
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* ✅ FIXED: Airplane image - removed fixed height, made it responsive */}
      <div
        aria-hidden="true"
        className="absolute -z-10 top-20 right-5 hidden lg:block w-[902px]"
        style={{ aspectRatio: "902/837" }}
      >
        <Image
          src="/hero-image.png"
          alt="A background image of a travel dashboard"
          fill
          style={{ objectFit: "contain" }} // Changed from "cover" to "contain"
          quality={80}
          priority
        />
      </div>
      
      <div
        aria-hidden="true"
        className="absolute -z-20 right-0 hidden lg:block"
        style={{ height: "950px", width: "1450px" }}
      >
        <Image
          src="/glow.png"
          alt=""
          aria-hidden="true"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* ✅ FIXED: Glow image for MOBILE - now visible on mobile */}
      <div
        aria-hidden="true"
        className="absolute -z-20 -right-32 top-110 lg:hidden"
        style={{ height: "600px", width: "600px" }}
      >
        <Image
          src="/glow.png"
          alt=""
          aria-hidden="true"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Content Grid Layer */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 items-center gap-8 px-6 sm:px-12 lg:px-32">
        <div className="lg:col-span-9 flex flex-col justify-center gap-y-6 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[70px] leading-tight font-poppins">
            <span className="font-light text-black">Smart Travel</span>
            <br />
            <span className="font-bold text-active-blue">
              Solutions Start Here
            </span>
          </h1>

          <p
            className="text-base sm:text-xl lg:text-[20px] text-hero-desc"
            style={{ fontFamily: "var(--font-roboto)" }}
          >
            Yousaffer empowers Travel Agents, TMCs, and Corporate clients across
            the Middle East and Africa with smart tech and expert consultancy.
            Our tools boost productivity and streamline travel management - from
            policies and approvals to reporting and analytics.
          </p>

          <div
            className="flex flex-col items-start mt-2"
            style={{ fontFamily: "var(--font-roboto)" }}
          >
            <p className="text-2xl sm:text-3xl font-bold text-hero-stat font-poppins">
              20+ years
            </p>
            <p className="text-lg sm:text-xl text-hero-stat">
              Of business travel expertise
            </p>
          </div>

          <div className="pt-4">
            {/* ✅ FIXED: Button with corner smoothing using clip-path */}
            <Link
              href="/pilot"
              className="inline-block bg-active-blue text-white text-[16px] font-bold font-roboto px-8 py-4 rounded-xl shadow-lg hover:bg-opacity-90 transition-colors"
              style={{ 
                fontFamily: "var(--font-roboto)",
                
              }}
            >
              Join our pilot program
            </Link>
          </div>

          {/* ✅ Mobile hero image - shows below content on mobile */}
          <div className="relative w-full h-[400px] mt-8 lg:hidden rounded-lg overflow-hidden -z-10">
            <Image
              src="/hero-image.png"
              alt="A background image of a travel dashboard"
              fill
              style={{ objectFit: "cover" }}
              quality={80}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;