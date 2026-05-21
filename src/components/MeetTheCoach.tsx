import { useEffect, useRef } from 'react';
import { Dumbbell, GraduationCap, Users, Heart } from 'lucide-react';

const credentials = [
  {
    icon: Dumbbell,
    title: '7+ YEARS',
    description: 'Fitness industry experience',
  },
  {
    icon: GraduationCap,
    title: 'SPECIALISES IN',
    description:
      'student fitness and routine building, professional experience in powerlifting and training clients',
  },
  {
    icon: Users,
    title: 'RELATABLE',
    description: 'as a current University student',
  },
  {
    icon: Heart,
    title: 'PASSIONATE ABOUT',
    description:
      'supporting people through mentorship services and current fitness coaching',
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
        <h2 className="fade-in text-4xl md:text-5xl font-bold mb-10 text-left">
          <span className="text-white">Meet </span>
          <span className="text-[#A3E635]">Coach Zak</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="fade-in relative group">
                <div className="relative overflow-hidden rounded-2xl border-2 border-[#A3E635]/40">
                  <img
                    src="/IMG_0875.jpg"
                    alt="Coach Zak"
                    className="w-full h-[420px] object-cover object-[35%_center] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="fade-in rounded-xl border-2 border-[#A3E635]/40 bg-[#111] p-6">
                <div className="flex gap-4">
                  <span className="text-[#A3E635] text-4xl font-bold leading-none shrink-0">&ldquo;</span>
                  <p className="text-white/80 text-base leading-relaxed">
                    My goal is simple: to help students{' '}
                    <span className="text-[#A3E635] font-semibold">build confidence</span>, create
                    sustainable habits and achieve{' '}
                    <span className="text-[#A3E635] font-semibold">long term results</span> they're
                    proud of.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {credentials.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="fade-in flex items-start gap-5 rounded-xl bg-[#111] border border-white/10 p-5 hover:border-[#A3E635]/30 transition-colors duration-300"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-full border-2 border-[#A3E635]/50 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#A3E635]" />
                  </div>
                  <div className="border-l-2 border-[#A3E635]/30 pl-5">
                    <h4 className="text-[#A3E635] font-bold text-base tracking-wide mb-1">
                      {title}
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheCoach;
