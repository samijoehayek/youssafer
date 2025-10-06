"use client";
import React, { useState } from 'react';
import { Zap, Send } from 'lucide-react';
import Image from 'next/image';

const DemoSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      // Handle email submission
      console.log('Email submitted:', email);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="w-full py-12 px-6 lg:px-8">
      {/* Main container with gradient, width constraint, centering, and overflow for clipping */}
      <div className="relative w-full mx-auto max-w-screen-xl overflow-hidden bg-gradient-to-br from-[#1a2744] via-[#1e3a5f] to-[#2a4a7f] rounded-3xl px-8 py-12 md:px-16 md:py-12">
        
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left content */}
          <div className="flex-1 text-white max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Free Personalized Demo</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
              See it in action
            </h2>
            <p className="text-lg md:text-lg text-white/90 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-roboto)' }}>
              Get a personalized demo tailored to your business <br /> needs and discover how we transform travel management
            </p>
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                />
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-[#5b6cff] hover:bg-[#4a5bef] text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2"><span className="w-2 h-2 bg-[#00d4ff] rounded-full"></span><span className="text-white/80">Custom setup</span></div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 bg-[#00d4ff] rounded-full"></span><span className="text-white/80">Quick integration</span></div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 bg-[#00d4ff] rounded-full"></span><span className="text-white/80">ROI insights</span></div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 bg-[#00d4ff] rounded-full"></span><span className="text-white/80">Live support</span></div>
            </div>
          </div>

          {/* Right image with radiating circles */}
          <div className="relative lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 mt-10 lg:mt-0">
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              
              {/* Outer radiating circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] rounded-full z-0 opacity-50" style={{ backgroundColor: '#171F51' }}></div>
              
              {/* Inner radiating circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] rounded-full z-10 opacity-50" style={{ backgroundColor: '#0D1230' }}></div>
              
              {/* Person image */}
              <div className="relative z-20 w-full h-full rounded-full overflow-hidden">
                <Image 
                  src="/girl.png"
                  alt="Business professional"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2744]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;

