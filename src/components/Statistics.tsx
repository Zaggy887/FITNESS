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
    <section className="section bg-gradient-to-b from-orange-50 to-white py-12" ref={sectionRef}>
      <div className="container text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Why Choose YCFITNESS</h2>
        <p className="text-xl text-[#FF6B35] mb-10 max-w-3xl mx-auto">
          Experience the benefits of personalized online training
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="fade-in stat-card group">
            <div className="w-20 h-20 mx-auto mb-6 bg-[#FF6B35] rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Activity className="w-10 h-10 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#FF6B35] mb-2"></div>
            <div className="text-xl text-gray-800 font-semibold mb-2">
              Proven Results
            </div>
            <p className="text-gray-600">
              Science-backed training methods that deliver measurable progress
            </p>
          </div>

          <div className="fade-in stat-card group" style={{transitionDelay: '0.2s'}}>
            <div className="w-20 h-20 mx-auto mb-6 bg-[#FF6B35] rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#FF6B35] mb-2"></div>
            <div className="text-xl text-gray-800 font-semibold mb-2">
              Personalized Care
            </div>
            <p className="text-gray-600">
              One-on-one attention tailored to your unique needs and goals
            </p>
          </div>

          <div className="fade-in stat-card group" style={{transitionDelay: '0.4s'}}>
            <div className="w-20 h-20 mx-auto mb-6 bg-[#FF6B35] rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#FF6B35] mb-2"></div>
            <div className="text-xl text-gray-800 font-semibold mb-2">
              Train Anywhere
            </div>
            <p className="text-gray-600">
              Flexibility to workout at home, gym, or on the road
            </p>
          </div>

          <div className="fade-in stat-card group" style={{transitionDelay: '0.6s'}}>
            <div className="w-20 h-20 mx-auto mb-6 bg-[#FF6B35] rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Target className="w-10 h-10 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#FF6B35] mb-2"></div>
            <div className="text-xl text-gray-800 font-semibold mb-2">
              Expert Guidance
            </div>
            <p className="text-gray-600">
              Certified trainers with years of experience and proven track records
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stat-card {
          @apply bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300;
        }
      `}</style>
    </section>
  );
};

export default Statistics;
