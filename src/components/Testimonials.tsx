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
      name: 'Sarah M.',
      result: 'Hired within 2 weeks',
      quote: 'ONLYUgrads sent us three candidates. All three were exceptional. We ended up hiring one full-time and bringing another back as a contractor. The quality was unlike anything we\'d seen from traditional job boards.',
      image: 'https://images.pexels.com/photos/3768722/pexels-photo-3768722.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Michael T.',
      result: 'Finance graduate placed',
      quote: 'I was hesitant about using a recruiter, but ONLYUgrads actually understood what we needed. They didn\'t waste our time with irrelevant CVs. Straightforward, professional, and the hire has been fantastic.',
      image: 'https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emma L.',
      result: 'Internship turned permanent',
      quote: 'We brought on a Monash grad through ONLYUgrads for a 3-month internship. Twelve months later, she\'s a core part of our team. The 90-day guarantee gave us confidence to take the leap.',
      image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=400',
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
          <h2 className="fade-in text-white text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="fade-in text-white/60 text-lg">
            Companies that trusted us to find their next great hire
          </p>
        </div>

        <div className="mb-12">
          <div className="md:hidden flex gap-6 overflow-x-auto overflow-y-hidden px-2 pb-2 snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 snap-start w-[85%]">
                <div className="bg-[#111] border border-white/10 rounded-xl p-6 h-full">
                  <Quote className="w-8 h-8 text-[#7A725E]/60 mb-4" />
                  <p className="text-white/70 mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover opacity-80"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-[#7A725E]">{testimonial.result}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#7A725E] text-[#7A725E]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="fade-in bg-[#111] border border-white/10 rounded-xl p-6 hover:border-[#7A725E]/40 transition-colors duration-300">
                <Quote className="w-8 h-8 text-[#7A725E]/60 mb-4" />
                <p className="text-white/70 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover opacity-80"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-[#7A725E]">{testimonial.result}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#7A725E] text-[#7A725E]" />
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
            Start Your Search
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
