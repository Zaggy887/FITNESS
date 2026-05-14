import { useEffect, useRef } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const ContactForm = () => {
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
    <section id="contact" className="section bg-black relative overflow-hidden" ref={sectionRef}>
      {/* Subtle ambient glow — echoes the radial glow behind slide 2's icon */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: '#A3E635' }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow + headline — matches slide section header pattern */}
          <div className="fade-in text-center mb-12">
            <div className="inline-flex flex-col items-center mb-6">
              <p className="text-[#A3E635] text-xs font-semibold uppercase tracking-[0.25em]">
                Get In Touch
              </p>
              <span className="mt-2 h-[2px] w-12 bg-[#A3E635]" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.05]">
              Contact us for a{' '}
              <span className="text-[#A3E635]">free consultation.</span>
            </h2>

            <p className="mt-6 text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Whether you're ready to transform your physique or just have a question,
              there's no harm in asking. We're here to help.
            </p>
          </div>

          {/* Contact card — bordered, rounded corners matching slide 3's quadrant cards */}
          <div className="fade-in relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 sm:p-10 hover:border-[#A3E635]/30 transition-colors duration-500">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              {/* Left: icon + email */}
              <div className="flex items-center gap-5">
                {/* Icon in circle with glow — direct slide 2 reference */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-[#A3E635] blur-xl opacity-20 rounded-full" />
                  <div className="relative w-14 h-14 rounded-full border-2 border-[#A3E635] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#A3E635]" strokeWidth={2} />
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-white/40 text-[11px] uppercase tracking-[0.25em] mb-2 font-semibold">
                    Individual &amp; Group Bookings
                  </p>
                  <a
                    href="mailto:info@strengthhub.com"
                    className="text-white text-lg sm:text-xl font-bold hover:text-[#A3E635] transition-colors"
                  >
                    info@strengthhub.com
                  </a>
                </div>
              </div>

              {/* Right: CTA button — matches Hero CTA */}
              <a
                href="mailto:info@strengthhub.com"
                className="group flex-shrink-0 inline-flex items-center justify-center gap-2 bg-[#A3E635] hover:bg-[#B8F04A] hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] text-black py-4 px-7 font-bold uppercase tracking-[0.15em] text-xs transition-all"
              >
                Send Email
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Optional: small contact extras row — matches slide 12 contact card style */}
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