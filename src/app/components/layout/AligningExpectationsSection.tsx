import Image from 'next/image';
import { X, Check } from 'lucide-react';

// Reusable Card Component
const InfoCard = ({
  bgColor,
  icon: Icon,
  outerCircleColor,
  innerCircleColor,
}: {
  bgColor: string;
  icon: React.ElementType;
  outerCircleColor: string;
  innerCircleColor: string;
}) => (
  <div className="rounded-2xl p-8 flex flex-col items-center text-center max-w-sm" style={{ backgroundColor: bgColor }}>
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Outer Circle */}
      <div className="absolute w-full h-full rounded-full" style={{ backgroundColor: outerCircleColor }}></div>
      {/* Inner Circle */}
      <div className="absolute w-20 h-20 rounded-full" style={{ backgroundColor: innerCircleColor }}></div>
      {/* Icon */}
      <Icon className="w-10 h-10 text-white relative" />
    </div>
    <h3 className="font-poppins font-bold text-xl text-gray-800 mt-6">
      Placeholder Title
    </h3>
    <p className="font-roboto text-base text-gray-600 mt-2">
      This is a placeholder subtitle for the card content.
    </p>
  </div>
);


export function AligningExpectationsSection() {
  return (
    <section className="relative w-full min-h-[800px] flex items-center justify-center py-24 px-6 lg:px-12 overflow-hidden bg-white">
      {/* Plane Image - positioned to the right edge */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[450px] h-auto hidden lg:block">
         <Image src="/plane.png" alt="Airplane flying" width={450} height={300} objectFit="contain" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col items-center text-center max-w-4xl z-10">
        {/* Titles */}
        <h2 className="font-poppins text-5xl md:text-[65px] font-normal text-black leading-tight">
          Aligning travel Expectations with Reality
        </h2>
        <h2 className="font-poppins text-6xl md:text-[70px] font-bold text-[#293893] leading-tight mt-1">
          The Power of Expertise
        </h2>
        
        {/* Subtitle */}
        <p className="font-poppins text-xl md:text-[24px] font-normal mt-8 text-gray-700 max-w-3xl">
          With our blend of hands-on corporate travel expertise and cutting-edge tech, we go beyond tools—we solve real business challenges.
        </p>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row gap-8 mt-16 w-full justify-center">
          <InfoCard 
            bgColor="#E8F5E9"
            icon={Check}
            outerCircleColor="#4CAF50"
            innerCircleColor="#79C57C"
          />
          <InfoCard 
            bgColor="#FFEBEB"
            icon={X}
            outerCircleColor="#DC1A0C"
            innerCircleColor="#FF3C38"
          />
        </div>
      </div>
    </section>
  );
}
