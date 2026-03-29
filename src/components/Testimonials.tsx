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
      result: 'Lost 25kg in 6 months',
      quote: 'YCFITNESS completely transformed my relationship with fitness. The personalized program fit perfectly into my busy schedule, and the support from my coach kept me motivated every step of the way.',
      image: 'https://images.pexels.com/photos/3768722/pexels-photo-3768722.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Michael T.',
      result: 'Built muscle & confidence',
      quote: 'As someone who always struggled with consistency, having an online coach made all the difference. The accountability and expert guidance helped me achieve results I never thought possible.',
      image: 'https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emma L.',
      result: 'Transformed in 12 weeks',
      quote: 'The flexibility of online training was perfect for my lifestyle. I got professional coaching without having to commute to a gym. The results speak for themselves!',
      image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section
      id="testimonials"
      className="section bg-[#FF6B35] text-white py-16"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="fade-in text-white text-3xl font-bold mb-4">Real People, Real Results</h2>
          <p className="fade-in text-white/90 text-lg">
            Join hundreds of clients who have transformed their lives with YCFITNESS
          </p>
        </div>

        <div className="mb-12">
          <div className="md:hidden flex gap-6 overflow-x-auto overflow-y-hidden px-2 pb-2 snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 snap-start w-[85%]">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full">
                  <Quote className="w-8 h-8 text-white/50 mb-4" />
                  <p className="text-white/90 mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-white/80">{testimonial.result}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="fade-in bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Quote className="w-8 h-8 text-white/50 mb-4" />
                <p className="text-white/90 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/80">{testimonial.result}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-[#FF6B35] font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
