import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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

    window.addEventListener('scroll', handleScroll);
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

  const linkClass = (id: string) =>
    `text-sm font-light tracking-wide transition-colors ${
      activeSection === id
        ? 'text-white border-b border-white pb-0.5'
        : 'text-white/80 hover:text-white'
    }`;

  const mobileLinkClass = (id: string) =>
    `text-white text-xl font-light tracking-widest uppercase transition-colors hover:text-white/70 ${
      activeSection === id ? 'border-b border-white pb-0.5' : ''
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex flex-col leading-none">
          <span className="text-white font-black text-xl tracking-tight uppercase">YTC</span>
          <span className="text-white font-black text-xl tracking-tight uppercase">FITNESS</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('hero')} className={linkClass('hero')}>Home</button>
          <button onClick={() => scrollToSection('about')} className={linkClass('about')}>About</button>
          <button onClick={() => scrollToSection('process')} className={linkClass('process')}>Transformations</button>
          <button onClick={() => scrollToSection('universities')} className={linkClass('universities')}>Elite Program</button>
          <button onClick={() => scrollToSection('articles')} className={linkClass('articles')}>Nutrition</button>
          <button onClick={() => scrollToSection('pricing')} className={linkClass('pricing')}>Blog</button>
          <button onClick={() => scrollToSection('contact')} className={linkClass('contact')}>Contact Us</button>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
            <Instagram size={18} />
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-black/90 backdrop-blur-lg transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-white/70 transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        <div className="h-full flex flex-col items-center justify-center space-y-8 px-6">
          <button onClick={() => scrollToSection('hero')} className={mobileLinkClass('hero')}>Home</button>
          <button onClick={() => scrollToSection('about')} className={mobileLinkClass('about')}>About</button>
          <button onClick={() => scrollToSection('process')} className={mobileLinkClass('process')}>Transformations</button>
          <button onClick={() => scrollToSection('universities')} className={mobileLinkClass('universities')}>Elite Program</button>
          <button onClick={() => scrollToSection('articles')} className={mobileLinkClass('articles')}>Nutrition</button>
          <button onClick={() => scrollToSection('pricing')} className={mobileLinkClass('pricing')}>Blog</button>
          <button onClick={() => scrollToSection('contact')} className={mobileLinkClass('contact')}>Contact Us</button>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
            <Instagram size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
