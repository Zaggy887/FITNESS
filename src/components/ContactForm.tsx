import { useEffect, useRef } from 'react';

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

  const inputClass =
    'w-full px-4 py-3 bg-[#111] border border-white/10 text-white placeholder-white/25 focus:ring-1 focus:ring-[#7A725E] focus:border-[#7A725E] outline-none transition-colors text-sm';

  return (
    <section id="contact" className="section bg-[#0a0a0a] relative" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="fade-in mb-4 text-3xl font-bold text-white tracking-tight">
            <span className="text-[#7A725E]">Conact Us for a</span> Free Consultation
          </h2>
          <p className="fade-in text-white/50 text-sm leading-relaxed">
            Whether you're ready to transform your physique or just have a question, there's no hurt in just asking. We're here to help.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form
            name="contact"
            method="POST"
            action="/"
            className="fade-in bg-[#111] border border-white/10 p-8"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>Don't fill this out: <input name="bot-field" /></label>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block mb-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
                  Full Name <span className="text-[#7A725E]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
                  Email Address <span className="text-[#7A725E]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
                  Phone Number <span className="text-[#7A725E]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="goals" className="block mb-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
                  Your Goals <span className="text-[#7A725E]">*</span>
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  required
                  rows={5}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-[#2e3d30] hover:opacity-90 text-white py-4 px-6 font-bold uppercase tracking-widest text-sm transition-opacity"
              >
                I'M READY
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
