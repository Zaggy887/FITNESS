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
      className="relative section py-10 overflow-hidden"
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
          StrengthHubOnline
        </h2>

        <p className="fade-in text-white font-semibold text-sm uppercase tracking-widest mb-6">
          Built for people who want structure, support, and a program that actually fits their life.
        </p>

        <p className="fade-in text-white font-bold text-lg md:text-xl leading-relaxed mb-6">
          We tailor every program to the individual, taking into account your goals, experience level, schedule, and lifestyle. We also place a strong focus on accountability, helping you stay consistent and make progress over time.
        </p>

        <p className="fade-in text-white/70 font-semibold italic text-sm md:text-base leading-relaxed">
          Our coaching team includes experienced bodybuilding, powerlifting, lifestyle, and weight loss coaches, so whether you are new to training or looking to take things further, you can work with someone who suits your goals.
        </p>
      </div>
    </section>
  );
};

export default UniqueAbout;