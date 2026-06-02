const Hero = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-24 py-28 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

        {/* Left: Phone mockup */}
        <div className="relative flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[360px]">
          <div
            className="absolute -inset-16 rounded-full opacity-25 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, #A3E635 0%, transparent 70%)" }}
          />
          <img
            src="/Dashboard.png"
            alt="StrengthHub App"
            className="relative w-full h-auto rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
            style={{
              maskImage: "linear-gradient(to bottom, black 72%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 72%, transparent 100%)",
            }}
          />
        </div>

        {/* Right: Text */}
        <div className="flex-1 flex flex-col items-start">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#A3E635] mb-8">
            Fitness &amp; Wellness Platform
          </span>

          <h1 className="font-black tracking-tight leading-[0.95] text-[56px] sm:text-[72px] lg:text-[88px] xl:text-[100px]">
            Built for<br />
            <span className="text-[#A3E635]">you</span><br />
            &amp; 
          </h1>

          <p className="mt-10 text-lg sm:text-xl leading-relaxed text-white/50 max-w-[480px]">
            StrengthHub Online provides a{" "}
            <span className="text-white/90 font-medium">complete digital fitness platform</span>{" "}
            — workouts, nutrition, progress tracking, and community — deployed for your students or staff.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[#A3E635] px-9 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition-all duration-200 hover:bg-[#B8F04A] hover:shadow-[0_0_50px_rgba(163,230,53,0.45)]"
            >
              Book a Demo
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 px-9 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white/40 transition-all duration-200 hover:text-[#A3E635]"
            >
              View the App
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-white/20">
            <span>University Partnerships</span>
            <span className="text-[#A3E635]">&bull;</span>
            <span>Complete Platform</span>
            <span className="text-[#A3E635]">&bull;</span>
            <span>Student Wellbeing</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
