import { Calendar, ExternalLink, Mail } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/strengthhubonline-info/30min';

const ContactForm = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#101012] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7ED957]/[0.07] blur-[110px]" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl rounded-[1.8rem] border border-white/[0.09] bg-[#0A0A0B] p-7 text-center shadow-[0_35px_100px_rgba(0,0,0,0.35)] sm:p-12" data-reveal="scale">
          <p className="eyebrow">See whether StrengthHub fits your university</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] text-white sm:text-5xl">Let’s talk about your students.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/[0.52]">
            Book a free 30-minute walkthrough to explore the app, discuss your student cohort and see how a tailored rollout could work.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7ED957] px-7 py-4 text-sm font-bold text-[#0A0A0B] transition hover:bg-[#9FE264]"
            >
              <Calendar className="h-4 w-4" /> Book a walkthrough <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="mailto:info@strengthhubonline.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-white/[0.05] px-7 py-4 text-sm font-bold text-white transition hover:bg-white/[0.08]"
            >
              <Mail className="h-4 w-4" /> Email us
            </a>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/30">Melbourne, Australia · Flexible university partnerships</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
