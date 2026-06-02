const Hero = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero section with video background and app showcase */}
      <div className="relative min-h-[100vh] sm:min-h-[100vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.3) contrast(1.1)" }}
        >
          <source src="/newhome.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black" />

        {/* Main content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[100vh] px-4 sm:px-8 lg:px-16 pt-24 pb-0">
          {/* Left: Text content */}
          <div className="flex-1 max-w-xl text-center lg:text-left mb-8 lg:mb-0 lg:pr-12">
            <div className="mb-6 inline-flex flex-col items-center lg:items-start">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A3E635]">
                Online Personal Training
              </span>
              <span className="mt-2 h-[2px] w-12 bg-[#A3E635]" />
            </div>

            <h1 className="font-black tracking-tight leading-[1.05]">
              <span className="block text-white text-3xl sm:text-5xl lg:text-[56px]">
                Built for{" "}
                <span className="text-[#A3E635]">Real Results.</span>
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8 mx-auto lg:mx-0">
              Expert coaches in body composition, delivering real results through{" "}
              <span className="font-semibold text-white">personalised 1-on-1 online coaching</span>.
              Train on your schedule with a{" "}
              <span className="font-semibold text-white">clear plan</span>,{" "}
              <span className="font-semibold text-white">accountability</span>, and{" "}
              <span className="font-semibold text-white">guidance</span>{" "}
              that keeps you moving forward.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#A3E635] px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition hover:bg-[#B8F04A] hover:shadow-[0_0_30px_rgba(163,230,53,0.4)]"
              >
                Book Free Consultation
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
                href="#about"
                className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-bold uppercase tracking-[0.15em] text-white border border-white/20 transition hover:border-[#A3E635] hover:text-[#A3E635]"
              >
                Learn More
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/40">
              <span>1-on-1 Coaching</span>
              <span className="hidden sm:inline text-[#A3E635]">&bull;</span>
              <span>Personalised Plans</span>
              <span className="hidden sm:inline text-[#A3E635]">&bull;</span>
              <span>Real Accountability</span>
            </div>
          </div>

          {/* Right: Phone mockup with bottom cut off */}
          <div className="relative flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[340px] self-end">
            {/* Glow effect behind phone */}
            <div
              className="absolute -inset-8 rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, #A3E635 0%, transparent 70%)" }}
            />
            {/* Phone frame */}
            <div className="relative">
              <img
                src="/Dashboard.png"
                alt="App Dashboard"
                className="w-full h-auto rounded-[2.5rem] shadow-2xl"
                style={{
                  maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;