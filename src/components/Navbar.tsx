import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      let maxVisible = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (section.id === 'pricing') {
          const referralElement = document.querySelector('#referral');
          if (referralElement) {
            const referralRect = referralElement.getBoundingClientRect();
            if (referralRect.top < window.innerHeight / 2 && referralRect.bottom > window.innerHeight / 2) {
              current = 'referral';
              maxVisible = Infinity;
              return;
            }
          }
        }

        if (visible > maxVisible) {
          maxVisible = visible;
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = id === 'referral'
      ? document.querySelector('#referral')
      : document.getElementById(id);

    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const _navLink = (id: string, label: string) => {
    const base = `transition-colors ${
      activeSection === id
        ? "text-[#A3E635] font-medium"
        : "text-white hover:text-[#A3E635]"
    }`;

    return (
      <button onClick={() => scrollToSection(id)} className={base}>
        {label}
      </button>
    );
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex flex-col leading-none">
          <span className="text-white font-black uppercase tracking-tight text-lg sm:text-2xl md:text-3xl">
            STRENGTH
          </span>
          <span className="text-white font-black italic uppercase tracking-tight text-base sm:text-xl md:text-2xl -mt-1">
            HUB
            <sup className="text-white text-[9px] sm:text-xs font-bold not-italic align-super ml-0.5">
              ONLINE
            </sup>
          </span>
        </a>

        <a
          href="https://strengthhubonline.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 sm:px-5 py-2 rounded-full text-white/90 text-xs sm:text-sm font-medium
                     border border-white/30
                     bg-white/10 backdrop-blur-md
                     hover:bg-white/20 hover:border-white/50
                     transition-all duration-300"
        >
          View Demo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
