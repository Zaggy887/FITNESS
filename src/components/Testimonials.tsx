import { useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jake R.',
    role: 'University Student',
    quote:
      "I wanted to get more serious with lifting but had no idea where to start. The platform made it simple — and Coach Zak kept me accountable the whole way. You can tell he actually cares about your progress.",
  },
  {
    name: 'Daniel K.',
    role: 'University Student',
    quote:
      'My schedule changes every week with lectures and exams, so I needed something flexible. The programme worked around my week, which made staying consistent so much easier. Genuinely different to anything else I've tried.',
  },
  {
    name: 'Josh S.',
    role: 'Graduate Student',
    quote:
      "Working full time and studying, I don't have time to overthink training. Having an online coach helped with efficiency — I could just get in and get it done. The accountability made a huge difference.",
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="testimonials" className="section bg-black relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.05]" />

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="fade-in text-[#A3E635] text-[11px] font-semibold uppercase tracking-[0.28em] mb-4">
            What Members Say
          </p>
          <h2 className="fade-in text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.05]">
            Straight from the students.
          </h2>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto overflow-y-hidden px-1 pb-3 snap-x snap-mandatory">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-shrink-0 snap-start w-[85%]">
              <div className="border border-white/[0.07] bg-white/[0.02] p-6 h-full">
                <Quote className="w-6 h-6 text-[#A3E635]/40 mb-4" />
                <p className="text-white/50 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-white/25 text-xs mt-0.5 uppercase tracking-[0.15em]">{t.role}</p>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#A3E635] text-[#A3E635]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-px bg-white/[0.05] max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="fade-in bg-black p-7 md:p-8 hover:bg-white/[0.02] transition-colors duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <Quote className="w-6 h-6 text-[#A3E635]/35 mb-5" />
              <p className="text-white/45 text-sm leading-[1.8] mb-7 italic">{t.quote}</p>
              <div>
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-white/25 text-xs mt-0.5 uppercase tracking-[0.15em]">{t.role}</p>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#A3E635] text-[#A3E635]" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in text-center mt-12 sm:mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#A3E635] text-black px-7 py-4 font-bold text-sm uppercase tracking-[0.12em] hover:bg-[#B8F04A] transition-colors"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
