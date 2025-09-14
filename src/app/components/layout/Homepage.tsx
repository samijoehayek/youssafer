import React from "react";
// app/page.tsx
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -z-10 top-20 right-5"
        style={{ height: "877px", width: "942px" }}
      >
        <Image
          src="/hero-image.png"
          alt="A background image of a travel dashboard"
          fill
          style={{ objectFit: "cover" }}
          quality={80}
          priority
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -z-20 right-100"
        style={{ height: "1000px", width: "1000px" }}
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
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 items-center gap-8 px-6 sm:px-12 lg:px-24">
        {/* ✅ Text Column Updated */}
        {/* We're now starting this column at the 2nd grid line and shifting it up. */}
        <div className="lg:col-span-9 flex flex-col justify-center gap-y-6 text-center lg:text-left">
          <h1 className="text-5xl lg:text-[70px] leading-tight">
            <span className="font-light text-black">Smart Travel</span>
            <br />
            <span className="font-bold text-active-blue">
              Solutions Start Here
            </span>
          </h1>

          <p className="text-xl lg:text-[20px] text-hero-desc mx-auto lg:mx-0">
            Yousaffer empowers Travel Agents, TMCs, and Corporate clients across
            <br />
            the Middle East and Africa with smart tech and expert consultancy.
            <br />
            Our tools boost productivity and streamline travel management - from
            <br />
            policies and approvals to reporting and analytics.
            <br />
          </p>

          <div className="flex flex-col items-center lg:items-start mt-2">
            <p className="text-3xl font-bold text-hero-stat">20+ years</p>
            <p className="text-xl text-hero-stat">
              Of business travel expertise
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/pilot"
              className="inline-block bg-active-blue text-white text-base font-medium px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors"
            >
              Join our pilot program
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
