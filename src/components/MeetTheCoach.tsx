import { useEffect, useRef } from 'react';
import { Dumbbell, GraduationCap, Users, Heart } from 'lucide-react';

const credentials = [
  {
    icon: Dumbbell,
    title: '7+ Years',
    description: 'Fitness industry experience across powerlifting, body composition, and lifestyle coaching.',
  },
  {
    icon: GraduationCap,
    title: 'University Specialist',
    description:
      'Specialises in student fitness and routine building — with lived experience as a current university student.',
  },
  {
    icon: Users,
    title: 'Coach-Led Accountability',
    description:
      'Every member is supported by a real coach, not an algorithm. Personalised feedback and check-ins, every week.',
  },
  {
    icon: Heart,
    title: 'Mentorship-Driven',
    description:
      'Passionate about helping students build confidence, sustainable habits, and long-term results they own.',
  },
];

const MeetTheCoach = () => {
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
    <section id="coach" className="section bg-[#0a0a0a] relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.05]" />

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14">
          <p className="fade-in text-[#A3E635] text-[11px] font-semibold uppercase tracking-[0.28em] mb-4">
            Expert-Led Coaching
          </p>
          <h2 className="fade-in text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.05]">
            Meet Coach Zak.
          </h2>
          <p className="fade-in mt-3 text-white/35 text-base sm:text-lg max-w-md">
            The specialist supporting your students' results — every step of the way.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="space-y-4 sm:space-y-5">
              <div className="fade-in relative group">
                <div className="relative overflow-hidden border border-white/[0.07]">
                  <img
                    src="/IMG_0875.jpg"
                    alt="Coach Zak"
                    className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover object-[35%_center] transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>

              <div className="fade-in border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6">
                <div className="flex gap-3">
                  <span className="text-[#A3E635] text-3xl font-black leading-none shrink-0 mt-0.5">&ldquo;</span>
                  <p className="text-white/55 text-base leading-relaxed">
                    My goal is simple: to help students{' '}
                    <span className="text-white font-medium">build confidence</span>, create
                    sustainable habits and achieve{' '}
                    <span className="text-white font-medium">long-term results</span> they're proud of.
                  </p>
                </div>
                <p className="mt-4 text-white/25 text-xs uppercase tracking-[0.2em]">— Coach Zak</p>
              </div>
            </div>

            <div className="space-y-3">
              {credentials.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="fade-in flex items-start gap-4 border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/[0.12] transition-colors duration-300"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="w-10 h-10 border border-[#A3E635]/20 bg-[#A3E635]/[0.05] flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5 text-[#A3E635]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-wide mb-1">{title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{description}</p>
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
