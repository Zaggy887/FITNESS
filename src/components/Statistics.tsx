import { useEffect, useRef } from 'react';
import { Activity, Heart, Zap, Target } from 'lucide-react';

const Statistics = () => {
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
    <section className="section bg-[#0a0a0a] py-16" ref={sectionRef}>
      <div className="container text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">Why ONLYUgrads</h2>
        <p className="text-[#7A725E] mb-10 max-w-3xl mx-auto">
          The edge that sets our candidates apart
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Activity, label: 'Proven Results', desc: 'Every placement backed by our 90-day guarantee' },
            { icon: Heart, label: 'Personalised Matching', desc: 'Candidates shortlisted for your role, not a database search' },
            { icon: Zap, label: 'Fast Turnaround', desc: 'Shortlists delivered within days, not weeks' },
            { icon: Target, label: 'University Network', desc: 'Direct access to Melbourne\'s top graduating talent' },
          ].map(({ icon: Icon, label, desc }, i) => (
            <div
              key={i}
              className="fade-in bg-[#111] border border-white/10 rounded-xl p-8 hover:border-[#7A725E]/40 transition-colors duration-300"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 bg-[#7A725E]/20 rounded-xl flex items-center justify-center">
                <Icon className="w-7 h-7 text-[#7A725E]" />
              </div>
              <div className="text-lg text-white font-semibold mb-2">{label}</div>
              <p className="text-white/55 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
