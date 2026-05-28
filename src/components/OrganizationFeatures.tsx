import { useEffect, useRef } from 'react';
import { ArrowRight, LayoutDashboard, Zap, BarChart3, Shield, Headphones, Tag } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Institution Dashboard',
    description:
      'Full oversight of member activity, engagement, and progress across your entire cohort — updated in real time.',
  },
  {
    icon: Zap,
    title: 'Seamless Onboarding',
    description:
      'Bulk member imports and automated setup get your institution live in days. No technical expertise required.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description:
      'Institution-wide reporting with individual member insights. Demonstrate health outcomes and ROI to stakeholders.',
  },
  {
    icon: Shield,
    title: 'White-Label Ready',
    description:
      "Deploy the platform under your institution's brand — custom colours, logo, and domain. Completely seamless.",
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description:
      "A named account manager and priority technical support. We're invested in your institution's outcomes.",
  },
  {
    icon: Tag,
    title: 'Flexible Pricing',
    description:
      'Volume-based pricing that scales from a pilot cohort to a campus-wide rollout. No surprises, no lock-in.',
  },
];

const OrganizationFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="features" className="section bg-black relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.05]" />

      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <p className="fade-in text-[#A3E635] text-[11px] font-semibold uppercase tracking-[0.28em] mb-4">
            Built for Organisations
          </p>
          <h2 className="fade-in text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
            <span className="text-white">Everything your institution needs.</span>
            <br />
            <span className="text-white/25">Nothing it doesn't.</span>
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] max-w-5xl mx-auto">
          {features.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="fade-in group bg-black p-7 md:p-8 hover:bg-white/[0.02] transition-colors duration-300"
              style={{ transitionDelay: `${(i % 3) * 0.07}s` }}
            >
              <div className="mb-5 w-9 h-9 flex items-center justify-center border border-[#A3E635]/20 bg-[#A3E635]/[0.06]">
                <Icon className="w-4.5 h-4.5 text-[#A3E635]" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-base mb-2.5 tracking-tight">{title}</h3>
              <p className="text-white/35 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="fade-in text-center mt-12 sm:mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white/40 text-sm font-medium uppercase tracking-[0.15em] border-b border-white/15 pb-0.5 hover:text-white/65 hover:border-white/30 transition-all"
          >
            Talk to us about your institution
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrganizationFeatures;
