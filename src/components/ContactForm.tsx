import { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  goals: string;
};

const ContactForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    goals: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const encode = (data: { [key: string]: string }) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      });
      setShowConfirmation(true);
      setFormData({ fullName: '', email: '', phone: '', goals: '' });
    } catch {
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Whether you're ready to transform your physique or you just have a question, there's no hurt in just asking. We're here to help.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {showConfirmation ? (
            <div className="text-center bg-[#111] border border-white/10 p-12">
              <CheckCircle className="w-16 h-16 text-[#7A725E] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
              <p className="text-white/50 text-sm">We'll be in touch with you shortly.</p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              onSubmit={handleSubmit}
              className="fade-in bg-[#111] border border-white/10 p-8"
              data-netlify="true"
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
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
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
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+61 400 000 000"
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
                    value={formData.goals}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your current fitness level, what you want to achieve, and any relevant experience or equipment you have..."
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2e3d30] hover:opacity-90 text-white py-4 px-6 font-bold uppercase tracking-widest text-sm transition-opacity flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-4 w-4 mr-3 border-2 border-white border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : (
                    'Book Free Consultation'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
