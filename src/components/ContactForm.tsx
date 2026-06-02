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
    <section id="contact" className="section bg-black relative overflow-hidden py-12 sm:py-20" ref={sectionRef}>
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

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.05]">
              Book a{' '}
              <span className="text-[#A3E635]">free consultation.</span>
            </h2>

            <p className="mt-6 text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Get in touch for a free consultation about your individual goals,
              as well as to discuss larger group bookings.
            </p>
          </div>

          {/* Booking card */}
          <div className="fade-in relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 sm:p-8 md:p-12 hover:border-[#A3E635]/30 transition-colors duration-500">
            {/* Info pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mb-8 sm:mb-10">
              {[
                { icon: Clock, label: '30 minutes', desc: 'Quick & focused' },
                { icon: Calendar, label: 'Flexible times', desc: 'Pick what suits you' },
                { icon: CheckCircle2, label: 'No commitment', desc: 'Free consultation' },
              ].map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 bg-black/40 border border-white/[0.06] rounded-xl px-5 py-4"
                >
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-[#A3E635] blur-md opacity-20 rounded-full" />
                    <div className="relative w-11 h-11 rounded-full border border-[#A3E635] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#A3E635]" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold leading-tight">{label}</p>
                    <p className="text-white/40 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA area */}
            <div className="flex flex-col items-center text-center">
              <button
                onClick={openCalendlyPopup}
                className="group inline-flex items-center justify-center gap-3 bg-[#A3E635] hover:bg-[#B8F04A] hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] text-black py-4 px-9 font-bold uppercase tracking-[0.15em] text-sm rounded-lg transition-all duration-300"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </button>

              <p className="mt-4 text-white/40 text-sm">
                Opens our scheduling calendar — pick a time that suits you
              </p>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-white/50 hover:text-[#A3E635] text-xs uppercase tracking-[0.15em] transition-colors"
              >
                Open in new tab
                <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
              </a>
            </div>
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
