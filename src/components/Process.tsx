import { useEffect, useRef, useState } from 'react';
import { LayoutDashboard, Dumbbell, Apple, TrendingUp, Users } from 'lucide-react';

const screens = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    image: '/Dashboard.png',
    description:
      "Every member's personalised command centre — daily plans, habit tracking, and progress at a glance. Your institution gains full visibility from a single admin view.",
  },
  {
    id: 'workout',
    label: 'Workout',
    icon: Dumbbell,
    image: '/Workout.png',
    description:
      'Structured programmes built around each student\'s goals, with guided exercises and real-time coaching feedback. No generic templates — everything is tailored.',
  },
  {
    id: 'nutrition',
    label: 'Nutrition',
    icon: Apple,
    image: '/Nutrtion.png',
    description:
      'Complete nutrition logging with macros, calories, and smart insights — no dietitian required. Students build healthy, sustainable habits from day one.',
  },
  {
    id: 'progress',
    label: 'Progress',
    icon: TrendingUp,
    image: '/Progress.png',
    description:
      'Live analytics on strength gains, body composition, and habit consistency — at the individual and institution level. Demonstrate ROI with real data.',
  },
  {
    id: 'community',
    label: 'Community',
    icon: Users,
    image: '/Community.png',
    description:
      'A built-in community platform keeps your members engaged, motivated, and connected to your institution\'s culture — driving retention and long-term results.',
  },
];

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  const active = screens[activeIndex];

  return (
    <section id="process" className="section bg-[#0a0a0a] relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.05]" />

      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="fade-in text-[#A3E635] text-[11px] font-semibold uppercase tracking-[0.28em] mb-4">
            The Platform
          </p>
          <h2 className="fade-in text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
            <span className="text-white">Every student. </span>
            <span className="text-white/30">One platform.</span>
          </h2>
          <p className="fade-in mt-5 text-white/40 text-base sm:text-lg leading-relaxed">
            Five powerful modules that give members everything they need — and institutions everything they want.
          </p>
        </div>

        {/* Tab pills */}
        <div className="fade-in flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 max-w-2xl mx-auto">
          {screens.map(({ id, label, icon: Icon }, index) => (
            <button
              key={id}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-[#A3E635] text-black'
                  : 'bg-white/[0.04] text-white/40 border border-white/[0.06] hover:bg-white/[0.07] hover:text-white/70'
              }`}
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="fade-in max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Phone mockup */}
            <div className="flex justify-center">
              <div className="relative w-[220px] sm:w-[260px] md:w-[280px]">
                <div className="absolute -inset-10 bg-[#A3E635]/[0.04] rounded-full blur-3xl -z-10" />
                <div className="relative rounded-[2.5rem] border-[5px] border-white/[0.07] bg-black overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.7)]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10" />
                  <img
                    key={active.id}
                    src={active.image}
                    alt={active.label}
                    className="w-full h-auto block animate-fade-in"
                  />
                </div>
              </div>
            </div>

            {/* Text + thumbnails */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#A3E635]/20 bg-[#A3E635]/[0.05]">
                <active.icon className="w-4 h-4 text-[#A3E635]" />
                <span className="text-[#A3E635] font-semibold text-xs tracking-[0.2em] uppercase">
                  {active.label}
                </span>
              </div>

              <p className="text-white/55 text-base sm:text-lg leading-[1.75] max-w-md mx-auto lg:mx-0">
                {active.description}
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {screens.map((screen, index) => (
                  <button
                    key={screen.id}
                    onClick={() => setActiveIndex(index)}
                    className={`w-12 h-12 sm:w-14 sm:h-14 overflow-hidden border-2 transition-all duration-300 ${
                      activeIndex === index
                        ? 'border-[#A3E635] scale-105 opacity-100'
                        : 'border-white/[0.08] opacity-35 hover:opacity-60'
                    }`}
                  >
                    <img
                      src={screen.image}
                      alt={screen.label}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-white/40 text-sm font-medium uppercase tracking-[0.12em] border-b border-white/15 pb-0.5 hover:text-white/70 hover:border-white/30 transition-all"
              >
                Request a platform demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
