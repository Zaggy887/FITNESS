import { useState, useEffect } from 'react';
import { Calendar, ExternalLink, Mail, Send, CheckCircle2, Loader2, ChevronDown } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const CALENDLY_URL = 'https://calendly.com/strengthhubonline-info/30min';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
type CtaMode = 'calendly' | 'form';

const CalendlyWidget = () => {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget mt-6 w-full overflow-hidden rounded-2xl"
      data-url={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0A0A0B&text_color=ffffff&primary_color=7ED957`}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
};

const ContactForm = () => {
  const [mode, setMode] = useState<CtaMode>('calendly');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', goals: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    if (!isSupabaseConfigured) {
      setErrorMsg('Form submissions are not configured yet. Please email us directly.');
      setStatus('error');
      return;
    }

    try {
      const { error } = await supabase.from('contact_submissions').insert({
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        goals: form.goals.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm({ full_name: '', email: '', phone: '', goals: '' });
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again or email us directly.');
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.12] text-white placeholder-white/30 focus:ring-2 focus:ring-[#7ED957] focus:border-[#7ED957] outline-none transition-colors';

  return (
    <section id="contact" className="relative overflow-hidden bg-[#101012] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7ED957]/[0.07] blur-[110px]" />
      <div className="container relative">

        {/* Book a walkthrough */}
        <div className="mx-auto max-w-3xl rounded-[1.8rem] border border-white/[0.09] bg-[#0A0A0B] p-7 text-center shadow-[0_35px_100px_rgba(0,0,0,0.35)] sm:p-12" data-reveal="scale">
          <p className="eyebrow">See whether StrengthHub fits your organisation</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] text-white sm:text-5xl">Let's talk about the young adults you support.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/[0.52]">
            Book a free 30 minute walkthrough to explore the app, discuss your audience or cohort and see how a tailored university or organisational rollout could work.
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
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/30">Melbourne, Australia · Flexible university and organisational partnerships</p>
        </div>

        {/* Toggle + panel */}
        <div className="mx-auto mt-8 max-w-3xl rounded-[1.8rem] border border-white/[0.09] bg-[#0A0A0B] p-7 shadow-[0_35px_100px_rgba(0,0,0,0.35)] sm:p-12" data-reveal="scale">

          {/* Toggle tabs */}
          <div className="flex rounded-xl border border-white/[0.1] bg-white/[0.03] p-1">
            <button
              onClick={() => setMode('calendly')}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold transition-all ${
                mode === 'calendly'
                  ? 'bg-[#7ED957] text-[#0A0A0B] shadow'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Calendar className="h-4 w-4" /> Book a time
            </button>
            <button
              onClick={() => setMode('form')}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold transition-all ${
                mode === 'form'
                  ? 'bg-[#7ED957] text-[#0A0A0B] shadow'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <ChevronDown className="h-4 w-4" /> Fill in your details
            </button>
          </div>

          {/* Calendly embed */}
          {mode === 'calendly' && <CalendlyWidget />}

          {/* Details form */}
          {mode === 'form' && (
            <>
              <div className="mt-6 text-center">
                <p className="mx-auto max-w-lg text-base leading-relaxed text-white/[0.52]">
                  Leave your information below and we'll get back to you to arrange a walkthrough.
                </p>
              </div>

              {status === 'success' ? (
                <div className="mt-8 flex flex-col items-center rounded-2xl border border-[#7ED957]/30 bg-[#7ED957]/[0.06] p-8 text-center">
                  <CheckCircle2 className="h-14 w-14 text-[#7ED957]" />
                  <p className="mt-4 text-lg font-bold text-white">Thanks — your details have been received.</p>
                  <p className="mt-2 text-sm text-white/[0.52]">We'll be in touch shortly to arrange your walkthrough.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-white/[0.05] px-6 py-3 text-sm font-bold text-white transition hover:bg-white/[0.08]"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="full_name" className="mb-2 block text-sm font-semibold text-white/70">Full name *</label>
                      <input
                        id="full_name"
                        type="text"
                        name="full_name"
                        value={form.full_name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white/70">Email *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-white/70">Phone *</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="goals" className="mb-2 block text-sm font-semibold text-white/70">What are you looking to achieve?</label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={form.goals}
                      onChange={handleChange}
                      rows={4}
                      className={inputClass}
                      placeholder="Tell us about your audience, cohort, or goals (optional)"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-400">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#7ED957] px-7 py-4 text-sm font-bold text-[#0A0A0B] transition hover:bg-[#9FE264] disabled:opacity-50 sm:w-auto"
                  >
                    {status === 'submitting' ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                    ) : (
                      <><Send className="h-4 w-4" /> Send my details</>
                    )}
                  </button>
                </form>
              )}
            </>
          )}
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
