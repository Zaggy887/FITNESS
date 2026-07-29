import { ArrowDown, ExternalLink, GraduationCap, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#0A0A0B] pt-[72px] text-white">
      <div className="pointer-events-none absolute left-[-12rem] top-[16%] h-[36rem] w-[36rem] rounded-full bg-[#7ED957]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-12rem] top-[35%] h-[32rem] w-[32rem] rounded-full bg-[#3B82F6]/[0.08] blur-[120px]" />

      <div className="container relative grid min-h-[calc(100vh-72px)] items-center gap-14 py-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:py-20">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#7ED957]/25 bg-[#7ED957]/10 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9FE264]">
            <GraduationCap className="h-4 w-4" /> Built for Australian university life
          </div>

          <h1 className="max-w-[760px] text-[2.8rem] font-black leading-[0.94] tracking-[-0.065em] text-white sm:text-[4.7rem] lg:text-[5.6rem] xl:text-[6.25rem]">
            Training built around <span className="text-[#7ED957]">student life.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/[0.58] sm:text-xl">
            StrengthHub Online brings fitness, nutrition education, habit support and campus community into one student-friendly platform. It helps young people build confidence and consistency without expecting life to revolve around the gym.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7ED957] px-7 py-4 text-sm font-bold text-[#0A0A0B] transition hover:bg-[#9FE264]"
            >
              Explore the platform <ArrowDown className="h-4 w-4" />
            </button>
            <a
              href="https://strengthhubonline.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-7 py-4 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/[0.08]"
            >
              View app demo <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/45">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#7ED957]" /> Evidence-informed education</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#7ED957]" /> Flexible around busy periods</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#7ED957]" /> Designed for real students</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
          <div className="absolute inset-10 rounded-full bg-[#7ED957]/10 blur-[90px]" />
          <div className="relative mx-auto w-[min(78vw,280px)] sm:w-[310px] lg:w-[345px]">
            <div className="rounded-[2.7rem] border border-white/15 bg-[#121214] p-2 shadow-[0_45px_120px_rgba(0,0,0,0.8)]">
              <div className="aspect-[9/19.5] overflow-hidden rounded-[2.25rem] bg-black">
                <img
                  src="/app-dashboard-2026.png"
                  alt="StrengthHub Online student dashboard"
                  className="h-full w-full object-contain object-top"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-[18%] hidden max-w-[200px] rounded-2xl border border-white/10 bg-[#121214]/[0.92] p-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7ED957]">Plan Around Your Life</p>
            <p className="mt-2 text-sm font-semibold leading-snug text-white">Training adapts around exams, travel, work and busy weeks.</p>
          </div>

          <div className="absolute bottom-[13%] right-0 hidden max-w-[190px] rounded-2xl border border-white/10 bg-[#121214]/[0.92] p-4 shadow-2xl backdrop-blur-xl sm:block lg:-right-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#3B82F6]">12-minute workouts</p>
            <p className="mt-2 text-sm font-semibold leading-snug text-white">Quick, guided sessions when time and equipment are limited.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
