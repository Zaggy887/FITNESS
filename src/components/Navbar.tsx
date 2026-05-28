import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const el = id === 'referral'
      ? document.querySelector('#referral')
      : document.getElementById(id);

    if (!el) return;

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      setIsMenuOpen(false);
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 350);
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLink = (id: string, label: string, mobile = false) => {
    const base = mobile
      ? "text-white text-lg font-light hover:text-[#A3E635] transition-colors"
      : `transition-colors ${
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
          <span className="text-white font-black uppercase tracking-tight text-xl sm:text-2xl md:text-3xl">
            STRENGTH
          </span>
          <span className="text-white font-black italic uppercase tracking-tight text-lg sm:text-xl md:text-2xl -mt-1">
            HUB
            <sup className="text-white text-[10px] sm:text-xs font-bold not-italic align-super ml-0.5">
              ONLINE
            </sup>
          </span>
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 sm:px-5 py-2 rounded-full text-white/90 text-sm font-medium
                       border border-white/30
                       bg-white/10 backdrop-blur-md
                       hover:bg-white/20 hover:border-white/50
                       transition-all duration-300"
          >
            Contact Us
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-white hover:text-[#A3E635] transition-colors p-1"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-50 bg-black/90 backdrop-blur-lg transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-[#A3E635] transition-colors p-1"
          >
            <X size={28} />
          </button>
        </div>

        <div className="h-full flex flex-col items-center justify-center space-y-6 px-6">
          {navLink("about", "About", true)}
          {navLink("process", "Platform", true)}
          {navLink("coach", "Coach", true)}
          {navLink("testimonials", "Testimonials", true)}
          {navLink("contact", "Contact", true)}

          <button
            onClick={() => scrollToSection("contact")}
            className="mt-4 px-6 py-2.5 rounded-full text-black font-semibold
                       bg-[#A3E635] hover:bg-[#B8F04A]
                       transition-all duration-300"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
