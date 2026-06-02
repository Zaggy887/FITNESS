import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: 'Jake R.',
      role: 'Deakin University Student',
      quote:
        "I'd always wanted to get consistent with training but never knew where to start. StrengthHub gave me a clear plan, tracked everything in one place, and the community kept me accountable. I've genuinely stuck with it for months now.",
    },
    {
      name: 'Daniel K.',
      role: 'Monash University Student',
      quote:
        "Between assignments and part-time work, fitting in exercise always felt impossible. The app works around my week — I can train whenever I have a gap. It's the first fitness program I've actually stuck to.",
    },
    {
      name: 'Josh S.',
      role: 'RMIT University Student',
      quote:
        "The nutrition and workout tracking in one app is a game changer. I finally understand what I'm eating and why. The coach support through the platform is fast and actually useful — not just generic advice.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="section bg-[#0a0a0a] text-white py-16"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="fade-in text-2xl sm:text-3xl font-bold mb-4">
            <span className="text-white">What </span><span className="text-[#A3E635]">Students Say</span>
          </h2>
          <p className="fade-in text-white/60 text-lg">
            Real results from students across Melbourne's top universities
          </p>
        </div>

        <div className="mb-12">
          {/* Mobile */}
          <div className="md:hidden flex gap-6 overflow-x-auto overflow-y-hidden px-2 pb-2 snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 snap-start w-[85%]">
                <div className="bg-[#111] border border-white/10 rounded-xl p-6 h-full">
                  <Quote className="w-8 h-8 text-[#A3E635]/60 mb-4" />
                  <p className="text-white/70 mb-6 italic">{testimonial.quote}</p>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-white/40 text-xs mt-1">{testimonial.role}</p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#A3E635] text-[#A3E635]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="fade-in bg-[#111] border border-white/10 rounded-xl p-6 hover:border-[#A3E635]/40 transition-colors duration-300"
              >
                <Quote className="w-8 h-8 text-[#A3E635]/60 mb-4" />
                <p className="text-white/70 mb-6 italic">{testimonial.quote}</p>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-white/40 text-xs mt-1">{testimonial.role}</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#A3E635] text-[#A3E635]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-[#A3E635] px-9 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition-all duration-200 hover:bg-[#B8F04A] hover:shadow-[0_0_40px_rgba(163,230,53,0.4)]"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;