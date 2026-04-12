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
          WHAT <span className="text-[#7A725E]">WE GIVE YOU</span>
        </h2>
        <h2 className="fade-in text-4xl md:text-5xl font-extrabold text-[#7A725E] uppercase leading-tight mb-10 tracking-tight">
          StrengthHubOnline
        </h2>

        <p className="fade-in text-white font-semibold text-sm uppercase tracking-widest mb-6">
          Give a man a fish and he eats for a day. Teach him to fish and he eats for a lifetime.
        </p>

        <p className="fade-in text-white font-bold text-lg md:text-xl leading-relaxed mb-6">
          We focus on more than just giving you a program. We show you how to train properly, stay consistent, and build habits that actually last.
        </p>

        <p className="fade-in text-white/90 font-semibold text-sm md:text-base leading-relaxed mb-4">
          You will be held accountable throughout the process, with regular check ins and updates to your program so you keep moving forward.
        </p>

        <p className="fade-in text-white/80 font-semibold text-sm md:text-base leading-relaxed mb-4">
          Our coaches have real experience across powerlifting, bodybuilding, lifestyle coaching and weight loss, so you are learning from people who have genuinely been through it themselves.
        </p>

        <p className="fade-in text-white/70 italic text-sm md:text-base leading-relaxed">
          The goal is to help you build a balanced lifestyle where your health supports everything else you do, without taking away from your work, your social life, or your relationships.
        </p>
      </div>
    </section>
  );
};

export default UniqueAbout;