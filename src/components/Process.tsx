import { useEffect, useRef, useState } from 'react';
import { LayoutDashboard, Dumbbell, Apple, TrendingUp, Users } from 'lucide-react';

const screens = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    image: '/Dashboard.png',
    description: 'Your personalised home base with daily plans, habit tracking, and progress at a glance.',
  },
  {
    id: 'workout',
    label: 'Workout',
    icon: Dumbbell,
    image: '/Workout.png',
    description: 'Structured programs tailored to your goals with guided exercises and real time tracking.',
  },
  {
    id: 'nutrition',
    label: 'Nutrition',
    icon: Apple,
    image: '/Nutrtion.png',
    description: 'Track your meals, macros, and calories with a full nutrition diary and smart insights.',
  },
  {
    id: 'progress',
    label: 'Progress',
    icon: TrendingUp,
    image: '/Progress.png',
    description: 'See your strength gains, weight trends, and habit consistency over time.',
  },
  {
    id: 'community',
    label: 'Community',
    icon: Users,
    image: '/Community.png',
    description: 'Connect with other members, share wins, join challenges, and stay motivated together.',
  },
];

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const active = screens[activeIndex];

  return (
    <section id="process" className="section bg-black relative overflow-hidden" ref={sectionRef}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="fade-in text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">View Our </span>
            <span className="text-[#A3E635]">Platform</span>
          </h2>
          <p className="fade-in text-white/60 text-lg">
            Everything you need to train smarter, eat better, and stay consistent.
          </p>
        </div>

        <div className="fade-in flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
          {screens.map(({ id, label, icon: Icon }, index) => (
            <button
              key={id}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 min-h-[44px] ${
                activeIndex === index
                  ? 'bg-[#A3E635] text-black'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div className="fade-in max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-[200px] sm:w-[260px] md:w-[300px]">
                <div className="relative rounded-[2.5rem] border-[6px] border-white/10 bg-black overflow-hidden shadow-2xl shadow-[#A3E635]/5">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10" />
                  <img
                    key={active.id}
                    src={active.image}
                    alt={active.label}
                    className="w-full h-auto block animate-fade-in"
                  />
                </div>

                <div className="absolute -inset-8 bg-[#A3E635]/5 rounded-full blur-3xl -z-10" />
              </div>
            </div>

            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A3E635]/10 border border-[#A3E635]/20">
                <active.icon className="w-5 h-5 text-[#A3E635]" />
                <span className="text-[#A3E635] font-semibold text-sm tracking-wide uppercase">
                  {active.label}
                </span>
              </div>

              <p className="text-white/70 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                {active.description}
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {screens.map((screen, index) => (
                  <button
                    key={screen.id}
                    onClick={() => setActiveIndex(index)}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      activeIndex === index
                        ? 'border-[#A3E635] scale-105'
                        : 'border-white/10 opacity-50 hover:opacity-80'
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
                className="inline-block px-8 py-3 font-semibold text-white bg-[#2a3a0f] hover:bg-[#3a4f15] transition-colors duration-300 rounded-lg mt-2"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
