import { useState, useEffect } from 'react';

const platformImages = [
  { src: '/Dashboard.png', alt: 'StrengthHub Dashboard' },
  { src: '/Workout.png', alt: 'StrengthHub Workouts' },
  { src: '/Nutrtion.png', alt: 'StrengthHub Nutrition' },
  { src: '/Progress.png', alt: 'StrengthHub Progress' },
  { src: '/Community.png', alt: 'StrengthHub Community' },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % platformImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex items-center">
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-24 py-24 sm:py-28 flex flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-20">

        {/* Left: Phone mockup */}
        <div className="relative flex-shrink-0 w-[200px] sm:w-[280px] lg:w-[360px]">
          <div
            className="absolute -inset-16 rounded-full opacity-25 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, #A3E635 0%, transparent 70%)" }}
          />
          <div className="relative w-full">
            {platformImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={`w-full h-auto rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.9)] transition-opacity duration-1000 ease-in-out ${
                  index === 0 ? 'relative' : 'absolute inset-0'
                }`}
                style={{
                  opacity: index === activeIndex ? 1 : 0,
                  maskImage: "linear-gradient(to bottom, black 72%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 72%, transparent 100%)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.35em] text-[#A3E635] mb-6 sm:mb-8">
            Fitness &amp; Wellness Platform
          </span>

          <h1 className="font-black tracking-tight leading-[0.95] text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[100px]">
            Built for<br />
            <span className="text-[#A3E635]">you</span> &amp;<br />
            everybody<br />
            around <span className="text-[#A3E635]">you</span>
          </h1>

          <p className="mt-6 sm:mt-10 text-base sm:text-lg md:text-xl leading-relaxed text-white/50 max-w-[480px]">
            StrengthHub Online is the{" "}
            <span className="text-white/90 font-medium">starting point for helping young people</span>{" "}
            build confidence, structure, and take control of everyday life.
          </p>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <a
              href="#process"
              className="inline-flex items-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-white/40 border border-white/40 transition-all duration-200 hover:text-[#A3E635] hover:border-[#A3E635]"
            >
              View the App
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;
