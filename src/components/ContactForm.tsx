import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, CheckCircle2, ExternalLink } from 'lucide-react';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

// ⚠️ This MUST be a specific event link, not just a profile URL.
// Profile: https://calendly.com/strengthhubonline-info  ❌ won't work
// Event:   https://calendly.com/strengthhubonline-info/30min  ✅
const CALENDLY_URL = 'https://calendly.com/strengthhubonline-info/30min';
const CALENDLY_EMBED_URL = `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=A3E635`;

const ContactForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const [widgetStatus, setWidgetStatus] = useState<'loading' | 'ready' | 'failed'>('loading');

  // Calendly script + init
  useEffect(() => {
    let cancelled = false;
    let pollAttempts = 0;

    // Inject CSS once
    const cssId = 'calendly-widget-css';
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    const initWidget = () => {
      if (cancelled) return;
      if (!window.Calendly || !widgetRef.current) return false;
      widgetRef.current.innerHTML = '';
      try {
        window.Calendly.initInlineWidget({
          url: CALENDLY_EMBED_URL,
          parentElement: widgetRef.current,
        });
        setWidgetStatus('ready');
        return true;
      } catch (err) {
        console.error('Calendly init failed:', err);
        setWidgetStatus('failed');
        return false;
      }
    };

    // Poll for Calendly to be available — handles race conditions reliably
    const pollForCalendly = () => {
      if (cancelled) return;
      if (initWidget()) return;
      pollAttempts++;
      if (pollAttempts > 40) {
        // ~10 seconds with 250ms interval
        setWidgetStatus('failed');
        return;
      }
      setTimeout(pollForCalendly, 250);
    };

    // Inject script if not present
    const scriptId = 'calendly-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onerror = () => setWidgetStatus('failed');
      document.body.appendChild(script);
    }

    pollForCalendly();

    return () => {
      cancelled = true;
    };
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

  return (
    <section id="contact" className="section bg-black relative overflow-hidden py-20" ref={sectionRef}>
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
              Get in touch for a free consultation about your individual goals,
              as well as to discuss larger group bookings.
            </p>
          </div>

          {/* Feature strip */}
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

          {/* Calendly widget container */}
          <div className="fade-in relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-2 sm:p-3 hover:border-[#A3E635]/30 transition-colors duration-500 overflow-hidden">
            {/* Loading state */}
            {widgetStatus === 'loading' && (
              <div className="flex flex-col items-center justify-center h-[700px] gap-4">
                <div className="w-10 h-10 border-2 border-[#A3E635]/30 border-t-[#A3E635] rounded-full animate-spin" />
                <p className="text-white/40 text-sm uppercase tracking-[0.2em]">Loading calendar...</p>
              </div>
            )}

            {/* Failed state — fallback to link */}
            {widgetStatus === 'failed' && (
              <div className="flex flex-col items-center justify-center h-[400px] gap-6 px-6 text-center">
                <p className="text-white/70 text-base">
                  Calendar couldn't load right now. You can book directly through Calendly:
                </p>
                
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-[#A3E635] hover:bg-[#B8F04A] hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] text-black py-4 px-7 font-bold uppercase tracking-[0.15em] text-xs transition-all"
                >
                  Open Calendly
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </a>
              </div>
            )}

            {/* Widget mount point — always rendered so the ref is stable */}
            <div
              ref={widgetRef}
              className="calendly-inline-widget rounded-xl overflow-hidden"
              style={{
                minWidth: '320px',
                height: widgetStatus === 'ready' ? '700px' : '0px',
                display: widgetStatus === 'ready' ? 'block' : 'none',
              }}
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