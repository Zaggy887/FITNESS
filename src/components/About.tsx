import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/about-bg.jpg")' }}
      />

      {/* Dark cinematic overlays */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="fade-in text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-[5rem]">
            <span className="block text-white">What’s Unique About</span>
            <span className="mt-2 block text-[#9B9076]">Elite Physiques</span>
          </h2>

          <p className="fade-in mt-8 text-lg font-bold uppercase leading-snug text-white sm:text-xl md:text-2xl">
            We’re not a commercial gym - we are body transformation experts.
          </p>

          <p className="fade-in mx-auto mt-6 max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
            At our private Elwood studio, clients receive dedicated 1-on-1
            personal training in a fully exclusive environment with no other
            trainers or clients present. This ensures your session is entirely
            focused on you, with zero distractions and maximum results.
          </p>

          <p className="fade-in mx-auto mt-6 max-w-4xl text-lg italic font-semibold leading-relaxed text-white sm:text-xl">
            Whether your goal is to lose 10 to 15kg, reduce body fat, build
            muscle, or increase strength, we craft a personalised roadmap and
            provide the dedicated support you need to achieve real, lasting
            results.
          </p>

          <div className="fade-in mt-10">
            <a
              href="#contact"
              className="inline-flex min-w-[280px] items-center justify-center bg-[#2F3A35] px-8 py-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#39453f]"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;