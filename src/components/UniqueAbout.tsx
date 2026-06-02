import { useEffect, useRef } from 'react';
import { ShieldCheck, BarChart3, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Expert-Led Programming',
    body: 'Every program on the platform is built and overseen by qualified coaches with real-world experience in strength, body composition, and lifestyle fitness.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Progress',
    body: 'Members track workouts, nutrition, and habits in one place. Organisations get insight into engagement and outcomes across their cohort.',
  },
  {
    icon: Zap,
    title: 'Instant Access, Zero Friction',
    body: 'No equipment required to get started. The platform is fully mobile-first — students and staff can train on their schedule, from anywhere.',
  },
  {
    icon: Globe,
    title: 'Scalable for Any Organisation',
    body: 'Whether you\'re a student union, university, or corporate, the platform scales to your size and integrates with your existing wellbeing initiatives.',
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
            <p className="fade-in mt-6 text-white/50 text-lg max-w-2xl leading-relaxed">
              We go beyond generic wellness apps. StrengthHub Online pairs a powerful platform with real coaching expertise — giving your organisation a fitness solution people actually engage with.
            </p>
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
