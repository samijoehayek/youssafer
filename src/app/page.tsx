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
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* ✅ Each section now has an ID for scrolling */}
      <section id="home">
        <Homepage />
      </section>
      <div className="bg-white h-24" />
      <section id="our-story">
        <OurStory />
      </section>
      <div className="bg-white h-24" />
      <section id="features">
        <SmarterSoftware />
      </section>
      <div className="bg-white h-24" />
      <section id="services">
        <EcosystemSection />
      </section>
      <div className="bg-white h-24" />
      <BeyondSoftwareSection />
      <div className="bg-white h-24" />
      <AligningExpectationsSection />
      <div className="bg-white h-24" />
      <section>
        <DemoSection />
      </section>
      <section id="expertise">
        <AdvantagesSection />
      </section>

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
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
