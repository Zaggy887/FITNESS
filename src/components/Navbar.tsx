import { ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { id: 'platform', label: 'Platform' },
  { id: 'student-life', label: 'Student life' },
  { id: 'universities', label: 'For universities' },
  { id: 'story', label: 'Our story' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = id === 'top' ? '/' : `/#${id}`;
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#0A0A0B]/[0.85] backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between">
        <button onClick={() => scrollTo('top')} className="flex min-h-11 items-center text-left" aria-label="Go to top">
          <img
            src="/strengthhub-logo.png"
            alt=""
            width={3360}
            height={630}
            className="block h-auto w-[190px] max-w-[60vw] sm:w-[220px]"
          />
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className="text-sm font-medium text-white/[0.58] transition-colors hover:text-white">
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="https://strengthhubonline.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#7ED957]/45 hover:bg-[#7ED957]/10 sm:inline-flex"
          >
            App demo <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-white/[0.07] bg-[#0A0A0B] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className="rounded-xl px-3 py-3 text-left text-sm font-semibold text-white/75 hover:bg-white/[0.05] hover:text-white">
                {link.label}
              </button>
            ))}
            <a
              href="https://strengthhubonline.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#7ED957] px-4 py-3 text-sm font-bold text-[#0A0A0B]"
            >
              Open app demo <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
