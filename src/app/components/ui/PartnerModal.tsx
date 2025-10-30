// components/DemoModal.tsx

import React from 'react';
import { X } from 'lucide-react';

// Props interface for the modal
interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Reusable input component for consistency
const FormInput = ({ label, placeholder, type = 'text', name }: { label: string; placeholder: string; type?: string; name: string }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-800 mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="w-full p-3 border border-[#DFDFDF] rounded-md placeholder:text-[#A9A9A9] focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
    />
  </div>
);

// Main Modal Component
export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  // Don't render anything if the modal is not open
  if (!isOpen) return null;

  // Handle clicks on the overlay to close the modal
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // We only close if the click is on the overlay itself, not its children
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // Main overlay
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D1230]/50"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Content */}
      <div className="relative w-[90vw] h-[90vh] bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 flex flex-col overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 transition"
          aria-label="Close modal"
        >
          <X size={28} />
        </button>

        {/* Header */}
        <header>
          <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-[100px] text-active-blue leading-none">
            Become
            <br />
            a Partner
          </h1>
          <p className="mt-4 text-gray-600">Experience tailored travel solutions</p>
        </header>

        {/* Form Section */}
        <form className="mt-8 flex-grow flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6">
            
            {/* Column 1: Personal Information */}
            <div className="flex flex-col space-y-4">
              <h2 className="font-semibold text-gray-800">Personal Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <FormInput label="Full name" name="fullName" placeholder="John Doe" />
                <FormInput label="Last name" name="lastName" placeholder="Smith" />
              </div>
              <FormInput label="Email" name="email" placeholder="you@company.com" type="email" />
              <FormInput label="Country" name="country" placeholder="Your country" />
              <div className="grid grid-cols-2 gap-4">
                <FormInput label="Date" name="date" placeholder="Select date" type="date" />
                <FormInput label="Time" name="time" placeholder="Select time" type="time" />
              </div>
            </div>

            {/* Column 2: Work Information */}
            <div className="flex flex-col space-y-4">
              <h2 className="font-semibold text-gray-800">Work Information</h2>
              <FormInput label="Company name" name="companyName" placeholder="Your company" />
              <FormInput label="Job title" name="jobTitle" placeholder="Your title" />
              <FormInput label="Phone number" name="phone" placeholder="+1 (555) 000-0000" type="tel" />
              <div className="grid grid-cols-2 gap-4">
                <FormInput label="Industry" name="industry" placeholder="e.g. Tech" />
                <FormInput label="Number of Employees" name="employees" placeholder="e.g. 50-100" />
              </div>
            </div>

            {/* Column 3: Problem Description */}
            <div className="flex flex-col space-y-6">
              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-gray-800 mb-1">
                  What Problem Are You Trying To Solve? / What Are You Hoping To Achieve With Our Software?
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  rows={5}
                  placeholder="Type here..."
                  className="w-full p-3 border border-[#DFDFDF] rounded-md placeholder:text-[#A9A9A9] focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                ></textarea>
              </div>
              <div>
                <label htmlFor="anythingElse" className="block text-sm font-medium text-gray-800 mb-1">
                  Anything Else We Should Know?
                </label>
                <textarea
                  id="anythingElse"
                  name="anythingElse"
                  rows={5}
                  placeholder="Type here..."
                  className="w-full p-3 border border-[#DFDFDF] rounded-md placeholder:text-[#A9A9A9] focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                ></textarea>
              </div>
            </div>
          </div>
          
          {/* Join Button */}
          <div className="mt-auto pt-6 flex justify-end">
            <button
              type="submit"
              className="bg-[#293893] text-white font-semibold px-10 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Join
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}