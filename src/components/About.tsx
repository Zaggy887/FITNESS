import { useEffect, useRef } from 'react';
import { Dumbbell, Heart, Target } from 'lucide-react';

const About = () => {
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
    <section id="about" className="section bg-[#0a0a0a] py-20" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in mb-6 text-3xl font-bold text-white">
            <span className="text-[#7A725E]">ONLY</span>
            <span className="text-white">U</span>
            <span className="text-[#7A725E]">grads</span>
          </h2>
          <p className="fade-in text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            We connect Melbourne's top university graduates with leading companies. Our talent pipeline is built on academic excellence, ambition, and real-world potential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="fade-in bg-[#111] border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#7A725E]/50 transition-colors duration-300">
            <Dumbbell className="w-12 h-12 text-[#7A725E] mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Curated Talent</h3>
            <p className="text-white/60">
              Every candidate is individually vetted for academic performance, communication skills, and professional drive. No generic applicants.
            </p>
          </div>

          <div className="fade-in bg-[#111] border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#7A725E]/50 transition-colors duration-300" style={{ transitionDelay: '0.2s' }}>
            <Heart className="w-12 h-12 text-[#7A725E] mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Dedicated Support</h3>
            <p className="text-white/60">
              We stay with you through the entire process — from shortlisting to placement — and follow up through the first 90 days.
            </p>
          </div>

          <div className="fade-in bg-[#111] border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#7A725E]/50 transition-colors duration-300" style={{ transitionDelay: '0.4s' }}>
            <Target className="w-12 h-12 text-[#7A725E] mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Results-Driven</h3>
            <p className="text-white/60">
              Our performance-based model means you only pay after a successful hire. We're invested in outcomes, not activity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
