const Hero = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero video section with seamless blend */}
      <div className="relative h-[45vh] sm:h-[55vh] lg:h-[65vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.4) contrast(1.1)" }}
        >
          <source src="/newhome.mp4" type="video/mp4" />
        </video>

        {/* Layered gradients: top vignette, bottom seamless fade to black */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black" />

        {/* Diagonal accent line — subtle nod to slide 1 split */}
        <div
          className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-[#A3E635]/30 to-transparent hidden lg:block"
          style={{ transform: "skewX(-12deg) translateX(-120px)" }}
        />
      </div>

      {/* Text content section */}
      <div className="relative -mt-32 bg-gradient-to-b from-transparent via-black to-black px-4 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12 lg:px-10 lg:pt-16">
        <div className="mx-auto max-w-[920px] text-center">
          {/* Eyebrow label with accent underline — matches slide style */}
          <div className="mb-6 inline-flex flex-col items-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A3E635]">
              Online Personal Training
            </span>
            <span className="mt-2 h-[2px] w-12 bg-[#A3E635]" />
          </div>

          {/* Headline */}
          <h1 className="font-black tracking-tight leading-[1.05]">
            <span className="block text-white text-3xl sm:text-5xl lg:text-[64px]">
              Built for{" "}
              <span className="text-[#A3E635]">Real Results.</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-8 max-w-[680px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Expert coaches in body composition, delivering real results through{" "}
            <span className="font-semibold text-white">personalised 1-on-1 online coaching</span>.
            Train on your schedule with a{" "}
            <span className="font-semibold text-white">clear plan</span>,{" "}
            <span className="font-semibold text-white">accountability</span>, and{" "}
            <span className="font-semibold text-white">guidance</span>{" "}
            that keeps you moving forward.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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

          {/* Trust strip — optional, can be removed */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/40">
            <span>1-on-1 Coaching</span>
            <span className="hidden sm:inline text-[#A3E635]">•</span>
            <span>Personalised Plans</span>
            <span className="hidden sm:inline text-[#A3E635]">•</span>
            <span>Real Accountability</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;