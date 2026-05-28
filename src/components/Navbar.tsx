import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350);
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { id: 'process', label: 'Platform' },
    { id: 'features', label: 'Features' },
    { id: 'coach', label: 'Team' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex flex-col leading-none">
          <span className="text-white font-black uppercase tracking-tight text-xl sm:text-2xl">
            STRENGTH
          </span>
          <span className="text-white font-black italic uppercase tracking-tight text-lg sm:text-xl -mt-1">
            HUB
            <sup className="text-white text-[10px] font-bold not-italic align-super ml-0.5">
              ONLINE
            </sup>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-white/40 hover:text-white text-sm font-medium transition-colors uppercase tracking-[0.08em]"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-4 sm:px-5 py-2 text-sm font-semibold text-black bg-[#A3E635] hover:bg-[#B8F04A] transition-colors uppercase tracking-[0.08em] hidden sm:inline-flex"
          >
            Request a Demo
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-white/60 hover:text-white transition-colors p-1"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-black transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute top-4 right-4 sm:right-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white/50 hover:text-white transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        <div className="h-full flex flex-col items-center justify-center space-y-7 px-6">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-white/55 text-xl font-light hover:text-white transition-colors tracking-[0.05em]"
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => scrollToSection('contact')}
            className="mt-6 px-8 py-3.5 text-sm font-bold text-black bg-[#A3E635] hover:bg-[#B8F04A] transition-colors uppercase tracking-[0.12em]"
          >
            Request a Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
