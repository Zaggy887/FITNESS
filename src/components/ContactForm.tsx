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

  return (
    <section id="contact" className="section bg-[#0a0a0a] relative" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="fade-in mb-4 text-3xl font-bold text-white tracking-tight">
            <span className="text-[#7A725E]">Contact Us for a</span> Free Consultation
          </h2>
          <p className="fade-in text-white/50 text-sm leading-relaxed">
            Whether you're ready to transform your physique or just have a question, there's no hurt in just asking. We're here to help.
          </p>
          <p className="fade-in text-white/40 text-xs mt-3">
            For individual or personal bookings, contact:{' '}
            <a href="mailto:contact@strengthhub.com" className="text-[#7A725E] hover:underline">contact@strengthhub.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
