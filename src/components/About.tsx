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
    <section id="about" className="section bg-orange-50" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in mb-6">
            <span className="text-[#FF6B35] font-bold">YC</span>
            <span className="text-gray-800">FITNESS</span>
          </h2>
          <p className="fade-in text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Your personal fitness journey starts here. We provide expert online personal training that fits your lifestyle, helping you achieve sustainable results through customized programs, dedicated coaching, and ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="fade-in card p-8 flex flex-col items-center text-center">
            <Dumbbell className="w-16 h-16 text-[#FF6B35] mb-4" />
            <h3 className="text-xl font-bold mb-4">Custom Programs</h3>
            <p className="text-gray-600">
              Every program is tailored specifically to your goals, fitness level, and available equipment. No cookie-cutter approaches, just results-driven training designed for you.
            </p>
          </div>

          <div className="fade-in card p-8 flex flex-col items-center text-center" style={{ transitionDelay: '0.2s' }}>
            <Heart className="w-16 h-16 text-[#FF6B35] mb-4" />
            <h3 className="text-xl font-bold mb-4">Expert Coaching</h3>
            <p className="text-gray-600">
              Work directly with certified personal trainers who are dedicated to your success. Get personalized guidance, form checks, and motivation every step of the way.
            </p>
          </div>

          <div className="fade-in card p-8 flex flex-col items-center text-center" style={{ transitionDelay: '0.4s' }}>
            <Target className="w-16 h-16 text-[#FF6B35] mb-4" />
            <h3 className="text-xl font-bold mb-4">Flexible & Convenient</h3>
            <p className="text-gray-600">
              Train on your schedule, anywhere in the world. Our online platform brings professional coaching to you, making fitness achievable no matter how busy life gets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
