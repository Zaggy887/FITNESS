import { useEffect, useRef } from 'react';

const UniqueAbout = () => {
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
    <section
      className="relative section py-24 overflow-hidden"
      ref={sectionRef}
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/75" />

      <div className="container relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="fade-in text-4xl md:text-5xl font-extrabold text-white uppercase leading-tight mb-1 tracking-tight">
          What's Unique About
        </h2>
        <h2 className="fade-in text-4xl md:text-5xl font-extrabold text-[#7A725E] uppercase leading-tight mb-10 tracking-tight">
          ONLYUgrads
        </h2>

        <p className="fade-in text-white font-semibold text-sm uppercase tracking-widest mb-6">
          We're not a generic job board — we are graduate placement specialists.
        </p>

        <p className="fade-in text-white font-bold text-lg md:text-xl leading-relaxed mb-6">
          Every candidate we present has been individually assessed for academic achievement, communication ability, and professional ambition — ensuring you only meet graduates who are genuinely ready to contribute from day one.
        </p>

        <p className="fade-in text-white/70 font-semibold italic text-sm md:text-base leading-relaxed">
          Whether you need a driven analyst, a sharp marketing graduate, or an ambitious operations hire, we build a personalised shortlist and support you through every step of the placement process.
        </p>
      </div>
    </section>
  );
};

export default UniqueAbout;
