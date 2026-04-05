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
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
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

        {/* overlays */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
        <div className="absolute bottom-0 left-0 right-0 h-[42%] bg-black" />
      </div>

      {/* Content only, no duplicate nav */}
      <div className="relative z-10 flex min-h-screen items-end justify-center px-6 pb-16 pt-32 text-center sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
        <div className="w-full max-w-5xl">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Personal Training <br />
              Studio in
              <span className="block text-[#8C8267]">Elwood</span>
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-lg font-semibold leading-8 text-white sm:text-xl">
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
                className="inline-flex min-w-[280px] items-center justify-center bg-[#2F3A35] px-8 py-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#39453f]"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Review card */}
      <div className="absolute bottom-6 left-4 z-20 sm:left-6">
        <div className="flex w-[220px] items-start justify-between rounded-2xl bg-white px-5 py-4 text-black shadow-2xl">
          <div>
            <div className="text-4xl font-semibold leading-none text-[#4285F4]">
              G
            </div>
            <div className="mt-3 text-[15px] font-bold">5.0 ⭐⭐⭐⭐⭐</div>
            <div className="mt-1 text-sm text-black/65">82 reviews</div>
          </div>
          <button
            aria-label="Close reviews badge"
            className="text-xl leading-none text-black/40"
          >
            ×
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;