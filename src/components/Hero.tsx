import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.12) contrast(1.1)' }}
        >
          <source src="/newhome.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[180px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(163,230,53,0.1), transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="pt-24 sm:pt-32 lg:pt-36" />

        {/* Main text */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pb-8">
          {/* Eyebrow pill */}
          <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
            <span className="text-white/55 text-[11px] font-medium uppercase tracking-[0.25em]">
              Enterprise Fitness Platform
            </span>
          </div>

          {/* H1 */}
          <h1 className="max-w-[860px] text-[42px] sm:text-[64px] lg:text-[88px] font-black tracking-[-0.02em] leading-[1.0]">
            <span className="text-white">The Fitness Platform</span>
            <br />
            <span className="text-[#A3E635]">Built for Universities.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 max-w-[580px] text-white/40 text-base sm:text-[18px] leading-[1.8]">
            Give every student a personalised training plan, real-time coaching, and the
            accountability to thrive — all managed from one powerful institution dashboard.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-[#A3E635] text-black px-7 py-4 font-bold text-sm uppercase tracking-[0.12em] transition-all hover:bg-[#B8F04A] hover:shadow-[0_0_50px_rgba(163,230,53,0.2)]"
            >
              Request a Demo
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white/45 border border-white/10 transition-all hover:border-white/20 hover:text-white/70 tracking-[0.08em] uppercase"
            >
              See the Platform
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-white/20">
            <span>10+ University Partners</span>
            <span className="hidden sm:inline">·</span>
            <span>500+ Active Students</span>
            <span className="hidden sm:inline">·</span>
            <span>98% Satisfaction Rate</span>
          </div>
        </div>

        {/* App preview */}
        <div className="relative flex justify-center pb-0">
          <div className="relative w-[220px] sm:w-[260px] md:w-[290px]">
            <div className="absolute -inset-20 bg-[#A3E635]/[0.04] rounded-full blur-[60px] pointer-events-none" />
            <div className="relative rounded-[2.5rem] border-[5px] border-white/[0.07] bg-black overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.95)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10" />
              <img
                src="/Dashboard.png"
                alt="StrengthHub Platform Dashboard"
                className="w-full h-auto block"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
