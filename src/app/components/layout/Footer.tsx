import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

// X (Twitter) icon as SVG component
const XIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer
      className="relative z-20 -mt-24 rounded-t-[40px] text-white"
      style={{
        background: 'linear-gradient(180deg, #293896 -21.88%, #0D1230 76%)',
      }}
    >
      {/* Glow Image Container - Made smaller */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 z-10 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <Image
          src="/glow2.png"
          width={800}
          height={600}
          alt=""
          className="h-auto w-full"
        />
      </div>

      {/* Airplane Image Container */}
      <div
        className="pointer-events-none absolute left-1/2 top-12 z-30 w-full max-w-7xl -translate-x-1/2 -translate-y-3/4"
        aria-hidden="true"
      >
        <Image
          src="/Plane2.png"
          width={800}
          height={400}
          alt="Airplane"
          className="h-auto w-full"
        />
      </div>

      {/* Main Content Wrapper - Increased max-width and padding */}
      <div className="relative z-20 mx-auto w-full max-w-[1600px] px-8 pt-24 pb-16 sm:px-16 lg:px-24">
        {/* Row 1: Newsletter */}
        <div className="mb-40 text-center">
          <h2 className="mt-8 font-poppins text-4xl font-semibold leading-tight md:text-[65px] mb-8">
            Subscribe to our <br /> Newsletter
          </h2>
          <div className="mx-auto max-w-xl">
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="rounded-lg border border-[rgba(223,223,223,1)] bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-lg border border-[rgba(223,223,223,1)] bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <button className="w-full rounded-lg bg-white py-4 font-semibold text-black transition-colors hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>


        {/* Cleaner spacing for the content below */}
        <div className="space-y-16">
          {/* Logo on its own row with extra margin */}
          <div className="mb-12">
            <Image 
              src="/logowhite.svg" 
              width={180} 
              height={50} 
              alt="Yousaffer Logo" 
            />
          </div>

          {/* Partner and Contact on a two-column row with justify-between */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-32 mb-24">
            <div className="flex-1 max-w-2xl mb-20">
              <h3 className="mb-4 font-poppins text-[70px] font-normal leading-tight">Become a partner</h3>
              <p className="mb-6 text-white/80">Partner with Yousaffer and unlock early access <br /> plus exclusive benefits in business travel innovation.</p>
              <button className="rounded-lg bg-white py-3 px-6 font-semibold text-black transition-colors hover:bg-gray-200">
                Get Started
              </button>
            </div>
            <div className="flex-1 max-w-md md:pl-16">
              <h3 className="mb-4 font-poppins text-xl font-semibold">Contact Us</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} stroke="white" />
                  <a href="mailto:contact@yousaffer.com" className="hover:underline">
                    contact@yousaffer.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} stroke="white" />
                  <a href="tel:+96171123456" className="hover:underline">
                    +961 71 123 456
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} stroke="white" /> <span>Beirut, Lebanon</span>
                </div>
              </div>
            </div>
          </div>

          {/* Large title */}
          <div className="text-left">
            <h1 className="font-outfit text-5xl font-bold leading-none text-[rgba(243,243,243,1)] sm:text-7xl md:text-9xl lg:text-[130px]">
              Travel Solutions <br /> That Move With You.
            </h1>
          </div>
        </div>


        {/* Copyright & Socials */}
        <div className="flex flex-col items-center justify-between pt-8 text-sm text-white/70 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Yousaffer. All Rights Reserved.</p>
          <div className="mt-4 flex gap-5 sm:mt-0">
            <XIcon size={20} className="cursor-pointer transition-colors hover:text-white" />
            <Linkedin size={20} fill="white" className="cursor-pointer transition-colors hover:text-white" />
            <Instagram size={20} className="cursor-pointer transition-colors hover:text-white" />
            <Facebook size={20} fill="white" className="cursor-pointer transition-colors hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};