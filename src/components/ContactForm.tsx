import { useEffect, useRef } from 'react';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';

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
    <section id="contact" className="section bg-black relative overflow-hidden py-10 sm:py-16" ref={sectionRef}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: '#A3E635' }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="fade-in text-center mb-8">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-[1.05]">
              Let's{' '}
              <span className="text-[#A3E635]">talk.</span>
            </h2>

            <p className="mt-3 text-white/50 text-sm sm:text-base max-w-md mx-auto">
              Book a free 30-minute call. We'll show you the platform and answer any questions.
            </p>
          </div>

          <div className="fade-in relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 sm:p-7 md:p-10 hover:border-[#A3E635]/30 transition-colors duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-lg mx-auto">
              {[
                { icon: Clock, label: '30 minutes', desc: 'Quick walkthrough' },
                { icon: Calendar, label: 'Flexible times', desc: 'Pick what suits you' },
              ].map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-black/40 border border-white/[0.06] rounded-xl px-4 py-3"
                >
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-[#A3E635] blur-md opacity-20 rounded-full" />
                    <div className="relative w-10 h-10 rounded-full border border-[#A3E635] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#A3E635]" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold leading-tight">{label}</p>
                    <p className="text-white/40 text-[11px] mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center text-center">
              <button
                onClick={openCalendlyPopup}
                className="group inline-flex items-center justify-center gap-3 bg-[#A3E635] hover:bg-[#B8F04A] hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] text-black py-3 sm:py-3.5 px-7 sm:px-8 font-bold uppercase tracking-[0.15em] text-xs sm:text-sm rounded-lg transition-all duration-300 w-full sm:w-auto"
              >
                Book a Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </button>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-white/40 hover:text-[#A3E635] text-[11px] uppercase tracking-[0.15em] transition-colors"
              >
                Open in new tab
                <ExternalLink className="w-3 h-3" strokeWidth={2} />
              </a>
            </div>
          </div>

          <div className="fade-in mt-6 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/35">
            <span>Response within 24 hours</span>
            <span className="text-[#A3E635]">•</span>
            <span>Universities &amp; corporates welcome</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
