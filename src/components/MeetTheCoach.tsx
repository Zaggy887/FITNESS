import { useEffect, useRef } from 'react';
import { Dumbbell, GraduationCap, Users, Lightbulb } from 'lucide-react';

const credentials = [
  {
    icon: Dumbbell,
    title: '7+ YEARS',
    description: 'Of hands-on fitness industry experience across strength training, body composition, and lifestyle coaching.',
  },
  {
    icon: GraduationCap,
    title: 'BUILT FROM THE INSIDE',
    description: 'Founded by a university student with firsthand experience of the barriers students face when trying to stay fit.',
  },
  {
    icon: Users,
    title: 'STUDENT-FIRST APPROACH',
    description: 'Every program and feature is designed around the realities of student life — flexible, achievable, and engaging.',
  },
  {
    icon: Lightbulb,
    title: 'MISSION-DRIVEN',
    description: 'We exist to make high-quality fitness coaching and education accessible to every student and organisation, not just those who can afford a PT.',
  },
];

const MeetTheCoach = () => {
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
    <section id="coach" className="section bg-black relative overflow-hidden" ref={sectionRef}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A3E635]">Our Story</span>
        <h2 className="fade-in text-2xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 sm:mb-10 text-left">
          <span className="text-white">Founded by </span>
          <span className="text-[#A3E635]">Coach Zak</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="space-y-4 sm:space-y-6">
              <div className="fade-in relative group">
                <div className="relative overflow-hidden rounded-2xl border-2 border-[#A3E635]/40">
                  <img
                    src="/IMG_0875.jpg"
                    alt="Zak — Founder, StrengthHub Online"
                    className="w-full h-[240px] sm:h-[360px] lg:h-[420px] object-cover object-[35%_center] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="fade-in rounded-xl border-2 border-[#A3E635]/40 bg-[#111] p-4 sm:p-6">
                <div className="flex gap-4">
                  <span className="text-[#A3E635] text-4xl font-bold leading-none shrink-0">&ldquo;</span>
                  <p className="text-white/80 text-base leading-relaxed">
                    I built StrengthHub Online because I saw how many students wanted to improve their health but had no clear, affordable path to do it.{' '}
                    <span className="text-[#A3E635] font-semibold">This platform is the answer.</span>
                  </p>
                </div>
                <p className="mt-4 text-white/40 text-sm pl-10">— Zak, Founder &amp; Head Coach</p>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8 py-2">
              {credentials.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="fade-in flex items-start gap-4 sm:gap-5"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#A3E635]/40 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#A3E635]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base tracking-wide mb-1">
                      {title}
                    </h4>
                    <p className="text-white/50 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 pt-16 sm:pt-20 pb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]/60" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]/30" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]/60" />
      </div>
    </section>
  );
};

export default MeetTheCoach;
