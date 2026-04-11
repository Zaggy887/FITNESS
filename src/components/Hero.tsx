import { useEffect, useState } from "react";
import { Instagram, X } from "lucide-react";

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
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => {
          let backgroundPosition = "center";
          if (index === 2 && isMobile) backgroundPosition = "70% center";

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url("${img}")`,
                backgroundSize: "cover",
                backgroundPosition,
                backgroundRepeat: "no-repeat",
                filter: "brightness(0.45)",
              }}
            />
          );
        })}

        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/15 to-black/45" />
      </div>

      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-10">
          <a href="#" className="leading-none">
            <div className="text-[34px] font-extrabold tracking-tight uppercase">
              <span className="block">ELITE</span>
              <span className="flex items-start gap-1">
                <span>PHYSIQUES</span>
                <span className="mt-1 text-[10px] font-semibold tracking-wider">
                  HQ
                </span>
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-[15px] font-medium text-white/90 lg:flex">
            <a href="#" className="border-b border-white pb-1">
              Home
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#transformations" className="hover:text-white">
              Transformations
            </a>
            <a href="#program" className="hover:text-white">
              Elite Program
            </a>
            <a href="#nutrition" className="hover:text-white">
              Nutrition
            </a>
            <a href="#blog" className="hover:text-white">
              Blog
            </a>
            <a href="#contact" className="hover:text-white">
              Contact Us
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <Instagram size={18} strokeWidth={2} />
            </a>
          </nav>
        </div>
      </header>

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="h-[56vh] sm:h-[58vh] lg:h-[60vh]" />

        <div className="flex-1 bg-black px-6 pb-16 pt-10 sm:px-8 sm:pt-14 lg:px-10 lg:pt-16">
          <div className="mx-auto max-w-[900px] text-center">
            <h1 className="text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-[72px]">
              <span className="block">Personal Training Studio in</span>
              <span className="block text-[#7A725E]">Elwood</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[760px] text-base font-semibold leading-8 text-white/95 sm:text-xl">
              Expert trainers in body composition, dedicated to transforming
              physiques and changing lives with private{" "}
              <span className="text-[#7A725E]">1-on-1 training in Elwood</span>.
              Also proudly supporting clients across{" "}
              <span className="text-[#7A725E]">
                Elwood, Elsternwick, Brighton, St Kilda, Balaclava
              </span>{" "}
              and surrounding suburbs.
            </p>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex min-w-[290px] items-center justify-center bg-[#243129] px-8 py-5 text-lg font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-5 z-30 w-[210px] rounded-2xl bg-white p-4 text-black shadow-2xl sm:left-8">
        <button className="absolute right-2 top-2 text-gray-500 hover:text-black">
          <X size={16} />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-[#4285F4] shadow">
            G
          </div>
          <div>
            <div className="text-3xl font-bold leading-none">5.0</div>
            <div className="mt-1 text-[22px] leading-none text-[#fbbc05]">
              ★★★★★
            </div>
            <div className="mt-2 text-sm text-gray-600">82 reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;