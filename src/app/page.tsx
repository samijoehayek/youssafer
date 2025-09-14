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
      <FinalCTASection />
      <Footer />
    </main>
  );
}
