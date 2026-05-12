import { useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';

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
    <section id="contact" className="section bg-[#1a1a1a] relative" ref={sectionRef}>
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="fade-in text-center mb-10">
            <p className="text-[#3CC455] text-xs font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">
              Contact Us for a{' '}
              <span className="text-[#3CC455]">Free Consultation</span>
            </h2>
            <div className="mt-4 w-12 h-0.5 bg-[#3CC455] mx-auto" />
          </div>

          <p className="fade-in text-white/60 text-base leading-relaxed text-center mb-10">
            Whether you're ready to transform your physique or just have a question, there's no hurt in just asking. We're here to help.
          </p>

          <div className="fade-in bg-[#242424] border border-white/10 rounded-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#1a3a1f] flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#3CC455]" />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Individual &amp; Group Bookings</p>
                <a
                  href="mailto:info@strengthhub.com"
                  className="text-white text-lg font-semibold hover:text-[#3CC455] transition-colors"
                >
                  info@strengthhub.com
                </a>
              </div>
            </div>
            <a
              href="mailto:info@strengthhub.com"
              className="flex-shrink-0 bg-[#1a3a1f] hover:opacity-90 text-white py-3 px-8 font-bold uppercase tracking-widest text-xs transition-opacity"
            >
              Send Us an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
