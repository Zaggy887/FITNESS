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
          No generic plans. No guesswork. Just structure, support, and real progress.
        </p>

        <p className="fade-in text-white font-bold text-lg md:text-xl leading-relaxed mb-6">
          Every program is built specifically for you — your goals, your schedule, and your lifestyle — so you are not trying to fit into someone else’s plan. Alongside that, we prioritise accountability, giving you consistent guidance and support to keep you on track and progressing week after week.
        </p>

        <p className="fade-in text-white/80 font-semibold text-sm md:text-base leading-relaxed mb-4">
          You will have access to a team of experienced coaches across bodybuilding, powerlifting, lifestyle, and weight loss, meaning you are matched with someone who understands exactly what you are trying to achieve.
        </p>

        <p className="fade-in text-white/70 italic text-sm md:text-base leading-relaxed">
          Whether you are just getting started or looking to take your training to the next level, everything is designed to make progress feel clear, structured, and sustainable.
        </p>
      </div>
    </section>
  );
};

export default UniqueAbout;