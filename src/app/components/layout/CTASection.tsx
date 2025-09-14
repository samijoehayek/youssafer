import Image from 'next/image';
import React from 'react';

export const FinalCTASection: React.FC = () => {
  return (
    // The main section container. I removed the top padding so the image sits flush.
    <section className="bg-white pb-24">
      {/* Section 1: Background Image Placeholder */}
      <div className="relative w-full h-[500px] bg-gray-200">
        <Image
          src="https://placehold.co/1920x500/cccccc/969696?text=Background+Image"
          alt="Office meeting background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      {/* Section 2: Overlapping Content - now full width with no shadow */}
      <div className="bg-white rounded-t-3xl lg:rounded-t-[40px] w-full -mt-32 relative z-10 pt-32">
        {/* This inner div constrains the content to the center of the page */}
        <div className="max-w-screen-2xl mx-auto p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left Column: Text Content */}
            <div className="text-left">
              <h2 className="font-poppins text-4xl md:text-5xl font-bold text-[#0D1230] leading-tight mb-6">
                Let&apos;s Talk Travel Solutions
              </h2>
              <p className="font-roboto text-lg text-gray-700 leading-relaxed mb-4">
                Yousaffer makes corporate travel smarter, safer, and more efficient.
              </p>
              <p className="font-roboto text-lg text-gray-700 leading-relaxed">
                Our platform empowers companies to plan, book, and manage trips effortlessly - while giving them full visibility, control, and cost oversight. With customizable tools tailored to your needs, we simplify travel management and save focus for what&apos;s everyday.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="relative w-full h-80 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src="https://placehold.co/600x400/e2e8f0/666?text=Placeholder"
                alt="Travel Solutions Illustration"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

