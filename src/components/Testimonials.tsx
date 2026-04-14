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
      result: 'Built strength and confidence',
      quote:
        'I wanted to take lifting seriously but had no idea where to start. Izak made everything simple and structured, and kept me accountable every week. He’s genuinely different to other trainers, way more invested and actually cares about your progress.',
      image:
        'https://images.pexels.com/photos/3768722/pexels-photo-3768722.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Daniel K.',
      result: 'Stayed consistent through a busy college schedule',
      quote:
        'With college and a constantly changing schedule, I needed something flexible. The programming adapted around my week and made it easy to stay consistent. Izak kept me accountable the whole time and made training fit into my life, not the other way around.',
      image:
        'https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Chris M.',
      result: 'Got in shape while working full time with kids',
      quote:
        'Working full time with two young kids, I needed something quick and efficient. Having an online PT made it so much easier to stay on track without wasting time. Izak’s approach is genuinely unique and the accountability made all the difference.',
      image:
        'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section
      id="testimonials"
      className="section bg-[#0a0a0a] text-white py-16"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="fade-in text-white text-3xl font-bold mb-4">
            What Our Clients Say
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
                  <Quote className="w-8 h-8 text-[#7A725E]/60 mb-4" />
                  <p className="text-white/70 mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover opacity-80"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#7A725E]">
                        {testimonial.result}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#7A725E] text-[#7A725E]"
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
                className="fade-in bg-[#111] border border-white/10 rounded-xl p-6 hover:border-[#7A725E]/40 transition-colors duration-300"
              >
                <Quote className="w-8 h-8 text-[#7A725E]/60 mb-4" />
                <p className="text-white/70 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover opacity-80"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#7A725E]">
                      {testimonial.result}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#7A725E] text-[#7A725E]"
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
            className="inline-block px-8 py-3 bg-[#2e3d30] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;