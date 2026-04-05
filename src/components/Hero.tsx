import { useEffect, useState } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const backgroundImages = [
    "/Background_2.jpg",
    "/Background_3.jpg",
    "/Background_1.jpg",
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white font-sans">
      {/* Background slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, index) => {
          let backgroundPosition = "center center";

          if (isMobile && index === 2) {
            backgroundPosition = "68% center";
          }

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url("${img}")`,
                backgroundSize: "cover",
                backgroundPosition,
                backgroundRepeat: "no-repeat",
              }}
            />
          );
        })}

        {/* Top cinematic overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Strong dark fade into lower section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black" />

        {/* Extra dark lower block like reference */}
        <div className="absolute bottom-0 left-0 right-0 h-[42%] bg-black" />
      </div>

      {/* Header / Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="/" className="shrink-0">
            <div className="leading-none">
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                ELITE
              </div>
              <div className="-mt-1 flex items-start gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold italic tracking-tight">
                  PHYSIQUES
                </span>
                <span className="mt-1 text-[10px] sm:text-xs font-semibold tracking-[0.18em] text-white/80">
                  HQ
                </span>
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-white/90">
            <a href="#home" className="relative text-white">
              Home
              <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-white/80" />
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#transformations" className="hover:text-white transition-colors">
              Transformations
            </a>
            <a href="#program" className="hover:text-white transition-colors">
              Elite Program
            </a>
            <a href="#nutrition" className="hover:text-white transition-colors">
              Nutrition
            </a>
            <a href="#blog" className="hover:text-white transition-colors">
              Blog
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact Us
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.62a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      {/* Main hero content */}
      <div className="relative z-10 flex min-h-screen items-end justify-center px-6 pb-16 pt-32 text-center sm:pb-20 lg:pb-24">
        <div className="w-full max-w-5xl">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              Personal Training Studio in{" "}
              <span className="block text-[#8C8267]">Elwood</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-8 text-white sm:text-xl">
              Expert trainers in body composition, dedicated to transforming
              physiques and changing lives with private{" "}
              <span className="text-[#8C8267] underline underline-offset-4">
                1-on-1 training in Elwood
              </span>
              . Also proudly supporting clients across{" "}
              <span className="text-[#8C8267] underline underline-offset-4">
                Elsternwick, Brighton, St Kilda, Balaclava
              </span>{" "}
              and surrounding suburbs.
            </p>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex min-w-[280px] items-center justify-center bg-[#2E3A33] px-8 py-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#38453d]"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google review badge */}
      <div className="absolute bottom-6 left-4 z-20 sm:left-6">
        <div className="flex w-[220px] items-center gap-4 rounded-2xl bg-white px-4 py-4 text-black shadow-2xl">
          <div className="flex-1">
            <div className="text-4xl font-semibold leading-none text-[#4285F4]">
              G
            </div>
            <div className="mt-2 text-[14px] font-bold">5.0 ⭐⭐⭐⭐⭐</div>
            <div className="mt-1 text-sm text-black/65">82 reviews</div>
          </div>
          <button
            className="self-start text-lg leading-none text-black/40"
            aria-label="Close reviews badge"
          >
            ×
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;