import { useEffect, useRef } from 'react';
import { Activity, Heart, Zap, Target } from 'lucide-react';

const cards = [
  {
    icon: Activity,
    title: 'Proven Results',
    description: 'Science-backed programming that delivers measurable body composition changes',
  },
  {
    icon: Heart,
    title: 'Personalised Coaching',
    description: 'Programs built around your goals, lifestyle, and equipment — not a one-size-fits-all plan',
  },
  {
    icon: Zap,
    title: 'Train Anywhere',
    description: 'Full access to your coach and program from any device, at any time, anywhere in the world',
  },
  {
    icon: Target,
    title: 'Accountability First',
    description: 'Regular check-ins, progress tracking, and adjustments to keep you moving forward',
  },
];

const WhyUs = () => {
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
    <section className="section bg-[#0a0a0a] py-20 border-t border-white/10 relative overflow-hidden" ref={sectionRef}>
      {/* Diagonal accent lines */}
      <div
        className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-[#A3E635]/30 to-transparent hidden lg:block pointer-events-none"
        style={{ transform: "skewX(12deg) translateX(120px)" }}
      />
      <div
        className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-[#A3E635]/30 to-transparent hidden lg:block pointer-events-none"
        style={{ transform: "skewX(12deg) translateX(-120px)" }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-14">
          <div className="fade-in inline-flex flex-col items-center mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A3E635]">
              Our Edge
            </span>
            <span className="mt-2 h-[2px] w-12 bg-[#A3E635]" />
          </div>
          <h2 className="fade-in text-3xl font-bold text-white mb-3">Why StrengthHubOnline</h2>
          <p className="fade-in text-white/50 text-base">The edge that sets our coaching apart</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="fade-in bg-[#111] border border-white/10 rounded-xl p-8 flex flex-col items-start hover:border-[#A3E635]/50 transition-colors duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="bg-[#1a1a1a] rounded-lg p-3 mb-6">
                  <Icon className="w-6 h-6 text-[#A3E635]" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-base mb-3">{card.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-32 bg-gradient-to-r from-transparent via-[#A3E635]/40 to-transparent pointer-events-none" />
    </section>
  );
};

export default WhyUs;
