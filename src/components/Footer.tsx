import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/[0.06] text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:justify-between gap-10 md:gap-0">
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="text-white font-black uppercase tracking-tight text-2xl">STRENGTH</span>
              <span className="text-white font-black italic uppercase tracking-tight text-xl -mt-1">
                HUB<sup className="text-white text-xs font-bold not-italic align-super ml-0.5">ONLINE</sup>
              </span>
            </div>
            <p className="text-white/25 text-sm max-w-xs leading-relaxed">
              The enterprise fitness platform for universities and sports organisations worldwide.
            </p>
          </div>

          <div className="space-y-5">
            <h4 className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em]">Get in Touch</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:info@strengthhubonline.com"
                className="flex items-center gap-2.5 text-white/35 hover:text-white/70 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 shrink-0" />
                info@strengthhubonline.com
              </a>
              <a
                href="tel:0435754525"
                className="flex items-center gap-2.5 text-white/35 hover:text-white/70 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 shrink-0" />
                0435 754 525
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.05] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/20 uppercase tracking-[0.15em]">
          <span>© {new Date().getFullYear()} StrengthHubOnline. All rights reserved.</span>
          <span>Enterprise Fitness Platform</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
