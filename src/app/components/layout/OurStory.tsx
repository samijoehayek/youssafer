import { StorySlider } from "../ui/StorySlider";

export function OurStory() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24" // ✅ Padding updated
      style={{ backgroundImage: "url('/our-story.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container mx-auto px-6 lg:px-8">
        <h2 className="text-white font-bold text-7xl md:text-9xl lg:text-[120px] leading-none">
          Our
          <br />
          Story
        </h2>

        <p
          className="mt-8 text-white text-xl lg:text-xl font-light max-w-4xl"
          style={{ fontFamily: "var(--font-roboto)" }}
        >
          We’re not just building travel tech — we’re reshaping how business
          travel works across the Middle East and Africa. Backed by decades of
          experience in corporate travel and operational design, Yousaffer
          empowers Travel Agencies, TMCs, and Corporate Clients with smart tools
          and expert support that simplify travel, align with business goals,
          and elevate the entire experience.
        </p>

        {/* Here we include our interactive slider component */}
        <StorySlider />
      </div>
    </section>
  );
}
