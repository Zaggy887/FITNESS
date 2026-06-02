import { useEffect, useRef } from 'react';
import { ShieldCheck, BarChart3, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Built to complement your life, not take over.',
    body: 'Life gets busy. StrengthHub adapts with you so staying consistent never feels like another thing on your plate.',
  },
  {
    icon: BarChart3,
    title: 'Promotes understanding and health literacy.',
    body: "We don't just hand you a plan. We help you understand your body and your habits so the results last well beyond the semester.",
  },
  {
    icon: Zap,
    title: 'Instant Access.',
    body: 'No equipment, no setup, no barriers. Open the app and go.',
  },
  {
    icon: Globe,
    title: 'Real Human Programming.',
    body: 'Every program is written by a real coach with real experience. Not generated. Not recycled.',
  },
];

const UniqueAbout = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="about" className="relative section bg-black py-20 sm:py-28 overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl pointer-events-none" style={{ background: '#A3E635' }} />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A3E635]">Why StrengthHub Online</span>
            <h2 className="fade-in mt-4 text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              More than a fitness app.<br />
              <span className="text-[#A3E635]">A wellbeing solution.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="fade-in bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 sm:p-8 hover:border-[#A3E635]/30 transition-colors duration-300"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-11 h-11 rounded-lg bg-[#A3E635]/10 border border-[#A3E635]/20 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-[#A3E635]" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueAbout;
