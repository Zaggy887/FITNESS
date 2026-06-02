import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const Universities = () => {
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

  const universities = [
    { logo: '/Uni_Melbourne_LOGO', name: 'The University of Melbourne' },
    { logo: '/Monash_LOGO.png', name: 'Monash University' },
    { logo: '/Deakin_LOGO.png', name: 'Deakin University' },
    { logo: '/Swinburne_LOGO.png', name: 'Swinburne University' },
    { logo: '/RMIT_LOGO.png', name: 'RMIT University' },
  ];

  return (
    <section
      id="universities"
      className="section bg-[#0a0a0a] text-white py-16 border-t border-white/10"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A3E635]">Trusted By</span>
          <h2 className="fade-in text-white text-3xl font-bold mt-4 mb-4">
            Partnering with Melbourne's{' '}
            <span className="text-[#A3E635]">Leading Universities</span>
          </h2>
          <p className="fade-in text-white/50 text-base max-w-xl mx-auto">
            StrengthHub Online works with universities and organisations to bring structured fitness and wellness programs directly to their students and staff.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex md:hidden gap-6 overflow-x-auto overflow-y-hidden px-2 pb-2 snap-x snap-mandatory">
            {universities.map((uni, index) => (
              <div key={index} className="flex-shrink-0 snap-start w-40">
                <img
                  src={uni.logo}
                  alt={`${uni.name} logo`}
                  className={`${
                    uni.name === 'The University of Melbourne' ? 'h-24 mt-[-12px]' : 'h-20'
                  } w-full object-contain mx-auto fade-in brightness-0 invert opacity-40`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="hidden md:flex flex-wrap justify-center items-center gap-14">
            {universities.map((uni, index) => (
              <div key={index} className="w-[180px]">
                <img
                  src={uni.logo}
                  alt={`${uni.name} logo`}
                  className={`${
                    uni.name === 'The University of Melbourne' ? 'h-24 mt-[-12px]' : 'h-20'
                  } w-full object-contain mx-auto fade-in brightness-0 invert opacity-40 hover:opacity-75 transition-opacity duration-300`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="fade-in bg-[#111] border border-white/10 rounded-xl p-6 hover:border-[#A3E635]/30 transition-colors duration-300">
            <CheckCircle className="w-6 h-6 text-[#A3E635] mb-4" />
            <h3 className="text-white text-lg font-bold mb-2">Aligned with Wellbeing Initiatives</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              All programs are designed to align with university wellbeing frameworks and institutional policies.
            </p>
          </div>

          <div className="fade-in bg-[#111] border border-white/10 rounded-xl p-6 hover:border-[#A3E635]/30 transition-colors duration-300" style={{ transitionDelay: '0.1s' }}>
            <CheckCircle className="w-6 h-6 text-[#A3E635] mb-4" />
            <h3 className="text-white text-lg font-bold mb-2">Built for Student Life</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Flexible, accessible, and designed around the demands of study — available anytime, anywhere on mobile.
            </p>
          </div>

          <div className="fade-in bg-[#111] border border-white/10 rounded-xl p-6 hover:border-[#A3E635]/30 transition-colors duration-300" style={{ transitionDelay: '0.2s' }}>
            <CheckCircle className="w-6 h-6 text-[#A3E635] mb-4" />
            <h3 className="text-white text-lg font-bold mb-2">Campus &amp; Newsletter Promotion</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Distributed through student unions, learning homepages, and sidebar visibility across partner institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universities;
