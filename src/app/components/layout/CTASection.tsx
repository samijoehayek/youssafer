import Image from 'next/image';
import React from 'react';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="bg-white pb-24 md:pb-60">
      <div className="bg-white rounded-t-3xl lg:rounded-t-[40px] w-full -mt-32 relative z-10">
        <div className="max-w-screen-2xl mx-auto p-8 md:p-16">
          {/* ✅ Increased gap for more space, items-center vertically aligns the text with the taller image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-left">
              {/* ✅ Title updated to have two lines with different font weights */}
              <h2 className="font-poppins text-4xl md:text-5xl text-[#0D1230] leading-tight mb-8">
                <span className="font-normal">Let&apos;s Talk</span>
                <br />
                <span className="font-bold">Travel Solutions</span>
              </h2>

              {/* ✅ Content updated with new text and line breaks */}
              <div className="font-roboto text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Yousaffer makes corporate travel smarter, safer, and more efficient.
                </p>
                <p>
                  Our platform empowers companies to plan, book, and manage trips effortlessly - while giving them full visibility, control, and cost oversight.
                </p>
                <p>
                  With customizable tools tailored to your needs, we simplify travel management and reduce friction at every step. We’re also open to co-developing new solutions to meet your evolving business goals.
                </p>
                <p>
                  Travel with less hassle, more control, and total peace of mind.
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            {/* ✅ Container height is now flexible. Image uses width/height to set aspect ratio. */}
            <div className="relative w-full rounded-lg overflow-hidden">
              <Image
                src="/travelsolutions.png"
                alt="A collage of travel and business-related imagery."
                width={600}
                height={750} // Adjust this height to match your image's natural aspect ratio
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
