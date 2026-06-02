import { Calendar, Clock, ExternalLink } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/strengthhubonline-info/30min';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-black py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#A3E635]/[0.03]" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#A3E635] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Contact us
          </p>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let’s talk.
          </h2>

          <p className="mt-4 text-white/55 text-sm sm:text-base max-w-md mx-auto">
            Book a free 30-minute call to see how the platform works and ask any questions.
          </p>

          <div className="mt-8 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-7 text-left">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#A3E635]" />
                <span className="text-white/70 text-sm">30 minute walkthrough</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#A3E635]" />
                <span className="text-white/70 text-sm">Flexible times</span>
              </div>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#A3E635] hover:bg-[#B8F04A] text-black px-8 py-4 rounded-xl font-bold text-sm transition-all"
            >
              Book a call
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-5 text-white/35 text-xs uppercase tracking-[0.2em]">
            Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;