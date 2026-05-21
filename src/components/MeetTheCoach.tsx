import { useEffect, useRef } from 'react';
import { Award, Users, GraduationCap, Dumbbell } from 'lucide-react';

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

  const credentials = [
    {
      icon: GraduationCap,
      title: 'Qualified & Educated',
      description: 'Degree-qualified in Exercise Science with years of hands-on coaching experience.',
    },
    {
      icon: Users,
      title: 'Client-Centred Approach',
      description: 'Every program is tailored to your lifestyle, goals, and training history.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Hundreds of clients coached to real, lasting transformations.',
    },
    {
      icon: Dumbbell,
      title: 'Strength Focused',
      description: 'Building strong foundations through evidence-based strength training.',
    },
  ];

  return (
    <section id="coach" className="section bg-black relative overflow-hidden" ref={sectionRef}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in text-3xl font-bold mb-4">
            <span className="text-white">Meet the </span>
            <span className="text-[#A3E635]">Coach</span>
          </h2>
          <p className="fade-in text-white/60 text-lg">
            The person behind every program, every check-in, and every result.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="fade-in relative group">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/IMG_0875.jpg"
                  alt="Coach Zak"
                  className="w-full h-[480px] object-cover object-[25%_center] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 flex items-end gap-3">
                  <div className="flex flex-col items-center">
                    <svg
                      width="40"
                      height="60"
                      viewBox="0 0 40 60"
                      fill="none"
                      className="text-[#A3E635] animate-bounce"
                      style={{ animationDuration: '2s' }}
                    >
                      <path
                        d="M20 0 L20 45 M8 33 L20 45 L32 33"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Coach Zak</h3>
                    <p className="text-[#A3E635] font-medium">Founder, StrengthHubOnline</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="fade-in text-white/70 text-lg leading-relaxed">
                I started StrengthHubOnline because I believe everyone deserves access to
                quality coaching, no matter where they are. My mission is simple: help you
                get stronger, move better, and build habits that last a lifetime.
              </p>
              <p className="fade-in text-white/70 leading-relaxed">
                With a background in Exercise Science and years of experience coaching
                clients from all walks of life, I take a no-nonsense, evidence-based
                approach to training and nutrition. No fads, no shortcuts -- just smart
                programming and genuine support.
              </p>

              <div className="fade-in pt-4">
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 font-semibold text-white bg-[#2a3a0f] hover:bg-[#3a4f15] transition-colors duration-300 rounded-lg"
                >
                  Work with Me
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {credentials.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="fade-in bg-[#1a1a1a] border border-white/10 rounded-xl p-5 text-center hover:border-[#A3E635]/30 transition-colors duration-300"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-[#A3E635]/15 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-[#A3E635]" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheCoach;
