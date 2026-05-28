import { useEffect, useRef } from 'react';
import { Calendar, Clock, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = 'https://calendly.com/strengthhubonline-info/30min';

const ContactForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cssId = 'calendly-widget-css';
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    const scriptId = 'calendly-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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

  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, '_blank');
    }
  };

  return (
    <section id="contact" className="section bg-[#0a0a0a] relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.05]" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.035] blur-[100px] pointer-events-none"
        style={{ background: '#A3E635' }}
      />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="fade-in text-center mb-12 sm:mb-16">
            <p className="text-[#A3E635] text-[11px] font-semibold uppercase tracking-[0.28em] mb-4">
              Partner With Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.05]">
              See the Platform{' '}
              <span className="text-white/30">in Action.</span>
            </h2>
            <p className="mt-5 text-white/35 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Schedule a 30-minute demo tailored to your institution's goals. No commitment — just clarity on whether we're the right fit.
            </p>
          </div>

          {/* Booking card */}
          <div className="fade-in border border-white/[0.07] bg-white/[0.02] p-6 sm:p-10 md:p-12 hover:border-white/[0.12] transition-colors duration-500">
            {/* Info pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
              {[
                { icon: Clock, label: '30 minutes', desc: 'Focused and efficient' },
                { icon: Calendar, label: 'Flexible times', desc: 'Pick what suits you' },
                { icon: CheckCircle2, label: 'No commitment', desc: 'Just an honest conversation' },
              ].map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 border border-white/[0.06] bg-black/40 px-5 py-4"
                >
                  <div className="w-10 h-10 border border-[#A3E635]/20 bg-[#A3E635]/[0.05] flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5 text-[#A3E635]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">{label}</p>
                    <p className="text-white/30 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA area */}
            <div className="flex flex-col items-center text-center">
              <button
                onClick={openCalendlyPopup}
                className="group inline-flex items-center justify-center gap-3 bg-[#A3E635] hover:bg-[#B8F04A] hover:shadow-[0_0_40px_rgba(163,230,53,0.2)] text-black py-4 px-10 font-bold uppercase tracking-[0.12em] text-sm transition-all duration-300"
              >
                Request a Demo
                <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </button>

              <p className="mt-4 text-white/25 text-sm">
                Opens our scheduling calendar — pick a time that works for you
              </p>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-white/30 hover:text-white/50 text-xs uppercase tracking-[0.15em] transition-colors"
              >
                Open in new tab
                <ExternalLink className="w-3 h-3" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Trust strip */}
          <div className="fade-in mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-white/20">
            <span>Response within 24 hours</span>
            <span>·</span>
            <span>Tailored to your institution</span>
            <span>·</span>
            <span>No commitment required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
