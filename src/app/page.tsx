import Homepage from "./components/layout/Homepage";
import { OurStory } from "./components/layout/OurStory";
import { SmarterSoftware } from "./components/layout/SmarterSoftwareSection";
import { EcosystemSection } from "./components/layout/EcosystemSection";
import { BeyondSoftwareSection } from "./components/layout/BeyondSoftwareSection";
import { AligningExpectationsSection } from "./components/layout/AligningExpectationsSection";
import DemoSection from "./components/layout/EmailSection";
import { AdvantagesSection } from "./components/layout/IntelligentDesignSection";
import { FinalCTASection } from "./components/layout/CTASection";
import { Footer } from "./components/layout/Footer";
// ✅ Import the Next.js Image component
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Homepage />
      <div className="bg-white h-24" />
      <OurStory />
      <div className="bg-white h-24" />
      <SmarterSoftware />
      <div className="bg-white h-24" />
      <EcosystemSection />
      <div className="bg-white h-24" />
      <BeyondSoftwareSection />
      <div className="bg-white h-24" />
      <AligningExpectationsSection />
      <div className="bg-white h-24" />
      <DemoSection />
      <AdvantagesSection />

      {/* ✅ New Full-Width Image Section */}
      <section className="relative w-full h-[900px]">
        <Image
          src="/wwpeople.png"
          alt="A diverse group of professionals working together globally."
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </section>

      <FinalCTASection />
      <Footer />
    </main>
  );
}