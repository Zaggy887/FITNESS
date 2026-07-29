import { ExternalLink, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.07] bg-[#0A0A0B] py-10 text-white">
      <div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black uppercase tracking-[-0.04em] text-white">STRENGTH</span>
            <span className="-mt-0.5 text-lg font-black italic uppercase tracking-[-0.04em] text-white">
              HUB<sup className="ml-0.5 align-super text-[8px] font-bold not-italic tracking-normal text-[#7ED957]">ONLINE</sup>
            </span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/[0.38]">A fitness and wellbeing platform designed around Australian university students.</p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/50 sm:flex-row sm:gap-6">
          <a href="mailto:info@strengthhubonline.com" className="inline-flex items-center gap-2 transition hover:text-white"><Mail className="h-4 w-4" /> info@strengthhubonline.com</a>
          <a href="tel:0435754525" className="inline-flex items-center gap-2 transition hover:text-white"><Phone className="h-4 w-4" /> 0435 754 525</a>
          <a href="https://strengthhubonline.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">App demo <ExternalLink className="h-4 w-4" /></a>
        </div>
      </div>

      <div className="container mt-8 border-t border-white/[0.06] pt-6 text-xs text-white/25">
        © {new Date().getFullYear()} StrengthHub Online. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
