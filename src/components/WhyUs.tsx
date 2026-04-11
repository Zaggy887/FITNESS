import { useEffect, useRef } from 'react';
import { Activity, Heart, Zap, Target } from 'lucide-react';

const cards = [
  {
    icon: Activity,
    title: 'Proven Results',
    description: 'Every placement backed by our 90-day guarantee',
  },
  {
    icon: Heart,
    title: 'Personalised Matching',
    description: 'Candidates shortlisted for your role, not a database search',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Shortlists delivered within days, not weeks',
  },
  {
    icon: Target,
    title: 'University Network',
    description: "Direct access to Melbourne's top graduating talent",
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
    <section className="section bg-[#0a0a0a] py-20 border-t border-white/10" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="fade-in text-3xl font-bold text-white mb-3">Why ONLYUgrads</h2>
          <p className="fade-in text-white/50 text-base">The edge that sets our candidates apart</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="fade-in bg-[#111] border border-white/10 rounded-xl p-8 flex flex-col items-start hover:border-[#7A725E]/50 transition-colors duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="bg-[#1a1a1a] rounded-lg p-3 mb-6">
                  <Icon className="w-6 h-6 text-[#7A725E]" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-base mb-3">{card.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
