import { useEffect, useRef } from 'react';

const universities = [
  { logo: '/Monash_LOGO.png', name: 'Monash University' },
  { logo: '/Deakin_LOGO.png', name: 'Deakin University' },
  { logo: '/Swinburne_LOGO.png', name: 'Swinburne University' },
  { logo: '/RMIT_LOGO.png', name: 'RMIT University' },
];

const Universities = () => {
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
    <section
      id="universities"
      className="bg-[#0a0a0a] border-b border-white/[0.05] py-10 sm:py-14"
      ref={sectionRef}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <p className="fade-in text-center text-[11px] uppercase tracking-[0.28em] text-white/18 mb-9">
          Trusted by leading institutions
        </p>
        <div className="fade-in flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-20">
          {universities.map((uni) => (
            <img
              key={uni.name}
              src={uni.logo}
              alt={uni.name}
              className="h-6 sm:h-8 w-auto object-contain brightness-0 invert opacity-20 hover:opacity-40 transition-opacity duration-300"
              loading="lazy"
            />
          ))}
        </div>
        <p className="mt-10 fade-in text-center text-[10px] text-white/12 uppercase tracking-[0.18em]">
          *Not directly affiliated with any university.
        </p>
      </div>
    </section>
  );
};

export default Universities;
