import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer
      // The negative margin-top pulls this section up over the previous one
      className="relative z-0 -mt-24 rounded-t-[40px] pt-24 text-white"
      style={{
        background: 'linear-gradient(180deg, #293896 -21.88%, #0D1230 76%)',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-8 py-16">
        {/* Row 1: Newsletter */}
        <div className="text-center mb-20">
          <h2 className="font-poppins font-semibold text-4xl md:text-[65px] leading-tight mb-8">
            Subscribe to our Newsletter
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent border border-[rgba(223,223,223,1)] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border border-[rgba(223,223,223,1)] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <button className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-white/20 my-16"></div>

        {/* Row 2 & 3: Logo and Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-start">
          {/* Logo */}
          <div className="lg:col-span-1">
            <Image src="https://placehold.co/150x50/ffffff/0D1230?text=Logo" width={150} height={50} alt="Logo" />
          </div>

          {/* Partner & Contact Columns */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-poppins font-semibold text-2xl mb-4">Become a partner</h3>
              <p className="text-white/80 mb-6">Join our network and unlock new opportunities for growth.</p>
              <button className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-2xl mb-4">Contact Us</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} />
                  <span>contact@yousaffer.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} />
                  <span>123 Travel Lane, Wanderlust City</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Large Title */}
        <div className="text-center my-24">
          <h1 className="font-outfit font-bold text-7xl md:text-9xl lg:text-[130px] leading-none text-[rgba(243,243,243,1)]">
            Travel Solutions That <br /> Move With You.
          </h1>
        </div>

        <div className="border-t border-white/20 mt-16"></div>

        {/* Row 5: Copyright & Socials */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Yousaffer. All Rights Reserved.</p>
          <div className="flex gap-5 mt-4 sm:mt-0">
            <Twitter size={20} className="hover:text-white transition-colors cursor-pointer" />
            <Linkedin size={20} className="hover:text-white transition-colors cursor-pointer" />
            <Facebook size={20} className="hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};
