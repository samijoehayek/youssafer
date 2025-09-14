import { InteractiveFeatureBox } from '../ui/InteractiveFeatureBox';

export function SmarterSoftware() {
  return (
    <section className="bg-white p-5 md:p-8 lg:p-10">
      
      {/* Removed px-8 from this container to allow the child to be wider */}
      <div className="bg-deep-blue rounded-[40px] min-h-[1200px] w-full flex flex-col items-center justify-start py-24">
        
        {/* Added px-8 here to maintain padding for just the text content */}
        <div className="flex flex-col items-center text-center max-w-4xl px-8">
          <h2 className="text-5xl lg:text-[65px] leading-tight text-white">
            Powering Business Travel
            <br />
            <span className="font-bold">With Smarter Software</span>
          </h2>
          <p className="mt-6 text-lg lg:text-[20px] text-white/80 max-w-3xl">
            Skyvix empowers companies to manage travel in real time - seamlessly, intelligently, and with full compliance - all while driving measurable cost savings.
          </p>
        </div>

        {/* This container will now correctly be 90% of the blue box's full width */}
        <div className="mt-12 w-[90%] max-w-8xl flex-grow">
          <InteractiveFeatureBox />
        </div>

      </div>
    </section>
  );
}
