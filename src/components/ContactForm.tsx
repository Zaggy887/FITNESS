import { useEffect, useRef } from 'react';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Load Calendly's embed script once
  useEffect(() => {
    const scriptId = 'calendly-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Fade-in observer
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

  const CALENDLY_URL = 'https://calendly.com/strengthhubonline-info';

  return (
    <section id="contact" className="section bg-black relative overflow-hidden py-20" ref={sectionRef}>
      {/* Subtle ambient glow — echoes the radial glow behind slide 2's icon */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: '#A3E635' }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow + headline */}
          <div className="fade-in text-center mb-12">
            <div className="inline-flex flex-col items-center mb-6">
              <p className="text-[#A3E635] text-xs font-semibold uppercase tracking-[0.25em]">
                Book Your Session
              </p>
              <span className="mt-2 h-[2px] w-12 bg-[#A3E635]" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.05]">
              Book a{' '}
              <span className="text-[#A3E635]">free consultation.</span>
            </h2>

            <p className="mt-6 text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Pick a time that works for you. No commitment, no pressure —
              just a conversation about your goals and how we can help.
            </p>
          </div>

          {/* Feature strip — sets expectations before they book */}
          <div className="fade-in grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Clock, label: '30 minutes', desc: 'Quick & focused' },
              { icon: Calendar, label: 'Flexible times', desc: 'Pick what suits you' },
              { icon: CheckCircle2, label: 'No commitment', desc: 'Free consultation' },
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3"
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-[#A3E635] blur-md opacity-20 rounded-full" />
                  <div className="relative w-9 h-9 rounded-full border border-[#A3E635] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#A3E635]" strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <p className="text-white text-sm font-bold leading-tight">{label}</p>
                  <p className="text-white/40 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Calendly inline widget — wrapped in the dark themed card */}
          <div className="fade-in relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-2 sm:p-3 hover:border-[#A3E635]/30 transition-colors duration-500 overflow-hidden">
            <div
              className="calendly-inline-widget rounded-xl overflow-hidden"
              data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=A3E635`}
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          {/* Bottom trust strip */}
          <div className="fade-in mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/40">
            <span>Response within 24 hours</span>
            <span className="text-[#A3E635]">•</span>
            <span>Free initial consultation</span>
            <span className="text-[#A3E635]">•</span>
            <span>No commitment required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;