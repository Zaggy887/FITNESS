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
      quote:
        "I wanted to get more serious with lifting but honestly had no clue what I was doing. Izak made it super simple and easy to follow, and kept me accountable the whole time. He's genuinely different to other trainers, you can tell he actually cares.",
    },
    {
      name: 'Daniel K.',
      quote:
        "With college my schedule is always changing, so I needed something flexible. The program just worked around my week which made it so much easier to stay consistent. Izak kept me accountable the whole time and made it all really manageable.",
    },
    {
      name: 'Josh S.',
      quote:
        "Working full time with two young kids, I don't have time to overthink training. Having an online PT helped so much with efficiency, I could just get in and get it done. Izak's approach is honestly different and the accountability made a huge difference.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="section bg-[#0a0a0a] text-white py-16 relative overflow-hidden"
      ref={sectionRef}
    >
      <div
        className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-[#A3E635]/30 to-transparent hidden lg:block pointer-events-none"
        style={{ transform: "skewX(12deg) translateX(120px)" }}
      />
      <div
        className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-[#A3E635]/30 to-transparent hidden lg:block pointer-events-none"
        style={{ transform: "skewX(12deg) translateX(-120px)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="fade-in inline-flex flex-col items-center mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A3E635]">
              Testimonials
            </span>
            <span className="mt-2 h-[2px] w-12 bg-[#A3E635]" />
          </div>
          <h2 className="fade-in text-3xl font-bold mb-4">
            <span className="text-white">What </span><span className="text-[#A3E635]">Our Clients Say</span>
          </h2>
          <p className="fade-in text-white/60 text-lg">
            Clients who trusted us to transform their bodies
          </p>
        </div>

        <div className="mb-12">
          {/* Mobile */}
          <div className="md:hidden flex gap-6 overflow-x-auto overflow-y-hidden px-2 pb-2 snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 snap-start w-[85%]">
                <div className="bg-[#111] border border-white/10 rounded-xl p-6 h-full">
                  <Quote className="w-8 h-8 text-[#A3E635]/60 mb-4" />
                  <p className="text-white/70 mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-white">
                      {testimonial.name}
                    </p>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#A3E635] text-[#A3E635]"
                      />
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
                <p className="text-white/70 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <p className="font-bold text-white">
                    {testimonial.name}
                  </p>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#A3E635] text-[#A3E635]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#2a3a0f] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-32 bg-gradient-to-r from-transparent via-[#A3E635]/40 to-transparent pointer-events-none" />
    </section>
  );
};

export default Testimonials;