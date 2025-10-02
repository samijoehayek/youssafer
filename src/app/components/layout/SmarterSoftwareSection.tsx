import { InteractiveFeatureBox } from '../ui/InteractiveFeatureBox';

export function SmarterSoftware() {
  return (
    <section className="bg-white p-5 md:p-8 lg:p-10">
      
      <div 
        className="bg-deep-blue rounded-[40px] min-h-[1200px] w-full flex flex-col items-center justify-start py-24 relative overflow-hidden"
        style={{
          // ✅ CORRECTED: The angle is now 135deg for the opposite direction
          backgroundImage: `repeating-linear-gradient(
            135deg,          /* This creates the true opposite diagonal line */
            transparent, 
            transparent 15px, 
            rgba(0, 0, 0, 0.08) 15px, 
            rgba(0, 0, 0, 0.08) 16.5px
          )`
        }}
      >
        
        <div className="flex flex-col items-center text-center max-w-4xl px-8 z-10">
          <h2 className="text-5xl lg:text-[65px] leading-tight text-white">
            Powering Business Travel
            <br />
            <span className="font-bold">With Smarter Software</span>
          </h2>
          <p className="mt-6 text-lg lg:text-[19px] text-white/80 max-w-3xl">
            Skyvix empowers companies to manage travel in real time - seamlessly, intelligently, and with full compliance - all while driving measurable cost savings.
          </p>
        </div>

        <div className="mt-12 w-[90%] max-w-8xl flex-grow z-10">
          <InteractiveFeatureBox />
        </div>

      </div>
    </section>
  );
}