// app/components/ui/StorySlider.tsx
'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_STEPS = 5;

export function StorySlider() {
  const [currentStep, setCurrentStep] = useState(1);

  const progressPercentage = (currentStep / TOTAL_STEPS) * 100;

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  return (
    <div className="mt-12">
      {/* Progress Bar and "What we do" text */}
      <div className="flex items-center gap-x-6 w-full">
        {/* Progress Bar Container */}
        <div className="relative w-full h-1 bg-white rounded-full">
          {/* Filled Progress */}
          <div
            className="absolute top-0 left-0 h-full bg-brand-blue rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-white font-bold text-2xl lg:text-[28px] whitespace-nowrap">
          What we do
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex gap-x-4">
        <button
          onClick={handlePrev}
          disabled={currentStep === 1}
          aria-label="Previous story slide"
          className="w-12 h-12 flex items-center justify-center border border-white rounded-full text-white transition-opacity disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === TOTAL_STEPS}
          aria-label="Next story slide"
          className="w-12 h-12 flex items-center justify-center border border-white rounded-full text-white transition-opacity disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}